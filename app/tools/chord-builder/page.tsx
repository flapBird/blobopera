"use client";

import { useState, useCallback, useRef } from "react";
import SchemaMarkup from "@/components/SchemaMarkup";


// ---------- music theory constants ----------
const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const BASE_FREQ = 261.63; // C4

interface Note {
  note: string;
  octave: number;
  midi: number;
  freq: number;
}

function buildNotes(startOctave: number, endOctave: number): Note[] {
  const notes: Note[] = [];
  for (let oct = startOctave; oct <= endOctave; oct++) {
    for (let i = 0; i < 12; i++) {
      const midi = (oct + 1) * 12 + i;
      const freq = BASE_FREQ * Math.pow(2, (midi - 60) / 12);
      notes.push({ note: NOTE_NAMES[i], octave: oct, midi, freq });
    }
  }
  return notes;
}

const NOTES = buildNotes(3, 5); // C3 to B5

// Note name to semitone index
function semitoneIndex(noteName: string): number {
  return NOTE_NAMES.indexOf(noteName);
}

// Chord recognition
interface ChordRecognition {
  name: string;
  quality: "consonant" | "dissonant" | "mixed";
}

function recognizeChord(selectedNotes: Note[]): ChordRecognition | null {
  if (selectedNotes.length < 2) return null;

  // Get intervals relative to lowest note
  const sorted = [...selectedNotes].sort((a, b) => a.midi - b.midi);
  const root = sorted[0];
  const intervals = sorted.slice(1).map((n) => n.midi - root.midi);
  const intervalStr = intervals.join(",");

  // Triads
  if (intervals.length === 2) {
    if (intervalStr === "4,7") return { name: "Major Triad", quality: "consonant" };
    if (intervalStr === "3,7") return { name: "Minor Triad", quality: "consonant" };
    if (intervalStr === "3,6") return { name: "Diminished Triad", quality: "dissonant" };
    if (intervalStr === "4,8") return { name: "Augmented Triad", quality: "dissonant" };
    if (intervalStr === "5,7") return { name: "Sus4 Triad", quality: "mixed" };
    if (intervalStr === "5,10") return { name: "Open 5th (Power Chord)", quality: "consonant" };
  }

  // Seventh chords
  if (intervals.length === 3) {
    if (intervalStr === "4,7,11") return { name: "Major 7th", quality: "mixed" };
    if (intervalStr === "3,7,10") return { name: "Minor 7th", quality: "mixed" };
    if (intervalStr === "4,7,10") return { name: "Dominant 7th", quality: "mixed" };
    if (intervalStr === "3,6,10") return { name: "Half-Dim 7th", quality: "dissonant" };
    if (intervalStr === "3,6,9") return { name: "Diminished 7th", quality: "dissonant" };
    if (intervalStr === "4,8,11") return { name: "Augmented Major 7th", quality: "dissonant" };
    if (intervalStr === "3,7,11") return { name: "Minor Major 7th", quality: "dissonant" };
  }

  // Intervals (dyads)
  if (intervals.length === 1) {
    const i = intervals[0];
    if (i === 0) return { name: "Unison", quality: "consonant" };
    if (i === 1) return { name: "Minor 2nd", quality: "dissonant" };
    if (i === 2) return { name: "Major 2nd", quality: "dissonant" };
    if (i === 3) return { name: "Minor 3rd", quality: "consonant" };
    if (i === 4) return { name: "Major 3rd", quality: "consonant" };
    if (i === 5) return { name: "Perfect 4th", quality: "mixed" };
    if (i === 6) return { name: "Tritone", quality: "dissonant" };
    if (i === 7) return { name: "Perfect 5th", quality: "consonant" };
    if (i === 8) return { name: "Minor 6th", quality: "mixed" };
    if (i === 9) return { name: "Major 6th", quality: "consonant" };
    if (i === 10) return { name: "Minor 7th", quality: "mixed" };
    if (i === 11) return { name: "Major 7th", quality: "dissonant" };
    if (i === 12) return { name: "Octave", quality: "consonant" };
    return { name: `${intervalStr[0]}-semitone interval`, quality: "mixed" };
  }

  // Extended chords - try to find a pattern
  if (intervals.length >= 4) {
    const last = intervals[intervals.length - 1];
    if (intervalStr.startsWith("4,7,11") && last === 14) return { name: "Major 9th", quality: "mixed" };
    if (intervalStr.startsWith("4,7,10") && last === 14) return { name: "Dominant 9th", quality: "mixed" };
    if (intervalStr.startsWith("3,7,10") && last === 14) return { name: "Minor 9th", quality: "mixed" };
  }

  return { name: `${selectedNotes.length}-Note Cluster`, quality: "mixed" };
}

// Get interval names between consecutive notes
function getIntervalLabels(selectedNotes: Note[]): string[] {
  if (selectedNotes.length < 2) return [];
  const sorted = [...selectedNotes].sort((a, b) => a.midi - b.midi);
  const labels: string[] = [];
  for (let i = 1; i < sorted.length; i++) {
    const semitones = sorted[i].midi - sorted[i - 1].midi;
    const names: Record<number, string> = {
      1: "m2", 2: "M2", 3: "m3", 4: "M3", 5: "P4",
      6: "TT", 7: "P5", 8: "m6", 9: "M6", 10: "m7",
      11: "M7", 12: "Oct",
    };
    labels.push(names[semitones] ?? `${semitones}st`);
  }
  return labels;
}

// ---------- audio ----------
const audioCtxRef: { current: AudioContext | null } = { current: null };

function getAudioCtx(): AudioContext {
  if (!audioCtxRef.current) {
    audioCtxRef.current = new AudioContext();
  }
  return audioCtxRef.current;
}

function playChord(notes: Note[]) {
  if (notes.length === 0) return;
  try {
    const ctx = getAudioCtx();
    if (ctx.state === "suspended") ctx.resume();

    notes.forEach((note, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = note.freq;

      // Stagger slightly for realism
      const startOffset = idx * 0.05;
      const duration = 1.5;
      gain.gain.setValueAtTime(0, ctx.currentTime + startOffset);
      gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + startOffset + 0.08);
      gain.gain.setValueAtTime(0.25, ctx.currentTime + startOffset + duration - 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startOffset + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + startOffset);
      osc.stop(ctx.currentTime + startOffset + duration);
    });
  } catch {
    /* audio not available */
  }
}

function playNotePreview(note: Note) {
  try {
    const ctx = getAudioCtx();
    if (ctx.state === "suspended") ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = note.freq;
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.4);
  } catch {
    /* audio not available */
  }
}

// ---------- octave grouping ----------
const OCTAVES = [3, 4, 5];

function getNotesInOctave(oct: number): Note[] {
  return NOTES.filter((n) => n.octave === oct);
}

// ---------- page ----------
export default function ChordBuilderPage() {
  const [selectedNotes, setSelectedNotes] = useState<Note[]>([]);
  const [showLabels, setShowLabels] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleNote = useCallback((note: Note) => {
    setSelectedNotes((prev) => {
      const exists = prev.find((n) => n.midi === note.midi);
      if (exists) {
        return prev.filter((n) => n.midi !== note.midi);
      }
      return [...prev, note];
    });
  }, []);

  const handleNoteHover = useCallback((note: Note) => {
    playNotePreview(note);
  }, []);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    playChord(selectedNotes);
    setTimeout(() => setIsPlaying(false), 200);
  }, [selectedNotes]);

  const handleClear = useCallback(() => {
    setSelectedNotes([]);
  }, []);

  const sortedSelected = [...selectedNotes].sort((a, b) => a.midi - b.midi);
  const recognition = recognizeChord(sortedSelected);
  const intervalLabels = getIntervalLabels(sortedSelected);

  const qualityColors: Record<string, string> = {
    consonant: "text-green-600 bg-green-50 border-green-200",
    dissonant: "text-red-600 bg-red-50 border-red-200",
    mixed: "text-amber-600 bg-amber-50 border-amber-200",
  };

  const qualityLabels: Record<string, string> = {
    consonant: "Consonant",
    dissonant: "Dissonant",
    mixed: "Mixed",
  };

  return (
    <>
      <SchemaMarkup
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Chord Builder — Interactive Harmony Tool",
          description: "Build and hear chords interactively with Web Audio API.",
        }}
      />

      <section className="pt-10 pb-6 px-4 text-center">
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-3">
          Chord Builder
        </h1>
        <p className="text-text-dark/60 max-w-2xl mx-auto text-base leading-relaxed">
          Click notes to build chords and hear them with Web Audio. Learn how different intervals create consonance, dissonance, and everything in between.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-8">
          {/* Chord info panel */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h2 className="font-heading font-bold text-2xl text-text-dark">
                {recognition ? recognition.name : "Select Notes"}
              </h2>
              {recognition && (
                <span
                  className={`px-3 py-1 rounded-lg text-xs font-heading font-semibold border ${qualityColors[recognition.quality]}`}
                >
                  {qualityLabels[recognition.quality]}
                </span>
              )}
            </div>
            {sortedSelected.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {sortedSelected.map((n, idx) => (
                  <span key={n.midi} className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/5 text-primary rounded-lg text-sm font-heading font-semibold">
                    {n.note.replace("#", "\u266F")}{n.octave}
                    {idx < intervalLabels.length && (
                      <span className="text-xs text-text-dark/40 ml-1">{intervalLabels[idx]}</span>
                    )}
                  </span>
                ))}
              </div>
            )}
            {sortedSelected.length === 0 && (
              <p className="text-sm text-text-dark/40">Click on the keys below to start building a chord.</p>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              onClick={handlePlay}
              disabled={selectedNotes.length === 0}
              className={`px-6 py-2.5 rounded-xl font-heading font-bold text-sm transition-all ${
                selectedNotes.length > 0
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-gray-100 text-gray-300 cursor-not-allowed"
              }`}
            >
              {isPlaying ? "\uD83C\uDFB5 Playing..." : "\u25B6 Play Chord"}
            </button>
            <button
              onClick={handleClear}
              className="px-4 py-2.5 rounded-xl border-2 border-gray-200 text-text-dark/60 hover:border-gray-300 hover:text-text-dark font-heading font-semibold text-sm transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={() => setShowLabels(!showLabels)}
              className={`px-4 py-2.5 rounded-xl border-2 font-heading font-semibold text-sm transition-colors ${
                showLabels
                  ? "border-primary/30 text-primary bg-primary/5"
                  : "border-gray-200 text-text-dark/60 hover:border-gray-300"
              }`}
            >
              Labels {showLabels ? "ON" : "OFF"}
            </button>
          </div>

          {/* Piano keyboard */}
          <div className="overflow-x-auto pb-4">
            <div className="min-w-[600px]">
              {OCTAVES.map((oct) => (
                <div key={oct} className="mb-2">
                  <p className="text-xs text-text-dark/30 font-heading font-semibold mb-1">Octave {oct}</p>
                  <div className="flex gap-0.5">
                    {getNotesInOctave(oct).map((note) => {
                      const isSharp = note.note.includes("#");
                      const isSelected = selectedNotes.some((n) => n.midi === note.midi);
                      const keyColor = isSharp
                        ? "bg-gray-800 hover:bg-gray-700 text-white"
                        : "bg-white hover:bg-gray-50 text-text-dark border border-gray-200";
                      const selectedColor = isSharp
                        ? "bg-primary/80 ring-2 ring-primary"
                        : "bg-primary/10 border-primary/40 ring-2 ring-primary/30";

                      // White keys wider, black keys narrower
                      const widthClass = isSharp ? "w-9" : "flex-1";
                      const heightClass = isSharp ? "h-20" : "h-24";

                      return (
                        <button
                          key={note.midi}
                          onClick={() => toggleNote(note)}
                          onMouseEnter={() => handleNoteHover(note)}
                          className={`
                            ${widthClass} ${heightClass} rounded-lg text-xs font-heading font-semibold
                            transition-all duration-150 flex flex-col items-center justify-end pb-2 relative
                            ${isSelected ? selectedColor : keyColor}
                            ${isSharp ? "shadow-md" : "shadow-sm"}
                          `}
                          title={`${note.note}${note.octave} (${note.freq.toFixed(1)} Hz)`}
                        >
                          {showLabels && (
                            <span className={`${isSharp ? "text-white/60" : "text-text-dark/30"} text-[10px] leading-none`}>
                              {note.note.replace("#", "\u266F")}
                            </span>
                          )}
                          {isSelected && (
                            <span className="absolute top-1 right-1 text-[10px]">{'\u25CF'}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend section */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <h3 className="font-heading font-bold text-sm text-text-dark mb-3">About Consonance &amp; Dissonance</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="p-3 rounded-xl bg-green-50 border border-green-200">
                <span className="text-xs font-heading font-bold text-green-700">Consonant</span>
                <p className="text-xs text-green-600/80 mt-1 leading-relaxed">
                  Intervals that sound stable and pleasant together. Examples: major/minor thirds, perfect fifths, and sixths.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                <span className="text-xs font-heading font-bold text-amber-700">Mixed</span>
                <p className="text-xs text-amber-600/80 mt-1 leading-relaxed">
                  Intervals that can sound either stable or tense depending on context. Perfect fourths and sevenths fall here.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                <span className="text-xs font-heading font-bold text-red-700">Dissonant</span>
                <p className="text-xs text-red-600/80 mt-1 leading-relaxed">
                  Intervals that create tension and a need for resolution. Tritones, seconds, and sevenths create this effect.
                </p>
              </div>
            </div>
            <p className="text-xs text-text-dark/40 mt-3 leading-relaxed">
              This tool generates tones using the Web Audio API. Each note is a pure sine-triangle wave — real instruments
              add overtones that make chords sound richer, but the underlying harmonic relationships are the same.
              The harmony engine in Blob Opera uses these same principles to create its beautiful four-part harmonies.
            </p>
          </div>

          {/* Quick chord presets */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <h3 className="font-heading font-bold text-sm text-text-dark mb-3">Quick Presets</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "C Major", notes: [0, 4, 7], oct: 4 },
                { label: "C Minor", notes: [0, 3, 7], oct: 4 },
                { label: "C Dim", notes: [0, 3, 6], oct: 4 },
                { label: "C Aug", notes: [0, 4, 8], oct: 4 },
                { label: "C Major 7", notes: [0, 4, 7, 11], oct: 4 },
                { label: "C Dom 7", notes: [0, 4, 7, 10], oct: 4 },
                { label: "C Minor 7", notes: [0, 3, 7, 10], oct: 4 },
              ].map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => {
                    const presetNotes = preset.notes.map((semi) => {
                      const midi = (preset.oct + 1) * 12 + semi;
                      return NOTES.find((n) => n.midi === midi)!;
                    }).filter(Boolean);
                    setSelectedNotes(presetNotes);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-heading font-semibold text-text-dark/70 hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-colors"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
