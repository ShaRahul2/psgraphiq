import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectIndex, projects, projectTotal } from '../../../lib/projects';
import { ArrowLeft, ArrowUpRight, TextBadge } from '../../../components/icons';
import { ContactBlock } from '../../../components/sections';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p?.name ?? 'Project not found', description: p?.description };
}

const seeds = (() => {
  let seed = 11;
  const rnd = () => ((seed = (seed * 9301 + 49297) % 233280), seed / 233280);
  return Array.from({ length: 18 }, () => ({ x: rnd() * 96, du: 7 + rnd() * 7, dl: -rnd() * 14, o: 0.35 + rnd() * 0.5 }));
})();

const boards = ['study-1', 'study-2', 'study-3', 'study-4', 'study-5', 'study-6', 'study-7'];

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  const isMeloni = p.slug === 'meloni';
  const tint = isMeloni ? 'var(--lime)' : 'var(--accent)';
  const words = p.name.split(' ');
  const isBoard = p.format === 'board';
  const Title = (
    <h1 className="case-title">
      {words.map((w, wi) => (
        <span key={wi} className="line">
          <span style={wi === words.length - 1 ? { color: tint } : undefined}>
            {w.split('').map((c, ci) => (
              <span key={ci} className="ltr">{c}</span>
            ))}
            {wi === words.length - 1 ? '.' : ''}
          </span>
        </span>
      ))}
    </h1>
  );

  return (
    <main id="main" style={{ position: 'relative', ['--tint' as string]: tint } as React.CSSProperties}>
      <div className="orb float" aria-hidden="true" style={{ top: 80, right: -140, width: 560, height: 560, background: tint, opacity: 0.09 }} />

      <div className="wrap">
        <div className="crumbs">
          <Link href="/#work"><ArrowLeft className="w-4 h-4" /> All work</Link>
          <span className="spacer" />
          <span className="mono hide-sm" style={{ letterSpacing: 1.5 }}>{p.category.toUpperCase()}</span>
          <span className="mono" style={{ letterSpacing: 1.5, color: tint }}>{projectIndex(p)} / {projectTotal}</span>
        </div>
      </div>

{isBoard ? (
      <section className="wrap" style={{ paddingTop: 56, position: 'relative' }}>
        <div className="fitbox">
          <p className="eyebrow" style={{ marginBottom: 22 }}>{p.category}</p>
          {Title}
        </div>
        <a className="board-hero reveal-clip" href={`/images/${p.image}`} target="_blank" rel="noreferrer" style={{ display: 'block', marginTop: 40, background: p.color }} aria-label={`Open the ${p.name} board at full size`}>
          <img src={`/images/${p.image}`} alt={p.alt} width={1168} height={784} fetchPriority="high" />
        </a>
        <div className="board-grid">
          <div>
            <p className="disp" style={{ fontSize: 'clamp(24px, 2.4vw, 34px)', lineHeight: 1.15, letterSpacing: '-1px', fontWeight: 700 }}>{p.headline}</p>
            <dl className="facts" style={{ marginTop: 28 }}>
              {p.facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="reveal">
            <p className="lead" style={{ color: 'var(--fg)' }}>{p.description}</p>
            {p.body.map((para) => (
              <p key={para} className="body" style={{ marginTop: 18 }}>{para}</p>
            ))}
            {p.note && (
              <p className="honest"><b>ABOUT THIS BOARD</b><span>{p.note}</span></p>
            )}
          </div>
        </div>
      </section>
      ) : (
      <section className="wrap case-hero">
        {isMeloni && (
          <div className="seeds" aria-hidden="true">
            {seeds.map((s, i) => (
              <span key={i} className="seed" style={{ left: `${s.x.toFixed(1)}%`, animationDuration: `${s.du.toFixed(1)}s`, animationDelay: `${s.dl.toFixed(1)}s`, opacity: s.o }} />
            ))}
          </div>
        )}
        <div className="fitbox" style={{ position: 'relative' }}>
          <p className="eyebrow" style={{ marginBottom: 26 }}>{isMeloni ? 'Case study — self-initiated concept' : p.category}</p>
          {Title}
          <p className="disp" style={{ marginTop: 34, fontSize: 'clamp(24px, 2.4vw, 32px)', lineHeight: 1.15, letterSpacing: '-1px', fontWeight: 700, maxWidth: 480 }}>{p.headline}</p>
          <p className="body" style={{ marginTop: 18, fontSize: 17, maxWidth: 500 }}>{p.description}</p>
          <dl className="details">
            {p.facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="case-stage">
          <svg className="spin" width="600" height="600" viewBox="0 0 600 600" fill="none" aria-hidden="true">
            <circle cx="300" cy="300" r="290" stroke={tint} strokeOpacity={0.35} strokeDasharray="2 10" />
            <circle cx="300" cy="10" r="7" fill={tint} />
          </svg>
          <a className="case-cover float" href={`/images/${p.image}`} target="_blank" rel="noreferrer" style={{ background: p.color }} aria-label={`Open ${p.name} artwork at full size`}>
            <img src={`/images/${p.image}`} alt={p.alt} width={1080} height={1080} fetchPriority="high" />
          </a>
          {isMeloni && (
            <TextBadge id="badge-meloni" text="WATERMELON WINE ✳ MELONI KISS ✳ " fill="#1f4a2e" ink="#d4f24a" center="#d4f24a" style={{ position: 'absolute', left: 20, bottom: 40, width: 160, height: 160, zIndex: 3 }} />
          )}
        </div>
      </section>
      )}

      {isMeloni ? (
        <>
          <div className="tapes" aria-hidden="true" style={{ height: 240, margin: 0 }}>
            <div className="tape tape-a" style={{ top: 50, transform: 'rotate(-3.5deg)', background: 'var(--lime)', color: '#0b1a10' }}>
              <div className="marquee-track">
                {[0, 1].map((k) => (
                  <div key={k}>{['Wordmark', 'Looping symbol', 'Botanical green', 'Illustrated world', 'Packaging system'].map((t) => (<span key={t} style={{ display: 'contents' }}><span>{t}</span><span>✳</span></span>))}</div>
                ))}
              </div>
            </div>
            <div className="tape tape-b" style={{ top: 92, transform: 'rotate(2.5deg)', background: 'var(--botanical)', color: 'var(--lime)' }}>
              <div className="marquee-track rev">
                {[0, 1].map((k) => (
                  <div key={k}>{['SOPHISTICATION', 'MEETS', 'PLAY', 'STRUCTURE FOR CREDIBILITY', 'ILLUSTRATION FOR PERSONALITY'].map((t) => (<span key={t} style={{ display: 'contents' }}><span>{t}</span><span>◆</span></span>))}</div>
                ))}
              </div>
            </div>
          </div>

          <section className="wrap section split" style={{ paddingBottom: 60 }}>
            <p className="eyebrow">[01] — The challenge</p>
            <div className="reveal">
              <h2 className="h-md">Grown-up enough for the wine shelf. <span style={{ color: 'var(--lime)' }}>Unexpected enough to stand apart.</span></h2>
              <p className="body" style={{ marginTop: 26, fontSize: 18, maxWidth: 760 }}>
                Push the fruit too far and it feels like juice. Make it too traditional and the product loses what makes it different. The identity brings sophistication and play together: structure for credibility, illustration for personality.
              </p>
            </div>
          </section>

          <section className="wrap pair" style={{ paddingBottom: 60 }}>
            <div className="frame frame-lg reveal-clip"><img className="parallax" src="/images/meloni-bottle.webp" alt="Meloni Kiss wine bottle design" loading="lazy" /></div>
            <div className="frame frame-lg reveal-clip"><img className="parallax" src="/images/meloni-detail.webp" alt="Meloni Kiss identity in application" loading="lazy" /></div>
          </section>

          <section className="wrap section split" style={{ paddingBottom: 60 }}>
            <p className="eyebrow">[02] — The visual language</p>
            <div className="reveal">
              <h2 className="h-md">Order in the centre.<br /><span className="outline">A little chaos around it.</span></h2>
              <p className="body" style={{ marginTop: 26, fontSize: 18, maxWidth: 760 }}>
                A custom wordmark and looping symbol introduce soft, continuous forms. Deep botanical green brings richness; yellow-green adds freshness. Watermelon forms, vines and playful characters turn the label into an illustrated world.
              </p>
              <div className="swatches">
                <div className="swatch" style={{ background: 'var(--botanical)', color: 'var(--fg)' }}>BOTANICAL GREEN</div>
                <div className="swatch" style={{ background: '#c8d245', color: '#0b1a10' }}>YELLOW-GREEN</div>
              </div>
            </div>
          </section>

          <section className="wrap" style={{ paddingBottom: 40 }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Identity development boards</p>
            <div className="boards">
              {boards.map((b, i) => (
                <a key={b} href={`/images/${b}.webp`} target="_blank" rel="noreferrer" className="reveal" style={{ transitionDelay: `${(i % 4) * 70}ms` }} aria-label={`Open Meloni identity development board ${i + 1}`}>
                  <img src={`/images/${b}.webp`} alt={`Meloni identity development board ${i + 1}`} loading="lazy" />
                </a>
              ))}
            </div>
          </section>

          <section className="wrap section result">
            <div className="frame frame-md reveal-clip"><img className="parallax" src="/images/meloni-tote.webp" alt="Meloni Kiss illustrated tote bag" loading="lazy" /></div>
            <div className="reveal">
              <p className="eyebrow" style={{ marginBottom: 20 }}>[03] — The result</p>
              <h2 className="h-md">More than a label.<br /><span style={{ color: 'var(--lime)' }}>A whole system.</span></h2>
              <p className="body" style={{ marginTop: 24, fontSize: 18 }}>
                The logo, colour, illustration and graphic language move across packaging, gifting, merchandise and digital communication while still feeling like the same brand.
              </p>
              <div className="tags">{['PACKAGING', 'GIFTING', 'MERCHANDISE', 'DIGITAL'].map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          </section>
        </>
      ) : isBoard ? null : (
        <section className="wrap section split" style={{ borderTop: '1px solid var(--line)' }}>
          <p className="eyebrow">A closer look</p>
          <div className="reveal">
            <p className="lead" style={{ fontSize: 'clamp(20px, 2vw, 28px)', color: 'var(--fg)', maxWidth: 820 }}>{p.body[0]}</p>
            <p className="body" style={{ marginTop: 20, maxWidth: 680 }}>
              The full case study for {p.name} is on its way. In the meantime, open the original artwork, or get in touch to talk through the thinking behind it.
            </p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <a className="btn btn-ghost" href={`/images/${p.image}`} target="_blank" rel="noreferrer">View full artwork <ArrowUpRight /></a>
              <Link className="btn btn-accent" href="/contact" data-magnetic>Ask about this project</Link>
            </div>
          </div>
        </section>
      )}

      <section className="wrap" style={{ paddingBottom: 90 }}>
        <Link href={`/work/${next.slug}`} className="next">
          <img src={`/images/${next.image}`} alt="" loading="lazy" style={{ background: next.color }} />
          <div className="grow">
            <p className="eyebrow" style={{ marginBottom: 8, fontSize: 11 }}>Up next</p>
            <p className="disp" style={{ fontSize: 40, letterSpacing: '-1.4px', fontWeight: 800, lineHeight: 1.1 }}>{next.name}</p>
            <p style={{ marginTop: 6, fontSize: 14, color: 'var(--muted-2)' }}>{next.category}</p>
          </div>
          <span className="round-cta" style={{ width: 64, height: 64, background: tint }} aria-hidden="true"><ArrowUpRight /></span>
        </Link>
      </section>

      <ContactBlock />
    </main>
  );
}
