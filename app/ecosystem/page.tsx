'use client';

import Navbar from '@/components/Navbar';

export default function Ecosystem() {
  const ecosystemRoles = [
    {
      title: "Members (Patients & General Users)",
      icon: "👥",
      description: "For members, Arogyamitraaa becomes a personal health companion.",
      details: [
        "Understand their health and track their journey.",
        "Access the right guidance at the right time.",
        "Transform healthcare from reactive to proactive.",
        "Gain a sense of control over their wellbeing."
      ]
    },
    {
      title: "Physicians", 
      icon: "⚕️",
      description: "For physicians, Arogyamitraaa is a force multiplier.",
      details: [
        "Reduces friction between doctor and patient.",
        "Organizes data and improves continuity of care.",
        "Enables better follow-ups and decision-making.",
        "Focus more on expertise, less on chaos."
      ]
    },
    {
      title: "Researchers",
      icon: "🔬",
      description: "For researchers, Arogyamitraaa is a living laboratory.",
      details: [
        "Access structured, real-world health patterns.",
        "Work with dynamic insights from real people.",
        "Shorten the gap between hypothesis and impact.",
        "Turn research into action, faster."
      ]
    },
    {
      title: "Practitioners (Alternative, Preventive & Holistic)",
      icon: "🌿",
      description: "For practitioners, Arogyamitraaa is a bridge between tradition and technology.",
      details: [
        "Present methods in a credible and organized way.",
        "Extend reach beyond local boundaries.",
        "Become part of a modern digital health ecosystem.",
        "Gain recognition for their discipline."
      ]
    },
    {
      title: "Service Providers (Labs, Pharmacies, Clinics, Diagnostics, etc.)",
      icon: "🏥",
      description: "For service providers, Arogyamitraaa is a trust engine.",
      details: [
        "Connect directly with people who need their services.",
        "Replace marketing noise with relevance.",
        "Become discoverable and dependable.",
        "Seamlessly integrate into the patient's journey."
      ]
    },
    {
      title: "Content Creators (Health Educators & Experts)",
      icon: "🎓",
      description: "For content creators, Arogyamitraaa is a credibility platform.",
      details: [
        "Give their knowledge a real-world purpose.",
        "Move from views to measurable outcomes.",
        "Become part of healthcare decisions and learning paths.",
        "Contribute to a system that changes health management."
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#070d14] text-white">
      <Navbar />
      <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
        
        {/* Page Intro Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 logo-gradient w-fit mx-auto leading-tight">
            The Arogyamitraaa Ecosystem
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Arogyamitraaa is not just a health platform — it's an ecosystem.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              It is built for every role that touches human health: from those who seek care, to those who provide it, to those who study it, to those who teach it. Each user enters with a different goal — but leaves with clarity, trust, and meaningful impact. Arogyamitraaa connects people, knowledge, and services into one intelligent health network designed to make healthcare more accessible, more personalized, and more powerful.
            </p>
          </div>
        </div>

        {/* Ecosystem Roles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {ecosystemRoles.map((role, index) => (
            <div 
              key={index}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-teal-500/30 transition-all duration-300 hover:bg-white/10 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {role.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {role.title}
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                {role.description}
              </p>
              <ul className="space-y-3 text-sm">
                {role.details.map((point, i) => (
                  <li 
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2"
                      style={{ animation: `breathe 2s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
                    ></span>
                    <span className="flex-1 text-slate-400 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-600/10 p-8 rounded-2xl border border-teal-500/20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Where Care Meets Intelligence
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Arogyamitraaa is where care meets intelligence, knowledge meets action, and people meet purpose.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Every role strengthens the other — members empower data, data empowers doctors, doctors empower research, and research empowers the future. This is not a tool for one type of user. It is a platform for everyone who believes healthcare can be smarter, kinder, and more connected.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}