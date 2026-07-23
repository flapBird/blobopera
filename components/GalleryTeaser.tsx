const SAMPLE_RECORDINGS = [
  {
    title: "Happy Little Blobs",
    submitterName: "MusicFan42",
    shareLink: "https://blob-opera.com/share/example1",
  },
  {
    title: "Bedtime Lullaby",
    submitterName: "NightOwl",
    shareLink: "https://blob-opera.com/share/example2",
  },
  {
    title: "Dramatic Opera Scene",
    submitterName: "OperaLover",
    shareLink: "https://blob-opera.com/share/example3",
  },
];

export default function GalleryTeaser() {
  return (
    <div className="grid gap-2">
      {SAMPLE_RECORDINGS.map((r) => (
        <a
          key={r.title}
          href={r.shareLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3 hover:shadow-sm hover:border-primary/20 transition-all duration-200 group"
        >
          <p className="text-lg flex-shrink-0">{'\uD83C\uDFB6'}</p>
          <div className="min-w-0 flex-1">
            <p className="font-heading font-semibold text-sm text-text-dark group-hover:text-primary transition-colors leading-snug truncate">
              {r.title}
            </p>
            <p className="text-xs text-text-dark/40 leading-snug">
              by {r.submitterName}
            </p>
          </div>
          <span className="text-xs text-primary font-heading font-semibold flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            Listen &rarr;
          </span>
        </a>
      ))}
    </div>
  );
}
