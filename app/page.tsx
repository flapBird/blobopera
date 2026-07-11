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
    heading: "How the Blobs Learn to Sing",
    body: "The voices you hear from the blobs are not pre-recorded audio clips. They are generated live by an AI that was trained on real opera singers. Google invited four professional singers — a bass, a tenor, a mezzo-soprano, and a soprano — to record about 16 hours of singing material. They sang at different pitches, with different vowel shapes, and in different styles. This taught the AI how a real voice behaves: how vibrato works, how notes slide between pitches, and how vowels like ‘oo’ and ‘ah’ change the timbre and color of a sound.",
  },
  {
    heading: "AI Harmony Engine",
    body: "When you drag one blob to play a melody, the other three automatically harmonize with it. Google built a separate AI model specifically for this: it listens to the note you are playing and computes what the other three voices should sing to create a pleasant four-part harmony in real time. The harmony engine understands music theory concepts like chord progressions and voice leading, so the result sounds natural — as if a real vocal quartet was following your lead. This is why you do not need any music knowledge to make something that sounds good. Whether you drag gently for a soft melody or move quickly for dramatic effects, the AI adjusts instantly to keep the harmony balanced.",
  },
  {
    heading: "Why It Sounds So Natural",
    body: "Blob Opera stands out because the AI model was trained on actual voice data rather than synthetic samples. Each of the four singers recorded hours of material covering their full vocal range, including smooth transitions between notes (portamento), different levels of vibrato, and various articulation styles. The model learned to mimic these expressive techniques rather than simply stitching together recorded fragments. When you drag a blob quickly, you hear a natural vocal slide instead of an abrupt pitch jump. When you hold a note, you hear subtle variations in tone rather than a static sound. Combined with the automatic harmony engine, every performance feels alive and uniquely yours.",
  },
  {
    heading: "Blob Opera Is for Everyone",
    body: "Blob Opera was designed to remove every barrier between you and making music. There is no login screen, no tutorial to sit through, and no wrong notes. You can start playing the moment the page loads, and the blobs will always sound musical because the AI handles the hard parts. Teachers use Blob Opera in classrooms to introduce students to vocal ranges and harmony. Parents enjoy it with young children who love watching the colorful blobs respond to their touch. Even professional musicians sometimes use it as a quick sketching tool for vocal arrangements. It is a rare thing — a piece of technology that is both deeply sophisticated and genuinely joyful to use.",
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
          </div>

          {/* How to Play screenshot */}
          <ImagePlaceholder
            src="/blob-desc-2.webp"
            alt="Blob Opera controls — dragging a blob to change pitch and vowel sound"
            caption="Drag up and down to change pitch, left and right to shape the vowel."
          />

          <div>
            <p className="text-text-dark/70 leading-relaxed mt-4">
              All four blobs harmonize automatically. Play them together for rich
              chords or focus on just one for a solo melody. Hit the record button
              to capture your performance and share it with a link — no sign-up needed.
            </p>
          </div>

          {/* Record & Replay feature */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
              Record & Replay Your Performance
            </h2>
            <p className="text-text-dark/70 leading-relaxed mb-4">
              Want to save what you have created? There is a red record button at
              the bottom left of the game screen. Tap it and the blobs start
              listening — every drag, every pitch change, every vowel shift gets
              captured as you play.
            </p>
            <p className="text-text-dark/70 leading-relaxed mb-4">
              Once you finish, hit stop and you can play back the entire recording
              right away. The blobs will replay your performance note for note,
              exactly the way you conducted them. It is surprisingly satisfying
              to sit back and watch the blobs perform the song you just made.
            </p>
            <p className="text-text-dark/70 leading-relaxed">
              You can also share your recording with friends by getting a unique
              link — no account or sign-up required. Just record, share, and
              let others hear what you created.
            </p>
          </div>

          {/* Record button screenshot placeholder */}
          <ImagePlaceholder
            src="/blob-desc-3.webp"
            alt="Record button at the bottom left of the Blob Opera game screen"
            caption="Tap the red record button, play your song, then replay it note for note."
          />

          {/* City themes and preset songs feature */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
              City Themes & Preset Songs
            </h2>
            <p className="text-text-dark/70 leading-relaxed mb-4">
              Blob Opera is not just one stage — it takes you around the world. 
              There is a button at the bottom right of the game screen that lets you 
              switch between different cities, like London, New York, and Sydney. 
              Each city has its own unique backdrop, so the blobs get a fresh look 
              every time you switch.
            </p>
            <p className="text-text-dark/70 leading-relaxed mb-4">
              The music changes too. On the left side of the screen, there is a 
              playlist of preset songs that match the city you have selected. 
              You can pick a song from the list and let the blobs sing it for you, 
              or use it as a starting point and take over by dragging them to add 
              your own twist. It is a great way to explore different musical styles 
              without having to compose from scratch.
            </p>
            <p className="text-text-dark/70 leading-relaxed">
              Whether you want the blobs to perform a classical piece under the 
              London skyline or something more playful with a New York backdrop, 
              the city themes make the experience feel fresh every time.
            </p>
          </div>

          {/* City themes screenshot placeholder */}
          <ImagePlaceholder
            src="/blob-desc-4.webp"
            alt="Blob Opera city theme switcher — London, New York, and Sydney backdrops"
            caption="Switch between city themes to change the stage background and available songs."
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

          {/* Image placeholder between how-to-play and magic */}
          <ImagePlaceholder
            src="/blob-desc-5.webp"
            maxWidth={700}
            alt=""
          />


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
