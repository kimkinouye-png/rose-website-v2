import { useState } from 'react';
import RoseLogo from './RoseLogo';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSkip: () => void;
  onComplete: (profile: { giver: string; method: string; identity: string }) => void;
}

const GIVERS = ['Manager', 'Peer', 'Skip-level', 'Executive'];
const METHODS = ['Performance review', '1:1 or check-in', 'In a group setting', 'In passing'];

export default function OnboardingModal({ isOpen, onClose, onSkip, onComplete }: OnboardingModalProps) {
  const [giver, setGiver] = useState('');
  const [method, setMethod] = useState('');
  const [identity, setIdentity] = useState('');

  if (!isOpen) return null;

  const canSubmit = !!giver && !!method;

  const handleSubmit = () => {
    if (!canSubmit) return;
    onComplete({ giver, method, identity });
  };

  const pillClass = (isSelected: boolean) =>
    `px-4 py-2.5 text-sm rounded-md border transition-all ${
      isSelected
        ? 'bg-[#C9A14A] border-[#C9A14A] text-[#2B1A2E]'
        : 'bg-transparent border-[#8B5A6B]/50 text-[#D9B8C0] hover:bg-[#8B5A6B]/15 hover:border-[#C9A14A] hover:text-[#F5EAE6]'
    }`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B1A2E]/80 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
    >
      <div className="bg-[#3D2640] border border-[#8B5A6B]/20 rounded-2xl max-w-[520px] w-full p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-[#8B5A6B] hover:text-[#F5EAE6] text-2xl leading-none transition-colors"
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-3">
            <RoseLogo size="chat" variant="dark" />
          </div>
          <h2
            id="onboarding-title"
            className="mb-2 text-[#F5EAE6]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '24px' }}
          >
            Before we start
          </h2>
          <p className="text-[14px] text-[#D9B8C0] leading-relaxed">
            A bit of context helps Rose be more precise. Nothing here is stored or shared.
          </p>
        </div>

        <div className="space-y-5">
          {/* Who gave the feedback */}
          <div>
            <label className="block text-[14px] font-medium mb-3 text-[#F5EAE6]">
              Who gave the feedback?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {GIVERS.map((g) => (
                <button key={g} type="button" onClick={() => setGiver(g)} className={pillClass(giver === g)}>
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* How was it given */}
          <div>
            <label className="block text-[14px] font-medium mb-3 text-[#F5EAE6]">
              How was it given?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {METHODS.map((m) => (
                <button key={m} type="button" onClick={() => setMethod(m)} className={pillClass(method === m)}>
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Identity textarea */}
          <div>
            <label className="block text-[14px] font-medium mb-2 text-[#F5EAE6]">
              Anything about your identity that feels relevant?{' '}
              <span className="text-[#8B5A6B] font-normal">(Optional)</span>
            </label>
            <textarea
              value={identity}
              onChange={(e) => setIdentity(e.target.value)}
              placeholder="e.g. woman in engineering, first-gen professional, queer, person of color. Share whatever you want Rose to know"
              rows={3}
              className="w-full px-4 py-3 bg-[#2B1A2E] border border-[#8B5A6B]/50 rounded-md text-[14px] text-[#F5EAE6] placeholder:text-[#8B5A6B] focus:outline-none focus:border-[#C9A14A] resize-none transition-colors"
            />
            <p className="text-[12px] text-[#8B5A6B] mt-2 leading-snug">
              This helps Rose catch bias patterns specific to your experience.
              <br />
              You don't have to share anything.
            </p>
          </div>
        </div>

        {/* Footer buttons */}
        <div className="mt-7 flex gap-3">
          <button
            type="button"
            onClick={onSkip}
            className="flex-1 px-6 py-3 bg-transparent border border-[#8B5A6B]/60 text-[#D9B8C0] rounded-lg hover:bg-[#8B5A6B]/15 hover:text-[#F5EAE6] transition-all"
          >
            Skip for now
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit}
            className={`flex-1 px-6 py-3 rounded-lg transition-all text-[#2B1A2E] ${
              canSubmit
                ? 'bg-[#C9A14A] hover:bg-[#B89140] hover:shadow-lg'
                : 'bg-[#C9A14A]/40 cursor-not-allowed'
            }`}
          >
            Let's go
          </button>
        </div>
      </div>
    </div>
  );
}
