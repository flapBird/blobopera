import { buildMetadata, buildVideoGameJsonLd } from "@/lib/seo";
import Hero from "@/components/Hero";
import SidebarLayout from "@/components/SidebarLayout";
import SchemaMarkup from "@/components/SchemaMarkup";
import AdSlot from "@/components/AdSlot";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticleMetas } from "@/lib/articles";
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
    heading: "How the Blobs Learn to Sing",
    body: "The voices you hear from the blobs are not pre-recorded audio clips. They are generated live by an AI that was trained on real opera singers. Google invited four professional singers — a bass, a tenor, a mezzo-soprano, and a soprano — to record about 16 hours of singing material.         Christian Joel (bass), Frederick Tong (tenor), Joanna Goldsmith-Eteson (mezzo-soprano), and Elora Wesner (soprano) each spent hours in a recording studio.  They sang at different pitches, with different vowel shapes, and in different styles. This taught the AI how a real voice behaves: how vibrato works, how notes slide between pitches, and how vowels like 'oo' and 'ah' change the timbre and color of a sound.",  },
  {
    heading: "AI Harmony Engine",
    body: "When you drag one blob to play a melody, the other three automatically harmonize with it. Google built a separate AI model specifically for this: it listens to the note you are playing and computes what the other three voices should sing to create a pleasant four-part harmony in real time. The harmony engine understands music theory concepts like chord progressions and voice leading, so the result sounds natural — as if a real vocal quartet was following your lead. This is why you do not need any music knowledge to make something that sounds good.",
  },
  {
    heading: "Why It Sounds So Natural",
    body: "Blob Opera stands out because the AI model was trained on actual voice data rather than synthetic samples. Each of the four singers recorded hours of material covering their full vocal range, including smooth transitions between notes (portamento), different levels of vibrato, and various articulation styles. The model learned to mimic these expressive techniques rather than simply stitching together recorded fragments.",
  },
  {
    heading: "Blob Opera Is for Everyone",
    body: "Blob Opera was designed to remove every barrier between you and making music. There is no login screen, no tutorial to sit through, and no wrong notes. You can start playing the moment the page loads, and the blobs will always sound musical because the AI handles the hard parts.",
  },
];
const HOW_TO_PLAY_STEPS = [
  ["Drag up", "Raises the pitch. The higher you drag, the higher the note."],
  ["Drag down", "Lowers the pitch. The further down you go, the deeper the note."],
  ["Drag left", "Shapes the vowel toward 'ah'. The sound opens up, becoming brighter and more operatic."],
  ["Drag right", "Shapes the vowel toward 'oo'. The sound becomes rounder, softer, and more mellow."],
];
const FAQ_ITEMS = [
  {
    q: "Who created Blob Opera?",
    a: "Blob Opera was created by artist and developer David Li, in collaboration with Google Arts & Culture.",
  },
  {
    q: "When was Blob Opera released?",
    a: "It launched in December 2020 as a holiday experiment. Since then it has been played by millions of people around the world.",
  },
  {
    q: "Do I need musical training to play?",
    a: "Not at all. Blob Opera was designed so that anyone can jump in and make something that sounds good. Just drag a blob and listen.",
  },
  {
    q: "What are the four vocal ranges?",
    a: "The four blobs sing in bass, tenor, mezzo-soprano, and soprano — covering the full range from the lowest operatic notes to the highest.",
  },
  {
    q: "Is Blob Opera really free?",
    a: "Yes, completely free. There are no ads, no paywalls, and no account required.",
  },
  {
    q: "Can I save or share my music?",
    a: "You can record your performance right inside the game and get a unique link to share it with friends.",
  },
];
export default function HomePage() {
  const latestArticles = getAllArticleMetas().slice(0, 4);
  return (
    <>
      <SchemaMarkup jsonLd={buildVideoGameJsonLd()} />
      <Hero />
      <SidebarLayout>
        {/* Game introduction sections */}
        <section className="space-y-8">
          {GAME_SECTIONS.slice(0, 1).map((section, i) => (
            <div key={i}>
              <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">{section.heading}</h2>
              <p className="text-text-dark/70 leading-relaxed">{section.body}</p>
            </div>
          ))}
          <ImagePlaceholder src="/blob-desc-1.webp" alt="Blob Opera singing quartet" />
          {GAME_SECTIONS.slice(1, 2).map((section, i) => (
            <div key={`v-${i}`}>
              <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">{section.heading}</h2>
              <p className="text-text-dark/70 leading-relaxed">{section.body}</p>
            </div>
          ))}
          {/* How to Play */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">How to Play</h2>
            <div className="space-y-4">
              {HOW_TO_PLAY_STEPS.map(([action, desc], i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-24 h-8 rounded-full bg-primary/10 text-primary font-heading font-bold text-sm flex-shrink-0 mt-0.5">{action}</span>
                  <p className="text-text-dark/70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <ImagePlaceholder src="/blob-desc-2.webp" alt="Blob Opera controls" />
          {/* Record & Replay feature */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
              Record &amp; Replay Your Performance
            </h2>
            <p className="text-text-dark/70 leading-relaxed mb-4">
              Want to save what you have created? The red record button at the bottom
              left of the game screen captures every drag, pitch change, and vowel
              shift as you play.
            </p>
            <p className="text-text-dark/70 leading-relaxed mb-4">
              Once you finish, hit stop and you can play back the entire recording
              right away. The blobs will replay your performance note for note,
              exactly the way you conducted them.
            </p>
            <p className="text-text-dark/70 leading-relaxed">
              You can also share your recording with friends by getting a unique
              link — no account or sign-up required. Just record, share, and
              let others hear what you created.
            </p>
          </div>

          <ImagePlaceholder src="/blob-desc-3.webp" alt="Record button" />
          {/* City themes */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">City Themes &amp; Preset Songs</h2>
            <p className="text-text-dark/70 leading-relaxed mb-4">Blob Opera is not just one stage — it takes you around the world. Each city has its own unique backdrop and preset songs.</p>
            <p className="text-text-dark/70 leading-relaxed">Switch between London, New York, and Sydney to change the stage background and available songs.</p>
          </div>
          <ImagePlaceholder src="/blob-desc-4.webp" alt="Blob Opera city theme switcher" />
          {GAME_SECTIONS.slice(2).map((section, i) => (
            <div key={`h-${i}`}>
              <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">{section.heading}</h2>
              <p className="text-text-dark/70 leading-relaxed">{section.body}</p>
            </div>
          ))}
          <ImagePlaceholder src="/blob-desc-5.webp" maxWidth={700} alt="" />
          {/* Latest Articles section */}
          {latestArticles.length > 0 && (
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading font-bold text-2xl text-text-dark">Latest Articles</h2>
                <Link
                  href="/articles"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  View all articles &rarr;
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {latestArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          )}
{/* FAQ section */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i}>
                  <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">{item.q}</h3>
                  <p className="text-text-dark/70 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
          <VideoPlaceholder title="See Blob Opera in Action" videoId="ZfLYuXi6sDI" />
        </section>
        <AdSlot type="banner" className="my-8" />
      </SidebarLayout>
    </>
  );
}
