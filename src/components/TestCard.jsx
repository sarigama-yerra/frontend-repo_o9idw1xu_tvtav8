import { Radio, Activity, AlertTriangle, CheckCircle2, Cpu, Edit3 } from 'lucide-react'

export default function TestCard({ name, unit, min, max, value, mode='manual', status='pending' }) {
  const colorMap = {
    pass: 'border-emerald-400',
    fail: 'border-rose-400',
    automated: 'border-blue-400',
    manual: 'border-amber-400',
    pending: 'border-purple-400'
  }

  const badge = (label, bg) => (
    <span className={`text-[10px] px-2 py-0.5 rounded-full ${bg} text-white`}>{label}</span>
  )

  const withinRange = value !== undefined && min !== undefined && max !== undefined && value >= min && value <= max

  return (
    <div className={`relative rounded-2xl p-4 bg-white/60 dark:bg-white/10 border backdrop-blur border-white/20`}> 
      <div className={`absolute inset-0 rounded-2xl pointer-events-none border-2 ${colorMap[status]} opacity-60`} />
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-white/60 dark:bg-white/10 border border-white/20">
            <Radio className="w-4 h-4 text-slate-700 dark:text-slate-200" />
          </span>
          <div>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{name}</p>
            <p className="text-[11px] text-slate-500">Range: {min}–{max} {unit}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {mode === 'automated' ? badge('Automated','bg-blue-500') : badge('Manual','bg-amber-500')}
          {status === 'pass' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
          {status === 'fail' && <AlertTriangle className="w-4 h-4 text-rose-500" />}
          {status === 'pending' && <Activity className="w-4 h-4 text-purple-500" />}
        </div>
      </div>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-violet-500 to-orange-400 drop-shadow-sm">
          {value !== undefined ? `${value} ${unit}` : '—'}
        </div>
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 rounded-lg bg-white/70 dark:bg-white/10 border border-white/20 text-[12px] flex items-center gap-1">
            <Edit3 className="w-3 h-3" /> Manual
          </button>
          <button className="px-2 py-1 rounded-lg bg-white/70 dark:bg-white/10 border border-white/20 text-[12px] flex items-center gap-1">
            <Cpu className="w-3 h-3" /> Sync
          </button>
        </div>
      </div>
      {value !== undefined && (
        <div className={`mt-3 text-xs ${withinRange ? 'text-emerald-600' : 'text-rose-600'}`}>
          {withinRange ? 'Within range' : 'Out of range'}
        </div>
      )}
    </div>
  )
}
