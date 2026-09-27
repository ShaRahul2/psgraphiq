# PS Graphiq — portfolio site ("Design with intent")

Portfolio for Priyanka Sharma: dark UI, coral accent, kinetic type, scroll-driven motion and a fully responsive layout. Standard Next.js, deployed on Vercel.

## Run

```sh
npm install
npm run dev      # http://localhost:3000
npm run build
npx tsc --noEmit
```

## Pages

| Route | File | What's there |
| --- | --- | --- |
| `/` | `app/page.tsx` | Hero, then the work grid straight away (filters, hover reveal, quick view), named work, services, experience, about teaser, contact |
| `/work/[slug]` | `app/work/[slug]/page.tsx` | 9 projects: full Meloni Kiss case study; Gen-Nex India, Residential systems (Greystar), Home-care campaigns (Reckitt), Theatre of Ambition (Omnicom) and The next chapter (Interactive Bees) as board pages with facts, zoomable board and "Look closer" detail crops; OLIO, Recode, Wilddoor artwork pages |
| `/about` | `app/about/page.tsx` | Bio from the resume, principles, experience timeline, toolkit, education, languages, process |
| `/contact` | `app/contact/page.tsx` | Email, phone, LinkedIn/Behance/Instagram and the enquiry form |
| `/sitemap.xml`, `/robots.txt` | `app/sitemap.ts`, `app/robots.ts` | Generated from the project list |

## Where to edit

- **Content** — `lib/projects.ts`: projects, plus everything from the resume — `profile` (email, phone, location), `links`, `stats`, `namedWork`, `experience`, `toolGroups`, `education`, `languages`, `services`, `steps`.
- **Colours, type, spacing, motion** — tokens at the top of `app/globals.css` (`--accent`, `--lime`, fonts…).
- **Sections** — `components/sections.tsx`. **Work grid / quick view** — `components/work-gallery.tsx`. **Zoom** — `components/zoom-image.tsx`.
- **Header + mobile menu** — `components/site-header.tsx`. **Footer** — `components/site-footer.tsx`.
- **Motion layer** — `components/effects.tsx`: scroll progress bar, custom cursor (shows "View"/"Zoom" over work), scroll reveals (`.reveal`, `.reveal-clip`) with a failsafe, count-ups (`data-count`), magnetic buttons (`data-magnetic`).

## Making the work visible

- **Work first.** The 3×3 image grid sits directly under the hero. Tiles are full-bleed; name, index and tag reveal on hover (always visible on touch). Click a tile for the project page, or the ⤢ button for a quick-view lightbox. Phones get a 2-column grid.
- **Motion tiles.** Give a project `video: '/video/<name>.mp4'` in `lib/projects.ts` (short, muted, ~5–8 s, under 2 MB, file in `public/video/`). It plays on its tile only while on screen, and never with reduced motion.
- **Focal points.** Presentation boards are wider than the square tiles; `focus` in `lib/projects.ts` picks which part shows.
- **Look closer.** Board projects list `crops` (pixel boxes on the full image, `[x, y, w, h]`) that render as a close-up gallery; every project hero is click-to-zoom.
- **Thumbnails.** Grid tiles load `*-sm.webp` (760 px) with `srcset` fallbacks to the full image. Regenerate the `-sm` file whenever you replace an image.

## SEO & sharing

- `lib/site.ts` → `SITE_URL` comes from `NEXT_PUBLIC_SITE_URL`, else Vercel's production URL. **Set `NEXT_PUBLIC_SITE_URL` in Vercel when the custom domain goes live** — canonical URLs, social previews, structured data and the sitemap all follow it.
- Every page has its own title, description and canonical URL; project pages share their own image when posted on LinkedIn/WhatsApp/X.
- `public/images/og-default.jpg` is the 1200×630 preview for the home, about and contact pages.
- Structured data: a `Person` record (role, employer, skills, LinkedIn/Behance/Instagram) on every page, and a `CreativeWork` record on each project.
- After launch: add the site in Google Search Console and submit `/sitemap.xml`; add the URL to her LinkedIn, Behance and Instagram profiles.

## Motion & accessibility

- Every animation stops for visitors with "reduce motion" turned on; the cursor and progress bar are removed.
- Custom cursor, spotlight and tilt only run on mouse/trackpad devices.
- Reveals use IntersectionObserver, and everything is forced visible after 4 s as a failsafe.
- Mobile menu, quick view and zoom close with Esc; quick view supports ← / →.

## Assets

- Images are optimised WebP copies in `public/images/*.webp`; the original JPG/PNG files are kept alongside.
- The six presentation boards were cropped to 1168×709 to remove the generator watermark.
- Fonts are self-hosted in `public/fonts/` — Syne, Manrope, JetBrains Mono — under the SIL Open Font License (`OFL-*.txt`).

## Known gaps

- The contact form opens the visitor's email app with the brief pre-filled. For in-page sending, connect a form service in `components/enquiry-form.tsx`.
- The boards from the old portfolio are presentation boards; each project page says so, as the old site did.
- Instagram: the Wix site uses **@ps.graphiq**, the old portfolio linked **@ps.graphique**. The site uses @ps.graphiq — change `links` in `lib/projects.ts` if that's wrong.
- Only Meloni Kiss has a long-form case study. Add more copy, images and motion per project in `lib/projects.ts`.

Source content and images belong to their original owner.
