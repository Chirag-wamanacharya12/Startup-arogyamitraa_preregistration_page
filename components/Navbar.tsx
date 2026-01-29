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
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
          <Link href="/care-standards" className="hover:text-teal-400 transition">Care Standards</Link>
          <Link href="/how-it-works" className="hover:text-teal-400 transition">How It Works</Link>
          <Link href="/features" className="hover:text-teal-400 transition">Features</Link>
          <Link href="/about" className="hover:text-teal-400 transition">About</Link>
          <Link href="/preregister" className="hover:text-teal-400 transition">Preregister</Link>

          {/* CTA */}
          <Link href="/notify"
            className="ml-4 px-5 py-2 rounded-xl bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-black font-semibold shadow-lg hover:scale-105 transition">
            Notify Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:text-white hover:bg-white/10 transition"
        >
          <svg className={`h-6 w-6 ${open ? 'hidden' : 'block'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className={`h-6 w-6 ${open ? 'block' : 'hidden'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-[55] transition ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#0b1623] border-l border-white/10 shadow-xl transform transition-transform ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-label="Navigation"
        >
          <div className="px-5 py-6 space-y-4">
            <Link onClick={() => setOpen(false)} href="/care-standards" className="block text-slate-200 hover:text-teal-400">Care Standards</Link>
            <Link onClick={() => setOpen(false)} href="/how-it-works" className="block text-slate-200 hover:text-teal-400">How It Works</Link>
            <Link onClick={() => setOpen(false)} href="/features" className="block text-slate-200 hover:text-teal-400">Features</Link>
            <Link onClick={() => setOpen(false)} href="/about" className="block text-slate-200 hover:text-teal-400">About</Link>
            <Link onClick={() => setOpen(false)} href="/preregister" className="block text-slate-200 hover:text-teal-400">Preregister</Link>
            <Link
              onClick={() => setOpen(false)}
              href="/notify"
              className="mt-4 inline-flex w-full justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-black font-semibold shadow-lg"
            >
              Notify Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
// C:\Users\Win11\Documents\trae_projects\preregister_page\app\preregister\page.tsx
