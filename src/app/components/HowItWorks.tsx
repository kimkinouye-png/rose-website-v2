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
      description: 'Is this feedback fair? Rose looks for bias, microaggressions, vague language - anything that\'s confusing or just not actionable.'
    },
    {
      number: 3,
      title: 'The reframe',
      description: 'Rose rewinds it. No loaded language, no bias. Something you can actually work with.'
    }
  ];

  const biasPatterns = [
    {
      title: 'Microaggression recognition',
      description: 'Rose knows the patterns. From Derald Wing Sue\'s research on microaggressions to the specific language that shows up in biased performance reviews.'
    },
    {
      title: 'Intersectionality lens',
      description: 'Built on Kimberlé Crenshaw\'s framework, Rose understands that overlapping identities create compounding experiences that a single-axis lens will miss.'
    },
    {
      title: 'Gender & LGBTQ+ bias patterns',
      description: 'From Joan Williams\' four patterns of gender bias to Kenji Yoshino\'s covering framework, Rose recognizes when feedback is really a demand to shrink.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#F5EAE6]">
      <div className="max-w-7xl mx-auto">
        {/* How Rose Works */}
        <div className="text-center mb-16">
          <div className="text-xs tracking-wider text-[#8B5A6B] mb-4">HOW ROSE WORKS</div>
          <h2 className="text-5xl tracking-tight mb-4 text-[#2B1A2E]">Three steps. Every time.</h2>
          <p className="text-lg text-[#3D2640]">Rose doesn't just listen. She digs in.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
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

        {/* Why Rose Exists */}
        <div className="mb-12">
          <div className="text-xs tracking-wider text-[#8B5A6B] mb-4">WHY ROSE EXISTS</div>
          <h2 className="text-5xl tracking-tight mb-6 text-[#2B1A2E]">
            Not all feedback is<br />created equal.
          </h2>
          <p className="text-lg text-[#3D2640] max-w-2xl leading-relaxed">
            Too many people get feedback that's vague, unfair, or shaped by bias that can't carry the weight of it anyway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {biasPatterns.map((pattern, index) => (
            <div
              key={index}
              className="p-6 border-l-4 border-[#C9A14A] bg-white hover:bg-[#F5EAE6]/50 transition-all rounded-r-xl"
            >
              <h3 className="text-xl mb-2 tracking-tight text-[#2B1A2E]">{pattern.title}</h3>
              <p className="text-[#3D2640] text-sm leading-relaxed">{pattern.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-[#2B1A2E] leading-relaxed mb-4">
            We're grounded in real research on feedback, leadership, and workplace equity.
          </p>
          <p className="text-lg text-[#3D2640] leading-relaxed">
            Intersectionality. Microaggressions. Gender and racial bias patterns faced by women, people of color, and LGBTQ+ employees. Rose is on your side: direct, clear, and she's not going to tell you it's fine when it isn't.
          </p>
        </div>
      </div>
    </section>
  );
}
