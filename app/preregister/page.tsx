'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import PreregisterCountdown from '@/components/PreregisterCountdown';

export default function Preregister() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'patient',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const validatePhone = (phone: string) => {
    // Allows optional +91, followed by 10 digits. Spaces/dashes optional.
    // e.g., +91 98765 43210, 9876543210
    return /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/.test(phone.replace(/[\s\-]/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form is disabled - prevent any submission
    setError('Preregistration is currently disabled. Please check back later.');
    return;
  };

  return (
    <main className="min-h-screen bg-[#070d14] text-white">
      <Navbar />
      <div className="pt-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 pb-20">
        {/* Left Side: Journey & Promise */}
        <div className="flex-1 space-y-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 logo-gradient w-fit leading-tight">
              Early Access to Arogyamitraa
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Be among the first to experience a calmer, more connected healthcare system.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-10 relative pl-8 border-l border-white/10 ml-2">
            <div className="relative">
              <div className="absolute -left-[39px] w-5 h-5 rounded-full bg-teal-500 border-4 border-[#070d14]"></div>
              <h3 className="text-xl font-semibold text-white mb-2">1️⃣ You Join the Early Access List</h3>
              <ul className="text-slate-400 space-y-1.5 text-sm">
                <li className="flex items-center gap-2"><span>•</span> Secure preregistration</li>
                <li className="flex items-center gap-2"><span>•</span> No payment required</li>
                <li className="flex items-center gap-2"><span>•</span> No obligation</li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[39px] w-5 h-5 rounded-full bg-teal-500/50 border-4 border-[#070d14]"></div>
              <h3 className="text-xl font-semibold text-white mb-2">2️⃣ We Activate Your Access</h3>
              <ul className="text-slate-400 space-y-1.5 text-sm">
                <li className="flex items-center gap-2"><span>•</span> Gradual rollout</li>
                <li className="flex items-center gap-2"><span>•</span> Priority onboarding</li>
                <li className="flex items-center gap-2"><span>•</span> Full feature access for a limited period</li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -left-[39px] w-5 h-5 rounded-full bg-teal-500/20 border-4 border-[#070d14]"></div>
              <h3 className="text-xl font-semibold text-white mb-2">3️⃣ You Help Shape the Platform</h3>
              <ul className="text-slate-400 space-y-1.5 text-sm">
                <li className="flex items-center gap-2"><span>•</span> Early feedback loops</li>
                <li className="flex items-center gap-2"><span>•</span> Feature prioritization</li>
                <li className="flex items-center gap-2"><span>•</span> Direct communication channel</li>
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <h3 className="text-lg font-semibold text-teal-400 mb-6">What You Get as an Early User</h3>
            <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                    <span className="text-teal-400 mt-0.5">✓</span>
                    <span>Full platform access during early phase</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-teal-400 mt-0.5">✓</span>
                    <span>Paid features unlocked for a limited time</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-teal-400 mt-0.5">✓</span>
                    <span>Priority doctor availability once live</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-teal-400 mt-0.5">✓</span>
                    <span>Early health record continuity</span>
                </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 lg:max-w-md" >
            {submitted ? (
                <div className="bg-white/5 p-8 rounded-2xl border border-teal-500/30 text-center py-16 animate-fade-in md:sticky md:top-32">
                    <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">✨</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">You’re on the Early Access List</h2>
                    <p className="text-slate-300 mb-6">
                        We’ll notify you as soon as your access is activated.
                    </p>
                </div>
            ) : (
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 md:sticky md:top-32">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-white">Request Early Access</h2>
                        <p className="text-sm text-slate-400 mt-2">This helps us activate your account responsibly.</p>
                    </div>

                    <PreregisterCountdown />

                    <form className="space-y-5 relative" onSubmit={handleSubmit} >
                        {/* Disabled overlay */}
                        <div className="h-full absolute inset-0 bg-black/60 rounded-lg z-10 flex items-center justify-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
                                <div className="text-2xl mb-2">🔒</div>
                                <div className="text-white font-semibold mb-1">Preregistration Starting soon</div>
                                <div className="text-slate-300 text-sm">Please check back later</div>
                            </div>
                        </div>
                        
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-medium mb-2 text-slate-300">Name</label>
                            <input 
                                required 
                                type="text" 
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-teal-500 focus:outline-none text-white placeholder-slate-600 transition-colors cursor-not-allowed" 
                                placeholder="Your Name" 
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-slate-300">Email</label>
                            <input 
                                required 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-teal-500 focus:outline-none text-white placeholder-slate-600 transition-colors cursor-not-allowed" 
                                placeholder="your@email.com" 
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-slate-300">Phone Number</label>
                            <input 
                                required 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-teal-500 focus:outline-none text-white placeholder-slate-600 transition-colors cursor-not-allowed" 
                                placeholder="+91 98765 43210" 
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-slate-300">I am a</label>
                            <select 
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-teal-500 focus:outline-none text-white transition-colors cursor-not-allowed"
                                disabled
                            >
                                <option value="member">Member (Early care access)</option>
                                <option value="doctor">Doctor (Clinical consultation & diagnosis)</option>
                                <option value="practitioner">Practitioner (Alternative & allied care)</option>
                                <option value="researcher">Researcher (Health data & insights)</option>
                                <option value="service provider">Service Provider (Healthcare delivery)</option>
                                <option value="content creator">Content Creator (Health education)</option>
                            </select>
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={true}
                            className="w-full py-3.5 rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 font-semibold cursor-not-allowed opacity-50 transition"
                        >
                            Preregistration Disabled
                        </button>
                    </form>

                    {/* Trust Footer */}
                    <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                             <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></span>
                             <span>No spam. No ads.</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                             <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></span>
                             <span>Data encrypted & private.</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                             <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></span>
                             <span>Early access does not require payment.</span>
                        </div>
                         <div className="flex items-center gap-2 text-xs text-slate-500">
                             <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></span>
                             <span>You can opt out anytime.</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </main>
  );
}
