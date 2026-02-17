import Image from 'next/image';
import {DictionaryType} from '@/lib/dictionaries';
import styles from './AboutSection.module.scss';
import {Locale} from "../../../i18n-config";

type AboutSectionProps = {
    dictionary: DictionaryType['homeAbout'];
    locale: Locale;
};

export default function AboutSection({dictionary, locale}: AboutSectionProps) {
    return (
        <section
            id="about-section"
            className={styles.section}
            aria-labelledby="about-title"
            itemScope
            itemType="https://schema.org/AboutPage"
        >
            <div className={styles.innerLeft}/>

            <div
                className={`${styles.innerRight} ${locale === "he" && styles.rtl}`}
            >
                <div className={styles.rightPanel}>
                    <div className={styles.content}>
                        <p className={styles.description} itemProp="description">
                            {dictionary.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.bgImageContainer}>
                <Image
                    src="/images/aboutUs.png"
                    alt={dictionary.imageAlt}
                    width="617"
                    height="792"
                    className={styles.bgImage}
                    priority
                />
            </div>
        </section>
    );
}