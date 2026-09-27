import { Ambient, ContactBlock } from '../../components/sections';

export const metadata = {
  title: 'Contact',
  description: 'Hire or brief Priyanka Sharma, Senior Graphic Designer in Gurgaon — open to relocation, remote and hybrid roles, retainers and brand-system projects.',
};

export default function Contact() {
  return (
    <main id="main" style={{ position: 'relative', paddingTop: 48 }}>
      <Ambient />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ContactBlock heading={false} showPhone />
      </div>
    </main>
  );
}
