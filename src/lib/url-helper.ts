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

const smallMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.smallMovePage?.slug ?? "הובלות_קטנות",
  ru: ruDictionary.smallMovePage?.slug ?? "маленький-переезд",
  en: enDictionary.smallMovePage?.slug ?? "small-move",
};

const priceListSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.priceListPage?.slug ?? "",
  ru: ruDictionary.priceListPage?.slug ?? "מחירון_הובלות",
  en: enDictionary.priceListPage?.slug ?? "",
};

const apartmentMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.apartmentMovePage?.slug ?? "הובלות_דירה",
  ru: ruDictionary.apartmentMovePage?.slug ?? "квартирные",
  en: enDictionary.apartmentMovePage?.slug ?? "apartments",
};

const pianoMoveSlugsByLocale: Record<Locale, string> = {
  he: heDictionary.pianoMovePage?.slug ?? "הובלת-פסנתר",
  ru: ruDictionary.pianoMovePage?.slug ?? "perevozka-pianino",
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
  }

  if (matchedRoute === "services" && rest.length > 0) {
    const decodedRest = decodeURIComponent(rest[0]);
    if (decodedRest === currentPackingSlug) {
      const targetSlug = encodeURIComponent(packingSlugsByLocale[targetLocale]);
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
