import { BookOpen, Sparkles, Layers } from 'lucide-react';

const cards = [
  {
    title: 'Summarize instantly',
    desc: 'Convert long nursing lectures or PDFs into concise, accurate summaries you can review in minutes.',
    icon: Sparkles,
    color: 'from-teal-500/10 to-purple-500/10',
  },
  {
    title: 'Auto-generate flashcards',
    desc: 'Turn your notes into smart Q&A decks tailored to NCLEX-style questions.',
    icon: BookOpen,
    color: 'from-indigo-500/10 to-teal-500/10',
  },
  {
    title: 'Understand complex concepts',
    desc: 'Get plain-language explanations and analogies for tricky topics like pathophysiology and pharmacology.',
    icon: Layers,
    color: 'from-purple-500/10 to-orange-400/10',
  },
];

export default function Features() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Everything you need to learn faster</h2>
          <p className="mt-3 text-gray-600">Thoughtfully designed tools inspired by modern AI products and tailored for nursing students.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(({ title, desc, icon: Icon, color }) => (
            <div key={title} className="group rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5 transition hover:shadow-2xl">
              <div className={`rounded-2xl bg-gradient-to-br ${color} p-3 inline-flex`}> 
                <Icon className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              {/* Mock UI placeholder */}
              <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-white to-gray-50 ring-1 ring-black/5">
                <div className="h-36 w-full bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_40%)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
