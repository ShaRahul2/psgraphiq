'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { projectIndex, projects, projectTotal, thumb, type Category } from '../lib/projects';
import { ArrowUpRight, ChevronLeft, ChevronRight, Close } from './icons';

const filters: ('All' | Category)[] = ['All', 'Identity', 'Campaign', 'Packaging', 'Product', 'Pitch'];

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
    document.querySelectorAll('.tiles .reveal-clip:not(.in)').forEach((el) => el.classList.add('in'));
  }, [filter]);

  // Tiles with a motion loop play only while on screen.
  useEffect(() => {
    const vids = Array.from(document.querySelectorAll<HTMLVideoElement>('.tile-video'));
    if (!vids.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const v = e.target as HTMLVideoElement;
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      });
    }, { threshold: 0.35 });
    vids.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, [filter]);

  const lb = open >= 0 ? projects[open] : null;

  return (
    <>
      <div className="section-head work-head">
        <div>
          <p className="eyebrow" style={{ marginBottom: 10 }}>[01] — The ideas, out in the world · {projects.length} projects</p>
          <h2 className="h-md" style={{ fontSize: 'clamp(30px, 3.2vw, 46px)' }}>
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

      <div className="tiles">
        {shown.map((p) => {
          const i = projects.indexOf(p);
          return (
            <article key={p.slug} className="tile reveal-clip" onPointerMove={tilt} onPointerLeave={untilt} style={{ background: p.color }}>
              <Link href={`/work/${p.slug}`} className="tile-link" data-cursor-label="View" aria-label={`${p.name} — ${p.category}`}>
                <img
                  src={`/images/${thumb(p.image)}`}
                  srcSet={`/images/${thumb(p.image)} 760w, /images/${p.image} ${p.size[0]}w`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1080px) 50vw, 420px"
                  alt={p.alt}
                  loading={i < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                  width={p.size[0]}
                  height={p.size[1]}
                  style={{ objectPosition: `${p.focus ?? '50%'} 50%` }}
                />
                {p.video && <video className="tile-video" src={p.video} muted loop playsInline preload="none" aria-hidden="true" />}
                <span className="shine" />
                <span className="tile-shade" />
                <span className="tile-info">
                  <span className="mono tile-idx">{projectIndex(p)} / {projectTotal} — {p.tag}</span>
                  <span className="tile-name">{p.name}</span>
                </span>
                <span className="tile-arrow" aria-hidden="true"><ArrowUpRight /></span>
              </Link>
              <button type="button" className="tile-zoom" onClick={() => setOpen(i)} aria-label={`Quick view: ${p.name}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
              </button>
            </article>
          );
        })}
      </div>

      {lb && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${lb.name} artwork`} onClick={(e) => e.target === e.currentTarget && close()}>
          <div className="lb-inner">
            <div className="lb-media" style={{ background: lb.color, aspectRatio: `${lb.size[0]} / ${lb.size[1]}` }}>
              <img src={`/images/${lb.image}`} alt={lb.alt} width={lb.size[0]} height={lb.size[1]} />
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: 14 }}>{projectIndex(lb)} / {projectTotal} — {lb.tag}</p>
              <h2 className="h-lg" style={{ fontSize: 'clamp(40px, 4.5vw, 64px)' }}>
                {lb.name}<span className="accent">.</span>
              </h2>
              <p className="disp" style={{ marginTop: 18, fontSize: 22, fontWeight: 700 }}>{lb.headline}</p>
              <p className="body" style={{ marginTop: 14 }}>{lb.description}</p>
              <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <button type="button" className="icon-btn" onClick={prev} aria-label="Previous project"><ChevronLeft /></button>
                <button type="button" className="icon-btn" onClick={next} aria-label="Next project"><ChevronRight /></button>
                <Link href={`/work/${lb.slug}`} className="btn btn-accent" onClick={close}>
                  {lb.hasCaseStudy ? 'Read the case study' : 'Open the project'} <ArrowUpRight />
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
