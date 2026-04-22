interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative pt-32 pb-24 px-6 bg-[#2B1A2E] overflow-hidden">
      {/* Back layer: Rose wordmark as atmospheric anchor.
          Baseline near the bottom of the hero, 47vw Georgia serif at 10% opacity.
          Midpoint of 's' sits at the viewport right edge; 'e' extends off-screen.
          Hidden below md to avoid visual clutter on small viewports. */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute z-0 pointer-events-none select-none whitespace-nowrap"
        style={{
          left: '35vw',
          bottom: '-5vw',
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: '47vw',
          color: '#F5EAE6',
          opacity: 0.1,
          letterSpacing: '-0.04em',
          lineHeight: 1,
        }}
      >
        Rose
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column: text content */}
          <div>
            <div
              className="text-[#C9A14A] mb-6"
              style={{ fontSize: '15px', letterSpacing: '1.5px' }}
            >
              AI CAREER COACH
            </div>
            <h1
              className="tracking-tight leading-[1.05] mb-6 text-[48px] md:text-[60px] lg:text-[76px] xl:text-[92px]"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                color: '#F5EAE6',
              }}
            >
              Not all<br />feedback is<br />created equal.
            </h1>
            <p
              className="text-[#D9B8C0] mb-8 max-w-xl leading-relaxed"
              style={{ fontSize: '22px' }}
            >
              Paste the feedback you got. Rose decodes what it actually means and what, if anything, to do with it.
            </p>
            <div className="inline-flex flex-col items-center">
              <button
                onClick={onGetStarted}
                className="min-w-[240px] px-10 py-5 bg-[#C9A14A] text-[#2B1A2E] rounded-lg hover:bg-[#B89140] transition-all hover:shadow-xl hover:scale-105"
                style={{ fontSize: '19px' }}
              >
                Decode my feedback
              </button>
              <span
                className="mt-4"
                style={{
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                  fontSize: '15px',
                  color: 'rgba(217, 184, 192, 0.7)',
                  letterSpacing: '0.5px',
                }}
              >
                Free, always.
              </span>
            </div>
          </div>

          {/* Right column: two floating conversation cards.
              Card 1 (user) on top at left edge of column.
              Card 2 (Rose) below, offset ~36px further right (staircase). */}
          <div className="relative">
            {/* Card 1: User message */}
            <div
              className="rounded-xl p-[18px] shadow-lg border max-w-[420px]"
              style={{
                backgroundColor: '#3D2640',
                borderColor: 'rgba(139, 90, 107, 0.4)',
              }}
            >
              <div
                className="mb-2"
                style={{
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                  fontSize: '12px',
                  color: '#8B5A6B',
                }}
              >
                You
              </div>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                  fontSize: '14px',
                  color: '#D9B8C0',
                }}
              >
                "My boss just told me I need to be more vocal in meetings. But Sarah is super quiet and no one ever tells her that..."
              </p>
            </div>

            {/* Card 2: Rose's diagnostic (staircase offset right, gap below Card 1) */}
            <div
              className="rounded-xl p-[18px] shadow-lg border mt-5 ml-[36px] max-w-[420px]"
              style={{
                backgroundColor: 'rgba(139, 90, 107, 0.35)',
                borderColor: 'rgba(139, 90, 107, 0.5)',
              }}
            >
              <div
                className="mb-2"
                style={{
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                  fontSize: '12px',
                  color: '#C9A14A',
                }}
              >
                Fairness check
              </div>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                  fontSize: '14px',
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
