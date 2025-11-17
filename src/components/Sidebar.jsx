import { Home, Factory, Users2, TestTube2, FlaskConical, Package, Truck, Settings, ChevronRight, Shield, Bell, FileBarChart2 } from 'lucide-react'

const nav = [
  { label: 'Overview', icon: Home, section: 'dashboard' },
  { label: 'Farmer Management', icon: Users2, section: 'farmers' },
  { label: 'Collection Centers', icon: Factory, section: 'collection' },
  { label: 'Plant Dashboard', icon: FlaskConical, section: 'plant' },
  { label: 'Batch Quality', icon: TestTube2, section: 'batch' },
  { label: 'Packaging', icon: Package, section: 'packaging' },
  { label: 'Distribution', icon: Truck, section: 'distribution' },
  { label: 'Rate Setting', icon: Settings, section: 'rates' },
  { label: 'Role & Access', icon: Shield, section: 'access' },
  { label: 'Alerts', icon: Bell, section: 'alerts' },
  { label: 'Daily MIS', icon: FileBarChart2, section: 'reports' },
]

export default function Sidebar({ open, setActive }) {
  return (
    <aside className={`${open ? 'translate-x-0' : '-translate-x-full'} fixed md:static md:translate-x-0 inset-y-0 left-0 w-72 z-30 transition-transform duration-300`}> 
      <div className="h-full p-4 bg-gradient-to-b from-white/70 to-white/40 dark:from-slate-900/60 dark:to-slate-900/30 backdrop-blur border-r border-white/20">
        <div className="space-y-1">
          {nav.map((item)=>{
            const Icon = item.icon
            return (
              <button key={item.section} onClick={()=>setActive(item.section)} className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white/50 dark:hover:bg-white/10 border border-white/20">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-white/60 dark:bg-white/10 border border-white/20">
                    <Icon className="w-5 h-5 text-slate-700 dark:text-slate-200" />
                  </span>
                  <span className="text-slate-800 dark:text-slate-100 text-sm font-medium">{item.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
