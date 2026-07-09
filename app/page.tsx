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
    heading: "The Magic Behind the Blobs",
    body: "What makes Blob Opera genuinely special is the technology humming under the hood. Google trained a machine learning model on hours of recordings by real opera singers — bass, tenor, mezzo-soprano, and soprano — teaching it the nuances of vibrato, phrasing, and vowel shaping. When you drag a blob, you are not triggering a pre-recorded sample; you are playing an AI instrument that understands how a real voice behaves. The result is a free online music game that feels alive, responsive, and endlessly surprising. It is as much a music creation tool as it is a game — and perhaps the most joyful demonstration of what creative AI can do.",
  },
];

const HOW_TO_PLAY_STEPS = [
  ["Drag up", "Raises the pitch. The higher you drag, the higher the note. Each blob has its own comfortable vocal range — from deep bass to soaring soprano."],
  ["Drag down", "Lowers the pitch. The further down you go, the deeper the note. Slide smoothly between low and high, just like a real voice."],
  ["Drag left", "Shapes the vowel toward 'oo'. The sound becomes rounder, softer, and more mellow."],
  ["Drag right", "Shapes the vowel toward 'ah'. The sound opens up, becoming brighter and more operatic."],
];

const FAQ_ITEMS = [
  {
    q: "Who created Blob Opera?",
    a: "Blob Opera was created by artist and developer David Li, in collaboration with Google Arts & Culture. David is known for blending creative coding with playful interaction design — and this project is perhaps his most delightful work yet.",
  },
  {
    q: "When was Blob Opera released?",
    a: "It launched in December 2020 as a holiday experiment. Since then it has been played by millions of people around the world and remains one of the most popular projects on Google Arts & Culture.",
  },
  {
    q: "Do I need musical training to play?",
    a: "Not at all. Blob Opera was designed so that anyone — regardless of musical background — can jump in and make something that sounds good. Just drag a blob and listen. The machine learning model handles the harmonies for you, so even random movements can produce surprisingly musical results.",
  },
  {
    q: "What are the four vocal ranges?",
    a: "The four blobs sing in bass, tenor, mezzo-soprano, and soprano — covering the full range from the lowest operatic notes to the highest. Each voice was trained on real opera recordings, so they sound remarkably authentic.",
  },
  {
    q: "Is Blob Opera really free?",
    a: "Yes, completely free. There are no ads, no paywalls, and no account required. Just open the page and start playing.",
  },
  {
    q: "Can I save or share my music?",
    a: "You can record your performance right inside the game and get a unique link to share it with friends. While you cannot download an audio file directly, the shareable link preserves your entire performance so anyone can hear it.",
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

          <ImagePlaceholder
            src="/blob-desc-1.webp"
            alt="Blob Opera singing quartet — Bass, Tenor, Mezzo-Soprano, and Soprano blobs on stage"
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

          {/* How to Play */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
              How to Play
            </h2>
            <p className="text-text-dark/70 leading-relaxed mb-4">
              Blob Opera is controlled entirely with your mouse or touch — no
              keyboard required. Here is how each movement works:
            </p>
            <div className="space-y-4">
              {HOW_TO_PLAY_STEPS.map(([action, desc], i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-24 h-8 rounded-full bg-primary/10 text-primary font-heading font-bold text-sm flex-shrink-0 mt-0.5">
                    {action}
                  </span>
                  <p className="text-text-dark/70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-text-dark/70 leading-relaxed mt-4">
              All four blobs harmonize automatically. Play them together for rich
              chords or focus on just one for a solo melody. Hit the record button
              to capture your performance and share it with a link — no sign-up needed.
            </p>
          </div>

          {/* Image placeholder between how-to-play and magic */}
          <ImagePlaceholder
            src="/blob-desc-2.webp"
            maxWidth={700}
            alt="Close-up of dragging a blob to change pitch, demonstrating the game controls"
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

          {/* FAQ section */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i}>
                  <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">
                    {item.q}
                  </h3>
                  <p className="text-text-dark/70 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <VideoPlaceholder
            title="See Blob Opera in Action"
            videoId="ZfLYuXi6sDI"
          />
        </section>

        <AdSlot type="banner" className="my-8" />
      </SidebarLayout>
    </>
  );
}
