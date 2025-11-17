import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[420px] sm:h-[520px] w-full overflow-hidden">
      <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent dark:from-slate-900" />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center px-4">
        <h1 className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-violet-500 to-orange-400 drop-shadow">Aurora Milk Brand Management</h1>
        <p className="mt-2 text-slate-700 dark:text-slate-200/90 text-sm sm:text-base">A premium multicolor control center for reception, lab, plant, batch & distribution.</p>
      </div>
    </section>
  )
}
