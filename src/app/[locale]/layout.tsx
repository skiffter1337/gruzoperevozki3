// app/[locale]/layout.tsx
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import { getDictionary } from '@/lib/dictionaries';
import { notFound } from 'next/navigation';
import {LocalType} from "@/types/types";

type Props = {
    children: ReactNode;
    params: Promise<{
        locale: string;
    }>;
};

// Поддерживаемые локали
const locales = ['he', 'ru', 'en'] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    // Проверяем валидность локали
    if (!locales.includes(locale as LocalType)) {
        return {};
    }

    const dictionary = await getDictionary(locale);

    return {
        title: dictionary.metadata.title,
        description: dictionary.metadata.description,
        alternates: {
            canonical: `https://ваш-сайт.co.il/${locale}`,
            languages: {
                'x-default': 'https://ваш-сайт.co.il',
                'he': 'https://ваш-сайт.co.il/he',
                'ru': 'https://ваш-сайт.co.il/ru',
                'en': 'https://ваш-сайт.co.il/en',
            },
        },
        openGraph: {
            // title: dictionary.metadata.ogTitle,
            // description: dictionary.metadata.ogDescription,
            locale: locale === 'he' ? 'he_IL' : locale,
        },
    };
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!locales.includes(locale as LocalType)) {
        notFound();
    }

    const dictionary = await getDictionary(locale);

    return (
        <>
            <Header
                locale={locale as LocalType}
                dictionary={{
                    nav: dictionary.header.nav,
                    languageSwitcher: dictionary.header.languageSwitcher,
                    buttons: {
                        getQuote: 'Get Quote',
                        callNow: 'Call Now',
                    },
                }}
                companyInfo={{
                    phone: '+972501234567',
                    phoneFormatted: '050-123-4567',
                }}
            />            <main className="min-h-screen">
                {children}
            </main>
        </>
    );
}

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}