import { buildMetadata, buildVideoGameJsonLd } from "@/lib/seo";
import Hero from "@/components/Hero";
import SidebarLayout from "@/components/SidebarLayout";
import SchemaMarkup from "@/components/SchemaMarkup";
import AdSlot from "@/components/AdSlot";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import VideoPlaceholder from "@/components/VideoPlaceholder";

export const metadata = buildMetadata({ path: "/" });

const GAME_SECTIONS = [
  {
    heading: "What is Blob Opera?",
    body: "Blob Opera is a delightfully creative music experiment from Google Arts & Culture, built by artist and coder David Li. It lets you conduct a quartet of singing blobs — each with its own vocal range — to create surprisingly beautiful opera music right in your browser. There is no sheet music to read, no instruments to tune, and absolutely nothing to download. It is pure, playful music-making that anyone can pick up in seconds.",
  },
  {
    heading: "Meet the Four Blob Voices",
    body: "Your opera company is made up of four charming blob singers: a deep rumbling Bass, a warm mid-range Tenor, a bright Mezzo-Soprano, and an angelic high Soprano. Each blob has its own personality and vocal color. Together they harmonize automatically, so even a single drag produces rich, layered chords. Whether you want soaring arias or gentle lullabies, the blobs follow your lead with character and charm.",
  },
  {
    heading: "How to Play",
    body: 'Playing Blob Opera could not be simpler. Click and drag a blob up to raise its pitch, or down to lower it. Drag left and right to shift between vowel sounds — from a rounded "oo" to a bright "ah" — giving each note a different timbre. Want a solo? Just grab one blob and leave the others silent. The built-in machine learning model handles the harmonies, so you can focus on expression and fun. Whenever inspiration strikes, hit the record button to capture your performance. You can then download your composition as an audio file or share a link with friends — all without creating an account.',
  },
  {
    heading: "The Magic Behind the Blobs",
    body: "What makes Blob Opera genuinely special is the technology humming under the hood. Google trained a machine learning model on hours of recordings by real opera singers — bass, tenor, mezzo-soprano, and soprano — teaching it the nuances of vibrato, phrasing, and vowel shaping. When you drag a blob, you are not triggering a pre-recorded sample; you are playing an AI instrument that understands how a real voice behaves. The result is a free online music game that feels alive, responsive, and endlessly surprising. It is as much a music creation tool as it is a game — and perhaps the most joyful demonstration of what creative AI can do.",
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup jsonLd={buildVideoGameJsonLd()} />
      <Hero />
      <SidebarLayout>
        {/* Game introduction sections */}
        <section className="space-y-8">
          {GAME_SECTIONS.slice(0, 1).map((section, i) => (
            <div key={i}>
              <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
                {section.heading}
              </h2>
              <p className="text-text-dark/70 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}

          {/* Image placeholder after first intro section */}
          <ImagePlaceholder
            alt="Blob Opera singing quartet — Bass, Tenor, Mezzo-Soprano, and Soprano blobs on stage"
            caption="The four blob voices in harmony — a snapshot of the Blob Opera stage."
          />

          {GAME_SECTIONS.slice(1, 2).map((section, i) => (
            <div key={`v-${i}`}>
              <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
                {section.heading}
              </h2>
              <p className="text-text-dark/70 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}

          {/* Image placeholder between voice intro and how-to-play */}
          <ImagePlaceholder
            alt="Close-up of dragging a blob to change pitch, demonstrating the game controls"
            caption="Drag any blob vertically to change pitch and horizontally to shape the vowel sound."
          />

          {GAME_SECTIONS.slice(2).map((section, i) => (
            <div key={`h-${i}`}>
              <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
                {section.heading}
              </h2>
              <p className="text-text-dark/70 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}

          {/* YouTube video placeholder */}
          <VideoPlaceholder
            title="See Blob Opera in Action"
            videoId="ZfLYuXi6sDI"
          />
        </section>

        {/* Bottom banner ad */}
        <AdSlot type="banner" className="my-8" />
      </SidebarLayout>
    </>
  );
}
