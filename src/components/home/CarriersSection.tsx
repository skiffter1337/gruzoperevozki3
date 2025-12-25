'use client';

import Image from 'next/image';
import {useEffect, useMemo, useState, useRef, TouchEvent} from 'react';

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
    const tabsWrapperRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);

    // Минимальное расстояние для срабатывания свайпа
    const minSwipeDistance = 50;

    useEffect(() => {
        const updateViewport = () => {
            if (typeof window === 'undefined') return;
            setIsMobile(window.innerWidth < 768);
        };

        updateViewport();
        window.addEventListener('resize', updateViewport);
        return () => window.removeEventListener('resize', updateViewport);
    }, []);

    // Обновляем ширину контейнера при ресайзе
    useEffect(() => {
        if (!tabsWrapperRef.current || !isMobile) return;

        const updateContainerWidth = () => {
            const wrapper = tabsWrapperRef.current;
            if (!wrapper) return;

            const width = wrapper.clientWidth;
            setContainerWidth(width);
        };

        updateContainerWidth();
        window.addEventListener('resize', updateContainerWidth);
        return () => window.removeEventListener('resize', updateContainerWidth);
    }, [isMobile]);

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

    const handleTabClick = (region: CarrierRegion, index: number) => {
        setActiveRegion(region);
        if (isMobile) {
            setTabIndex(index);
        }
    };

    // Обработка начала касания
    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        if (!isMobile) return;
        setTouchEndX(null);
        setTouchStartX(e.targetTouches[0].clientX);
    };

    // Обработка движения касания
    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        if (!isMobile) return;
        setTouchEndX(e.targetTouches[0].clientX);
    };

    // Обработка окончания касания
    const handleTouchEnd = () => {
        if (!touchStartX || !touchEndX || !isMobile) return;

        const distance = touchStartX - touchEndX;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            moveTab('next');
        } else if (isRightSwipe) {
            moveTab('prev');
        }

        // Сброс значений касания
        setTouchStartX(null);
        setTouchEndX(null);
    };

    // Рассчитываем смещение
    const slideWidth = containerWidth;
    const offset = isMobile ? -tabIndex * slideWidth : 0;

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

                    <div
                        className={styles.tabsWrapper}
                        ref={tabsWrapperRef}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className={styles.tabsTrack}
                            style={{
                                transform: isMobile ? `translateX(${offset}px)` : 'none',
                                transition: isMobile ? 'transform 0.3s ease-in-out' : 'none',
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
                                        onClick={() => handleTabClick(tab.value, index)}
                                        style={{flex: `0 0 ${100 / dictionary.tabs.length}%`}}
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

                            <div className={styles.tabDots} role="tablist" aria-label="Выбор региона">
                                {dictionary.tabs.map((_, index) => (
                                    <button
                                        key={`dot-${index}`}
                                        type="button"
                                        className={`${styles.tabDot} ${tabIndex === index ? styles.tabDotActive : ''}`.trim()}
                                        role="tab"
                                        aria-selected={tabIndex === index}
                                        aria-label={`Перейти к табу ${index + 1}`}
                                        onClick={() => {
                                            setTabIndex(index);
                                            setActiveRegion(dictionary.tabs[index]?.value ?? null);
                                        }}
                                    />
                                ))}
                            </div>

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
                                <div className={styles.carrierInfo}>
                                    <div className={styles.carrierName}>{carrier.name}</div>
                                    <ul className={styles.carrierContacts}>
                                        <li>
                                            {carrier.contactInfo.info}
                                        </li>
                                        <li>
                                            {carrier.contactInfo.contacts}
                                        </li>
                                        <li>
                                            {carrier.contactInfo.phoneNumber}
                                        </li>
                                    </ul>
                                </div>
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