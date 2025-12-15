import { i18nConfig } from "../../i18n-config";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://site.ru";
export const SUPPORTED_LOCALES = i18nConfig.locales;
export const DEFAULT_LOCALE = i18nConfig.defaultLocale;
