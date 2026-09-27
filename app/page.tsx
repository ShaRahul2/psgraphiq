import WorkGallery from '../components/work-gallery';
import { AboutTeaser, Ambient, Band, ContactBlock, Experience, Hero, Manifesto, NamedWork, Process, Services, Tapes } from '../components/sections';

export default function Home() {
  return (
    <main id="main" style={{ position: 'relative' }}>
      <Ambient />
      <Hero />
      <Band />
      <Manifesto />
      <NamedWork />
      <section className="wrap" id="work" style={{ paddingTop: 40, paddingBottom: 120 }}>
        <WorkGallery />
      </section>
      <Tapes />
      <Services />
      <Process />
      <Experience compact />
      <AboutTeaser />
      <ContactBlock />
    </main>
  );
}
