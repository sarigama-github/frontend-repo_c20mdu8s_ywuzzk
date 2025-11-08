export default function Insights() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Track your progress, improve retention.</h2>
            <p className="mt-3 text-gray-600">Visualize quiz performance, streaks, and flashcard mastery over time to focus on what matters most.</p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-teal-500" /> Personalized review sessions</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-500" /> Evidence-based spaced repetition</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-purple-500" /> Actionable insights on weak areas</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 ring-1 ring-black/5 shadow-xl">
            {/* Dashboard mock */}
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Quiz accuracy</p>
                  <p className="text-2xl font-semibold text-gray-900">86%</p>
                </div>
                <div className="text-xs text-teal-600">+12% this week</div>
              </div>
              <div className="mt-4 h-24 w-full rounded-md bg-gradient-to-r from-teal-100 via-indigo-100 to-purple-100" />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { label: 'Flashcards', value: '1,240' },
                  { label: 'Mastered', value: '780' },
                  { label: 'Streak', value: '12 days' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-gray-50 p-3 ring-1 ring-black/5">
                    <p className="text-xs text-gray-500">{s.label}</p>
                    <p className="text-sm font-semibold text-gray-900">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
