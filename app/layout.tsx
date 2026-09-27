import type { Metadata, Viewport } from 'next';
import SiteHeader from '../components/site-header';
import SiteFooter from '../components/site-footer';
import { Effects } from '../components/effects';
import { SITE_URL, personJsonLd } from '../lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  title: { default: 'PS Graphiq — Priyanka Sharma, Senior Graphic Designer', template: '%s — PS Graphiq' },
  description:
    'Priyanka Sharma, Senior Graphic Designer in Gurgaon — brand systems, campaign design and motion. 12+ years across Greystar, Omnicom Media Group and Reckitt brands. Open to relocation.',
  keywords: ['Priyanka Sharma', 'senior graphic designer', 'brand identity designer Gurgaon', 'brand systems', 'campaign design', 'motion design', 'packaging design', 'PS Graphiq', 'PS Graphique'],
  authors: [{ name: 'Priyanka Sharma' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'PS Graphiq',
    title: 'Priyanka Sharma — Senior Graphic Designer',
    description: 'Brand systems, campaigns and motion for real estate, global media and FMCG. 12+ years. Gurgaon, open to relocation.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'PS Graphiq — Priyanka Sharma, Senior Graphic Designer' }],
    locale: 'en_IN',
  },
  twitter: { card: 'summary_large_image', title: 'Priyanka Sharma — Senior Graphic Designer', images: ['/images/og-default.jpg'] },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#07080b' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-js" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/syne-latin-800-normal.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/manrope-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }} />
      </head>
      <body id="top">
        <Effects />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
