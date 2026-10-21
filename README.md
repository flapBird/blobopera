# Blob Opera

An independent fan site for Blob Opera, the AI-powered singing experiment by David Li and Google Arts & Culture. The site embeds the game alongside original educational content — articles about AI music and vocal harmony, interactive quizzes, a chord builder with Web Audio, and a community recording gallery.

**Live site:** [https://blobopera.xyz/](https://blobopera.xyz/)

> This is not an official Google product. Blob Opera is a creation of David Li & Google Arts & Culture.

---

## Features


### Educational Articles (12 articles)

Eight featured guides plus four supporting articles, grouped into four categories:

| Category | Focus |
|---|---|
| **AI & Music Technology** | How the singing and harmony models work, AI collaboration and authorship |
| **Music Education** | Voice types, classroom lessons, vocal expression (vowels, vibrato, portamento, dynamics) |
| **Music Appreciation** | Opera history and appreciation, why Blob Opera works, musical accessibility |
| **Guides & Tutorials** | Playing, recording and sharing, troubleshooting, world-tour songs, harmony and melody |

Each article has unique meta descriptions, keywords, related article links, and JSON-LD structured data.

### Music Theory Quiz

An interactive quiz with three categories:
- **Voice Type Challenge** — Identify bass, tenor, mezzo-soprano, and soprano by their range and role
- **Harmony & Theory** — Test knowledge of intervals, chords, and voice leading
- **Blob Opera Facts** — Questions about the AI training, controls, and game mechanics

Each quiz has 5 questions with instant feedback and explanations. A results screen shows the score with a personalised rating (Maestro / Virtuoso / Apprentice / Beginner).

### Interval Ear Training

A Web Audio API-powered ear trainer. The browser generates pairs of tones (using oscillator nodes with attack/release envelopes) and asks the user to identify the interval. Covers six intervals from minor third to octave.

### Personal Recording Links

A browser-local page where visitors can save validated Blob Opera recording
links with a title and description. Entries stay on that device in
`localStorage`; they are not uploaded or presented as public community
submissions.

### Chord Builder

An interactive music theory tool that lets users click on a 3-octave keyboard to build chords. The tool recognises common chord types (major, minor, diminished, augmented, seventh chords, etc.) and labels them with their consonance/dissonance quality. Each note is audible via Web Audio API triangle-wave oscillators with staggered attack envelopes for realistic voicing.

### Recording Playback (`/watch`)

Clicking a recording card opens an in-site playback page (`/watch?url=...`) that embeds the game in an iframe with the recording hash. The user stays on the same domain throughout — no external tab-jumping.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Audio:** Web Audio API (oscillator synthesis, gain envelopes)
- **Fonts:** Nunito (headings), Quicksand (body) via Google Fonts
- **Analytics:** Google Analytics 4 (optional, via env var)
- **Ads:** Adsterra native units (client component with route-aware re-injection)
- **Deployment:** Vercel (static export compatible)

---

## Project Structure

```
app/
├── about/              # About page
├── articles/           # Article pages (12 articles, SSG)
│   ├── [slug]/         # Dynamic article route
│   └── page.tsx        # Article listing page
├── contact/            # Contact page
├── gallery/            # Recording gallery with submission form
├── privacy/            # Privacy policy
├── quiz/               # Interactive music theory quiz
├── terms/              # Terms of service
├── tools/
│   └── chord-builder/  # Web Audio chord builder tool
├── watch/              # In-site recording playback page
├── layout.tsx          # Root layout with fonts, GA, AdSense
├── page.tsx            # Homepage with game embed + feature previews
├── globals.css         # Global styles
├── sitemap.ts          # Auto-generated sitemap
└── robots.ts           # Robots.txt

components/
├── GameEmbed.tsx       # Game iframe with idle/loading/loaded states
├── QuizTeaser.tsx      # Homepage quiz preview with sample question
├── GalleryTeaser.tsx   # Homepage gallery preview cards
├── ChordTeaser.tsx     # Homepage chord preset showcase
├── Header.tsx          # Navigation header
├── Footer.tsx          # Footer with links and attribution
├── SidebarLayout.tsx   # Content layout with optional ad sidebars
├── ArticleCard.tsx     # Article listing card
├── ArticleLayout.tsx   # Article content layout
├── Hero.tsx            # Homepage hero with game embed wrapper
├── SchemaMarkup.tsx    # JSON-LD structured data injector
├── AdSlot.tsx          # AdSense placement slots (placeholder)
├── AdsterraNative.tsx  # Adsterra native unit, re-injected on client navigation
├── EmailLink.tsx       # Email display component (plain text)
└── VideoPlaceholder.tsx
    ImagePlaceholder.tsx
    LegalPage.tsx

lib/
├── site.config.ts      # Single source of truth for site config
├── articles.ts         # Article content and metadata
└── seo.ts              # Metadata and JSON-LD builders

public/
├── blob-desc-1.webp    # Screenshots used in articles and gallery
├── blob-desc-2.webp
├── blob-desc-3.webp
├── blob-desc-4.webp
├── blob-desc-5.webp
├── favicon.ico / .png / .svg
├── og-image.png        # Social sharing image (1200×630)
└── ads.txt             # AdSense verification file
```

---

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`.

### Build

```bash
npm run build
```

Generates a production build in `.next/`. All pages are statically generated where possible.

---

## Configuration

### `lib/site.config.ts`

All site-wide settings are centralised here:

- `siteName` / `domain` — Display name and canonical domain
- `seo` — Title, description, keywords, OG image
- `game` — Embed URL, aspect ratio, age rating, attribution
- `gallery.examples` — Example recordings shown on the homepage and used as seed data on `/gallery`; set `shareLink` to a valid recording URL for inline playback
- `contact` — Email address shown on legal pages
- `ads` — AdSense client ID (set via `NEXT_PUBLIC_ADSENSE_CLIENT_ID` env var)
- `analytics` — Google Analytics ID (set via `NEXT_PUBLIC_GA_ID` env var)

---

## Content

The 12 articles live in `lib/articles.ts` as structured data. Each article has:

- A unique slug, title, and description
- A category (`ai-music`, `music-education`, `guides`, `music-appreciation`)
- Reading time estimate, publish date, and optional update date
- Keywords for SEO
- Related article slugs for cross-linking
- One or more sections with headings, body text, and optional list items

Eight Blob Opera-specific pillar guides are surfaced through `getFeaturedGuides()` on the homepage and the article index. URLs retired during content consolidation are permanently redirected in `next.config.js`.

---

## License and Attribution

The Blob Opera game itself is the work of **David Li** and **Google Arts & Culture**. This site is an independent fan project. All original code in this repository (the site shell, quiz engine, chord builder, articles, and gallery) is provided for reference and educational purposes.


---

## Acknowledgements

- David Li for creating Blob Opera
- Google Arts & Culture for hosting the experiment
- The Google Creative Lab team behind the project
- Christian Joel (tenor), Frederick Tong (bass), Joanna Gamble
  (mezzo-soprano), and Olivia Doutney (soprano) — the four opera singers
  credited by Google Arts & Culture
