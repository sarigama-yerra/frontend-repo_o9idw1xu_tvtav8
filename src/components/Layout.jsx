import { useState, useEffect } from 'react'
import TopNav from './TopNav'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(()=>{
    document.documentElement.classList.toggle('dark', dark)
  },[dark])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <TopNav onToggleSidebar={()=>setOpen(!open)} dark={dark} setDark={setDark} />
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Sidebar open={open} setActive={()=>{}} />
        <main className="flex-1 py-6 md:pl-6">
          {children}
        </main>
      </div>
    </div>
  )
}
