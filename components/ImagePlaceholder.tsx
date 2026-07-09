interface ImagePlaceholderProps {
  alt: string;
  src?: string;
  caption?: string;
  className?: string;
  /** Optional max-width in px, e.g. 600. Only applies when src is set. */
  maxWidth?: number;
}

export default function ImagePlaceholder({
  alt,
  src,
  caption,
  className = "",
  maxWidth,
}: ImagePlaceholderProps) {
  // When maxWidth is set, constrain the figure itself and center it
  const figStyle = maxWidth
    ? { maxWidth: `${maxWidth}px`, marginLeft: "auto", marginRight: "auto" }
    : {};

  return (
    <figure className={`my-8 ${className}`} style={figStyle}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full rounded-xl object-cover"
          style={{ aspectRatio: "16 / 9" }}
          loading="lazy"
        />
      ) : (
        <div
          className="relative w-full rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center gap-3"
          style={{ aspectRatio: "16 / 9", minHeight: 200 }}
        >
          <svg
            className="w-10 h-10 text-gray-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 012.832 0l2.568 2.568a2.25 2.25 0 002.832 0l4.609-4.609m.75.75v-7.5h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-xs text-gray-400 font-medium">
            Screenshot placeholder
          </span>
        </div>
      )}
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-text-dark/50 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
