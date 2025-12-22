import Image from 'next/image';

import { DictionaryType } from '@/lib/dictionaries';

import styles from './AboutSection.module.scss';

type AboutSectionProps = {
    dictionary: DictionaryType['homeAbout'];
};

export default function AboutSection({ dictionary }: AboutSectionProps) {
    return (
        <section className={styles.section} aria-labelledby="about-title">
            <div className={styles.inner}>
                <div className={styles.leftPanel}>
                    <div className={styles.imageFrame}>
                        <Image
                            src="/images/about-loader.svg"
                            alt={dictionary.imageAlt}
                            fill
                            priority
                            sizes="(max-width: 767px) 80vw, (max-width: 1199px) 45vw, 520px"
                        />
                    </div>
                </div>

                <div className={styles.rightPanel}>
                    <div className={styles.content}>
                        <h2 id="about-title" className={styles.title}>
                            {dictionary.title}
                        </h2>
                        <p className={styles.description}>{dictionary.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
