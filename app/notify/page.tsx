'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Notify() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email)) {
        setError('Please enter a valid email address.');
        setLoading(false);
        return;
    }

    try {
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#070d14] text-white">
      <Navbar />
      <div className="pt-32 px-6 flex flex-col items-center justify-center min-h-[85vh] text-center pb-20">
        
        {/* Above-the-Fold */}
        <h1 className="text-5xl md:text-6xl pb-6 font-bold mb-6 logo-gradient">Launching Soon</h1>
        <div className="max-w-2xl mb-10 space-y-2">
            <p className="text-xl text-slate-300">
            Get a one-time notification when Arogyamitraaa goes live.
            </p>
            <p className="text-sm text-slate-500 font-medium bg-white/5 w-fit mx-auto px-3 py-1 rounded-full border border-white/5">
                ⚠️ This does not create an account or grant early access.
            </p>
        </div>

        {submitted ? (
            <div className="bg-white/5 p-10 rounded-2xl border border-teal-500/30 text-center animate-fade-in max-w-md w-full">
                <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🔔</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">You’re on the launch notification list</h2>
                <p className="text-slate-300 mb-8">
                    We’ll email you when Arogyamitraaa is officially live.
                </p>
                <div className="pt-6 border-t border-white/10">
                    <p className="text-sm text-slate-400 mb-3">Want early access instead?</p>
                    <Link href="/preregister" className="text-teal-400 hover:text-teal-300 font-medium transition flex items-center justify-center gap-2 group">
                        Preregister here <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        ) : (
            <div className="w-full max-w-md">
                {/* Value Block */}
                <div className="text-left bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
                    <p className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">By clicking Notify Me, you’ll receive:</p>
                    <ul className="space-y-3 text-slate-300 text-sm">
                        <li className="flex items-start gap-3">
                            <span className="text-teal-400">●</span>
                            <span>A launch announcement email</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-teal-400">●</span>
                            <span>A link to explore the live platform</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-teal-400">●</span>
                            <span>No follow-ups unless you choose to join</span>
                        </li>
                    </ul>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-3 mb-8" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-3 rounded-lg text-sm text-left">
                            {error}
                        </div>
                    )}
                    <input 
                        required
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email for launch notification" 
                        className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-teal-400 focus:outline-none text-white text-lg placeholder:text-slate-600 transition-colors"
                    />
                    <div className="space-y-2">
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full py-4 rounded-xl bg-white text-black text-lg font-bold hover:bg-slate-200 transition shadow-lg shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Submitting...' : 'Notify Me'}
                        </button>
                        <p className="text-xs text-slate-500">One email. That’s it.</p>
                    </div>
                </form>

                {/* Privacy & Cross-Link */}
                <div className="space-y-8">
                    <div className="text-xs text-slate-500">
                        We’ll only email you once at launch.<br/>
                        Your email is never shared or sold.
                    </div>

                    <div className="pt-8 border-t border-white/5">
                        <p className="text-slate-400 text-sm mb-2">Looking for early access?</p>
                        <Link href="/preregister" className="text-teal-400 hover:text-teal-300 transition text-sm flex items-center justify-center gap-1 group">
                            Preregister to explore the platform before public launch <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        )}
      </div>
    </main>
  );
}
