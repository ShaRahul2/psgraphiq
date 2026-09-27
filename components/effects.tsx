'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const prefersReduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Site-wide motion layer: scroll progress, custom cursor, cursor spotlight,
 * scroll reveals, count-up numbers and magnetic buttons ([data-magnetic]).
 */
export function Effects() {
  const pathname = usePathname();
  const bar = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  // One-time listeners
  useEffect(() => {
    document.documentElement.classList.remove('no-js');
    const reduced = prefersReduced();
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    let raf = 0;
    let rx = -100, ry = -100, tx = -100, ty = -100;

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };

    const loop = () => {
      rx += (tx - rx) * 0.2;
      ry += (ty - ry) * 0.2;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--my', `${e.pageY}px`);
      const target = e.target as Element | null;
      const interactive = target?.closest?.('a, button, [data-cursor]');
      ring.current?.classList.toggle('is-hover', !!interactive);
      if (!reduced) {
        const mag = target?.closest?.('[data-magnetic]') as HTMLElement | null;
        if (mag) {
          const r = mag.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          mag.style.transform = `translate(${(dx * 0.22).toFixed(1)}px, ${(dy * 0.32).toFixed(1)}px)`;
        }
      }
    };
    const onOut = (e: PointerEvent) => {
      const mag = (e.target as Element | null)?.closest?.('[data-magnetic]') as HTMLElement | null;
      if (mag && !mag.contains(e.relatedTarget as Node | null)) mag.style.transform = '';
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (finePointer && !reduced) {
      document.body.classList.add('has-cursor');
      window.addEventListener('pointermove', onMove, { passive: true });
      window.addEventListener('pointerout', onOut, { passive: true });
      raf = requestAnimationFrame(loop);
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerout', onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Reveals and counters: re-scan on every route change
  useEffect(() => {
    const reduced = prefersReduced();
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal, .reveal-clip, [data-reveal], [data-count]'));
    const countUp = (el: HTMLElement) => {
      const to = Number(el.dataset.count || '0');
      if (reduced || !to) { el.textContent = String(to); return; }
      const start = performance.now();
      const dur = 1600;
      const step = (now: number) => {
        const k = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - k, 3);
        el.textContent = String(Math.round(to * eased));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add('in');
          if (el.dataset.count) countUp(el);
          io.unobserve(el);
        });
      },
      { threshold: 0, rootMargin: '0px 0px 120px 0px' },
    );
    els.forEach((el) => {
      if (el.dataset.count && !reduced) el.textContent = '0';
      io.observe(el);
    });
    // Failsafe: reveal everything after a few seconds, e.g. for full-page capture tools.
    const failsafe = window.setTimeout(() => document.documentElement.classList.add('reveal-all'), 4000);
    return () => { io.disconnect(); window.clearTimeout(failsafe); };
  }, [pathname]);

  return (
    <>
      <div className="progress" ref={bar} aria-hidden="true" />
      <div className="cursor-ring" ref={ring} aria-hidden="true" />
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
    </>
  );
}
