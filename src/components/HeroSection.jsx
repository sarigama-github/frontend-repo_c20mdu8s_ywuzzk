import Spline from '@splinetool/react-spline';
import { Upload, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-purple-50" />

      {/* Subtle radial highlight */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),rgba(20,184,166,0.08),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10 md:px-8 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 shadow-sm ring-1 ring-black/5 backdrop-blur">
            <Sparkles className="h-4 w-4 text-teal-500" />
            <span className="text-xs font-medium text-gray-700">AI for nursing students</span>
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Study smarter, not harder — with <span className="bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Nursify AI</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 md:text-lg">
            Upload your notes, lectures, or PDFs and let AI organize, summarize, and quiz you instantly.
          </p>
        </div>

        {/* CTA search-style bar */}
        <div className="mx-auto mt-8 flex max-w-2xl items-center gap-2 rounded-2xl bg-white/80 p-2 shadow-lg ring-1 ring-black/5 backdrop-blur">
          <input
            type="text"
            placeholder="Upload material or paste text…"
            className="w-full rounded-xl border-0 bg-transparent px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
          />
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 px-4 py-3 font-semibold text-white shadow-sm transition hover:brightness-110">
            <Upload className="h-4 w-4" />
            Upload
          </button>
        </div>

        {/* Feature tags */}
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-gray-600">
          {['Flashcards', 'Summaries', 'Quizzes', 'Lecture Notes'].map((tag) => (
            <span key={tag} className="rounded-full bg-white/70 px-3 py-1 shadow ring-1 ring-black/5">{tag}</span>
          ))}
        </div>

        {/* Spline animation */}
        <div className="relative mt-12 h-[420px] w-full">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft gradient edge fade so model feels blended */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/0 to-white/0" />
        </div>
      </div>
    </section>
  );
}
