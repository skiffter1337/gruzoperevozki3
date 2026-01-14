'use client';

import { FormEvent, useId, useState } from 'react';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import GradientButton from '@/components/gradient-button/GradientButton';
import { DictionaryType } from '@/lib/dictionaries';
import { buildLocalizedPath } from '@/lib/localized-paths';
import { Locale } from '../../../i18n-config';
import styles from '@/app/[locale]/leave-review.module.scss';

type LeaveReviewPageClientProps = {
  locale: Locale;
  dictionary: DictionaryType['leaveReviewPage'];
  homeLabel: string;
};

type ReviewValues = {
  name: string;
  email: string;
  carrier: string;
  comment: string;
  consent: boolean;
};

type ReviewErrors = {
  name?: string;
  email?: string;
  rating?: string;
  consent?: string;
};

const MAX_RATING = 5;

export default function LeaveReviewPageClient({
  locale,
  dictionary,
  homeLabel,
}: LeaveReviewPageClientProps) {
  const [rating, setRating] = useState(0);
  const [values, setValues] = useState<ReviewValues>({
    name: '',
    email: '',
    carrier: '',
    comment: '',
    consent: false,
  });
  const [errors, setErrors] = useState<ReviewErrors>({});
  const ratingHintId = useId();

  const updateValue = <Key extends keyof ReviewValues>(
    key: Key,
    value: ReviewValues[Key]
  ) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: ReviewErrors = {};
    if (!values.name.trim()) {
      nextErrors.name = dictionary.validation.requiredName;
    }
    if (!values.email.trim()) {
      nextErrors.email = dictionary.validation.requiredEmail;
    }
    if (rating <= 0) {
      nextErrors.rating = dictionary.validation.requiredRating;
    }
    if (!values.consent) {
      nextErrors.consent = dictionary.validation.requiredConsent;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
  };

  const breadcrumbs = [
    {
      label: homeLabel,
      href: buildLocalizedPath(locale, 'home'),
    },
    {
      label: dictionary.breadcrumbTestimonials,
      href: `${buildLocalizedPath(locale, 'home')}#testimonials-section`,
    },
    {
      label: dictionary.breadcrumbCurrent,
      current: true,
    },
  ];

  return (
    <section className={styles.page} aria-labelledby="leave-review-title">
      <div className={styles.container}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className={styles.reviewCard}>
          <div className={styles.header}>
            <h1 id="leave-review-title" className={styles.title}>
              {dictionary.heroTitle}
            </h1>
          </div>

          <div className={styles.ratingBlock}>
            <div
              className={styles.stars}
              role="radiogroup"
              aria-label={dictionary.ratingLabel}
              aria-describedby={errors.rating ? `${ratingHintId} rating-error` : ratingHintId}
            >
              <span id={ratingHintId} className={styles.srOnly}>
                {dictionary.ratingHint}
              </span>
              {Array.from({ length: MAX_RATING }).map((_, index) => {
                const value = index + 1;
                return (
                  <button
                    key={`rating-${value}`}
                    type="button"
                    className={`${styles.starButton} ${
                      value <= rating ? styles.starActive : ''
                    }`.trim()}
                    onClick={() => setRating(value)}
                    role="radio"
                    aria-checked={value === rating}
                    aria-label={`${value} / ${MAX_RATING}`}
                    tabIndex={value === rating || (rating === 0 && value === 1) ? 0 : -1}
                  >
                    ★
                  </button>
                );
              })}
            </div>
            {errors.rating && (
              <span id="rating-error" className={styles.errorText} role="alert">
                {errors.rating}
              </span>
            )}
          </div>

          <div className={styles.uploadBlock}>
            <label className={styles.uploadButton} aria-label={dictionary.uploadLabel}>
              <input
                className={styles.uploadInput}
                type="file"
                accept="image/*"
              />
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                className={styles.uploadIcon}
              >
                <path d="M9 4l1.5-2h3L15 4h3a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h3zm3 5a5 5 0 100 10 5 5 0 000-10zm0 2.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6z" />
              </svg>
            </label>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.fields}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="review-name" className={styles.label}>
                    {dictionary.nameLabel}
                  </label>
                  <input
                    id="review-name"
                    name="name"
                    type="text"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    placeholder={dictionary.namePlaceholder}
                    value={values.name}
                    onChange={(event) => updateValue('name', event.target.value)}
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    required
                  />
                  {errors.name && (
                    <span id="name-error" className={styles.errorText} role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className={styles.field}>
                  <label htmlFor="review-email" className={styles.label}>
                    {dictionary.emailLabel}
                  </label>
                  <input
                    id="review-email"
                    name="email"
                    type="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    placeholder={dictionary.emailPlaceholder}
                    value={values.email}
                    onChange={(event) => updateValue('email', event.target.value)}
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    required
                  />
                  {errors.email && (
                    <span id="email-error" className={styles.errorText} role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="review-carrier" className={styles.label}>
                    {dictionary.carrierLabel}
                  </label>
                  <input
                    id="review-carrier"
                    name="carrier"
                    type="text"
                    className={styles.input}
                    placeholder={dictionary.carrierPlaceholder}
                    value={values.carrier}
                    onChange={(event) => updateValue('carrier', event.target.value)}
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="review-comment" className={styles.label}>
                    {dictionary.commentLabel}
                  </label>
                  <textarea
                    id="review-comment"
                    name="comment"
                    className={styles.textarea}
                    placeholder={dictionary.commentPlaceholder}
                    value={values.comment}
                    onChange={(event) => updateValue('comment', event.target.value)}
                    rows={4}
                  />
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <div className={styles.submitRow}>
                <GradientButton type="submit" ariaLabel={dictionary.submitLabel}>
                  {dictionary.submitLabel}
                </GradientButton>
              </div>
              <label className={styles.consentRow}>
                <input
                  type="checkbox"
                  name="consent"
                  checked={values.consent}
                  onChange={(event) => updateValue('consent', event.target.checked)}
                  aria-invalid={Boolean(errors.consent)}
                />
                <span className={styles.customCheckbox} />
                <span>{dictionary.consentLabel}</span>
              </label>
              {errors.consent && (
                <span className={styles.errorText} role="alert">
                  {errors.consent}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
