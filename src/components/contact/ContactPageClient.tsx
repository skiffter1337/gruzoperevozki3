'use client';

import {FormEvent, useState} from 'react';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import GradientButton from '@/components/gradient-button/GradientButton';
import {DictionaryType} from '@/lib/dictionaries';
import {buildLocalizedPath} from '@/lib/localized-paths';
import {Locale} from '../../../i18n-config';
import Link from 'next/link';
import {getTermsPath, termsLabelByLocale, termsValidationByLocale} from '@/lib/terms';
import styles from '@/app/[locale]/contact.module.scss';

type ContactPageClientProps = {
    locale: Locale;
    dictionary: DictionaryType['contactPage'];
    homeLabel: string;
};

type ContactValues = {
    name: string;
    email: string;
    comment: string;
};

type ContactErrors = {
    name?: string;
    email?: string;
    comment?: string;
    consent?: string;
};

export default function ContactPageClient({locale, dictionary, homeLabel}: ContactPageClientProps) {
    const [values, setValues] = useState<ContactValues>({
        name: '',
        email: '',
        comment: '',
    });
    const [errors, setErrors] = useState<ContactErrors>({});
    const [isConsentChecked, setIsConsentChecked] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const updateValue = <Key extends keyof ContactValues>(key: Key, value: ContactValues[Key]) => {
        setValues((prev) => ({...prev, [key]: value}));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nextErrors: ContactErrors = {};

        if (!values.name.trim()) {
            nextErrors.name = dictionary.validation.requiredName;
        }
        if (!values.email.trim()) {
            nextErrors.email = dictionary.validation.requiredEmail;
        }
        if (!values.comment.trim()) {
            nextErrors.comment = dictionary.validation.requiredComment;
        }
        if (!isConsentChecked) {
            nextErrors.consent = termsValidationByLocale[locale];
        }

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) {
            return;
        }

        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const response = await fetch('/api/submit-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    locale,
                    name: values.name,
                    email: values.email,
                    comment: values.comment,
                }),
            });

            if (!response.ok) {
                throw new Error('Contact submission failed');
            }

            setIsSubmitted(true);
            setValues({name: '', email: '', comment: ''});
        } catch {
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
            label: dictionary.breadcrumbCurrent,
            current: true,
        },
    ];

    return (
        <section className={styles.page} aria-labelledby="contact-page-title">
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
                                <h1 id="contact-page-title" className={styles.title}>
                                    {dictionary.heroTitle}
                                </h1>
                            </div>

                            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                                <div className={styles.fields}>
                                    <div className={styles.row}>
                                        <div className={styles.field}>
                                            <label htmlFor="contact-name" className={styles.label}>
                                                {dictionary.nameLabel}
                                            </label>
                                            <input
                                                id="contact-name"
                                                name="name"
                                                type="text"
                                                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                                                placeholder={dictionary.namePlaceholder}
                                                value={values.name}
                                                onChange={(event) => {
                                                    updateValue('name', event.target.value);
                                                    setErrors((prev) => ({...prev, name: ''}));
                                                }}
                                                autoComplete="name"
                                                aria-invalid={Boolean(errors.name)}
                                                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                                                required
                                            />
                                            <span
                                                id="contact-name-error"
                                                className={`${styles.errorText} ${!errors.name ? styles.errorTextHidden : ''}`}
                                                role={errors.name ? 'alert' : undefined}
                                                aria-live="polite"
                                            >
                                                {errors.name || '\u00A0'}
                                            </span>
                                        </div>

                                        <div className={styles.field}>
                                            <label htmlFor="contact-email" className={styles.label}>
                                                {dictionary.emailLabel}
                                            </label>
                                            <input
                                                id="contact-email"
                                                name="email"
                                                type="email"
                                                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                                                placeholder={dictionary.emailPlaceholder}
                                                value={values.email}
                                                onChange={(event) => {
                                                    updateValue('email', event.target.value);
                                                    setErrors((prev) => ({...prev, email: ''}));
                                                }}
                                                autoComplete="email"
                                                aria-invalid={Boolean(errors.email)}
                                                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                                                required
                                            />
                                            <span
                                                id="contact-email-error"
                                                className={`${styles.errorText} ${!errors.email ? styles.errorTextHidden : ''}`}
                                                role={errors.email ? 'alert' : undefined}
                                                aria-live="polite"
                                            >
                                                {errors.email || '\u00A0'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.field}>
                                            <label htmlFor="contact-comment" className={styles.label}>
                                                {dictionary.commentLabel}
                                            </label>
                                            <textarea
                                                id="contact-comment"
                                                name="comment"
                                                className={`${styles.textarea} ${errors.comment ? styles.inputError : ''}`}
                                                placeholder={dictionary.commentPlaceholder}
                                                value={values.comment}
                                                onChange={(event) => {
                                                    updateValue('comment', event.target.value);
                                                    setErrors((prev) => ({...prev, comment: ''}));
                                                }}
                                                aria-invalid={Boolean(errors.comment)}
                                                aria-describedby={errors.comment ? 'contact-comment-error' : undefined}
                                                rows={6}
                                                required
                                            />
                                            <span
                                                id="contact-comment-error"
                                                className={`${styles.errorText} ${!errors.comment ? styles.errorTextHidden : ''}`}
                                                role={errors.comment ? 'alert' : undefined}
                                                aria-live="polite"
                                            >
                                                {errors.comment || '\u00A0'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.actions}>
                                    <div className={styles.consentRow}>
                                        <input
                                            id="contact-consent"
                                            type="checkbox"
                                            checked={isConsentChecked}
                                            onChange={(event) => {
                                                setIsConsentChecked(event.target.checked);
                                                setErrors((prev) => ({...prev, consent: undefined}));
                                            }}
                                        />
                                        <label htmlFor="contact-consent" className={styles.customCheckbox} aria-hidden="true"/>
                                        <Link href={getTermsPath(locale)} className={styles.consentLink}>
                                            {termsLabelByLocale[locale]}
                                        </Link>
                                    </div>
                                    {errors.consent && (
                                        <span className={styles.errorText} role="alert">
                      {errors.consent}
                    </span>
                                    )}
                                    <div className={styles.submitRow}>
                                        <GradientButton
                                            type="submit"
                                            disabled={isSubmitting}
                                            ariaLabel={dictionary.submitLabel}

                                        >
                                            {isSubmitting ? dictionary.submittingLabel : dictionary.submitLabel}
                                        </GradientButton>
                                    </div>
                                    {submitError && <p className={styles.errorText}>{submitError}</p>}
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
