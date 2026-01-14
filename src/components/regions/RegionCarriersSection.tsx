'use client';

import Image from 'next/image';
import {useMemo} from 'react';

import {DictionaryType} from '@/lib/dictionaries';
import styles from '@/components/home/CarriersSection.module.scss';

type CarrierRegion = DictionaryType['homeCarriers']['tabs'][number]['value'];

type RegionCarriersSectionProps = {
    title: string;
    emptyLabel: string;
    dictionary: DictionaryType['homeCarriers'];
    region: CarrierRegion | null;
};

export default function RegionCarriersSection({title, emptyLabel, dictionary, region}: RegionCarriersSectionProps) {
    const filteredCarriers = useMemo(() => {
        if (!region) return [];
        return dictionary.carriers.filter((carrier) => carrier.region === region);
    }, [dictionary.carriers, region]);

    return (
        <section className={styles.section} aria-labelledby="region-carriers-title">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 id="region-carriers-title" className={styles.blockTitle}>
                        {title}
                    </h2>
                </div>

                <div className={styles.cardsGrid}>
                    {filteredCarriers.length > 0 ? (
                        filteredCarriers.map((carrier, index) => (
                            <div key={`${carrier.name}-${index}`} className={styles.cardWrapper}>
                                <a
                                    href={carrier.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.cardLink}
                                    aria-label={`${carrier.name} – ${dictionary.cardAriaLabel}`}
                                >
                                    <div className={styles.cardImage}>
                                        <Image
                                            src={carrier.image}
                                            alt={carrier.name}
                                            fill
                                            priority={index < 2}
                                            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 360px"
                                            style={{objectFit: 'cover'}}
                                        />
                                    </div>
                                </a>
                                <div className={styles.carrierInfo}>
                                    <div className={styles.carrierName}>{carrier.name}</div>
                                    <ul className={styles.carrierContacts}>
                                        <li>{carrier.contactInfo.info}</li>
                                        <li>{carrier.contactInfo.contacts}</li>
                                        <li>{carrier.contactInfo.phoneNumber}</li>
                                    </ul>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className={styles.noResults}>{emptyLabel}</p>
                    )}
                </div>
            </div>
        </section>
    );
}
