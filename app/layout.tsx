import type { Metadata, Viewport } from 'next';
import SiteHeader from '../components/site-header';
import SiteFooter from '../components/site-footer';
import { Effects, Preloader } from '../components/effects';
import './globals.css';

export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: { default: 'PS Graphiq — Priyanka Sharma, Brand & Visual Designer', template: '%s — PS Graphiq' },
  description:
    'Ideas that still work once they leave the mood board. Brand identities, packaging, campaigns and visual design by Priyanka Sharma — 12+ years of design with intent.',
  openGraph: {
    title: 'PS Graphiq — Design with intent',
    description: 'Brand identities, packaging and campaigns by Priyanka Sharma.',
    images: ['/images/meloni-pack.webp'],
  },
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
        <Preloader />
        <Effects />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
