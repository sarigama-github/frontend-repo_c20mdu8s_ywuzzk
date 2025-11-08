import { Star, Check } from 'lucide-react';

function Testimonials() {
  const items = [
    {
      quote: 'Helped me prep for NCLEX faster than any study group!',
      name: 'Ava R., BSN student',
    },
    {
      quote: 'Flashcards and summaries are insanely accurate.',
      name: 'Jordan M., RN candidate',
    },
    {
      quote: 'Concept explanations finally click for me.',
      name: 'Sam T., Nursing student',
    },
  ];
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Loved by nursing students</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <div key={t.name} className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5">
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mt-4 text-gray-700">“{t.quote}”</p>
            <div className="mt-4 text-sm font-medium text-gray-900">{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Plans built for your study journey</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5">
          <h3 className="text-xl font-semibold text-gray-900">Free</h3>
          <p className="mt-1 text-gray-600">Get started with core features.</p>
          <div className="mt-4 text-3xl font-bold text-gray-900">$0</div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {['3 uploads / month', 'Basic summaries', 'Standard flashcards'].map((f) => (
              <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-teal-600" /> {f}</li>
            ))}
          </ul>
          <button className="mt-6 w-full rounded-xl bg-gray-900 px-4 py-3 font-semibold text-white shadow-sm transition hover:brightness-110">Get started</button>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 to-indigo-500 p-[1px] shadow-[0_20px_50px_-12px_rgba(16,185,129,0.35)]">
          <div className="rounded-3xl bg-white p-6">
            <h3 className="inline-flex items-center gap-2 text-xl font-semibold text-gray-900">Pro <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs text-teal-700">Popular</span></h3>
            <p className="mt-1 text-gray-600">Unlimited studying with smart AI features.</p>
            <div className="mt-4 text-3xl font-bold text-gray-900">$9<span className="text-base font-medium text-gray-600">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {[
                'Unlimited uploads',
                'Smart Flashcards',
                'Concept Breakdown',
                'Advanced quizzes & analytics',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-teal-600" /> {f}</li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 px-4 py-3 font-semibold text-white shadow-sm transition hover:brightness-110">Upgrade</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      q: 'How accurate are the AI summaries?',
      a: 'Summaries are optimized for nursing content and improve as you use the app. Always cross-check with your course materials.',
    },
    {
      q: 'Can I upload my lecture videos?',
      a: 'Yes, you can upload audio/video; we transcribe and extract key points and flashcards.',
    },
    { q: 'Do I own the content Nursify creates?', a: 'Yes. You retain full ownership of your notes and generated content.' },
    { q: 'Is my data secure?', a: 'We use encryption in transit and at rest, with strict access controls.' },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 md:px-8">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">FAQ</h2>
      <div className="mt-8 divide-y divide-gray-200 rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
        {faqs.map((f, i) => (
          <details key={i} className="group">
            <summary className="cursor-pointer list-none p-5 text-gray-900 transition hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <span className="font-medium">{f.q}</span>
                <span className="ml-4 text-teal-600">{/* icon placeholder with +/- using CSS */}
                  <span className="inline-block transition group-open:rotate-45">+</span>
                </span>
              </div>
            </summary>
            <div className="px-5 pb-5 text-gray-600">{f.a}</div>
          </details>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsPricingFAQ() {
  return (
    <section className="relative">
      <Testimonials />
      <Pricing />
      <FAQ />
      <footer className="border-t border-gray-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-500 to-purple-500" />
              <span className="font-semibold text-gray-900">Nursify AI</span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
              {['About', 'Pricing', 'Features', 'Blog', 'Terms', 'Privacy'].map((l) => (
                <a key={l} href="#" className="hover:text-gray-900">{l}</a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </section>
  );
}
