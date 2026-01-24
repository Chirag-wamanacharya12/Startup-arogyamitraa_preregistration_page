import Navbar from '@/components/Navbar';

export default function CareStandards() {
  return (
    <main className="min-h-screen bg-[#070d14] text-white selection:bg-teal-500/30">
      <Navbar />

      {/* Hero: Doctor-Led, System-Governed */}
      <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
          Healthcare guided by standards, not shortcuts.
        </h1>
        <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
          Every interaction on Arogyamitraaa follows defined medical and ethical guidelines.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-24">
        
        {/* 1. Who Delivers Care */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 border-t border-white/5 pt-12">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Who Delivers Care</h2>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Verification First</p>
          </div>
          <div className="space-y-8">
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl">
              <h3 className="text-lg font-medium text-teal-400 mb-2">Verified Medical Professionals</h3>
              <p className="text-slate-400 leading-relaxed">
                Access is restricted to licensed practitioners. We verify credentials against national medical registries before any doctor can join the platform.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl">
              <h3 className="text-lg font-medium text-blue-400 mb-2">Domain Expertise</h3>
              <p className="text-slate-400 leading-relaxed">
                Patients are matched based on clinical need and specialist expertise, ensuring care is delivered by the right professional for the condition.
              </p>
            </div>
          </div>
        </section>

        {/* 2. How Quality Is Maintained */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 border-t border-white/5 pt-12">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Quality Assurance</h2>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Consistent Care</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-white font-medium border-l-2 border-teal-500/50 pl-3">Consultation Protocols</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Standardized intake and assessment flows ensure no critical symptom is overlooked.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-medium border-l-2 border-teal-500/50 pl-3">Prescription Discipline</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Strict guidelines on prescribing to prevent misuse and ensure patient safety.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-medium border-l-2 border-teal-500/50 pl-3">Follow-up Expectations</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Care doesn't end at the video call. System-driven follow-ups track recovery.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-medium border-l-2 border-teal-500/50 pl-3">Second Opinions</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Seamless pathways to escalate complex cases to senior specialists.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Role of Technology */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 border-t border-white/5 pt-12">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Role of Technology</h2>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Assistive AI</p>
          </div>
          <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 p-8 rounded-2xl">
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <span className="text-green-400 font-bold">✓</span>
                <span className="text-slate-300">AI organizes patient history and highlights risk factors.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-green-400 font-bold">✓</span>
                <span className="text-slate-300">AI suggests triage levels based on clinical guidelines.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-red-400 font-bold">✕</span>
                <span className="text-slate-300">AI <span className="text-white font-semibold">does not diagnose</span> or prescribe medication.</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-slate-500 italic border-t border-white/5 pt-4">
              "Doctors remain the final decision-makers in every clinical interaction."
            </p>
          </div>
        </section>

        {/* 4. Patient Safety & Accountability */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 border-t border-white/5 pt-12">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Safety & Ethics</h2>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Accountability</p>
          </div>
          <div className="space-y-6">
            <p className="text-slate-400 leading-relaxed">
              We replace the uncertainty of open marketplaces with the accountability of a managed system.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
               <div className="p-4 bg-white/[0.02] rounded-lg text-center">
                 <span className="block text-teal-400 font-semibold mb-1">Traceability</span>
                 <span className="text-xs text-slate-500">Every decision logged</span>
               </div>
               <div className="p-4 bg-white/[0.02] rounded-lg text-center">
                 <span className="block text-blue-400 font-semibold mb-1">Escalation</span>
                 <span className="text-xs text-slate-500">Clear paths for help</span>
               </div>
               <div className="p-4 bg-white/[0.02] rounded-lg text-center">
                 <span className="block text-red-400 font-semibold mb-1">Boundaries</span>
                 <span className="text-xs text-slate-500">No emergency risks</span>
               </div>
            </div>
          </div>
        </section>

        {/* Transition Statement */}
        <section className="border-t border-white/10 pt-16 text-center">
           <h3 className="text-2xl font-light text-white mb-4">
             "As doctors join Arogyamitraaa, they commit to these same standards."
           </h3>
           <p className="text-slate-500 text-sm">
             We are building a foundation of trust before building a directory of names.
           </p>
        </section>

      </div>
    </main>
  );
}
