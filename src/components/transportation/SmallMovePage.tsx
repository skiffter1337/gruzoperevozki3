import Link from 'next/link';
import { Locale } from '../../../i18n-config';
import { DictionaryType } from '@/lib/dictionaries';
import { buildLocalizedPath } from '@/lib/localized-paths';
import BookingBanner from '@/components/home/BookingBanner';
import styles from './SmallMovePage.module.scss';

type SmallMovePageProps = {
  locale: Locale;
  dictionary: DictionaryType['smallMovePage'];
  calculatorDictionary: DictionaryType['homeHero'];
};

export default function SmallMovePage({
  locale,
  dictionary,
  calculatorDictionary,
}: SmallMovePageProps) {
  const isRtl = locale === 'he';
  const calculateLink = buildLocalizedPath(locale, 'calculate');

  return (
    <div className={styles.page} dir={isRtl ? 'rtl' : 'ltr'}>
      <BookingBanner locale={locale} dictionary={calculatorDictionary} headingLevel="h2" />
      <section className={styles.hero} aria-labelledby="small-move-title">
        <div className={styles.container}>
          <h1 id="small-move-title" className={styles.title}>
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

      <section className={styles.section} aria-labelledby="small-move-comparison">
        <div className={styles.container}>
          <h2 id="small-move-comparison" className={styles.sectionTitle}>
            {dictionary.comparison.title}
          </h2>
          <ul className={styles.bulletList}>
            {dictionary.comparison.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="small-move-cta">
        <div className={styles.container}>
          <h2 id="small-move-cta" className={styles.sectionTitle}>
            {dictionary.cta.title}
          </h2>
          <p className={styles.ctaText}>{dictionary.cta.phoneLabel}</p>
          <p className={styles.ctaText}>{dictionary.cta.formLabel}</p>
          <Link href={calculateLink} className={styles.ctaButton}>
            {dictionary.cta.buttonLabel}
          </Link>
        </div>
      </section>

      <section className={styles.section} id={dictionary.pricing.id} aria-labelledby="small-move-pricing">
        <div className={styles.container}>
          <h2 id="small-move-pricing" className={styles.sectionTitle}>
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

      <section className={styles.section} id={dictionary.definition.id} aria-labelledby="small-move-definition">
        <div className={styles.container}>
          <h2 id="small-move-definition" className={styles.sectionTitle}>
            {dictionary.definition.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.definition.text}</p>
        </div>
      </section>

      <section className={styles.section} id={dictionary.audience.id} aria-labelledby="small-move-audience">
        <div className={styles.container}>
          <h2 id="small-move-audience" className={styles.sectionTitle}>
            {dictionary.audience.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.audience.intro}</p>
          <div className={styles.subsectionList}>
            {dictionary.audience.items.map((item) => (
              <div key={item.title} className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>{item.title}</h3>
                <p className={styles.paragraph}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id={dictionary.priceFactors.id} aria-labelledby="small-move-factors">
        <div className={styles.container}>
          <h2 id="small-move-factors" className={styles.sectionTitle}>
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

      <section className={styles.section} id={dictionary.popularServices.id} aria-labelledby="small-move-services">
        <div className={styles.container}>
          <h2 id="small-move-services" className={styles.sectionTitle}>
            {dictionary.popularServices.title}
          </h2>
          <div className={styles.subsectionList}>
            {dictionary.popularServices.items.map((item) => (
              <div key={item.title} className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>{item.title}</h3>
                <p className={styles.paragraph}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id={dictionary.crane.id} aria-labelledby="small-move-crane">
        <div className={styles.container}>
          <h2 id="small-move-crane" className={styles.sectionTitle}>
            {dictionary.crane.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.crane.intro}</p>
          <ul className={styles.bulletList}>
            {dictionary.crane.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.paragraph}>{dictionary.crane.outro}</p>
        </div>
      </section>

      <section className={styles.section} id={dictionary.cheap.id} aria-labelledby="small-move-cheap">
        <div className={styles.container}>
          <h2 id="small-move-cheap" className={styles.sectionTitle}>
            {dictionary.cheap.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.cheap.intro}</p>
          <ul className={styles.detailList}>
            {dictionary.cheap.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id={dictionary.faq.id} aria-labelledby="small-move-faq">
        <div className={styles.container}>
          <h2 id="small-move-faq" className={styles.sectionTitle}>
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
        className={styles.section}
        id={dictionary.comparisonProcess.id}
        aria-labelledby="small-move-process"
      >
        <div className={styles.container}>
          <h2 id="small-move-process" className={styles.sectionTitle}>
            {dictionary.comparisonProcess.title}
          </h2>
          <ol className={styles.orderedList}>
            {dictionary.comparisonProcess.steps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong> {step.text}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} id={dictionary.findCompany.id} aria-labelledby="small-move-company">
        <div className={styles.container}>
          <h2 id="small-move-company" className={styles.sectionTitle}>
            {dictionary.findCompany.title}
          </h2>
          <p className={styles.paragraph}>{dictionary.findCompany.intro}</p>
          <ul className={styles.detailList}>
            {dictionary.findCompany.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ul>
          <p className={styles.paragraph}>{dictionary.findCompany.closing}</p>
        </div>
      </section>
    </div>
  );
}
