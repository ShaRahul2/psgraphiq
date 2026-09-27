'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Click an image to inspect it at high resolution. The enlarged image pans
 * with the pointer (mouse) or scrolls natively (touch). Esc or click closes.
 */
export default function ZoomImage({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
  style,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const img = useRef<HTMLImageElement>(null);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    if (!open) return;
    setTouch(window.matchMedia('(hover: none), (pointer: coarse)').matches);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Zoomed width: at least 1.5× the viewport, never below the file's own width.
  const zoomW = () => Math.max(window.innerWidth * 1.5, width);

  const pan = (e: React.PointerEvent<HTMLDivElement>) => {
    if (touch || !img.current) return;
    const w = zoomW();
    const h = (w * height) / width;
    const x = -((e.clientX / window.innerWidth) * (w - window.innerWidth));
    const y = -((e.clientY / window.innerHeight) * Math.max(0, h - window.innerHeight));
    img.current.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
  };

  return (
    <>
      <button type="button" className={`zoomable ${className ?? ''}`} style={style} onClick={() => setOpen(true)} aria-label={`Zoom in: ${alt}`} data-cursor-label="Zoom">
        <img src={src} alt={alt} width={width} height={height} className={imgClassName} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} decoding="async" />
        <span className="zoom-badge" aria-hidden="true">⤢ ZOOM</span>
      </button>
      {open && (
        <div
          className="zoom-view"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onPointerMove={pan}
          onClick={() => setOpen(false)}
          style={touch ? { overflow: 'auto', cursor: 'default' } : undefined}
        >
          <img
            ref={img}
            src={src}
            alt=""
            style={{ width: touch ? '220vw' : `${Math.round(zoomW())}px`, height: 'auto', position: touch ? 'static' : 'absolute' }}
          />
          <span className="zoom-hint">{touch ? 'SCROLL TO EXPLORE · TAP TO CLOSE' : 'MOVE TO EXPLORE · CLICK OR ESC TO CLOSE'}</span>
        </div>
      )}
    </>
  );
}
