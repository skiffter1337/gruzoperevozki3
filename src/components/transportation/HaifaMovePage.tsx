import Link from 'next/link';
import { Locale } from '../../../i18n-config';
import { DictionaryType } from '@/lib/dictionaries';
import { buildLocalizedPath } from '@/lib/localized-paths';
import BookingBanner from '@/components/home/BookingBanner';
import styles from './SmallMovePage.module.scss';

type HaifaMovePageProps = {
  locale: Locale;
  dictionary: DictionaryType['haifaMovePage'];
  calculatorDictionary: DictionaryType['homeHero'];
};

export default function HaifaMovePage({
  locale,
  dictionary,
  calculatorDictionary,
}: HaifaMovePageProps) {
  const isRtl = locale === 'he';
  const calculateLink = buildLocalizedPath(locale, 'calculate');

  return (
    <div className={styles.page} dir={isRtl ? 'rtl' : 'ltr'}>
      <BookingBanner locale={locale} dictionary={calculatorDictionary} headingLevel="h2" />

      <section className={styles.hero} aria-labelledby="haifa-move-title">
        <div className={styles.container}>
          <h1 id="haifa-move-title" className={styles.title}>
            {dictionary.title}
          </h1>

          <nav className={styles.toc} aria-label={dictionary.tocTitle}>
            <h2 className={styles.tocTitle}>{dictionary.tocTitle}</h2>
            <ul className={styles.tocList}>
              {dictionary.tocItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={styles.tocLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className={styles.section} id={dictionary.advantages.id} aria-labelledby="haifa-advantages">
        <div className={styles.container}>
          <h2 id="haifa-advantages" className={styles.sectionTitle}>
            {dictionary.advantages.title}
          </h2>
          <ul className={styles.bulletList}>
            {dictionary.advantages.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id={dictionary.howToFind.id} aria-labelledby="haifa-how-to-find">
        <div className={styles.container}>
          <h2 id="haifa-how-to-find" className={styles.sectionTitle}>
            {dictionary.howToFind.title}
          </h2>
          {dictionary.howToFind.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          <h3 className={styles.subsectionTitle}>{dictionary.howToFind.stepsTitle}</h3>
          <ol className={styles.orderedList}>
            {dictionary.howToFind.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className={styles.paragraph}>{dictionary.howToFind.outro}</p>
        </div>
      </section>

      <section className={styles.section} id={dictionary.pricing.id} aria-labelledby="haifa-pricing">
        <div className={styles.container}>
          <h2 id="haifa-pricing" className={styles.sectionTitle}>
            {dictionary.pricing.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.pricing.intro}</p>

          <div className={styles.table} role="table" aria-label={dictionary.pricing.tableLabel}>
            <div className={styles.tableRow} role="row">
              {dictionary.pricing.tableHeaders.map((header) => (
                <div
                  key={header}
                  className={`${styles.tableCell} ${styles.tableHeader}`}
                  role="columnheader"
                >
                  {header}
                </div>
              ))}
            </div>
            {dictionary.pricing.rows.map((row, index) => (
              <div key={`${row.item}-${index}`} className={styles.tableRow} role="row">
                <div className={styles.tableCell} role="cell">
                  {row.notes}
                </div>
                <div className={styles.tableCell} role="cell">
                  {row.priceRange}
                </div>
                <div className={styles.tableCell} role="cell">
                  {row.item}
                </div>
              </div>
            ))}
          </div>

          <p className={styles.paragraph}>{dictionary.pricing.afterTable}</p>
        </div>
      </section>

      <section className={styles.section} id={dictionary.challenges.id} aria-labelledby="haifa-challenges">
        <div className={styles.container}>
          <h2 id="haifa-challenges" className={styles.sectionTitle}>
            {dictionary.challenges.title}
          </h2>
          <ul className={styles.detailList}>
            {dictionary.challenges.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id={dictionary.smallMoves.id} aria-labelledby="haifa-small-moves">
        <div className={styles.container}>
          <h2 id="haifa-small-moves" className={styles.sectionTitle}>
            {dictionary.smallMoves.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.smallMoves.text}</p>
        </div>
      </section>

      <section className={styles.section} id={dictionary.services.id} aria-labelledby="haifa-services">
        <div className={styles.container}>
          <h2 id="haifa-services" className={styles.sectionTitle}>
            {dictionary.services.title}
          </h2>
          <ul className={styles.detailList}>
            {dictionary.services.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id={dictionary.faq.id} aria-labelledby="haifa-faq">
        <div className={styles.container}>
          <h2 id="haifa-faq" className={styles.sectionTitle}>
            {dictionary.faq.title}
          </h2>
          <div className={styles.faqList}>
            {dictionary.faq.items.map((item) => (
              <div key={item.question} className={styles.faqItem}>
                <h3 className={styles.subsectionTitle}>{item.question}</h3>
                <p className={styles.paragraph}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta} id={dictionary.closing.id} aria-labelledby="haifa-closing">
        <div className={styles.container}>
          <h2 id="haifa-closing" className={styles.sectionTitle}>
            {dictionary.closing.title}
          </h2>
          <p className={styles.ctaText}>{dictionary.closing.text}</p>
          <Link href={calculateLink} className={styles.ctaButton}>
            {dictionary.closing.buttonLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
