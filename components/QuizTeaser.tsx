"use client";

import { useState } from "react";
import Link from "next/link";

const QUIZ_CATEGORIES = [
  {
    emoji: "\uD83C\uDFA4",
    label: "Voice Type Challenge",
    description: "Bass, tenor, mezzo or soprano?",
  },
  {
    emoji: "\uD83C\uDFB5",
    label: "Harmony & Theory",
    description: "Intervals, chords & voice leading",
  },
  {
    emoji: "\uD83D\uDFE0",
    label: "Blob Opera Facts",
    description: "How well do you know the game?",
  },
];

const SAMPLE_QUESTION = {
  question: "Which voice type is the highest human vocal range?",
  options: ["Bass", "Tenor", "Mezzo-Soprano", "Soprano"],
  correct: 3,
  explanation: "Soprano (C4-C6) is the highest voice type — bright, agile, and capable of remarkable emotional expression."
};

export default function QuizTeaser() {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
  };

  return (
    <section className="mb-8">
      <h2 className="font-heading font-bold text-xl text-text-dark mb-3">
        Music Theory Quiz
      </h2>

      <div className="grid gap-3 sm:grid-cols-3 mb-3">
        {QUIZ_CATEGORIES.map((cat) => (
          <Link
            key={cat.label}
            href={"/quiz"}
            className="group bg-white rounded-xl border border-gray-100 px-5 py-5 hover:shadow-md hover:border-primary/30 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <p className="text-2xl flex-shrink-0">{cat.emoji}</p>
              <div>
                <h3 className="font-heading font-bold text-base text-text-dark group-hover:text-primary transition-colors leading-snug">
                  {cat.label}
                </h3>
                <p className="text-sm text-text-dark/40 leading-snug">{cat.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Sample question mini-widget */}
      <div className="bg-amber-50/60 border border-amber-100 rounded-xl p-4 mb-3">
        <p className="text-xs font-heading font-semibold text-amber-700 uppercase tracking-wider mb-2">
          {"\uD83D\uDCA1"} Sample Question
        </p>
        <p className="text-sm text-text-dark font-medium mb-3 leading-snug">
          {SAMPLE_QUESTION.question}
        </p>
        <div className="space-y-1.5 mb-2">
          {SAMPLE_QUESTION.options.map((opt, idx) => {
            let btnStyle = "border-gray-200 bg-white hover:bg-gray-50 text-text-dark";
            if (revealed && idx === SAMPLE_QUESTION.correct) {
              btnStyle = "border-green-400 bg-green-50 text-green-700";
            } else if (revealed && idx === selected && idx !== SAMPLE_QUESTION.correct) {
              btnStyle = "border-red-300 bg-red-50 text-red-600";
            } else if (selected === idx && !revealed) {
              btnStyle = "border-primary bg-primary/5 text-primary";
            }
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`block w-full text-left px-3.5 py-2 rounded-lg border text-xs font-body transition-all duration-200 ${btnStyle}`}
              >
                <span className="font-heading font-bold mr-2 opacity-50">
                  {String.fromCharCode(65 + idx)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
        {revealed && (
          <p className="text-xs text-text-dark/60 bg-white rounded-lg px-3 py-2 border border-gray-100 leading-relaxed">
            {SAMPLE_QUESTION.explanation}
          </p>
        )}
      </div>

      <Link
        href="/quiz"
        className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-heading font-semibold"
      >
        Browse all quizzes & interval ear training &rarr;
      </Link>
    </section>
  );
}
