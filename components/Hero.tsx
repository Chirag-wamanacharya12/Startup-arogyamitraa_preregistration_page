export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-10 text-center px-4">
      <h1 className="logo-gradient mb-4 pb-6 text-6xl md:text-8xl font-extrabold tracking-wide">
        Arogyamitraaa
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 font-medium mb-10 max-w-2xl mx-auto">
        Your everyday healthcare companion — built for India.
      </p>

      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-4 text-sm md:text-base font-semibold tracking-wide">
          <span className="text-teal-400">Availability</span>
          <span className="text-slate-500">|</span>
          <span className="text-blue-400">Affordability</span>
          <span className="text-slate-500">|</span>
          <span className="text-green-400">Accessibility</span>
        </div>
        <p className="text-xs text-slate-500 uppercase tracking-widest">
            The three principles behind everything we’re building.
        </p>
      </div>
    </div>
  );
}
