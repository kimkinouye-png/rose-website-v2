import { useState } from 'react';
import RoseLogo from './RoseLogo';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (profile: any) => void;
}

export default function OnboardingModal({ isOpen, onClose, onComplete }: OnboardingModalProps) {
  const [role, setRole] = useState('');
  const [giver, setGiver] = useState('');
  const [method, setMethod] = useState('');
  const [identity, setIdentity] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    onComplete({ role, giver, method, identity });
  };

  const roles = ['Individual contributor', 'Manager', 'Senior leader', 'Executive'];
  const givers = ['Manager', 'Peer', 'Skip-level', 'Executive'];
  const methods = ['Performance review', '1:1', '360 review', 'In a meeting', 'Written feedback', 'Informal conversation'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B1A2E]/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8B5A6B] hover:text-[#2B1A2E] text-2xl"
        >
          ×
        </button>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <RoseLogo size="chat" variant="light" />
          </div>
          <h2 className="text-2xl mb-2 text-[#2B1A2E]">Before we start</h2>
          <p className="text-sm text-[#3D2640]">
            A bit of context helps Rose be more precise. Nothing here is stored or shared.
          </p>
        </div>

        <div className="space-y-6">
          {/* Your role */}
          <div>
            <label className="block text-sm mb-3 text-[#2B1A2E]">Your role</label>
            <div className="grid grid-cols-2 gap-2">
              {roles.map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                    role === r
                      ? 'bg-[#C9A14A] text-[#2B1A2E] border-[#C9A14A]'
                      : 'border-[#D9B8C0] text-[#3D2640] hover:border-[#C9A14A] hover:bg-[#F5EAE6]'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Who gave the feedback */}
          <div>
            <label className="block text-sm mb-3 text-[#2B1A2E]">Who gave the feedback?</label>
            <div className="grid grid-cols-2 gap-2">
              {givers.map((g) => (
                <button
                  key={g}
                  onClick={() => setGiver(g)}
                  className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                    giver === g
                      ? 'bg-[#C9A14A] text-[#2B1A2E] border-[#C9A14A]'
                      : 'border-[#D9B8C0] text-[#3D2640] hover:border-[#C9A14A] hover:bg-[#F5EAE6]'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* How was feedback given */}
          <div>
            <label className="block text-sm mb-3 text-[#2B1A2E]">How was the feedback given?</label>
            <div className="grid grid-cols-2 gap-2">
              {methods.map((m) => (
                <button
                  key={m}
                  onClick={() => setMethod(m)}
                  className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                    method === m
                      ? 'bg-[#C9A14A] text-[#2B1A2E] border-[#C9A14A]'
                      : 'border-[#D9B8C0] text-[#3D2640] hover:border-[#C9A14A] hover:bg-[#F5EAE6]'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Identity (optional) */}
          <div>
            <label className="block text-sm mb-2 text-[#2B1A2E]">
              Anything about your identity that feels relevant?{' '}
              <span className="text-[#8B5A6B]">(Optional)</span>
            </label>
            <textarea
              value={identity}
              onChange={(e) => setIdentity(e.target.value)}
              placeholder="e.g. woman in engineering, first-gen professional, queer, person of color. Share whatever you want Rose to know"
              className="w-full px-4 py-3 border border-[#D9B8C0] rounded-lg text-sm focus:outline-none focus:border-[#C9A14A] resize-none text-[#2B1A2E]"
              rows={3}
            />
            <p className="text-xs text-[#8B5A6B] mt-2">
              This helps Rose catch bias patterns specific to your experience. You don't have to share anything.
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-[#D9B8C0] text-[#3D2640] rounded-lg hover:bg-[#F5EAE6] transition-all"
          >
            Skip for now
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 px-6 py-3 bg-[#C9A14A] text-[#2B1A2E] rounded-lg hover:bg-[#B89140] transition-all disabled:opacity-50"
            disabled={!role || !giver || !method}
          >
            Let's go
          </button>
        </div>
      </div>
    </div>
  );
}
