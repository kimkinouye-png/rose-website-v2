interface CTAProps {
  onGetStarted: () => void;
}

export default function CTA({ onGetStarted }: CTAProps) {
  return (
    <section className="py-20 px-6 bg-[#F5EAE6]">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#2B1A2E] to-[#3D2640] rounded-3xl p-16 text-center text-white shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A14A]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8B5A6B]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight">
            Ready to decode what's really being said?
          </h2>
          <p className="text-xl mb-8 text-[#D9B8C0] max-w-2xl mx-auto">
            Get clarity on feedback that's confusing, unfair, or just doesn't sit right.
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-[#C9A14A] text-[#2B1A2E] text-lg rounded-lg hover:bg-[#B89140] transition-all hover:shadow-xl hover:scale-105"
          >
            Talk to Rose now
          </button>
        </div>
      </div>
    </section>
  );
}
