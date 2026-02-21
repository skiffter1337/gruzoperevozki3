'use client';

import {FormEvent, useEffect, useState} from 'react';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import CalculatorForm, {CalculatorFormDraft, CalculatorFormPayload} from '@/components/calculate/CalculatorForm';
import GradientButton from '@/components/gradient-button/GradientButton';
import {DictionaryType} from '@/lib/dictionaries';
import {buildLocalizedPath} from '@/lib/localized-paths';
import styles from '@/app/[locale]/calculate.module.scss';

type CalculatorPageClientProps = {
    locale: string;
    dictionary: DictionaryType['calculatePage'];
    heroDictionary: DictionaryType['homeHero'];
    homeLabel: string;
    initialValues: {
        from: string;
        to: string;
        date: string;
    };
};

type ContactValues = {
    fullName: string;
    phone: string;
    comment: string;
};

type ContactErrors = {
    fullName?: string;
    phone?: string;
};

export default function CalculatorPageClient({
                                                 locale,
                                                 dictionary,
                                                 heroDictionary,
                                                 homeLabel,
                                                 initialValues,
                                             }: CalculatorPageClientProps) {
    const [showContactForm, setShowContactForm] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [calculatorPayload, setCalculatorPayload] = useState<CalculatorFormPayload | null>(null);
    const [calculatorDraft, setCalculatorDraft] = useState<CalculatorFormDraft | undefined>(undefined);
    const [contactValues, setContactValues] = useState<ContactValues>({
        fullName: '',
        phone: '',
        comment: '',
    });
    const [contactErrors, setContactErrors] = useState<ContactErrors>({});
    const [submitError, setSubmitError] = useState('');
    const backButtonLabel = locale === 'he' ? 'חזרה' : locale === 'en' ? 'Back' : 'Назад';

    useEffect(() => {
        if (showContactForm) {
            window.scrollTo({top: 0, left: 0, behavior: 'auto'});
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }
    }, [showContactForm]);

    const updateContactValue = <Key extends keyof ContactValues>(
        key: Key,
        value: ContactValues[Key]
    ) => {
        setContactValues((prev) => ({...prev, [key]: value}));
    };

    const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nextErrors: ContactErrors = {};
        if (!contactValues.fullName.trim()) {
            nextErrors.fullName = dictionary.validation.requiredName;
        }
        if (!contactValues.phone.trim()) {
            nextErrors.phone = dictionary.validation.requiredPhone;
        }
        setContactErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) {
            return;
        }
        if (!calculatorPayload) {
            setSubmitError(dictionary.submitError);
            return;
        }

        setIsSubmitting(true);
        setSubmitError('');
        try {
            const response = await fetch('/api/submit-request', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    calculator: calculatorPayload,
                    contact: contactValues,
                }),
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            setIsSubmitted(true);
        } catch {
            setSubmitError(dictionary.submitError);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleBackToCalculator = () => {
        setShowContactForm(false);
        setContactErrors({});
        setSubmitError('');
    };

    const breadcrumbs = isSubmitted
        ? [
            {
                label: homeLabel,
                href: buildLocalizedPath(locale as "ru" | "he" | "en", 'home'),
            },
            {
                label: dictionary.breadcrumbCurrent,
                href: buildLocalizedPath(locale as "ru" | "he" | "en", 'calculate'),
            },
            {
                label: dictionary.breadcrumbSubmit,
                href: buildLocalizedPath(locale as "ru" | "he" | "en", 'calculate'),
            },
            {
                label: dictionary.breadcrumbSuccess,
                current: true,
            },
        ]
        : showContactForm
            ? [
                {
                    label: homeLabel,
                    href: buildLocalizedPath(locale as "ru" | "he" | "en", 'home'),
                },
                {
                    label: dictionary.breadcrumbCurrent,
                    onClick: handleBackToCalculator,
                },
                {
                    label: dictionary.breadcrumbSubmit,
                    current: true,
                },
            ]
            : [
                {
                    label: homeLabel,
                    href: buildLocalizedPath(locale as "ru" | "he" | "en", 'home'),
                },
                {label: dictionary.breadcrumbCurrent, current: true},
            ];

    return (
        <>
            <header className={styles.header}>
                <div className={styles.breadcrumbsWrapper}>
                    <Breadcrumbs items={breadcrumbs}/>
                </div>
                {!showContactForm && (
                    <h1 id="calculate-title" className={styles.title}>
                        {dictionary.heroHeading}
                    </h1>
                )}
            </header>

            <div
                className={`${styles.calculatorSection} ${showContactForm || isSubmitted ? styles.hiddenSection : ''}`}
                aria-hidden={showContactForm || isSubmitted}
            >
                <CalculatorForm
                    dictionary={dictionary}
                    heroDictionary={heroDictionary}
                    initialValues={initialValues}
                    initialDraft={calculatorDraft}
                    onDraftChange={setCalculatorDraft}
                    onSuccess={(payload) => {
                        setCalculatorPayload(payload);
                        setShowContactForm(true);
                    }}
                />
            </div>

            {showContactForm && !isSubmitted && (
                <section className={styles.contactsCard} aria-live="polite">
                    <div className={styles.successHeader}>
                        <h2 className={styles.successTitle}>{dictionary.successTitle}</h2>
                        <p className={styles.successMessage}>{dictionary.successMessage}</p>
                        <p className={styles.successPrompt}>{dictionary.contactPrompt}</p>
                    </div>

                    <form className={styles.contactForm} onSubmit={handleContactSubmit} noValidate>
                        <div className={styles.contactFields}>
                            <div className={styles.field}>
                                <label htmlFor="fullName" className={styles.submitLabel}>
                                    {dictionary.contactNameLabel}
                                </label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    className={`${styles.input} ${styles.submitInput}  ${contactErrors.fullName ? styles.inputError : ''}`}
                                    placeholder={dictionary.contactNameLabel}
                                    value={contactValues.fullName}
                                    onChange={(event) => updateContactValue('fullName', event.target.value)}
                                    aria-invalid={Boolean(contactErrors.fullName)}
                                    aria-describedby={contactErrors.fullName ? 'fullName-error' : undefined}
                                    autoComplete="name"
                                />
                                {contactErrors.fullName && (
                                    <span id="fullName-error" className={styles.errorText} role="alert">
                    {contactErrors.fullName}
                  </span>
                                )}
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="phone" className={styles.submitLabel}>
                                    {dictionary.contactPhoneLabel}
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    className={`${styles.input} ${styles.submitInput}  ${contactErrors.phone ? styles.inputError : ''}`}
                                    placeholder={dictionary.contactPhoneLabel}
                                    value={contactValues.phone}
                                    onChange={(event) => updateContactValue('phone', event.target.value)}
                                    aria-invalid={Boolean(contactErrors.phone)}
                                    aria-describedby={contactErrors.phone ? 'phone-error' : undefined}
                                    autoComplete="tel"
                                />
                                {contactErrors.phone && (
                                    <span id="phone-error" className={styles.errorText} role="alert">
                    {contactErrors.phone}
                  </span>
                                )}
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="comment" className={styles.submitLabel}>
                                    {dictionary.contactCommentLabel}
                                </label>
                                <textarea
                                    id="comment"
                                    name="comment"
                                    className={`${styles.input} ${styles.textarea}`}
                                    placeholder={dictionary.contactCommentLabel}
                                    value={contactValues.comment}
                                    onChange={(event) => updateContactValue('comment', event.target.value)}
                                    rows={3}
                                />
                            </div>
                        </div>

                        <div className={styles.contactActions}>
                            <div className={styles.contactButtons}>
                                <GradientButton
                                    type="button"
                                    ariaLabel={backButtonLabel}
                                    size="small"
                                    onClick={handleBackToCalculator}
                                >
                                    {backButtonLabel}
                                </GradientButton>
                                <GradientButton
                                    type="submit"
                                    ariaLabel={dictionary.sendCta}
                                    size="small"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? dictionary.sendingCta : dictionary.sendCta}
                                </GradientButton>
                            </div>
                            {submitError && (
                                <span className={styles.errorText} role="alert">
                  {submitError}
                </span>
                            )}
                        </div>
                    </form>
                </section>
            )}
            {isSubmitted && (
                <section className={styles.successCard} aria-live="polite">
                    <div className={styles.submissionMessage}>
                        {dictionary.submissionSuccessMessage}
                    </div>
                </section>
            )}
        </>
    );
}

