import Link from 'next/link';
import { Ambient, ContactBlock, Experience, Process } from '../../components/sections';
import { ArrowUpRight, TextBadge } from '../../components/icons';
import { education, languages, links, profile, toolGroups } from '../../lib/projects';

export const metadata = {
  title: 'About',
  description:
    'Priyanka Sharma — Senior Graphic Designer, Gurgaon. 12+ years of brand systems, campaign design and motion across Greystar, Omnicom Media Group and Reckitt brands.',
};

const principles = [
  {
    title: 'Ideas earn form.',
    body: 'My process starts long before I open Illustrator. I want to know what we’re trying to say, who we’re saying it to, and why anyone should care. Once that part clicks, design becomes much more interesting.',
  },
  {
    title: 'Systems, not one-offs.',
    body: 'A brand has to survive real channels and real stakeholders. I build identity and campaign systems — guidelines, templates, toolkits — that marketing, brand and operations can ship from without a designer in the room.',
  },
  {
    title: 'Craft first. AI second.',
    body: 'Firefly, Midjourney, Higgsfield and Kling help me explore faster. The finish is still Adobe and Figma, with a human hand on type, spacing and the thing you cannot prompt.',
  },
  {
    title: 'Present early. Ship on time.',
    body: 'Remote, hybrid or in the room: design-thinking workshops align teams before assets multiply, stakeholders see direction early, and the idea is protected all the way to rollout.',
  },
];

export default function About() {
  return (
    <main id="main" style={{ position: 'relative' }}>
      <Ambient />
      <section className="wrap hero about-grid">
        <div className="fitbox" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow fade-in" style={{ marginBottom: 28 }}>
            <span className="dot pulse" />
            {profile.role} · {profile.location}
          </p>
          <h1 className="h-xl">
            <span className="line"><span>CURIOUS</span></span>
            <span className="line"><span className="outline">MIND.</span></span>
            <span className="line"><span>CLEAR</span></span>
            <span className="line"><span className="accent">INTENT.</span></span>
          </h1>
          <p className="lead fade-in" style={{ marginTop: 30, fontSize: 'clamp(20px, 2vw, 26px)', color: 'var(--fg)' }}>
            I’m Priyanka Sharma. I own brand systems and campaigns from first brief to live rollout.
          </p>
          <p className="body fade-in" style={{ marginTop: 16, maxWidth: 540 }}>
            12+ years across agency, global media and remote in-house teams — most recently multi-family property identity at Greystar, international campaign concepts at Omnicom Media Group, and Reckitt FMCG content for Vanish, Harpic and Mortein.
          </p>
          <div className="btn-row fade-in" style={{ marginTop: 30 }}>
            <Link href="/#work" className="btn btn-light" data-magnetic>See the work <ArrowUpRight /></Link>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost" data-magnetic>LinkedIn ↗</a>
            <a href={links.behance} target="_blank" rel="noreferrer" className="btn btn-ghost" data-magnetic>Behance ↗</a>
          </div>
        </div>
        <div className="photo-wrap">
          <TextBadge id="badge-about-page" text="12+ YEARS ✳ BRAND · CAMPAIGN · MOTION ✳ " fill="var(--accent)" ink="#07080b" className="photo-badge" />
          <div className="photo">
            <img className="parallax" src="/images/priyanka.webp" alt="Priyanka Sharma" width={1000} height={1250} fetchPriority="high" />
            <div className="scan" style={{ height: '25%' }} />
            <span className="photo-cap">OPEN TO RELOCATION · REMOTE · HYBRID</span>
          </div>
        </div>
      </section>

      <section className="wrap section split" style={{ borderTop: '1px solid var(--line)' }}>
        <p className="eyebrow">[01] — How I work</p>
        <div>
          {principles.map((p, i) => (
            <article key={p.title} className="principle reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <Experience />

      <section className="wrap section split" id="toolkit" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="exp-side">
          <p className="eyebrow">[03] — Toolkit &amp; training</p>
          <h2 className="h-md" style={{ marginTop: 18 }}>
            Adobe hands. <span className="outline">AI speed.</span>
          </h2>
          <div className="frame reveal-clip" style={{ marginTop: 28, aspectRatio: '3 / 2', maxWidth: 440 }}>
            <img src="/images/board-hero.webp" alt="PS monogram notebook on a desk with paper stock, a brass ruler and a marigold" loading="lazy" />
          </div>
        </div>
        <div className="tool-groups">
          {toolGroups.map((g) => (
            <div key={g.title} className="reveal">
              <h3>{g.title}</h3>
              <div className={`tool-cloud${g.title.startsWith('AI') ? ' ai' : ''}`}>
                {g.items.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
          <div className="reveal" style={{ marginTop: 12 }}>
            <h3>Education</h3>
            <div className="edu">
              {education.map((e) => (
                <div key={e.title}>
                  <div>
                    <strong>{e.title}</strong>
                    <span>{e.place}</span>
                  </div>
                  <em>{e.year}</em>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <h3>Languages</h3>
            <div className="tool-cloud">
              {languages.map(([l, lvl]) => (
                <span key={l}>{l} — {lvl}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Process />
      <div style={{ height: 80 }} />
      <ContactBlock />
    </main>
  );
}
