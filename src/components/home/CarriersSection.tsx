'use client';

import Image from 'next/image';
import {useEffect, useMemo, useState} from 'react';

import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import {DictionaryType} from '@/lib/dictionaries';
import {Locale} from '../../../i18n-config';

import styles from './CarriersSection.module.scss';

type CarrierRegion = DictionaryType['homeCarriers']['tabs'][number]['value'];

type CarriersSectionProps = {
    locale: Locale;
    dictionary: DictionaryType['homeCarriers'];
};

export default function CarriersSection({dictionary}: CarriersSectionProps) {
    const [activeRegion, setActiveRegion] = useState<CarrierRegion | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        const updateViewport = () => {
            if (typeof window === 'undefined') return;
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile) {
                setTabIndex(0);
            }
        };

        updateViewport();
        window.addEventListener('resize', updateViewport);
        return () => window.removeEventListener('resize', updateViewport);
    }, []);

    const filteredCarriers = useMemo(() => {
        if (!activeRegion) return dictionary.carriers;
        return dictionary.carriers.filter((carrier) => carrier.region === activeRegion);
    }, [activeRegion, dictionary.carriers]);

    const moveTab = (direction: 'next' | 'prev') => {
        if (!isMobile) return;
        const lastIndex = dictionary.tabs.length - 1;
        setTabIndex((current) => {
            if (direction === 'next') {
                return current >= lastIndex ? 0 : current + 1;
            }
            return current <= 0 ? lastIndex : current - 1;
        });
    };

    const tabOffset = isMobile ? `-${tabIndex * 100}%` : '0';

    return (
        <section className={styles.section} aria-labelledby="carriers-title">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 id="carriers-title" className={styles.title}>
                        {dictionary.title}
                    </h2>
                    <p className={styles.subtitle}>{dictionary.subtitle}</p>
                </div>

                <div className={styles.tabsShell}>
                    <div className={styles.tabsWrapper}>
                        <div
                            className={styles.tabsTrack}
                            style={{
                                ['--tab-offset' as string]: tabOffset,
                            }}
                            role="tablist"
                            aria-label={dictionary.subtitle}
                        >
                            {dictionary.tabs.map((tab, index) => {
                                const isActive = activeRegion === tab.value;
                                return (
                                    <button
                                        key={`${tab.value}-${index}`}
                                        type="button"
                                        className={`${styles.tabButton} ${isActive ? styles.tabActive : ''}`.trim()}
                                        aria-pressed={isActive}
                                        onClick={() =>
                                            setActiveRegion((prev) => (prev === tab.value ? null : tab.value))
                                        }
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {isMobile && (
                        <div className={styles.tabNavControls} aria-hidden={!isMobile}>
                            <button
                                type="button"
                                className={styles.tabNavButton}
                                aria-label={dictionary.previousTabLabel}
                                onClick={() => moveTab('prev')}
                            >
                                <ChevronRightIcon focusable="false" />
                            </button>
                            <button
                                type="button"
                                className={styles.tabNavButton}
                                aria-label={dictionary.nextTabLabel}
                                onClick={() => moveTab('next')}
                            >
                                <ChevronRightIcon focusable="false" style={{transform: 'rotate(180deg)'}} />
                            </button>
                        </div>
                    )}
                </div>

                <div className={styles.cardsGrid}>
                    {filteredCarriers.map((carrier, index) => (
                        <a
                            key={`${carrier.name}-${index}`}
                            href={carrier.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.cardLink}
                            aria-label={`${carrier.name} – ${dictionary.cardAriaLabel}`}
                        >
                            <div className={styles.cardImage}>
                                <Image
                                    src={carrier.image}
                                    alt={carrier.name}
                                    fill
                                    priority={index < 2}
                                    sizes="(max-width: 767px) 45vw, (max-width: 1023px) 50vw, 360px"
                                    style={{objectFit: 'cover'}}
                                />
                                <div className={styles.cardOverlay} />
                            </div>
                            <div className={styles.cardContent}>{carrier.name}</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

