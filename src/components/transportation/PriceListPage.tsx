import { Locale } from '../../../i18n-config';
import { DictionaryType } from '@/lib/dictionaries';
import styles from './SmallMovePage.module.scss';
import {buildLocalizedPath} from "@/lib/localized-paths";
import BookingBanner from "@/components/home/BookingBanner";

type PriceListPageProps = {
  locale: Locale;
  dictionary: DictionaryType['priceListPage'];
  calculatorDictionary: DictionaryType['homeHero'];
};

export default function PriceListPage({ locale, dictionary, calculatorDictionary }: PriceListPageProps) {
  const isRtl = locale === 'he';

  const renderTable = (
    tableLabel: string,
    headers: string[],
    rows: { service: string; priceRange: string; notes: string }[],
  ) => (
    <div className={styles.table} role="table" aria-label={tableLabel}>
      <div className={styles.tableRow} role="row">
        {headers.map((header) => (
          <div key={header} className={`${styles.tableCell} ${styles.tableHeader}`} role="columnheader">
            {header}
          </div>
        ))}
      </div>
      {rows.map((row, index) => (
        <div key={`${row.service}-${index}`} className={styles.tableRow} role="row">
          <div className={styles.tableCell} role="cell">
            {row.service}
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
  );

  return (
    <div className={styles.page} dir={isRtl ? 'rtl' : 'ltr'}>
            <BookingBanner locale={locale} dictionary={calculatorDictionary} headingLevel="h2" />
      <section className={styles.hero} aria-labelledby="price-list-title">
        <div className={styles.container}>
          <h1 id="price-list-title" className={styles.title}>
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

      <section className={styles.section} id={dictionary.advantages.id} aria-labelledby="price-list-advantages">
        <div className={styles.container}>
          <h2 id="price-list-advantages" className={styles.sectionTitle}>
            {dictionary.advantages.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.advantages.intro}</p>
          <ul className={styles.bulletList}>
            {dictionary.advantages.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id={dictionary.calculator.id} aria-labelledby="price-list-calculator">
        <div className={styles.container}>
          <h2 id="price-list-calculator" className={styles.sectionTitle}>
            {dictionary.calculator.title}
          </h2>
          {dictionary.calculator.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section
        className={styles.section}
        id={dictionary.apartmentPricing.id}
        aria-labelledby="price-list-apartment-pricing"
      >
        <div className={styles.container}>
          <h2 id="price-list-apartment-pricing" className={styles.sectionTitle}>
            {dictionary.apartmentPricing.title}
          </h2>
          {dictionary.apartmentPricing.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          {renderTable(
            dictionary.apartmentPricing.tableLabel,
            dictionary.apartmentPricing.tableHeaders,
            dictionary.apartmentPricing.rows,
          )}
        </div>
      </section>

      <section
        className={styles.section}
        id={dictionary.smallMovePricing.id}
        aria-labelledby="price-list-small-move-pricing"
      >
        <div className={styles.container}>
          <h2 id="price-list-small-move-pricing" className={styles.sectionTitle}>
            {dictionary.smallMovePricing.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.smallMovePricing.intro}</p>
          {renderTable(
            dictionary.smallMovePricing.tableLabel,
            dictionary.smallMovePricing.tableHeaders,
            dictionary.smallMovePricing.rows,
          )}
        </div>
      </section>

      <section
        className={styles.section}
        id={dictionary.singleItemsPricing.id}
        aria-labelledby="price-list-single-items"
      >
        <div className={styles.container}>
          <h2 id="price-list-single-items" className={styles.sectionTitle}>
            {dictionary.singleItemsPricing.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.singleItemsPricing.intro}</p>
          {renderTable(
            dictionary.singleItemsPricing.tableLabel,
            dictionary.singleItemsPricing.tableHeaders,
            dictionary.singleItemsPricing.rows,
          )}
        </div>
      </section>

      <section className={styles.section} id={dictionary.officePricing.id} aria-labelledby="price-list-office">
        <div className={styles.container}>
          <h2 id="price-list-office" className={styles.sectionTitle}>
            {dictionary.officePricing.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.officePricing.intro}</p>
          {renderTable(
            dictionary.officePricing.tableLabel,
            dictionary.officePricing.tableHeaders,
            dictionary.officePricing.rows,
          )}
        </div>
      </section>

      <section
        className={styles.section}
        id={dictionary.furniturePricing.id}
        aria-labelledby="price-list-furniture"
      >
        <div className={styles.container}>
          <h2 id="price-list-furniture" className={styles.sectionTitle}>
            {dictionary.furniturePricing.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.furniturePricing.intro}</p>
          {renderTable(
            dictionary.furniturePricing.tableLabel,
            dictionary.furniturePricing.tableHeaders,
            dictionary.furniturePricing.rows,
          )}
        </div>
      </section>

      <section
        className={styles.section}
        id={dictionary.studentPricing.id}
        aria-labelledby="price-list-students"
      >
        <div className={styles.container}>
          <h2 id="price-list-students" className={styles.sectionTitle}>
            {dictionary.studentPricing.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.studentPricing.intro}</p>
          {renderTable(
            dictionary.studentPricing.tableLabel,
            dictionary.studentPricing.tableHeaders,
            dictionary.studentPricing.rows,
          )}
        </div>
      </section>

      <section
        className={styles.section}
        id={dictionary.specialPricing.id}
        aria-labelledby="price-list-special"
      >
        <div className={styles.container}>
          <h2 id="price-list-special" className={styles.sectionTitle}>
            {dictionary.specialPricing.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.specialPricing.intro}</p>
          {renderTable(
            dictionary.specialPricing.tableLabel,
            dictionary.specialPricing.tableHeaders,
            dictionary.specialPricing.rows,
          )}
        </div>
      </section>

      <section
        className={styles.section}
        id={dictionary.calculatorBestPrice.id}
        aria-labelledby="price-list-best-price"
      >
        <div className={styles.container}>
          <h2 id="price-list-best-price" className={styles.sectionTitle}>
            {dictionary.calculatorBestPrice.title}
          </h2>
          {dictionary.calculatorBestPrice.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          <ol className={styles.orderedList}>
            {dictionary.calculatorBestPrice.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <h3 className={styles.subsectionTitle}>{dictionary.calculatorBestPrice.factorsTitle}</h3>
          <ul className={styles.detailList}>
            {dictionary.calculatorBestPrice.factors.map((factor) => (
              <li key={factor}>{factor}</li>
            ))}
          </ul>
          <p className={styles.paragraph}>{dictionary.calculatorBestPrice.closing}</p>
          <p className={styles.paragraph}>{dictionary.calculatorBestPrice.cta}</p>
        </div>
      </section>
    </div>
  );
}
