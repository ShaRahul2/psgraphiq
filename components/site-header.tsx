'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Close, Menu } from './icons';
import { links } from '../lib/projects';

const navLinks = [
  { href: '/#work', label: 'Work', match: (p: string) => p.startsWith('/work') },
  { href: '/#services', label: 'Services', match: () => false },
  { href: '/about#experience', label: 'Experience', match: () => false },
  { href: '/about', label: 'About', match: (p: string) => p === '/about' },
  { href: '/contact', label: 'Contact', match: (p: string) => p === '/contact' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap">
          <Link className="wordmark" href="/" aria-label="ps.graphiq — home">
            ps<span>.</span>graphiq
          </Link>
          <span className="mono tagline">// SENIOR GRAPHIC DESIGNER</span>
          <nav className="nav-links" aria-label="Main">
            {navLinks.slice(0, 4).map((l) => (
              <Link key={l.href} href={l.href} className="nl" aria-current={l.match(pathname) ? 'page' : undefined}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-accent" data-magnetic style={{ minHeight: 44, padding: '0 20px', fontSize: 14 }}>
              Start a project <ArrowUpRight />
            </Link>
          </nav>
          <button type="button" className="icon-btn burger" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} aria-controls="site-menu">
            <Menu />
          </button>
        </div>
      </header>

      {open && (
        <div className="menu" id="site-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="menu-top">
            <span className="wordmark">ps<span>.</span>graphiq</span>
            <button type="button" className="icon-btn" onClick={() => setOpen(false)} aria-label="Close menu" autoFocus>
              <Close />
            </button>
          </div>
          <nav aria-label="Mobile">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/#work" onClick={() => setOpen(false)}>Work</Link>
            <Link href="/#services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
          <div className="menu-foot">
            <Link href="/work/meloni" onClick={() => setOpen(false)}>Meloni Kiss case study ↗</Link>
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={links.behance} target="_blank" rel="noreferrer">Behance ↗</a>
            <a href={links.instagram} target="_blank" rel="noreferrer">Instagram — {links.instagramHandle} ↗</a>
            <span className="mono" style={{ fontSize: 11, letterSpacing: 1.5, marginTop: 8 }}>
              GURGAON · OPEN TO RELOCATION, REMOTE &amp; HYBRID ROLES
            </span>
          </div>
        </div>
      )}
    </>
  );
}
