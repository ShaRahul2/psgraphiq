import Link from 'next/link';
import { Ambient, ContactBlock, Process, Services } from '../../components/sections';
import { ArrowUpRight, TextBadge } from '../../components/icons';

export const metadata = {
  title: 'About',
  description: 'Priyanka Sharma — Senior Graphic Designer with 12+ years across branding, campaigns, digital and print.',
};

const principles = [
  {
    title: 'Ideas earn form.',
    body: 'My process usually starts long before I open Illustrator. I want to know what we’re trying to say, who we’re saying it to, and why anyone should care. Once that part clicks, design becomes much more interesting.',
  },
  {
    title: 'Character makes it stick.',
    body: 'Great design starts with the right idea and a visual language people can connect with. That thinking takes me across identities, campaigns, packaging, presentations, digital experiences and print.',
  },
  {
    title: 'Always experimenting.',
    body: 'Twelve years haven’t made me less curious. Today, my process stretches into AI, image-making, motion and new ways of building creative ideas. The tools change. The thinking still comes first.',
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
            The designer behind ps.graphiq
          </p>
          <h1 className="h-xl">
            <span className="line"><span>CURIOUS</span></span>
            <span className="line"><span className="outline">MIND.</span></span>
            <span className="line"><span>CLEAR</span></span>
            <span className="line"><span className="accent">INTENT.</span></span>
          </h1>
          <p className="lead fade-in" style={{ marginTop: 30, fontSize: 'clamp(20px, 2vw, 26px)', color: 'var(--fg)' }}>
            I’m Priyanka Sharma. I give ideas a visual language.
          </p>
          <p className="body fade-in" style={{ marginTop: 16, maxWidth: 520 }}>
            A Senior Graphic Designer with 12+ years of experience across branding, campaigns, digital and print design—turning briefs, thoughts, problems and sometimes very messy beginnings into visual ideas that make sense.
          </p>
          <div className="btn-row fade-in" style={{ marginTop: 30 }}>
            <Link href="/#work" className="btn btn-light" data-magnetic>See the work <ArrowUpRight /></Link>
            <Link href="/contact" className="btn btn-ghost" data-magnetic>Start a conversation</Link>
          </div>
        </div>
        <div className="photo-wrap">
          <TextBadge id="badge-about-page" text="12+ YEARS ✳ BRAND & VISUAL DESIGN ✳ " fill="var(--accent)" ink="#07080b" className="photo-badge" />
          <div className="photo">
            <img className="parallax" src="/images/priyanka.webp" alt="Priyanka Sharma" width={1000} height={1250} fetchPriority="high" />
            <div className="scan" style={{ height: '25%' }} />
          </div>
        </div>
      </section>

      <section className="wrap section split" style={{ borderTop: '1px solid var(--line)' }}>
        <p className="eyebrow">How I think about design</p>
        <div>
          {principles.map((p, i) => (
            <article key={p.title} className="principle reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <Services />
      <Process />
      <div style={{ height: 80 }} />
      <ContactBlock />
    </main>
  );
}
