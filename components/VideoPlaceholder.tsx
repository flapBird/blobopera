interface VideoPlaceholderProps {
  /** YouTube video ID, e.g. "dQw4w9WgXcQ". Will auto-build the embed URL. */
  videoId?: string;
  /** Title shown above the video area. */
  title?: string;
  /** Optional className override. */
  className?: string;
}

/**
 * YouTube video embed section.
 * When no videoId is provided, shows a placeholder zone with a prompt to add the ID.
 * Supply the videoId once you have a trailer or gameplay video to embed.
 */
export default function VideoPlaceholder({
  videoId,
  title = "Watch the Video",
  className = "",
}: VideoPlaceholderProps) {
  return (
    <section className={`my-10 ${className}`}>
      <h2 className="font-heading font-bold text-2xl text-text-dark mb-4">
        {title}
      </h2>

      {videoId ? (
        /* Real YouTube embed */
        <div
          className="relative w-full rounded-xl overflow-hidden shadow-lg bg-black"
          style={{ aspectRatio: "16 / 9" }}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      ) : (
        /* Placeholder */
        <div
          className="relative w-full rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center gap-3"
          style={{ aspectRatio: "16 / 9", minHeight: 200 }}
        >
          <svg
            className="w-12 h-12 text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="text-xs text-gray-400 font-medium">
            YouTube video placeholder — set videoId to embed
          </span>
        </div>
      )}
    </section>
  );
}
