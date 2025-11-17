import { useState } from 'react'
import { Menu, Bell, Sun, Moon, Search, Milk, UserCircle2 } from 'lucide-react'

export default function TopNav({ onToggleSidebar, dark, setDark }) {
  const [query, setQuery] = useState('')
  return (
    <header className={`sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${dark ? 'bg-black/40' : 'bg-white/60'} border-b border-white/10`}> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onToggleSidebar} className="p-2 rounded-xl bg-white/60 dark:bg-white/10 shadow-sm border border-white/20 hover:scale-105 transition">
            <Menu className="w-5 h-5 text-slate-700 dark:text-slate-200" />
          </button>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-br from-teal-400 via-violet-500 to-orange-400 text-white shadow-lg">
              <Milk className="w-5 h-5" />
            </div>
            <span className="font-semibold text-slate-800 dark:text-slate-100">Aurora Milk Suite</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search panels, farmers, batches..." className="w-full px-4 pl-10 py-2 rounded-2xl border border-white/20 bg-white/60 dark:bg-white/10 text-slate-800 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-400" />
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative p-2 rounded-xl bg-white/60 dark:bg-white/10 border border-white/20 hover:scale-105 transition">
            <Bell className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
          </button>
          <button onClick={()=>setDark(!dark)} className="p-2 rounded-xl bg-white/60 dark:bg-white/10 border border-white/20 hover:scale-105 transition">
            {dark ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-indigo-600" />}
          </button>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/60 dark:bg-white/10 border border-white/20">
            <UserCircle2 className="w-5 h-5 text-slate-600 dark:text-slate-200" />
            <span className="text-sm text-slate-700 dark:text-slate-200">Admin</span>
          </div>
        </div>
      </div>
    </header>
  )
}
