import WorkGallery from '../components/work-gallery';
import { AboutTeaser, Ambient, Band, ContactBlock, Hero, Manifesto, Process, Services, Tapes } from '../components/sections';

export default function Home() {
  return (
    <main id="main" style={{ position: 'relative' }}>
      <Ambient />
      <Hero />
      <Band />
      <Manifesto />
      <section className="wrap" id="work" style={{ paddingTop: 40, paddingBottom: 120 }}>
        <WorkGallery />
      </section>
      <Tapes />
      <Services />
      <Process />
      <AboutTeaser />
      <ContactBlock />
    </main>
  );
}
