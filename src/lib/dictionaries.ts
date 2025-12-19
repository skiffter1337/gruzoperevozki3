import { Locale } from '../../i18n-config';
import { RouteKey } from './localized-paths';

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface HomeSliderItem {
    title: string;
    slug: string;
    image: 'crane' | 'transport' | 'furniture' | 'flat';
}

export interface RegionSliderItem {
    title: string;
    image?: string;
}
export type DictionaryType = {
    metadata: {
        title: string;
        description: string;
        keywords: string;
    };
    header: {
        popups?: Partial<Record<RouteKey, PopupLink[]>>;
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
    };
    homeHero: {
        title: string;
        fromLabel: string;
        fromPlaceholder: string;
        toLabel: string;
        toPlaceholder: string;
        datePlaceholder: string;
        submit: string;
        submitLabel: string;
        requiredMessage: string;
        sliderHeading: string;
        sliderCta: string;
        sliderPrevious: string;
        sliderNext: string;
        sliderItemLabelPrefix: string;
        sliderItems: HomeSliderItem[];
    };
    homeRegions: {
        heading: string;
        sliderPrevious: string;
        sliderNext: string;
        sliderItemLabelPrefix: string;
        sliderItems: RegionSliderItem[];
    };
    company: {
        name: string;
        address: string;
        phone: string;
        phoneFormatted: string;
        email: string;
        openingHours: string;
    };
    servicesPage: {
        title: string;
        description: string;
        metaTitle: string;
        metaDescription: string;
        whyChooseUs: {
            title: string;
            features: Feature[];
        };
        ctaTitle: string;
        ctaDescription: string;
        ctaButton: string;
    };
    calculatePage: {
        title: string;
        description: string;
        metaTitle: string;
        metaDescription: string;
        placeholderNotice: string;
        receivedDataTitle: string;
        missingData: string;
    };
    urls?: Record<string, string>;
};

type PopupLink = {
    label: string;
    path?: string;
    href?: string;
};

const defaultDictionary: DictionaryType = {
    metadata: {
        title: 'Default Title',
        description: 'Default Description',
        keywords: 'default, keywords, sharon, center, south, north, jerusalem',
    },
    homeHero: {
        title: "Хотите заказать перевозку?",
        fromLabel: "Откуда",
        fromPlaceholder: "Город",
        toLabel: "Куда",
        toPlaceholder: "Город",
        datePlaceholder: "Выберите дату",
        submit: "Нажмите",
        submitLabel: "чтобы рассчитать стоимость перевозки",
        requiredMessage: "Пожалуйста, заполните все поля",
        sliderHeading: "Услуги",
        sliderCta: "Подробнее",
        sliderPrevious: "Предыдущий слайд",
        sliderNext: "Следующий слайд",
        sliderItemLabelPrefix: "Перейти к услуге",
        sliderItems: [
            { title: "Перевозка краном", slug: "perevozka-kranom", image: 'crane' },
            { title: "Транспортные услуги", slug: "transportnye-uslugi", image: 'transport' },
            { title: "Перевозка мебели", slug: "perevozka-mebeli", image: 'furniture' },
            { title: "Квартирный переезд", slug: "kvartirnyj-pereezd", image: 'flat' },
        ],
    },
    homeRegions: {
        heading: 'Выбор района',
        sliderPrevious: 'Предыдущий район',
        sliderNext: 'Следующий район',
        sliderItemLabelPrefix: 'Показать район',
        sliderItems: [
            {title: "Низменность", image: "/images/lowland.png"},
            {title: "Шарон", image: "/images/sharon.png"},
            {title: "Центр", image: "/images/center.png"},
            {title: "Юг", image: "/images/south.png"},
            {title: "Север", image: "/images/north.png"},
            {title: "Иерусалим и окрестности", image: "/images/jerusalem.png"}
        ],
    },
    servicesPage: {
        title: "Наши услуги",
        description: "Мы предлагаем широкий спектр профессиональных услуг по переезду по всему Израилю. Каждая услуга выполняется опытной командой с современным оборудованием.",
        metaTitle: "Услуги по переезду | Ведущая транспортная компания в Израиле",
        metaDescription: "Профессиональные услуги по переезду для любых нужд: переезд квартиры, офиса, небольшие перевозки и др. Справедливые цены и вежливое обслуживание.",
        whyChooseUs: {
            title: "Почему выбирают нас?",
            features: [
                {
                    icon: "🚚",
                    title: "Современное оборудование",
                    description: "Мы используем самое современное оборудование для безопасных и профессиональных перевозок"
                },
                {
                    icon: "⏰",
                    title: "Доступность 24/7",
                    description: "Доступны для вас в любое время, каждый день, включая выходные и праздники"
                },
                {
                    icon: "💰",
                    title: "Справедливые цены",
                    description: "Прозрачные цены без сюрпризов. Полная гарантия на имущество"
                }
            ]
        },
        ctaTitle: "Готовы начать?",
        ctaDescription: "Свяжитесь с нами сегодня для получения бесплатной консультации без обязательств. Будем рады помочь вам с любыми нуждами в переезде!",
        ctaButton: "Получить предложение"
    },
    calculatePage: {
        title: "Рассчитать стоимость",
        description: "Введите детали маршрута, и мы подготовим для вас точную стоимость перевозки.",
        metaTitle: "Рассчитать стоимость переезда | Быстрый расчет",
        metaDescription: "Узнайте стоимость перевозки по Израилю, указав города отправления и назначения, а также дату переезда.",
        placeholderNotice: "Расширенная форма появится здесь. Мы используем введенные вами данные, чтобы подготовить расчет.",
        receivedDataTitle: "Полученные данные",
        missingData: "Данные не были переданы. Пожалуйста, вернитесь и заполните форму.",
    },
    company: {
        name: "Ваша транспортная компания",
        address: "ул. Примерная 123, Тель-Авив, Израиль",
        phone: "+972501234567",
        phoneFormatted: "050-123-4567",
        email: "info@example.co.il",
        openingHours: "Пн-Пт 08:00-18:00 | Сб 08:00-13:00"
    },
    header: {
        popups: {
            transportation: [
                { label: "Apartments", path: "kvartiry" },
                { label: "Offices", path: "ofisnye" },
                { label: "Private house", path: "chastnyj-dom" },
                { label: "Small move", path: "malyj" },
            ],
            services: [
                { label: "Packing", path: "upakovka" },
                { label: "Storage", path: "hranenie" },
                { label: "Late moves", path: "pozdnie-perevozki" },
            ],
            contact: [
                { label: "Call us", href: "tel:{phone}" },
                { label: "Email", href: "mailto:{email}" },
                { label: "WhatsApp", href: "https://wa.me/{phoneDigits}" },
                { label: "Facebook", href: "#" },
            ],
        },
        nav: {
            "home": "Home",
            "transportation": "Transportation",
            "services": "Additional services",
            "calculate": "Calculate cost",
            "articles": "Articles",
            "about": "About",
            "contact": "Contact"
        },
        languageSwitcher: {
            he: 'Hebrew',
            ru: 'Russian',
            en: 'English',
        },
    },
};

const loadDictionary = (locale: Locale) =>
    import(`./dictionaries/${locale}.json`).then(
        (module) => module.default as Partial<DictionaryType>
    );

const dictionaryLoaders: Record<Locale, () => Promise<Partial<DictionaryType>>> = {
    he: () => loadDictionary('he'),
    ru: () => loadDictionary('ru'),
    en: () => loadDictionary('en'),
};

export async function getDictionary(locale: Locale): Promise<DictionaryType> {
    try {
        const loadedDict = await dictionaryLoaders[locale]();

        return {
            ...defaultDictionary,
            ...loadedDict,
            metadata: {
                ...defaultDictionary.metadata,
                ...loadedDict.metadata,
            },
            header: {
                ...defaultDictionary.header,
                ...loadedDict.header,
                popups: {
                    ...defaultDictionary.header.popups,
                    ...loadedDict.header?.popups,
                },
                nav: {
                    ...defaultDictionary.header.nav,
                    ...loadedDict.header?.nav,
                },
                languageSwitcher: {
                    ...defaultDictionary.header.languageSwitcher,
                    ...loadedDict.header?.languageSwitcher,
                },
            },
            homeHero: {
                ...defaultDictionary.homeHero,
                ...loadedDict.homeHero,
            },
            homeRegions: {
                ...defaultDictionary.homeRegions,
                ...loadedDict.homeRegions,
            },
            calculatePage: {
                ...defaultDictionary.calculatePage,
                ...loadedDict.calculatePage,
            },
        };
    } catch (error) {
        console.error(`Failed to load dictionary for locale: ${locale}`, error);
        return defaultDictionary;
    }
}

export type NestedKeyOf<ObjectType extends object> = {
    [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
        ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
        : `${Key}`;
}[keyof ObjectType & (string | number)];

export async function getDictionaryValue(
    locale: Locale,
    path: NestedKeyOf<DictionaryType>
): Promise<string> {
    const dict = await getDictionary(locale);

    const getNestedValue = (obj: unknown, nestedPath: string): string => {
        const value = nestedPath.split('.').reduce<unknown>((current, key) => {
            if (current && typeof current === 'object' && key in current) {
                return (current as Record<string, unknown>)[key];
            }
            return undefined;
        }, obj);

        return typeof value === 'string' ? value : '';
    };

    return getNestedValue(dict, path);
}

export async function getAllDictionaries(): Promise<Record<Locale, DictionaryType>> {
    const locales: Locale[] = ['he', 'ru', 'en'];
    const results = await Promise.allSettled(
        locales.map(locale => getDictionary(locale))
    );

    const dictionaries: Record<Locale, DictionaryType> = {
        he: defaultDictionary,
        ru: defaultDictionary,
        en: defaultDictionary,
    };

    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            dictionaries[locales[index]] = result.value;
        }
    });

    return dictionaries;
}
