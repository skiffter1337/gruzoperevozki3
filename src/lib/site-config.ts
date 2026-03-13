import { i18nConfig } from "../../i18n-config";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://site.ru";
export const SUPPORTED_LOCALES = i18nConfig.locales;
export const DEFAULT_LOCALE = i18nConfig.defaultLocale;

// Keep favicon config in one place. The file lives in /public.
export const FAVICON_PNG_PATH = "/logo.png";
export const FAVICON_ICONS = {
  icon: FAVICON_PNG_PATH,
  shortcut: FAVICON_PNG_PATH,
  apple: FAVICON_PNG_PATH,
} as const;
