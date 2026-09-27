import { links, profile, projects, experience } from './projects';

/**
 * Public address of the site — drives canonical URLs, social previews, structured data and the sitemap.
 * Set NEXT_PUBLIC_SITE_URL (e.g. https://psgraphique.com) in Vercel once a custom domain is live;
 * until then the Vercel production URL is used automatically.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')
).replace(/\/$/, '');

/** Structured data so search engines understand who Priyanka is and what the work is. */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    description: profile.summary,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    image: `${SITE_URL}/images/priyanka.webp`,
    address: { '@type': 'PostalAddress', addressLocality: 'Gurgaon', addressCountry: 'IN' },
    worksFor: { '@type': 'Organization', name: experience[0].company },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Institute of Management Technology, Ghaziabad' },
      { '@type': 'EducationalOrganization', name: 'Meera Bai Institute of Technology, Delhi' },
    ],
    knowsAbout: ['Brand identity', 'Brand systems', 'Campaign design', 'Motion design', 'Packaging design', 'Art direction', 'Adobe Creative Suite', 'Figma'],
    sameAs: [links.linkedin, links.behance, links.instagram],
  };
}

export function workJsonLd(slug: string) {
  const p = projects.find((x) => x.slug === slug);
  if (!p) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: p.name,
    headline: p.headline,
    description: p.description,
    genre: p.category,
    image: `${SITE_URL}/images/${p.image}`,
    url: `${SITE_URL}/work/${p.slug}`,
    creator: { '@type': 'Person', name: profile.name, url: SITE_URL },
  };
}
