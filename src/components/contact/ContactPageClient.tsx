'use client';

import {FormEvent, useState} from 'react';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import GradientButton from '@/components/gradient-button/GradientButton';
import {DictionaryType} from '@/lib/dictionaries';
import {buildLocalizedPath} from '@/lib/localized-paths';
import {Locale} from '../../../i18n-config';
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
};

export default function ContactPageClient({locale, dictionary, homeLabel}: ContactPageClientProps) {
    const [values, setValues] = useState<ContactValues>({
        name: '',
        email: '',
        comment: '',
    });
    const [errors, setErrors] = useState<ContactErrors>({});
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
                                                    updateValue('name', event.target.value)
                                                    setErrors(prev => ({...prev, name: ''}))
                                                }}
                                                autoComplete="name"
                                                aria-invalid={Boolean(errors.name)}
                                                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                                                required
                                            />
                                            {errors.name && (
                                                <span id="contact-name-error" className={styles.errorText} role="alert">
                          {errors.name}
                        </span>
                                            )}
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
                                                    updateValue('email', event.target.value)
                                                    setErrors(prev => ({...prev, email: ''}))
                                                }
                                                }
                                                autoComplete="email"
                                                aria-invalid={Boolean(errors.email)}
                                                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                                                required
                                            />
                                            {errors.email && (
                                                <span id="contact-email-error" className={styles.errorText}
                                                      role="alert">
                          {errors.email}
                        </span>
                                            )}
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
                                                    updateValue('comment', event.target.value)
                                                    setErrors(prev => ({...prev, comment: ''}))
                                                }}
                                                aria-invalid={Boolean(errors.comment)}
                                                aria-describedby={errors.comment ? 'contact-comment-error' : undefined}
                                                rows={6}
                                                required
                                            />
                                            {errors.comment && (
                                                <span id="contact-comment-error" className={styles.errorText}
                                                      role="alert">
                          {errors.comment}
                        </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.actions}>
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
