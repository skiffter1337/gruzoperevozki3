import Link from 'next/link';
import { Locale } from '../../../i18n-config';
import { DictionaryType } from '@/lib/dictionaries';
import { buildLocalizedPath } from '@/lib/localized-paths';
import BookingBanner from '@/components/home/BookingBanner';
import styles from '@/components/transportation/SmallMovePage.module.scss';

type StoragePageProps = {
  locale: Locale;
  dictionary: DictionaryType['storagePage'];
  calculatorDictionary: DictionaryType['homeHero'];
};

export default function StoragePage({
  locale,
  dictionary,
  calculatorDictionary,
}: StoragePageProps) {
  const isRtl = locale === 'he';
  const calculateLink = buildLocalizedPath(locale, 'calculate');

  return (
    <div className={styles.page} dir={isRtl ? 'rtl' : 'ltr'}>
      <BookingBanner locale={locale} dictionary={calculatorDictionary} headingLevel="h2" />

      <section className={styles.hero} aria-labelledby="storage-title">
        <div className={styles.container}>
          <h1 id="storage-title" className={styles.title}>
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
        id={dictionary.whyChooseUs.id}
        aria-labelledby="storage-why"
      >
        <div className={styles.container}>
          <h2 id="storage-why" className={styles.sectionTitle}>
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
          <p className={styles.paragraph}>{dictionary.whyChooseUs.notice}</p>
        </div>
      </section>

      <section
        className={styles.section}
        id={dictionary.whenUse.id}
        aria-labelledby="storage-when"
      >
        <div className={styles.container}>
          <h2 id="storage-when" className={styles.sectionTitle}>
            {dictionary.whenUse.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.whenUse.intro}</p>
          <ol className={styles.orderedList}>
            {dictionary.whenUse.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className={styles.section}
        id={dictionary.pricing.id}
        aria-labelledby="storage-pricing"
      >
        <div className={styles.container}>
          <h2 id="storage-pricing" className={styles.sectionTitle}>
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
                  {row.item}
                </div>
                <div className={styles.tableCell} role="cell">
                  {row.priceRange}
                </div>
                <div className={styles.tableCell} role="cell">
                  {row.notes}
                </div>
              </div>
            ))}
          </div>

          <p className={styles.paragraph}>{dictionary.pricing.afterTable}</p>
        </div>
      </section>

      <section
        className={styles.section}
        id={dictionary.chooseStorage.id}
        aria-labelledby="storage-choose"
      >
        <div className={styles.container}>
          <h2 id="storage-choose" className={styles.sectionTitle}>
            {dictionary.chooseStorage.title}
          </h2>
          <ul className={styles.bulletList}>
            {dictionary.chooseStorage.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className={styles.section}
        id={dictionary.duration.id}
        aria-labelledby="storage-duration"
      >
        <div className={styles.container}>
          <h2 id="storage-duration" className={styles.sectionTitle}>
            {dictionary.duration.title}
          </h2>
          <ul className={styles.detailList}>
            {dictionary.duration.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id={dictionary.tips.id} aria-labelledby="storage-tips">
        <div className={styles.container}>
          <h2 id="storage-tips" className={styles.sectionTitle}>
            {dictionary.tips.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.tips.intro}</p>
          <ol className={styles.orderedList}>
            {dictionary.tips.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} id={dictionary.faq.id} aria-labelledby="storage-faq">
        <div className={styles.container}>
          <h2 id="storage-faq" className={styles.sectionTitle}>
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
