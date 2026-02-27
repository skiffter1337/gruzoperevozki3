import { Locale } from "../../i18n-config";
import heDictionary from "./dictionaries/he.json";
import ruDictionary from "./dictionaries/ru.json";
import enDictionary from "./dictionaries/en.json";
import { buildLocalizedPath, resolveRouteKey, switchLocalePath } from "./localized-paths";

const regionSlugsByLocale: Record<Locale, string[]> = {
  he: heDictionary.homeRegions?.sliderItems?.map((item) => item.slug) ?? [],
  ru: ruDictionary.homeRegions?.sliderItems?.map((item) => item.slug) ?? [],
  en: enDictionary.homeRegions?.sliderItems?.map((item) => item.slug) ?? [],
};

const articleSlugsByLocale: Record<Locale, string[]> = {
  he: heDictionary.homeArticles?.articles?.map((item) => item.slug) ?? [],
  ru: ruDictionary.homeArticles?.articles?.map((item) => item.slug) ?? [],
  en: enDictionary.homeArticles?.articles?.map((item) => item.slug) ?? [],
};

const smallMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.smallMovePage?.slug ?? "הובלות_קטנות",
  ru: ruDictionary.smallMovePage?.slug ?? "маленький-переезд",
  en: enDictionary.smallMovePage?.slug ?? "small-move",
};

const priceListSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.priceListPage?.slug ?? "",
  ru: ruDictionary.priceListPage?.slug ?? "прайс-лист-на-перевозки",
  en: enDictionary.priceListPage?.slug ?? "",
};

const apartmentMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.apartmentMovePage?.slug ?? "הובלות_דירה",
  ru: ruDictionary.apartmentMovePage?.slug ?? "квартирные",
  en: enDictionary.apartmentMovePage?.slug ?? "apartments",
};

const pianoMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.pianoMovePage?.slug ?? "הובלת-פסנתר",
  ru: ruDictionary.pianoMovePage?.slug ?? "перевозка-пианино",
  en: enDictionary.pianoMovePage?.slug ?? "piano-moving",
};

const officeMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.officeMovePage?.slug ?? "הובלות_משרדים",
  ru: ruDictionary.officeMovePage?.slug ?? "офисные",
  en: enDictionary.officeMovePage?.slug ?? "offices",
};

const houseMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.houseMovePage?.slug ?? "בית-פרטי",
  ru: ruDictionary.houseMovePage?.slug ?? "переезд-частного-дома",
  en: enDictionary.houseMovePage?.slug ?? "private-house",
};

const packingSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.packingPage?.slug ?? "שירותי-אריזה",
  ru: ruDictionary.packingPage?.slug ?? "услуги-упаковки",
  en: enDictionary.packingPage?.slug ?? "packing-services",
};

const telAvivMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.telAvivMovePage?.slug ?? "הובלות-בתל-אביב",
  ru: ruDictionary.telAvivMovePage?.slug ?? "перевозки-в-тель-авиве",
  en: enDictionary.telAvivMovePage?.slug ?? "transportation-in-tel-aviv",
};
const holonMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.holonMovePage?.slug ?? 'הובלות-בחולון',
  ru: ruDictionary.holonMovePage?.slug ?? 'перевозки-в-холоне',
  en: enDictionary.holonMovePage?.slug ?? 'transportation-in-holon',
};
const givataimMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.givataimMovePage?.slug ?? "הובלות-בגבעתיים",
  ru: ruDictionary.givataimMovePage?.slug ?? "перевозки-в-гиватаиме",
  en: enDictionary.givataimMovePage?.slug ?? "transportation-in-givataim",
};
const batYamMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.batYamMovePage?.slug ?? "הובלות-בבת-ים",
  ru: ruDictionary.batYamMovePage?.slug ?? "перевозки-в-бат-яме",
  en: enDictionary.batYamMovePage?.slug ?? "transportation-in-bat-yam",
};
const ramatGanMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.ramatGanMovePage?.slug ?? "הובלות-ברמת-גן",
  ru: ruDictionary.ramatGanMovePage?.slug ?? "перевозки-в-рамат-гане",
  en: enDictionary.ramatGanMovePage?.slug ?? "transportation-in-ramat-gan",
};
const netanyaMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.netanyaMovePage?.slug ?? "הובלות-בנתניה",
  ru: ruDictionary.netanyaMovePage?.slug ?? "перевозки-в-нетании",
  en: enDictionary.netanyaMovePage?.slug ?? "transportation-in-netanya",
};
const raananaMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.raananaMovePage?.slug ?? "הובלות-ברעננה",
  ru: ruDictionary.raananaMovePage?.slug ?? "перевозки-в-раанане",
  en: enDictionary.raananaMovePage?.slug ?? "transportation-in-raanana",
};
const herzliyaMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.herzliyaMovePage?.slug ?? "הובלות-בהרצליה",
  ru: ruDictionary.herzliyaMovePage?.slug ?? "перевозки-в-герцлии",
  en: enDictionary.herzliyaMovePage?.slug ?? "transportation-in-herzliya",
};
const kfarSabaMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.kfarSabaMovePage?.slug ?? "הובלות-כפר-סבא",
  ru: ruDictionary.kfarSabaMovePage?.slug ?? "перевозки-в-кфар-сабе",
  en: enDictionary.kfarSabaMovePage?.slug ?? "transportation-in-kfar-saba",
};
const hodHaSharonMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.hodHaSharonMovePage?.slug ?? "הובלות-בהוד-שרון",
  ru: ruDictionary.hodHaSharonMovePage?.slug ?? "перевозки-в-ход-ха-шароне",
  en: enDictionary.hodHaSharonMovePage?.slug ?? "transportation-in-hod-hasharon",
};
const rishonLeZionMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.rishonLeZionMovePage?.slug ?? "הובלות-בראשון-לציון",
  ru: ruDictionary.rishonLeZionMovePage?.slug ?? "перевозки-в-ришон-ле-ционе",
  en: enDictionary.rishonLeZionMovePage?.slug ?? "transportation-in-rishon-lezion",
};
const lodMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.lodMovePage?.slug ?? "הובלות-בלוד",
  ru: ruDictionary.lodMovePage?.slug ?? "перевозки-в-лоде",
  en: enDictionary.lodMovePage?.slug ?? "transportation-in-lod",
};
const rehovotMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.rehovotMovePage?.slug ?? "הובלות-ברחובות",
  ru: ruDictionary.rehovotMovePage?.slug ?? "перевозки-в-реховоте",
  en: enDictionary.rehovotMovePage?.slug ?? "transportation-in-rehovot",
};
const ashdodMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.ashdodMovePage?.slug ?? "הובלות-באשדוד",
  ru: ruDictionary.ashdodMovePage?.slug ?? "перевозки-в-ашдоде",
  en: enDictionary.ashdodMovePage?.slug ?? "transportation-in-ashdod",
};
const ramlaMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.ramlaMovePage?.slug ?? "הובלות-ברמלה",
  ru: ruDictionary.ramlaMovePage?.slug ?? "перевозки-в-рамле",
  en: enDictionary.ramlaMovePage?.slug ?? "transportation-in-ramla",
};
const jerusalemMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.jerusalemMovePage?.slug ?? "הובלות-בירושלים",
  ru: ruDictionary.jerusalemMovePage?.slug ?? "перевозки-в-иерусалиме",
  en: enDictionary.jerusalemMovePage?.slug ?? "transportation-in-jerusalem",
};
const modiinMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.modiinMovePage?.slug ?? "הובלות-במודיעין",
  ru: ruDictionary.modiinMovePage?.slug ?? "перевозки-в-моодиине",
  en: enDictionary.modiinMovePage?.slug ?? "transportation-modiin"
};
const beitShemeshMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.beitShemeshMovePage?.slug ?? "הובלות-בבית-שמש",
  ru: ruDictionary.beitShemeshMovePage?.slug ?? "перевозки-в-бейт-шемеше",
  en: enDictionary.beitShemeshMovePage?.slug ?? "transportation-in-beit-shemesh",
};
const mevaseretZionMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.mevaseretZionMovePage?.slug ?? "הובלות-במבשרת-ציון",
  ru: ruDictionary.mevaseretZionMovePage?.slug ?? "перевозки-в-мевасерет-цион",
  en: enDictionary.mevaseretZionMovePage?.slug ?? "transportation-in-mevaseret-zion",
};
const maaleAdumimMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.maaleAdumimMovePage?.slug ?? "הובלות-במעלה-אדומים",
  ru: ruDictionary.maaleAdumimMovePage?.slug ?? "перевозки-в-маале-адумим",
  en: enDictionary.maaleAdumimMovePage?.slug ?? "transportation-in-maale-adumim",
};
const haifaMoveSlugsByLocale = {
  he: heDictionary.haifaMovePage?.slug ?? "הובלות-בחיפה",
  ru: ruDictionary.haifaMovePage?.slug ?? "перевозки-в-хайфе",
  en: enDictionary.haifaMovePage?.slug ?? "transportation-in-haifa",
};
const akkoMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.akkoMovePage?.slug ?? "הובלות-בעכו",
  ru: ruDictionary.akkoMovePage?.slug ?? "перевозки-в-акко",
  en: enDictionary.akkoMovePage?.slug ?? "transportation-in-akko",
};
const nazarethMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.nazarethMovePage?.slug ?? "הובלות-בנצרת",
  ru: ruDictionary.nazarethMovePage?.slug ?? "перевозки-в-назарете",
  en: enDictionary.nazarethMovePage?.slug ?? "transportation-in-nazareth",
};
const karmielMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.karmielMovePage?.slug ?? "הובלות-בכרמיאל",
  ru: ruDictionary.karmielMovePage?.slug ?? "перевозки-в-кармиэле",
  en: enDictionary.karmielMovePage?.slug ?? "transportation-in-karmiel",
};
const tiberiasMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.tiberiasMovePage?.slug ?? "הובלות-בטבריה",
  ru: ruDictionary.tiberiasMovePage?.slug ?? "перевозки-в-тверии",
  en: enDictionary.tiberiasMovePage?.slug ?? "transportation-in-tiberias",
};
const beerShevaMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.beerShevaMovePage?.slug ?? "הובלות-בבאר-שבע",
  ru: ruDictionary.beerShevaMovePage?.slug ?? "перевозки-в-беэр-шеве",
  en: enDictionary.beerShevaMovePage?.slug ?? "transportation-in-beer-sheva",
};
const dimonaMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.dimonaMovePage?.slug ?? "הובלות-בדימונה",
  ru: ruDictionary.dimonaMovePage?.slug ?? "перевозки-в-димоне",
  en: enDictionary.dimonaMovePage?.slug ?? "transportation-in-dimona",
};
const ashkelonMoveSlugsByLocale: Record<Locale, string> = {
    he: heDictionary.ashkelonMovePage?.slug ?? "הובלות-באשקלון",
    ru: ruDictionary.ashkelonMovePage?.slug ?? "перевозки-в-ашкелоне",
    en: enDictionary.ashkelonMovePage?.slug ?? "transportation-in-ashkelon",
};
const netivotMoveSlugsByLocale: Record<Locale, string> = {
    he: heDictionary.netivotMovePage?.slug ?? "הובלות-בנתיבות",
    ru: ruDictionary.netivotMovePage?.slug ?? "перевозки-в-нетивоте",
    en: enDictionary.netivotMovePage?.slug ?? "transportation-in-netivot",
};
const eilatMoveSlugsByLocale: Record<Locale, string> = {
    he: heDictionary.eilatMovePage?.slug ?? "הובלות-באילת",
    ru: ruDictionary.eilatMovePage?.slug ?? "перевозки-в-эйлате",
    en: enDictionary.eilatMovePage?.slug ?? "transportation-in-eilat",
};
const lateMoveSlugsByLocale: Record<Locale, string> = {
  he: "הובלות-מאוחרות",
  ru: "поздние-перевозки",
  en: "late-moves",
};

const translateRegionSlug = (sourceLocale: Locale, targetLocale: Locale, slug: string) => {
  const sourceSlugs = regionSlugsByLocale[sourceLocale];
  const targetSlugs = regionSlugsByLocale[targetLocale];
  const regionIndex = sourceSlugs.findIndex((itemSlug) => itemSlug === slug);

  if (regionIndex < 0) {
    return slug;
  }

  return targetSlugs[regionIndex] ?? slug;
};

/**
 * Преобразует текущий URL в эквивалентный для целевой локали
 */
export function getTranslatedUrl(currentPath: string, targetLocale: Locale): string {
  const segments = currentPath.split("/").filter(Boolean);
  const currentLocale = segments[0] as Locale | undefined;

  if (!currentLocale || currentLocale === targetLocale) {
    return switchLocalePath(currentPath, targetLocale);
  }

  const [firstSegment, ...rest] = segments.slice(1);
  const decodedFirstSegment = firstSegment ? decodeURIComponent(firstSegment) : "";
  const matchedRoute = decodedFirstSegment
    ? resolveRouteKey(currentLocale, decodedFirstSegment)
    : undefined;

  const currentSmallMoveSlug = smallMoveSlugsByLocale[currentLocale];
  const currentPriceListSlug = priceListSlugsByLocale[currentLocale];
  const currentApartmentMoveSlug = apartmentMoveSlugsByLocale[currentLocale];
  const currentPianoMoveSlug = pianoMoveSlugsByLocale[currentLocale];
  const currentOfficeMoveSlug = officeMoveSlugsByLocale[currentLocale];
  const currentHouseMoveSlug = houseMoveSlugsByLocale[currentLocale];
  const currentTelAvivMoveSlug = telAvivMoveSlugsByLocale[currentLocale];
  const currentHolonMoveSlug = holonMoveSlugsByLocale[currentLocale];
  const currentGivataimMoveSlug = givataimMoveSlugsByLocale[currentLocale];
  const currentBatYamMoveSlug = batYamMoveSlugsByLocale[currentLocale];
  const currentRamatGanMoveSlug = ramatGanMoveSlugsByLocale[currentLocale];
  const currentNetanyaMoveSlug = netanyaMoveSlugsByLocale[currentLocale];
  const currentRaananaMoveSlug = raananaMoveSlugsByLocale[currentLocale];
  const currentHerzliyaMoveSlug = herzliyaMoveSlugsByLocale[currentLocale];
  const currentKfarSabaMoveSlug = kfarSabaMoveSlugsByLocale[currentLocale];
  const currentHodHaSharonMoveSlug = hodHaSharonMoveSlugsByLocale[currentLocale];
  const currentRishonLeZionMoveSlug = rishonLeZionMoveSlugsByLocale[currentLocale];
  const currentLodZionMoveSlug = lodMoveSlugsByLocale[currentLocale];
  const currentRehovotZionMoveSlug = rehovotMoveSlugsByLocale[currentLocale];
  const currentAshdodMoveSlug = ashdodMoveSlugsByLocale[currentLocale];
  const currentRamlaMoveSlug = ramlaMoveSlugsByLocale[currentLocale];
  const currentJerusalemMoveSlug = jerusalemMoveSlugsByLocale[currentLocale];
  const currentModiinMoveSlug = modiinMoveSlugsByLocale[currentLocale];
  const currentBeitShemeshMoveSlug = beitShemeshMoveSlugsByLocale[currentLocale];
  const currentMevaseretZionMoveSlug = mevaseretZionMoveSlugsByLocale[currentLocale];
  const currentMaaleAdumimMoveSlug = maaleAdumimMoveSlugsByLocale[currentLocale];
  const currentHaifaMoveSlug = haifaMoveSlugsByLocale[currentLocale];
  const currentAkkoMoveSlug = akkoMoveSlugsByLocale[currentLocale];
  const currentNazarethMoveSlug = nazarethMoveSlugsByLocale[currentLocale];
  const currentKarmielMoveSlug = karmielMoveSlugsByLocale[currentLocale];
  const currentTiberiasMoveSlug = tiberiasMoveSlugsByLocale[currentLocale];
  const currentBeerShevaMoveSlug = beerShevaMoveSlugsByLocale[currentLocale];
  const currentDimonaMoveSlug = dimonaMoveSlugsByLocale[currentLocale];
  const currentAshkelonMoveSlug = ashkelonMoveSlugsByLocale[currentLocale];
  const currentNetivotMoveSlug = netivotMoveSlugsByLocale[currentLocale];
  const currentEilatMoveSlug = eilatMoveSlugsByLocale[currentLocale];
  const currentLateMoveSlug = lateMoveSlugsByLocale[currentLocale];
  const currentSlug = rest.length ? decodeURIComponent(rest[0]) : "";
  const isArticleSlug = currentSlug
    ? (Object.keys(articleSlugsByLocale) as Locale[]).some((locale) =>
        (articleSlugsByLocale[locale] ?? []).includes(currentSlug)
      )
    : false;

  if (matchedRoute === "articles" || (decodedFirstSegment && isArticleSlug)) {
    const translatedBase = buildLocalizedPath(targetLocale, "articles");
    if (!rest.length) {
      return translatedBase;
    }

    const currentSlugs = articleSlugsByLocale[currentLocale] ?? [];
    const targetSlugs = articleSlugsByLocale[targetLocale] ?? [];
    let index = currentSlugs.indexOf(currentSlug);
    if (index < 0) {
      const fallbackLocale = (Object.keys(articleSlugsByLocale) as Locale[]).find((locale) =>
        (articleSlugsByLocale[locale] ?? []).includes(currentSlug)
      );
      if (fallbackLocale) {
        index = articleSlugsByLocale[fallbackLocale]?.indexOf(currentSlug) ?? -1;
      }
    }
    const translatedSlug = index >= 0 && targetSlugs[index] ? targetSlugs[index] : currentSlug;
    const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";

    return `${translatedBase}/${translatedSlug}${remaining}`;
  }
  if (decodedFirstSegment === currentApartmentMoveSlug) {
    const targetSlug = encodeURIComponent(apartmentMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "transportation");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }

  if (decodedFirstSegment === currentPianoMoveSlug) {
    const targetSlug = encodeURIComponent(pianoMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "transportation");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }

  if (decodedFirstSegment === currentOfficeMoveSlug) {
    const targetSlug = encodeURIComponent(officeMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "transportation");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }

  if (decodedFirstSegment === currentSmallMoveSlug) {
    const targetSlug = encodeURIComponent(smallMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "transportation");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }

  if (decodedFirstSegment === currentPriceListSlug && priceListSlugsByLocale[targetLocale]) {
    const targetSlug = encodeURIComponent(priceListSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "transportation");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }

  if (decodedFirstSegment === currentHouseMoveSlug) {
    const targetSlug = encodeURIComponent(houseMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "transportation");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }

  if (decodedFirstSegment === currentTelAvivMoveSlug) {
    const targetSlug = encodeURIComponent(telAvivMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
  if (decodedFirstSegment === currentHolonMoveSlug) {
    const targetSlug = encodeURIComponent(holonMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
  if (decodedFirstSegment === currentGivataimMoveSlug) {
    const targetSlug = encodeURIComponent(givataimMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
  if (decodedFirstSegment === currentBatYamMoveSlug) {
    const targetSlug = encodeURIComponent(batYamMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
  if (decodedFirstSegment === currentRamatGanMoveSlug) {
    const targetSlug = encodeURIComponent(ramatGanMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
  if (decodedFirstSegment === currentNetanyaMoveSlug) {
    const targetSlug = encodeURIComponent(netanyaMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
  if (decodedFirstSegment === currentRaananaMoveSlug) {
    const targetSlug = encodeURIComponent(raananaMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
  if (decodedFirstSegment === currentHerzliyaMoveSlug) {
    const targetSlug = encodeURIComponent(herzliyaMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
  if (decodedFirstSegment === currentKfarSabaMoveSlug) {
    const targetSlug = encodeURIComponent(kfarSabaMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
  if (decodedFirstSegment === currentHodHaSharonMoveSlug) {
    const targetSlug = encodeURIComponent(hodHaSharonMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
 if (decodedFirstSegment === currentRishonLeZionMoveSlug) {
    const targetSlug = encodeURIComponent(rishonLeZionMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
 if (decodedFirstSegment === currentLodZionMoveSlug) {
    const targetSlug = encodeURIComponent(lodMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
 if (decodedFirstSegment === currentRehovotZionMoveSlug) {
    const targetSlug = encodeURIComponent(rehovotMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
 if (decodedFirstSegment === currentAshdodMoveSlug) {
    const targetSlug = encodeURIComponent(ashdodMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
 if (decodedFirstSegment === currentRamlaMoveSlug) {
    const targetSlug = encodeURIComponent(ramlaMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
 if (decodedFirstSegment === currentJerusalemMoveSlug) {
    const targetSlug = encodeURIComponent(jerusalemMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
 if (decodedFirstSegment === currentModiinMoveSlug) {
    const targetSlug = encodeURIComponent(modiinMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
if (decodedFirstSegment === currentBeitShemeshMoveSlug) {
    const targetSlug = encodeURIComponent(beitShemeshMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
if (decodedFirstSegment === currentMevaseretZionMoveSlug) {
    const targetSlug = encodeURIComponent(mevaseretZionMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
if (decodedFirstSegment === currentMaaleAdumimMoveSlug) {
    const targetSlug = encodeURIComponent(maaleAdumimMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
if (decodedFirstSegment === currentHaifaMoveSlug) {
    const targetSlug = encodeURIComponent(haifaMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
if (decodedFirstSegment === currentAkkoMoveSlug) {
    const targetSlug = encodeURIComponent(akkoMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
if (decodedFirstSegment === currentNazarethMoveSlug) {
    const targetSlug = encodeURIComponent(nazarethMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
if (decodedFirstSegment === currentKarmielMoveSlug) {
    const targetSlug = encodeURIComponent(karmielMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
if (decodedFirstSegment === currentTiberiasMoveSlug) {
    const targetSlug = encodeURIComponent(tiberiasMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
if (decodedFirstSegment === currentBeerShevaMoveSlug) {
    const targetSlug = encodeURIComponent(beerShevaMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
if (decodedFirstSegment === currentDimonaMoveSlug) {
    const targetSlug = encodeURIComponent(dimonaMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
if (decodedFirstSegment === currentAshkelonMoveSlug) {
    const targetSlug = encodeURIComponent(ashkelonMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
if (decodedFirstSegment === currentNetivotMoveSlug) {
    const targetSlug = encodeURIComponent(netivotMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }
if (decodedFirstSegment === currentEilatMoveSlug) {
    const targetSlug = encodeURIComponent(eilatMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }

  if (decodedFirstSegment === currentLateMoveSlug) {
    const targetSlug = encodeURIComponent(lateMoveSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "transportation");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }

  const currentPackingSlug = packingSlugsByLocale[currentLocale];
  if (decodedFirstSegment === currentPackingSlug) {
    const targetSlug = encodeURIComponent(packingSlugsByLocale[targetLocale]);
    const translatedBase = buildLocalizedPath(targetLocale, "services");
    const remaining = rest.length ? `/${rest.join("/")}` : "";
    return `${translatedBase}/${targetSlug}${remaining}`;
  }

  if (matchedRoute === "transportation" && rest.length > 0) {
    const decodedRest = decodeURIComponent(rest[0]);
    if (decodedRest === currentApartmentMoveSlug) {
      const targetSlug = encodeURIComponent(apartmentMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "transportation");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentPianoMoveSlug) {
      const targetSlug = encodeURIComponent(pianoMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "transportation");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentOfficeMoveSlug) {
      const targetSlug = encodeURIComponent(officeMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "transportation");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentSmallMoveSlug) {
      const targetSlug = encodeURIComponent(smallMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "transportation");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentHouseMoveSlug) {
      const targetSlug = encodeURIComponent(houseMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "transportation");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentTelAvivMoveSlug) {
      const targetSlug = encodeURIComponent(telAvivMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentHolonMoveSlug) {
      const targetSlug = encodeURIComponent(holonMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentGivataimMoveSlug) {
      const targetSlug = encodeURIComponent(givataimMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentBatYamMoveSlug) {
      const targetSlug = encodeURIComponent(batYamMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentRamatGanMoveSlug) {
      const targetSlug = encodeURIComponent(ramatGanMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentNetanyaMoveSlug) {
      const targetSlug = encodeURIComponent(netanyaMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentRaananaMoveSlug) {
      const targetSlug = encodeURIComponent(raananaMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentHerzliyaMoveSlug) {
      const targetSlug = encodeURIComponent(herzliyaMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentKfarSabaMoveSlug) {
      const targetSlug = encodeURIComponent(kfarSabaMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentHodHaSharonMoveSlug) {
      const targetSlug = encodeURIComponent(hodHaSharonMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentRishonLeZionMoveSlug) {
      const targetSlug = encodeURIComponent(rishonLeZionMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentLodZionMoveSlug) {
      const targetSlug = encodeURIComponent(lodMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentRehovotZionMoveSlug) {
      const targetSlug = encodeURIComponent(rehovotMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentAshdodMoveSlug) {
      const targetSlug = encodeURIComponent(ashdodMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentRamlaMoveSlug) {
      const targetSlug = encodeURIComponent(ramlaMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentJerusalemMoveSlug) {
      const targetSlug = encodeURIComponent(jerusalemMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentModiinMoveSlug) {
      const targetSlug = encodeURIComponent(modiinMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentBeitShemeshMoveSlug) {
      const targetSlug = encodeURIComponent(beitShemeshMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentMevaseretZionMoveSlug) {
      const targetSlug = encodeURIComponent(mevaseretZionMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentMaaleAdumimMoveSlug) {
      const targetSlug = encodeURIComponent(maaleAdumimMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentHaifaMoveSlug) {
      const targetSlug = encodeURIComponent(haifaMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentAkkoMoveSlug) {
      const targetSlug = encodeURIComponent(akkoMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentNazarethMoveSlug) {
      const targetSlug = encodeURIComponent(nazarethMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentKarmielMoveSlug) {
      const targetSlug = encodeURIComponent(karmielMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentTiberiasMoveSlug) {
      const targetSlug = encodeURIComponent(tiberiasMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentBeerShevaMoveSlug) {
      const targetSlug = encodeURIComponent(beerShevaMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentDimonaMoveSlug) {
      const targetSlug = encodeURIComponent(dimonaMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
        if (decodedRest === currentAshkelonMoveSlug) {
      const targetSlug = encodeURIComponent(ashkelonMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
  if (decodedRest === currentNetivotMoveSlug) {
      const targetSlug = encodeURIComponent(netivotMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
 if (decodedRest === currentEilatMoveSlug) {
      const targetSlug = encodeURIComponent(eilatMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "home");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }

    if (decodedRest === currentLateMoveSlug) {
      const targetSlug = encodeURIComponent(lateMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "transportation");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
  }

  if (matchedRoute === "services" && rest.length > 0) {
    const decodedRest = decodeURIComponent(rest[0]);
    if (decodedRest === currentPackingSlug) {
      const targetSlug = encodeURIComponent(packingSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "services");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
    if (decodedRest === currentPianoMoveSlug) {
      const targetSlug = encodeURIComponent(pianoMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "services");
      const remaining = rest.length > 1 ? `/${rest.slice(1).join("/")}` : "";
      return `${translatedBase}/${targetSlug}${remaining}`;
    }
  }

  if (!matchedRoute && decodedFirstSegment) {
    const translatedSlug = translateRegionSlug(currentLocale, targetLocale, decodedFirstSegment);
    const translatedBase = buildLocalizedPath(targetLocale, "home");
    const translatedSlugEncoded = encodeURIComponent(translatedSlug);
    const restPath = rest.length ? `/${rest.join("/")}` : "";

    return `${translatedBase}/${translatedSlugEncoded}${restPath}`;
  }

  return switchLocalePath(currentPath, targetLocale);
}
