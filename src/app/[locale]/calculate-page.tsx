import { Metadata } from 'next';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '@/lib/dictionaries';
import { buildLanguageAlternates, buildLocalizedPath } from '@/lib/localized-paths';
import { SITE_URL } from '@/lib/site-config';
import CalculatorPageClient from '@/components/calculate/CalculatorPageClient';
import styles from './calculate.module.scss';

export type CalculatePageProps = {
  params: Promise<{ locale: Locale }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export async function createCalculateMetadata({ params }: CalculatePageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const { metaTitle, metaDescription } = dictionary.calculatePage;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: dictionary.metadata.keywords,
    alternates: {
      canonical: `${SITE_URL}${buildLocalizedPath(locale, 'calculate')}`,
      languages: buildLanguageAlternates('calculate'),
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${SITE_URL}${buildLocalizedPath(locale, 'calculate')}`,
      locale,
    },
  };
}

export default async function CalculatePage({ params, searchParams }: CalculatePageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const resolvedSearchParams = (await searchParams) ?? {};

  const extractValue = (key: string) => {
    const value = resolvedSearchParams[key];
    if (Array.isArray(value)) return value[0];
    return value ?? '';
  };

  const from = extractValue('from');
  const to = extractValue('to');
  const date = extractValue('date');
  return (
    <section className={styles.page} aria-labelledby="calculate-title">
      <div className={styles.container}>
        <CalculatorPageClient
          locale={locale}
          dictionary={dictionary.calculatePage}
          heroDictionary={dictionary.homeHero}
          homeLabel={dictionary.header.nav.home}
          initialValues={{ from, to, date }}
        />
      </div>
    </section>
  );
}
