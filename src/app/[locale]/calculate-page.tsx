import { Metadata } from 'next';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '@/lib/dictionaries';
import { buildLanguageAlternates, buildLocalizedPath } from '@/lib/localized-paths';
import { SITE_URL } from '@/lib/site-config';
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
  const hasValues = Boolean(from || to || date);

  return (
    <section className={styles.section} aria-labelledby="calculate-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 id="calculate-title" className={styles.title}>
            {dictionary.calculatePage.title}
          </h1>
          <p className={styles.description}>{dictionary.calculatePage.description}</p>
        </header>

        <div className={styles.card}>
          <p className={styles.placeholder}>{dictionary.calculatePage.placeholderNotice}</p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.title} style={{ fontSize: '22px' }}>
            {dictionary.calculatePage.receivedDataTitle}
          </h2>
          {hasValues ? (
            <dl className={styles.dataGrid}>
              <div className={styles.dataItem}>
                <dt className={styles.label}>{dictionary.homeHero.fromLabel}</dt>
                <dd className={styles.value}>{from || '—'}</dd>
              </div>
              <div className={styles.dataItem}>
                <dt className={styles.label}>{dictionary.homeHero.toLabel}</dt>
                <dd className={styles.value}>{to || '—'}</dd>
              </div>
              <div className={styles.dataItem}>
                <dd className={styles.value}>{date || '—'}</dd>
              </div>
            </dl>
          ) : (
            <p className={styles.placeholder}>{dictionary.calculatePage.missingData}</p>
          )}
        </div>
      </div>
    </section>
  );
}
