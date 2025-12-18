'use client';

import { FormEvent, TouchEvent, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import GradientButton from '@/components/gradient-button/GradientButton';
import { DictionaryType } from '@/lib/dictionaries';
import { buildLocalizedPath } from '@/lib/localized-paths';
import { Locale } from '../../../i18n-config';
import styles from './BookingBanner.module.scss';

type BookingBannerProps = {
  locale: Locale;
  dictionary: DictionaryType['homeHero'];
};

type FormErrors = Partial<Record<'from' | 'to' | 'date', string>>;

type FormValues = {
  from: string;
  to: string;
  date: string;
};

const defaultValues: FormValues = {
  from: '',
  to: '',
  date: '',
};

export default function BookingBanner({ locale, dictionary }: BookingBannerProps) {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(defaultValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);
  const sliderBasePath = useMemo(() => buildLocalizedPath(locale, 'services'), [locale]);
  const totalSlides = dictionary.sliderItems.length;

  const updateField = (key: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!values.from.trim()) {
      newErrors.from = dictionary.requiredMessage;
    }

    if (!values.to.trim()) {
      newErrors.to = dictionary.requiredMessage;
    }

    if (!values.date) {
      newErrors.date = dictionary.requiredMessage;
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {
      return;
    }

    const params = new URLSearchParams({
      from: values.from.trim(),
      to: values.to.trim(),
      date: values.date,
    });

    router.push(`${buildLocalizedPath(locale, 'calculate')}?${params.toString()}`);
  };

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
    <>
      <section className={styles.banner} aria-labelledby="booking-title">
        <div className={styles.container}>
          <h1 id="booking-title" className={styles.title}>
            {dictionary.title}
          </h1>

          <div className={styles.formWrapper}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="from" className={styles.label}>
                  {dictionary.fromLabel}
                </label>
                <input
                  id="from"
                  name="from"
                  type="text"
                  className={styles.input}
                  placeholder={dictionary.fromPlaceholder}
                  value={values.from}
                  onChange={(event) => updateField('from', event.target.value)}
                  required
                  aria-invalid={Boolean(errors.from)}
                  autoComplete="address-level2"
                />
                {errors.from && <span className={styles.error}>{errors.from}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="to" className={styles.label}>
                  {dictionary.toLabel}
                </label>
                <input
                  id="to"
                  name="to"
                  type="text"
                  className={styles.input}
                  placeholder={dictionary.toPlaceholder}
                  value={values.to}
                  onChange={(event) => updateField('to', event.target.value)}
                  required
                  aria-invalid={Boolean(errors.to)}
                  autoComplete="address-level2"
                />
                {errors.to && <span className={styles.error}>{errors.to}</span>}
              </div>

              <div className={`${styles.field} ${styles.fieldDate}`}>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className={styles.input}
                  placeholder={dictionary.datePlaceholder}
                  value={values.date}
                  min={today}
                  onChange={(event) => updateField('date', event.target.value)}
                  required
                  aria-invalid={Boolean(errors.date)}
                />
                {errors.date && <span className={styles.error}>{errors.date}</span>}
              </div>

              <div className={styles.actions}>
                <GradientButton type="submit" ariaLabel={dictionary.submit}>
                  {dictionary.submit}
                </GradientButton>
                <div className={styles.submitLabel}>
                  {dictionary.submitLabel}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

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
    </>
  );
}
