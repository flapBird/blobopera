/**
 * Site configuration — the single source of truth for the entire game site.
 * Sensitive values (gaId, adsense) are read from environment variables.
 * When creating a new game site, only edit this file and replace images in /public.
 */
export const siteConfig = {
  /** Display name shown in header, footer, and browser title. */
  siteName: "Blob Opera",

  /** Canonical domain, no trailing slash. Used for sitemap, OG URLs, etc. */
  domain: "https://blobopera.xyz",

  seo: {
    /** Homepage <title>. Used as-is on the homepage. */
    title: "Play Blob Opera Online Free | Blob Opera",

    /**
     * Homepage meta description, keep under 160 characters.
     * Describe what the game is and that it's free to play online.
     */
    description:
      "Create your own opera music with adorable singing blobs. Drag, stretch, and conduct four blob voices to compose beautiful harmonies. Free to play, no download needed.",

    /** Comma-separated keywords for the homepage. */
    keywords: ["blob opera", "opera game", "music game", "singing blobs", "online music maker", "google arts and culture", "music creation", "free music game"],

    /** Social sharing image, 1200x630px. Replace /public/og-image.png. */
    ogImage: "/og-image.png",

    /** Twitter/X handle, can be left empty. */
    twitterHandle: "",
  },

  game: {
    /** Name of the game, shown in Hero, JSON-LD, etc. */
    name: "Blob Opera",

    /** Genre(s) for JSON-LD VideoGame.genre. e.g. ["Sports", "Basketball"]. */
    genre: ["Music", "Creative"],

    /** iframe embed URL — must be manually replaced with the real embeddable URL. */
    embedUrl: "https://blob-opera.com/embed/blob-opera.html",

    /** Aspect ratio of the embedded game, used to prevent CLS. */
    aspectRatio: "16 / 9",

    /** Cover image shown on the idle/launch screen. Replace /public/cover.jpg. */
    coverImage: "/cover.jpg",

    /** Age rating for the game. */
    ageRating: "Everyone",

    /** Attribution displayed below the game and in the footer. */
    sourceAttribution: "Created by David Li · Google Arts & Culture",
  },

  theme: {
    /**
     * Bright & playful color palette.
     * Adjust per-game to match its visual style, but keep the overall bright tone.
     */
    primary: "#c0392b",
    secondary: "#b8860b",
    background: "#fdfaf6",
    surface: "#f7f0e8",
    textDark: "#292524",
    fontHeading: "'Nunito', sans-serif",
    fontBody: "'Quicksand', sans-serif",
  },

  contact: {
    /** Contact email shown on /contact and in legal pages. */
    email: "hello@blobopera.xyz",
  },

  legal: {
    /** Last updated date for Privacy / Terms pages. */
    lastUpdated: "2026-07-09",
  },

  ads: {
    /** Google AdSense client ID, e.g. ca-pub-xxxxxxxxxxxxxx. Set via NEXT_PUBLIC_ADSENSE_CLIENT_ID. */
    clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "",
    /** Keep false to only load the head script without displaying ad units on the page. */
    enabled: false,
  },

  analytics: {
    /** Google Analytics 4 measurement ID, e.g. G-XXXXXXXX. Set via NEXT_PUBLIC_GA_ID. */
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
    /** Google Search Console verification code. Leave empty to skip. */
    gscVerification: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
