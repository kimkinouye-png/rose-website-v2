/**
 * POST /api/track
 *
 * Records one row per modal submission to Supabase `modal_submissions` for
 * analytics. Called from the v2 homepage onboarding modal. Anonymous: no
 * user identifiers, just the context the user picked. Identity free-text is
 * never stored; we only record whether the field was filled.
 *
 * Node version is pinned via `engines.node` in package.json. All imports
 * happen inside the handler so module-load errors surface as regular HTTP
 * 500 with a useful body instead of FUNCTION_INVOCATION_FAILED.
 */

const GIVERS = new Set(['Manager', 'Peer', 'Skip-level', 'Executive']);
const METHODS = new Set([
  'Performance review',
  '1:1 or check-in',
  'In a group setting',
  'In passing',
]);
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export default async function handler(req: any, res: any) {
  try {
    console.log('[track] invoked', { method: req.method });

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed', method: req.method });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !supabaseKey) {
      console.error('[track] missing env vars', {
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseKey,
      });
      return res.status(500).json({ error: 'Server missing Supabase configuration' });
    }

    // Dynamic import so any module-load failure is catchable.
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    // sendBeacon arrives as application/json (we set the Blob type). Vercel
    // already parses JSON bodies, but fall back to manual parse just in case.
    let body: any = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ error: 'Invalid JSON' });
      }
    } else if (body && typeof body === 'object' && body.constructor === Buffer) {
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
      return res.status(500).json({ error: 'Insert failed', detail: error.message });
    }

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('[track] handler threw:', err);
    return res.status(500).json({
      error: 'Server error',
      detail: err?.message || String(err),
      stack: err?.stack?.split('\n').slice(0, 5).join(' | '),
    });
  }
}
