import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "About",
  description: "Learn about Blob Opera — the free online opera music game by David Li and Google Arts & Culture. Create beautiful harmonies with singing blobs right in your browser.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-4">
        About {siteConfig.siteName}
      </h1>
      <div className="space-y-5 text-text-dark/80 leading-relaxed">
        <p>
          Welcome to Blob Opera — your free online destination to play and
          explore one of the most charming music experiments ever created.
          Our site makes it easy to jump straight into the Blob Opera
          experience: conduct a quartet of adorable singing blobs, craft
          your own harmonies, and share your compositions with the world —
          all without downloads, sign-ups, or installations.
        </p>
        <p>
          Blob Opera was originally created by artist and creative coder
          David Li in collaboration with Google Arts & Culture. The project
          uses machine learning trained on real opera recordings, so when
          you drag a blob around the screen you are not just triggering a
          sample — you are playing an AI instrument that understands vibrato,
          vowel shaping, and expression. It is part game, part music
          creation tool, and entirely joyful.
        </p>
        <p>
          We built this site because we believe the Blob Opera experience
          deserves to be just one click away. Whether you are a music
          teacher looking for a classroom activity, a parent introducing
          your child to opera, or just someone who needs a smile, Blob Opera
          delivers. Play it on your laptop during a break, project it on a
          big screen at a party, or let your kids explore the four voice
          parts — bass, tenor, mezzo-soprano, and soprano — and discover
          how harmony works through play.
        </p>
        <p>
          All games on {siteConfig.siteName} can be played for free directly
          in the browser, with no downloads or registration required. We
          are committed to keeping the site fast, simple, and accessible so
          you can focus on what matters: making music.
        </p>
        <p className="text-text-dark/50 text-sm pt-4 border-t border-gray-100">
          Attribution: {siteConfig.game.sourceAttribution}. Visit the{" "}
          <a
            href="https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            official Blob Opera page
          </a>{" "}
          on Google Arts & Culture to learn more about the project.
        </p>
      </div>
    </div>
  );
}
