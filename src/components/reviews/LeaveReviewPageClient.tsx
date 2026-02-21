'use client';

import {ChangeEvent, FormEvent, useEffect, useId, useState} from 'react';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import GradientButton from '@/components/gradient-button/GradientButton';
import {DictionaryType} from '@/lib/dictionaries';
import {buildLocalizedPath} from '@/lib/localized-paths';
import {Locale} from '../../../i18n-config';
import styles from '@/app/[locale]/leave-review.module.scss';
import {PhotoIcon} from "@/components/home/PhotoIcon";

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
};

type ReviewErrors = {
    name?: string;
    email?: string;
    rating?: string;
};

const MAX_RATING = 5;

export default function LeaveReviewPageClient({
                                                  locale,
                                                  dictionary,
                                                  homeLabel,
                                              }: LeaveReviewPageClientProps) {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [values, setValues] = useState<ReviewValues>({
        name: '',
        email: '',
        carrier: '',
        comment: '',
    });
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const [errors, setErrors] = useState<ReviewErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const ratingHintId = useId();

    const updateValue = <Key extends keyof ReviewValues>(
        key: Key,
        value: ReviewValues[Key]
    ) => {
        setValues((prev) => ({...prev, [key]: value}));
    };

    useEffect(() => {
        if (!photoPreview) {
            return;
        }

        return () => {
            URL.revokeObjectURL(photoPreview);
        };
    }, [photoPreview]);

    const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;
        setPhotoFile(file);
        setPhotoPreview(file ? URL.createObjectURL(file) : null);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) {
            return;
        }

        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const response = await fetch('/api/submit-review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    rating,
                    name: values.name,
                    email: values.email,
                    carrier: values.carrier,
                    comment: values.comment,
                    photoName: photoFile?.name ?? null,
                }),
            });

            if (!response.ok) {
                throw new Error('Review submission failed');
            }

            setIsSubmitted(true);
        } catch (error) {
            setSubmitError(dictionary.submitError);
        } finally {
            setIsSubmitting(false);
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
            current: !isSubmitted,
        },
    ];

    if (isSubmitted) {
        breadcrumbs.push({
            label: dictionary.breadcrumbSuccess,
            current: true,
        });
    }

    const activeRating = hoverRating || rating;

    return (
        <section className={styles.page} aria-labelledby="leave-review-title">
            <div className={styles.container}>
                <div className={styles.breadcrumbsWrapper}>
                    <Breadcrumbs items={breadcrumbs}/>
                </div>

                <div className={styles.reviewCard}>
                    {isSubmitted ? (
                        <div className={styles.successMessage}>{dictionary.submissionSuccessMessage}</div>
                    ) : (
                        <>
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
                                    onMouseLeave={() => setHoverRating(0)}
                                >
                  <span id={ratingHintId} className={styles.srOnly}>
                    {dictionary.ratingHint}
                  </span>
                                    {Array.from({length: MAX_RATING}).map((_, index) => {
                                        const value = index + 1;
                                        return (
                                            <button
                                                key={`rating-${value}`}
                                                type="button"
                                                className={`${styles.starButton} ${
                                                    value <= activeRating ? styles.starActive : ''
                                                }`.trim()}
                                                onClick={() => setRating(value)}
                                                onMouseEnter={() => setHoverRating(value)}
                                                onFocus={() => setHoverRating(value)}
                                                onBlur={() => setHoverRating(0)}
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
                                        onChange={handlePhotoChange}
                                    />
                                    {photoPreview ? (
                                        <img
                                            src={photoPreview}
                                            alt={dictionary.uploadHint}
                                            className={styles.uploadPreview}
                                        />
                                    ) : (
                                        <PhotoIcon/>
                                    )}
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
                                        <GradientButton
                                            type="submit"
                                            ariaLabel={dictionary.submitLabel}
                                            disabled={isSubmitting}
                                        >
                                            {dictionary.submitLabel}
                                        </GradientButton>
                                    </div>
                                    {submitError && (
                                        <span className={styles.errorText} role="alert">
                      {submitError}
                    </span>
                                    )}
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
