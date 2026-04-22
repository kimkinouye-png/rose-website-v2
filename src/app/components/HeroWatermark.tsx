import { useEffect, useRef } from 'react';
import RoseLogo from './RoseLogo';

/**
 * Decorative Rose watermark for the hero feedback card.
 * - Scroll parallax: moves at ~0.25x scroll speed so the card feels layered.
 * - Ambient drift: subtle 14s CSS animation (translate + scale + opacity pulse).
 * - Respects prefers-reduced-motion: disables both effects.
 *
 * Must be rendered inside a relatively-positioned, overflow-hidden parent
 * (the card). Sits at z-0 so feedback cards with z-10 sit above it.
 */
export default function HeroWatermark() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    let ticking = false;

    const update = () => {
      const parent = el.parentElement;
      if (!parent) {
        ticking = false;
        return;
      }
      const rect = parent.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const cardCenter = rect.top + rect.height / 2;
      const delta = (cardCenter - viewportCenter) * -0.25;
      el.style.transform = `translate(-50%, calc(-50% + ${delta}px))`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes rose-watermark-drift {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.14; }
          50%      { transform: translate(-6px, -10px) scale(1.025); opacity: 0.17; }
        }
        .rose-watermark-inner {
          animation: rose-watermark-drift 14s ease-in-out infinite;
          will-change: transform, opacity;
        }
        @media (prefers-reduced-motion: reduce) {
          .rose-watermark-inner { animation: none; opacity: 0.14; }
        }
      `}</style>
      <div
        ref={ref}
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 z-0 pointer-events-none select-none"
        style={{ transform: 'translate(-50%, -50%)', willChange: 'transform' }}
      >
        <div className="rose-watermark-inner">
          <RoseLogo size="watermark" variant="dark" />
        </div>
      </div>
    </>
  );
}
