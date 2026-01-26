import Link from 'next/link';
import { Locale } from '../../../i18n-config';
import { DictionaryType } from '@/lib/dictionaries';
import { buildLocalizedPath } from '@/lib/localized-paths';
import BookingBanner from '@/components/home/BookingBanner';
import styles from '@/components/transportation/SmallMovePage.module.scss';

type PackingPageProps = {
  locale: Locale;
  dictionary: DictionaryType['packingPage'];
  calculatorDictionary: DictionaryType['homeHero'];
};

export default function PackingPage({
  locale,
  dictionary,
  calculatorDictionary,
}: PackingPageProps) {
  const isRtl = locale === 'he';
  const calculateLink = buildLocalizedPath(locale, 'calculate');

  return (
    <div className={styles.page} dir={isRtl ? 'rtl' : 'ltr'}>
      <BookingBanner locale={locale} dictionary={calculatorDictionary} headingLevel="h2" />
      <section className={styles.hero} aria-labelledby="packing-title">
        <div className={styles.container}>
          <h1 id="packing-title" className={styles.title}>
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

      <section className={styles.section} id={dictionary.whyChooseUs.id} aria-labelledby="packing-why">
        <div className={styles.container}>
          <h2 id="packing-why" className={styles.sectionTitle}>
            {dictionary.whyChooseUs.title}
          </h2>
          {dictionary.whyChooseUs.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          <h3 className={styles.subsectionTitle}>{dictionary.whyChooseUs.bulletsTitle}</h3>
          <ul className={styles.bulletList}>
            {dictionary.whyChooseUs.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id={dictionary.pricing.id} aria-labelledby="packing-pricing">
        <div className={styles.container}>
          <h2 id="packing-pricing" className={styles.sectionTitle}>
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

      <section className={styles.section} id={dictionary.process.id} aria-labelledby="packing-process">
        <div className={styles.container}>
          <h2 id="packing-process" className={styles.sectionTitle}>
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
          <p className={styles.paragraph}>{dictionary.process.note}</p>
        </div>
      </section>

      <section className={styles.section} id={dictionary.tips.id} aria-labelledby="packing-tips">
        <div className={styles.container}>
          <h2 id="packing-tips" className={styles.sectionTitle}>
            {dictionary.tips.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.tips.intro}</p>
          <ul className={styles.bulletList}>
            {dictionary.tips.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id={dictionary.timing.id} aria-labelledby="packing-timing">
        <div className={styles.container}>
          <h2 id="packing-timing" className={styles.sectionTitle}>
            {dictionary.timing.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.timing.intro}</p>
          <ul className={styles.detailList}>
            {dictionary.timing.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ul>
          <p className={styles.paragraph}>{dictionary.timing.outro}</p>
        </div>
      </section>

      <section className={styles.section} id={dictionary.faq.id} aria-labelledby="packing-faq">
        <div className={styles.container}>
          <h2 id="packing-faq" className={styles.sectionTitle}>
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
          <p className={styles.paragraph}>{dictionary.faq.closingText}</p>
          <Link href={calculateLink} className={styles.ctaButton}>
            {dictionary.faq.buttonLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
