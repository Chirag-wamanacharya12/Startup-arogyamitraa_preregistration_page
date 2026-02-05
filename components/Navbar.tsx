'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-[60] bg-[#070d14]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-extrabold tracking-wide logo-gradient cursor-pointer">
          Arogyamitraaa
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link href="/care-standards" className="hover:text-teal-400 transition">Care Standards</Link>
          <Link href="/how-it-works" className="hover:text-teal-400 transition">How It Works</Link>
          <Link href="/features" className="hover:text-teal-400 transition">Features</Link>
          <Link href="/about" className="hover:text-teal-400 transition">About</Link>
          <Link href="/preregister" className="hover:text-teal-400 transition">Preregister</Link>

          {/* CTA */}
          <Link href="/notify"
            className="ml-6 px-6 py-2.5 rounded-xl bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-black font-semibold shadow-lg hover:scale-105 transition">
            Notify Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:text-white hover:bg-white/10 transition z-50 relative"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
            <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-40 transition-visibility duration-300 ${open ? 'visible' : 'invisible delay-300'}`}
        aria-hidden={!open}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[75vw] max-w-xs bg-[#0b1623] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-label="Navigation"
        >
          <div className="flex flex-col pt-24 px-6 pb-6 space-y-6 bg-[#0b1623] rounded-bl-lg">
            <Link onClick={() => setOpen(false)} href="/care-standards" className="text-lg font-medium text-slate-200 hover:text-teal-400 border-b border-white/5 pb-4">Care Standards</Link>
            <Link onClick={() => setOpen(false)} href="/how-it-works" className="text-lg font-medium text-slate-200 hover:text-teal-400 border-b border-white/5 pb-4">How It Works</Link>
            <Link onClick={() => setOpen(false)} href="/features" className="text-lg font-medium text-slate-200 hover:text-teal-400 border-b border-white/5 pb-4">Features</Link>
            <Link onClick={() => setOpen(false)} href="/about" className="text-lg font-medium text-slate-200 hover:text-teal-400 border-b border-white/5 pb-4">About</Link>
            <Link onClick={() => setOpen(false)} href="/preregister" className="text-lg font-medium text-slate-200 hover:text-teal-400 border-b border-white/5 pb-4">Preregister</Link>
            
            <div className="pt-2">
                <Link
                onClick={() => setOpen(false)}
                href="/notify"
                className="inline-flex w-full justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-black font-bold text-lg shadow-lg active:scale-95 transition-transform"
                >
                Notify Me
                </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
// C:\Users\Win11\Documents\trae_projects\preregister_page\app\preregister\page.tsx
