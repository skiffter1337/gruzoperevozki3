import Image from 'next/image';
import {DictionaryType} from '@/lib/dictionaries';
import styles from './AboutSection.module.scss';

type AboutSectionProps = {
    dictionary: DictionaryType['homeAbout'];
};

export default function AboutSection({dictionary}: AboutSectionProps) {
    return (
        <section
            id="about-section"
            className={styles.section}
            aria-labelledby="about-title"
            itemScope
            itemType="https://schema.org/AboutPage"
        >
            <div className={styles.innerLeft} />

            <div className={styles.innerRight}>
                <div className={styles.rightPanel}>
                    <div className={styles.content}>
                        <h2 id="about-title" className={styles.title} itemProp="headline">
                            {dictionary.title}
                        </h2>
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