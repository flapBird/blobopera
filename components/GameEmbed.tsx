import { siteConfig } from "@/lib/site.config";

export default function GameEmbed() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div
        className="relative w-full rounded-xl overflow-hidden shadow-lg bg-gray-100"
        style={{ aspectRatio: siteConfig.game.aspectRatio }}
      >
        <iframe
          src={siteConfig.game.embedUrl}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          title={siteConfig.game.name}
        />
      </div>
    </div>
  );
}
