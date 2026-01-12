'use client';

import {useState} from 'react';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import CalculatorForm from '@/components/calculate/CalculatorForm';
import {DictionaryType} from '@/lib/dictionaries';
import {buildLocalizedPath} from '@/lib/localized-paths';
import styles from '@/app/[locale]/calculate.module.scss';

type CalculatorPageClientProps = {
    locale: string;
    dictionary: DictionaryType['calculatePage'];
    heroDictionary: DictionaryType['homeHero'];
    homeLabel: string;
    initialValues: {
        from: string;
        to: string;
        date: string;
    };
};

export default function CalculatorPageClient({
                                                 locale,
                                                 dictionary,
                                                 heroDictionary,
                                                 homeLabel,
                                                 initialValues,
                                             }: CalculatorPageClientProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const breadcrumbs = isSubmitted
        ? [
            {
                label: homeLabel,
                href: buildLocalizedPath(locale as "ru" | "he" | "en", 'home'),
            },
            {
                label: dictionary.breadcrumbCurrent,
                href: buildLocalizedPath(locale as "ru" | "he" | "en", 'calculate'),
            },
            {
                label: dictionary.breadcrumbSubmitted,
                current: true,
            },
        ]
        : [
            {
                label: homeLabel,
                href: buildLocalizedPath(locale as "ru" | "he" | "en", 'home'),
            },
            {label: dictionary.breadcrumbCurrent, current: true},
        ];

    return (
        <>
            <header className={styles.header}>
                <div className={styles.breadcrumbsWrapper}>
                    <Breadcrumbs items={breadcrumbs}/>
                </div>
                {!isSubmitted && (
                    <h1 id="calculate-title" className={styles.title}>
                        {dictionary.heroHeading}
                    </h1>
                )}
            </header>

            {!isSubmitted && (<CalculatorForm
                    dictionary={dictionary}
                    heroDictionary={heroDictionary}
                    initialValues={initialValues}
                    onSuccess={() => setIsSubmitted(true)}
                />
            )}


            {isSubmitted && (
                <section className={styles.successCard} aria-live="polite">
                    <p className={styles.successNotice}>{dictionary.submissionSuccessMessage}</p>
                </section>
            )}
        </>
    );
}
