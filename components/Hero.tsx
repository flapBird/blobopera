import { siteConfig } from "@/lib/site.config";
import GameEmbed from "./GameEmbed";

export default function Hero() {
  return (
    <section className="pt-6 pb-6 px-4">
      <h1 className="sr-only">{siteConfig.game.name} — Play Free Online</h1>
      <GameEmbed />
    </section>
  );
}
