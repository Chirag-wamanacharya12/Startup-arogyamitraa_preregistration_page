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

      <div className="w-full px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Meet the Creators</h2>
            <p className="text-slate-400 text-lg">The people shaping a calmer, connected healthcare experience.</p>
          </div>
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2">
            <div className="bg-white/5 rounded-2xl border border-white/10 hover:border-teal-500/30 transition p-6">
              <div className="w-full aspect-[4/5] mb-4 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 overflow-hidden" >
                <img src="images/chirag.jpg" alt="Chirag Wamanacharya" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="flex items-center gap-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-white">Chirag Wamanacharya</h3>
                  <p className="text-sm text-slate-400">Founder & Product Lead</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">Designing systems that reduce anxiety and keep care continuous.</p>
              <div className="mt-6 flex items-center justify-between">
                <a href="https://tinyurl.com/chiragwamanacharya" target="_blank" className="px-4 py-2 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition">Explore profile</a>
                <span className="text-xs text-slate-500">Joined 2025 </span>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl border border-white/10 hover:border-teal-500/30 transition p-6">
              <div className="w-full aspect-[4/5] mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 overflow-hidden" >
                <img src="images/shivani.jpg" alt="Shivani Patil" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="flex items-center gap-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-white">Shivani Patil</h3>
                  <p className="text-sm text-slate-400">Founding member & Lead Frontend Developer</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">Building secure, standards-aligned infrastructure for everyday care.</p>
              <div className="mt-6 flex items-center justify-between">
                <a href="https://tinyurl.com/shivanipatillinkedin" target="_blank" className="px-4 py-2 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition">Explore profile </a>
                <span className="text-xs text-slate-500">Joined 2025</span>
              </div>
            </div>
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
