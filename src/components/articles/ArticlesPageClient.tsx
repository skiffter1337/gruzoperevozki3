'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TouchEvent, useEffect, useMemo, useRef, useState } from 'react';

import { DictionaryType } from '@/lib/dictionaries';
import { buildLocalizedPath } from '@/lib/localized-paths';
import { Locale } from '../../../i18n-config';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';

import styles from './ArticlesPageClient.module.scss';

type ArticlesPageClientProps = {
  locale: Locale;
  dictionary: DictionaryType['articlesPage'];
  articlesDictionary: DictionaryType['homeArticles'];
  homeLabel: string;
};

const slideGap = 16;

export default function ArticlesPageClient({
  locale,
  dictionary,
  articlesDictionary,
  homeLabel,
}: ArticlesPageClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSlider, setIsSlider] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const articles = useMemo(() => articlesDictionary.articles, [articlesDictionary.articles]);
  const totalSlides = articles.length;
  const featuredArticle = articles[0];
  const gridArticles = articles.slice(1);

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

  const breadcrumbs = [
    {
      label: homeLabel,
      href: buildLocalizedPath(locale, 'home'),
    },
    {
      label: dictionary.breadcrumbCurrent,
      current: true,
    },
  ];

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

  if (!articles.length) {
    return null;
  }

  return (
    <section
      className={styles.page}
      aria-labelledby="articles-page-title"
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      <div className={styles.container} ref={containerRef}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <h1 id="articles-page-title" className={styles.title}>
          {dictionary.title}
        </h1>

        {!isSlider && (
          <div
            className={styles.desktopLayout}
            role="list"
            aria-label={dictionary.sectionAriaLabel}
            itemScope
            itemType="https://schema.org/ItemList"
          >
            {featuredArticle && (
              <Link
                href={`${baseArticlesPath}/${featuredArticle.slug}`}
                className={styles.heroCard}
                prefetch={false}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <meta itemProp="position" content="1" />
                <div className={styles.heroImageWrapper}>
                  <Image
                    src={featuredArticle.image}
                    alt={`${articlesDictionary.imageAltPrefix} ${featuredArticle.title}`}
                    width={520}
                    height={360}
                    className={styles.heroImage}
                    sizes="(max-width: 1200px) 100vw, 520px"
                    priority
                  />
                </div>
                <div className={styles.heroContent}>
                  <div className={styles.heroTitle} itemProp="headline">
                    {featuredArticle.title}
                  </div>
                  <p className={styles.heroExcerpt} itemProp="description">
                    {featuredArticle.excerpt}
                  </p>
                  <div className={styles.cardButtonWrapper}>
                    <span className={styles.cardCta}>{articlesDictionary.readMoreCta}</span>
                  </div>
                </div>
              </Link>
            )}

            {gridArticles.length > 0 && (
              <div className={styles.grid}>
                {gridArticles.map((article, index) => (
                  <Link
                    key={`${article.slug}-${index}`}
                    href={`${baseArticlesPath}/${article.slug}`}
                    className={styles.card}
                    prefetch={false}
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/BlogPosting"
                  >
                    <meta itemProp="position" content={`${index + 2}`} />
                    <div className={styles.cardImageWrapper}>
                      <Image
                        src={article.image}
                        alt={`${articlesDictionary.imageAltPrefix} ${article.title}`}
                        width={300}
                        height={240}
                        className={styles.cardImage}
                        sizes="(max-width: 1200px) 45vw, 260px"
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
                        <span className={styles.cardCta}>{articlesDictionary.readMoreCta}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {isSlider && (
          <div className={styles.sliderWrapper} dir={locale === 'he' ? 'ltr' : undefined}>
            <div
              className={styles.sliderViewport}
              style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
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
                    style={{ width: `${slideWidth}px`, flexShrink: 0 }}
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
                        alt={`${articlesDictionary.imageAltPrefix} ${article.title}`}
                        fill
                        className={styles.slideImage}
                        sizes="(max-width: 1023px) 100vw, 360px"
                      />
                    </div>
                    <p className={styles.slideExcerpt} itemProp="description">
                      {article.excerpt}
                    </p>
                    <span className={styles.slideReadMore}>{articlesDictionary.readMoreInline}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.mobileNav} aria-label={dictionary.sliderAriaLabel}>
              <button
                type="button"
                className={styles.navButton}
                onClick={handlePrev}
                aria-label={articlesDictionary.previousSlideLabel}
              >
                ←
              </button>
              <span className={styles.navCounter} aria-live="polite">
                {activeSlide + 1} / {totalPages}
              </span>
              <button
                type="button"
                className={styles.navButton}
                onClick={handleNext}
                aria-label={articlesDictionary.nextSlideLabel}
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
