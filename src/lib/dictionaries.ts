import {Locale} from '../../i18n-config';
import {RouteKey} from './localized-paths';

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
    slug: string;
    image?: string;
}

export interface CarrierTab {
    label: string;
    value: 'south' | 'north' | 'jerusalem' | 'lowland' | 'sharon' | 'coordinates';
}

export interface CarrierItem {
    name: string;
    region: CarrierTab['value'];
    image: string;
    url: string;
    contactInfo: {
        info: string;
        contacts: string;
        phoneNumber: string;
    }
}

export interface AdvantageItem {
    title: string;
    icon: string;
}

export interface ArticleItem {
    title: string;
    excerpt: string;
    slug: string;
    image: string;
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
    homeCarriers: {
        title: string;
        subtitle: string;
        previousTabLabel: string;
        nextTabLabel: string;
        cardAriaLabel: string;
        tabs: CarrierTab[];
        carriers: CarrierItem[];
    };
    homeAbout: {
        title: string;
        description: string;
        imageAlt: string;
    };
    homeWhyUs: {
        title: string;
        sliderAriaLabel: string;
        previousSlideLabel: string;
        nextSlideLabel: string;
        dotLabelPrefix: string;
        iconAltPrefix: string;
        cards: AdvantageItem[];
    };
    homeArticles: {
        title: string;
        sectionAriaLabel: string;
        sliderAriaLabel: string;
        previousSlideLabel: string;
        nextSlideLabel: string;
        dotLabelPrefix: string;
        readMoreCta: string;
        readMoreInline: string;
        allArticlesCta: string;
        allArticlesAriaLabel: string;
        imageAltPrefix: string;
        articles: ArticleItem[];
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
            {title: "Перевозка краном", slug: "perevozka-kranom", image: 'crane'},
            {title: "Транспортные услуги", slug: "transportnye-uslugi", image: 'transport'},
            {title: "Перевозка мебели", slug: "perevozka-mebeli", image: 'furniture'},
            {title: "Квартирный переезд", slug: "kvartirnyj-pereezd", image: 'flat'},
        ],
    },
    homeRegions: {
        heading: 'Выбор района',
        sliderPrevious: 'Предыдущий район',
        sliderNext: 'Следующий район',
        sliderItemLabelPrefix: 'Показать район',
        sliderItems: [
            {title: "Низменность", slug: "nizinnost", image: "/images/lowland.png"},
            {title: "Шарон", slug: "sharon", image: "/images/sharon.png"},
            {title: "Центр", slug: "centr", image: "/images/center.png"},
            {title: "Юг", slug: "yug", image: "/images/south.png"},
            {title: "Север", slug: "sever", image: "/images/north.png"},
            {title: "Иерусалим и окрестности", slug: "ierusalim-i-okrestnosti", image: "/images/jerusalem.png"}
        ],
    },
    homeCarriers: {
        title: 'Лучшие перевозчики',
        subtitle: 'Выберите необходимую территорию обслуживания',
        previousTabLabel: 'Предыдущая территория',
        nextTabLabel: 'Следующая территория',
        cardAriaLabel: 'перейти на сайт перевозчика',
        tabs: [
            {label: 'Юг', value: 'south'},
            {label: 'Север', value: 'north'},
            {label: 'Иерусалим', value: 'jerusalem'},
            {label: 'Низменность', value: 'lowland'},
            {label: 'Шэрон', value: 'sharon'},
            {label: 'Координаты', value: 'coordinates'},
        ],
        carriers: [
            {
                name: 'Negev Logistic',
                region: 'south',
                image: '/images/south.png',
                url: 'https://example.com/negev-logistic',
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "phone number"}
            },
            {
                name: 'Red Sea Cargo',
                region: 'south',
                image: '/images/south.png',
                url: 'https://example.com/red-sea-cargo',
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "phone number"}
            },
            {
                name: 'Galil Express',
                region: 'north',
                image: '/images/north.png',
                url: 'https://example.com/galil-express',
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "phone number"}
            },
            {
                name: 'Kineret Movers',
                region: 'north',
                image: '/images/north.png',
                url: 'https://example.com/kineret-movers',
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "phone number"}
            },
            {
                name: 'Jerusalem Bridge',
                region: 'jerusalem',
                image: '/images/jerusalem.png',
                url: 'https://example.com/jerusalem-bridge',
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "phone number"}
            },
            {
                name: 'Golden City Logistics',
                region: 'jerusalem',
                image: '/images/jerusalem.png',
                url: 'https://example.com/golden-city-logistics',
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "phone number"}
            },
        ],
    },
    homeAbout: {
        title: 'О нас',
        description:
            'Ваш профессиональный и надежный партнер по грузоперевозкам в Израиле. Мы берем на себя задачи любой сложности и объема: от небольших перевозок отдельных предметов до организации масштабных квартирных и офисных переездов по всей стране. Наша цель — обеспечить комфортный и безопасный трансфер вашего имущества. Мы предоставляем полный комплекс услуг, включая профессиональную упаковку, демонтаж, бережную погрузку, транспортировку и финальную сборку мебели на новом месте, гарантируя прозрачность расчетов и точность сроков. Доверьте нам логистику, и мы превратим ваш переезд в простую и предсказуемую задачу.',
        imageAlt: 'Грузчик рядом с грузовиком',
    },
    homeWhyUs: {
        title: 'ПОЧЕМУ МЫ?',
        sliderAriaLabel: 'Причины выбрать нашу компанию',
        previousSlideLabel: 'Предыдущая причина',
        nextSlideLabel: 'Следующая причина',
        dotLabelPrefix: 'Перейти к преимуществу',
        iconAltPrefix: 'Иконка преимущества',
        cards: [
            {title: 'Экономия до 45% (лучший выбор перевозчика)', icon: 'economy.svg'},
            {title: 'Перевозки от 250 шекелей', icon: 'price.svg'},
            {title: 'Самые низкие цены на рынке', icon: 'low-price.svg'},
            {title: 'Перевозки по всей стране', icon: 'country.svg'},
            {title: 'Срочные перевозки: день в день, а также в субботу', icon: 'express.svg'},
            {title: 'Полный комплекс услуг: от разборки и упаковки, до транспортировки', icon: 'full-service.svg'},
            {title: 'Только проверенные перевозчики и грузчики', icon: 'trusted.svg'},
        ],
    },
    homeArticles: {
        title: 'СТАТЬИ',
        sectionAriaLabel: 'Новые статьи о перевозках и переездах',
        sliderAriaLabel: 'Список статей',
        previousSlideLabel: 'Предыдущая статья',
        nextSlideLabel: 'Следующая статья',
        dotLabelPrefix: 'Перейти к статье',
        readMoreCta: 'Читать...',
        readMoreInline: 'Читать...',
        allArticlesCta: 'Все статьи',
        allArticlesAriaLabel: 'Перейти ко всем статьям',
        imageAltPrefix: 'Иллюстрация статьи',
        articles: [
            {
                title: 'Название',
                excerpt: "Благодаря арктическому маршруту, срок доставки сокращен более чем на 20 дней. Успешная операция с габаритным грузом подтверждает эффективность СМП для тяжеловесных и срочных проектов.\nБлагодаря арктическому маршруту, срок доставки сокращен более чем на 20 дней. Успешная операция с габаритным грузом подтверждает эффективность СМП для тяжеловесных и срочных проектов.",
                slug: 'kak-podgotovitsya-k-pereezdu',
                image: '/images/articles/articlePlaceholder.png',
            },
            {
                title: 'Название',
                excerpt: "Благодаря арктическому маршруту, срок доставки сокращен более чем на 20 дней. Успешная операция с габаритным грузом подтверждает эффективность СМП для тяжеловесных и срочных проектов.\nБлагодаря арктическому маршруту, срок доставки сокращен более чем на 20 дней. Успешная операция с габаритным грузом подтверждает эффективность СМП для тяжеловесных и срочных проектов.",
                slug: 'perevozka-mebeli-bez-povrezhdenij',
                image: '/images/articles/articlePlaceholder.png',
            },
            {
                title: 'Название',
                excerpt: "Благодаря арктическому маршруту, срок доставки сокращен более чем на 20 дней. Успешная операция с габаритным грузом подтверждает эффективность СМП для тяжеловесных и срочных проектов.\nБлагодаря арктическому маршруту, срок доставки сокращен более чем на 20 дней. Успешная операция с габаритным грузом подтверждает эффективность СМП для тяжеловесных и срочных проектов.",
                slug: 'kak-vybrat-perevozchika',
                image: '/images/articles/articlePlaceholder.png',
            },
            {
                title: 'Название',
                excerpt: "Благодаря арктическому маршруту, срок доставки сокращен более чем на 20 дней. Успешная операция с габаритным грузом подтверждает эффективность СМП для тяжеловесных и срочных проектов.\nБлагодаря арктическому маршруту, срок доставки сокращен более чем на 20 дней. Успешная операция с габаритным грузом подтверждает эффективность СМП для тяжеловесных и срочных проектов.",
                slug: 'skolko-stoit-pereezd',
                image: '/images/articles/articlePlaceholder.png',
            },
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
                {label: "Apartments", path: "kvartiry"},
                {label: "Offices", path: "ofisnye"},
                {label: "Private house", path: "chastnyj-dom"},
                {label: "Small move", path: "malyj"},
            ],
            services: [
                {label: "Packing", path: "upakovka"},
                {label: "Storage", path: "hranenie"},
                {label: "Late moves", path: "pozdnie-perevozki"},
            ],
            contact: [
                {label: "Call us", href: "tel:{phone}"},
                {label: "Email", href: "mailto:{email}"},
                {label: "WhatsApp", href: "https://wa.me/{phoneDigits}"},
                {label: "Facebook", href: "#"},
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
            homeCarriers: {
                ...defaultDictionary.homeCarriers,
                ...loadedDict.homeCarriers,
                tabs: loadedDict.homeCarriers?.tabs ?? defaultDictionary.homeCarriers.tabs,
                carriers: loadedDict.homeCarriers?.carriers ?? defaultDictionary.homeCarriers.carriers,
            },
            homeAbout: {
                ...defaultDictionary.homeAbout,
                ...loadedDict.homeAbout,
            },
            homeWhyUs: {
                ...defaultDictionary.homeWhyUs,
                ...loadedDict.homeWhyUs,
                cards: loadedDict.homeWhyUs?.cards ?? defaultDictionary.homeWhyUs.cards,
            },
            homeArticles: {
                ...defaultDictionary.homeArticles,
                ...loadedDict.homeArticles,
                articles: loadedDict.homeArticles?.articles ?? defaultDictionary.homeArticles.articles,
            },
            servicesPage: {
                ...defaultDictionary.servicesPage,
                ...loadedDict.servicesPage,
                whyChooseUs: {
                    ...defaultDictionary.servicesPage.whyChooseUs,
                    ...loadedDict.servicesPage?.whyChooseUs,
                    features: loadedDict.servicesPage?.whyChooseUs?.features ?? defaultDictionary.servicesPage.whyChooseUs.features,
                },
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
