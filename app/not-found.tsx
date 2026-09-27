import Link from 'next/link';
import { Ambient } from '../components/sections';

export default function NotFound() {
  return (
    <main id="main" style={{ position: 'relative', minHeight: '70vh' }}>
      <Ambient />
      <section className="wrap hero" style={{ gridTemplateColumns: 'minmax(0, 1fr)' }}>
        <div className="fitbox" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow" style={{ marginBottom: 28 }}>404 / Page not found</p>
          <h1 className="h-xl">
            <span className="line"><span>A WRONG TURN.</span></span>
            <span className="line"><span className="outline">GOOD WORK</span></span>
            <span className="line"><span className="accent">AHEAD.</span></span>
          </h1>
          <p className="body" style={{ marginTop: 28 }}>This page doesn’t exist. The portfolio is a good place to start.</p>
          <Link className="btn btn-light" href="/#work" style={{ marginTop: 28 }} data-magnetic>Back to the work ↗</Link>
        </div>
      </section>
    </main>
  );
}
