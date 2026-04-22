import HeroWatermark from './HeroWatermark';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="pt-32 pb-24 px-6 bg-[#2B1A2E]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C9A14A]/20 text-[#C9A14A] text-sm tracking-wide mb-6 rounded-full border border-[#C9A14A]/30">
              <div className="w-1.5 h-1.5 bg-[#C9A14A] rounded-full"></div>
              Free to use. Always.
            </div>
            <div className="text-sm tracking-wider text-[#C9A14A] mb-4">AI CAREER COACH</div>
            <h1 className="text-6xl lg:text-7xl mb-6 tracking-tight leading-[1.1] text-white">
              Your feedback, decoded.
            </h1>
            <p className="text-lg text-[#D9B8C0] mb-8 max-w-lg leading-relaxed">
              Paste the feedback you got. Rose tells you what it actually means and what, if anything, to do with it.
            </p>
            <div className="flex gap-4">
              <button
                onClick={onGetStarted}
                className="px-6 py-3.5 bg-[#C9A14A] text-[#2B1A2E] rounded-lg hover:bg-[#B89140] transition-all hover:shadow-xl hover:scale-105"
              >
                Decode my feedback
              </button>
              <button className="px-6 py-3.5 border border-[#8B5A6B] text-[#D9B8C0] rounded-lg hover:bg-[#3D2640] transition-all">
                See how it works
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-[#3D2640] rounded-3xl p-12 shadow-2xl overflow-hidden">
              {/* Rose watermark — parallax + ambient drift behind feedback cards */}
              <HeroWatermark />

              {/* Feedback Example Card */}
              <div className="relative z-10 bg-[#8B5A6B]/30 border border-[#8B5A6B]/50 rounded-2xl p-6 shadow-lg mt-8">
                <div className="text-sm text-[#C9A14A] mb-2">Fairness check</div>
                <p className="text-base text-[#F5EAE6] mb-4 leading-relaxed">
                  "That feedback has a tightrope pattern. Let me show you what's actually going on..."
                </p>
              </div>

              {/* User Message */}
              <div className="relative z-10 bg-[#2B1A2E] text-[#D9B8C0] border border-[#8B5A6B]/30 rounded-2xl p-4 mt-4 shadow-lg">
                <p className="text-base leading-relaxed">
                  "My boss just told me I need to be more vocal in meetings. But Sarah is super quiet and no one ever tells her that..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
