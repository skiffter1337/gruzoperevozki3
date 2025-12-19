'use client';

import Image from 'next/image';
import {useEffect, useMemo, useState, useRef} from 'react';

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
    const [activeRegion, setActiveRegion] = useState<CarrierRegion | null>(dictionary.tabs[0]?.value ?? null);
    const [isMobile, setIsMobile] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);
    const tabsTrackRef = useRef<HTMLDivElement>(null);

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

        const tabCount = dictionary.tabs.length;
        const maxIndex = tabCount - 1;

        setTabIndex((current) => {
            const nextIndex = direction === 'next'
                ? (current >= maxIndex ? 0 : current + 1)
                : (current <= 0 ? maxIndex : current - 1);

            setActiveRegion(dictionary.tabs[nextIndex]?.value ?? null);
            return nextIndex;
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
                </div>

                <div className={styles.tabsShell}>
                    <p className={styles.subtitle}>{dictionary.subtitle}</p>

                    <div className={styles.tabsWrapper}>
                        <div
                            ref={tabsTrackRef}
                            className={styles.tabsTrack}
                            style={{
                                transform: isMobile ? `translateX(${tabOffset})` : 'none',
                                width: isMobile ? `${dictionary.tabs.length * 100}%` : '100%',
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
                                        role="tab"
                                        aria-selected={isActive}
                                        id={`tab-${tab.value}`}
                                        onClick={() => {
                                            setActiveRegion(tab.value);
                                            setTabIndex(index);
                                        }}
                                        style={{
                                            flexShrink: isMobile ? 0 : 1,
                                            flexBasis: isMobile ? '100%' : 'auto'
                                        }}
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
                                <ChevronRightIcon focusable="false" style={{transform: 'rotate(180deg)'}}/>
                            </button>
                            <span className={styles.tabCounter}>
                                {tabIndex + 1} / {dictionary.tabs.length}
                            </span>
                            <button
                                type="button"
                                className={styles.tabNavButton}
                                aria-label={dictionary.nextTabLabel}
                                onClick={() => moveTab('next')}
                            >
                                <ChevronRightIcon focusable="false"/>
                            </button>
                        </div>
                    )}
                </div>

                <div
                    id="carriers-content"
                    className={styles.cardsGrid}
                    role="tabpanel"
                    aria-labelledby={activeRegion ? `tab-${activeRegion}` : undefined}
                >
                    {filteredCarriers.length > 0 ? (
                        filteredCarriers.map((carrier, index) => (
                            <div key={`${carrier.name}-${index}`} className={styles.cardWrapper}>
                                <a
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
                                            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 360px"
                                            style={{objectFit: 'cover'}}
                                        />
                                    </div>
                                </a>
                                <div className={styles.carrierName}>{carrier.name}</div>
                            </div>
                        ))
                    ) : (
                        <p className={styles.noResults}>No carriers found for this region.</p>
                    )}
                </div>
            </div>
        </section>
    );
}