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

  if (matchedRoute === "transportation" && rest.length > 0) {
    const decodedRest = decodeURIComponent(rest[0]);
    const currentSmallMoveSlug = smallMoveSlugsByLocale[currentLocale];
    if (decodedRest === currentSmallMoveSlug) {
      const targetSlug = encodeURIComponent(smallMoveSlugsByLocale[targetLocale]);
      const translatedBase = buildLocalizedPath(targetLocale, "transportation");
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
