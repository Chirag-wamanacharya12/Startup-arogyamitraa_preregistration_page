export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-10 text-center">
      <h1 className="logo-gradient mb-15 pb-4 text-8xl font-extrabold tracking-wide">
        Arogyamitraaa
      </h1>
      <div className="mt-3 mb-6 flex items-center justify-center gap-4 text-sm font-semibold tracking-wide">
        <span className="text-teal-400">Availability</span>
        <span className="text-slate-500">|</span>
        <span className="text-blue-400">Affordability</span>
        <span className="text-slate-500">|</span>
        <span className="text-green-400">Accessibility</span>
      </div>
    </div>
  );
}
