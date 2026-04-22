import { useState } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
// import OnboardingModal from './components/OnboardingModal'; // re-enable in chat redesign phase
// import ChatInterface from './components/ChatInterface';     // re-enable in chat redesign phase
import RoseLogo from './components/RoseLogo';

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  const handleGetStarted = () => {
    window.location.href = 'https://rose-website-tan.vercel.app/chat.html';
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
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <RoseLogo size="display" variant="dark" />
          <div className="flex items-center gap-8 text-sm text-[#D9B8C0]">
            <span>© 2026 Rose. Your feedback, decoded.</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">How to Rose</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
