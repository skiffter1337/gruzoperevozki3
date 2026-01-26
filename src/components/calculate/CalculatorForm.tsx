'use client';

import {FormEvent, useMemo, useRef, useState} from 'react';
import GradientButton from '@/components/gradient-button/GradientButton';
import {DictionaryType} from '@/lib/dictionaries';
import styles from '@/app/[locale]/calculate.module.scss';

export type CalculatorFormPayload = {
  route: string;
  date: string;
  fromHasElevator: boolean;
  fromFloor: string;
  toHasElevator: boolean;
  toFloor: string;
  serviceType: string;
  needsAssembly: boolean;
  items: InventoryItem[];
  activeRoom: keyof DictionaryType['calculatePage']['roomTabs'];
};

type CalculatorFormProps = {
  dictionary: DictionaryType['calculatePage'];
  heroDictionary: DictionaryType['homeHero'];
  initialValues: {
    from: string;
    to: string;
    date: string;
  };
  onSuccess?: (payload: CalculatorFormPayload) => void;
};

type InventoryItem = {
  name: string;
  count: number;
  room: keyof DictionaryType['calculatePage']['roomTabs'] | 'custom';
};

export default function CalculatorForm({
  dictionary,
  heroDictionary,
  initialValues,
  onSuccess,
}: CalculatorFormProps) {
  const [values, setValues] = useState({
    from: initialValues.from,
    to: initialValues.to,
    date: initialValues.date,
    fromHasElevator: false,
    fromFloor: '',
    toHasElevator: false,
    toFloor: '',
    serviceType: dictionary.serviceOptions[0] ?? '',
    needsAssembly: false,
  });

  const [activeRoom, setActiveRoom] = useState<keyof typeof dictionary.roomTabs>('livingRoom');
  const [searchTerm, setSearchTerm] = useState('');
  const [customItemName, setCustomItemName] = useState('');
  const [items, setItems] = useState<InventoryItem[]>(
    Object.entries(dictionary.roomItems).flatMap(([room, roomItems]) =>
      roomItems.map((name) => ({
        name,
        count: 0,
        room: room as keyof DictionaryType['calculatePage']['roomTabs'],
      }))
    )
  );
  const [errors, setErrors] = useState<{ from?: string; to?: string; date?: string }>({});
  const fromInputRef = useRef<HTMLInputElement>(null);
  const toInputRef = useRef<HTMLInputElement>(null);

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);
  const suggestionsId = 'israel-location-suggestions';

  const updateValue = <Key extends keyof typeof values>(key: Key, value: (typeof values)[Key]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const updateItemCount = (name: string, room: InventoryItem['room'], delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.name === name && item.room === room
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

      return [...prev, { name: trimmed, count: 1, room: 'custom' }];
    });
    setCustomItemName('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: { from?: string; to?: string; date?: string } = {};
    if (!values.from.trim()) {
      nextErrors.from = dictionary.validation.requiredFrom;
    }
    if (!values.to.trim()) {
      nextErrors.to = dictionary.validation.requiredTo;
    }
    if (!values.date) {
      nextErrors.date = dictionary.validation.requiredDate;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const payload: CalculatorFormPayload = {
      route: `${values.from} → ${values.to}`,
      date: values.date,
      fromHasElevator: values.fromHasElevator,
      fromFloor: values.fromFloor,
      toHasElevator: values.toHasElevator,
      toFloor: values.toFloor,
      serviceType: values.serviceType,
      needsAssembly: values.needsAssembly,
      items,
      activeRoom,
    };

    onSuccess?.(payload);
  };

  const filteredItems = items.filter((item) => {
    if (item.room !== activeRoom) return false;
    if (!searchTerm.trim()) return true;
    return item.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
  });

  const selectedItems = items.filter((item) => item.count > 0);

  return (
    <div className={styles.formWrapper}>
      <form
        id="calculate-form"
        className={styles.calculatorCard}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className={styles.form}>
          <div className={styles.destinationContainer}>
            <div className={styles.field}>
              <label htmlFor="from" className={styles.destLabel}>
                {heroDictionary.fromLabel}
              </label>
              <input
                id="from"
                name="from"
                className={`${styles.input} ${errors.from ? styles.inputError : ''}`}
                placeholder={heroDictionary.fromPlaceholder}
                value={values.from}
                onChange={(event) => updateValue('from', event.target.value)}
                autoComplete="address-level2"
                required
                aria-invalid={Boolean(errors.from)}
                aria-describedby={errors.from ? 'from-error' : undefined}
                list={suggestionsId}
              />
              {errors.from && (
                <span id="from-error" className={styles.errorText} role="alert">
                  {errors.from}
                </span>
              )}
            </div>
          <div className={styles.inlineSmallInputs}>
            <label className={styles.checkboxField}>
              <input
                  type="checkbox"
                  name="fromElevator"
                  checked={values.fromHasElevator}
                  onChange={(event) => updateValue('fromHasElevator', event.target.checked)}
              />
              <span className={styles.customCheckbox} />
              <span>{dictionary.elevatorLabel}</span>
            </label>

            <div className={styles.field}>
              <select
                  id="fromFloor"
                  name="fromFloor"
                  className={styles.select}
                  value={values.fromFloor}
                  onChange={(event) => updateValue('fromFloor', event.target.value)}
              >
                <option value="" disabled>
                  {dictionary.floorLabel} {/* Плейсхолдер */}
                </option>
                {dictionary.floorOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className={styles.destinationContainer}>
          <div className={styles.field}>
            <label htmlFor="to" className={styles.destLabel}>
              {heroDictionary.toLabel}
            </label>
            <input
                id="to"
                name="to"
                className={`${styles.input} ${errors.to ? styles.inputError : ''}`}
                placeholder={heroDictionary.toPlaceholder}
                value={values.to}
                onChange={(event) => updateValue('to', event.target.value)}
                autoComplete="address-level2"
                required
                aria-invalid={Boolean(errors.to)}
                aria-describedby={errors.to ? 'to-error' : undefined}
                list={suggestionsId}
            />
            {errors.to && (
              <span id="to-error" className={styles.errorText} role="alert">
                {errors.to}
              </span>
            )}
          </div>
          <div className={styles.inlineSmallInputs}>
            <label className={styles.checkboxField}>
              <input
                  type="checkbox"
                  name="toElevator"
                  checked={values.toHasElevator}
                  onChange={(event) => updateValue('toHasElevator', event.target.checked)}
              />
              <span className={styles.customCheckbox} />
              <span>{dictionary.elevatorLabel}</span>
            </label>

            <div className={styles.field}>
              <select
                  id="toFloor"
                  name="toFloor"
                  className={styles.select}
                  value={values.toFloor}
                  onChange={(event) => updateValue('toFloor', event.target.value)}
              >
                <option value="" disabled>
                  {dictionary.floorLabel} {/* Плейсхолдер */}
                </option>
                {dictionary.floorOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                ))}
              </select>
            </div>
          </div>
        </div>

      </div>
      <div className={styles.field}>
        <label htmlFor="date" className={styles.label}>
          {dictionary.dateLabel}
        </label>
        <input
          id="date"
          name="date"
          type="date"
          className={`${styles.input} ${errors.date ? styles.inputError : ''}`}
          min={today}
          value={values.date}
          onChange={(event) => updateValue('date', event.target.value)}
          required
          aria-invalid={Boolean(errors.date)}
          aria-describedby={errors.date ? 'date-error' : undefined}
        />
        {errors.date && (
          <span id="date-error" className={styles.errorText} role="alert">
            {errors.date}
          </span>
        )}
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
          <div className={styles.itemFilters}>
            <div className={styles.itemInput}>
              <label htmlFor="itemSearch" className={styles.label}>
                {dictionary.itemNameLabel}
              </label>
              <input
                id="itemSearch"
                name="itemSearch"
                className={styles.input}
                placeholder={dictionary.itemNamePlaceholder}
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
          </div>

          <div className={styles.itemList}>
            {filteredItems.map((item) => (
              <div key={`${item.room}-${item.name}`} className={styles.itemRow}>
                <button
                  type="button"
                  className={styles.counterButton}
                  onClick={() => updateItemCount(item.name, item.room, 1)}
                  aria-label={dictionary.increaseLabel}
                >
                  +
                </button>
                <div className={styles.count}>{item.count}</div>
                <button
                    type="button"
                    className={styles.counterButton}
                    onClick={() => updateItemCount(item.name, item.room, -1)}
                    aria-label={dictionary.decreaseLabel}
                >
                  −
                </button>
                <div className={styles.itemName}>{item.name}</div>

              </div>
            ))}
          </div>
          <div className={styles.selectedItems}>
            <h3 className={styles.selectedItemsTitle}>{dictionary.selectedItemsLabel}</h3>
            {selectedItems.length === 0 ? (
              <p className={styles.selectedItemsEmpty}>{dictionary.selectedItemsEmpty}</p>
            ) : (
              <div className={styles.selectedItemsList}>
                {selectedItems.map((item) => (
                  <div key={`${item.room}-${item.name}`} className={styles.selectedItemRow}>
                    <span className={styles.selectedItemCount}>{item.count}</span>
                    <span className={styles.selectedItemName}>{item.name}</span>
                  </div>
                ))}
              </div>
            )}
            <div className={styles.itemInput}>
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
                <button type="button" className={styles.addItemBtn} onClick={addCustomItem}>
                  {dictionary.addButton}
                </button>
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
          <span className={styles.customCheckbox} />
          <span>{dictionary.assemblyLabel}</span>
        </label>
      </div>

    </form>
    <div className={styles.ctaRow}>
      <GradientButton type="submit" form="calculate-form" ariaLabel={dictionary.submitCta}>
        {dictionary.submitCta}
      </GradientButton>
    </div>
    </div>
  );
}
