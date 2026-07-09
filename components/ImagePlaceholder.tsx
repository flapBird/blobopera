interface ImagePlaceholderProps {
  /** Descriptive alt text for SEO and accessibility. */
  alt: string;
  /** Optional caption shown below the image area. e.g. "Figure 1: The four blob voices." */
  caption?: string;
  /** Optional className override for the outer wrapper. */
  className?: string;
}

/**
 * A placeholder zone for a game screenshot or illustration.
 * Replace this with an actual `<Image>` / `<img>` tag once you have real assets.
 */
export default function ImagePlaceholder({
  alt,
  caption,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <figure className={`my-8 ${className}`}>
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
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-text-dark/50 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
