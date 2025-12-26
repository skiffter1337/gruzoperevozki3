'use client';

import { FormEvent, useMemo, useState } from 'react';
import GradientButton from '@/components/gradient-button/GradientButton';
import { DictionaryType } from '@/lib/dictionaries';
import styles from '@/app/[locale]/calculate.module.scss';

type CalculatorFormProps = {
  dictionary: DictionaryType['calculatePage'];
  heroDictionary: DictionaryType['homeHero'];
  initialValues: {
    from: string;
    to: string;
    date: string;
  };
};

type InventoryItem = {
  name: string;
  count: number;
};

export default function CalculatorForm({
  dictionary,
  heroDictionary,
  initialValues,
}: CalculatorFormProps) {
  const [values, setValues] = useState({
    from: initialValues.from,
    to: initialValues.to,
    date: initialValues.date,
    hasElevator: false,
    floor: dictionary.floorOptions[0] ?? '1',
    serviceType: dictionary.serviceOptions[0] ?? '',
    needsAssembly: false,
  });

  const [activeRoom, setActiveRoom] = useState<keyof typeof dictionary.roomTabs>('livingRoom');
  const [customItemName, setCustomItemName] = useState('');
  const [items, setItems] = useState<InventoryItem[]>(
    dictionary.presetItems.map((name) => ({ name, count: 1 }))
  );

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  const updateValue = <Key extends keyof typeof values>(key: Key, value: (typeof values)[Key]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const updateItemCount = (name: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, count: Math.max(0, item.count + delta) }
          : item
      )
    );
  };

  const addCustomItem = () => {
    const trimmed = customItemName.trim();
    if (!trimmed) return;

    setItems((prev) => {
      const existing = prev.find((item) => item.name.toLowerCase() === trimmed.toLowerCase());
      if (existing) {
        return prev.map((item) =>
          item.name === existing.name ? { ...item, count: item.count + 1 } : item
        );
      }

      return [...prev, { name: trimmed, count: 1 }];
    });
    setCustomItemName('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      route: `${values.from} → ${values.to}`,
      date: values.date,
      hasElevator: values.hasElevator,
      floor: values.floor,
      serviceType: values.serviceType,
      needsAssembly: values.needsAssembly,
      items,
      activeRoom,
    };

    console.log('Calculate payload', payload);
  };

  return (
    <form className={styles.calculatorCard} onSubmit={handleSubmit} noValidate>
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label htmlFor="from" className={styles.label}>
            {heroDictionary.fromLabel}
          </label>
          <input
            id="from"
            name="from"
            className={styles.input}
            placeholder={heroDictionary.fromPlaceholder}
            value={values.from}
            onChange={(event) => updateValue('from', event.target.value)}
            autoComplete="address-level2"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="to" className={styles.label}>
            {heroDictionary.toLabel}
          </label>
          <input
            id="to"
            name="to"
            className={styles.input}
            placeholder={heroDictionary.toPlaceholder}
            value={values.to}
            onChange={(event) => updateValue('to', event.target.value)}
            autoComplete="address-level2"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="date" className={styles.label}>
            {dictionary.dateLabel}
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className={styles.input}
            min={today}
            value={values.date}
            onChange={(event) => updateValue('date', event.target.value)}
          />
        </div>
      </div>

      <div className={styles.inlineSmallInputs}>
        <label className={styles.checkboxField}>
          <input
            type="checkbox"
            name="elevator"
            checked={values.hasElevator}
            onChange={(event) => updateValue('hasElevator', event.target.checked)}
          />
          <span>{dictionary.elevatorLabel}</span>
        </label>

        <div className={styles.field}>
          <label htmlFor="floor" className={styles.label}>
            {dictionary.floorLabel}
          </label>
          <select
            id="floor"
            name="floor"
            className={styles.select}
            value={values.floor}
            onChange={(event) => updateValue('floor', event.target.value)}
          >
            {dictionary.floorOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.serviceRow}>
        <label htmlFor="service" className={styles.label}>
          {dictionary.serviceTypeLabel}
        </label>
        <select
          id="service"
          name="service"
          className={styles.select}
          value={values.serviceType}
          onChange={(event) => updateValue('serviceType', event.target.value)}
        >
          {dictionary.serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.innerCard}>
        <div className={styles.tabs} role="tablist" aria-label={dictionary.roomTabsLabel}>
          {(Object.keys(dictionary.roomTabs) as Array<keyof typeof dictionary.roomTabs>).map((key) => (
            <button
              key={key}
              type="button"
              className={`${styles.tab} ${activeRoom === key ? styles.active : ''}`}
              onClick={() => setActiveRoom(key)}
              role="tab"
              aria-selected={activeRoom === key}
            >
              {dictionary.roomTabs[key]}
            </button>
          ))}
        </div>

        <div className={styles.inventoryPanel}>
          <div className={styles.inventoryGrid}>
            <div className={styles.inventoryColumn}>
              <div className={styles.itemInput}>
                <label htmlFor="itemName" className={styles.label}>
                  {dictionary.itemNameLabel}
                </label>
                <input
                  id="itemName"
                  name="itemName"
                  className={styles.input}
                  placeholder={dictionary.itemNamePlaceholder}
                  value={customItemName}
                  onChange={(event) => setCustomItemName(event.target.value)}
                />
              </div>

              <div className={styles.itemList}>
                {items.map((item) => (
                  <div key={item.name} className={styles.itemRow}>
                    <button
                      type="button"
                      className={styles.counterButton}
                      onClick={() => updateItemCount(item.name, -1)}
                      aria-label={dictionary.decreaseLabel}
                    >
                      −
                    </button>
                    <div className={styles.itemName}>{item.name}</div>
                    <div className={styles.count}>{item.count}</div>
                    <button
                      type="button"
                      className={styles.counterButton}
                      onClick={() => updateItemCount(item.name, 1)}
                      aria-label={dictionary.increaseLabel}
                    >
                      +
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.inventoryColumn}>
              <label htmlFor="customItem" className={styles.label}>
                {dictionary.customItemLabel}
              </label>
              <div className={styles.customRow}>
                <input
                  id="customItem"
                  name="customItem"
                  className={styles.input}
                  placeholder={dictionary.customItemPlaceholder}
                  value={customItemName}
                  onChange={(event) => setCustomItemName(event.target.value)}
                />
                <button type="button" className={styles.counterButton} onClick={addCustomItem}>
                  {dictionary.addButton}
                </button>
              </div>

              <div className={styles.scrollList}>
                {items.map((item) => (
                  <div key={`${item.name}-scroll`} className={styles.scrollItem}>
                    <span>{item.name}</span>
                    <span>{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <label className={styles.assemblyRow}>
          <input
            type="checkbox"
            name="assembly"
            checked={values.needsAssembly}
            onChange={(event) => updateValue('needsAssembly', event.target.checked)}
          />
          <span>{dictionary.assemblyLabel}</span>
        </label>
      </div>

      <div className={styles.ctaRow}>
        <GradientButton type="submit" ariaLabel={dictionary.submitCta} className={styles.gradientButton}>
          {dictionary.submitCta}
        </GradientButton>
      </div>
    </form>
  );
}
