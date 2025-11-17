export function Table({ columns = [], data = [] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/20 bg-white/60 dark:bg-white/10">
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr className="text-slate-500">
            {columns.map((c)=> (
              <th key={c.accessor} className="px-4 py-3 font-medium">{c.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx)=> (
            <tr key={idx} className="border-t border-white/10 text-slate-800 dark:text-slate-100">
              {columns.map((c)=> (
                <td key={c.accessor} className="px-4 py-3">{row[c.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
