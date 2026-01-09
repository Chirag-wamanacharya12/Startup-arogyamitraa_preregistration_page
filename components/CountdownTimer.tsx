'use client';

import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [currentDate, setCurrentDate] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const launchDate = new Date('April 7, 2026 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        setCurrentDate('Launched!');
        return;
      }

      setTimeLeft({
        days: String(Math.floor(distance / 86400000)).padStart(2, '0'),
        hours: String(Math.floor((distance % 86400000) / 3600000)).padStart(2, '0'),
        minutes: String(Math.floor((distance % 3600000) / 60000)).padStart(2, '0'),
        seconds: String(Math.floor((distance % 60000) / 1000)).padStart(2, '0'),
      });

      setCurrentDate(new Date().toLocaleDateString('en-US', {
        weekday: 'long', month: 'short', day: 'numeric'
      }));
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-[#0b1623] px-12 py-8 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-center mb-10 mx-4">
      <div className="text-5xl font-extrabold flex justify-center space-x-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 drop-shadow-lg">
          {timeLeft.days}
        </span>
        <span className="text-slate-400">:</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 drop-shadow-lg">
          {timeLeft.hours}
        </span>
        <span className="text-slate-400">:</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-lg">
          {timeLeft.minutes}
        </span>
        <span className="text-slate-400">:</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500 drop-shadow-lg">
          {timeLeft.seconds}
        </span>
      </div>

      <p className="text-teal-400 text-lg mt-6 tracking-wide">
        {currentDate}
      </p>
    </div>
  );
}
