import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';
import { DEFAULT_LOCALE, FAVICON_ICONS, FAVICON_PNG_PATH } from '@/lib/site-config';
import './globals.scss';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Moving Company',
    default: 'Professional Moving Services',
  },
  description: 'Professional moving and transportation services',
  keywords: 'moving, transportation, relocation',
  robots: 'index, follow',
  icons: FAVICON_ICONS,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={DEFAULT_LOCALE}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={FAVICON_PNG_PATH} type="image/png" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
