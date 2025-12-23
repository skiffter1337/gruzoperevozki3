'use client';

import Image from 'next/image';
import {useEffect, useMemo, useState, TouchEvent} from 'react';

import {DictionaryType} from '@/lib/dictionaries';

import styles from './WhyUsSection.module.scss';

type WhyUsSectionProps = {
    dictionary: DictionaryType['homeWhyUs'];
};

const slideWidth = 370;
const slideGap = 16;

const ArrowSvg = ({className}: {className?: string}) => (
    <svg
        className={className}
        width="238"
        height="186"
        viewBox="0 0 238 186"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        focusable="false"
    >
        <path
            d="M10 14C42 50 107 66 153 90C198 114 220 143 225 176"
            stroke="#2A2E89"
            strokeWidth="6"
            strokeLinecap="round"
        />
        <path
            d="M230.741 170.014C232.831 172.661 232.386 176.408 229.739 178.498L196.953 204.709C194.306 206.799 190.559 206.354 188.469 203.707C186.379 201.06 186.824 197.313 189.471 195.223L217.57 172.752L195.099 144.653C193.009 142.006 193.454 138.259 196.101 136.169C198.748 134.079 202.495 134.524 204.585 137.171L230.741 170.014Z"
            fill="#2A2E89"
        />
    </svg>
);

export default function WhyUsSection({dictionary}: WhyUsSectionProps) {
    const [isSlider, setIsSlider] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);

    const totalSlides = dictionary.cards.length;
    const sliderStep = slideWidth + slideGap;
    const cards = useMemo(() => dictionary.cards, [dictionary.cards]);

    const activeSlide = useMemo(() => {
        if (!totalSlides) return 0;
        return Math.min(currentSlide, totalSlides - 1);
    }, [currentSlide, totalSlides]);

    const sliderOffset = -(activeSlide * sliderStep);

    useEffect(() => {
        const updateLayout = () => {
            if (typeof window === 'undefined') return;
            setIsSlider(window.innerWidth < 1024);
        };

        updateLayout();
        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout);
    }, []);

    const goToSlide = (index: number) => {
        if (!totalSlides) return;
        if (index < 0) {
            setCurrentSlide(totalSlides - 1);
        } else if (index >= totalSlides) {
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
                            <ArrowSvg className={`${styles.arrow} ${styles.arrowLeft}`} />
                            <ArrowSvg className={`${styles.arrow} ${styles.arrowRight}`} />
                        </div>
                    )}
                </div>

                {isSlider ? (
                    <div className={styles.slider}>
                        <div
                            className={styles.sliderViewport}
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
                                        itemProp="itemListElement"
                                        itemScope
                                        itemType="https://schema.org/ListItem"
                                    >
                                        <meta itemProp="position" content={`${index + 1}`} />
                                        <div className={styles.iconWrapper}>
                                            <Image
                                                src={`/images/why-us/${card.icon}`}
                                                alt={`${dictionary.iconAltPrefix} ${card.title}`}
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                        <p className={styles.cardText} itemProp="name">
                                            {card.title}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <div className={styles.dots} role="tablist" aria-label={dictionary.sliderAriaLabel}>
                            {cards.map((card, index) => (
                                <button
                                    key={`dot-${card.title}-${index}`}
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
                                <div className={styles.iconWrapper}>
                                    <Image
                                        src={`/images/why-us/${cards[0].icon}`}
                                        alt={`${dictionary.iconAltPrefix} ${cards[0].title}`}
                                        width={80}
                                        height={80}
                                    />
                                </div>
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
