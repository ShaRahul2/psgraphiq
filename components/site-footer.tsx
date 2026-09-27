import Link from 'next/link';
import { links, profile } from '../lib/projects';

export default function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="wrap">
          <div className="giant" aria-hidden="true">
            {'ps.graphiq'.split('').map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>
          <div className="foot-row">
            <span className="mono" style={{ letterSpacing: 1.5 }}>© PRIYANKA SHARMA — SENIOR GRAPHIC DESIGNER — GURGAON</span>
            <nav aria-label="Footer">
              <Link href="/#work">Work</Link>
              <Link href="/work/meloni">Meloni case study</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <a href={`mailto:${profile.email}`}>Email</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={links.behance} target="_blank" rel="noreferrer">Behance ↗</a>
              <a href={links.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
              <a href="#top">Back to top ↑</a>
            </nav>
          </div>
        </div>
      </footer>
      <div className="m-cta">
        <span className="mono" style={{ fontSize: 11, letterSpacing: 1.2, color: 'var(--fg-2)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="dot pulse" style={{ width: 7, height: 7 }} />
          OPEN FOR BRIEFS
        </span>
        <Link href="/contact" className="btn btn-accent" style={{ minHeight: 44, padding: '0 18px', fontSize: 14 }}>
          Start a project
        </Link>
      </div>
    </>
  );
}
