interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative pt-32 pb-24 px-6 bg-[#2B1A2E] overflow-hidden">
      {/* Back layer: Rose wordmark as atmosphere.
          Bleeds off the right edge so the midpoint of 's' sits at viewport right
          edge and 'e' extends off-screen. Georgia serif, 6% opacity.
          Hidden below md to avoid visual clutter on small viewports. */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute z-0 pointer-events-none select-none leading-none whitespace-nowrap"
        style={{
          left: '47vw',
          top: '25%',
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: '38vw',
          color: '#F5EAE6',
          opacity: 0.06,
          letterSpacing: '-0.04em',
        }}
      >
        Rose
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column: text content */}
          <div>
            <div className="text-sm tracking-wider text-[#C9A14A] mb-4">AI CAREER COACH</div>
            <h1
              className="text-white tracking-tight leading-[1.05] mb-6 text-[32px] md:text-[38px] lg:text-[42px]"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Not all feedback is<br />created equal.
            </h1>
            <p className="text-lg text-[#D9B8C0] mb-8 max-w-lg leading-relaxed">
              Paste the feedback you got. Rose decodes what it actually means and what, if anything, to do with it.
            </p>
            <div className="inline-flex flex-col items-center">
              <button
                onClick={onGetStarted}
                className="min-w-[176px] px-6 py-3.5 bg-[#C9A14A] text-[#2B1A2E] rounded-lg hover:bg-[#B89140] transition-all hover:shadow-xl hover:scale-105"
              >
                Decode my feedback
              </button>
              <span
                className="mt-2"
                style={{
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                  fontSize: '10px',
                  color: 'rgba(217, 184, 192, 0.65)',
                  letterSpacing: '0.5px',
                }}
              >
                Free, always.
              </span>
            </div>
          </div>

          {/* Right column: two floating conversation cards.
              Card 1 (user) on top at left edge of column.
              Card 2 (Rose) below, offset ~30px further right (staircase). */}
          <div className="relative">
            {/* Card 1: User message */}
            <div
              className="rounded-xl p-[18px] shadow-lg border"
              style={{
                backgroundColor: '#3D2640',
                borderColor: 'rgba(139, 90, 107, 0.4)',
              }}
            >
              <div
                className="mb-2"
                style={{
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                  fontSize: '10px',
                  color: '#8B5A6B',
                }}
              >
                You
              </div>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                  fontSize: '12px',
                  color: '#D9B8C0',
                }}
              >
                "My boss just told me I need to be more vocal in meetings. But Sarah is super quiet and no one ever tells her that..."
              </p>
            </div>

            {/* Card 2: Rose's diagnostic (staircase offset right, gap below Card 1) */}
            <div
              className="rounded-xl p-[18px] shadow-lg border mt-5 ml-[30px]"
              style={{
                backgroundColor: 'rgba(139, 90, 107, 0.35)',
                borderColor: 'rgba(139, 90, 107, 0.5)',
              }}
            >
              <div
                className="mb-2"
                style={{
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                  fontSize: '10px',
                  color: '#C9A14A',
                }}
              >
                Fairness check
              </div>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                  fontSize: '12px',
                  color: '#F5EAE6',
                }}
              >
                "That feedback has a tightrope pattern. Let me show you what's actually going on..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
