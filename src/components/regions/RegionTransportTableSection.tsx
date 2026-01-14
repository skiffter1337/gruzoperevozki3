import {DictionaryType, TransportTableRow} from '@/lib/dictionaries';
import {Locale} from '../../../i18n-config';

import styles from './RegionTransportTableSection.module.scss';

type RegionTransportTableSectionProps = {
    locale: Locale;
    regionTitle: string;
    regionSlug: string;
    dictionary: DictionaryType['regionPage']['transportTable'];
};

function formatTemplate(template: string, region: string) {
    return template.replace('{region}', region);
}

function resolveRows(
    rowsByRegion: DictionaryType['regionPage']['transportTable']['rowsByRegion'],
    regionSlug: string,
): TransportTableRow[] {
    const regionRows = rowsByRegion[regionSlug];
    if (regionRows?.length) return regionRows;
    const fallback = Object.values(rowsByRegion)[0];
    return fallback ?? [];
}

export default function RegionTransportTableSection({
    locale,
    regionTitle,
    regionSlug,
    dictionary,
}: RegionTransportTableSectionProps) {
    const rows = resolveRows(dictionary.rowsByRegion, regionSlug);
    const title = formatTemplate(dictionary.title, regionTitle);

    return (
        <section className={styles.section} aria-labelledby="region-transport-title" dir={locale === 'he' ? 'rtl' : 'ltr'}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 id="region-transport-title" className={styles.title}>
                        {title}
                    </h2>
                </div>

                <div className={styles.grid} role="table" aria-label={dictionary.ariaLabel}>
                    <div className={styles.row} role="row">
                        {dictionary.headers.map((header) => (
                            <div key={header} className={`${styles.cell} ${styles.headerCell}`} role="columnheader">
                                {header}
                            </div>
                        ))}
                    </div>

                    {rows.map((row, rowIndex) => (
                        <div className={styles.row} role="row" key={`${row.transport}-${rowIndex}`}>
                            <div className={styles.cell} role="cell">
                                {row.transport}
                            </div>
                            <div className={styles.cell} role="cell">
                                {row.size}
                            </div>
                            <div className={styles.cell} role="cell">
                                {row.distance}
                            </div>
                            <div className={styles.cell} role="cell">
                                {row.services}
                            </div>
                            <div className={styles.cell} role="cell">
                                {row.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
