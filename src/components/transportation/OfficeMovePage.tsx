import Link from 'next/link';
import { Locale } from '../../../i18n-config';
import { DictionaryType } from '@/lib/dictionaries';
import { buildLocalizedPath } from '@/lib/localized-paths';
import BookingBanner from '@/components/home/BookingBanner';
import styles from './SmallMovePage.module.scss';

type OfficeMovePageProps = {
  locale: Locale;
  dictionary: DictionaryType['officeMovePage'];
  calculatorDictionary: DictionaryType['homeHero'];
};

export default function OfficeMovePage({
  locale,
  dictionary,
  calculatorDictionary,
}: OfficeMovePageProps) {
  const isRtl = locale === 'he';
  const calculateLink = buildLocalizedPath(locale, 'calculate');

  return (
    <div className={styles.page} dir={isRtl ? 'rtl' : 'ltr'}>
      <BookingBanner locale={locale} dictionary={calculatorDictionary} headingLevel="h2" />
      <section className={styles.hero} aria-labelledby="office-move-title">
        <div className={styles.container}>
          <h1 id="office-move-title" className={styles.title}>
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

      <section
        className={styles.section}
        id={dictionary.advantages.id}
        aria-labelledby="office-move-advantages"
      >
        <div className={styles.container}>
          <h2 id="office-move-advantages" className={styles.sectionTitle}>
            {dictionary.advantages.title}
          </h2>
          {dictionary.advantages.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          <p className={styles.paragraph}>{dictionary.advantages.bulletsTitle}</p>
          <ul className={styles.bulletList}>
            {dictionary.advantages.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.paragraph}>
            <strong>{dictionary.advantages.noteLabel}</strong> {dictionary.advantages.note}
          </p>
        </div>
      </section>

      <section className={styles.section} id={dictionary.pricing.id} aria-labelledby="office-move-pricing">
        <div className={styles.container}>
          <h2 id="office-move-pricing" className={styles.sectionTitle}>
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
                <div className={styles.tableCell} role="cell" dir="ltr">
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

      <section className={styles.section} id={dictionary.planning.id} aria-labelledby="office-move-planning">
        <div className={styles.container}>
          <h2 id="office-move-planning" className={styles.sectionTitle}>
            {dictionary.planning.title}
          </h2>
          {dictionary.planning.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section
        className={styles.section}
        id={dictionary.comparison.id}
        aria-labelledby="office-move-comparison"
      >
        <div className={styles.container}>
          <h2 id="office-move-comparison" className={styles.sectionTitle}>
            {dictionary.comparison.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.comparison.intro}</p>
          <div className={styles.table} role="table" aria-label={dictionary.comparison.tableLabel}>
            <div className={styles.tableRow} role="row">
              {dictionary.comparison.tableHeaders.map((header) => (
                <div
                  key={header}
                  className={`${styles.tableCell} ${styles.tableHeader}`}
                  role="columnheader"
                >
                  {header}
                </div>
              ))}
            </div>
            {dictionary.comparison.rows.map((row, index) => (
              <div key={`${row.criteria}-${index}`} className={styles.tableRow} role="row">
                <div className={styles.tableCell} role="cell">
                  {row.night}
                </div>
                <div className={styles.tableCell} role="cell">
                  {row.day}
                </div>
                <div className={styles.tableCell} role="cell">
                  {row.criteria}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id={dictionary.packing.id} aria-labelledby="office-move-packing">
        <div className={styles.container}>
          <h2 id="office-move-packing" className={styles.sectionTitle}>
            {dictionary.packing.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.packing.intro}</p>
          <ul className={styles.detailList}>
            {dictionary.packing.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id={dictionary.tips.id} aria-labelledby="office-move-tips">
        <div className={styles.container}>
          <h2 id="office-move-tips" className={styles.sectionTitle}>
            {dictionary.tips.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.tips.intro}</p>
          <ul className={styles.detailList}>
            {dictionary.tips.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id={dictionary.faq.id} aria-labelledby="office-move-faq">
        <div className={styles.container}>
          <h2 id="office-move-faq" className={styles.sectionTitle}>
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

      <section className={styles.cta} aria-labelledby="office-move-closing">
        <div className={styles.container}>
          <h2 id="office-move-closing" className={styles.sectionTitle}>
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
