'use client';

import Image from 'next/image';
import {useEffect, useMemo, useRef, useState, TouchEvent} from 'react';

import {DictionaryType} from '@/lib/dictionaries';
import {Locale} from '../../../i18n-config';

import styles from './RegionAdvantagesSection.module.scss';

type RegionAdvantagesSectionProps = {
    locale: Locale;
    title: string;
    dictionary: Pick<DictionaryType['homeWhyUs'], 'sliderAriaLabel' | 'dotLabelPrefix' | 'iconAltPrefix'>;
    cards: DictionaryType['homeWhyUs']['cards'];
};

const slideGap = 16;
const maxCards = 6;

export default function RegionAdvantagesSection({locale, title, dictionary, cards}: RegionAdvantagesSectionProps) {
    const [isSlider, setIsSlider] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const visibleCards = useMemo(() => cards.slice(0, maxCards), [cards]);
    const totalSlides = visibleCards.length;

    const slideWidth = useMemo(() => {
        if (!containerWidth || !slidesPerView) return 320;
        return (containerWidth - (slidesPerView - 1) * slideGap) / slidesPerView;
    }, [containerWidth, slidesPerView]);

    const totalPages = useMemo(() => Math.max(totalSlides - slidesPerView + 1, 1), [slidesPerView, totalSlides]);
    const activeSlide = useMemo(() => Math.min(currentSlide, totalPages - 1), [currentSlide, totalPages]);
    const sliderStep = slideWidth + slideGap;
    const sliderOffset = -(activeSlide * sliderStep);

    useEffect(() => {
        const updateLayout = () => {
            if (typeof window === 'undefined') return;

            const width = window.innerWidth;

            if (width < 1024) {
                setIsSlider(true);
                setSlidesPerView(width >= 768 ? 2 : 1);
            } else {
                setIsSlider(false);
                setSlidesPerView(3);
            }

            if (containerRef.current) {
                const style = window.getComputedStyle(containerRef.current);
                const paddingLeft = parseInt(style.paddingLeft) || 0;
                const paddingRight = parseInt(style.paddingRight) || 0;
                const availableWidth = containerRef.current.clientWidth - paddingLeft - paddingRight;
                setContainerWidth(availableWidth);
            }
        };

        updateLayout();
        window.addEventListener('resize', updateLayout);
        window.addEventListener('load', updateLayout);

        return () => {
            window.removeEventListener('resize', updateLayout);
            window.removeEventListener('load', updateLayout);
        };
    }, []);

    const goToSlide = (index: number) => {
        if (!totalPages) return;
        if (index < 0) {
            setCurrentSlide(totalPages - 1);
        } else if (index >= totalPages) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(index);
        }
    };

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        if (!isSlider) return;
        setTouchEndX(null);
        setTouchStartX(event.targetTouches[0].clientX);
    };

    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
        if (!isSlider) return;
        setTouchEndX(event.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!isSlider || touchStartX === null || touchEndX === null) return;

        const distance = touchStartX - touchEndX;
        const minSwipeDistance = 50;

        if (distance > minSwipeDistance) {
            goToSlide(currentSlide + 1);
        } else if (distance < -minSwipeDistance) {
            goToSlide(currentSlide - 1);
        }

        setTouchStartX(null);
        setTouchEndX(null);
    };

    return (
        <section className={styles.section} aria-labelledby="region-advantages-title">
            <div className={styles.container} ref={containerRef}>
                <h2 id="region-advantages-title" className={styles.title}>
                    {title}
                </h2>

                {isSlider ? (
                    <div className={styles.sliderWrapper} dir={locale === 'he' ? 'ltr' : undefined}>
                        <div
                            className={styles.sliderViewport}
                            style={{width: `${containerWidth}px`}}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            role="group"
                            aria-label={dictionary.sliderAriaLabel}
                        >
                            <div
                                className={styles.sliderTrack}
                                style={{
                                    transform: `translateX(${sliderOffset}px)`,
                                    gap: `${slideGap}px`,
                                }}
                            >
                                {visibleCards.map((card, index) => (
                                    <article
                                        key={`${card.title}-${index}`}
                                        className={styles.card}
                                        style={{
                                            width: `${slideWidth}px`,
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Image
                                            src={`/images/why-us/${card.icon}`}
                                            alt={`${dictionary.iconAltPrefix} ${card.title}`}
                                            width={80}
                                            height={80}
                                            className={styles.cardIcon}
                                        />
                                        <p className={styles.cardText}>{card.title}</p>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <div className={styles.dots} role="tablist" aria-label={dictionary.sliderAriaLabel}>
                            {Array.from({length: totalPages}).map((_, index) => (
                                <button
                                    key={`dot-${index}`}
                                    type="button"
                                    className={`${styles.dot} ${activeSlide === index ? styles.dotActive : ''}`.trim()}
                                    aria-label={`${dictionary.dotLabelPrefix} ${index + 1}`}
                                    aria-selected={activeSlide === index}
                                    role="tab"
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={styles.grid} role="list" aria-label={dictionary.sliderAriaLabel}>
                        {visibleCards.map((card, index) => (
                            <article key={`${card.title}-${index}`} className={styles.card} role="listitem">
                                <Image
                                    src={`/images/why-us/${card.icon}`}
                                    alt={`${dictionary.iconAltPrefix} ${card.title}`}
                                    width={80}
                                    height={80}
                                    className={styles.cardIcon}
                                />
                                <p className={styles.cardText}>{card.title}</p>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
