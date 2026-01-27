import Link from 'next/link';
import { Locale } from '../../../i18n-config';
import { DictionaryType } from '@/lib/dictionaries';
import { buildLocalizedPath } from '@/lib/localized-paths';
import BookingBanner from '@/components/home/BookingBanner';
import styles from './SmallMovePage.module.scss';

type PianoMovePageProps = {
  locale: Locale;
  dictionary: DictionaryType['pianoMovePage'];
  calculatorDictionary: DictionaryType['homeHero'];
};

export default function PianoMovePage({
  locale,
  dictionary,
  calculatorDictionary,
}: PianoMovePageProps) {
  const isRtl = locale === 'he';
  const calculateLink = buildLocalizedPath(locale, 'calculate');

  return (
    <div className={styles.page} dir={isRtl ? 'rtl' : 'ltr'}>
      <BookingBanner locale={locale} dictionary={calculatorDictionary} headingLevel="h2" />
      <section className={styles.hero} aria-labelledby="piano-move-title">
        <div className={styles.container}>
          <h1 id="piano-move-title" className={styles.title}>
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

      <section className={styles.section} id={dictionary.why.id} aria-labelledby="piano-move-why">
        <div className={styles.container}>
          <h2 id="piano-move-why" className={styles.sectionTitle}>
            {dictionary.why.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.why.intro}</p>
          <h3 className={styles.subsectionTitle}>{dictionary.why.bulletsTitle}</h3>
          <ul className={styles.bulletList}>
            {dictionary.why.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.paragraph}>
            <strong>{dictionary.why.noteLabel}</strong> {dictionary.why.note}
          </p>
        </div>
      </section>

      <section
        className={styles.section}
        id={dictionary.pricing.id}
        aria-labelledby="piano-move-pricing"
      >
        <div className={styles.container}>
          <h2 id="piano-move-pricing" className={styles.sectionTitle}>
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

      <section
        className={styles.section}
        id={dictionary.comparison.id}
        aria-labelledby="piano-move-comparison"
      >
        <div className={styles.container}>
          <h2 id="piano-move-comparison" className={styles.sectionTitle}>
            {dictionary.comparison.title}
          </h2>
          <ol className={styles.orderedList}>
            {dictionary.comparison.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} id={dictionary.crane.id} aria-labelledby="piano-move-crane">
        <div className={styles.container}>
          <h2 id="piano-move-crane" className={styles.sectionTitle}>
            {dictionary.crane.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.crane.intro}</p>
          <ul className={styles.bulletList}>
            {dictionary.crane.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className={styles.section}
        id={dictionary.preparation.id}
        aria-labelledby="piano-move-preparation"
      >
        <div className={styles.container}>
          <h2 id="piano-move-preparation" className={styles.sectionTitle}>
            {dictionary.preparation.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.preparation.intro}</p>
          <ol className={styles.orderedList}>
            {dictionary.preparation.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} id={dictionary.stairs.id} aria-labelledby="piano-move-stairs">
        <div className={styles.container}>
          <h2 id="piano-move-stairs" className={styles.sectionTitle}>
            {dictionary.stairs.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.stairs.intro}</p>
          <ul className={styles.bulletList}>
            {dictionary.stairs.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.paragraph}>{dictionary.stairs.outro}</p>
        </div>
      </section>

      <section className={styles.section} id={dictionary.faq.id} aria-labelledby="piano-move-faq">
        <div className={styles.container}>
          <h2 id="piano-move-faq" className={styles.sectionTitle}>
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

      <section className={styles.cta} aria-labelledby="piano-move-cta">
        <div className={styles.container}>
          <h2 id="piano-move-cta" className={styles.sectionTitle}>
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
