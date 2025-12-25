'use client';

import Image from 'next/image';
import {TouchEvent, useEffect, useMemo, useState} from 'react';
import Link from 'next/link';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import GradientButton from '@/components/gradient-button/GradientButton';
import {DictionaryType} from '@/lib/dictionaries';
import {buildLocalizedPath} from '@/lib/localized-paths';
import {Locale} from '../../../i18n-config';
import styles from './TestimonialsSection.module.scss';

type TestimonialsSectionProps = {
    locale: Locale;
    dictionary: DictionaryType['homeTestimonials'];
};

export default function TestimonialsSection({locale, dictionary}: TestimonialsSectionProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [slidesPerView, setSlidesPerView] = useState(1);
    const [showArrows, setShowArrows] = useState(false);

    const totalSlides = dictionary.sliderItems.length;
    const gap = 16;
    const slideWidth = 370;
    const slideStep = slideWidth + gap;

    const totalPages = Math.max(totalSlides - slidesPerView + 1, 1);

    const contactPath = useMemo(() => buildLocalizedPath(locale, 'contact'), [locale]);

    useEffect(() => {
        const updateLayout = () => {
            if (typeof window === 'undefined') return;

            const width = window.innerWidth;
            let newSlidesPerView = 1;
            let newShowArrows = false;

            if (width >= 1200) {
                newSlidesPerView = 3;
                newShowArrows = true;
            } else if (width >= 1024) {
                newSlidesPerView = 2;
                newShowArrows = false;
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
        <section className={styles.testimonialsSection} aria-labelledby="testimonials-title">
            <div className={styles.container}>
                <h2 id="testimonials-title" className={styles.title}>
                    {dictionary.title}
                </h2>

                <div className={styles.sliderArea}>
                    <div className={styles.sliderWrapper} aria-label={dictionary.sliderAriaLabel}>
                        {shouldShowArrows && (
                            <button
                                type="button"
                                className={`${styles.navButton} ${styles.navButtonLeft}`}
                                aria-label={dictionary.previousSlideLabel}
                                onClick={handlePrev}
                            >
                                <ChevronRightIcon focusable="false"/>
                            </button>
                        )}

                        <div
                            className={styles.sliderViewport}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div
                                className={styles.sliderTrack}
                                style={{
                                    transform: `translateX(-${currentSlide * slideStep}px)`,
                                    gap: `${gap}px`,
                                }}
                            >
                                {dictionary.sliderItems.map((testimonial, index) => (
                                    <Link
                                        key={`${testimonial.name}-${index}`}
                                        href={testimonial.carrierUrl}
                                        className={styles.slide}
                                        aria-label={`${dictionary.cardAriaLabelPrefix} ${testimonial.company}`}
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        prefetch={false}
                                    >
                                        <div className={styles.avatarWrapper}>
                                            <div className={styles.avatarRing}>
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt={`${dictionary.avatarAltPrefix} ${testimonial.name}`}
                                                    className={styles.avatarImage}
                                                    width={120}
                                                    height={120}
                                                />
                                            </div>
                                        </div>

                                        <div className={styles.cardContent}>
                                            <p className={styles.name}>{testimonial.name}</p>
                                            <p className={styles.company}>{testimonial.company}</p>
                                            <div
                                                className={styles.rating}
                                                aria-label={`${testimonial.rating} ${dictionary.ratingLabelSuffix}`}
                                            >
                                                {Array.from({length: 5}).map((_, starIndex) => (
                                                    <span key={`star-${starIndex}`} aria-hidden="true">
                                                        {starIndex < testimonial.rating ? '★' : '☆'}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className={styles.review}>{testimonial.review}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {shouldShowArrows && (
                            <button
                                type="button"
                                className={`${styles.navButton} ${styles.navButtonRight}`}
                                aria-label={dictionary.nextSlideLabel}
                                onClick={handleNext}
                            >
                                <ChevronRightIcon focusable="false"/>
                            </button>
                        )}
                    </div>

                    {totalPages > 1 && (
                        <div className={styles.dots} role="tablist" aria-label={dictionary.sliderAriaLabel}>
                            {Array.from({length: totalPages}).map((_, index) => (
                                <button
                                    key={`dot-${index}`}
                                    type="button"
                                    className={`${styles.dot} ${currentSlide === index ? styles.dotActive : ''}`.trim()}
                                    aria-label={`${dictionary.dotLabelPrefix} ${index + 1}`}
                                    aria-pressed={currentSlide === index}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className={styles.ctaWrapper}>
                    <GradientButton
                        type="button"
                        size="small"
                        ariaLabel={dictionary.ctaLabel}
                        onClick={() => window.location.assign(contactPath)}
                    >
                        {dictionary.ctaLabel}
                    </GradientButton>
                </div>
            </div>
        </section>
    );
}
