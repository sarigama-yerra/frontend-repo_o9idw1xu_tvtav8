import { Users2, Factory, Timer, FlaskConical, CheckCircle2, XCircle, Truck, IndianRupee } from 'lucide-react'

const Stat = ({ icon:Icon, label, value, accent }) => (
  <div className="group relative rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20 backdrop-blur hover:shadow-xl transition">
    <div className={`absolute inset-0 rounded-2xl border-2 ${accent} opacity-60 group-hover:opacity-100 pointer-events-none`} />
    <div className="flex items-center gap-3">
      <span className="p-2.5 rounded-xl bg-gradient-to-br from-slate-50 to-white/30 dark:from-slate-800/40 border border-white/30">
        <Icon className="w-5 h-5 text-slate-700 dark:text-slate-200" />
      </span>
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wide">{label}</p>
        <p className="text-xl font-semibold text-slate-800 dark:text-slate-100">{value}</p>
      </div>
    </div>
  </div>
)

export default function KPIs() {
  const cards = [
    { icon: Users2, label: 'Total Farmers', value: '1,284', accent: 'border-teal-300' },
    { icon: Factory, label: 'Collection Centers', value: '32', accent: 'border-violet-300' },
    { icon: Timer, label: 'Active Shifts', value: '2', accent: 'border-orange-300' },
    { icon: FlaskConical, label: 'Live Tests', value: '56', accent: 'border-blue-300' },
    { icon: CheckCircle2, label: 'Accepted Today', value: '18,420 L', accent: 'border-emerald-300' },
    { icon: XCircle, label: 'Rejected Today', value: '420 L', accent: 'border-rose-300' },
    { icon: Truck, label: 'Dispatches', value: '12', accent: 'border-cyan-300' },
    { icon: IndianRupee, label: 'Payments', value: '₹8.2L', accent: 'border-fuchsia-300' },
  ]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {cards.map((c, i)=> <Stat key={i} {...c} />)}
    </div>
  )
}
