import type { MetadataRoute } from 'next';
import { DEFAULT_LOCALE, SITE_URL, SUPPORTED_LOCALES } from '@/lib/site-config';
import {
  buildAbsoluteUrl,
  buildLanguageAlternates,
  buildLocalizedPath,
  RouteKey,
} from '@/lib/localized-paths';
import heDictionary from '@/lib/dictionaries/he.json';
import ruDictionary from '@/lib/dictionaries/ru.json';
import enDictionary from '@/lib/dictionaries/en.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: RouteKey[] = ['home', 'calculate', 'leaveReview'];
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [];
  const smallMoveSlugsByLocale = {
    he: heDictionary.smallMovePage?.slug ?? 'הובלות_קטנות',
    ru: ruDictionary.smallMovePage?.slug ?? 'маленький-переезд',
    en: enDictionary.smallMovePage?.slug ?? 'small-move',
  };
  const priceListSlugsByLocale = {
    he: heDictionary.priceListPage?.slug ?? '',
    ru: ruDictionary.priceListPage?.slug ?? 'прайс-лист-на-перевозки',
    en: enDictionary.priceListPage?.slug ?? '',
  };
  const apartmentMoveSlugsByLocale = {
    he: heDictionary.apartmentMovePage?.slug ?? 'הובלות_דירה',
    ru: ruDictionary.apartmentMovePage?.slug ?? 'квартирные',
    en: enDictionary.apartmentMovePage?.slug ?? 'apartments',
  };
  const pianoMoveSlugsByLocale = {
    he: heDictionary.pianoMovePage?.slug ?? 'הובלת-פסנתר',
    ru: ruDictionary.pianoMovePage?.slug ?? 'perevozka-pianino',
    en: enDictionary.pianoMovePage?.slug ?? 'piano-moving',
  };
  const officeMoveSlugsByLocale = {
    he: heDictionary.officeMovePage?.slug ?? 'הובלות_משרדים',
    ru: ruDictionary.officeMovePage?.slug ?? 'офисные',
    en: enDictionary.officeMovePage?.slug ?? 'offices',
  };
  const houseMoveSlugsByLocale = {
    he: heDictionary.houseMovePage?.slug ?? 'בית-פרטי',
    ru: ruDictionary.houseMovePage?.slug ?? 'переезд-частного-дома',
    en: enDictionary.houseMovePage?.slug ?? 'private-house',
  };
  const packingSlugsByLocale = {
    he: heDictionary.packingPage?.slug ?? 'שירותי-אריזה',
    ru: ruDictionary.packingPage?.slug ?? 'услуги-упаковки',
    en: enDictionary.packingPage?.slug ?? 'packing-services',
  };
  const storageSlugsByLocale = {
    he: heDictionary.storagePage?.slug ?? 'אחסון_תכולת_דירה',
    ru: ruDictionary.storagePage?.slug ?? 'хранение-имущества-квартиры',
    en: enDictionary.storagePage?.slug ?? 'apartment-storage',
  };
  const telAvivMoveSlugsByLocale = {
    he: heDictionary.telAvivMovePage?.slug ?? 'הובלות-בתל-אביב',
    ru: ruDictionary.telAvivMovePage?.slug ?? 'перевозки-в-тель-авиве',
    en: enDictionary.telAvivMovePage?.slug ?? 'transportation-in-tel-aviv',
  };

  routes.forEach((route) => {
    SUPPORTED_LOCALES.forEach((locale) => {
      entries.push({
        url: buildAbsoluteUrl(locale, route),
        lastModified,
        alternates: {
          languages: buildLanguageAlternates(route),
        },
      });
    });
  });

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = smallMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'transportation')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = smallMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'transportation')}/${supportedSlug}`;
    });

    const defaultSlug = smallMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'transportation')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = priceListSlugsByLocale[locale];
    if (!slug) return;
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'transportation')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = priceListSlugsByLocale[supportedLocale];
      if (supportedSlug) {
        languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'transportation')}/${supportedSlug}`;
      }
    });

    const defaultSlug = priceListSlugsByLocale[DEFAULT_LOCALE];
    if (defaultSlug) {
      languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'transportation')}/${defaultSlug}`;
    }

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = apartmentMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'transportation')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = apartmentMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'transportation')}/${supportedSlug}`;
    });

    const defaultSlug = apartmentMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'transportation')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = houseMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'transportation')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = houseMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'transportation')}/${supportedSlug}`;
    });

    const defaultSlug = houseMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'transportation')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = pianoMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'transportation')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = pianoMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'transportation')}/${supportedSlug}`;
    });

    const defaultSlug = pianoMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'transportation')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = officeMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'transportation')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = officeMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'transportation')}/${supportedSlug}`;
    });

    const defaultSlug = officeMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'transportation')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = packingSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'services')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = packingSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'services')}/${supportedSlug}`;
    });

    const defaultSlug = packingSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'services')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = storageSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'services')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = storageSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'services')}/${supportedSlug}`;
    });

    const defaultSlug = storageSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'services')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = telAvivMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = telAvivMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = telAvivMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });

  return entries;
}
