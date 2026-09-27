import WorkGallery from '../components/work-gallery';
import { AboutTeaser, Ambient, ContactBlock, Experience, Hero, NamedWork, Services } from '../components/sections';

/* Kept short on purpose: reviewers skim. The stance and process live on /about. */
export default function Home() {
  return (
    <main id="main" style={{ position: 'relative' }}>
      <Ambient />
      <Hero />
      <NamedWork />
      <section className="wrap" id="work" style={{ paddingTop: 40, paddingBottom: 100 }}>
        <WorkGallery />
      </section>
      <Services />
      <Experience compact />
      <AboutTeaser />
      <ContactBlock />
    </main>
  );
}
