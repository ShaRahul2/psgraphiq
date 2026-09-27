import { Ambient, ContactBlock } from '../../components/sections';

export const metadata = {
  title: 'Contact',
  description: 'Discuss a design project, creative role or collaboration with Priyanka Sharma.',
};

export default function Contact() {
  return (
    <main id="main" style={{ position: 'relative', paddingTop: 48 }}>
      <Ambient />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ContactBlock heading={false} />
      </div>
    </main>
  );
}
