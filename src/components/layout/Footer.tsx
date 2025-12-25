import Link from 'next/link';
import {Locale} from '../../../i18n-config';
import {DictionaryType, FooterLink, FooterSocialLink} from '@/lib/dictionaries';
import {buildLocalizedPath, RouteKey} from '@/lib/localized-paths';
import FacebookIcon from '@/components/icons/FacebookIcon';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import TelegramIcon from '@/components/icons/TelegramIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import styles from './Footer.module.scss';

type FooterProps = {
    locale: Locale;
    dictionary: DictionaryType['footer'];
    company: DictionaryType['company'];
};

const anchorTargets: Record<NonNullable<FooterLink['anchor']>, string> = {
    about: 'about-section',
    articles: 'articles-section',
    services: 'services-section',
    testimonials: 'testimonials-section',
    whyUs: 'why-us-section',
    regions: 'regions-section',
    carriers: 'carriers-section',
    calculate: 'booking-section',
};

const socialIconMap: Record<FooterSocialLink['network'], JSX.Element> = {
    facebook: <FacebookIcon/>,
    whatsapp: <WhatsAppIcon/>,
    telegram: <TelegramIcon/>,
    twitter: <TwitterIcon/>,
};

export default function Footer({locale, dictionary, company}: FooterProps) {
    const homePath = buildLocalizedPath(locale, 'home');

    const sanitizePhone = (value?: string) => value?.replace(/\D/g, '') ?? '';

    const buildAnchorHref = (anchor?: FooterLink['anchor']) => {
        if (!anchor) return homePath;
        const targetId = anchorTargets[anchor];
        if (!targetId) return homePath;
        return `${homePath}#${targetId}`;
    };

    const buildNestedPath = (route: RouteKey, path?: string) => {
        const formattedPath = path?.replace(/^\//, '');
        return formattedPath ? `${buildLocalizedPath(locale, route)}/${formattedPath}` : buildLocalizedPath(locale, route);
    };

    const replacePlaceholders = (value: string) => {
        const replacements: Record<string, string> = {
            '{phoneDigits}': sanitizePhone(company.phone),
            '{phone}': company.phone ?? '',
            '{email}': company.email ?? '',
        };

        return Object.entries(replacements).reduce((current, [key, replacement]) => current.replaceAll(key, replacement), value);
    };

    const getSocialHref = (link: FooterSocialLink) => {
        const replaced = replacePlaceholders(link.href);
        return replaced.includes('{') || !replaced ? '#' : replaced;
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <nav className={styles.columns} aria-label={dictionary.ariaLabel}>
                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <span className={styles.columnTitle}>{dictionary.columns.home.title}</span>
                            <span className={styles.headerSquare} aria-hidden />
                        </div>
                        <span className={styles.columnUnderline} aria-hidden />

                        <ul className={styles.linksList}>
                            {dictionary.columns.home.links.map((link) => (
                                <li key={`${link.label}-${link.anchor}`}>
                                    <Link href={buildAnchorHref(link.anchor)} className={styles.link} prefetch={false}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <span className={styles.columnTitle}>{dictionary.columns.transportation.title}</span>
                            <span className={styles.headerSquare} aria-hidden />
                        </div>
                        <span className={styles.columnUnderline} aria-hidden />

                        <ul className={styles.linksList}>
                            {dictionary.columns.transportation.links.map((link) => (
                                <li key={`${link.label}-${link.path}`}>
                                    <Link
                                        href={buildNestedPath('transportation', link.path)}
                                        className={styles.link}
                                        prefetch={false}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <span className={styles.columnTitle}>{dictionary.columns.services.title}</span>
                            <span className={styles.headerSquare} aria-hidden />
                        </div>
                        <span className={styles.columnUnderline} aria-hidden />

                        <ul className={styles.linksList}>
                            {dictionary.columns.services.links.map((link) => (
                                <li key={`${link.label}-${link.path}`}>
                                    <Link
                                        href={buildNestedPath('services', link.path)}
                                        className={styles.link}
                                        prefetch={false}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <span className={styles.columnTitle}>{dictionary.columns.contacts.title}</span>
                            <span className={styles.headerSquare} aria-hidden />
                        </div>
                        <span className={styles.columnUnderline} aria-hidden />

                        <div className={styles.contactCard} itemScope itemType="https://schema.org/Organization">
                            <meta itemProp="name" content={company.name}/>
                            <dl className={styles.contactList}>
                                <div className={styles.contactRow}>
                                    <dt className={styles.contactLabel}>{dictionary.columns.contacts.addressLabel}</dt>
                                    <dd className={styles.contactValue} itemProp="address">{company.address}</dd>
                                </div>
                                <div className={styles.contactRow}>
                                    <dt className={styles.contactLabel}>{dictionary.columns.contacts.emailLabel}</dt>
                                    <dd className={styles.contactValue}>
                                        <a href={`mailto:${company.email}`} className={styles.link} itemProp="email">
                                            {company.email}
                                        </a>
                                    </dd>
                                </div>
                                <div className={styles.contactRow}>
                                    <dt className={styles.contactLabel}>{dictionary.columns.contacts.phoneLabel}</dt>
                                    <dd className={styles.contactValue}>
                                        <a
                                            href={`tel:${sanitizePhone(company.phone)}`}
                                            className={styles.link}
                                            itemProp="telephone"
                                        >
                                            {company.phoneFormatted || company.phone}
                                        </a>
                                    </dd>
                                </div>
                            </dl>

                            <div className={styles.socialBlock}>
                                <div className={styles.contactLabel}>{dictionary.columns.contacts.socialLabel}</div>
                                <div className={styles.socialLinks}>
                                    {dictionary.columns.contacts.socialLinks.map((social) => (
                                        <a
                                            key={social.network}
                                            href={getSocialHref(social)}
                                            className={styles.socialLink}
                                            aria-label={social.label}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {socialIconMap[social.network]}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    );
}
