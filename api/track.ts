import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

/**
 * POST /api/track
 *
 * Records one row per modal submission to Supabase `modal_submissions` for
 * analytics. Called from the v2 homepage onboarding modal. Anonymous: no
 * user identifiers, just the context the user picked. Identity free-text is
 * never stored; we only record whether the field was filled.
 *
 * Uses the service_role key server-side (never shipped to the client) so
 * inserts bypass RLS. Env vars are set in Vercel project settings.
 */

const GIVERS = new Set(['Manager', 'Peer', 'Skip-level', 'Executive']);
const METHODS = new Set([
  'Performance review',
  '1:1 or check-in',
  'In a group setting',
  'In passing',
]);
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  // Don't crash the build; surface at request time instead so logs are clear.
  console.warn('[track] SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set');
}

const supabase =
  supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!supabase) {
    return res.status(500).json({ error: 'Supabase not configured' });
  }

  try {
    // sendBeacon arrives with Content-Type "application/json" (we set it via
    // Blob) or occasionally as a raw Buffer. Normalize both shapes.
    let body: any = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ error: 'Invalid JSON' });
      }
    } else if (Buffer.isBuffer(body)) {
      try {
        body = JSON.parse(body.toString('utf8'));
      } catch {
        return res.status(400).json({ error: 'Invalid JSON' });
      }
    }

    const {
      session_id,
      source,
      giver,
      method,
      identity_provided,
    } = body ?? {};

    if (typeof session_id !== 'string' || !UUID_RE.test(session_id)) {
      return res.status(400).json({ error: 'Invalid session_id' });
    }
    if (source !== 'submit' && source !== 'skip') {
      return res.status(400).json({ error: 'Invalid source' });
    }
    if (giver != null && !GIVERS.has(giver)) {
      return res.status(400).json({ error: 'Invalid giver' });
    }
    if (method != null && !METHODS.has(method)) {
      return res.status(400).json({ error: 'Invalid method' });
    }

    const { error } = await supabase.from('modal_submissions').insert({
      session_id,
      source,
      giver: giver || null,
      method: method || null,
      identity_provided: !!identity_provided,
    });

    if (error) {
      console.error('[track] Supabase insert error:', error);
      return res.status(500).json({ error: 'Insert failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[track] handler error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
