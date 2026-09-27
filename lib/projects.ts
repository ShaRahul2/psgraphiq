export type Category = 'Identity' | 'Campaign' | 'Packaging' | 'Product' | 'Pitch';

export type Project = {
  slug: string;
  name: string;
  tag: string;
  cats: Category[];
  category: string;
  image: string;
  /** 'square' artwork is cropped to fill; 'board' presentation boards (3:2) are shown whole. */
  format: 'square' | 'board';
  color: string;
  alt: string;
  headline: string;
  description: string;
  /** Extra paragraphs for the project page. */
  body: string[];
  facts: [string, string][];
  /** Honest note about what the image is (shown on the project page). */
  note?: string;
  hasCaseStudy: boolean;
  /** Horizontal focal point for square grid tiles, e.g. '30%' (boards are wider than tiles). */
  focus?: string;
  /** Pixel size of the full image — used for detail crops. */
  size: [number, number];
  /** Close-up regions of the full image shown as "In detail" on the project page: [x, y, w, h] in image pixels. */
  crops?: { label: string; box: [number, number, number, number] }[];
  /** Optional short muted loop (MP4 in /public/video) — plays on the grid tile when in view. */
  video?: string;
};

/** Small (760px) variant used in the grid. */
export const thumb = (image: string) => image.replace(/\.webp$/, '-sm.webp');

/* Order = order on the site. Index numbers are derived from position. */
export const projects: Project[] = [
  {
    slug: 'meloni',
    name: 'Meloni Kiss',
    tag: 'Identity · Packaging',
    cats: ['Identity', 'Packaging'],
    category: 'Brand identity · Packaging',
    image: 'meloni-pack.webp',
    size: [1080, 1080],
    format: 'square',
    color: '#c8d245',
    alt: 'Meloni Kiss watermelon wine packaging',
    headline: 'An unexpected fruit. An identity of its own.',
    description:
      'Meloni Kiss is a self-initiated identity for a watermelon wine. The challenge: make an unusual flavour feel credible as wine without losing the fun that makes it interesting.',
    body: [],
    facts: [
      ['Project', 'Self-initiated concept'],
      ['Scope', 'Identity, illustration & packaging'],
      ['Idea', 'Sophistication meets play'],
    ],
    hasCaseStudy: true,
  },
  {
    slug: 'gen-nex-india',
    name: 'Gen-Nex India',
    tag: 'Identity · From scratch',
    cats: ['Identity'],
    category: 'Brand identity · Built from a blank page',
    image: 'board-gennex.webp',
    size: [1168, 709],
    focus: '50%',
    crops: [
      { label: 'Logo lockup', box: [330, 20, 520, 200] },
      { label: 'The N-mark', box: [880, 30, 270, 270] },
      { label: 'Business cards', box: [10, 470, 460, 237] },
      { label: 'Letterhead', box: [480, 320, 350, 387] },
      { label: 'Woven fabric tag', box: [860, 330, 290, 377] },
    ],
    format: 'board',
    color: '#efe9df',
    alt: 'Gen-Nex India identity board: N-mark, logo lockup, palette of ink, burnt saffron and brushed brass, business cards, letterhead and fabric tag',
    headline: 'A system that works on a letterhead and a website.',
    description:
      'A next-generation Indian enterprise needed an identity that could sit on a letterhead and a site without looking like a template.',
    body: [
      'The work started with a geometric N-mark and a short palette — ink, burnt saffron, brushed brass — then moved into lockups, cards and guidelines the team could actually use.',
      'Built end to end at Make My Business Online, where it came with a promotion to senior designer: mark, visual system and guidelines, rolled out across digital and print.',
    ],
    facts: [
      ['Role', 'Brand identity, from a blank page'],
      ['Context', 'Make My Business Online'],
      ['Shipped', 'Mark, visual system, guidelines, digital + print rollout'],
    ],
    note: 'This board reconstructs the identity language for the portfolio. Original files live with the client.',
    hasCaseStudy: false,
  },
  {
    slug: 'residential-systems',
    name: 'Residential systems',
    tag: 'Brand systems · Real estate',
    cats: ['Identity'],
    category: 'Brand systems · Multi-family real estate',
    image: 'board-rowan.webp',
    size: [1168, 709],
    focus: '8%',
    crops: [
      { label: 'Wordmark & positioning', box: [0, 20, 420, 400] },
      { label: 'Resident brochure', box: [440, 0, 710, 440] },
      { label: 'Palette & materials', box: [0, 450, 400, 257] },
      { label: 'Resident keycard', box: [800, 450, 350, 250] },
    ],
    format: 'board',
    color: '#efeae2',
    alt: 'Rowan House presentation board: serif wordmark, resident brochure, warm oak, limestone and sage material palette, architectural photography and a resident keycard',
    headline: 'One visual language that still feels local.',
    description:
      'Multi-family work fails when every building looks like a different company. The job is one system that still feels local to each property.',
    body: [
      'Materials, type, resident touchpoints and marketing that leasing teams can run without a designer in the room.',
      'At Greystar, Priyanka owns branding and visual identity across a multi-family property portfolio — discovery, creative direction and full rollout — presenting to senior stakeholders and running design-thinking workshops so marketing, brand and operations ship from the same standards.',
    ],
    facts: [
      ['Role', 'Brand systems and rollout'],
      ['Context', 'Greystar · remote'],
      ['Shipped', 'Property identity and marketing system, digital + print'],
    ],
    note: 'Rowan House is a presentation system made for this portfolio to show the craft of property branding. It is not an official Greystar property identity.',
    hasCaseStudy: false,
  },
  {
    slug: 'home-care-campaigns',
    name: 'Home-care campaigns',
    tag: 'FMCG · Campaign',
    cats: ['Campaign'],
    category: 'Campaign · Email, digital & social motion',
    image: 'board-lumina.webp',
    size: [1168, 709],
    focus: '28%',
    crops: [
      { label: 'Pack', box: [0, 0, 380, 707] },
      { label: 'Social story', box: [370, 90, 260, 540] },
      { label: 'Web banner', box: [640, 110, 470, 420] },
    ],
    format: 'board',
    color: '#eef1ec',
    alt: 'Lumina Fresh campaign board: laundry bottle, social story and web banner with limes and water splash',
    headline: 'Clear a shelf and a feed in the same week.',
    description:
      'FMCG design has to work in-store and on a phone at the same time. The Reckitt work was email and digital systems plus motion for social.',
    body: [
      'At Inside Ideas Group, Priyanka designed email and digital campaign systems for three Reckitt brands — Vanish, Harpic and Mortein — and built animated frames and social motion as part of integrated international campaign deliveries.',
    ],
    facts: [
      ['Role', 'Email, digital, social motion'],
      ['Context', 'Inside Ideas Group · Vanish, Harpic, Mortein (Reckitt)'],
      ['Shipped', 'Campaign systems and animated frames for international calendars'],
    ],
    note: 'Lumina Fresh is an original campaign board that shows the same craft. It is not a Reckitt product.',
    hasCaseStudy: false,
  },
  {
    slug: 'theatre-of-ambition',
    name: 'Theatre of Ambition',
    tag: 'Global campaign · Media',
    cats: ['Campaign'],
    category: 'Campaign concept · Global media',
    image: 'board-ambition.webp',
    size: [1168, 709],
    focus: '30%',
    crops: [
      { label: 'Outdoor', box: [20, 70, 640, 440] },
      { label: 'Magazine spread', box: [650, 60, 500, 380] },
      { label: 'Mobile', box: [760, 370, 300, 337] },
    ],
    format: 'board',
    color: '#141210',
    alt: 'Theatre of Ambition campaign board: “Ambition deserves a stage” on a billboard, a magazine spread and a phone screen, lit by a spotlight',
    headline: 'One idea. Three formats. No loss in translation.',
    description:
      'Media work is a conversation with strategy and account, not a moodboard in a vacuum. Concepts have to hold in a room, then survive outdoor, magazine and mobile.',
    body: [
      'At Omnicom Media Group, Priyanka develops campaign concepts across several live international accounts at once, working with strategy, account and production so creative follows brand strategy and commercial goals — then produces print, digital and multimedia assets while holding brand standards across overlapping timelines.',
    ],
    facts: [
      ['Role', 'Campaign concepts, multi-channel assets'],
      ['Context', 'Omnicom Media Group · hybrid · global accounts'],
      ['Shipped', 'Concepts presented to stakeholders, produced for print, digital, multimedia'],
    ],
    note: 'This campaign board is a studio piece in the register of that work — typography-led, one idea, three formats.',
    hasCaseStudy: false,
  },
  {
    slug: 'the-next-chapter',
    name: 'The next chapter',
    tag: 'Pitch · Motion frames',
    cats: ['Pitch'],
    category: 'Pitch decks · Templates · Motion frames',
    image: 'board-pitch.webp',
    size: [1168, 709],
    focus: '18%',
    crops: [
      { label: 'Pitch deck', box: [50, 120, 670, 480] },
      { label: 'Leave-behind', box: [580, 170, 470, 400] },
      { label: 'GIF storyboard', box: [370, 470, 630, 237] },
    ],
    format: 'board',
    color: '#e9ded2',
    alt: 'Agency pitch deck “The next chapter” on a laptop, a printed leave-behind and a four-frame GIF storyboard',
    headline: 'Persuasion under time pressure.',
    description:
      'New-business design means decks a room can follow, templates other people can reuse, and short motion that carries a story without a voiceover.',
    body: [
      'At Interactive Bees, Priyanka led new-client branding from concept through rollout, and made the digital ads, GIFs, print, pitch decks and presentation templates used for pitches and live accounts.',
    ],
    facts: [
      ['Role', 'Pitch decks, templates, motion frames'],
      ['Context', 'Interactive Bees · new business + live accounts'],
      ['Shipped', 'Decks, GIFs, infographics, presentation systems'],
    ],
    hasCaseStudy: false,
  },
  {
    slug: 'olio',
    name: 'OLIO',
    tag: 'Identity · Characters',
    cats: ['Identity'],
    category: 'Identity · Character design',
    image: 'olio.webp',
    size: [1500, 1500],
    format: 'square',
    color: '#f1ece0',
    alt: 'OLIO orange wordmark with two expressive black-and-white characters',
    headline: 'An identity with a personality.',
    description:
      'A warm orange wordmark and a pair of expressive black-and-white characters. Simple shapes give the identity a playful, recognisable voice.',
    body: ['The characters carry the same rounded energy as the wordmark. A restrained palette lets their expressions do the talking.'],
    facts: [
      ['Colour', 'Orange, black & white'],
      ['Language', 'Bold, rounded forms'],
      ['Character', 'Playful & expressive'],
    ],
    hasCaseStudy: false,
  },
  {
    slug: 'recode',
    name: 'Recode',
    tag: 'Beauty · Product',
    cats: ['Product'],
    category: 'Beauty · Product visuals',
    image: 'recode.webp',
    size: [1500, 1500],
    format: 'square',
    color: '#bac9e7',
    alt: 'Recode orange beauty product on a cool blue foam backdrop',
    headline: 'A fresh perspective on beauty.',
    description:
      'Vivid orange packaging, deep green details and a cool, foam-textured backdrop. A product visual built around contrast.',
    body: ['The cool blue setting gives the orange label room to stand out. Foam, water and light make the product the focal point.'],
    facts: [
      ['Colour', 'Orange & botanical green'],
      ['Texture', 'Soft foam, sharp details'],
      ['Focus', 'The product, front and centre'],
    ],
    hasCaseStudy: false,
  },
  {
    slug: 'wilddoor',
    name: 'Wilddoor',
    tag: 'Packaging',
    cats: ['Packaging'],
    category: 'Packaging · Visual identity',
    image: 'wilddoor.webp',
    size: [1500, 1500],
    format: 'square',
    color: '#d7d8b5',
    alt: 'Wilddoor illustrated green packaging among natural textures',
    headline: 'A little closer to the wild.',
    description:
      'Botanical greens and an illustrated label meet warm light and natural textures. Packaging with an easy, outdoorsy character.',
    body: ['An illustrated green pack feels at home among natural materials. The composition brings colour and texture together without competing with the label.'],
    facts: [
      ['Colour', 'Fresh botanical greens'],
      ['Character', 'Illustrated & expressive'],
      ['Setting', 'Natural light & texture'],
    ],
    hasCaseStudy: false,
  },
];

export const projectIndex = (p: Project) => String(projects.indexOf(p) + 1).padStart(2, '0');
export const projectTotal = String(projects.length).padStart(2, '0');

/* ---------- Profile (from Priyanka's resume) ---------- */

export const profile = {
  name: 'Priyanka Sharma',
  role: 'Senior Graphic Designer',
  focus: 'Brand systems, campaign design, motion',
  location: 'Gurgaon, India',
  availability: 'Open to relocation, remote and hybrid international roles',
  email: 'priyankaits.94@gmail.com',
  phone: '+91 88024 32335',
  summary:
    'Senior Graphic Designer who owns brand systems and campaigns from first brief to live rollout. 12+ years across agency, global media and remote in-house teams.',
};

export const links = {
  instagram: 'https://www.instagram.com/ps.graphiq/',
  instagramHandle: '@ps.graphiq',
  behance: 'https://www.behance.net/priyankaits_94',
  linkedin: 'https://www.linkedin.com/in/priyanka-sharma-97152213b',
};
/** Kept for older imports. */
export const INSTAGRAM = links.instagram;

export const stats = [
  { value: 12, suffix: '+', label: 'Years of design practice, 2013–now' },
  { value: 6, suffix: '', label: 'Companies — agency, media, in-house' },
  { value: 3, suffix: '', label: 'Sectors — real estate, media, FMCG' },
];

export const namedWork = ['Greystar', 'Omnicom Media Group', 'Reckitt', 'Vanish', 'Harpic', 'Mortein', 'Gen-Nex India'];

export const experience = [
  {
    role: 'Senior Designer',
    company: 'Greystar',
    when: 'Present',
    meta: 'Remote · Multi-family real estate',
    points: [
      'Owns branding and visual identity across a multi-family property portfolio — discovery, creative direction and full rollout.',
      'Presents direction to senior stakeholders and turns leasing and brand goals into one visual system for digital and print.',
      'Runs design-thinking workshops so marketing, brand and operations ship from the same standards.',
    ],
  },
  {
    role: 'Senior Designer',
    company: 'Omnicom Media Group',
    when: '',
    meta: 'Hybrid · Global media & advertising',
    points: [
      'Campaign concepts for advertising, branding and marketing across several live international accounts at once.',
      'Works with strategy, account and production so creative follows brand strategy and commercial goals.',
      'Produces print, digital and multimedia assets while holding brand standards across overlapping timelines.',
    ],
  },
  {
    role: 'Senior Designer',
    company: 'Inside Ideas Group',
    when: '',
    meta: 'Agency · FMCG · Vanish, Harpic, Mortein (Reckitt)',
    points: [
      'Designed email and digital campaign systems for three Reckitt brands.',
      'Built animated frames and social motion for integrated international campaigns.',
    ],
  },
  {
    role: 'Senior Designer',
    company: 'Interactive Bees',
    when: '',
    meta: 'Agency · New-business branding & digital',
    points: [
      'Led new-client branding from concept through rollout — identity systems, not one-off assets.',
      'Digital ads, GIFs, print, pitch decks and presentation templates for pitches and live accounts.',
    ],
  },
  {
    role: 'Senior Graphic Designer',
    company: 'Make My Business Online',
    when: '',
    meta: 'Agency · Promoted for independent multi-project ownership',
    points: [
      'Built the Gen-Nex India brand from a blank page: mark, visual system and guidelines, rolled out across digital and print.',
      'Ads, GIFs and print creative across concurrent accounts after promotion to senior.',
    ],
  },
  {
    role: 'Graphic Designer',
    company: 'Xelium Technologies',
    when: '',
    meta: 'Product & marketing design',
    points: ['UI assets, icons and web graphics for product and marketing teams on concurrent projects.'],
  },
];

export const toolGroups = [
  { title: 'Adobe', items: ['Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Premiere Pro'] },
  { title: 'Design', items: ['Figma', 'Canva'] },
  { title: 'AI exploration', items: ['Firefly', 'Midjourney', 'Generative Fill / Expand', 'Higgsfield', 'Kling', 'ChatGPT', 'Claude', 'Grok'] },
];

export const education = [
  { title: 'MBA / PGDM — Operations Management', place: 'Institute of Management Technology (IMT), Ghaziabad', year: '2019' },
  { title: 'Diploma in Commercial Arts', place: 'Meera Bai Institute of Technology, Delhi', year: '2013' },
];

export const languages = [
  ['English', 'Fluent'],
  ['Hindi', 'Native'],
];

export const services = [
  { title: 'Brand identity systems', body: 'Logo systems and brand marks, guidelines, typography and colour — a whole system, not one-off assets.', icon: 'M12 3l2.6 5.6L20 9.5l-4 4 1 5.5-5-2.7-5 2.7 1-5.5-4-4 5.4-.9z' },
  { title: 'Campaign design', body: 'Print, digital and social ads, emailers and toolkits that carry one idea across every channel.', icon: 'M3 11v2a1 1 0 0 0 1 1h3l6 5V5L7 10H4a1 1 0 0 0-1 1zM17 8a5 5 0 0 1 0 8' },
  { title: 'Motion & social', body: 'Animated frames, GIFs and video frames that tell a story in a few seconds — no voiceover needed.', icon: 'M4 5h16v14H4zM10 9l5 3-5 3z' },
  { title: 'Packaging & illustration', body: 'Labels, packs and illustrated worlds that earn shelf space: structure for credibility, character for personality.', icon: 'M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10' },
  { title: 'Pitch decks & presentations', body: 'Decks, keynotes, templates and infographics a room can follow — and other people can reuse.', icon: 'M3 4h18v12H3zM8 20h8M12 16v4' },
  { title: 'Workshops & AI exploration', body: 'Design-thinking workshops that align teams, and AI tools for faster exploration — finished by hand in Adobe and Figma.', icon: 'M5 3v4M3 5h4M6 17v4M4 19h4M13 3l2.3 5.7L21 11l-5.7 2.3L13 19l-2.3-5.7L5 11l5.7-2.3z' },
];

export const steps = [
  { title: 'Listen', body: 'What are we really trying to say? Unpack the brief, the business problem and the messy beginning.' },
  { title: 'Align', body: 'Workshops so brand, marketing and operations agree on the standard before assets multiply.' },
  { title: 'Shape', body: 'Explore fast — sketches and AI tools — then build the visual language by hand: type, colour, character.' },
  { title: 'Roll out', body: 'A system that survives real channels: guidelines, templates and assets across print, digital and motion.' },
];
