import { siteConfig } from "@/lib/site.config";

const COVER_IMAGES = [
  "/blob-desc-1.webp",
  "/blob-desc-2.webp",
  "/blob-desc-3.webp",
  "/blob-desc-4.webp",
  "/blob-desc-5.webp",
];

export default function GalleryTeaser() {
  const examples = siteConfig.gallery.examples;

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {examples.map((r, idx) => {
        const coverImg = COVER_IMAGES[idx % COVER_IMAGES.length];

        return (
          <div
            key={r.title}
            className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
          >
            {r.shareLink ? (
              <a
                href={r.shareLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={coverImg}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                    <svg className="w-5 h-5 text-text-dark ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </a>
            ) : (
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={coverImg}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <div className="w-12 h-12 rounded-full bg-white/70 shadow-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-text-dark ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            <div className="px-3 py-2.5">
              <p className="font-heading font-semibold text-sm text-text-dark leading-snug truncate">
                {r.title}
              </p>
              <p className="text-xs text-text-dark/40 leading-snug truncate">
                by {r.submitterName}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
