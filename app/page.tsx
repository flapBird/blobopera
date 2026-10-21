import Link from "next/link";
import Hero from "@/components/Hero";
import SidebarLayout from "@/components/SidebarLayout";
import SchemaMarkup from "@/components/SchemaMarkup";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ArticleCard from "@/components/ArticleCard";
import AdsterraNative from "@/components/AdsterraNative";
import { buildMetadata, buildVideoGameJsonLd } from "@/lib/seo";
import { getFeaturedGuides } from "@/lib/articles";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({ path: "/", includeCanonical: false });

const OFFICIAL_EXPERIMENT =
  "https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw";
const OFFICIAL_STORY =
  "https://blog.google/company-news/outreach-and-initiatives/arts-culture/story-behind-blob-opera-world-tour/";

const GUIDE_SECTIONS = [
  {
    heading: "What is Blob Opera?",
    body: (
      <>
        Blob Opera is a machine-learning music experiment created by artist
        David Li in collaboration with Google Arts &amp; Culture. It first
        appeared in late 2020 and turns a four-part vocal ensemble into a
        playful instrument that runs in a web browser. You do not sing into a
        microphone or read notation. Instead, you move colorful characters and
        hear an opera-inspired performance respond immediately. The design is
        intentionally approachable: a first-time visitor can discover the main
        controls by experimenting, while a musician can listen more closely to
        pitch, vocal range, vowel color, and harmony. This page embeds the
        original Google-hosted experiment; the surrounding guide and learning
        tools are provided by this independent fan site. If this is your first
        visit, the{" "}
        <Link
          href="/articles/how-to-play-blob-opera"
          className="font-semibold text-primary underline underline-offset-4"
        >
          step-by-step guide to playing Blob Opera
        </Link>{" "}
        covers the controls and a first performance.
      </>
    ),
  },
  {
    heading: "The Four Singers Behind the Experiment",
    body: (
      <>
        Google&apos;s official credits name four professional singers who
        contributed the source material: tenor Christian Joel, bass Frederick
        Tong, mezzo-soprano Joanna Gamble, and soprano Olivia Doutney. Together
        they recorded 16 hours of singing. Google is careful about an important
        distinction: the sounds in the finished experiment are not simply
        clips of those performances being replayed. A machine-learning model
        was trained on the recordings and produces its own interpretation of
        the four voice types. The singers supplied the musical knowledge and
        expressive examples from which the experiment learned. Additional
        singing is credited to Ingunn Gyda Hrafnkelsdottir and John
        Holland-Avery.
      </>
    ),
  },
  {
    heading: "How the Machine Learning Works",
    body: (
      <>
        The public explanation is straightforward and does not disclose every
        engineering detail. According to David Li, the team fed the 16 hours
        of singing into a convolutional neural network that learned to
        reproduce each represented voice type. A second machine-learning model
        handles harmony. When you control one blob, the others respond to your
        input and harmonize in real time. That division explains the
        experience: one system gives the blobs their opera-like voices, while
        another coordinates the ensemble. Claims about a particular neural
        vocoder, training annotation system, model size, or browser inference
        framework are not included here because Google&apos;s published
        materials do not specify them.{" "}
        <Link
          href="/articles/how-blob-opera-works"
          className="font-semibold text-primary underline underline-offset-4"
        >
          Read the full explanation of how Blob Opera works
        </Link>
        .
      </>
    ),
  },
  {
    heading: "How to Control the Blobs",
    body: (
      <>
        Drag a blob vertically to change its pitch. Moving higher produces a
        higher note; moving lower produces a lower one. Moving in the other
        direction changes the vowel quality, which reshapes the tone without
        requiring you to choose a phonetic symbol or operate a separate
        control. The remaining voices follow with harmony, so a single gesture
        can create a complete vocal texture. There is no score to win and no
        fixed sequence to memorize. Try slow movements first, pause to hear how
        a sound settles, and then explore wider jumps. The experiment is best
        understood by listening to the relationship between your gesture and
        the whole quartet.
      </>
    ),
  },
  {
    heading: "Bass, Tenor, Mezzo-Soprano, and Soprano",
    body: (
      <>
        The quartet represents four familiar operatic voice categories. Bass
        occupies the lowest register, tenor sits above it, mezzo-soprano
        provides a lower female register, and soprano reaches the highest
        register of the group. These labels describe vocal roles and ranges;
        they are not rankings of skill or importance. In Blob Opera they make
        the layers of the harmony easy to hear. Listen first to the lowest
        foundation, then notice how the middle voices fill the space and how
        the soprano adds the upper line. Actual singers have individual ranges
        and timbres, so the blobs should be treated as a playful introduction
        rather than a complete lesson in professional voice classification. The{" "}
        <Link
          href="/articles/what-are-the-four-voice-types"
          className="font-semibold text-primary underline underline-offset-4"
        >
          guide to the four Blob Opera voice types
        </Link>{" "}
        explains the approximate ranges and includes a short listening exercise.
      </>
    ),
  },
  {
    heading: "What to Listen For",
    body: (
      <>
        Start with register: identify the lowest and highest sounding parts
        before trying to follow every voice. Next, hold one gesture long enough
        to notice the tone color, then move in the vowel direction while
        keeping the pitch as steady as you can. Finally, make one slow pitch
        change and listen to the response of the full group. You may hear
        stability, tension, motion, or a change in balance, but those words
        describe your listening experience rather than hidden labels supplied
        by the model. Repeat the experiment with another blob and compare the
        result. This kind of focused listening is more reliable than trying to
        reverse-engineer the system from one performance, and it turns a
        playful interaction into a useful introduction to ensemble awareness.
      </>
    ),
  },
  {
    heading: "Recording and Sharing a Performance",
    body: (
      <>
        The original experiment includes recording and sharing features. A
        recording preserves the gestures that drive the performance, allowing
        the blobs to reproduce the musical result when the shared link is
        opened. This makes short compositions easy to pass to friends or use in
        a lesson without creating an account on this fan site. Recording also
        changes the way you play: instead of testing isolated sounds, you can
        plan a beginning, a contrasting middle, and an ending. Keep the first
        attempt short, listen back, and make a second version with one clear
        change. That simple cycle is a useful introduction to musical
        composition and revision. The{" "}
        <Link
          href="/articles/recording-guide"
          className="font-semibold text-primary underline underline-offset-4"
        >
          complete recording and sharing guide
        </Link>{" "}
        covers planning, re-recording, and what to do when a link fails.
      </>
    ),
  },
  {
    heading: "Songs, Places, and the World Tour",
    body: (
      <>
        Blob Opera began as a holiday experiment with optional preset songs,
        including seasonal material. Google later expanded the idea for a
        world-tour version. Its official story describes backgrounds and local
        songs connected with places such as Cape Town, London, Mexico City,
        New York, Paris, and Seoul, with examples including “Frère Jacques”
        and “La Bamba.” These presets demonstrate what the voices can do, but
        free play remains the central attraction. Features and available
        locations may change as Google updates the hosted experiment, so this
        site does not promise a fixed list of cities or songs. The{" "}
        <Link
          href="/articles/city-themes-preset-songs"
          className="font-semibold text-primary underline underline-offset-4"
        >
          guide to Blob Opera songs and world-tour cities
        </Link>{" "}
        separates documented details from interface-dependent ones.
      </>
    ),
  },
  {
    heading: "A Playful Experiment, Not a Voice Simulator",
    body: (
      <>
        Blob Opera is most accurate when described as an interactive
        opera-inspired experiment. It is not a substitute for vocal training,
        a scientific model of every singer, or a tool for judging a
        person&apos;s voice. Its strength is that it makes several musical
        ideas audible at once: register, pitch movement, vowel color, ensemble
        balance, and automatic harmony. Google also notes that the experiment
        uses modern web-audio technology and may not perform optimally on older
        devices. If playback is uneven, close other audio-heavy tabs, use a
        current browser, or open the official experiment directly. Headphones
        can make the individual parts easier to distinguish. If the page will
        not load or produce sound, the{" "}
        <Link
          href="/articles/blob-opera-not-working"
          className="font-semibold text-primary underline underline-offset-4"
        >
          troubleshooting guide
        </Link>{" "}
        walks through the browser, audio, and network checks in order.
      </>
    ),
  },
];

const FAQ_ITEMS = [
  {
    q: "Who created Blob Opera?",
    a: "Artist David Li created it in collaboration with Google Arts & Culture.",
  },
  {
    q: "Are the blobs playing recordings of the four singers?",
    a: "No. Google says you hear the machine-learning model's understanding of opera singing based on the recordings, not the singers' original voices being replayed.",
  },
  {
    q: "How much source singing was recorded?",
    a: "The four credited opera singers recorded a combined 16 hours of singing.",
  },
  {
    q: "Do I need music training?",
    a: "No. The experiment was designed for people to play regardless of musical skill.",
  },
  {
    q: "Is this the official Google website?",
    a: "No. This is an independent fan and learning site that embeds the Google-hosted experiment and links to the official source.",
  },
];

export default function HomePage() {
  const featuredGuides = getFeaturedGuides();

  return (
    <>
      <link rel="canonical" href={`${siteConfig.domain}/`} />
      <SchemaMarkup jsonLd={buildVideoGameJsonLd()} />
      <Hero />

      <SidebarLayout>
        <div className="grid gap-4 sm:grid-cols-3 mb-14">
          <Link
            href="/quiz"
            className="rounded-2xl bg-white border border-stone-200 p-5 hover:-translate-y-0.5 hover:shadow-md transition"
          >
            <span className="text-2xl" aria-hidden="true">🎤</span>
            <h2 className="font-heading font-bold text-lg mt-3">Music quiz</h2>
            <p className="text-sm text-text-dark/70 mt-1">
              Test voice types, intervals, and verified Blob Opera facts.
            </p>
          </Link>
          <Link
            href="/gallery"
            className="rounded-2xl bg-white border border-stone-200 p-5 hover:-translate-y-0.5 hover:shadow-md transition"
          >
            <span className="text-2xl" aria-hidden="true">🎧</span>
            <h2 className="font-heading font-bold text-lg mt-3">Your recordings</h2>
            <p className="text-sm text-text-dark/70 mt-1">
              Save Blob Opera recording links locally on this device.
            </p>
          </Link>
          <Link
            href="/tools/chord-builder"
            className="rounded-2xl bg-white border border-stone-200 p-5 hover:-translate-y-0.5 hover:shadow-md transition"
          >
            <span className="text-2xl" aria-hidden="true">🎹</span>
            <h2 className="font-heading font-bold text-lg mt-3">Chord builder</h2>
            <p className="text-sm text-text-dark/70 mt-1">
              Hear notes and explore common interval and chord labels.
            </p>
          </Link>
        </div>

        <article className="space-y-10">
          {GUIDE_SECTIONS.map((section, index) => (
            <section key={section.heading}>
              <div className="flex items-start gap-4">
                <span className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-heading font-bold">
                  {index + 1}
                </span>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
                    {section.heading}
                  </h2>
                  <p className="text-text-dark/80 leading-8">{section.body}</p>
                </div>
              </div>
              {index === 3 && (
                <ImagePlaceholder
                  src="/blob-desc-2.webp"
                  alt="Blob Opera interface showing the four singing characters"
                  caption="Vertical movement changes pitch; the other direction changes the vowel sound."
                />
              )}
              {index === 5 && (
                <ImagePlaceholder
                  src="/blob-desc-3.webp"
                  alt="Blob Opera recording controls"
                  caption="The Google-hosted experiment includes controls for recording and replay."
                />
              )}
              {index === 4 && <AdsterraNative className="mt-8" />}
            </section>
          ))}
        </article>

        <aside className="mt-14 rounded-2xl border border-secondary/30 bg-secondary/10 p-6">
          <h2 className="font-heading font-bold text-xl">Official sources</h2>
          <p className="text-sm text-text-dark/80 leading-7 mt-2">
            The project facts on this page are based on Google&apos;s{" "}
            <a
              href={OFFICIAL_EXPERIMENT}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline underline-offset-4"
            >
              official experiment page
            </a>{" "}
            and the{" "}
            <a
              href={OFFICIAL_STORY}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline underline-offset-4"
            >
              story behind the Blob Opera world tour
            </a>
            . General music explanations are presented as learning context,
            not as undisclosed details of Google&apos;s implementation.
          </p>
        </aside>

        <section className="mt-16">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-sm font-semibold text-primary">Start here</p>
              <h2 className="font-heading font-bold text-2xl text-text-dark">
                Blob Opera guides
              </h2>
            </div>
            <Link href="/articles" className="text-sm text-primary font-semibold underline">
              View all
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredGuides.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-heading font-bold text-2xl text-text-dark mb-6">
            Frequently asked questions
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {FAQ_ITEMS.map((item) => (
              <div key={item.q} className="rounded-xl border border-stone-200 bg-white p-5">
                <h3 className="font-heading font-semibold text-lg">{item.q}</h3>
                <p className="text-text-dark/80 leading-7 mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </SidebarLayout>
    </>
  );
}
