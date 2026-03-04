import Link from 'next/link';
import { Locale } from '../../../i18n-config';
import { DictionaryType } from '@/lib/dictionaries';
import { buildLocalizedPath } from '@/lib/localized-paths';
import BookingBanner from '@/components/home/BookingBanner';
import styles from './SmallMovePage.module.scss';

type HouseMovePageProps = {
  locale: Locale;
  dictionary: DictionaryType['houseMovePage'];
  calculatorDictionary: DictionaryType['homeHero'];
};

export default function HouseMovePage({
  locale,
  dictionary,
  calculatorDictionary,
}: HouseMovePageProps) {
  const isRtl = locale === 'he';
  const calculateLink = buildLocalizedPath(locale, 'calculate');

  return (
    <div className={styles.page} dir={isRtl ? 'rtl' : 'ltr'}>
      <BookingBanner locale={locale} dictionary={calculatorDictionary} headingLevel="h2" />
      <section className={styles.hero} aria-labelledby="house-move-title">
        <div className={styles.container}>
          <h1 id="house-move-title" className={styles.title}>
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

      <section className={styles.section} id={dictionary.comparison.id} aria-labelledby="house-move-comparison">
        <div className={styles.container}>
          <h2 id="house-move-comparison" className={styles.sectionTitle}>
            {dictionary.comparison.title}
          </h2>
          {dictionary.comparison.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          <ul className={styles.bulletList}>
            {dictionary.comparison.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id={dictionary.process.id} aria-labelledby="house-move-process">
        <div className={styles.container}>
          <h2 id="house-move-process" className={styles.sectionTitle}>
            {dictionary.process.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.process.intro}</p>
          <ol className={styles.orderedList}>
            {dictionary.process.steps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong> {step.text}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} id={dictionary.pricing.id} aria-labelledby="house-move-pricing">
        <div className={styles.container}>
          <h2 id="house-move-pricing" className={styles.sectionTitle}>
            {dictionary.pricing.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.pricing.intro}</p>
          <p className={styles.paragraph}>{dictionary.pricing.note}</p>

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

      <section className={styles.section} id={dictionary.priceFactors.id} aria-labelledby="house-move-factors">
        <div className={styles.container}>
          <h2 id="house-move-factors" className={styles.sectionTitle}>
            {dictionary.priceFactors.title}
          </h2>
          <ul className={styles.detailList}>
            {dictionary.priceFactors.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id={dictionary.solutions.id} aria-labelledby="house-move-solutions">
        <div className={styles.container}>
          <h2 id="house-move-solutions" className={styles.sectionTitle}>
            {dictionary.solutions.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.solutions.intro}</p>
          <ul className={styles.detailList}>
            {dictionary.solutions.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id={dictionary.tips.id} aria-labelledby="house-move-tips">
        <div className={styles.container}>
          <h2 id="house-move-tips" className={styles.sectionTitle}>
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

      <section className={styles.section} id={dictionary.faq.id} aria-labelledby="house-move-faq">
        <div className={styles.container}>
          <h2 id="house-move-faq" className={styles.sectionTitle}>
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

      <section
        className={styles.cta}
        id={dictionary.closing.id}
        aria-labelledby="house-move-closing"
      >
        <div className={styles.container}>
          <h2 id="house-move-closing" className={styles.sectionTitle}>
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
