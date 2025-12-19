'use client';

import Image, {StaticImageData} from 'next/image';
import {TouchEvent, useEffect, useMemo, useRef, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import GradientButton from '@/components/gradient-button/GradientButton';
import {DictionaryType} from '@/lib/dictionaries';
import {buildLocalizedPath} from '@/lib/localized-paths';
import {Locale} from '../../../i18n-config';
import craneImage from '@/assets/images/crane.png';
import transportImage from '@/assets/images/transport.png';
import furnitureImage from '@/assets/images/furniture.png';
import flatImage from '@/assets/images/flat.png';
import styles from './ServicesSlider.module.scss';

type ServicesSliderProps = {
    locale: Locale;
    dictionary: DictionaryType['homeHero'];
};

export default function ServicesSlider({locale, dictionary}: ServicesSliderProps) {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [slidesPerView, setSlidesPerView] = useState(1);
    const [showArrows, setShowArrows] = useState(false);
    const sliderTrackRef = useRef<HTMLDivElement>(null);

    const sliderBasePath = useMemo(() => buildLocalizedPath(locale, 'services'), [locale]);
    const totalSlides = dictionary.sliderItems.length;
    const gap = 16;

    // Рассчитываем общее количество "страниц" (пакетов слайдов)
    const totalPages = Math.max(totalSlides - slidesPerView + 1, 1);

    const slideImages: Record<string, StaticImageData> = {
        crane: craneImage,
        transport: transportImage,
        furniture: furnitureImage,
        flat: flatImage,
    };

    // Определяем количество видимых слайдов в зависимости от ширины экрана
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

    // Ширина слайда фиксированная - 370px
    const slideWidth = 370;
    const slideStep = slideWidth + gap;

    // Циклическая навигация
    const goToSlide = (nextIndex: number) => {
        if (!totalSlides) return;

        // Для циклической навигации
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

    // Проверяем, нужно ли показывать стрелки
    const shouldShowArrows = showArrows && totalSlides > slidesPerView;

    return (
        <section className={styles.sliderSection} aria-labelledby="services-slider-title">
            <div className={styles.container}>
                <div className={styles.sliderHeader}>
                    <h2 id="services-slider-title" className={styles.sliderTitle}>
                        {dictionary.sliderHeading}
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
                                ref={sliderTrackRef}
                                style={{
                                    transform: `translateX(-${currentSlide * slideStep}px)`,
                                    gap: `${gap}px`,
                                }}
                            >
                                {dictionary.sliderItems.map((item) => {
                                    const image = slideImages[item.image];

                                    return (
                                        <Link
                                            key={item.slug}
                                            href={`${sliderBasePath}/${item.slug}`}
                                            className={styles.slide}
                                            aria-label={`${dictionary.sliderItemLabelPrefix} ${item.title}`}
                                            prefetch={false}
                                        >
                                            <span className={styles.slideTitle}>{item.title}</span>

                                            {image && (
                                                <Image
                                                    src={image}
                                                    alt={item.title}
                                                    className={styles.slideImage}
                                                    sizes="370px"
                                                    width={370}
                                                    height={370}
                                                />
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {shouldShowArrows && (
                            <button
                                type="button"
                                className={`${styles.navButton} ${styles.navButtonRight}`}
                                aria-label={dictionary.sliderNext}
                                onClick={handleNext}
                            >
                                <ChevronRightIcon focusable="false"/>
                            </button>
                        )}
                    </div>

                    {totalPages > 1 && (
                        <div className={styles.dots} role="tablist" aria-label={dictionary.sliderHeading}>
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

                <div className={styles.sliderCta}>
                    <GradientButton
                        type="button"
                        size="small"
                        ariaLabel={dictionary.sliderCta}
                        onClick={() => router.push(sliderBasePath)}
                    >
                        {dictionary.sliderCta}
                    </GradientButton>
                </div>
            </div>
        </section>
    );
}