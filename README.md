# Game Site Template

A reusable Next.js 14 template for building single-game "shell" sites optimized for search engine traffic. Each new game site only requires editing one config file and swapping a few images.

## Quick Start (5 Minutes)

### 1. Create a new repo from this template

- On GitHub, click **Use this template** → **Create a new repository**
- Clone your new repo locally

### 2. Configure your site

Edit **`lib/site.config.ts`** — this is the only file you need to touch for content:

| Field | What to change |
|-------|----------------|
| `siteName` | Your site's display name |
| `domain` | Full domain, e.g. `https://mygame.com` (no trailing slash) |
| `seo.title` | Homepage `<title>` tag |
| `seo.description` | Meta description (keep under 160 chars) |
| `seo.keywords` | Comma-separated keyword list |
| `game.name` | The game's name |
| `game.genre` | Genre array for JSON-LD, e.g. `["Sports", "Basketball"]` |
| `game.embedUrl` | The real iframe embed URL — must be replaced |
| `game.aspectRatio` | Aspect ratio of the game (default `"16 / 9"`) |
| `game.ageRating` | Age rating label |
| `game.sourceAttribution` | Developer credit line |
| `contact.email` | Your contact email |
| `legal.lastUpdated` | Date the legal pages were last reviewed |

### 3. Replace placeholder images

Replace these files in `public/`:

- `cover.jpg` — Game cover / launch screen image
- `og-image.png` — Social sharing image (1200×630px)
- `favicon.ico` — Browser tab icon

### 4. Customize page content

Look for `PLACEHOLDER:` markers in:
- `app/page.tsx` — Game introduction sections
- `app/about/page.tsx` — About page

Always write unique content per game site to avoid duplicate-content penalties.

### 5. Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

### 6. Deploy to Vercel

**Recommended (GitHub integration):**
1. In Vercel, click **New Project** → import your repo
2. Framework Preset auto-detects Next.js — leave defaults
3. Add environment variables from `.env.example` if needed
4. Under **Domains**, bind your domain
5. Deploy

**CLI alternative:**
```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

### 7. Submit to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property using domain verification
3. Submit `sitemap.xml` (e.g. `https://your-domain.com/sitemap.xml`)

---

## SEO Checklist

- [ ] Every page has a unique `<title>` in the correct format
- [ ] Every page `description` is under 160 characters and unique
- [ ] Every page has a canonical URL
- [ ] Open Graph / Twitter Card tags verified (use [opengraph.xyz](https://www.opengraph.xyz/))
- [ ] Homepage `VideoGame` JSON-LD passes [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] `sitemap.xml` and `robots.txt` are accessible
- [ ] Lighthouse mobile performance score ≥ 80
- [ ] Mobile: game starts on tap, no horizontal scroll
- [ ] All placeholder images replaced with real assets
- [ ] Google Search Console verified and sitemap submitted

## AdSense (Post-Launch)

1. Keep `ads.enabled: false` until AdSense is approved
2. Site should have 2+ weeks of stable traffic before applying
3. Ensure Privacy Policy and Terms pages are accessible
4. After approval:
   - Replace placeholder in `components/AdSlot.tsx` with real `<ins class="adsbygoogle">`
   - Set `ads.enabled: true` in `lib/site.config.ts`

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Google Fonts (Nunito + Quicksand)
- Vercel deployment

## Notes

- This template supports iframe-embedded games only (no SWF/Ruffle)
- English only; all copy is centralized in `lib/site.config.ts` for future i18n
- Ad slots are placeholder only by default; real AdSense code must be added post-approval
- Always verify iframe embed permissions with the game developer and maintain visible source attribution
