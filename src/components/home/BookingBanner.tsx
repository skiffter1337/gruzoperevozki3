'use client';

import { FormEvent, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Locale } from '../../../i18n-config';
import { buildLocalizedPath } from '@/lib/localized-paths';
import styles from './BookingBanner.module.scss';
import { DictionaryType } from '@/lib/dictionaries';

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

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

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

  return (
    <section className={styles.banner} aria-labelledby="booking-title">
      <div className={styles.container}>
        <h1 id="booking-title" className={styles.title}>
          {dictionary.title}
        </h1>
        <p className={styles.description}>{dictionary.description}</p>

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
              <label htmlFor="date" className={styles.label}>
                {dictionary.dateLabel}
              </label>
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

            <div className={`${styles.field} ${styles.actions}`}>
              <button type="submit" className={styles.button} aria-label={dictionary.submit}>
                {dictionary.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
