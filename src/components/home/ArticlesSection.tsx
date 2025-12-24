'use client';

import Image from 'next/image';
import Link from 'next/link';
import {TouchEvent, useEffect, useMemo, useRef, useState} from 'react';

import {DictionaryType} from '@/lib/dictionaries';
import {buildLocalizedPath} from '@/lib/localized-paths';
import {Locale} from '../../../i18n-config';

import styles from './ArticlesSection.module.scss';

type ArticlesSectionProps = {
    locale: Locale;
    dictionary: DictionaryType['homeArticles'];
};

const slideGap = 16;

export default function ArticlesSection({locale, dictionary}: ArticlesSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSlider, setIsSlider] = useState(false);
    const [containerWidth, setContainerWidth] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);

    const articles = useMemo(() => dictionary.articles, [dictionary.articles]);
    const totalSlides = articles.length;

    useEffect(() => {
        const updateLayout = () => {
            if (typeof window === 'undefined') return;

            setIsSlider(window.innerWidth < 1024);

            const container = containerRef.current;
            if (container) {
                const style = window.getComputedStyle(container);
                const paddingLeft = parseInt(style.paddingLeft, 10) || 0;
                const paddingRight = parseInt(style.paddingRight, 10) || 0;
                const availableWidth = container.clientWidth - paddingLeft - paddingRight;
                setContainerWidth(availableWidth > 0 ? availableWidth : 320);
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

    const slideWidth = useMemo(() => (containerWidth > 0 ? containerWidth : 320), [containerWidth]);
    const sliderStep = slideWidth + slideGap;
    const totalPages = Math.max(totalSlides, 1);
    const activeSlide = Math.min(currentSlide, totalPages - 1);
    const sliderOffset = -(activeSlide * sliderStep);

    const baseArticlesPath = useMemo(() => buildLocalizedPath(locale, 'articles'), [locale]);

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

    const handleNext = () => goToSlide(activeSlide + 1);
    const handlePrev = () => goToSlide(activeSlide - 1);

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
            aria-label={dictionary.sectionAriaLabel}
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <div className={styles.container} ref={containerRef}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title} itemProp="name">
                        {dictionary.title}
                    </h2>
                </div>

                <div className={styles.grid} role="list" aria-label={dictionary.sliderAriaLabel}>
                    {articles.map((article, index) => (
                        <Link
                            key={`${article.slug}-${index}`}
                            href={`${baseArticlesPath}/${article.slug}`}
                            className={styles.card}
                            prefetch={false}
                            itemProp="itemListElement"
                            itemScope
                            itemType="https://schema.org/BlogPosting"
                        >
                            <meta itemProp="position" content={`${index + 1}`} />
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src={article.image}
                                    alt={`${dictionary.imageAltPrefix} ${article.title}`}
                                    fill
                                    className={styles.cardImage}
                                    sizes="(max-width: 1200px) 180px, 200px"
                                    priority={index < 2}
                                />
                            </div>

                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle} itemProp="headline">
                                    {article.title}
                                </div>
                                <p className={styles.cardExcerpt} itemProp="description">
                                    {article.excerpt}
                                </p>
                                <div className={styles.cardButtonWrapper}>
                                    <span className={styles.cardCta}>{dictionary.readMoreCta}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {isSlider && (
                    <div className={styles.sliderWrapper} dir={locale === 'he' ? 'rtl' : undefined}>
                        <div
                            className={styles.sliderViewport}
                            style={{width: containerWidth ? `${containerWidth}px` : '100%'}}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            role="group"
                            aria-label={dictionary.sliderAriaLabel}
                        >
                            <div
                                className={styles.sliderTrack}
                                style={{
                                    gap: `${slideGap}px`,
                                    width: `${totalSlides * sliderStep}px`,
                                    transform: `translateX(${sliderOffset}px)`,
                                }}
                            >
                                {articles.map((article, index) => (
                                    <Link
                                        key={`${article.slug}-${index}`}
                                        href={`${baseArticlesPath}/${article.slug}`}
                                        className={styles.slide}
                                        style={{width: `${slideWidth}px`, flexShrink: 0}}
                                        prefetch={false}
                                        itemProp="itemListElement"
                                        itemScope
                                        itemType="https://schema.org/BlogPosting"
                                    >
                                        <meta itemProp="position" content={`${index + 1}`} />
                                        <div className={styles.slideTitle} itemProp="headline">
                                            {article.title}
                                        </div>
                                        <div className={styles.slideImageWrapper}>
                                            <Image
                                                src={article.image}
                                                alt={`${dictionary.imageAltPrefix} ${article.title}`}
                                                fill
                                                className={styles.slideImage}
                                                sizes="(max-width: 1023px) 100vw, 360px"
                                            />
                                        </div>
                                        <p className={styles.slideExcerpt} itemProp="description">
                                            {article.excerpt}
                                        </p>
                                        <span className={styles.slideReadMore}>{dictionary.readMoreInline}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            href={baseArticlesPath}
                            className={`${styles.allArticlesButton} ${styles.ctaButton}`}
                            prefetch={false}
                            aria-label={dictionary.allArticlesAriaLabel}
                        >
                            {dictionary.allArticlesCta}
                        </Link>

                        <div className={styles.dots} role="tablist" aria-label={dictionary.sliderAriaLabel}>
                            {Array.from({length: totalPages}).map((_, index) => (
                                <button
                                    key={`dot-${index}`}
                                    type="button"
                                    className={`${styles.dot} ${activeSlide === index ? styles.dotActive : ''}`.trim()}
                                    aria-label={`${dictionary.dotLabelPrefix} ${index + 1}`}
                                    aria-selected={activeSlide === index}
                                    role="tab"
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {!isSlider && (
                    <Link
                        href={baseArticlesPath}
                        className={`${styles.allArticlesButton} ${styles.ctaButton}`}
                        prefetch={false}
                        aria-label={dictionary.allArticlesAriaLabel}
                    >
                        {dictionary.allArticlesCta}
                    </Link>
                )}
            </div>
        </section>
    );
}
