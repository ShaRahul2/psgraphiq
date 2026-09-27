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
| `/work/[slug]` | `app/work/[slug]/page.tsx` | Full Meloni Kiss case study; OLIO, Recode and Wilddoor get a project page with a "case study soon" note |
| `/about` | `app/about/page.tsx` | Bio, principles, services, process |
| `/contact` | `app/contact/page.tsx` | Enquiry block |

## Where to edit

- **Content** — `lib/projects.ts` (projects, services, process steps, Instagram link).
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

- The contact form still **downloads** the brief as a text file; it does not send email. Connect a mail service and a confirmed address in `components/enquiry-form.tsx` to enable delivery.
- Only Meloni Kiss has written case-study copy. Add the others in `lib/projects.ts` / `app/work/[slug]/page.tsx` when ready.
- The previous version of the pages is saved in `.backup-v1/`.

Source content and images belong to their original owner.
