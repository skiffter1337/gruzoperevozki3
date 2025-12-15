// components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Header.module.scss';
import {getTranslatedUrl} from "@/lib/url-helper";

interface HeaderProps {
    locale: 'he' | 'ru' | 'en';
    dictionary: {
        nav: {
            home: string;
            services: string;
            about: string;
            contact: string;
            blog: string;
        };
        languageSwitcher: {
            he: string;
            ru: string;
            en: string;
        };
        buttons: {
            getQuote: string;
            callNow: string;
        };
    };
    companyInfo?: {
        phone: string;
        phoneFormatted?: string;
    };
}

export default function Header({ locale, dictionary, companyInfo }: HeaderProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Обработчик скролла для эффекта "липкого" хедера
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Обработчик переключения языка
    const handleLanguageChange = async (newLocale: 'he' | 'ru' | 'en') => {
        if (newLocale === locale) return;

        try {
            // Получаем переведенный URL для текущего пути
            const translatedPath = await getTranslatedUrl(pathname, newLocale);
            router.push(translatedPath);
        } catch (error) {
            // Fallback: просто меняем локаль в пути
            const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
            router.push(newPath);
        }
    };

    // Определяем активную страницу
    const isActive = (path: string) => {
        const currentPath = pathname.split('/').filter(Boolean);
        const targetPath = path.split('/').filter(Boolean);
        return currentPath[currentPath.length - 1] === targetPath[targetPath.length - 1];
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Логотип */}
                <div className={styles.logo}>
                    <Link href={`/${locale}`}>
                        <Image
                            src="/logo.svg"
                            alt="Company Logo"
                            width={180}
                            height={60}
                            priority
                        />
                    </Link>
                </div>

                {/* Навигация для десктопа */}
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={`${styles.navItem} ${pathname.endsWith(`/${locale}`) ? styles.active : ''}`}>
                            <Link href={`/${locale}`} className={styles.navLink}>
                                {dictionary.nav.home}
                            </Link>
                        </li>
                        <li className={`${styles.navItem} ${isActive(`/${locale}/services`) ? styles.active : ''}`}>
                            <Link href={`/${locale}/services`} className={styles.navLink}>
                                {dictionary.nav.services}
                            </Link>
                        </li>
                        <li className={`${styles.navItem} ${isActive(`/${locale}/about`) ? styles.active : ''}`}>
                            <Link href={`/${locale}/about`} className={styles.navLink}>
                                {dictionary.nav.about}
                            </Link>
                        </li>
                        <li className={`${styles.navItem} ${isActive(`/${locale}/contact`) ? styles.active : ''}`}>
                            <Link href={`/${locale}/contact`} className={styles.navLink}>
                                {dictionary.nav.contact}
                            </Link>
                        </li>
                        <li className={`${styles.navItem} ${isActive(`/${locale}/blog`) ? styles.active : ''}`}>
                            <Link href={`/${locale}/blog`} className={styles.navLink}>
                                {dictionary.nav.blog}
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Правая часть: язык и CTA */}
                <div className={styles.rightSection}>
                    {/* Переключатель языка */}
                    <div className={styles.languageSwitcher}>
                        <button
                            className={`${styles.langButton} ${locale === 'he' ? styles.active : ''}`}
                            onClick={() => handleLanguageChange('he')}
                            aria-label="Switch to Hebrew"
                            dir="rtl"
                        >
                            עברית
                        </button>
                        <span className={styles.langSeparator}>|</span>
                        <button
                            className={`${styles.langButton} ${locale === 'ru' ? styles.active : ''}`}
                            onClick={() => handleLanguageChange('ru')}
                            aria-label="Switch to Russian"
                        >
                            Русский
                        </button>
                        <span className={styles.langSeparator}>|</span>
                        <button
                            className={`${styles.langButton} ${locale === 'en' ? styles.active : ''}`}
                            onClick={() => handleLanguageChange('en')}
                            aria-label="Switch to English"
                        >
                            English
                        </button>
                    </div>

                    {/* Кнопки CTA */}
                    <div className={styles.ctaButtons}>
                        {companyInfo?.phone && (
                            <a
                                href={`tel:${companyInfo.phone}`}
                                className={styles.phoneButton}
                            >
                                <span className={styles.phoneIcon}>📞</span>
                                <span className={styles.phoneText}>
                  {companyInfo.phoneFormatted || companyInfo.phone}
                </span>
                            </a>
                        )}

                        <button className={styles.quoteButton}>
                            {dictionary.buttons.getQuote}
                        </button>
                    </div>

                    {/* Кнопка бургер меню для мобильных */}
                    <button
                        className={styles.menuToggle}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        <span className={`${styles.burgerLine} ${isMenuOpen ? styles.open : ''}`} />
                        <span className={`${styles.burgerLine} ${isMenuOpen ? styles.open : ''}`} />
                        <span className={`${styles.burgerLine} ${isMenuOpen ? styles.open : ''}`} />
                    </button>
                </div>
            </div>

            {/* Мобильное меню */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuContent}>
                    <nav className={styles.mobileNav}>
                        <ul className={styles.mobileNavList}>
                            <li className={styles.mobileNavItem}>
                                <Link
                                    href={`/${locale}`}
                                    className={styles.mobileNavLink}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {dictionary.nav.home}
                                </Link>
                            </li>
                            <li className={styles.mobileNavItem}>
                                <Link
                                    href={`/${locale}/services`}
                                    className={styles.mobileNavLink}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {dictionary.nav.services}
                                </Link>
                            </li>
                            <li className={styles.mobileNavItem}>
                                <Link
                                    href={`/${locale}/about`}
                                    className={styles.mobileNavLink}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {dictionary.nav.about}
                                </Link>
                            </li>
                            <li className={styles.mobileNavItem}>
                                <Link
                                    href={`/${locale}/contact`}
                                    className={styles.mobileNavLink}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {dictionary.nav.contact}
                                </Link>
                            </li>
                            <li className={styles.mobileNavItem}>
                                <Link
                                    href={`/${locale}/blog`}
                                    className={styles.mobileNavLink}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {dictionary.nav.blog}
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.mobileLanguageSwitcher}>
                        <button
                            className={`${styles.mobileLangButton} ${locale === 'he' ? styles.active : ''}`}
                            onClick={() => {
                                handleLanguageChange('he');
                                setIsMenuOpen(false);
                            }}
                        >
                            עברית
                        </button>
                        <button
                            className={`${styles.mobileLangButton} ${locale === 'ru' ? styles.active : ''}`}
                            onClick={() => {
                                handleLanguageChange('ru');
                                setIsMenuOpen(false);
                            }}
                        >
                            Русский
                        </button>
                        <button
                            className={`${styles.mobileLangButton} ${locale === 'en' ? styles.active : ''}`}
                            onClick={() => {
                                handleLanguageChange('en');
                                setIsMenuOpen(false);
                            }}
                        >
                            English
                        </button>
                    </div>

                    {companyInfo?.phone && (
                        <div className={styles.mobileContact}>
                            <a
                                href={`tel:${companyInfo.phone}`}
                                className={styles.mobilePhone}
                            >
                                <span className={styles.mobilePhoneIcon}>📞</span>
                                {companyInfo.phoneFormatted || companyInfo.phone}
                            </a>
                        </div>
                    )}
                </div>

                {/* Оверлей для закрытия меню */}
                <div
                    className={styles.menuOverlay}
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                />
            </div>
        </header>
    );
}