import { Locale } from "../../../i18n-config";
import { DictionaryType } from "@/lib/dictionaries";
import BookingBanner from "@/components/home/BookingBanner";
import styles from "./SmallMovePage.module.scss";

type RaananaMovePageProps = {
    locale: Locale;
    dictionary: DictionaryType["raananaMovePage"];
    calculatorDictionary: DictionaryType["homeHero"];
};

export default function RaananaMovePage({
                                            locale,
                                            dictionary,
                                            calculatorDictionary,
                                        }: RaananaMovePageProps) {
    const isRtl = locale === "he";

    return (
        <div className={styles.page} dir={isRtl ? "rtl" : "ltr"}>
            <BookingBanner
                locale={locale}
                dictionary={calculatorDictionary}
                headingLevel="h2"
            />

            <section className={styles.hero} aria-labelledby="raanana-title">
                <div className={styles.container}>
                    <h1 id="raanana-title" className={styles.title}>
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
                id={dictionary.why.id}
                aria-labelledby="raanana-why"
            >
                <div className={styles.container}>
                    <h2 id="raanana-why" className={styles.sectionTitle}>
                        {dictionary.why.title}
                    </h2>

                    {dictionary.why.paragraphs.map((paragraph) => (
                        <p key={paragraph} className={styles.paragraph}>
                            {paragraph}
                        </p>
                    ))}

                    <p className={styles.paragraph}>{dictionary.why.bulletsTitle}</p>

                    <ul className={styles.bulletList}>
                        {dictionary.why.bullets.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <p className={styles.paragraph}>{dictionary.why.note}</p>
                </div>
            </section>

            <section
                className={styles.section}
                id={dictionary.pricing.id}
                aria-labelledby="raanana-pricing"
            >
                <div className={styles.container}>
                    <h2 id="raanana-pricing" className={styles.sectionTitle}>
                        {dictionary.pricing.title}
                    </h2>

                    <p className={styles.paragraph}>{dictionary.pricing.intro}</p>

                    <div
                        className={styles.table}
                        role="table"
                        aria-label={dictionary.pricing.tableLabel}
                    >
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

                        {dictionary.pricing.rows.map((row) => (
                            <div key={row.type} className={styles.tableRow} role="row">
                                <div className={styles.tableCell} role="cell">
                                    {row.type}
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
                id={dictionary.challenges.id}
                aria-labelledby="raanana-challenges"
            >
                <div className={styles.container}>
                    <h2 id="raanana-challenges" className={styles.sectionTitle}>
                        {dictionary.challenges.title}
                    </h2>

                    <p className={styles.paragraph}>{dictionary.challenges.intro}</p>

                    <ol className={styles.orderedList}>
                        {dictionary.challenges.items.map((item) => (
                            <li key={item.title}>
                                <strong>{item.title}</strong> {item.text}
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section
                className={styles.section}
                id={dictionary.smallMoves.id}
                aria-labelledby="raanana-small"
            >
                <div className={styles.container}>
                    <h2 id="raanana-small" className={styles.sectionTitle}>
                        {dictionary.smallMoves.title}
                    </h2>

                    <p className={styles.paragraph}>{dictionary.smallMoves.intro}</p>

                    <ul className={styles.bulletList}>
                        {dictionary.smallMoves.bullets.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section
                className={styles.section}
                id={dictionary.officeMoves.id}
                aria-labelledby="raanana-office"
            >
                <div className={styles.container}>
                    <h2 id="raanana-office" className={styles.sectionTitle}>
                        {dictionary.officeMoves.title}
                    </h2>

                    <p className={styles.paragraph}>{dictionary.officeMoves.intro}</p>

                    <ul className={styles.bulletList}>
                        {dictionary.officeMoves.bullets.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section
                className={styles.section}
                id={dictionary.extraServices.id}
                aria-labelledby="raanana-extra"
            >
                <div className={styles.container}>
                    <h2 id="raanana-extra" className={styles.sectionTitle}>
                        {dictionary.extraServices.title}
                    </h2>

                    <p className={styles.paragraph}>{dictionary.extraServices.intro}</p>

                    <ol className={styles.orderedList}>
                        {dictionary.extraServices.items.map((item) => (
                            <li key={item.title}>
                                <strong>{item.title}</strong> {item.text}
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section
                className={styles.section}
                id={dictionary.faq.id}
                aria-labelledby="raanana-faq"
            >
                <div className={styles.container}>
                    <h2 id="raanana-faq" className={styles.sectionTitle}>
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

            <section className={styles.section} aria-label="closing">
                <div className={styles.container}>
                    <p className={styles.paragraph}>{dictionary.closing.text}</p>
                </div>
            </section>
        </div>
    );
}
