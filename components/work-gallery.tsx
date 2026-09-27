'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { projects, type Category } from '../lib/projects';
import { ArrowUpRight, ChevronLeft, ChevronRight, Close } from './icons';

const filters: ('All' | Category)[] = ['All', 'Identity', 'Packaging', 'Product'];

function tilt(e: React.PointerEvent<HTMLElement>) {
  if (e.pointerType !== 'mouse') return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;
  const py = (e.clientY - r.top) / r.height - 0.5;
  el.style.setProperty('--rx', `${(-py * 6).toFixed(2)}deg`);
  el.style.setProperty('--ry', `${(px * 8).toFixed(2)}deg`);
  el.style.setProperty('--gx', `${((px + 0.5) * 100).toFixed(1)}%`);
  el.style.setProperty('--gy', `${((py + 0.5) * 100).toFixed(1)}%`);
}
function untilt(e: React.PointerEvent<HTMLElement>) {
  e.currentTarget.style.setProperty('--rx', '0deg');
  e.currentTarget.style.setProperty('--ry', '0deg');
}

export default function WorkGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [open, setOpen] = useState(-1);
  const shown = projects.filter((p) => filter === 'All' || p.cats.includes(filter));

  const close = useCallback(() => setOpen(-1), []);
  const next = useCallback(() => setOpen((i) => (i + 1) % projects.length), []);
  const prev = useCallback(() => setOpen((i) => (i + projects.length - 1) % projects.length), []);

  useEffect(() => {
    if (open < 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close, next, prev]);

  // Cards that mount after a filter change skip the scroll-reveal.
  const firstRun = useRef(true);
  useEffect(() => {
    if (firstRun.current) { firstRun.current = false; return; }
    document.querySelectorAll('.work-grid .reveal-clip:not(.in)').forEach((el) => el.classList.add('in'));
  }, [filter]);

  const lb = open >= 0 ? projects[open] : null;

  return (
    <>
      <div className="section-head">
        <div>
          <p className="eyebrow" style={{ marginBottom: 16 }}>[02] — The ideas, out in the world</p>
          <h2 className="h-lg">
            Selected work<span className="accent">.</span>
          </h2>
        </div>
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button key={f} type="button" className="chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="work-grid">
        {shown.map((p) => {
          const i = projects.indexOf(p);
          return (
            <article key={p.slug} className="card" onPointerMove={tilt} onPointerLeave={untilt}>
              <div className="card-media reveal-clip" style={{ background: p.color }}>
                <img src={`/images/${p.image}`} alt={p.alt} loading="lazy" width={1080} height={1080} />
                <div className="shine" />
                <button type="button" className="card-hit" onClick={() => setOpen(i)} aria-label={`View ${p.name} artwork full screen`} />
                <span className="pill" style={{ left: 18 }}>{p.index} / 04</span>
                <span className="pill" style={{ right: 18 }}>{p.tag}</span>
                <span className="view-tag" aria-hidden="true">VIEW ⤢</span>
              </div>
              <div className="card-meta">
                <div>
                  <h3 className="h-sm">{p.name}</h3>
                  <p>{p.category} — {p.headline}</p>
                </div>
                {p.hasCaseStudy ? (
                  <Link href={`/work/${p.slug}`} className="round-cta" aria-label={`Read the ${p.name} case study`}>
                    <ArrowUpRight />
                  </Link>
                ) : (
                  <Link href={`/work/${p.slug}`} className="soft-tag">DETAILS ↗</Link>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {lb && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${lb.name} artwork`} onClick={(e) => e.target === e.currentTarget && close()}>
          <div className="lb-inner">
            <div className="lb-media" style={{ background: lb.color }}>
              <img src={`/images/${lb.image}`} alt={lb.alt} />
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: 14 }}>{lb.index} / 04 — {lb.tag}</p>
              <h2 className="h-lg" style={{ fontSize: 'clamp(40px, 4.5vw, 64px)' }}>
                {lb.name}<span className="accent">.</span>
              </h2>
              <p className="disp" style={{ marginTop: 18, fontSize: 22, fontWeight: 700 }}>{lb.headline}</p>
              <p className="body" style={{ marginTop: 14 }}>{lb.description}</p>
              <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <button type="button" className="icon-btn" onClick={prev} aria-label="Previous project"><ChevronLeft /></button>
                <button type="button" className="icon-btn" onClick={next} aria-label="Next project"><ChevronRight /></button>
                <Link href={`/work/${lb.slug}`} className="btn btn-accent" onClick={close}>
                  {lb.hasCaseStudy ? 'Read the case study' : 'Project details'} <ArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
          <button type="button" className="lb-close" onClick={close} aria-label="Close" autoFocus>
            <Close />
          </button>
        </div>
      )}
    </>
  );
}
