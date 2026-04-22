/**
 * Stub page for /research. Full content coming in a later brief.
 * Kept intentionally minimal so the link from HowItWorks doesn't 404
 * during parallel deploy testing.
 */
export default function Research() {
  return (
    <section className="min-h-screen bg-[#F5EAE6] px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <a
          href="/"
          className="text-sm text-[#8B5A6B] hover:text-[#2B1A2E] transition-colors"
        >
          ← Back to Rose
        </a>
        <h1 className="text-5xl tracking-tight text-[#2B1A2E] mt-8 mb-4">
          The research Rose draws on
        </h1>
        <p className="text-lg text-[#3D2640] leading-relaxed">
          Coming soon.
        </p>
      </div>
    </section>
  );
}
