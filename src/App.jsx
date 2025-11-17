import { useState } from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'
import KPIs from './components/KPIs'
import SectionTabs from './components/SectionTabs'
import TestCard from './components/TestCard'
import { Table } from './components/Tables'

function Dashboard() {
  return (
    <div className="space-y-6">
      <Hero />
      <KPIs />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
            <h3 className="font-semibold mb-3 text-slate-800 dark:text-slate-100">Live Milk Accepted vs Rejected</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-36 rounded-xl bg-gradient-to-br from-emerald-200/60 to-teal-200/40 dark:from-emerald-500/10 dark:to-teal-500/10 border border-emerald-300/40" />
              <div className="h-36 rounded-xl bg-gradient-to-br from-rose-200/60 to-orange-200/40 dark:from-rose-500/10 dark:to-orange-500/10 border border-rose-300/40" />
            </div>
          </div>
          <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
            <h3 className="font-semibold mb-3 text-slate-800 dark:text-slate-100">Live Plant Test Results</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {['Fat','SNF','Protein','MBRT','Acidity','TPC'].map((n,i)=> (
                <TestCard key={i} name={n} unit={n==='MBRT'?'min': n==='TPC'? 'cfu/ml' : '%'} min={n==='MBRT'?10:3} max={n==='MBRT'?30:8} value={Math.random()* (n==='MBRT'?20:5) + (n==='MBRT'?10:3) % 10} mode={i%2?'automated':'manual'} status={['pass','pending','fail'][i%3]} />
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
            <h3 className="font-semibold mb-3 text-slate-800 dark:text-slate-100">Batch Approvals</h3>
            <div className="space-y-3">
              {[1,2,3].map(i=> (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/70 dark:bg-white/10 border border-white/20">
                  <div>
                    <p className="text-sm font-medium">Batch #{1020+i}</p>
                    <p className="text-xs text-slate-500">Sensory pending • Microbial pass</p>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-teal-400 to-violet-500 text-white text-xs">Review</button>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
            <h3 className="font-semibold mb-3 text-slate-800 dark:text-slate-100">Distribution Analytics</h3>
            <div className="h-40 rounded-xl bg-gradient-to-br from-cyan-200/60 to-blue-200/40 dark:from-cyan-500/10 dark:to-blue-500/10 border border-cyan-300/40" />
          </div>
        </div>
      </div>
    </div>
  )
}

function SuperAdminTabs() {
  const tabs = [
    { value: 'farmers', label: 'Farmer Management', content: (
      <Table
        columns={[{Header:'Farmer ID', accessor:'id'},{Header:'Name', accessor:'name'},{Header:'Village', accessor:'village'},{Header:'Today (L)', accessor:'today'},{Header:'Status', accessor:'status'}]}
        data={[
          {id:'F-1001', name:'Raj Kumar', village:'Sahnewal', today:'28', status:'Active'},
          {id:'F-1002', name:'Simran K', village:'Kohara', today:'24', status:'Active'},
          {id:'F-1003', name:'Sandeep', village:'Dehlon', today:'0', status:'Inactive'},
        ]}
      />
    ) },
    { value: 'collection', label: 'Milk Collection Centers', content: (
      <Table
        columns={[{Header:'Center', accessor:'center'},{Header:'Shift', accessor:'shift'},{Header:'Accepted', accessor:'accepted'},{Header:'Rejected', accessor:'rejected'},{Header:'Automation', accessor:'automation'}]}
        data={[
          {center:'Ludhiana-01', shift:'Morning', accepted:'3,420 L', rejected:'120 L', automation:'78%'},
          {center:'Ludhiana-02', shift:'Evening', accepted:'2,980 L', rejected:'80 L', automation:'64%'},
        ]}
      />
    ) },
    { value: 'plant', label: 'Plant Dashboard', content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {['Microbial load','MBRT','Acidity','Fat','SNF','Protein','Aflatoxin','TPC','Coliform','Freezing Point','Preservatives','Sensory'].map((n,i)=> (
          <TestCard key={i} name={n} unit={n==='MBRT'?'min': n==='TPC'? 'cfu/ml' : '%'} min={1} max={10} value={Math.round(Math.random()*10)} mode={i%2?'automated':'manual'} status={['pass','pending','fail'][i%3]} />
        ))}
      </div>
    ) },
    { value: 'batch', label: 'Batch Quality', content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {['QC','Sensory','Microbial','Temp Stability','Leakage','Seal Quality'].map((n,i)=> (
          <TestCard key={i} name={n} unit={i<3?'%':''} min={i<3?80:0} max={i<3?100:0} value={i<3? 80+Math.round(Math.random()*20): undefined} mode={i%2?'automated':'manual'} status={['pass','pending','fail'][i%3]} />
        ))}
      </div>
    ) },
    { value: 'packaging', label: 'Packaging Records', content: (
      <Table
        columns={[{Header:'Batch', accessor:'batch'},{Header:'Packet Size', accessor:'size'},{Header:'Film', accessor:'film'},{Header:'Leakage', accessor:'leak'},{Header:'Speed', accessor:'speed'}]}
        data={[{batch:'#1021', size:'500 ml', film:'Pass', leak:'0.2%', speed:'120 p/min'}]}
      />
    ) },
    { value: 'distribution', label: 'Distribution Dashboard', content: (
      <Table
        columns={[{Header:'Route', accessor:'route'},{Header:'Vehicle', accessor:'vehicle'},{Header:'Cold Chain', accessor:'cold'},{Header:'Delivered', accessor:'del'},{Header:'Damaged', accessor:'dam'}]}
        data={[{route:'R-21', vehicle:'PB10AB1234', cold:'96%', del:'92%', dam:'0.3%'}]}
      />
    ) },
    { value: 'rates', label: 'Rate Setting (Fat/SNF wise)', content: (
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
          <p className="text-sm font-medium mb-2">Fat Rate</p>
          <input type="range" min="4" max="8" defaultValue="6" className="w-full" />
          <p className="text-xs text-slate-500 mt-1">₹ per % Fat</p>
        </div>
        <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
          <p className="text-sm font-medium mb-2">SNF Rate</p>
          <input type="range" min="8" max="10" defaultValue="9" className="w-full" />
          <p className="text-xs text-slate-500 mt-1">₹ per % SNF</p>
        </div>
      </div>
    ) },
    { value: 'access', label: 'Role & Access Control', content: (
      <Table columns={[{Header:'Role', accessor:'role'},{Header:'Permissions', accessor:'perm'},{Header:'Members', accessor:'mem'}]} data={[
        {role:'Super Admin', perm:'All', mem:6},
        {role:'Reception', perm:'Farmer Intake, Tests', mem:18},
        {role:'Plant', perm:'Lab, Pasteurization', mem:12},
      ]} />
    ) },
    { value: 'alerts', label: 'Alerts & Notifications', content: (
      <Table columns={[{Header:'Time', accessor:'time'},{Header:'Message', accessor:'msg'},{Header:'Severity', accessor:'sev'}]} data={[
        {time:'08:42', msg:'High coliform in Tanker T-21', sev:'High'},
        {time:'09:03', msg:'Leakage spike on Line 2', sev:'Medium'},
      ]} />
    ) },
    { value: 'reports', label: 'Daily MIS Reports', content: (
      <Table columns={[{Header:'Report', accessor:'r'},{Header:'Date', accessor:'d'},{Header:'Owner', accessor:'o'}]} data={[
        {r:'Reception Summary', d:'2025-06-10', o:'Reception Admin'},
        {r:'Plant QC Summary', d:'2025-06-10', o:'Plant Admin'},
      ]} />
    ) },
  ]
  return <SectionTabs tabs={tabs} />
}

function ReceptionPanel() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
        <h3 className="font-semibold mb-3">Farmer Arrival</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <input placeholder="Farmer ID" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
          <input placeholder="Milk Can QR" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
          <input placeholder="Quantity (L)" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
          <select className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10"><option>Morning</option><option>Evening</option></select>
        </div>
      </div>
      <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
        <h3 className="font-semibold mb-3">Reception Tests</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {['FAT','SNF','CLR','Density','Temperature','Water Adulteration','Neutralizers','Salt','Urea','pH','Color/Smell','Antibiotics','Sugar','Conductivity','Preservatives'].map((n,i)=> (
            <TestCard key={i} name={n} unit={n==='Temperature'? '°C':'%'} min={n==='pH'?6.6:0} max={n==='pH'?6.8:10} mode={i%2?'automated':'manual'} status={['pass','pending','fail'][i%3]} />
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-3">Final Reception Result</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Decision</p>
              <p className="text-xl font-semibold text-emerald-600">Accepted</p>
            </div>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-400 to-violet-500 text-white">Generate Report</button>
          </div>
        </div>
        <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-3">Shift Summary</h3>
          <div className="h-32 rounded-xl bg-gradient-to-br from-indigo-200/60 to-violet-200/40 dark:from-indigo-500/10 dark:to-violet-500/10 border border-indigo-300/40" />
        </div>
      </div>
    </div>
  )
}

function PlantPanel() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
        <h3 className="font-semibold mb-3">Tanker Inward</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <input placeholder="Tanker ID" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
          <input placeholder="Total Quantity (L)" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
          <select className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10"><option>Morning</option><option>Evening</option></select>
          <input placeholder="Temperature (°C)" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
          <input placeholder="Reception Link" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
        </div>
      </div>
      <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
        <h3 className="font-semibold mb-3">Plant Lab Testing</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {['Microbial load','MBRT','Acidity','Fat','SNF','Protein','Heavy Metals','Aflatoxin','TPC','Coliform','Freezing Point','Preservatives','Sensory'].map((n,i)=> (
            <TestCard key={i} name={n} unit={n==='MBRT'?'min': n==='TPC'? 'cfu/ml' : '%'} min={1} max={10} value={Math.round(Math.random()*10)} mode={i%2?'automated':'manual'} status={['pass','pending','fail'][i%3]} />
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-3">Pasteurization + Homogenization</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <input placeholder="Pasteurization temp (°C)" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
            <input placeholder="Holding time (s)" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
            <input placeholder="Cooling time (min)" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
            <input placeholder="Homogenization pressure (bar)" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
          </div>
        </div>
        <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-3">Valve Presets</h3>
          <div className="h-32 rounded-xl bg-gradient-to-br from-amber-200/60 to-orange-200/40 dark:from-amber-500/10 dark:to-orange-500/10 border border-amber-300/40" />
        </div>
      </div>
    </div>
  )
}

function BatchPanel() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
        <h3 className="font-semibold mb-3">Batch Creation</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-3">
          <input placeholder="Auto Batch ID" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
          <select className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10"><option>Standard</option><option>Toned</option><option>Double Toned</option></select>
          <input placeholder="Total Quantity (L)" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
          <input placeholder="Manufacture" type="date" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
          <input placeholder="Expiry" type="date" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
          <input placeholder="Line Number" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
        </div>
      </div>
      <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
        <h3 className="font-semibold mb-3">Packaging</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {['Packet Size','Film Quality','Leakage Test','Seal Quality','Machine Speed','QC Status'].map((n,i)=> (
            <TestCard key={i} name={n} unit={i===0?'ml':''} min={0} max={100} value={i<3? Math.round(Math.random()*100): undefined} mode={i%2?'automated':'manual'} status={['pass','pending','fail'][i%3]} />
          ))}
        </div>
      </div>
      <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
        <h3 className="font-semibold mb-3">Final Batch Approval</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {['QC pass/fail','Sensory result','Microbial load','Temperature stability'].map((n,i)=> (
            <TestCard key={i} name={n} min={0} max={100} value={80+Math.round(Math.random()*20)} mode={i%2?'automated':'manual'} status={['pass','pending','fail'][i%3]} />
          ))}
        </div>
      </div>
    </div>
  )
}

function DistributionPanel() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
        <h3 className="font-semibold mb-3">Stock Allocation</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <input placeholder="Select Batch" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
          <input placeholder="Distributor" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
          <input placeholder="Vehicle number" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
          <input placeholder="Driver details" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
          <input placeholder="Route number" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
        </div>
      </div>
      <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
        <h3 className="font-semibold mb-3">Dispatch</h3>
        <Table columns={[{Header:'Batch', accessor:'b'},{Header:'Dispatched', accessor:'d'},{Header:'Delivered', accessor:'v'},{Header:'Damaged', accessor:'x'},{Header:'Returned', accessor:'r'}]}
          data={[{b:'#1021', d:'1200', v:'1180', x:'8', r:'12'}]} />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-3">Cold Chain Monitoring</h3>
          <div className="h-32 rounded-xl bg-gradient-to-br from-cyan-200/60 to-blue-200/40 dark:from-cyan-500/10 dark:to-blue-500/10 border border-cyan-300/40" />
        </div>
        <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-3">Delivery Analytics</h3>
          <div className="h-32 rounded-xl bg-gradient-to-br from-indigo-200/60 to-violet-200/40 dark:from-indigo-500/10 dark:to-violet-500/10 border border-indigo-300/40" />
        </div>
      </div>
    </div>
  )
}

function FarmerPanel() {
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-2">Today’s Milk</h3>
          <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-violet-500 to-orange-400">48 L</p>
          <p className="text-xs text-slate-500">FAT 6.8 • SNF 9.2</p>
        </div>
        <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-2">Payment Estimate</h3>
          <p className="text-3xl font-bold">₹ 1,624</p>
        </div>
        <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-2">Status</h3>
          <p className="text-emerald-600 font-medium">Accepted</p>
          <p className="text-xs text-slate-500">No rejections today</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-3">Past Records</h3>
          <div className="h-40 rounded-xl bg-gradient-to-br from-cyan-200/60 to-blue-200/40 dark:from-cyan-500/10 dark:to-blue-500/10 border border-cyan-300/40" />
        </div>
        <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-3">Rate Chart</h3>
          <Table columns={[{Header:'Fat %', accessor:'f'},{Header:'SNF %', accessor:'s'},{Header:'Rate', accessor:'r'}]}
            data={[{f:'6.5', s:'9.0', r:'₹ 36/L'},{f:'6.8', s:'9.2', r:'₹ 37/L'}]} />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-3">Profile</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <input placeholder="Farmer ID" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
            <input placeholder="Bank Details" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
            <input placeholder="Milk Can Count" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
            <input placeholder="Support" className="px-3 py-2 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10" />
          </div>
        </div>
        <div className="rounded-2xl p-4 bg-white/60 dark:bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-3">Support Chat</h3>
          <div className="h-32 rounded-xl bg-gradient-to-br from-emerald-200/60 to-teal-200/40 dark:from-emerald-500/10 dark:to-teal-500/10 border border-emerald-300/40" />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [panel, setPanel] = useState('super')
  return (
    <Layout>
      <div className="mb-6 flex flex-wrap gap-2">
        {[
          {key:'super', label:'Super Admin'},
          {key:'reception', label:'Reception Admin'},
          {key:'plant', label:'Milk Plant Admin'},
          {key:'batch', label:'Batch & Packaging Admin'},
          {key:'distribution', label:'Distribution Admin'},
          {key:'farmer', label:'Farmer Admin'},
        ].map(btn => (
          <button key={btn.key} onClick={()=>setPanel(btn.key)} className={`px-3 py-1.5 rounded-lg border text-sm ${panel===btn.key? 'bg-gradient-to-r from-teal-400 to-violet-500 text-white border-transparent':'bg-white/60 dark:bg-white/10 border-white/20 text-slate-700 dark:text-slate-200'}`}>
            {btn.label}
          </button>
        ))}
      </div>
      {panel==='super' && (
        <>
          <Dashboard />
          <div className="mt-6">
            <SuperAdminTabs />
          </div>
        </>
      )}
      {panel==='reception' && <ReceptionPanel />}
      {panel==='plant' && <PlantPanel />}
      {panel==='batch' && <BatchPanel />}
      {panel==='distribution' && <DistributionPanel />}
      {panel==='farmer' && <FarmerPanel />}
    </Layout>
  )
}
