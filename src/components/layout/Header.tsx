'use client';

import {ReactNode, useEffect, useState} from 'react';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import {Locale} from '../../../i18n-config';
import {
    buildLocalizedPath,
    RouteKey,
} from '@/lib/localized-paths';
import {getTranslatedUrl} from '@/lib/url-helper';
import styles from './Header.module.scss';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import FlagRuIcon from '@/components/icons/FlagEnIcon';
import FlagEnIcon from '@/components/icons/FlagEnIcon';
import FlagIsIcon from '@/components/icons/FlagIsIcon';

interface HeaderProps {
    locale: Locale;
    dictionary: {
        popups?: Partial<Record<RouteKey, { label: string; path?: string; href?: string }[]>>;
        nav: {
            home: string;
            transportation: string;
            services: string;
            calculate: string;
            articles: string;
            about: string;
            contact: string;
        };
        languageSwitcher: {
            he: string;
            ru: string;
            en: string;
        };
        company?: {
            phone?: string;
            phoneFormatted?: string;
            email?: string;
        };
    };
}

const navOrder: RouteKey[] = ['home', 'transportation', 'services', 'calculate', 'about', 'contact'];

export default function Header({locale, dictionary}: HeaderProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activePopup, setActivePopup] = useState<RouteKey | null>(null);
    const [activeAccordion, setActiveAccordion] = useState<RouteKey | null>(null);

    const locales: Locale[] = ['ru', 'en', 'he'];
    const localeLabels: Record<Locale, ReactNode> = {
        ru: <FlagRuIcon/>,
        en: <FlagEnIcon/>,
        he: <FlagIsIcon/>,
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getNextLocale = () => {
        const currentIndex = locales.indexOf(locale);
        const nextIndex = (currentIndex + 1) % locales.length;
        return locales[nextIndex];
    };

    const handleLanguageChange = async (newLocale?: Locale) => {
        const targetLocale = newLocale ?? getNextLocale();
        if (targetLocale === locale) return;
        const translatedPath = getTranslatedUrl(pathname, targetLocale);
        router.push(translatedPath);
    };

    const isActive = (route: RouteKey) => {
        const target = buildLocalizedPath(locale, route);
        if (route === 'home') return pathname === `/${locale}` || pathname === `/${locale}/`;
        return pathname.startsWith(target);
    };

    const navLabels: Record<RouteKey, string> = {
        home: dictionary.nav.home,
        transportation: dictionary.nav.transportation,
        services: dictionary.nav.services,
        calculate: dictionary.nav.calculate,
        articles: dictionary.nav.articles,
        about: dictionary.nav.about,
        contact: dictionary.nav.contact,
    };

    const sanitizePhone = (phone?: string) => phone?.replace(/\D/g, '');

    const replacePlaceholders = (value: string) => {
        const replacements: Record<string, string> = {
            '{phone}': dictionary.company?.phone ?? '',
            '{phoneDigits}': sanitizePhone(dictionary.company?.phone) ?? '',
            '{email}': dictionary.company?.email ?? '',
        };

        let hasMissingValue = false;

        const replaced = Object.entries(replacements).reduce((current, [key, replacement]) => {
            if (current.includes(key) && !replacement) {
                hasMissingValue = true;
            }

            return current.replaceAll(key, replacement);
        }, value);

        return hasMissingValue ? '' : replaced;
    };

    const popupLinks: Partial<Record<RouteKey, { label: string; href: string }[]>> = Object.fromEntries(
        Object.entries(dictionary.popups ?? {}).map(([routeKey, links]) => {
            const route = routeKey as RouteKey;

            const formattedLinks = (links ?? []).map((link) => {
                const href = link.path
                    ? `${buildLocalizedPath(locale, route)}/${link.path.replace(/^\//, '')}`
                    : link.href
                        ? replacePlaceholders(link.href)
                        : '#';

                const hasPlaceholders = href.includes('{');

                return {
                    label: link.label,
                    href: !hasPlaceholders && href ? href : '#',
                };
            });

            return [route, formattedLinks];
        })
    );

    const hasPopup = (route: RouteKey) => Boolean(popupLinks[route]);

    const toggleAccordion = (route: RouteKey) => {
        setActiveAccordion((prev) => (prev === route ? null : route));
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {navOrder.map((route, index) => (
                            <li
                                key={route}
                                className={`${styles.navItem} ${isActive(route) ? styles.active : ''}`}
                                onMouseEnter={() => hasPopup(route) && setActivePopup(route)}
                                onMouseLeave={() => setActivePopup((current) => (current === route ? null : current))}
                            >
                                <span>↓</span>
                                <Link
                                    href={buildLocalizedPath(locale, route)}
                                    className={`${styles.navLink} ${hasPopup(route) ? styles.navLinkWithPopup : ''}`}
                                    onClick={(event) => {
                                        if (hasPopup(route)) {
                                            event.preventDefault();
                                            setActivePopup((current) => (current === route ? null : route));
                                        }
                                    }}
                                >
                                    {navLabels[route]}
                                </Link>
                                {index === navOrder.length - 1 && (
                                    <span>↓</span>
                                )}

                                {hasPopup(route) && activePopup === route && (
                                    <div className={styles.popupMenu}>
                                        <ul>
                                            {popupLinks[route]?.map((link) => (
                                                <li key={link.href}>
                                                    <Link href={link.href} className={styles.popupLink}>
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className={styles.languageSwitcher}>
                        <button
                            className={`${styles.langButton} ${styles.active}`}
                            onClick={() => handleLanguageChange()}
                            aria-pressed
                        >
                            {localeLabels[locale]}
                        </button>
                    </div>
                </nav>

                <div className={styles.rightSection}>
                    <button
                        className={styles.menuToggle}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        <span className={`${styles.burgerLine} ${isMenuOpen ? styles.open : ''}`}/>
                        <span className={`${styles.burgerLine} ${isMenuOpen ? styles.open : ''}`}/>
                        <span className={`${styles.burgerLine} ${isMenuOpen ? styles.open : ''}`}/>
                    </button>
                </div>
            </div>

            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuContent}>
                    <nav className={styles.mobileNav}>
                        <ul className={styles.mobileNavList}>
                            {navOrder.map((route) => (
                                <li key={route} className={styles.mobileNavItem}>
                                    {hasPopup(route) ? (
                                        <>
                                            <button
                                                className={`${styles.mobileNavLink} ${styles.mobileAccordionTrigger} ${
                                                    activeAccordion === route ? styles.expanded : ''
                                                }`}
                                                onClick={() => toggleAccordion(route)}
                                                type="button"
                                                aria-expanded={activeAccordion === route}
                                            >
                                                {navLabels[route]}
                                                <span
                                                    className={`${styles.accordionIcon} ${
                                                        activeAccordion === route ? styles.accordionIconExpanded : ''
                                                    }`}
                                                    aria-hidden
                                                >
                                                    <ChevronRightIcon focusable="false" />
                                                </span>
                                            </button>
                                            <div
                                                className={`${styles.mobileSubmenu} ${
                                                    activeAccordion === route ? styles.openSubmenu : ''
                                                }`}
                                            >
                                                {popupLinks[route]?.map((link) => (
                                                    <Link
                                                        key={link.href}
                                                        href={link.href}
                                                        className={styles.mobileSubmenuLink}
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {link.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={buildLocalizedPath(locale, route)}
                                            className={styles.mobileNavLink}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {navLabels[route]}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className={styles.mobileLanguageSwitcher}>
                        <button
                            className={`${styles.mobileLangButton} ${styles.active}`}
                            onClick={() => {
                                handleLanguageChange();
                                setIsMenuOpen(false);
                            }}
                        >
                            {localeLabels[locale]}
                        </button>
                    </div>
                </div>

                <div
                    className={styles.menuOverlay}
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                />
            </div>
        </header>
    );
}
