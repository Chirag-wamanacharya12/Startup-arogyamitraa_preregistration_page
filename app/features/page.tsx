import Navbar from '@/components/Navbar';

export default function Features() {
  const capabilities = [
    {
      title: "Access to Care",
      purpose: "Availability",
      narrative: "Reach the right care without friction.",
      borderColor: "border-teal-500/30",
      titleColor: "text-teal-400",
      features: [
        { name: "Appointment Booking", desc: "Structured access to verified doctors, without uncertainty." },
        { name: "Video Consults", desc: "Face-to-face medical advice from anywhere, securely." },
        { name: "Doctor Support", desc: "Continuous connection with your care team." },
        { name: "Live Chat", desc: "Immediate answers for non-emergency queries." }
      ]
    },
    {
      title: "Health Continuity",
      purpose: "Accessibility + Trust",
      narrative: "Healthcare memory matters more than healthcare speed.",
      borderColor: "border-blue-500/30",
      titleColor: "text-blue-400",
      features: [
        { name: "Digital Records", desc: "One secure health history, accessible when it matters." },
        { name: "Prescriptions", desc: "Digital, verifiable, and always available." },
        { name: "Health Reports", desc: "Clear, trackable insights into your medical status." }
      ]
    },
    {
      title: "Preventive & Ongoing Care",
      purpose: "Outcomes, not visits",
      narrative: "Helping you stay well, not just react.",
      borderColor: "border-green-500/30",
      titleColor: "text-green-400",
      features: [
        { name: "Wellness Tracking", desc: "Monitor your vitals and habits over time." },
        { name: "Diet Plans", desc: "Nutritional guidance tailored to your health profile." },
        { name: "Symptom Checker", desc: "Guidance to help you decide when to see a doctor." }
      ]
    },
    {
      title: "Safety & Responsiveness",
      purpose: "Seriousness signal",
      narrative: "Healthcare systems must respond when timing matters.",
      borderColor: "border-red-500/30",
      titleColor: "text-red-400",
      features: [
        { name: "Emergency Alerts", desc: "Instant notification to contacts and services in crisis." },
        { name: "AI Insights", desc: "Data-backed insights that support — not replace — medical decisions." }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#070d14] text-white selection:bg-teal-500/30">
      <Navbar />
      
      {/* Header Section */}
      <div className="pt-32 px-6 max-w-7xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          A Complete Digital Health System
        </h1>
        <p className="text-xl text-slate-400 font-light border-l-2 border-teal-500/50 pl-4">
          Every feature is designed to work together — not in isolation.
        </p>
      </div>

      {/* Capabilities Grid */}
      <div className="px-6 max-w-7xl mx-auto space-y-20 pb-20">
        {capabilities.map((cap, capIndex) => (
          <section key={capIndex} className="relative">
            {/* Capability Header */}
            <div className="mb-8 flex flex-col md:flex-row md:items-end gap-4 md:gap-8 border-b border-white/5 pb-4">
              <div>
                <span className={`text-xs font-bold tracking-widest uppercase ${cap.titleColor} mb-1 block`}>
                  {cap.purpose}
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  {cap.title}
                </h2>
              </div>
              <p className="text-slate-400 text-sm md:text-base md:max-w-md pb-1">
                {cap.narrative}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cap.features.map((feature, fIndex) => (
                <div 
                  key={fIndex} 
                  className={`p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-300 group`}
                >
                  <h3 className={`text-lg font-medium mb-3 ${cap.titleColor} opacity-90 group-hover:opacity-100`}>
                    {feature.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Trust Footer */}
      <div className="border-t border-white/5 bg-black/20 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-slate-500 text-sm">
          <div className="space-y-2">
            <h4 className="text-slate-300 font-semibold mb-1">System Integrity</h4>
            <p>Built for scale, compliance, and privacy-first design.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
            <div>
              <span className="block text-slate-400 font-medium mb-1">Doctor-Led Care</span>
              <span className="opacity-70">Medical oversight central to design</span>
            </div>
            <div>
              <span className="block text-slate-400 font-medium mb-1">Data Privacy</span>
              <span className="opacity-70">Your health data is yours alone</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
