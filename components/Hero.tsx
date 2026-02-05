export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-10 text-center px-4 w-full overflow-hidden">
      <h1 className="logo-gradient mb-4 pb-2 md:pb-6 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight md:tracking-wide break-words max-w-full">
        Arogyamitraaa
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium mb-8 md:mb-10 max-w-2xl mx-auto px-2">
        Your everyday healthcare companion — built for India.
      </p>

      <div className="flex flex-col items-center gap-3 w-full">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm md:text-base font-semibold tracking-wide px-2">
          <span className="text-teal-400 whitespace-nowrap">Availability</span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-blue-400 whitespace-nowrap">Affordability</span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-green-400 whitespace-nowrap">Accessibility</span>
        </div>
        <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest max-w-xs sm:max-w-none mx-auto leading-relaxed">
            The three principles behind everything we’re building.
        </p>
      </div>
    </div>
  );
}
