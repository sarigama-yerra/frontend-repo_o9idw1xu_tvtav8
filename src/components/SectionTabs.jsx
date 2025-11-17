import * as Tabs from '@radix-ui/react-tabs'

export default function SectionTabs({ tabs }) {
  return (
    <Tabs.Root defaultValue={tabs[0].value} className="w-full">
      <Tabs.List className="flex gap-2 overflow-x-auto rounded-xl p-1 bg-white/60 dark:bg-white/10 border border-white/20">
        {tabs.map(t => (
          <Tabs.Trigger key={t.value} value={t.value} className="px-3 py-1.5 rounded-lg text-sm text-slate-700 dark:text-slate-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-400 data-[state=active]:to-violet-500 data-[state=active]:text-white transition">
            {t.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map(t => (
        <Tabs.Content key={t.value} value={t.value} className="mt-4">
          {t.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
