import type { Metadata, Viewport } from 'next';
import SiteHeader from '../components/site-header';
import SiteFooter from '../components/site-footer';
import { Effects } from '../components/effects';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')),
  icons: { icon: '/favicon.svg' },
  title: { default: 'PS Graphiq — Priyanka Sharma, Senior Graphic Designer', template: '%s — PS Graphiq' },
  description:
    'Priyanka Sharma, Senior Graphic Designer in Gurgaon — brand systems, campaign design and motion. 12+ years across Greystar, Omnicom Media Group and Reckitt brands. Open to relocation.',
  openGraph: {
    title: 'PS Graphiq — Design with intent',
    description: 'Brand identities, packaging and campaigns by Priyanka Sharma.',
    images: [{ url: '/images/meloni-pack.webp', alt: 'Meloni Kiss packaging by Priyanka Sharma' }],
    type: 'website',
    siteName: 'PS Graphiq',
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#07080b' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-js" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/syne-latin-800-normal.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/manrope-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="" />
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
