import { useState } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import OnboardingModal from './components/OnboardingModal';
// import ChatInterface from './components/ChatInterface'; // re-enable in chat redesign phase
import RoseLogo from './components/RoseLogo';

const LIVE_CHAT_URL = 'https://rose-website-tan.vercel.app/chat.html';

type Profile = { giver: string; method: string; identity: string };
type TrackSource = 'submit' | 'skip';

type TrackPayload = {
  session_id: string;
  source: TrackSource;
  giver: string | null;
  method: string | null;
  identity_provided: boolean;
};

// Build the handoff URL. `onboarded=1` tells production to suppress its own
// modal. `session_id` is passed through so Stage 2 output logging can join
// back to the context record. Profile fields hydrate production's userContext
// (giver -> source, method -> setting, identity -> identity).
function buildChatUrl(profile: Profile | null, sessionId: string): string {
  const url = new URL(LIVE_CHAT_URL);
  url.searchParams.set('onboarded', '1');
  url.searchParams.set('session_id', sessionId);
  if (profile) {
    if (profile.giver) url.searchParams.set('giver', profile.giver);
    if (profile.method) url.searchParams.set('method', profile.method);
    if (profile.identity) url.searchParams.set('identity', profile.identity);
  }
  return url.toString();
}

// Fire-and-forget analytics. sendBeacon is designed to survive page navigation
// so we don't have to await anything before redirecting. Any error is swallowed
// locally so tracking failures never block the user flow.
function trackSubmission(payload: TrackPayload): void {
  try {
    const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/track', blob);
    } else {
      // Fallback for the rare browser without sendBeacon
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // Never block user flow on tracking errors
  }
}

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  // Captured locally for future use; production reads its copy from URL params.
  const [, setUserProfile] = useState<Profile | null>(null);

  const handleGetStarted = () => {
    // Generate a fresh session_id each time the modal opens. If the user
    // dismisses (X) and re-opens, they get a new session, which is correct
    // since they haven't submitted yet.
    setSessionId(crypto.randomUUID());
    setShowOnboarding(true);
  };

  const handleModalClose = () => {
    // X button: dismiss back to homepage, no redirect, no tracking event.
    // (A dismissal is distinct from a skip; skip still means the user wants
    // to talk to Rose.)
    setShowOnboarding(false);
    setSessionId(null);
  };

  const handleSkip = () => {
    const id = sessionId ?? crypto.randomUUID();
    trackSubmission({
      session_id: id,
      source: 'skip',
      giver: null,
      method: null,
      identity_provided: false,
    });
    setShowOnboarding(false);
    setUserProfile({ giver: '', method: '', identity: '' });
    window.location.href = buildChatUrl(null, id);
  };

  const handleOnboardingComplete = (profile: Profile) => {
    const id = sessionId ?? crypto.randomUUID();
    trackSubmission({
      session_id: id,
      source: 'submit',
      giver: profile.giver || null,
      method: profile.method || null,
      identity_provided: profile.identity.trim().length > 0,
    });
    setUserProfile(profile);
    setShowOnboarding(false);
    window.location.href = buildChatUrl(profile, id);
  };

  return (
    <div className="min-h-screen bg-[#F5EAE6]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5EAE6]/80 backdrop-blur-md border-b border-[#D9B8C0]/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <RoseLogo size="nav" variant="light" />
          <div className="flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-[#3D2640] hover:text-[#2B1A2E] transition-colors">
              How it works
            </a>
            <button
              onClick={handleGetStarted}
              className="px-5 py-2.5 bg-[#C9A14A] text-[#2B1A2E] text-sm rounded-lg hover:bg-[#B89140] transition-all hover:shadow-lg"
            >
              Talk to Rose →
            </button>
          </div>
        </div>
      </nav>

      <Hero onGetStarted={handleGetStarted} />
      <HowItWorks />
      <CTA onGetStarted={handleGetStarted} />

      {/* Footer */}
      <footer className="bg-[#2B1A2E] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <RoseLogo size="display" variant="dark" />
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#D9B8C0]">
            <span>© 2026 Rose.<span className="hidden md:inline"> Your feedback, decoded.</span></span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">How to Rose</a>
          </div>
        </div>
      </footer>

      <OnboardingModal
        isOpen={showOnboarding}
        onClose={handleModalClose}
        onSkip={handleSkip}
        onComplete={handleOnboardingComplete}
      />
    </div>
  );
}
