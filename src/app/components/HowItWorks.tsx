export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'What this likely means',
      description: 'Rose reads between the lines. What was actually being said, and what were they really asking of you?'
    },
    {
      number: 2,
      title: 'Fairness check',
      description: 'Is this feedback fair? Rose looks for bias, microaggressions, vague language. Anything that\'s confusing or just not actionable.'
    },
    {
      number: 3,
      title: 'The reframe',
      description: 'Rose rewinds it. No loaded language, no bias. Something you can actually work with.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#F5EAE6]">
      <div className="max-w-7xl mx-auto">
        {/* How Rose Works */}
        <div className="text-center mb-16">
          <div className="text-sm tracking-wider text-[#8B5A6B] mb-4">HOW ROSE WORKS</div>
          <h2 className="text-5xl tracking-tight mb-4 text-[#2B1A2E]">Three steps. Every time.</h2>
          <p className="text-lg text-[#3D2640]">Rose doesn't just listen. She digs in.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => (
            <div key={step.number} className="group">
              <div className="w-16 h-16 bg-[#C9A14A] rounded-full flex items-center justify-center text-[#2B1A2E] text-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                {step.number}
              </div>
              <h3 className="text-2xl mb-3 tracking-tight text-[#2B1A2E]">{step.title}</h3>
              <p className="text-[#3D2640] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Research attribution */}
        <div className="flex flex-col items-center">
          <div className="w-[280px] h-px bg-[#8B5A6B]/30 mb-6" />
          <p className="text-xs text-[#3D2640] text-center mb-2">
            Grounded in research on feedback, leadership, and workplace equity.
          </p>
          <a
            href="/research"
            className="text-xs text-[#C9A14A] underline hover:text-[#B89140] transition-colors"
          >
            See the studies Rose draws on →
          </a>
        </div>
      </div>
    </section>
  );
}
