import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";
import AdsterraNative from "@/components/AdsterraNative";

export const metadata = buildMetadata({
  title: "About",
  description: "Learn about Blob Opera — the free online music experiment by David Li and Google Arts & Culture. This independent site is not affiliated with Google.",
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
          {siteConfig.siteName} is an independent website that makes it easy
          to play and explore Blob Opera — one of the most charming music
          experiments ever created. Our site provides a direct gateway to
          the original game, with no downloads, sign-ups, or installations
          required.
        </p>
        <p>
          Blob Opera was created by artist and creative coder David Li in
          collaboration with Google Arts & Culture. The project uses machine
          learning trained on 16 hours of singing from four professional opera
          singers. One model produces the represented voice types and a second
          lets the quartet harmonize a player&apos;s input in real time.
        </p>
        <p>
          <strong>Important:</strong> {siteConfig.siteName} is an independent
          website and is not affiliated with, endorsed by, or sponsored by
          David Li, Google LLC, or Google Arts & Culture. This site curates
          content about the Blob Opera experience and provides free access
          to the original experiment. The Blob Opera game and its associated
          trademarks and copyrights belong to their respective owners.
        </p>
        <p>
          The embedded experiment can be played for free directly in the
          browser, with no download required by this site. We
          are committed to keeping the site fast, simple, and accessible so
          you can focus on what matters: making music.
        </p>
        <p className="text-text-dark/70 text-sm pt-4 border-t border-gray-100">
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

      <AdsterraNative className="mt-10" />
    </div>
  );
}
