'use client';

import Image from 'next/image';
import {TouchEvent, useEffect, useRef, useState} from 'react';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import {DictionaryType} from '@/lib/dictionaries';
import styles from './RegionsSlider.module.scss';

type RegionsSliderProps = {
    dictionary: DictionaryType['homeRegions'];
};

export default function RegionsSlider({dictionary}: RegionsSliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [slidesPerView, setSlidesPerView] = useState(1);
    const [showArrows, setShowArrows] = useState(false);
    const sliderTrackRef = useRef<HTMLDivElement>(null);

    const totalSlides = dictionary.sliderItems.length;
    const gap = 16;
    const slideWidth = 370;
    const slideStep = slideWidth + gap;

    const totalPages = Math.max(totalSlides - slidesPerView + 1, 1);

    useEffect(() => {
        const updateLayout = () => {
            if (typeof window === 'undefined') return;

            const width = window.innerWidth;
            let newSlidesPerView = 1;
            let newShowArrows = false;

            if (width >= 1200) {
                newSlidesPerView = 3;
                newShowArrows = true;
            } else if (width >= 840) {
                newSlidesPerView = 2;
                newShowArrows = false;
            } else {
                newSlidesPerView = 1;
                newShowArrows = false;
            }

            if (newSlidesPerView !== slidesPerView) {
                setSlidesPerView(newSlidesPerView);
                setCurrentSlide(0);
            }

            if (newShowArrows !== showArrows) {
                setShowArrows(newShowArrows);
            }
        };

        updateLayout();

        const handleResize = () => {
            updateLayout();
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [slidesPerView, showArrows]);

    const goToSlide = (nextIndex: number) => {
        if (!totalSlides) return;

        if (nextIndex < 0) {
            setCurrentSlide(totalPages - 1);
        } else if (nextIndex >= totalPages) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(nextIndex);
        }
    };

    const handleNext = () => {
        if (slidesPerView >= totalSlides) return;

        if (currentSlide < totalPages - 1) {
            goToSlide(currentSlide + 1);
        } else {
            goToSlide(0);
        }
    };

    const handlePrev = () => {
        if (slidesPerView >= totalSlides) return;

        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        } else {
            goToSlide(totalPages - 1);
        }
    };

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        setTouchStart(event.touches[0].clientX);
    };

    const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
        if (touchStart === null) return;
        const deltaX = event.changedTouches[0].clientX - touchStart;

        if (Math.abs(deltaX) > 40) {
            if (deltaX > 0) {
                handlePrev();
            } else {
                handleNext();
            }
        }

        setTouchStart(null);
    };

    const shouldShowArrows = showArrows && totalSlides > slidesPerView;

    return (
        <section className={styles.sliderSection} aria-labelledby="regions-slider-title">
            <div className={styles.container}>
                <div className={styles.sliderHeader}>
                    <h2 id="regions-slider-title" className={styles.sliderTitle}>
                        {dictionary.heading}
                    </h2>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.sliderWrapper}>
                        {shouldShowArrows && (
                            <button
                                type="button"
                                className={`${styles.navButton} ${styles.navButtonLeft}`}
                                aria-label={dictionary.sliderPrevious}
                                onClick={handlePrev}
                            >
                                <ChevronRightIcon focusable="false" />
                            </button>
                        )}

                        <div
                            className={styles.sliderViewport}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div
                                className={styles.sliderTrack}
                                ref={sliderTrackRef}
                                style={{
                                    transform: `translateX(-${currentSlide * slideStep}px)`,
                                    gap: `${gap}px`,
                                }}
                            >
                                {dictionary.sliderItems.map((item, index) => (
                                    <div
                                        key={`${item.title}-${index}`}
                                        className={styles.slide}
                                        aria-label={`${dictionary.sliderItemLabelPrefix} ${item.title}`}
                                    >
                                        <div className={styles.slideImageWrapper}>
                                            <Image
                                                src={item.image || '/images/region-placeholder.svg'}
                                                alt={item.title}
                                                fill
                                                sizes="370px"
                                                className={styles.slideImage}
                                                priority={index < 2}
                                            />
                                            <div className={styles.slideOverlay} aria-hidden="true" />
                                        </div>
                                        <span className={styles.slideTitle}>{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {shouldShowArrows && (
                            <button
                                type="button"
                                className={`${styles.navButton} ${styles.navButtonRight}`}
                                aria-label={dictionary.sliderNext}
                                onClick={handleNext}
                            >
                                <ChevronRightIcon focusable="false" />
                            </button>
                        )}
                    </div>

                    {totalPages > 1 && (
                        <div className={styles.dots} role="tablist" aria-label={dictionary.heading}>
                            {Array.from({length: totalPages}).map((_, index) => (
                                <button
                                    key={`dot-${index}`}
                                    type="button"
                                    className={`${styles.dot} ${currentSlide === index ? styles.dotActive : ''}`.trim()}
                                    aria-label={`${dictionary.sliderItemLabelPrefix} ${index + 1}`}
                                    aria-pressed={currentSlide === index}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
