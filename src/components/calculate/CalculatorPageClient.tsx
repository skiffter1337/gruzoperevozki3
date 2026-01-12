'use client';

import {FormEvent, useState} from 'react';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import CalculatorForm from '@/components/calculate/CalculatorForm';
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

type CalculatorPayload = {
    route: string;
    date: string;
    fromHasElevator: boolean;
    fromFloor: string;
    toHasElevator: boolean;
    toFloor: string;
    serviceType: string;
    needsAssembly: boolean;
    items: Array<{name: string; count: number}>;
    activeRoom: keyof DictionaryType['calculatePage']['roomTabs'];
};

type ContactValues = {
    fullName: string;
    phone: string;
    comment: string;
    consent: boolean;
};

type ContactErrors = {
    fullName?: string;
    phone?: string;
    consent?: string;
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
    const [calculatorPayload, setCalculatorPayload] = useState<CalculatorPayload | null>(null);
    const [contactValues, setContactValues] = useState<ContactValues>({
        fullName: '',
        phone: '',
        comment: '',
        consent: false,
    });
    const [contactErrors, setContactErrors] = useState<ContactErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

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
        if (!contactValues.consent) {
            nextErrors.consent = dictionary.validation.requiredConsent;
        }

        setContactErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0 || !calculatorPayload) {
            return;
        }

        const payload = {
            ...calculatorPayload,
            fullName: contactValues.fullName,
            phone: contactValues.phone,
            comment: contactValues.comment,
        };

        try {
            setIsSubmitting(true);
            setSubmitError(null);
            const response = await fetch('/api/calculate', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            setIsSubmitted(true);
            setShowContactForm(false);
        } catch (error) {
            setSubmitError(dictionary.submitError);
        } finally {
            setIsSubmitting(false);
        }
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
                label: dictionary.breadcrumbSubmitted,
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
                    href: buildLocalizedPath(locale as "ru" | "he" | "en", 'calculate'),
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
                {!isSubmitted && !showContactForm && (
                    <h1 id="calculate-title" className={styles.title}>
                        {dictionary.heroHeading}
                    </h1>
                )}
            </header>

            {!isSubmitted && !showContactForm && (<CalculatorForm
                    dictionary={dictionary}
                    heroDictionary={heroDictionary}
                    initialValues={initialValues}
                    onSuccess={(payload) => {
                        setCalculatorPayload(payload);
                        setShowContactForm(true);
                    }}
                />
            )}

            {showContactForm && !isSubmitted && (
                <section className={styles.successCard} aria-live="polite">
                    <div className={styles.successHeader}>
                        <h2 className={styles.successTitle}>{dictionary.successTitle}</h2>
                        <p className={styles.successMessage}>{dictionary.successMessage}</p>
                        <p className={styles.successPrompt}>{dictionary.contactPrompt}</p>
                    </div>

                    <form className={styles.contactForm} onSubmit={handleContactSubmit} noValidate>
                        <div className={styles.contactFields}>
                            <div className={styles.field}>
                                <label htmlFor="fullName" className={styles.label}>
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
                            <GradientButton
                                type="submit"
                                ariaLabel={dictionary.sendCta}
                                size="small"
                                disabled={!contactValues.consent || isSubmitting}
                            >
                                {isSubmitting ? dictionary.submittingCta : dictionary.sendCta}
                            </GradientButton>

                            <label className={styles.consentRow}>
                                <input
                                    type="checkbox"
                                    checked={contactValues.consent}
                                    onChange={(event) => updateContactValue('consent', event.target.checked)}
                                />
                                <span className={styles.customCheckbox}/>
                                <span>{dictionary.consentLabel}</span>
                            </label>
                            {contactErrors.consent && (
                                <span className={styles.errorText} role="alert">
                  {contactErrors.consent}
                </span>
                            )}
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
                    <p className={styles.successNotice}>{dictionary.submissionSuccessMessage}</p>
                </section>
            )}
        </>
    );
}
