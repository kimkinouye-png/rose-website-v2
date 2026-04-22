import { useState } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import OnboardingModal from './components/OnboardingModal';
// import ChatInterface from './components/ChatInterface'; // re-enable in chat redesign phase
import RoseLogo from './components/RoseLogo';

const LIVE_CHAT_URL = 'https://rose-website-tan.vercel.app/chat.html';

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  // Captured but not yet passed to chat. Chat redesign phase will pick this up.
  const [, setUserProfile] = useState<{ giver: string; method: string; identity: string } | null>(null);

  const handleGetStarted = () => {
    setShowOnboarding(true);
  };

  const handleModalClose = () => {
    // X button: dismiss back to homepage, no redirect.
    setShowOnboarding(false);
  };

  const handleSkip = () => {
    // Skip for now: advance to chat with an empty profile so users aren't blocked.
    setShowOnboarding(false);
    setUserProfile({ giver: '', method: '', identity: '' });
    window.location.href = LIVE_CHAT_URL;
  };

  const handleOnboardingComplete = (profile: { giver: string; method: string; identity: string }) => {
    setUserProfile(profile);
    setShowOnboarding(false);
    window.location.href = LIVE_CHAT_URL;
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
