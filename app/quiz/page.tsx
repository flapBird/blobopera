"use client";

import { useState, useCallback, useRef } from "react";
import SidebarLayout from "@/components/SidebarLayout";
import SchemaMarkup from "@/components/SchemaMarkup";
// ---------- types ----------
type QuizCategory = "voice-types" | "music-theory" | "blob-opera";

interface Question {
  id: number;
  category: QuizCategory;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizMeta {
  id: QuizCategory;
  label: string;
  icon: string;
  description: string;
}

const QUIZ_META: Record<QuizCategory, QuizMeta> = {
  "voice-types": {
    id: "voice-types",
    label: "Voice Type Challenge",
    icon: "\uD83C\uDFA4",
    description: "Can you identify the four vocal ranges? Test your knowledge of bass, tenor, mezzo-soprano, and soprano voice types.",
  },
  "music-theory": {
    id: "music-theory",
    label: "Harmony & Theory",
    icon: "\uD83C\uDFB5",
    description: "Questions about harmony, intervals, and the theory behind four-part vocal music.",
  },
  "blob-opera": {
    id: "blob-opera",
    label: "Blob Opera Facts",
    icon: "\uD83D\uDFE0",
    description: "How much do you know about the AI-powered blob quartet? Test your Blob Opera knowledge!",
  },
};

const QUESTIONS: Question[] = [
  // ---- Voice Types ----
  {
    id: 1,
    category: "voice-types",
    question: "Which voice type is the highest human vocal range?",
    options: ["Bass", "Tenor", "Mezzo-Soprano", "Soprano"],
    correctIndex: 3,
    explanation: "Soprano is the highest voice type, typically ranging from C4 to C6 — bright, agile, and capable of remarkable emotional expression.",
  },
  {
    id: 2,
    category: "voice-types",
    question: "Which voice type typically ranges from C3 to C5 and often carries the lead melody in opera?",
    options: ["Bass", "Tenor", "Mezzo-Soprano", "Soprano"],
    correctIndex: 1,
    explanation: "The tenor is the highest natural male voice (C3–C5), known for its brightness and power.",
  },
  {
    id: 3,
    category: "voice-types",
    question: "Which voice type provides the harmonic foundation in choral music, typically ranging from D2 to D4?",
    options: ["Bass", "Tenor", "Mezzo-Soprano", "Soprano"],
    correctIndex: 0,
    explanation: "The bass is the lowest human voice (D2–D4), with a rich, resonant quality that anchors the quartet's sound.",
  },
  {
    id: 4,
    category: "voice-types",
    question: "Which voice type sits between the male and female voices, with a range of A3 to A5?",
    options: ["Bass", "Tenor", "Mezzo-Soprano", "Soprano"],
    correctIndex: 2,
    explanation: "The mezzo-soprano (A3–A5) is darker and richer than the soprano, creating connective tissue that makes four-part harmony feel complete.",
  },
  {
    id: 5,
    category: "voice-types",
    question: "In Blob Opera, which blob is the largest and sits lowest on the screen?",
    options: ["Bass", "Tenor", "Mezzo-Soprano", "Soprano"],
    correctIndex: 0,
    explanation: "The bass blob is the largest and sits lowest on the screen, anchoring the quartet with its deep, warm tones.",
  },
  // ---- Music Theory ----
  {
    id: 6,
    category: "music-theory",
    question: "What is the term for the smooth glide between two pitches that Blob Opera's AI learned from real recordings?",
    options: ["Legato", "Portamento", "Staccato", "Vibrato"],
    correctIndex: 1,
    explanation: "Portamento is the audible slide through intermediate pitches between two notes.",
  },
  {
    id: 7,
    category: "music-theory",
    question: "In four-part harmony, which principle says each voice should move as little as possible between successive chords?",
    options: ["Counterpoint", "Voice Leading", "Cadence", "Resolution"],
    correctIndex: 1,
    explanation: "Voice leading is the art of moving multiple voices from one chord to the next with minimal motion.",
  },
  {
    id: 8,
    category: "music-theory",
    question: "What frequency ratio gives a major chord its 'happy' sound?",
    options: ["3:2", "4:3", "5:4", "6:5"],
    correctIndex: 2,
    explanation: "A major third has a frequency ratio of 5:4, which sits comfortably in the harmonic series.",
  },
  {
    id: 9,
    category: "music-theory",
    question: "What is the term for the periodic variation in pitch that adds warmth to a singing voice?",
    options: ["Tremolo", "Vibrato", "Portamento", "Glissando"],
    correctIndex: 1,
    explanation: "Vibrato is a periodic variation in pitch that adds warmth and expressiveness.",
  },
  {
    id: 10,
    category: "music-theory",
    question: "In a typical four-part vocal arrangement, which voice traditionally moves in larger intervals than the upper voices?",
    options: ["Soprano", "Tenor", "Alto", "Bass"],
    correctIndex: 3,
    explanation: "The bass traditionally moves in larger intervals, maintaining its role as the harmonic foundation.",
  },
  // ---- Blob Opera ----
  {
    id: 11,
    category: "blob-opera",
    question: "How many hours of professional opera recordings were used to train Blob Opera's AI?",
    options: ["4 hours", "8 hours", "16 hours", "32 hours"],
    correctIndex: 2,
    explanation: "Four professional opera singers each spent hours recording, resulting in roughly 16 hours of meticulously labeled audio data.",
  },
  {
    id: 12,
    category: "blob-opera",
    question: "Who created Blob Opera?",
    options: ["Google Brain", "David Li", "OpenAI", "Magenta Studio"],
    correctIndex: 1,
    explanation: "Blob Opera was created by artist and developer David Li, in collaboration with Google Arts & Culture.",
  },
  {
    id: 13,
    category: "blob-opera",
    question: "When you drag a blob to the left, what happens to the vowel sound?",
    options: ["It becomes brighter ('ah')", "It becomes rounder ('oo')", "The pitch goes up", "The pitch goes down"],
    correctIndex: 0,
    explanation: "Dragging left shapes the vowel toward 'ah' — the sound opens up, becoming brighter and more operatic.",
  },
  {
    id: 14,
    category: "blob-opera",
    question: "When was Blob Opera first released?",
    options: ["December 2019", "December 2020", "March 2021", "June 2020"],
    correctIndex: 1,
    explanation: "Blob Opera launched in December 2020 as a holiday experiment from Google Arts & Culture.",
  },
  {
    id: 15,
    category: "blob-opera",
    question: "What keeps the blobs sounding musical even when you make random movements?",
    options: ["Pre-recorded samples", "An AI harmony engine", "A live musician", "YouTube audio"],
    correctIndex: 1,
    explanation: "The AI harmony engine monitors your input and computes harmonies for the other three voices in real time.",
  },
];

// ---------- helpers ----------
const audioCtxRef: { current: AudioContext | null } = { current: null };

function getAudioCtx(): AudioContext {
  if (!audioCtxRef.current) {
    audioCtxRef.current = new AudioContext();
  }
  return audioCtxRef.current;
}

function playTone(frequency: number, duration = 0.8, type: OscillatorType = "sine") {
  try {
    const ctx = getAudioCtx();
    if (ctx.state === "suspended") ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch {
    /* audio not available */
  }
}

function playInterval(interval: number) {
  const baseFreq = 261.63; // C4
  const ratio = Math.pow(2, interval / 12);
  playTone(baseFreq, 0.6);
  setTimeout(() => playTone(baseFreq * ratio, 0.6), 600);
}

const INTERVALS: { name: string; semitones: number }[] = [
  { name: "Major 3rd", semitones: 4 },
  { name: "Perfect 5th", semitones: 7 },
  { name: "Minor 3rd", semitones: 3 },
  { name: "Perfect 4th", semitones: 5 },
  { name: "Major 6th", semitones: 9 },
  { name: "Octave", semitones: 12 },
];

// ---------- components ----------
function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = total > 0 ? (current / total) * 100 : 0;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        className="bg-primary h-full rounded-full transition-all duration-500 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function QuestionCard({
  question,
  selected,
  onSelect,
  revealed,
  onNext,
  isLast,
}: {
  question: Question;
  selected: number | null;
  onSelect: (index: number) => void;
  revealed: boolean;
  onNext: () => void;
  isLast: boolean;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm animate-fade-up">
      <p className="text-sm text-primary font-heading font-semibold mb-2">
        {QUIZ_META[question.category].icon} {QUIZ_META[question.category].label}
      </p>
      <h3 className="font-heading font-bold text-xl text-text-dark mb-6 leading-snug">
        {question.question}
      </h3>

      <div className="space-y-3">
        {question.options.map((opt, idx) => {
          let btnStyle = "border-gray-200 bg-white hover:bg-gray-50 text-text-dark";
          if (revealed && idx === question.correctIndex) {
            btnStyle = "border-green-500 bg-green-50 text-green-800";
          } else if (revealed && idx === selected && idx !== question.correctIndex) {
            btnStyle = "border-red-400 bg-red-50 text-red-700";
          } else if (selected === idx && !revealed) {
            btnStyle = "border-primary bg-primary/5 text-primary";
          }
          return (
            <button
              key={idx}
              onClick={() => !revealed && onSelect(idx)}
              className={`w-full text-left px-5 py-3.5 rounded-xl border-2 transition-all duration-200 font-body leading-relaxed ${btnStyle}`}
            >
              <span className="font-heading font-bold text-sm mr-3 opacity-50">
                {String.fromCharCode(65 + idx)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {revealed && (
        <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl p-4 animate-fade-up">
          <p className="text-sm text-blue-800 font-medium mb-1">Explanation</p>
          <p className="text-sm text-blue-700/80 leading-relaxed">{question.explanation}</p>
        </div>
      )}

      {revealed && (
        <button
          onClick={onNext}
          className="mt-5 w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-xl font-heading font-bold text-sm hover:bg-primary/90 transition-colors"
        >
          {isLast ? "See Results" : "Next Question"}
        </button>
      )}
    </div>
  );
}

function IntervalQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const interval = INTERVALS[currentIdx];
  if (!interval) return null;

  const playedRef = useRef(false);
  if (!playedRef.current) {
    playedRef.current = true;
    setTimeout(() => playInterval(interval.semitones), 300);
  }

  const handleSelect = (idx: number) => {
    setSelected(idx);
    setRevealed(true);
    if (idx === 0) setScore((s) => s + 1);
  };

  const allIntervals = INTERVALS.map((i) => i.name);

  const handleNext = () => {
    if (currentIdx < INTERVALS.length - 1) {
      playedRef.current = false;
      setCurrentIdx((i) => i + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      setDone(true);
    }
  };

  const handlePlayAgain = () => {
    playedRef.current = false;
    setCurrentIdx(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setDone(false);
  };

  if (done) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm text-center animate-fade-up">
        <p className="text-4xl mb-3">{'\uD83D\uDC42'}</p>
        <h3 className="font-heading font-bold text-xl text-text-dark mb-2">Interval Ear Training Complete!</h3>
        <p className="text-lg text-text-dark/70 mb-4">
          You identified {score} of {INTERVALS.length} intervals correctly.
        </p>
        <button
          onClick={handlePlayAgain}
          className="px-8 py-3 bg-primary text-white rounded-xl font-heading font-bold text-sm hover:bg-primary/90 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm animate-fade-up">
      <p className="text-sm text-primary font-heading font-semibold mb-2">{'\uD83D\uDC42'} Interval Ear Training</p>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-text-dark/50 font-medium">
          {currentIdx + 1} / {INTERVALS.length}
        </span>
        <ProgressBar current={currentIdx} total={INTERVALS.length} />
      </div>

      <h3 className="font-heading font-bold text-xl text-text-dark mb-3 leading-snug">
        What interval did you just hear?
      </h3>

      <button
        onClick={() => playInterval(interval.semitones)}
        className="mb-5 px-5 py-2.5 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 rounded-xl font-heading font-semibold text-sm transition-colors"
      >
        {'\uD83D\uDD04'} Play Again
      </button>

      <div className="space-y-3">
        {allIntervals.map((name, idx) => {
          let btnStyle = "border-gray-200 bg-white hover:bg-gray-50 text-text-dark";
          if (revealed && idx === 0) {
            btnStyle = "border-green-500 bg-green-50 text-green-800";
          } else if (revealed && idx === selected && idx !== 0) {
            btnStyle = "border-red-400 bg-red-50 text-red-700";
          } else if (selected === idx && !revealed) {
            btnStyle = "border-primary bg-primary/5 text-primary";
          }
          return (
            <button
              key={idx}
              onClick={() => !revealed && handleSelect(idx)}
              className={`w-full text-left px-5 py-3 rounded-xl border-2 transition-all duration-200 font-body ${btnStyle}`}
            >
              {name}
            </button>
          );
        })}
      </div>

      {revealed && (
        <button
          onClick={handleNext}
          className="mt-5 w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-xl font-heading font-bold text-sm hover:bg-primary/90 transition-colors"
        >
          {currentIdx < INTERVALS.length - 1 ? "Next Interval" : "See Results"}
        </button>
      )}
    </div>
  );
}

function QuizResults({
  score,
  total,
  onRestart,
}: {
  score: number;
  total: number;
  onRestart: () => void;
}) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  let grade: string;
  let color: string;
  if (pct >= 90) {
    grade = "Maestro!";
    color = "text-yellow-700";
  } else if (pct >= 70) {
    grade = "Virtuoso!";
    color = "text-green-700";
  } else if (pct >= 50) {
    grade = "Apprentice";
    color = "text-blue-700";
  } else {
    grade = "Beginner";
    color = "text-text-dark/60";
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm text-center animate-fade-up max-w-md mx-auto">
      <p className="text-5xl mb-4">
        {pct >= 90 ? '\uD83C\uDFC6' : pct >= 70 ? '\uD83C\uDF89' : pct >= 50 ? '\uD83D\uDCAA' : '\uD83D\uDCDA'}
      </p>
      <h3 className={`font-heading font-bold text-2xl mb-2 ${color}`}>{grade}</h3>
      <p className="text-lg text-text-dark/70 mb-2">
        You scored <span className="font-bold text-text-dark">{score}</span> out of{" "}
        <span className="font-bold text-text-dark">{total}</span>
      </p>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6 max-w-xs mx-auto overflow-hidden">
        <div
          className="bg-primary h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <button
        onClick={onRestart}
        className="px-8 py-3 bg-primary text-white rounded-xl font-heading font-bold text-sm hover:bg-primary/90 transition-colors"
      >
        Try a Different Quiz
      </button>
    </div>
  );
}

// ---------- page ----------
export default function QuizPage() {
  const [activeCategory, setActiveCategory] = useState<QuizCategory | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [showIntervalQuiz, setShowIntervalQuiz] = useState(false);

  const filtered = QUESTIONS.filter((q) => q.category === activeCategory);
  const totalQuestions = filtered.length;
  const question = filtered[currentQ];

  const startQuiz = (cat: QuizCategory) => {
    setActiveCategory(cat);
    setCurrentQ(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setDone(false);
    setShowIntervalQuiz(false);
  };

  const handleSelect = (idx: number) => {
    setSelected(idx);
    setRevealed(true);
    if (idx === question.correctIndex) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentQ < totalQuestions - 1) {
      setCurrentQ((i) => i + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      setDone(true);
    }
  };

  const handleRestart = () => {
    setActiveCategory(null);
    setCurrentQ(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setDone(false);
  };

  return (
    <>
      <SchemaMarkup
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Music Theory Quiz | Blob Opera",
          description: "Interactive music theory quizzes about voice types, harmony, and Blob Opera.",
        }}
      />

      <section className="pt-10 pb-6 px-4 text-center">
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-3">
          Music Theory Quiz
        </h1>
        <p className="text-text-dark/60 max-w-2xl mx-auto text-base leading-relaxed">
          Test your knowledge of voice types, harmony, and Blob Opera. Challenge yourself with our interactive quizzes or train your ears with interval recognition.
        </p>
      </section>

      <SidebarLayout>
        {/* Quiz selection or active quiz */}
        {!activeCategory && !showIntervalQuiz && (
          <div className="space-y-6">
            {/* Knowledge quizzes */}
            <h2 className="font-heading font-bold text-xl text-text-dark">Knowledge Quizzes</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {Object.values(QUIZ_META).map((meta) => (
                <button
                  key={meta.id}
                  onClick={() => startQuiz(meta.id)}
                  className="bg-white rounded-2xl border border-gray-100 p-5 text-left hover:shadow-md hover:border-primary/30 transition-all duration-200 group"
                >
                  <p className="text-3xl mb-3">{meta.icon}</p>
                  <h3 className="font-heading font-bold text-base text-text-dark group-hover:text-primary transition-colors mb-1">
                    {meta.label}
                  </h3>
                  <p className="text-sm text-text-dark/60 leading-relaxed">{meta.description}</p>
                </button>
              ))}
            </div>

            {/* Interval ear training */}
            <h2 className="font-heading font-bold text-xl text-text-dark pt-4">Ear Training</h2>
            <button
              onClick={() => setShowIntervalQuiz(true)}
              className="bg-white rounded-2xl border border-gray-100 p-5 text-left hover:shadow-md hover:border-primary/30 transition-all duration-200 group w-full sm:w-auto"
            >
              <p className="text-3xl mb-3">{'\uD83D\uDC42'}</p>
              <h3 className="font-heading font-bold text-base text-text-dark group-hover:text-primary transition-colors mb-1">
                Interval Ear Training
              </h3>
              <p className="text-sm text-text-dark/60 leading-relaxed">
                Listen to pairs of tones generated with Web Audio and identify the interval. Practice recognizing major thirds, perfect fifths, and more.
              </p>
            </button>
          </div>
        )}

        {showIntervalQuiz && (
          <div>
            <button
              onClick={() => setShowIntervalQuiz(false)}
              className="mb-5 text-sm text-primary hover:underline font-heading font-semibold"
            >
              &larr; Back to Quiz Menu
            </button>
            <IntervalQuiz />
          </div>
        )}

        {activeCategory && question && !done && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <button
                onClick={handleRestart}
                className="text-sm text-primary hover:underline font-heading font-semibold"
              >
                &larr; All Quizzes
              </button>
              <span className="text-xs text-text-dark/50 font-medium">
                Score: {score}/{currentQ + (revealed && selected === question.correctIndex ? 1 : 0)}
              </span>
            </div>
            <ProgressBar current={currentQ} total={totalQuestions} />
            <div className="mt-4">
              <QuestionCard
                key={question.id}
                question={question}
                selected={selected}
                onSelect={handleSelect}
                revealed={revealed}
                onNext={handleNext}
                isLast={currentQ === totalQuestions - 1}
              />
            </div>
          </div>
        )}

        {activeCategory && done && (
          <QuizResults score={score} total={totalQuestions} onRestart={handleRestart} />
        )}
      </SidebarLayout>
    </>
  );
}
