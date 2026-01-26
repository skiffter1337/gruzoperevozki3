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
import RegionTransportTableSection from '@/components/regions/RegionTransportTableSection';
import ApartmentMovePage from '@/components/transportation/ApartmentMovePage';
import OfficeMovePage from '@/components/transportation/OfficeMovePage';
import SmallMovePage from '@/components/transportation/SmallMovePage';
import PackingPage from '@/components/services/PackingPage';
import styles from './region.module.scss';

interface Props {
  params: Promise<{ locale: Locale; slug: string[] }>;
}

function decodeSlugSegment(value?: string) {
  if (!value) return value;
  return value.includes('%') ? decodeURIComponent(value) : value;
}

function getRouteFromSlug(locale: Locale, slug?: string[]): RouteKey {
  if (!slug || slug.length === 0) return 'home';
  const matched = resolveRouteKey(locale, decodeSlugSegment(slug[0]) ?? slug[0]);
  return matched || 'home';
}

function formatRegionTemplate(template: string, region: string): string {
  return template.replace('{region}', region);
}

function buildSmallMovePath(locale: Locale, slug: string) {
  return `${buildLocalizedPath(locale, 'transportation')}/${slug}`;
}

function isSmallMoveSlug(slug: string[], smallMoveSlug: string) {
  return slug[0] === smallMoveSlug || slug[1] === smallMoveSlug;
}

function buildApartmentMovePath(locale: Locale, slug: string) {
  return `${buildLocalizedPath(locale, 'transportation')}/${slug}`;
}

function isApartmentMoveSlug(slug: string[], apartmentMoveSlug: string) {
  return slug[0] === apartmentMoveSlug || slug[1] === apartmentMoveSlug;
}

function buildOfficeMovePath(locale: Locale, slug: string) {
  return `${buildLocalizedPath(locale, 'transportation')}/${slug}`;
}

function isOfficeMoveSlug(slug: string[], officeMoveSlug: string) {
  return slug[0] === officeMoveSlug || slug[1] === officeMoveSlug;
}

function buildPackingPath(locale: Locale, slug: string) {
  return `${buildLocalizedPath(locale, 'services')}/${slug}`;
}

function isPackingSlug(slug: string[], packingSlug: string) {
  return slug[0] === packingSlug || slug[1] === packingSlug;
}

async function buildSmallMoveLanguageAlternates() {
  const dictionaries = await getAllDictionaries();
  const languages: Record<string, string> = {};

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = dictionaries[locale].smallMovePage.slug;
    languages[locale] = `${SITE_URL}${buildSmallMovePath(locale, slug)}`;
  });

  const defaultSlug = dictionaries[DEFAULT_LOCALE].smallMovePage.slug;
  languages['x-default'] = `${SITE_URL}${buildSmallMovePath(DEFAULT_LOCALE, defaultSlug)}`;

  return languages;
}

async function buildOfficeMoveLanguageAlternates() {
  const dictionaries = await getAllDictionaries();
  const languages: Record<string, string> = {};

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = dictionaries[locale].officeMovePage.slug;
    languages[locale] = `${SITE_URL}${buildOfficeMovePath(locale, slug)}`;
  });

  const defaultSlug = dictionaries[DEFAULT_LOCALE].officeMovePage.slug;
  languages['x-default'] = `${SITE_URL}${buildOfficeMovePath(DEFAULT_LOCALE, defaultSlug)}`;

  return languages;
}

async function buildApartmentMoveLanguageAlternates() {
  const dictionaries = await getAllDictionaries();
  const languages: Record<string, string> = {};

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = dictionaries[locale].apartmentMovePage.slug;
    languages[locale] = `${SITE_URL}${buildApartmentMovePath(locale, slug)}`;
  });

  const defaultSlug = dictionaries[DEFAULT_LOCALE].apartmentMovePage.slug;
  languages['x-default'] = `${SITE_URL}${buildApartmentMovePath(DEFAULT_LOCALE, defaultSlug)}`;

  return languages;
}

function findRegionIndexBySlug(
  dictionaries: Awaited<ReturnType<typeof getAllDictionaries>>,
  slug: string,
) {
  for (const locale of SUPPORTED_LOCALES) {
    const index = dictionaries[locale].homeRegions.sliderItems.findIndex(
      (item) => item.slug === slug,
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

async function buildPackingLanguageAlternates() {
  const dictionaries = await getAllDictionaries();
  const languages: Record<string, string> = {};

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = dictionaries[locale].packingPage.slug;
    languages[locale] = `${SITE_URL}${buildPackingPath(locale, slug)}`;
  });

  const defaultSlug = dictionaries[DEFAULT_LOCALE].packingPage.slug;
  languages['x-default'] = `${SITE_URL}${buildPackingPath(DEFAULT_LOCALE, defaultSlug)}`;

  return languages;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const dictionary = await getDictionary(locale);
  const decodedSlug = slug?.map((segment) => decodeSlugSegment(segment) ?? segment) ?? [];
  const regionSlug = decodedSlug[0];
  const route = getRouteFromSlug(locale, decodedSlug);

  if (isApartmentMoveSlug(decodedSlug, dictionary.apartmentMovePage.slug)) {
    const canonical = `${SITE_URL}${buildApartmentMovePath(
      locale,
      dictionary.apartmentMovePage.slug,
    )}`;

    return {
      title: dictionary.apartmentMovePage.metaTitle,
      description: dictionary.apartmentMovePage.metaDescription,
      alternates: {
        canonical,
        languages: await buildApartmentMoveLanguageAlternates(),
      },
      openGraph: {
        title: dictionary.apartmentMovePage.metaTitle,
        description: dictionary.apartmentMovePage.metaDescription,
        url: canonical,
        locale,
      },
    };
  }

  if (isSmallMoveSlug(decodedSlug, dictionary.smallMovePage.slug)) {
    const canonical = `${SITE_URL}${buildSmallMovePath(locale, dictionary.smallMovePage.slug)}`;

    return {
      title: dictionary.smallMovePage.metaTitle,
      description: dictionary.smallMovePage.metaDescription,
      alternates: {
        canonical,
        languages: await buildSmallMoveLanguageAlternates(),
      },
      openGraph: {
        title: dictionary.smallMovePage.metaTitle,
        description: dictionary.smallMovePage.metaDescription,
        url: canonical,
        locale,
      },
    };
  }

  if (isOfficeMoveSlug(decodedSlug, dictionary.officeMovePage.slug)) {
    const canonical = `${SITE_URL}${buildOfficeMovePath(locale, dictionary.officeMovePage.slug)}`;

    return {
      title: dictionary.officeMovePage.metaTitle,
      description: dictionary.officeMovePage.metaDescription,
      alternates: {
        canonical,
        languages: await buildOfficeMoveLanguageAlternates(),
      },
      openGraph: {
        title: dictionary.officeMovePage.metaTitle,
        description: dictionary.officeMovePage.metaDescription,
        url: canonical,
        locale,
      },
    };
  }

  if (isPackingSlug(decodedSlug, dictionary.packingPage.slug)) {
    const canonical = `${SITE_URL}${buildPackingPath(locale, dictionary.packingPage.slug)}`;

    return {
      title: dictionary.packingPage.metaTitle,
      description: dictionary.packingPage.metaDescription,
      alternates: {
        canonical,
        languages: await buildPackingLanguageAlternates(),
      },
      openGraph: {
        title: dictionary.packingPage.metaTitle,
        description: dictionary.packingPage.metaDescription,
        url: canonical,
        locale,
      },
    };
  }

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
  const decodedSlug = slug?.map((segment) => decodeSlugSegment(segment) ?? segment) ?? [];
  const regionSlug = decodedSlug[0];
  const route = getRouteFromSlug(locale, decodedSlug);
  if (isApartmentMoveSlug(decodedSlug, dictionary.apartmentMovePage.slug)) {
    return (
      <ApartmentMovePage
        locale={locale}
        dictionary={dictionary.apartmentMovePage}
        calculatorDictionary={dictionary.homeHero}
      />
    );
  }
  if (isSmallMoveSlug(decodedSlug, dictionary.smallMovePage.slug)) {
    return (
      <SmallMovePage
        locale={locale}
        dictionary={dictionary.smallMovePage}
        calculatorDictionary={dictionary.homeHero}
      />
    );
  }
  if (isOfficeMoveSlug(decodedSlug, dictionary.officeMovePage.slug)) {
    return (
      <OfficeMovePage
        locale={locale}
        dictionary={dictionary.officeMovePage}
        calculatorDictionary={dictionary.homeHero}
      />
    );
  }
  if (isPackingSlug(decodedSlug, dictionary.packingPage.slug)) {
    return (
      <PackingPage
        locale={locale}
        dictionary={dictionary.packingPage}
        calculatorDictionary={dictionary.homeHero}
      />
    );
  }
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


  return (
    <>
      <section className={styles.page} aria-labelledby="region-page-title">
        <div className={styles.container}>
          <div className={styles.breadcrumbsWrapper}>
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>
      </section>

      <BookingBanner
        locale={locale}
        dictionary={dictionary.homeHero}
        headingLevel="h2"
        regionTitle={regionItem.title}
      />

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

      <RegionTransportTableSection
        locale={locale}
        regionTitle={regionItem.title}
        regionSlug={regionItem.slug}
        dictionary={dictionary.regionPage.transportTable}
      />
    </>
  );
}
