import { Locale } from "../../i18n-config";
import { buildLocalizedPath } from "@/lib/localized-paths";

export const termsLabelByLocale: Record<Locale, string> = {
  ru: "Я принимаю правила и условия",
  en: "I accept the terms and conditions",
  he: "אני מאשר/ת את התקנון והתנאים",
};

export const termsValidationByLocale: Record<Locale, string> = {
  ru: "Чтобы отправить форму, нужно принять правила и условия",
  en: "To submit the form, you need to accept the terms and conditions",
  he: "כדי לשלוח את הטופס יש לאשר את התקנון והתנאים",
};

export function getTermsPath(locale: Locale): string {
  const homePath = buildLocalizedPath(locale, "home");
  return homePath === "/" ? "/terms" : `${homePath}/terms`;
}

