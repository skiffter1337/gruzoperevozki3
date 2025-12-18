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
    const [slideMetrics, setSlideMetrics] = useState<{width: number; step: number} | null>(null);
    const sliderViewportRef = useRef<HTMLDivElement | null>(null);

    const sliderBasePath = useMemo(() => buildLocalizedPath(locale, 'services'), [locale]);
    const totalSlides = dictionary.sliderItems.length;
    const maxSlideIndex = Math.max(totalSlides - slidesPerView, 0);
    const clampedSlide = Math.min(currentSlide, maxSlideIndex);
    const slideWidthPercentage = 100 / slidesPerView;
    const totalPages = Math.max(totalSlides - slidesPerView + 1, 1);

    const slideImages: Record<string, StaticImageData> = {
        crane: craneImage,
        transport: transportImage,
        furniture: furnitureImage,
        flat: flatImage,
    };

    useEffect(() => {
        const getSlidesPerView = () => {
            if (typeof window === 'undefined') return 1;
            if (window.innerWidth >= 1200) return 3;
            if (window.innerWidth >= 840) return 2;
            return 1;
        };

        const handleResize = () => setSlidesPerView(getSlidesPerView());

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const GAP = 16;
        const MIN_GUTTER = 16;

        const calculateSlideMetrics = () => {
            const viewport = sliderViewportRef.current;
            if (!viewport) return;

            const viewportWidth = viewport.clientWidth;
            const gutters = Math.max(MIN_GUTTER * 2, slidesPerView === 1 ? MIN_GUTTER * 2 : 0);
            const availableWidth = Math.max(viewportWidth - gutters - GAP * (slidesPerView - 1), 0);
            const widthPerSlide = slidesPerView === 1
                ? Math.min(370, viewportWidth - MIN_GUTTER * 2)
                : availableWidth / slidesPerView;

            const effectiveGap = slidesPerView > 1 ? GAP : 0;

            setSlideMetrics({
                width: widthPerSlide,
                step: widthPerSlide + effectiveGap,
            });
        };

        calculateSlideMetrics();
        window.addEventListener('resize', calculateSlideMetrics);

        return () => window.removeEventListener('resize', calculateSlideMetrics);
    }, [slidesPerView]);

    const goToSlide = (nextIndex: number) => {
        if (!totalSlides) return;
        const normalizedIndex = (nextIndex + maxSlideIndex + 1) % (maxSlideIndex + 1);
        setCurrentSlide(normalizedIndex);
    };

    const handleNext = () => goToSlide(clampedSlide + 1);
    const handlePrev = () => goToSlide(clampedSlide - 1);

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
                        <button
                            type="button"
                            className={`${styles.navButton} ${styles.navButtonLeft}`}
                            aria-label={dictionary.sliderPrevious}
                            onClick={handlePrev}
                        >
                            <ChevronRightIcon focusable="false"/>
                        </button>

                        <div
                            className={styles.sliderViewport}
                            ref={sliderViewportRef}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div
                                className={styles.sliderTrack}
                                style={{
                                    transform: slideMetrics
                                        ? `translateX(-${clampedSlide * slideMetrics.step}px)`
                                        : `translateX(-${clampedSlide * slideWidthPercentage}%)`,
                                    // @ts-expect-error CSS custom properties typing
                                    '--slides-per-view': slidesPerView,
                                    '--slide-width': slideMetrics ? `${slideMetrics.width}px` : undefined,
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
                                                        sizes="(max-width: 839px) 100vw, (max-width: 1199px) 50vw, 33vw"
                                                    />
                                                )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <button
                            type="button"
                            className={`${styles.navButton} ${styles.navButtonRight}`}
                            aria-label={dictionary.sliderNext}
                            onClick={handleNext}
                        >
                            <ChevronRightIcon focusable="false"/>
                        </button>


                    </div>
                    <div className={styles.dots} role="tablist" aria-label={dictionary.sliderHeading}>
                        {Array.from({length: totalPages}).map((_, index) => (
                            <button
                                key={`dot-${index}`}
                                type="button"
                                className={`${styles.dot} ${clampedSlide === index ? styles.dotActive : ''}`.trim()}
                                aria-label={`${dictionary.sliderItemLabelPrefix} ${index + 1}`}
                                aria-pressed={clampedSlide === index}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
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
