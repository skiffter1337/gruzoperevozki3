import type { MetadataRoute } from 'next';
import { DEFAULT_LOCALE, SITE_URL, SUPPORTED_LOCALES } from '@/lib/site-config';
import {
  buildAbsoluteUrl,
  buildLanguageAlternates,
  buildLocalizedPath,
  joinLocalizedPath,
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
    he: heDictionary.smallMovePage?.slug ?? 'Ч”Ч•Ч‘ЧњЧ•ЧЄ_Ч§ЧЧ Ч•ЧЄ',
    ru: ruDictionary.smallMovePage?.slug ?? 'РјР°Р»РµРЅСЊРєРёР№-РїРµСЂРµРµР·Рґ',
    en: enDictionary.smallMovePage?.slug ?? 'small-move',
  };
  const priceListSlugsByLocale = {
    he: heDictionary.priceListPage?.slug ?? '',
    ru: ruDictionary.priceListPage?.slug ?? 'РїСЂР°Р№СЃ-Р»РёСЃС‚-РЅР°-РїРµСЂРµРІРѕР·РєРё',
    en: enDictionary.priceListPage?.slug ?? '',
  };
  const apartmentMoveSlugsByLocale = {
    he: heDictionary.apartmentMovePage?.slug ?? 'Ч”Ч•Ч‘ЧњЧ•ЧЄ_Ч“Ч™ЧЁЧ”',
    ru: ruDictionary.apartmentMovePage?.slug ?? 'РєРІР°СЂС‚РёСЂРЅС‹Рµ',
    en: enDictionary.apartmentMovePage?.slug ?? 'apartments',
  };
  const pianoMoveSlugsByLocale = {
    he: heDictionary.pianoMovePage?.slug ?? 'Ч”Ч•Ч‘ЧњЧЄ-Ч¤ЧЎЧ ЧЄЧЁ',
    ru: ruDictionary.pianoMovePage?.slug ?? 'РїРµСЂРµРІРѕР·РєР°-РїРёР°РЅРёРЅРѕ',
    en: enDictionary.pianoMovePage?.slug ?? 'piano-moving',
  };
  const officeMoveSlugsByLocale = {
    he: heDictionary.officeMovePage?.slug ?? 'Ч”Ч•Ч‘ЧњЧ•ЧЄ_ЧћЧ©ЧЁЧ“Ч™Чќ',
    ru: ruDictionary.officeMovePage?.slug ?? 'РѕС„РёСЃРЅС‹Рµ',
    en: enDictionary.officeMovePage?.slug ?? 'offices',
  };
  const houseMoveSlugsByLocale = {
    he: heDictionary.houseMovePage?.slug ?? 'Ч‘Ч™ЧЄ-Ч¤ЧЁЧЧ™',
    ru: ruDictionary.houseMovePage?.slug ?? 'РїРµСЂРµРµР·Рґ-С‡Р°СЃС‚РЅРѕРіРѕ-РґРѕРјР°',
    en: enDictionary.houseMovePage?.slug ?? 'private-house',
  };
  const packingSlugsByLocale = {
    he: heDictionary.packingPage?.slug ?? 'Ч©Ч™ЧЁЧ•ЧЄЧ™-ЧђЧЁЧ™Ч–Ч”',
    ru: ruDictionary.packingPage?.slug ?? 'СѓСЃР»СѓРіРё-СѓРїР°РєРѕРІРєРё',
    en: enDictionary.packingPage?.slug ?? 'packing-services',
  };
  const storageSlugsByLocale = {
    he: heDictionary.storagePage?.slug ?? 'ЧђЧ—ЧЎЧ•Чџ_ЧЄЧ›Ч•ЧњЧЄ_Ч“Ч™ЧЁЧ”',
    ru: ruDictionary.storagePage?.slug ?? 'С…СЂР°РЅРµРЅРёРµ-РёРјСѓС‰РµСЃС‚РІР°-РєРІР°СЂС‚РёСЂС‹',
    en: enDictionary.storagePage?.slug ?? 'apartment-storage',
  };
  const telAvivMoveSlugsByLocale = {
    he: heDictionary.telAvivMovePage?.slug ?? 'Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘ЧЄЧњ-ЧђЧ‘Ч™Ч‘',
    ru: ruDictionary.telAvivMovePage?.slug ?? 'РїРµСЂРµРІРѕР·РєРё-РІ-С‚РµР»СЊ-Р°РІРёРІРµ',
    en: enDictionary.telAvivMovePage?.slug ?? 'transportation-in-tel-aviv',
  };
  const holonMoveSlugsByLocale = {
    he: heDictionary.holonMovePage?.slug ?? 'Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘Ч—Ч•ЧњЧ•Чџ',
    ru: ruDictionary.holonMovePage?.slug ?? 'РїРµСЂРµРІРѕР·РєРё-РІ-С…РѕР»РѕРЅРµ',
    en: enDictionary.holonMovePage?.slug ?? 'transportation-in-holon',
  };
  const givataimMoveSlugsByLocale = {
    he: heDictionary.givataimMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘Ч’Ч‘ЧўЧЄЧ™Ч™Чќ",
    ru: ruDictionary.givataimMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-РіРёРІР°С‚Р°РёРјРµ",
    en: enDictionary.givataimMovePage?.slug ?? "transportation-in-givataim",
  };
  const haifaMoveSlugsByLocale = {
    he: heDictionary.haifaMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘Ч—Ч™Ч¤Ч”",
    ru: ruDictionary.haifaMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-С…Р°Р№С„Рµ",
    en: enDictionary.haifaMovePage?.slug ?? "transportation-in-haifa",
  };

  const batYamMoveSlugsByLocale = {
    he: heDictionary.batYamMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘Ч‘ЧЄ-Ч™Чќ",
    ru: ruDictionary.batYamMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-Р±Р°С‚-СЏРјРµ",
    en: enDictionary.batYamMovePage?.slug ?? "transportation-in-bat-yam",
  };
  const ramatGanMoveSlugsByLocale = {
    he: heDictionary.ramatGanMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘ЧЁЧћЧЄ-Ч’Чџ",
    ru: ruDictionary.ramatGanMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-СЂР°РјР°С‚-РіР°РЅРµ",
    en: enDictionary.ramatGanMovePage?.slug ?? "transportation-in-ramat-gan",
  };
  const netanyaMoveSlugsByLocale = {
    he: heDictionary.netanyaMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘Ч ЧЄЧ Ч™Ч”",
    ru: ruDictionary.netanyaMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-РЅРµС‚Р°РЅРёРё",
    en: enDictionary.netanyaMovePage?.slug ?? "transportation-in-netanya",
  };
  const raananaMoveSlugsByLocale = {
    he: heDictionary.raananaMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘ЧЁЧўЧ Ч Ч”",
    ru: ruDictionary.raananaMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-СЂР°Р°РЅР°РЅРµ",
    en: enDictionary.raananaMovePage?.slug ?? "transportation-in-raanana",
  };
  const herzliyaMoveSlugsByLocale = {
    he: heDictionary.herzliyaMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘Ч”ЧЁЧ¦ЧњЧ™Ч”",
    ru: ruDictionary.herzliyaMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-РіРµСЂС†Р»РёРё",
    en: enDictionary.herzliyaMovePage?.slug ?? "transportation-in-herzliya",
  };
  const kfarSabaMoveSlugsByLocale = {
    he: heDictionary.kfarSabaMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч›Ч¤ЧЁ-ЧЎЧ‘Чђ",
    ru: ruDictionary.kfarSabaMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-РєС„Р°СЂ-СЃР°Р±Рµ",
    en: enDictionary.kfarSabaMovePage?.slug ?? "transportation-in-kfar-saba",
  };
  const hodHaSharonMoveSlugsByLocale = {
    he: heDictionary.hodHaSharonMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘Ч”Ч•Ч“-Ч©ЧЁЧ•Чџ",
    ru: ruDictionary.hodHaSharonMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-С…РѕРґ-С…Р°-С€Р°СЂРѕРЅРµ",
    en: enDictionary.hodHaSharonMovePage?.slug ?? "transportation-in-hod-hasharon",
  };
  const rishonLeZionMoveSlugsByLocale = {
    he: heDictionary.rishonLeZionMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘ЧЁЧђЧ©Ч•Чџ-ЧњЧ¦Ч™Ч•Чџ",
    ru: ruDictionary.rishonLeZionMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-СЂРёС€РѕРЅ-Р»Рµ-С†РёРѕРЅРµ",
    en: enDictionary.rishonLeZionMovePage?.slug ?? "transportation-in-rishon-lezion",
  };
  const lodMoveSlugsByLocale= {
    he: heDictionary.lodMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘ЧњЧ•Ч“",
    ru: ruDictionary.lodMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-Р»РѕРґРµ",
    en: enDictionary.lodMovePage?.slug ?? "transportation-in-lod",
  };
  const rehovotMoveSlugsByLocale = {
    he: heDictionary.rehovotMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘ЧЁЧ—Ч•Ч‘Ч•ЧЄ",
    ru: ruDictionary.rehovotMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-СЂРµС…РѕРІРѕС‚Рµ",
    en: enDictionary.rehovotMovePage?.slug ?? "transportation-in-rehovot",
  };
  const ashdodMoveSlugsByLocale= {
    he: heDictionary.ashdodMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘ЧђЧ©Ч“Ч•Ч“",
    ru: ruDictionary.ashdodMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-Р°С€РґРѕРґРµ",
    en: enDictionary.ashdodMovePage?.slug ?? "transportation-in-ashdod",
  };
  const ramlaMoveSlugsByLocale = {
    he: heDictionary.ramlaMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘ЧЁЧћЧњЧ”",
    ru: ruDictionary.ramlaMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-СЂР°РјР»Рµ",
    en: enDictionary.ramlaMovePage?.slug ?? "transportation-in-ramla",
  };
  const jerusalemMoveSlugsByLocale = {
    he: heDictionary.jerusalemMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘Ч™ЧЁЧ•Ч©ЧњЧ™Чќ",
    ru: ruDictionary.jerusalemMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-РёРµСЂСѓСЃР°Р»РёРјРµ",
    en: enDictionary.jerusalemMovePage?.slug ?? "transportation-in-jerusalem",
  };
  const modiinMoveSlugsByLocale = {
    he: heDictionary.modiinMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘ЧћЧ•Ч“Ч™ЧўЧ™Чџ",
    ru: ruDictionary.modiinMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-РјРѕРѕРґРёРёРЅРµ",
    en: enDictionary.modiinMovePage?.slug ?? "transportation-in-modiin"
  };
  const beitShemeshMoveSlugsByLocale = {
    he: heDictionary.beitShemeshMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘Ч‘Ч™ЧЄ-Ч©ЧћЧ©",
    ru: ruDictionary.beitShemeshMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-Р±РµР№С‚-С€РµРјРµС€Рµ",
    en: enDictionary.beitShemeshMovePage?.slug ?? "transportation-in-beit-shemesh",
  };
  const mevaseretZionMoveSlugsByLocale = {
    he: heDictionary.mevaseretZionMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘ЧћЧ‘Ч©ЧЁЧЄ-Ч¦Ч™Ч•Чџ",
    ru: ruDictionary.mevaseretZionMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-РјРµРІР°СЃРµСЂРµС‚-С†РёРѕРЅ",
    en: enDictionary.mevaseretZionMovePage?.slug ?? "transportation-in-mevaseret-zion",
  };
  const maaleAdumimMoveSlugsByLocale = {
    he: heDictionary.maaleAdumimMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘ЧћЧўЧњЧ”-ЧђЧ“Ч•ЧћЧ™Чќ",
    ru: ruDictionary.maaleAdumimMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-РјР°Р°Р»Рµ-Р°РґСѓРјРёРј",
    en: enDictionary.maaleAdumimMovePage?.slug ?? "transportation-in-maale-adumim",
  };
  const akkoMoveSlugsByLocale = {
    he: heDictionary.akkoMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘ЧўЧ›Ч•",
    ru: ruDictionary.akkoMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-Р°РєРєРѕ",
    en: enDictionary.akkoMovePage?.slug ?? "transportation-in-akko",
  };
  const nazarethMoveSlugsByLocale = {
    he: heDictionary.nazarethMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘Ч Ч¦ЧЁЧЄ",
    ru: ruDictionary.nazarethMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-РЅР°Р·Р°СЂРµС‚Рµ",
    en: enDictionary.nazarethMovePage?.slug ?? "transportation-in-nazareth",
  };
  const karmielMoveSlugsByLocale = {
    he: heDictionary.karmielMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘Ч›ЧЁЧћЧ™ЧђЧњ",
    ru: ruDictionary.karmielMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-РєР°СЂРјРёСЌР»Рµ",
    en: enDictionary.karmielMovePage?.slug ?? "transportation-in-karmiel",
  };
  const tiberiasMoveSlugsByLocale = {
    he: heDictionary.tiberiasMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘ЧЧ‘ЧЁЧ™Ч”",
    ru: ruDictionary.tiberiasMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-С‚РІРµСЂРёРё",
    en: enDictionary.tiberiasMovePage?.slug ?? "transportation-in-tiberias",
  };
  const beerShevaMoveSlugsByLocale = {
    he: heDictionary.beerShevaMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘Ч‘ЧђЧЁ-Ч©Ч‘Чў",
    ru: ruDictionary.beerShevaMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-Р±РµСЌСЂ-С€РµРІРµ",
    en: enDictionary.beerShevaMovePage?.slug ?? "transportation-in-beer-sheva",
  };
  const dimonaMoveSlugsByLocale = {
    he: heDictionary.dimonaMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘Ч“Ч™ЧћЧ•Ч Ч”",
    ru: ruDictionary.dimonaMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-РґРёРјРѕРЅРµ",
    en: enDictionary.dimonaMovePage?.slug ?? "transportation-in-dimona",
  };
  const ashkelonMoveSlugsByLocale = {
    he: heDictionary.ashkelonMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘ЧђЧ©Ч§ЧњЧ•Чџ",
    ru: ruDictionary.ashkelonMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-Р°С€РєРµР»РѕРЅРµ",
    en: enDictionary.ashkelonMovePage?.slug ?? "transportation-in-ashkelon",
  };

  const netivotMoveSlugsByLocale = {
    he: heDictionary.netivotMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘Ч ЧЄЧ™Ч‘Ч•ЧЄ",
    ru: ruDictionary.netivotMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-РЅРµС‚РёРІРѕС‚Рµ",
    en: enDictionary.netivotMovePage?.slug ?? "transportation-in-netivot",
  };

  const eilatMoveSlugsByLocale = {
    he: heDictionary.eilatMovePage?.slug ?? "Ч”Ч•Ч‘ЧњЧ•ЧЄ-Ч‘ЧђЧ™ЧњЧЄ",
    ru: ruDictionary.eilatMovePage?.slug ?? "РїРµСЂРµРІРѕР·РєРё-РІ-СЌР№Р»Р°С‚Рµ",
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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = telAvivMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = telAvivMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = holonMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = holonMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = givataimMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = givataimMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = batYamMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = batYamMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = ramatGanMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = ramatGanMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = netanyaMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = netanyaMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = raananaMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = raananaMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = herzliyaMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = herzliyaMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = kfarSabaMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = kfarSabaMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = hodHaSharonMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = hodHaSharonMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = rishonLeZionMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = rishonLeZionMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = lodMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = lodMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = rehovotMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = rehovotMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = ashdodMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = ashdodMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = ramlaMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = ramlaMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = jerusalemMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = jerusalemMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = modiinMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = modiinMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = beitShemeshMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = beitShemeshMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = mevaseretZionMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = mevaseretZionMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = maaleAdumimMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = maaleAdumimMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = akkoMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = akkoMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = nazarethMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = nazarethMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = karmielMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = karmielMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = tiberiasMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = tiberiasMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = beerShevaMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = beerShevaMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = dimonaMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = dimonaMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = ashkelonMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = ashkelonMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = netivotMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = netivotMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = eilatMoveSlugsByLocale[supportedLocale];
      languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
    });

    const defaultSlug = eilatMoveSlugsByLocale[DEFAULT_LOCALE];
    languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;

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
    const url = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((supportedLocale) => {
      const supportedSlug = haifaMoveSlugsByLocale[supportedLocale];
      if (supportedSlug) {
        languages[supportedLocale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(supportedLocale, 'home'), supportedSlug)}`;
      }
    });

    const defaultSlug = haifaMoveSlugsByLocale[DEFAULT_LOCALE];
    if (defaultSlug) {
      languages['x-default'] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(DEFAULT_LOCALE, 'home'), defaultSlug)}`;
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

