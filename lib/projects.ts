export type Category = 'Identity' | 'Packaging' | 'Product';

export type Project = {
  slug: string;
  name: string;
  index: string;
  tag: string;
  cats: Category[];
  category: string;
  image: string;
  color: string;
  alt: string;
  headline: string;
  description: string;
  closer: string;
  details: [string, string][];
  hasCaseStudy: boolean;
};

export const projects: Project[] = [
  {
    slug: 'meloni',
    name: 'Meloni Kiss',
    index: '01',
    tag: 'Identity · Packaging',
    cats: ['Identity', 'Packaging'],
    category: 'Brand identity · Packaging',
    image: 'meloni-pack.webp',
    color: '#c8d245',
    alt: 'Meloni Kiss watermelon wine packaging',
    headline: 'An unexpected fruit. An identity of its own.',
    description:
      'Meloni Kiss is a self-initiated identity for a watermelon wine. The challenge: make an unusual flavour feel credible as wine without losing the fun that makes it interesting.',
    closer: '',
    details: [
      ['Project', 'Self-initiated concept'],
      ['Scope', 'Identity, illustration & packaging'],
      ['Idea', 'Sophistication meets play'],
    ],
    hasCaseStudy: true,
  },
  {
    slug: 'olio',
    name: 'OLIO',
    index: '02',
    tag: 'Identity · Characters',
    cats: ['Identity'],
    category: 'Identity · Character design',
    image: 'olio.webp',
    color: '#f1ece0',
    alt: 'OLIO orange wordmark with two expressive black-and-white characters',
    headline: 'An identity with a personality.',
    description:
      'A warm orange wordmark and a pair of expressive black-and-white characters. Simple shapes give the identity a playful, recognisable voice.',
    closer:
      'The characters carry the same rounded energy as the wordmark. A restrained palette lets their expressions do the talking.',
    details: [
      ['Colour', 'Orange, black & white'],
      ['Language', 'Bold, rounded forms'],
      ['Character', 'Playful & expressive'],
    ],
    hasCaseStudy: false,
  },
  {
    slug: 'recode',
    name: 'Recode',
    index: '03',
    tag: 'Beauty · Product',
    cats: ['Product'],
    category: 'Beauty · Product visuals',
    image: 'recode.webp',
    color: '#bac9e7',
    alt: 'Recode orange beauty product on a cool blue foam backdrop',
    headline: 'A fresh perspective on beauty.',
    description:
      'Vivid orange packaging, deep green details and a cool, foam-textured backdrop. A product visual built around contrast.',
    closer:
      'The cool blue setting gives the orange label room to stand out. Foam, water and light make the product the focal point.',
    details: [
      ['Colour', 'Orange & botanical green'],
      ['Texture', 'Soft foam, sharp details'],
      ['Focus', 'The product, front and centre'],
    ],
    hasCaseStudy: false,
  },
  {
    slug: 'wilddoor',
    name: 'Wilddoor',
    index: '04',
    tag: 'Packaging',
    cats: ['Packaging'],
    category: 'Packaging · Visual identity',
    image: 'wilddoor.webp',
    color: '#d7d8b5',
    alt: 'Wilddoor illustrated green packaging among natural textures',
    headline: 'A little closer to the wild.',
    description:
      'Botanical greens and an illustrated label meet warm light and natural textures. Packaging with an easy, outdoorsy character.',
    closer:
      'An illustrated green pack feels at home among natural materials. The composition brings colour and texture together without competing with the label.',
    details: [
      ['Colour', 'Fresh botanical greens'],
      ['Character', 'Illustrated & expressive'],
      ['Setting', 'Natural light & texture'],
    ],
    hasCaseStudy: false,
  },
];

export const services = [
  { title: 'Brand identity', body: 'Wordmarks, symbols, colour and type that give a business a recognisable voice—and a reason behind every choice.', icon: 'M12 3l2.6 5.6L20 9.5l-4 4 1 5.5-5-2.7-5 2.7 1-5.5-4-4 5.4-.9z' },
  { title: 'Packaging', body: 'Labels and packs that earn their shelf space: structure for credibility, illustration for personality.', icon: 'M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10' },
  { title: 'Campaigns', body: 'Ideas that don’t look like everything else, carried consistently from key visual to every channel.', icon: 'M3 11v2a1 1 0 0 0 1 1h3l6 5V5L7 10H4a1 1 0 0 0-1 1zM17 8a5 5 0 0 1 0 8' },
  { title: 'Digital & print', body: 'Presentations, social, web and print collateral—different formats held together by one visual language.', icon: 'M3 4h18v12H3zM8 20h8M12 16v4' },
  { title: 'Character & illustration', body: 'Expressive characters and illustrated worlds that make a brand feel human and easy to remember.', icon: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM9 10h.01M15 10h.01M8.5 14.5a4.5 4.5 0 0 0 7 0' },
  { title: 'AI image-making & motion', body: 'New tools for image-making, motion and building creative ideas faster—with the thinking still first.', icon: 'M5 3v4M3 5h4M6 17v4M4 19h4M13 3l2.3 5.7L21 11l-5.7 2.3L13 19l-2.3-5.7L5 11l5.7-2.3z' },
];

export const steps = [
  { title: 'Listen', body: 'What are we really trying to say? Unpack the brief, the problem and the messy beginning.' },
  { title: 'Think', body: 'Who are we saying it to, and why should anyone care? The idea is found here, not in the software.' },
  { title: 'Shape', body: 'Give the idea a visual language—type, colour, illustration and character people connect with.' },
  { title: 'Scale', body: 'Turn it into a system that moves across packaging, digital, print and merchandise as one brand.' },
];

export const INSTAGRAM = 'https://www.instagram.com/ps.graphiq/';
