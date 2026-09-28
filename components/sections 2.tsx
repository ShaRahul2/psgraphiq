import Link from 'next/link';
import { experience, links, namedWork, profile, services, stats, steps } from '../lib/projects';
import { ArrowDown, ArrowUpRight, Instagram, TextBadge } from './icons';
import EnquiryForm from './enquiry-form';

/* Deterministic star field so server and client markup match. */
const stars = (() => {
  let seed = 7;
  const rnd = () => ((seed = (seed * 9301 + 49297) % 233280), seed / 233280);
  return Array.from({ length: 46 }, () => ({ x: rnd() * 100, y: Math.round(rnd() * 960), s: 1 + rnd() * 2.2, d: rnd() * 6 }));
})();

export function Ambient() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="gridbg" />
      <div className="spot" />
      <div className="orb float" style={{ top: 120, right: -160, width: 520, height: 520, background: 'var(--accent)', opacity: 0.1 }} />
      {stars.map((s, i) => (
        <span key={i} className="twinkle" style={{ left: `${s.x.toFixed(2)}%`, top: s.y, width: s.s, height: s.s, animationDelay: `${s.d.toFixed(2)}s, ${s.d.toFixed(2)}s` }} />
      ))}
    </div>
  );
}

const BLOB_A = [
  'M300,80 C420,80 520,180 520,300 C520,420 420,520 300,520 C180,520 80,420 80,300 C80,180 180,80 300,80 Z',
  'M300,50 C460,80 550,200 505,325 C470,455 385,545 275,512 C145,480 55,400 88,275 C112,155 165,35 300,50 Z',
  'M325,88 C440,58 515,210 535,312 C555,432 400,505 288,535 C165,555 65,430 68,298 C70,188 200,112 325,88 Z',
];
const BLOB_B = [
  'M300,60 C460,90 540,200 505,325 C470,450 380,545 275,512 C140,480 55,400 88,275 C110,150 170,40 300,60 Z',
  'M320,70 C440,60 530,210 540,315 C555,440 400,520 285,540 C160,555 50,430 60,300 C65,180 200,90 320,70 Z',
];

export function Hero() {
  return (
    <section className="wrap hero" id="intro">
      <div className="fitbox" style={{ position: 'relative', zIndex: 2 }}>
        <p className="eyebrow fade-in" style={{ marginBottom: 32 }}>
          <span className="dot pulse" />
          Priyanka Sharma — Senior Graphic Designer — Gurgaon · open to relocation
        </p>
        <h1 className="h-xl">
          <span className="line"><span>GOOD IDEAS.</span></span>
          <span className="line"><span className="outline">REAL CHARACTER.</span></span>
          <span className="line"><span>LASTING <span className="accent">IMPACT.</span></span></span>
        </h1>
        <p className="hero-sub fade-in">
          Design with intent — for{' '}
          <span className="ticker accent">
            <span>
              <span>brands.</span>
              <span>packaging.</span>
              <span>campaigns.</span>
              <span>characters.</span>
              <span>brands.</span>
            </span>
          </span>
        </p>
        <div className="hero-row fade-in">
          <p>Brand systems, campaigns and motion for real estate, global media and FMCG — from a blank page to live rollout.</p>
          <div className="btn-row">
            <a href="#work" className="btn btn-light" data-magnetic>
              Explore the work <ArrowDown />
            </a>
            <Link href="/contact" className="btn btn-ghost" data-magnetic>
              Say hello
            </Link>
          </div>
        </div>
      </div>

      <div className="portal">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" aria-hidden="true" style={{ opacity: 0.9 }}>
          <path fill="var(--accent)" fillOpacity={0.1} stroke="var(--accent)" strokeOpacity={0.45} strokeWidth={1.2} d={BLOB_A[0]}>
            <animate attributeName="d" dur="11s" repeatCount="indefinite" values={[...BLOB_A, BLOB_A[0]].join(';')} />
          </path>
          <path fill="none" stroke="var(--ice)" strokeOpacity={0.35} strokeWidth={1} d={BLOB_B[0]}>
            <animate attributeName="d" dur="14s" repeatCount="indefinite" values={[...BLOB_B, BLOB_B[0]].join(';')} />
          </path>
        </svg>
        <svg className="spin" width="560" height="560" viewBox="0 0 560 560" fill="none" aria-hidden="true">
          <circle cx="280" cy="280" r="270" stroke="rgba(255,255,255,.14)" strokeDasharray="2 10" />
          <circle cx="280" cy="10" r="6" fill="var(--accent)" />
          <circle cx="10" cy="280" r="3" fill="var(--fg)" />
        </svg>
        <svg className="spin-rev" width="470" height="470" viewBox="0 0 470 470" fill="none" aria-hidden="true">
          <circle cx="235" cy="235" r="228" stroke="rgba(255,91,69,.35)" />
          <path d="M235 7 A228 228 0 0 1 463 235" stroke="var(--accent)" strokeWidth={2.5} strokeLinecap="round" />
          <circle cx="398" cy="396" r="4" fill="var(--ice)" />
        </svg>
        <div className="portal-disc bob">
          <img src="/images/portrait.webp" alt="Priyanka’s illustrated alter ego — a girl with a paint-brush and a beret balanced on her hair bun" width={1200} height={800} fetchPriority="high" />
          <div className="scan" />
        </div>
        <span className="chip-float float" style={{ top: 70, left: 10 }}>◆ BRAND IDENTITY</span>
        <span className="chip-float float-2" style={{ top: 200, right: -6, background: 'var(--accent)', color: 'var(--accent-ink)', border: 0 }}>PACKAGING ↗</span>
        <span className="chip-float float-3" style={{ bottom: 70, left: 40, borderColor: 'rgba(124,140,255,.5)', color: '#c4ccff' }}>AI + MOTION</span>
        <TextBadge id="badge-hero" text="DESIGN WITH INTENT ✳ 12+ YEARS ✳ " fill="#07080b" ink="#eef0f4" center="var(--accent)" style={{ position: 'absolute', top: 24, right: 60, width: 150, height: 150 }} />
        <span className="note">a little bit of me.</span>
        <span className="hud" style={{ top: 20, right: 20, borderTopWidth: 1.5, borderRightWidth: 1.5 }} />
        <span className="hud" style={{ bottom: 20, left: 0, borderBottomWidth: 1.5, borderLeftWidth: 1.5 }} />
      </div>
    </section>
  );
}

function Loop({ items, sep = '✳', sepAccent = false }: { items: { t: string; outline?: boolean }[]; sep?: string; sepAccent?: boolean }) {
  const row = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined}>
      {items.map((it, i) => (
        <span key={i} style={{ display: 'contents' }}>
          <span className={it.outline ? 'outline' : undefined}>{it.t}</span>
          <span className={sepAccent ? 'accent' : undefined}>{sep}</span>
        </span>
      ))}
    </div>
  );
  return (
    <>
      {row(false)}
      {row(true)}
    </>
  );
}

export function Band() {
  const items = [
    { t: 'Brand identities' },
    { t: 'Packaging', outline: true },
    { t: 'Campaigns' },
    { t: 'Digital & print', outline: true },
    { t: 'Character design' },
    { t: 'AI image-making', outline: true },
  ];
  return (
    <div className="band marquee">
      <div className="marquee-track band-track">
        <Loop items={items} sepAccent />
      </div>
    </div>
  );
}

export function Manifesto() {
  return (
    <section className="wrap section split">
      <p className="eyebrow">[01] — The stance</p>
      <div className="reveal">
        <p className="disp" style={{ fontSize: 'clamp(26px, 3.6vw, 52px)', lineHeight: 1.18, letterSpacing: '-0.03em', fontWeight: 700, color: 'var(--dim)' }}>
          <span className="strike">Not design for the sake of filling space.</span>
          <br />
          <span className="strike">Not a logo because we need a logo.</span>
          <br />
          <span className="strike">Not another campaign that looks like everything else.</span>
        </p>
        <p className="disp" style={{ marginTop: 36, fontSize: 'clamp(44px, 6vw, 84px)', lineHeight: 1, letterSpacing: '-0.035em', fontWeight: 800 }}>
          Design with <span className="accent">intent.</span>
        </p>
        <div className="stats">
          {stats.map((st) => (
            <div key={st.label}>
              <div className="stat-num"><span data-count={st.value}>{st.value}</span>{st.suffix && <span className="accent">{st.suffix}</span>}</div>
              <div className="stat-label">{st.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NamedWork() {
  return (
    <section className="wrap named reveal" aria-label="Named work">
      <p className="eyebrow">Named work</p>
      <ul>
        {namedWork.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </section>
  );
}

export function Experience({ compact = false }: { compact?: boolean }) {
  const items = compact ? experience.slice(0, 4) : experience;
  return (
    <section className="wrap section split" id="experience">
      <div className="exp-side">
        <p className="eyebrow">[{compact ? '05' : '02'}] — Where the work happened</p>
        <h2 className="h-md" style={{ marginTop: 18, fontSize: 'clamp(34px, 3.4vw, 50px)' }}>
          Agency, global media, <span className="accent" style={{ whiteSpace: 'nowrap' }}>in-house.</span>
        </h2>
        <p className="body" style={{ marginTop: 18, maxWidth: 360 }}>
          Six companies since 2013 — from product design support to owning brand systems for a global real-estate portfolio.
        </p>
      </div>
      <ol className="timeline" data-reveal>
        <span className="timeline-fill" aria-hidden="true" />
        {items.map((e, i) => (
          <li key={e.company} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
            <span className="tl-dot" aria-hidden="true" />
            <div className="tl-head">
              <h3>{e.company}</h3>
              {e.when && <span className="tl-when">{e.when}</span>}
            </div>
            <p className="tl-role">{e.role} · {e.meta}</p>
            {!compact && (
              <ul>
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            )}
            {compact && <p className="tl-point">{e.points[0]}</p>}
          </li>
        ))}
        {compact && (
          <li className="reveal tl-more">
            <span className="tl-dot" aria-hidden="true" />
            <Link href="/about#experience" className="btn btn-ghost">Full experience <ArrowUpRight /></Link>
          </li>
        )}
      </ol>
    </section>
  );
}

export function Tapes() {
  const a = ['IDEAS THAT LEAVE THE MOOD BOARD', 'REAL CHARACTER', 'LASTING IMPACT'].map((t) => ({ t }));
  const b = ['BRAND', 'PACKAGING', 'CAMPAIGNS', 'DIGITAL', 'PRINT', 'CHARACTERS', 'AI + MOTION'].map((t) => ({ t }));
  return (
    <div className="tapes" aria-hidden="true">
      <div className="tape tape-a">
        <div className="marquee-track"><Loop items={a} /></div>
      </div>
      <div className="tape tape-b">
        <div className="marquee-track rev"><Loop items={b} sep="◆" /></div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section className="wrap section" id="services" style={{ paddingTop: 60 }}>
      <div className="split" style={{ marginBottom: 48 }}>
        <p className="eyebrow">[03] — What I do</p>
        <h2 className="h-md reveal" style={{ maxWidth: 820 }}>Different formats. Always the same starting point.</h2>
      </div>
      <div className="grid-3">
        {services.map((s, i) => (
          <div key={s.title} className="svc reveal" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
            <div className="svc-top">
              <span className="svc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={s.icon} /></svg>
              </span>
              <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap section">
        <div className="process-head">
          <div>
            <p className="eyebrow" style={{ marginBottom: 16 }}>[04] — Craft first. AI second.</p>
            <h2 className="h-md">
              From messy beginning
              <br />
              to <span className="accent">working system.</span>
            </h2>
          </div>
          <p>Start with the business problem. Generative tools — Firefly, Midjourney, Higgsfield, Kling — are for speed of exploration. The finish is still Adobe and Figma, with a human hand on type, spacing and the thing you cannot prompt.</p>
        </div>
        <div className="steps" data-reveal>
          <div className="steps-line" aria-hidden="true" />
          <div className="steps-fill" aria-hidden="true" />
          {steps.map((s, i) => (
            <div key={s.title} className="step reveal" style={{ transitionDelay: `${i * 120}ms` }}>
              <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutTeaser() {
  return (
    <section className="wrap section about-grid" id="about">
      <div className="photo-wrap">
        <TextBadge id="badge-about" text="THE PERSON BEHIND THE PIXELS ✳ " fill="var(--accent)" ink="#07080b" className="photo-badge" />
        <div className="photo reveal">
          <img className="parallax" src="/images/priyanka.webp" alt="Priyanka Sharma at her desk" loading="lazy" width={1000} height={1250} />
          <div className="scan" style={{ height: '25%' }} />
          <span className="photo-cap">PRIYANKA SHARMA — SENIOR GRAPHIC DESIGNER</span>
        </div>
      </div>
      <div>
        <p className="eyebrow" style={{ marginBottom: 22 }}>[06] — Hello, I’m Priyanka</p>
        <h2 className="h-md" style={{ fontSize: 'clamp(42px, 4.6vw, 64px)' }}>
          Curious mind.
          <br />
          Clear <span className="accent">intent.</span>
        </h2>
        <p className="lead" style={{ marginTop: 30, color: 'var(--fg)' }}>
          {profile.summary}
        </p>
        <p className="body" style={{ marginTop: 18 }}>
          Recent work: multi-family property identity at Greystar, international campaign concepts at Omnicom Media Group, and Reckitt FMCG content for Vanish, Harpic and Mortein. Before the pixels: what are we trying to say, who are we saying it to, and why should anyone care?
        </p>
        <div className="grid-3" style={{ marginTop: 34, gap: 12 }}>
          <div className="mini"><strong>Present early.</strong><span>Stakeholders see direction, not surprises.</span></div>
          <div className="mini"><strong>Protect the idea.</strong><span>One system across every channel.</span></div>
          <div className="mini" style={{ borderColor: 'rgba(124,140,255,.4)' }}><strong>Ship on time.</strong><span>Remote, hybrid or in the room.</span></div>
        </div>
        <Link href="/about" className="btn btn-ghost" style={{ marginTop: 30 }} data-magnetic>
          Meet the designer <ArrowUpRight />
        </Link>
      </div>
    </section>
  );
}

export function ContactBlock({ heading = true, showPhone = false }: { heading?: boolean; showPhone?: boolean }) {
  return (
    <section className="wrap" id="contact" style={{ paddingTop: 20, paddingBottom: 100 }}>
      <div className="cta-block reveal">
        <div className="sphere-wrap" aria-hidden="true">
          <div className="sphere">
            {[0, 20, 40, 60, 80, 100, 120, 140, 160].map((d) => (
              <span key={d} style={{ transform: `rotateY(${d}deg)` }} />
            ))}
            <span style={{ transform: 'rotateX(90deg)' }} />
            <span style={{ transform: 'rotateX(90deg) translateZ(110px) scale(.87)' }} />
            <span style={{ transform: 'rotateX(90deg) translateZ(-110px) scale(.87)' }} />
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            <span className="dot" />
            Open to senior roles, retainers &amp; brand-system projects
          </p>
          {heading ? (
            <h2 className="disp" style={{ fontSize: 'clamp(44px, 5.4vw, 76px)', lineHeight: 0.96, letterSpacing: '-0.04em', fontWeight: 800 }}>
              Got a brief?
              <br />
              Or a messy
              <br />
              beginning?
            </h2>
          ) : (
            <h1 className="disp" style={{ fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 0.94, letterSpacing: '-0.04em', fontWeight: 800 }}>
              Big idea?
              <br />
              Messy brief?
              <br />
              I’m listening.
            </h1>
          )}
          <p style={{ marginTop: 28, fontSize: 18, lineHeight: 1.55, maxWidth: 420, color: '#2a0e09' }}>
            Tell me what you’re trying to say. We’ll work out how it should look. {profile.location} — {profile.availability.toLowerCase()}.
          </p>
          <a href={`mailto:${profile.email}`} className="cta-mail" data-magnetic>{profile.email}</a>
          {showPhone && (
            <p style={{ marginTop: 12, fontWeight: 600 }}>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a> · {profile.location}
            </p>
          )}
          <div className="cta-links">
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={links.behance} target="_blank" rel="noreferrer">Behance ↗</a>
            <a href={links.instagram} target="_blank" rel="noreferrer"><Instagram /> {links.instagramHandle}</a>
          </div>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}
