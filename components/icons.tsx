type P = { className?: string };
const base = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };

export const ArrowUpRight = ({ className }: P) => (
  <svg viewBox="0 0 24 24" strokeWidth={2.4} className={className} {...base}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const ArrowDown = ({ className }: P) => (
  <svg viewBox="0 0 24 24" strokeWidth={2.2} className={className} {...base}><path d="M12 5v14M5 12l7 7 7-7" /></svg>
);
export const ArrowLeft = ({ className }: P) => (
  <svg viewBox="0 0 24 24" strokeWidth={2.2} className={className} {...base}><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
);
export const ChevronLeft = ({ className }: P) => (
  <svg viewBox="0 0 24 24" strokeWidth={2} className={className} {...base}><path d="M15 18l-6-6 6-6" /></svg>
);
export const ChevronRight = ({ className }: P) => (
  <svg viewBox="0 0 24 24" strokeWidth={2} className={className} {...base}><path d="M9 18l6-6-6-6" /></svg>
);
export const Close = ({ className }: P) => (
  <svg viewBox="0 0 24 24" strokeWidth={2.2} className={className} {...base}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Menu = ({ className }: P) => (
  <svg viewBox="0 0 24 24" strokeWidth={2} className={className} {...base}><path d="M4 8h16M4 16h10" /></svg>
);
export const Instagram = ({ className }: P) => (
  <svg viewBox="0 0 24 24" strokeWidth={1.8} className={className} {...base}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);

/** Circular spinning text badge. `id` must be unique on the page. */
export function TextBadge({ id, text, fill, ink, center, className, style }: { id: string; text: string; fill: string; ink: string; center?: string; className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 150 150" className={className} style={style} aria-hidden="true">
      <defs>
        <path id={id} d="M75,75 m-56,0 a56,56 0 1,1 112,0 a56,56 0 1,1 -112,0" />
      </defs>
      <g className="badge" style={{ transformOrigin: '75px 75px' }}>
        <circle cx="75" cy="75" r="72" fill={fill} stroke="rgba(255,255,255,.18)" />
        <text fill={ink} fontFamily="JetBrains Mono, monospace" fontSize="11.5" fontWeight={500} letterSpacing="3">
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </g>
      {center ? <circle cx="75" cy="75" r="9" fill={center} /> : <path d="M62 88 88 62M66 62h22v22" fill="none" stroke={ink} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  );
}
