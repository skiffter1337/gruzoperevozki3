'use client';
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Locale } from '../../../i18n-config';
import {
  buildLocalizedPath,
  RouteKey,
} from '@/lib/localized-paths';
import { getTranslatedUrl } from '@/lib/url-helper';
import styles from './Header.module.scss';

interface HeaderProps {
  locale: Locale;
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

const navOrder: RouteKey[] = ['home', 'services', 'about', 'contact', 'blog'];

export default function Header({ locale, dictionary, companyInfo }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = async (newLocale: Locale) => {
    if (newLocale === locale) return;
    const translatedPath = getTranslatedUrl(pathname, newLocale);
    router.push(translatedPath);
  };

  const isActive = (route: RouteKey) => {
    const target = buildLocalizedPath(locale, route);
    if (route === 'home') return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(target);
  };

  const navLabels: Record<RouteKey, string> = {
    home: dictionary.nav.home,
    services: dictionary.nav.services,
    about: dictionary.nav.about,
    contact: dictionary.nav.contact,
    blog: dictionary.nav.blog,
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href={`/${locale}`} aria-label="Home">
            <Image
              src="/logo.svg"
              alt="Company Logo"
              width={180}
              height={60}
              priority
            />
          </Link>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navOrder.map((route) => (
              <li
                key={route}
                className={`${styles.navItem} ${isActive(route) ? styles.active : ''}`}
              >
                <Link href={buildLocalizedPath(locale, route)} className={styles.navLink}>
                  {navLabels[route]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.rightSection}>
          <div className={styles.languageSwitcher}>
            {(['he', 'ru', 'en'] as Locale[]).map((lng) => (
              <button
                key={lng}
                className={`${styles.langButton} ${locale === lng ? styles.active : ''}`}
                onClick={() => handleLanguageChange(lng)}
                aria-pressed={locale === lng}
              >
                {dictionary.languageSwitcher[lng]}
              </button>
            ))}
          </div>

          <div className={styles.ctaButtons}>
            {companyInfo?.phone && (
              <a href={`tel:${companyInfo.phone}`} className={styles.callButton}>
                {dictionary.buttons.callNow}
              </a>
            )}
            <button className={styles.quoteButton}>{dictionary.buttons.getQuote}</button>
          </div>

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

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuContent}>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {navOrder.map((route) => (
                <li key={route} className={styles.mobileNavItem}>
                  <Link
                    href={buildLocalizedPath(locale, route)}
                    className={styles.mobileNavLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {navLabels[route]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.mobileLanguageSwitcher}>
            {(['he', 'ru', 'en'] as Locale[]).map((lng) => (
              <button
                key={lng}
                className={`${styles.mobileLangButton} ${locale === lng ? styles.active : ''}`}
                onClick={() => {
                  handleLanguageChange(lng);
                  setIsMenuOpen(false);
                }}
              >
                {dictionary.languageSwitcher[lng]}
              </button>
            ))}
          </div>

          {companyInfo?.phone && (
            <div className={styles.mobileContact}>
              <a href={`tel:${companyInfo.phone}`} className={styles.mobilePhone}>
                <span className={styles.mobilePhoneIcon}>📞</span>
                {companyInfo.phoneFormatted || companyInfo.phone}
              </a>
            </div>
          )}
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
