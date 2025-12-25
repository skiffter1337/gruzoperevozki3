import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Locale } from '../../../i18n-config';
import Header from '@/components/layout/Header';
import { getDictionary } from '@/lib/dictionaries';
import { buildLanguageAlternates, buildLocalizedPath } from '@/lib/localized-paths';
import { SITE_URL } from '@/lib/site-config';
import { notFound } from 'next/navigation';
import LocaleDirection from '@/components/LocaleDirection';
import Footer from '@/components/layout/Footer';

const locales: Locale[] = ['he', 'ru', 'en'];

const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
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

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);
  const direction = locale === 'he' ? 'rtl' : 'ltr';

  return (
    <div dir={direction} lang={locale} className={direction === 'rtl' ? 'rtl' : undefined}>
      <LocaleDirection dir={direction} lang={locale} />
      <Header
        locale={locale}
        dictionary={{
          popups: dictionary.header.popups,
          nav: dictionary.header.nav,
          languageSwitcher: dictionary.header.languageSwitcher,
          company: dictionary.company,
        }}
      />
      <main className="min-h-screen">{children}</main>
      <Footer
        locale={locale}
        dictionary={dictionary.footer}
        company={dictionary.company}
      />
    </div>
  );
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
