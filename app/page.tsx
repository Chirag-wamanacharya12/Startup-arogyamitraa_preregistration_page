import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CountdownTimer from '@/components/CountdownTimer';
import Marquee, { MarqueeItem } from '@/components/Marquee';
import Link from 'next/link';

// Row 1: Core Care & Essentials
const marqueeRow1: MarqueeItem[] = [
  { text: 'Diet Plans', gradient: 'from-green-500 to-teal-600' },
  { text: 'Prescriptions', gradient: 'from-blue-400 to-purple-400' },
  { text: 'Appointment Booking', gradient: 'from-green-400 to-teal-500' },
  { text: 'Doctor Support', gradient: 'from-green-500 to-emerald-400' },
  { text: 'Telemedicine', gradient: 'from-purple-400 to-indigo-500' },
  { text: 'Video Consults', gradient: 'from-teal-400 to-blue-400' },
  { text: 'Live Chat', gradient: 'from-teal-400 to-green-500' },
  { text: 'Quick Tools', gradient: 'from-teal-400 to-blue-400' },
  { text: 'Health Tips', gradient: 'from-indigo-400 to-purple-400' },
];

// Row 2: Records, Data & Intelligence
const marqueeRow2: MarqueeItem[] = [
  { text: 'Health History', gradient: 'from-indigo-500 to-purple-500' },
  { text: 'Health Report', gradient: 'from-teal-400 to-blue-500' },
  { text: 'Secure Data', gradient: 'from-green-400 to-teal-500' },
  { text: 'Verified Doctors', gradient: 'from-blue-500 to-indigo-500' },
  { text: 'Smart Dashboard', gradient: 'from-indigo-500 to-purple-600' },
  { text: 'Digital Records', gradient: 'from-green-400 to-teal-400' },
  { text: 'AI Insights', gradient: 'from-blue-400 to-purple-500' },
  { text: 'Recommendations', gradient: 'from-cyan-400 to-blue-500' },
  { text: 'Reminders', gradient: 'from-teal-400 to-green-500' },
  { text: 'Easy Login', gradient: 'from-green-500 to-emerald-400' },
  { text: 'Multi User', gradient: 'from-blue-400 to-teal-400' },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white overflow-hidden pb-10 bg-[#070d14]">
      <Navbar />
      <Hero />
      <CountdownTimer />

      {/* Feature Chips Section */}
      <div className="w-full py-12 md:py-16 flex flex-col items-center">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Arogyamitraaa Brings Together</h2>
          <p className="text-slate-400 text-lg">A single platform designed to simplify everyday healthcare.</p>
        </div>

        <Marquee items={marqueeRow1} direction="left" />
        <Marquee items={marqueeRow2} direction="right" />
      </div>

      {/* Who This Is For Bridge */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 w-full">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-teal-500/30 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-3">For Individuals</h3>
            <p className="text-slate-400 leading-relaxed">
              Manage health, reports, and consultations in one place.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-teal-500/30 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-3">For Families</h3>
            <p className="text-slate-400 leading-relaxed">
              Track multiple members, reminders, and shared records.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-teal-500/30 transition duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-teal-500/20 text-teal-400 text-xs px-2 py-1 rounded-bl-lg font-bold">FUTURE</div>
            <h3 className="text-xl font-bold text-white mb-3">For Doctors</h3>
            <p className="text-slate-400 leading-relaxed">
              Verified access, patient context, and smarter workflows.
            </p>
          </div>
        </div>
      </div>

      {/* Principle-Based Trust */}
      <div className="w-full bg-white/5 py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-8">
            Built with privacy, security, and medical responsibility at its core
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-slate-300">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔒</span>
              <span className="font-medium">Data Encryption</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤝</span>
              <span className="font-medium">Consent-Based Access</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚕️</span>
              <span className="font-medium">Standards-Aligned Healthcare</span>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Creators */}
      <div className="w-full px-6 py-16 md:py-24 relative">
        {/* Background decorative orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-3">The Team</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">Meet the Creators</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">The people shaping a calmer, connected healthcare experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 — Chirag */}
            <div className="group relative rounded-3xl overflow-hidden">
              {/* Animated border glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-blue-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
              <div className="relative bg-[#0c1520] border border-white/10 rounded-3xl p-2 group-hover:border-white/0 transition-colors duration-500">
                {/* Image */}
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-teal-600/30 to-blue-600/30">
                  <img src="images/chirag.jpg" alt="Chirag Wamanacharya" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                {/* Content */}
                <div className="flex flex-col py-5 px-3">
                  <span className="inline-block w-fit text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-teal-500/15 text-teal-400 border border-teal-500/20 mb-3">Founder & Product Lead</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Chirag Wamanacharya</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">Designing systems that reduce anxiety and keep care continuous. Focused on creating healthcare tools that feel human-first.</p>
                  <div className="flex items-center gap-4">
                    <a href="https://tinyurl.com/chiragwamanacharya" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 text-teal-300 font-medium text-sm hover:from-teal-500/30 hover:to-blue-500/30 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                      LinkedIn
                    </a>
                    <span className="text-xs text-slate-600 font-medium">Since 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 — Shivani */}

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24 px-6 text-center w-full max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Primary CTA */}
          <div className="flex flex-col items-center gap-3 w-full md:w-auto">
            <Link href="/preregister" className="w-full md:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold text-lg hover:scale-105 transition shadow-lg shadow-teal-500/20">
              Preregister for Early Access
            </Link>
            <span className="text-sm text-slate-400">Explore full features before public launch</span>
          </div>

          {/* Secondary CTA */}
          <div className="flex flex-col items-center gap-3 w-full md:w-auto">
            <Link href="/notify" className="w-full md:w-auto px-10 py-4 rounded-xl bg-white/10 border border-white/10 text-white font-semibold text-lg hover:bg-white/20 transition">
              Notify Me
            </Link>
            <span className="text-sm text-slate-500">Get a one-time launch update</span>
          </div>
        </div>
      </div>

      {/* Footer Philosophy */}
      <footer className="w-full py-8 text-center border-t border-white/5 text-slate-500 text-sm">
        <p>Arogyamitraaa is being built with care — not rushed, not compromised.</p>
      </footer>
    </main>
  );
}
