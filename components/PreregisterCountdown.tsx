'use client';

import { useEffect, useState } from 'react';

export default function PreregisterCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Preregistration closes a few days before launch (April 7)
    const closingDate = new Date('March 24, 2026 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = closingDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      setTimeLeft({
        days: String(Math.floor(distance / 86400000)).padStart(2, '0'),
        hours: String(Math.floor((distance % 86400000) / 3600000)).padStart(2, '0'),
        minutes: String(Math.floor((distance % 3600000) / 60000)).padStart(2, '0'),
        seconds: String(Math.floor((distance % 60000) / 1000)).padStart(2, '0'),
      });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mb-6 bg-white/5 border border-white/10 rounded-lg p-4">
        <p className="text-xs text-red-400 font-semibold uppercase tracking-widest mb-2 text-center">
            Preregistration Closes In
        </p>
        <div className="flex justify-center gap-4 text-center">
            <div>
                <div className="text-xl font-bold text-white font-mono">{timeLeft.days}</div>
                <div className="text-[10px] text-slate-500 uppercase">Days</div>
            </div>
            <div className="text-xl font-bold text-slate-600">:</div>
            <div>
                <div className="text-xl font-bold text-white font-mono">{timeLeft.hours}</div>
                <div className="text-[10px] text-slate-500 uppercase">Hrs</div>
            </div>
            <div className="text-xl font-bold text-slate-600">:</div>
            <div>
                <div className="text-xl font-bold text-white font-mono">{timeLeft.minutes}</div>
                <div className="text-[10px] text-slate-500 uppercase">Mins</div>
            </div>
            <div className="text-xl font-bold text-slate-600">:</div>
            <div>
                <div className="text-xl font-bold text-teal-400 font-mono">{timeLeft.seconds}</div>
                <div className="text-[10px] text-slate-500 uppercase">Secs</div>
            </div>
        </div>
    </div>
  );
}
