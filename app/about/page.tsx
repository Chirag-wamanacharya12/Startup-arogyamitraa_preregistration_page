import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <main className="min-h-screen bg-[#070d14] text-white overflow-hidden selection:bg-teal-500/30">
      <Navbar />

      {/* Hero Section - Purpose Before Product */}
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-tight">
          Healthcare Without Barriers.
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
          Healthcare should not depend on where you live, how much you earn, or who you know.
        </p>
        
        <div className="w-24 h-1 bg-gradient-to-r from-teal-500/50 to-blue-500/50 mx-auto my-12 rounded-full"></div>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-lg font-medium tracking-wide">
          <div className="flex flex-col items-center gap-2">
            <span className="text-teal-400">Availability</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest">Always On</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-blue-400">Affordability</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest">Fair Costs</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-green-400">Accessibility</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest">For Everyone</span>
          </div>
        </div>
      </section>

      {/* The Three Pillars - Explained Like Policy */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Pillar 1 */}
          <div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition duration-500">
            <div className="h-12 w-1 bg-teal-500 mb-6 rounded-full opacity-60 group-hover:opacity-100 transition"></div>
            <h3 className="text-2xl font-semibold text-white mb-4">Availability</h3>
            <p className="text-slate-400 leading-relaxed">
              Doctors, data, and care when it matters — not when systems allow. We ensure healthcare is present in every moment it's needed.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition duration-500">
            <div className="h-12 w-1 bg-blue-500 mb-6 rounded-full opacity-60 group-hover:opacity-100 transition"></div>
            <h3 className="text-2xl font-semibold text-white mb-4">Affordability</h3>
            <p className="text-slate-400 leading-relaxed">
              Transparent, predictable healthcare costs without exploitation. We remove hidden barriers to make health a right, not a privilege.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition duration-500">
            <div className="h-12 w-1 bg-green-500 mb-6 rounded-full opacity-60 group-hover:opacity-100 transition"></div>
            <h3 className="text-2xl font-semibold text-white mb-4">Accessibility</h3>
            <p className="text-slate-400 leading-relaxed">
              Designed for first-time internet users as much as power users. Our platform speaks the language of the people, not just the system.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section - National Mission */}
      <section className="py-24 bg-white/[0.03] border-y border-white/5">
        <div className="px-6 max-w-5xl mx-auto text-center">
          <blockquote className="text-3xl md:text-5xl font-serif italic leading-snug text-slate-200 mb-8 opacity-90">
            "We are building the digital infrastructure that empowers every citizen with instant, equitable, and intelligent healthcare access."
          </blockquote>
          <p className="text-slate-500 uppercase tracking-widest text-sm font-semibold">
            Thinking beyond appointments. Thinking infrastructure.
          </p>
        </div>
      </section>

      {/* Mission Section - Active Building */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Active Mission</h2>
          <div className="h-1 w-20 bg-purple-500 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-5xl font-bold text-white/10">01</span>
            <h3 className="text-xl font-semibold text-white">Connecting</h3>
            <p className="text-slate-400">Patients to verified doctors instantly, removing geographical distance as a barrier to care.</p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-5xl font-bold text-white/10">02</span>
            <h3 className="text-xl font-semibold text-white">Supporting</h3>
            <p className="text-slate-400">Using AI as intelligent decision support for doctors and patients, never as a replacement for human judgment.</p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-5xl font-bold text-white/10">03</span>
            <h3 className="text-xl font-semibold text-white">Reducing</h3>
            <p className="text-slate-400">Friction, delay, and misinformation in the medical ecosystem through verified data.</p>
          </div>
        </div>
      </section>

      {/* Trust & Responsibility - Critical for Health */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-slate-900/50 rounded-3xl p-10 md:p-16 border border-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-8 text-white">Trust & Responsibility</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="font-semibold text-teal-400 mb-2">Privacy First</h4>
              <p className="text-sm text-slate-400">Data privacy is foundational, not an afterthought. Your health records belong to you.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">Assistive AI</h4>
              <p className="text-sm text-slate-400">AI is a tool to assist, not authoritative. It empowers doctors, it doesn't replace them.</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-400 mb-2">Human Centric</h4>
              <p className="text-sm text-slate-400">Human empathy and expertise remain the core of healing. We just make it reachable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing - Belief Driven */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          We’re building this for everyone.
        </h2>
        <p className="text-slate-400 mb-10">Healthcare deserves better systems. This is just the beginning.</p>
        <a href="/" className="inline-flex items-center text-teal-400 hover:text-teal-300 transition group">
          <span className="text-sm font-semibold tracking-wide">Return Home</span>
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </section>
    </main>
  );
}
