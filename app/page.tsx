import WorkGallery from '../components/work-gallery';
import { AboutTeaser, Ambient, ContactBlock, Experience, Hero, NamedWork, Services } from '../components/sections';

/* Kept short on purpose: reviewers skim. The stance and process live on /about. */
export default function Home() {
  return (
    <main id="main" style={{ position: 'relative' }}>
      <Ambient />
      <Hero />
      {/* The work comes first — straight after the hero, like a designer's portfolio should. */}
      <section className="wrap" id="work" style={{ position: 'relative', zIndex: 1, paddingTop: 8, paddingBottom: 80 }}>
        <WorkGallery />
      </section>
      <NamedWork />
      <Services />
      <Experience compact />
      <AboutTeaser />
      <ContactBlock />
    </main>
  );
}
