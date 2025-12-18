'use client';

import { TouchEvent, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import GradientButton from '@/components/gradient-button/GradientButton';
import { DictionaryType } from '@/lib/dictionaries';
import { buildLocalizedPath } from '@/lib/localized-paths';
import { Locale } from '../../../i18n-config';
import styles from './ServicesSlider.module.scss';

type ServicesSliderProps = {
  locale: Locale;
  dictionary: DictionaryType['homeHero'];
};

export default function ServicesSlider({ locale, dictionary }: ServicesSliderProps) {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const sliderBasePath = useMemo(() => buildLocalizedPath(locale, 'services'), [locale]);
  const totalSlides = dictionary.sliderItems.length;

  const goToSlide = (nextIndex: number) => {
    if (!totalSlides) return;
    const normalizedIndex = (nextIndex + totalSlides) % totalSlides;
    setCurrentSlide(normalizedIndex);
  };

  const handleNext = () => goToSlide(currentSlide + 1);
  const handlePrev = () => goToSlide(currentSlide - 1);

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

        <div className={styles.sliderWrapper}>
          <button
            type="button"
            className={`${styles.navButton} ${styles.navButtonLeft}`}
            aria-label={dictionary.sliderPrevious}
            onClick={handlePrev}
          >
            <ChevronRightIcon focusable="false" />
          </button>

          <div
            className={styles.sliderViewport}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={styles.sliderTrack}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {dictionary.sliderItems.map((item) => (
                <Link
                  key={item.slug}
                  href={`${sliderBasePath}/${item.slug}`}
                  className={styles.slide}
                  aria-label={`${dictionary.sliderItemLabelPrefix} ${item.title}`}
                  prefetch={false}
                >
                  <span className={styles.slideTitle}>{item.title}</span>
                  <div className={styles.imagePlaceholder} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={styles.navButton}
            aria-label={dictionary.sliderNext}
            onClick={handleNext}
          >
            <ChevronRightIcon focusable="false" />
          </button>
        </div>

        <div className={styles.dots} role="tablist" aria-label={dictionary.sliderHeading}>
          {dictionary.sliderItems.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              className={`${styles.dot} ${currentSlide === index ? styles.dotActive : ''}`.trim()}
              aria-label={`${dictionary.sliderItemLabelPrefix} ${item.title}`}
              aria-pressed={currentSlide === index}
              onClick={() => goToSlide(index)}
            />
          ))}
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
