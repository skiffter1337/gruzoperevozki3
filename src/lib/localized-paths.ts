import { Locale } from "../../i18n-config";
import { DEFAULT_LOCALE, SITE_URL, SUPPORTED_LOCALES } from "./site-config";

export type RouteKey =
  | "home"
  | "transportation"
  | "services"
  | "calculate"
  | "articles"
  | "contact"
  | "leaveReview"
  | "terms";

type LocalizedSegments = Record<Locale, Record<RouteKey, string>>;

const localizedSegments: LocalizedSegments = {
  he: {
    home: "",
    transportation: "הובלות",
    services: "שירותים",
    calculate: "חישוב-עלות",
    articles: "מאמרים",
    contact: "צור-קשר",
    leaveReview: "השארת-חוות-דעת",
    terms: "תקנון-ותנאים",
  },
  ru: {
    home: "",
    transportation: "перевозки",
    services: "дополнительные-услуги",
    calculate: "рассчитать-стоимость",
    articles: "статьи",
    contact: "контакты",
    leaveReview: "оставить-отзыв",
    terms: "pravila-i-usloviya",
  },
  en: {
    home: "",
    transportation: "transportation",
    services: "services",
    calculate: "calculate-cost",
    articles: "articles",
    contact: "contact",
    leaveReview: "leave-review",
    terms: "terms-and-conditions",
  },
};

export function getSegment(locale: Locale, route: RouteKey): string {
  return localizedSegments[locale][route];
}

export function buildLocalizedPath(locale: Locale, route: RouteKey): string {
  const segment = getSegment(locale, route);
  if (locale === DEFAULT_LOCALE) {
    return segment ? `/${segment}` : "/";
  }
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function buildAbsoluteUrl(locale: Locale, route: RouteKey): string {
  return `${SITE_URL}${buildLocalizedPath(locale, route)}`;
}

export function joinLocalizedPath(base: string, slug: string): string {
  if (!base || base === "/") {
    return `/${slug}`;
  }
  return `${base}/${slug}`;
}

export function resolveRouteKey(locale: Locale, segment: string): RouteKey | undefined {
  const routes = localizedSegments[locale];
  return (Object.keys(routes) as RouteKey[]).find((key) => routes[key] === segment);
}

function resolveRouteKeyFromAnyLocale(segment: string): RouteKey | undefined {
  for (const locale of SUPPORTED_LOCALES) {
    const route = resolveRouteKey(locale, segment);
    if (route) {
      return route;
    }
  }

  return undefined;
}

export function buildLanguageAlternates(route: RouteKey) {
  const languages: Record<string, string> = {};

  SUPPORTED_LOCALES.forEach((locale) => {
    languages[locale] = buildAbsoluteUrl(locale, route);
  });

  languages["x-default"] = buildAbsoluteUrl(DEFAULT_LOCALE, route);

  return languages;
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  const possibleLocale = segments[0] as Locale | undefined;
  const hasLocalePrefix = possibleLocale && SUPPORTED_LOCALES.includes(possibleLocale);
  const currentLocale = hasLocalePrefix ? possibleLocale : DEFAULT_LOCALE;
  const remainingSegments = hasLocalePrefix ? segments.slice(1) : segments;

  if (!SUPPORTED_LOCALES.includes(currentLocale as Locale)) {
    return buildLocalizedPath(targetLocale, "home");
  }

  const [firstSegment, ...rest] = remainingSegments;
  const decodedFirstSegment = firstSegment ? decodeURIComponent(firstSegment) : "";
  const matchedRoute = decodedFirstSegment
    ? resolveRouteKey(currentLocale as Locale, decodedFirstSegment) ??
      resolveRouteKeyFromAnyLocale(decodedFirstSegment)
    : undefined;

  if (!matchedRoute) {
    if (!remainingSegments.length) {
      return buildLocalizedPath(targetLocale, "home");
    }

    return joinLocalizedPath(buildLocalizedPath(targetLocale, "home"), remainingSegments.join("/"));
  }

  const targetPath = buildLocalizedPath(targetLocale, matchedRoute);
  return rest.length ? joinLocalizedPath(targetPath, rest.join("/")) : targetPath;
}

