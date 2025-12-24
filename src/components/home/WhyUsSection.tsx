'use client';

import Image from 'next/image';
import {useEffect, useMemo, useState, TouchEvent} from 'react';

import {DictionaryType} from '@/lib/dictionaries';
import {Locale} from '../../../i18n-config';

import styles from './WhyUsSection.module.scss';
import {ArrowLeft} from "@/components/icons/ArrowLeft";
import {ArrowRight} from "@/components/icons/ArrowRight";

type WhyUsSectionProps = {
    dictionary: DictionaryType['homeWhyUs'];
    locale: Locale;
};

const slideGap = 16;

export default function WhyUsSection({dictionary, locale}: WhyUsSectionProps) {
    const [isSlider, setIsSlider] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    const totalSlides = dictionary.cards.length;
    const cards = useMemo(() => dictionary.cards, [dictionary.cards]);

    // Рассчитываем ширину слайда на основе ширины контейнера и количества слайдов
    const slideWidth = useMemo(() => {
        if (!containerWidth || !slidesPerView) return 320;
        return (containerWidth - (slidesPerView - 1) * slideGap) / slidesPerView;
    }, [containerWidth, slidesPerView]);

    const totalPages = useMemo(() => Math.max(totalSlides - slidesPerView + 1, 1), [slidesPerView, totalSlides]);

    const activeSlide = useMemo(() => {
        if (!totalPages) return 0;
        return Math.min(currentSlide, totalPages - 1);
    }, [currentSlide, totalPages]);

    const sliderStep = slideWidth + slideGap;
    const sliderOffset = -(activeSlide * sliderStep);

    useEffect(() => {
        const updateLayout = () => {
            if (typeof window === 'undefined') return;

            const width = window.innerWidth;

            if (width < 1024) {
                setIsSlider(true);

                if (width >= 768) {
                    setSlidesPerView(2);
                } else {
                    setSlidesPerView(1);
                }
            } else {
                setIsSlider(false);
                setSlidesPerView(1);
            }

            const container = document.querySelector(`.${styles.container}`) as HTMLElement;
            if (container) {
                const style = window.getComputedStyle(container);
                const paddingLeft = parseInt(style.paddingLeft) || 0;
                const paddingRight = parseInt(style.paddingRight) || 0;
                const availableWidth = container.clientWidth - paddingLeft - paddingRight;
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

    const handleNext = () => goToSlide(currentSlide + 1);
    const handlePrev = () => goToSlide(currentSlide - 1);

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
            handleNext();
        } else if (distance < -minSwipeDistance) {
            handlePrev();
        }

        setTouchStartX(null);
        setTouchEndX(null);
    };

    return (
        <section
            className={styles.section}
            aria-labelledby="why-us-title"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2 id="why-us-title" className={styles.title} itemProp="name">
                        {dictionary.title}
                    </h2>
                    {!isSlider && (
                        <div className={styles.headingArrows} aria-hidden>
                            <ArrowLeft />
                            <ArrowRight />
                        </div>
                    )}
                </div>

                {isSlider ? (
                    <div className={styles.sliderWrapper} dir={locale === 'he' ? 'ltr' : undefined}>
                        <div
                            className={styles.sliderViewport}
                            style={{ width: `${containerWidth}px` }}
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
                                {cards.map((card, index) => (
                                    <article
                                        key={`${card.title}-${index}`}
                                        className={styles.card}
                                        style={{
                                            width: `${slideWidth}px`,
                                            flexShrink: 0
                                        }}
                                        itemProp="itemListElement"
                                        itemScope
                                        itemType="https://schema.org/ListItem"
                                    >
                                        <meta itemProp="position" content={`${index + 1}`} />
                                        <Image
                                            src={`/images/why-us/${card.icon}`}
                                            alt={`${dictionary.iconAltPrefix} ${card.title}`}
                                            width={80}
                                            height={80}
                                            className={styles.cardIcon}
                                        />
                                        <p className={styles.cardText} itemProp="name">
                                            {card.title}
                                        </p>
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
                    <div className={styles.desktopLayout} role="list" aria-label={dictionary.sliderAriaLabel}>
                        {cards[0] && (
                            <article
                                className={`${styles.card} ${styles.cardPrimary}`.trim()}
                                role="listitem"
                                itemProp="itemListElement"
                                itemScope
                                itemType="https://schema.org/ListItem"
                            >
                                <meta itemProp="position" content="1" />
                                <Image
                                    src={`/images/why-us/${cards[0].icon}`}
                                    alt={`${dictionary.iconAltPrefix} ${cards[0].title}`}
                                    width={80}
                                    height={80}
                                    className={styles.cardIcon}
                                />
                                <p className={styles.cardText} itemProp="name">
                                    {cards[0].title}
                                </p>
                            </article>
                        )}

                        <div className={styles.grid}>
                            {cards.slice(1).map((card, index) => (
                                <article
                                    key={`${card.title}-${index + 1}`}
                                    className={styles.card}
                                    role="listitem"
                                    itemProp="itemListElement"
                                    itemScope
                                    itemType="https://schema.org/ListItem"
                                >
                                    <meta itemProp="position" content={`${index + 2}`} />
                                    <div className={styles.iconWrapper}>
                                        <Image
                                            src={`/images/why-us/${card.icon}`}
                                            alt={`${dictionary.iconAltPrefix} ${card.title}`}
                                            width={80}
                                            height={80}
                                            className={styles.cardIcon}
                                        />
                                    </div>
                                    <p className={styles.cardText} itemProp="name">
                                        {card.title}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}