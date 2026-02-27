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
  const routes: RouteKey[] = ['home', 'calculate', 'contact', 'leaveReview'];
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
    ru: ruDictionary.pianoMovePage?.slug ?? 'перевозка-пианино',
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
  const holonMoveSlugsByLocale = {
    he: heDictionary.holonMovePage?.slug ?? 'הובלות-בחולון',
    ru: ruDictionary.holonMovePage?.slug ?? 'перевозки-в-холоне',
    en: enDictionary.holonMovePage?.slug ?? 'transportation-in-holon',
  };
  const givataimMoveSlugsByLocale = {
    he: heDictionary.givataimMovePage?.slug ?? "הובלות-בגבעתיים",
    ru: ruDictionary.givataimMovePage?.slug ?? "перевозки-в-гиватаиме",
    en: enDictionary.givataimMovePage?.slug ?? "transportation-in-givataim",
  };
  const haifaMoveSlugsByLocale = {
    he: heDictionary.haifaMovePage?.slug ?? "הובלות-בחיפה",
    ru: ruDictionary.haifaMovePage?.slug ?? "перевозки-в-хайфе",
    en: enDictionary.haifaMovePage?.slug ?? "transportation-in-haifa",
  };

  const batYamMoveSlugsByLocale = {
    he: heDictionary.batYamMovePage?.slug ?? "הובלות-בבת-ים",
    ru: ruDictionary.batYamMovePage?.slug ?? "перевозки-в-бат-яме",
    en: enDictionary.batYamMovePage?.slug ?? "transportation-in-bat-yam",
  };
  const ramatGanMoveSlugsByLocale = {
    he: heDictionary.ramatGanMovePage?.slug ?? "הובלות-ברמת-גן",
    ru: ruDictionary.ramatGanMovePage?.slug ?? "перевозки-в-рамат-гане",
    en: enDictionary.ramatGanMovePage?.slug ?? "transportation-in-ramat-gan",
  };
  const netanyaMoveSlugsByLocale = {
    he: heDictionary.netanyaMovePage?.slug ?? "הובלות-בנתניה",
    ru: ruDictionary.netanyaMovePage?.slug ?? "перевозки-в-нетании",
    en: enDictionary.netanyaMovePage?.slug ?? "transportation-in-netanya",
  };
  const raananaMoveSlugsByLocale = {
    he: heDictionary.raananaMovePage?.slug ?? "הובלות-ברעננה",
    ru: ruDictionary.raananaMovePage?.slug ?? "перевозки-в-раанане",
    en: enDictionary.raananaMovePage?.slug ?? "transportation-in-raanana",
  };
  const herzliyaMoveSlugsByLocale = {
    he: heDictionary.herzliyaMovePage?.slug ?? "הובלות-בהרצליה",
    ru: ruDictionary.herzliyaMovePage?.slug ?? "перевозки-в-герцлии",
    en: enDictionary.herzliyaMovePage?.slug ?? "transportation-in-herzliya",
  };
  const kfarSabaMoveSlugsByLocale = {
    he: heDictionary.kfarSabaMovePage?.slug ?? "הובלות-כפר-סבא",
    ru: ruDictionary.kfarSabaMovePage?.slug ?? "перевозки-в-кфар-сабе",
    en: enDictionary.kfarSabaMovePage?.slug ?? "transportation-in-kfar-saba",
  };
  const hodHaSharonMoveSlugsByLocale = {
    he: heDictionary.hodHaSharonMovePage?.slug ?? "הובלות-בהוד-שרון",
    ru: ruDictionary.hodHaSharonMovePage?.slug ?? "перевозки-в-ход-ха-шароне",
    en: enDictionary.hodHaSharonMovePage?.slug ?? "transportation-in-hod-hasharon",
  };
  const rishonLeZionMoveSlugsByLocale = {
    he: heDictionary.rishonLeZionMovePage?.slug ?? "הובלות-בראשון-לציון",
    ru: ruDictionary.rishonLeZionMovePage?.slug ?? "перевозки-в-ришон-ле-ционе",
    en: enDictionary.rishonLeZionMovePage?.slug ?? "transportation-in-rishon-lezion",
  };
  const lodMoveSlugsByLocale= {
    he: heDictionary.lodMovePage?.slug ?? "הובלות-בלוד",
    ru: ruDictionary.lodMovePage?.slug ?? "перевозки-в-лоде",
    en: enDictionary.lodMovePage?.slug ?? "transportation-in-lod",
  };
  const rehovotMoveSlugsByLocale = {
    he: heDictionary.rehovotMovePage?.slug ?? "הובלות-ברחובות",
    ru: ruDictionary.rehovotMovePage?.slug ?? "перевозки-в-реховоте",
    en: enDictionary.rehovotMovePage?.slug ?? "transportation-in-rehovot",
  };
  const ashdodMoveSlugsByLocale= {
    he: heDictionary.ashdodMovePage?.slug ?? "הובלות-באשדוד",
    ru: ruDictionary.ashdodMovePage?.slug ?? "перевозки-в-ашдоде",
    en: enDictionary.ashdodMovePage?.slug ?? "transportation-in-ashdod",
  };
  const ramlaMoveSlugsByLocale = {
    he: heDictionary.ramlaMovePage?.slug ?? "הובלות-ברמלה",
    ru: ruDictionary.ramlaMovePage?.slug ?? "перевозки-в-рамле",
    en: enDictionary.ramlaMovePage?.slug ?? "transportation-in-ramla",
  };
  const jerusalemMoveSlugsByLocale = {
    he: heDictionary.jerusalemMovePage?.slug ?? "הובלות-בירושלים",
    ru: ruDictionary.jerusalemMovePage?.slug ?? "перевозки-в-иерусалиме",
    en: enDictionary.jerusalemMovePage?.slug ?? "transportation-in-jerusalem",
  };
  const modiinMoveSlugsByLocale = {
    he: heDictionary.modiinMovePage?.slug ?? "הובלות-במודיעין",
    ru: ruDictionary.modiinMovePage?.slug ?? "перевозки-в-моодиине",
    en: enDictionary.modiinMovePage?.slug ?? "transportation-in-modiin"
  };
  const beitShemeshMoveSlugsByLocale = {
    he: heDictionary.beitShemeshMovePage?.slug ?? "הובלות-בבית-שמש",
    ru: ruDictionary.beitShemeshMovePage?.slug ?? "перевозки-в-бейт-шемеше",
    en: enDictionary.beitShemeshMovePage?.slug ?? "transportation-in-beit-shemesh",
  };
  const mevaseretZionMoveSlugsByLocale = {
    he: heDictionary.mevaseretZionMovePage?.slug ?? "הובלות-במבשרת-ציון",
    ru: ruDictionary.mevaseretZionMovePage?.slug ?? "перевозки-в-мевасерет-цион",
    en: enDictionary.mevaseretZionMovePage?.slug ?? "transportation-in-mevaseret-zion",
  };
  const maaleAdumimMoveSlugsByLocale = {
    he: heDictionary.maaleAdumimMovePage?.slug ?? "הובלות-במעלה-אדומים",
    ru: ruDictionary.maaleAdumimMovePage?.slug ?? "перевозки-в-маале-адумим",
    en: enDictionary.maaleAdumimMovePage?.slug ?? "transportation-in-maale-adumim",
  };
  const akkoMoveSlugsByLocale = {
    he: heDictionary.akkoMovePage?.slug ?? "הובלות-בעכו",
    ru: ruDictionary.akkoMovePage?.slug ?? "перевозки-в-акко",
    en: enDictionary.akkoMovePage?.slug ?? "transportation-in-akko",
  };
  const nazarethMoveSlugsByLocale = {
    he: heDictionary.nazarethMovePage?.slug ?? "הובלות-בנצרת",
    ru: ruDictionary.nazarethMovePage?.slug ?? "перевозки-в-назарете",
    en: enDictionary.nazarethMovePage?.slug ?? "transportation-in-nazareth",
  };
  const karmielMoveSlugsByLocale = {
    he: heDictionary.karmielMovePage?.slug ?? "הובלות-בכרמיאל",
    ru: ruDictionary.karmielMovePage?.slug ?? "перевозки-в-кармиэле",
    en: enDictionary.karmielMovePage?.slug ?? "transportation-in-karmiel",
  };
  const tiberiasMoveSlugsByLocale = {
    he: heDictionary.tiberiasMovePage?.slug ?? "הובלות-בטבריה",
    ru: ruDictionary.tiberiasMovePage?.slug ?? "перевозки-в-тверии",
    en: enDictionary.tiberiasMovePage?.slug ?? "transportation-in-tiberias",
  };
  const beerShevaMoveSlugsByLocale = {
    he: heDictionary.beerShevaMovePage?.slug ?? "הובלות-בבאר-שבע",
    ru: ruDictionary.beerShevaMovePage?.slug ?? "перевозки-в-беэр-шеве",
    en: enDictionary.beerShevaMovePage?.slug ?? "transportation-in-beer-sheva",
  };
  const dimonaMoveSlugsByLocale = {
    he: heDictionary.dimonaMovePage?.slug ?? "הובלות-בדימונה",
    ru: ruDictionary.dimonaMovePage?.slug ?? "перевозки-в-димоне",
    en: enDictionary.dimonaMovePage?.slug ?? "transportation-in-dimona",
  };
  const ashkelonMoveSlugsByLocale = {
    he: heDictionary.ashkelonMovePage?.slug ?? "הובלות-באשקלון",
    ru: ruDictionary.ashkelonMovePage?.slug ?? "перевозки-в-ашкелоне",
    en: enDictionary.ashkelonMovePage?.slug ?? "transportation-in-ashkelon",
  };

  const netivotMoveSlugsByLocale = {
    he: heDictionary.netivotMovePage?.slug ?? "הובלות-בנתיבות",
    ru: ruDictionary.netivotMovePage?.slug ?? "перевозки-в-нетивоте",
    en: enDictionary.netivotMovePage?.slug ?? "transportation-in-netivot",
  };

  const eilatMoveSlugsByLocale = {
    he: heDictionary.eilatMovePage?.slug ?? "הובלות-באילת",
    ru: ruDictionary.eilatMovePage?.slug ?? "перевозки-в-эйлате",
    en: enDictionary.eilatMovePage?.slug ?? "transportation-in-eilat",
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

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = holonMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = holonMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = holonMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = givataimMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = givataimMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = givataimMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = batYamMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = batYamMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = batYamMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = ramatGanMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = ramatGanMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = ramatGanMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = netanyaMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = netanyaMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = netanyaMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = raananaMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = raananaMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = raananaMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = herzliyaMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = herzliyaMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = herzliyaMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = kfarSabaMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = kfarSabaMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = kfarSabaMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = hodHaSharonMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = hodHaSharonMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = hodHaSharonMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = rishonLeZionMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = rishonLeZionMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = rishonLeZionMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = lodMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = lodMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = lodMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = rehovotMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = rehovotMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = rehovotMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = ashdodMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = ashdodMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = ashdodMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = ramlaMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = ramlaMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = ramlaMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = jerusalemMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = jerusalemMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = jerusalemMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = modiinMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = modiinMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = modiinMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = beitShemeshMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = beitShemeshMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = beitShemeshMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = mevaseretZionMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = mevaseretZionMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = mevaseretZionMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = maaleAdumimMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = maaleAdumimMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = maaleAdumimMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = akkoMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = akkoMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = akkoMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = nazarethMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = nazarethMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = nazarethMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = karmielMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = karmielMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = karmielMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = tiberiasMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = tiberiasMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = tiberiasMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = beerShevaMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = beerShevaMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = beerShevaMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = dimonaMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = dimonaMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = dimonaMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = ashkelonMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = ashkelonMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = ashkelonMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = netivotMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = netivotMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = netivotMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });

  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = eilatMoveSlugsByLocale[locale];
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = eilatMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
    });

    const defaultSlug = eilatMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;

    entries.push({
      url,
      lastModified,
      alternates: {
        languages,
      },
    });
  });
  SUPPORTED_LOCALES.forEach((locale) => {
    const slug = haifaMoveSlugsByLocale[locale];
    if (!slug) return;
    const url = `${SITE_URL}${buildLocalizedPath(locale, 'home')}/${slug}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = haifaMoveSlugsByLocale[supportedLocale];
      if (supportedSlug) {
        languages[supportedLocale] = `${SITE_URL}${buildLocalizedPath(supportedLocale, 'home')}/${supportedSlug}`;
      }
    });

    const defaultSlug = haifaMoveSlugsByLocale[DEFAULT_LOCALE];
    if (defaultSlug) {
      languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;
    }

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
