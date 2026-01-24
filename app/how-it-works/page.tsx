import Navbar from '@/components/Navbar';

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-[#070d14] text-white selection:bg-teal-500/30">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 logo-gradient inline-block tracking-tight">
          Your Care Journey
        </h1>
        <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto">
          Designed to work for everyone — first-time users and regular patients alike.
        </p>
      </section>

      {/* The Journey Section - Vertical Timeline */}
      <section className="px-6 pb-20 max-w-3xl mx-auto">
        <div className="relative border-l border-white/10 ml-6 md:ml-10 pl-8 md:pl-16 py-4 space-y-20">
          
          {/* Step 1: Identity & Trust */}
          <div className="relative group">
            <div className="absolute -left-[41px] md:-left-[73px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#070d14] border-2 border-teal-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
              <span className="text-teal-400 text-sm font-bold">01</span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-white">Create Your Digital Health Identity</h3>
              <div className="h-1 w-12 bg-teal-500/50 rounded-full"></div>
              <p className="text-slate-300 leading-relaxed max-w-xl">
                This isn’t just a sign-up. It’s a secure, lifelong health profile that moves with you across consultations.
              </p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-3"></span>
                  Secure onboarding
                </li>
                <li className="flex items-center text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-3"></span>
                  One profile across consultations
                </li>
                <li className="flex items-center text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-3"></span>
                  Built for continuity
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2: Care Matching */}
          <div className="relative group">
            <div className="absolute -left-[41px] md:-left-[73px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#070d14] border-2 border-blue-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-pulse">
              <span className="text-blue-400 text-sm font-bold">02</span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-white">Right Care, Right Time</h3>
              <div className="h-1 w-12 bg-blue-500/50 rounded-full"></div>
              <p className="text-slate-300 leading-relaxed max-w-xl">
                Our system actively helps you find the right specialist. It’s structured doctor discovery, not random listings.
              </p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></span>
                  Intelligent doctor discovery
                </li>
                <li className="flex items-center text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></span>
                  Verified appointments
                </li>
                <li className="flex items-center text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></span>
                  AI-assisted matching
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3: Continuity */}
          <div className="relative group">
            <div className="absolute -left-[41px] md:-left-[73px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#070d14] border-2 border-green-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              <span className="text-green-400 text-sm font-bold">03</span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-white">Ongoing Care & Follow-ups</h3>
              <div className="h-1 w-12 bg-green-500/50 rounded-full"></div>
              <p className="text-slate-300 leading-relaxed max-w-xl">
                Healthcare doesn’t stop after one visit. Your history is preserved, and follow-ups are seamless.
              </p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3"></span>
                  Prescriptions never lost
                </li>
                <li className="flex items-center text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3"></span>
                  Long-term health timeline
                </li>
                <li className="flex items-center text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3"></span>
                  Seamless follow-ups
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      {/* Differentiation Block - System Integrity */}
      <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h4 className="text-white font-medium mb-2">Secure by Design</h4>
              <p className="text-sm text-slate-400">Built with privacy and compliance at the core. Your data is protected by national-grade standards.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h4 className="text-white font-medium mb-2">Smart Integrity</h4>
              <p className="text-sm text-slate-400">Designed to prevent misuse. Intelligent routing ensures genuine patients get priority.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h4 className="text-white font-medium mb-2">Inclusive Access</h4>
              <p className="text-sm text-slate-400">Clear typography and simple flows. Works for elderly users, rural families, and digital natives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Reassurance */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            You stay in control at every step.
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Doctors lead. Technology supports. Your data stays yours.
          </p>
          <a href="/features" className="text-teal-400 hover:text-teal-300 text-sm font-semibold tracking-wide transition">
            Explore the Platform &rarr;
          </a>
        </div>
      </section>

    </main>
  );
}
