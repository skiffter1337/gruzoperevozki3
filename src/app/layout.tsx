import type { Metadata } from 'next';
import { DEFAULT_LOCALE } from '@/lib/site-config';
import './globals.scss';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s | Moving Company',
    default: 'Professional Moving Services',
  },
  description: 'Professional moving and transportation services',
  keywords: 'moving, transportation, relocation',
  robots: 'index, follow',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={DEFAULT_LOCALE}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
