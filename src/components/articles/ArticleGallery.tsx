'use client';

import Image from 'next/image';
import { TouchEvent, useEffect, useMemo, useRef, useState } from 'react';

import styles from './ArticleGallery.module.scss';

type ArticleGalleryProps = {
  images: string[];
  title: string;
  photosAriaLabel: string;
  photoAltPrefix: string;
  photoTitle: string;
};

const slideGap = 16;

export default function ArticleGallery({
  images,
  title,
  photosAriaLabel,
  photoAltPrefix,
  photoTitle,
}: ArticleGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSlider, setIsSlider] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

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
  const totalSlides = images.length;
  const activeSlide = Math.min(currentSlide, totalSlides - 1);
  const sliderOffset = -(activeSlide * sliderStep);

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
      goToSlide(activeSlide + 1);
    } else if (distance < -minSwipeDistance) {
      goToSlide(activeSlide - 1);
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (!images.length) return null;

  return (
    <section className={styles.gallerySection} aria-label={photosAriaLabel}>
      <h2 className={styles.galleryTitle}>{photoTitle}</h2>
      <div
        className={`${styles.galleryGrid} ${isSlider ? styles.galleryGridSlider : ''}`.trim()}
        ref={containerRef}
        role="list"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`${styles.galleryTrack} ${!isSlider ? styles.galleryTrackStatic : ''}`.trim()}
          style={isSlider ? { transform: `translateX(${sliderOffset}px)` } : undefined}
        >
          {images.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className={`${styles.galleryItem} ${isSlider ? styles.galleryItemSlide : ''}`.trim()}
              role="listitem"
              style={isSlider ? { width: `${slideWidth}px` } : undefined}
            >
              <Image
                src={src}
                alt={`${photoAltPrefix} ${index + 1} — ${title}`}
                width={340}
                height={240}
                className={styles.galleryImage}
                sizes="(max-width: 1024px) 100vw, 320px"
              />
            </div>
          ))}
        </div>
      </div>

      {isSlider && totalSlides > 1 && (
        <div className={styles.dots} role="tablist" aria-label={photosAriaLabel}>
          {images.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              className={`${styles.dot} ${index === activeSlide ? styles.dotActive : ''}`.trim()}
              aria-label={`${photoAltPrefix} ${index + 1}`}
              aria-pressed={index === activeSlide}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
