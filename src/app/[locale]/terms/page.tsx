import { Metadata } from "next";
import { Locale } from "../../../../i18n-config";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { getDictionary } from "@/lib/dictionaries";
import { buildLocalizedPath } from "@/lib/localized-paths";
import styles from "@/app/[locale]/terms.module.scss";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

const pageTitleByLocale: Record<Locale, string> = {
  ru: "Правила и условия",
  en: "Terms and Conditions",
  he: "תקנון ותנאים",
};

const placeholderByLocale: Record<Locale, string> = {
  ru: "Текст условий скоро будет добавлен.",
  en: "Terms text will be added soon.",
  he: "טקסט התנאים יתווסף בקרוב.",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const title = pageTitleByLocale[locale];

  return {
    title,
    description: title,
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const breadcrumbs = [
    { label: dictionary.header.nav.home, href: buildLocalizedPath(locale, "home") },
    { label: pageTitleByLocale[locale], current: true },
  ];

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>{pageTitleByLocale[locale]}</h1>
          <p className={styles.text}>{placeholderByLocale[locale]}</p>
        </div>
      </div>
    </section>
  );
}

