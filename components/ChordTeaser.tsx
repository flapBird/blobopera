const PRESETS = [
  { name: "C Major", notes: "C - E - G", quality: "Consonant" },
  { name: "C Minor", notes: "C - Eb - G", quality: "Consonant" },
  { name: "C Diminished", notes: "C - Eb - Gb", quality: "Dissonant" },
  { name: "C Augmented", notes: "C - E - G#", quality: "Dissonant" },
  { name: "C Major 7th", notes: "C - E - G - B", quality: "Mixed" },
  { name: "C Minor 7th", notes: "C - Eb - G - Bb", quality: "Mixed" },
];

const qualityColors: Record<string, string> = {
  Consonant: "text-green-600 bg-green-50",
  Dissonant: "text-red-600 bg-red-50",
  Mixed: "text-amber-600 bg-amber-50",
};

export default function ChordTeaser() {
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      {PRESETS.map((chord) => (
        <div
          key={chord.name}
          className="bg-white rounded-xl border border-gray-100 px-4 py-3 hover:shadow-sm hover:border-primary/20 transition-all duration-200"
        >
          <div className="flex items-center justify-between mb-1">
            <p className="font-heading font-bold text-sm text-text-dark leading-snug">
              {chord.name}
            </p>
            <span className={`text-[10px] font-heading font-semibold px-1.5 py-0.5 rounded ${qualityColors[chord.quality]}`}>
              {chord.quality}
            </span>
          </div>
          <p className="text-xs text-text-dark/40 font-mono">{chord.notes}</p>
        </div>
      ))}
    </div>
  );
}
