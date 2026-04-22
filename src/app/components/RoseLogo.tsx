interface RoseLogoProps {
  size?: 'nav' | 'chat' | 'display' | 'hero' | 'watermark';
  variant?: 'light' | 'dark';
}

export default function RoseLogo({ size = 'nav', variant = 'light' }: RoseLogoProps) {
  const sizes = {
    nav: 'text-2xl',           // 24px
    chat: 'text-[40px]',       // 40px
    display: 'text-[80px]',    // 80px
    hero: 'text-[120px]',      // 120px
    watermark: 'text-[260px]'  // 260px — background watermark use
  };

  const baseColor = variant === 'light' ? 'text-[#2B1A2E]' : 'text-white';
  const accentColor = 'text-[#8B5A6B]';

  return (
    <div className={`${sizes[size]} ${baseColor} tracking-tight inline-flex items-baseline`} style={{ fontFamily: 'serif' }}>
      <span>R</span>
      <span className={accentColor}>o</span>
      <span>se</span>
      <span className="text-[0.35em] ml-0.5 opacity-60 relative -top-[0.5em]">™</span>
    </div>
  );
}
