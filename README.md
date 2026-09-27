# PS Graphiq — portfolio site (v2, "Design with intent")

Portfolio for Priyanka Sharma, rebuilt from the futuristic canvas design: dark UI, coral accent, kinetic type, scroll-driven motion and a fully responsive layout (desktop, tablet and phone).

## Run

```sh
npm install
npm run dev      # http://localhost:3000 (or the URL printed)
npm run build
npx tsc --noEmit
```

## Pages

| Route | File | What's there |
| --- | --- | --- |
| `/` | `app/page.tsx` | Hero with animated portrait portal, marquee, stance + count-up stats, filterable work gallery with lightbox, crossing tapes, services, process, about teaser, contact block |
| `/work/[slug]` | `app/work/[slug]/page.tsx` | 9 projects: full Meloni Kiss case study; Gen-Nex India, Residential systems (Greystar), Home-care campaigns (Reckitt), Theatre of Ambition (Omnicom) and The next chapter (Interactive Bees) as board pages with role/context/shipped facts; OLIO, Recode, Wilddoor artwork pages |
| `/about` | `app/about/page.tsx` | Bio from the resume, principles, full experience timeline, toolkit (Adobe, Figma, AI tools), education, languages, process |
| `/contact` | `app/contact/page.tsx` | Email, phone, LinkedIn/Behance/Instagram and the enquiry form |

## Where to edit

- **Content** — `lib/projects.ts`: projects, plus everything from the resume — `profile` (email, phone, location), `links`, `stats`, `namedWork`, `experience`, `toolGroups`, `education`, `languages`, `services`, `steps`.
- **Colours, type, spacing, motion** — tokens at the top of `app/globals.css` (`--accent`, `--lime`, fonts…).
- **Sections** — `components/sections.tsx` (hero, stance, services, process, about teaser, contact).
- **Work gallery / lightbox** — `components/work-gallery.tsx`.
- **Header + mobile menu** — `components/site-header.tsx`. **Footer** — `components/site-footer.tsx`.
- **Motion layer** — `components/effects.tsx`: intro screen, scroll progress bar, custom cursor, scroll reveals (`.reveal`, `.reveal-clip`), count-ups (`data-count`), magnetic buttons (`data-magnetic`).

## Motion & accessibility

- Every animation stops for visitors with "reduce motion" turned on; the intro screen, cursor and progress bar are removed.
- Custom cursor, spotlight and card tilt only run on mouse/trackpad devices.
- Scroll reveals use IntersectionObserver (all modern browsers). Photo parallax uses CSS scroll timelines where supported and is simply static elsewhere.
- Mobile menu and lightbox close with Esc; lightbox supports ← / →.

## Assets

- Images are optimised WebP copies in `public/images/*.webp` (about 1 MB total, down from ~11 MB). The original JPG/PNG files are kept alongside.
- Fonts are self-hosted in `public/fonts/` — Syne (display), Manrope (body), JetBrains Mono (labels) — under the SIL Open Font License (`OFL-*.txt`).

## Known gaps

- The contact form opens the visitor's email app with the brief pre-filled, addressed to Priyanka. For in-page sending, connect a form service in `components/enquiry-form.tsx`.
- The five boards from the old portfolio (`public/images/board-*.webp`) are presentation boards; each project page says so, as the old site did. They still carry a small "Grok" watermark in the corner — re-export clean versions and replace the files to remove it.
- Instagram: the Wix site uses **@ps.graphiq**, the old portfolio linked **@ps.graphique**. The site uses @ps.graphiq — change `links` in `lib/projects.ts` if that's wrong.
- Only Meloni Kiss has a long-form case study. Add more copy per project in `lib/projects.ts` (`body`, `facts`).
- The previous version of the pages is saved in `.backup-v1/`.

Source content and images belong to their original owner.
