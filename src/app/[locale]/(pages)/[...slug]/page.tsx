import { Metadata } from 'next';
import { Locale } from '../../../../../i18n-config';
import { getAllDictionaries, getDictionary } from '@/lib/dictionaries';
import {
  buildLanguageAlternates,
  buildLocalizedPath,
  resolveRouteKey,
  RouteKey,
} from '@/lib/localized-paths';
import { DEFAULT_LOCALE, SITE_URL, SUPPORTED_LOCALES } from '@/lib/site-config';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import ArticlesSection from '@/components/home/ArticlesSection';
import BookingBanner from '@/components/home/BookingBanner';
import RegionAdvantagesSection from '@/components/regions/RegionAdvantagesSection';
import RegionCarriersSection from '@/components/regions/RegionCarriersSection';
import styles from './region.module.scss';

interface Props {
  params: Promise<{ locale: Locale; slug: string[] }>;
}

function getRouteFromSlug(locale: Locale, slug?: string[]): RouteKey {
  if (!slug || slug.length === 0) return 'home';
  const matched = resolveRouteKey(locale, slug[0]);
  return matched || 'home';
}

function formatRegionTemplate(template: string, region: string): string {
  return template.replace('{region}', region);
}

function decodeSlug(slug?: string) {
  if (!slug) return undefined;
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

function findRegionIndexBySlug(
  dictionaries: Awaited<ReturnType<typeof getAllDictionaries>>,
  slug: string,
) {
  const resolvedSlug = decodeSlug(slug) ?? slug;
  for (const locale of SUPPORTED_LOCALES) {
    const index = dictionaries[locale].homeRegions.sliderItems.findIndex(
      (item) => item.slug === resolvedSlug,
    );
    if (index >= 0) {
      return index;
    }
  }

  return -1;
}

async function buildRegionLanguageAlternates(regionIndex: number) {
  const dictionaries = await getAllDictionaries();
  const languages: Record<string, string> = {};

  SUPPORTED_LOCALES.forEach((locale) => {
    const regionSlug = dictionaries[locale].homeRegions.sliderItems[regionIndex]?.slug;
    if (!regionSlug) return;
    languages[locale] = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${regionSlug}`;
  });

  const defaultSlug = dictionaries[DEFAULT_LOCALE].homeRegions.sliderItems[regionIndex]?.slug;
  if (defaultSlug) {
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;
  }

  return languages;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const dictionary = await getDictionary(locale);
  const regionSlug = decodeSlug(slug?.[0]);
  let regionIndex = dictionary.homeRegions.sliderItems.findIndex((item) => item.slug === regionSlug);

  if (regionIndex < 0 && regionSlug) {
    const dictionaries = await getAllDictionaries();
    regionIndex = findRegionIndexBySlug(dictionaries, regionSlug);
  }

  if (regionIndex >= 0) {
    const regionItem = dictionary.homeRegions.sliderItems[regionIndex];
    const title = formatRegionTemplate(dictionary.regionPage.metaTitle, regionItem.title);
    const description = formatRegionTemplate(dictionary.regionPage.metaDescription, regionItem.title);
    const canonical = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${regionItem.slug}`;

    return {
      title,
      description,
      keywords: dictionary.metadata.keywords,
      alternates: {
        canonical,
        languages: await buildRegionLanguageAlternates(regionIndex),
      },
      openGraph: {
        title,
        description,
        url: canonical,
        locale,
      },
    };
  }

  const route = getRouteFromSlug(locale, slug);
  const baseTitle = dictionary.metadata.title;

  return {
    title: route === 'home' ? baseTitle : `${baseTitle} — ${dictionary.header.nav[route]}`,
    description: dictionary.metadata.description,
    alternates: {
      canonical: `${SITE_URL}${buildLocalizedPath(locale, route)}`,
      languages: buildLanguageAlternates(route),
    },
  };
}

export default async function RegionPage({ params }: Props) {
  const { locale, slug } = await params;
  const dictionary = await getDictionary(locale);
  const regionSlug = decodeSlug(slug?.[0]);
  let regionItem = dictionary.homeRegions.sliderItems.find((item) => item.slug === regionSlug);

  if (!regionItem && regionSlug) {
    const dictionaries = await getAllDictionaries();
    const regionIndex = findRegionIndexBySlug(dictionaries, regionSlug);
    regionItem = dictionary.homeRegions.sliderItems[regionIndex];
  }

  if (!regionItem) {
    return <div className="sr-only">Content placeholder.</div>;
  }

  const breadcrumbs = [
    {
      label: dictionary.header.nav.home,
      href: buildLocalizedPath(locale, 'home'),
    },
    {
      label: dictionary.regionPage.breadcrumbZones,
      href: `${buildLocalizedPath(locale, 'home')}#regions-section`,
    },
    {
      label: regionItem.title,
      current: true,
    },
  ];

  const orderTitle = formatRegionTemplate(dictionary.regionPage.orderTitle, regionItem.title);

  return (
    <>
      <section className={styles.page} aria-labelledby="region-page-title">
        <div className={styles.headerBar} aria-hidden />
        <div className={styles.container}>
          <div className={styles.breadcrumbsWrapper}>
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <h1 id="region-page-title" className={styles.title}>
            {orderTitle}
          </h1>
        </div>
      </section>

      <BookingBanner locale={locale} dictionary={dictionary.homeHero} headingLevel="h2" />

      <RegionAdvantagesSection
        locale={locale}
        title={dictionary.regionPage.advantagesTitle}
        dictionary={dictionary.homeWhyUs}
        cards={dictionary.homeWhyUs.cards}
      />

      <RegionCarriersSection
        title={dictionary.regionPage.carriersTitle}
        emptyLabel={dictionary.regionPage.noCarriers}
        dictionary={dictionary.homeCarriers}
        region={regionItem.carrierRegion}
      />

      <ArticlesSection locale={locale} dictionary={dictionary.homeArticles} />
    </>
  );
}
