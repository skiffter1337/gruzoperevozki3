import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Locale } from '../../../i18n-config';
import Header from '@/components/layout/Header';
import { getDictionary } from '@/lib/dictionaries';
import { buildLanguageAlternates, buildLocalizedPath } from '@/lib/localized-paths';
import { SITE_URL } from '@/lib/site-config';
import { notFound } from 'next/navigation';

const locales: Locale[] = ['he', 'ru', 'en'];

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale);

  return {
    title: {
      template: `%s | ${dictionary.metadata.title}`,
      default: dictionary.metadata.title,
    },
    description: dictionary.metadata.description,
    keywords: dictionary.metadata.keywords,
    alternates: {
      canonical: `${SITE_URL}${buildLocalizedPath(locale, 'home')}`,
      languages: buildLanguageAlternates('home'),
    },
    openGraph: {
      locale,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      url: `${SITE_URL}${buildLocalizedPath(locale, 'home')}`,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <>
      <Header
        locale={locale}
        dictionary={{
          nav: dictionary.header.nav,
          languageSwitcher: dictionary.header.languageSwitcher,
          company: dictionary.company,
        }}
      />
      <main className="min-h-screen">{children}</main>
    </>
  );
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
