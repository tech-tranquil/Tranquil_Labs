export function HeroSectionLite() {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center justify-center overflow-hidden"
      style={{ background: "#06060f" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 10%, rgba(45,212,191,0.14) 0%, rgba(10,10,11,0.75) 55%, rgba(10,10,11,1) 100%)",
        }}
      />

      <div className="relative z-10 section-container text-center pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass border border-teal/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-teal" />
            <span className="text-xs font-bold uppercase tracking-widest text-teal">
              AI Innovation Company
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            Building Intelligent
            <span className="block gradient-text-teal">AI Systems</span>
            <span className="block text-slate-400 font-light text-3xl sm:text-5xl md:text-6xl mt-2">
              for Humans &amp; Organizations
            </span>
          </h1>

          <p className="hidden sm:block text-sm md:text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Tranquil Labs builds AI-powered products and intelligent software systems
            that help people and businesses harness the power of artificial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#tranquil-ai"
              className="group relative inline-flex items-center gap-2.5 bg-teal text-background px-8 py-4 rounded-xl font-bold text-base overflow-hidden"
            >
              Explore Tranquil AI
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2.5 glass border border-white/10 px-8 py-4 rounded-xl font-bold text-base hover:border-white/20 hover:bg-white/[0.04] transition-all overflow-hidden"
            >
              Start a Project
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-white">40k+</span>
              <span className="text-xs text-slate-500">Users</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-white">95%</span>
              <span className="text-xs text-slate-500">Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-white">&lt;80ms</span>
              <span className="text-xs text-slate-500">Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
