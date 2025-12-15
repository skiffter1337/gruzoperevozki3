import { Locale } from "../../i18n-config";
import { DEFAULT_LOCALE, SITE_URL, SUPPORTED_LOCALES } from "./site-config";

export type RouteKey = "home" | "services" | "about" | "contact" | "blog";

type LocalizedSegments = Record<Locale, Record<RouteKey, string>>;

const localizedSegments: LocalizedSegments = {
  he: {
    home: "",
    services: "שירותים",
    about: "אודות",
    contact: "צור-קשר",
    blog: "בלוג",
  },
  ru: {
    home: "",
    services: "uslugi",
    about: "o-kompanii",
    contact: "kontakty",
    blog: "blog",
  },
  en: {
    home: "",
    services: "services",
    about: "about",
    contact: "contact",
    blog: "blog",
  },
};

export function getSegment(locale: Locale, route: RouteKey): string {
  return localizedSegments[locale][route];
}

export function buildLocalizedPath(locale: Locale, route: RouteKey): string {
  const segment = getSegment(locale, route);
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function buildAbsoluteUrl(locale: Locale, route: RouteKey): string {
  return `${SITE_URL}${buildLocalizedPath(locale, route)}`;
}

export function resolveRouteKey(locale: Locale, segment: string): RouteKey | undefined {
  const routes = localizedSegments[locale];
  return (Object.keys(routes) as RouteKey[]).find((key) => routes[key] === segment);
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
  const currentLocale = segments[0] as Locale | undefined;
  const remainingSegments = segments.slice(1);

  if (!SUPPORTED_LOCALES.includes(currentLocale as Locale)) {
    return buildLocalizedPath(targetLocale, "home");
  }

  const [firstSegment, ...rest] = remainingSegments;
  const matchedRoute = resolveRouteKey(currentLocale as Locale, firstSegment || "") || "home";
  const targetPath = buildLocalizedPath(targetLocale, matchedRoute);

  return rest.length ? `${targetPath}/${rest.join("/")}` : targetPath;
}
