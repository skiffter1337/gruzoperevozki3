import { Locale } from "../../i18n-config";
import { switchLocalePath } from "./localized-paths";

/**
 * Преобразует текущий URL в эквивалентный для целевой локали
 */
export function getTranslatedUrl(currentPath: string, targetLocale: Locale): string {
  return switchLocalePath(currentPath, targetLocale);
}
