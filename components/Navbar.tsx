import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#070d14]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide logo-gradient cursor-pointer">
          Arogyamitraaa
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link href="#features" className="hover:text-teal-400 transition">Features</Link>
          <Link href="#how-it-works" className="hover:text-teal-400 transition">How It Works</Link>
          <Link href="#doctors" className="hover:text-teal-400 transition">Doctors</Link>
          <Link href="#about" className="hover:text-teal-400 transition">About</Link>
          <Link href="#contact" className="hover:text-teal-400 transition">Contact</Link>

          {/* CTA */}
          <Link href="#launch"
            className="ml-4 px-5 py-2 rounded-xl bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-black font-semibold shadow-lg hover:scale-105 transition">
            Notify Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
