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
    carrierRegion: CarrierTab['value'] | null;
    cityLinks: {
        label: string;
        slug: string;
    }[];
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
    body?: string[];
    gallery?: string[];
}

export interface TestimonialItem {
    name: string;
    company: string;
    review: string;
    avatar: string;
    carrierUrl: string;
    rating: number;
}

export interface TransportTableRow {
    transport: string;
    size: string;
    distance: string;
    services: string;
    price: string;
}

export interface SmallMoveTableRow {
    notes: string;
    priceRange: string;
    item: string;
}

export interface TelAvivMoveTableRow {
    type: string;
    priceRange: string;
    notes: string;
}

export interface OfficeMoveComparisonRow {
    night: string;
    day: string;
    criteria: string;
}

export interface FooterLink {
    label: string;
    /**
     * Optional anchor or slug key that will be resolved inside the footer component
     * to a localized URL or in-page anchor.
     */
    anchor?:
        | 'about'
        | 'articles'
        | 'services'
        | 'testimonials'
        | 'whyUs'
        | 'regions'
        | 'carriers'
        | 'calculate';
    path?: string;
}

export interface FooterSocialLink {
    label: string;
    href: string;
    network: 'facebook' | 'whatsapp' | 'telegram' | 'twitter';
}

export interface FooterDictionary {
    ariaLabel: string;
    columns: {
        home: {
            title: string;
            links: FooterLink[];
        };
        transportation: {
            title: string;
            links: FooterLink[];
        };
        services: {
            title: string;
            links: FooterLink[];
        };
        contacts: {
            title: string;
            addressLabel: string;
            emailLabel: string;
            phoneLabel: string;
            socialLabel: string;
            socialLinks: FooterSocialLink[];
        };
    };
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
            leaveReview: string;
        };
        languageSwitcher: {
            he: string;
            ru: string;
            en: string;
        };
    };
    homeHero: {
        title: string;
        titleWithRegion: string;
        subtitle: string;
        fromLabel: string;
        fromPlaceholder: string;
        toLabel: string;
        toPlaceholder: string;
        dateLabel: string;
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
    homeTestimonials: {
        title: string;
        sliderAriaLabel: string;
        previousSlideLabel: string;
        nextSlideLabel: string;
        dotLabelPrefix: string;
        ratingLabelSuffix: string;
        avatarAltPrefix: string;
        cardAriaLabelPrefix: string;
        ctaLabel: string;
        sliderItems: TestimonialItem[];
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
    articlesPage: {
        metaTitle: string;
        metaDescription: string;
        breadcrumbCurrent: string;
        title: string;
        sectionAriaLabel: string;
        sliderAriaLabel: string;
        dotLabelPrefix: string;
    };
    articlePage: {
        metaTitleTemplate: string;
        metaDescriptionTemplate: string;
        photoTitle: string;
        photosAriaLabel: string;
        photoAltPrefix: string;
        otherArticlesCta: string;
        otherArticlesAriaLabel: string;
        fallbackBody: string[];
    };
    regionPage: {
        metaTitle: string;
        metaDescription: string;
        breadcrumbZones: string;
        orderTitle: string;
        advantagesTitle: string;
        carriersTitle: string;
        noCarriers: string;
        transportTable: {
            title: string;
            description: string;
            ariaLabel: string;
            headers: string[];
            rowsByRegion: Record<string, TransportTableRow[]>;
        };
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
    packingPage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;
        tocTitle: string;
        tocItems: Array<{id: string; label: string}>;
        whyChooseUs: {
            id: string;
            title: string;
            paragraphs: string[];
            bulletsTitle: string;
            bullets: string[];
        };
        pricing: {
            id: string;
            title: string;
            intro: string;
            note: string;
            tableLabel: string;
            tableHeaders: string[];
            rows: SmallMoveTableRow[];
            afterTable: string;
        };
        process: {
            id: string;
            title: string;
            intro: string;
            steps: Array<{title: string; text: string}>;
            note: string;
        };
        tips: {
            id: string;
            title: string;
            intro: string;
            items: string[];
        };
        timing: {
            id: string;
            title: string;
            intro: string;
            items: Array<{title: string; text: string}>;
            outro: string;
        };
        faq: {
            id: string;
            title: string;
            items: Array<{question: string; answer: string}>;
            closingText: string;
            buttonLabel: string;
        };
    };
    storagePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;
        tocTitle: string;
        tocItems: Array<{id: string; label: string}>;
        whyChooseUs: {
            id: string;
            title: string;
            paragraphs: string[];
            bulletsTitle: string;
            bullets: string[];
            notice: string;
        };
        whenUse: {
            id: string;
            title: string;
            intro: string;
            items: Array<{title: string; text: string}>;
        };
        pricing: {
            id: string;
            title: string;
            intro: string;
            tableLabel: string;
            tableHeaders: string[];
            rows: SmallMoveTableRow[];
            afterTable: string;
        };
        chooseStorage: {
            id: string;
            title: string;
            items: string[];
        };
        duration: {
            id: string;
            title: string;
            items: Array<{title: string; text: string}>;
        };
        tips: {
            id: string;
            title: string;
            intro: string;
            items: Array<{title: string; text: string}>;
        };
        faq: {
            id: string;
            title: string;
            items: Array<{question: string; answer: string}>;
            closingText: string;
            buttonLabel: string;
        };
    };
    calculatePage: {
        title: string;
        metaTitle: string;
        metaDescription: string;
        placeholderNotice: string;
        receivedDataTitle: string;
        missingData: string;
        breadcrumbCurrent: string;
        breadcrumbSubmit: string;
        breadcrumbSuccess: string;
        heroHeading: string;
        dateLabel: string;
        elevatorLabel: string;
        floorLabel: string;
        floorOptions: string[];
        serviceTypeLabel: string;
        serviceOptions: string[];
        roomTabsLabel: string;
        roomTabs: {
            livingRoom: string;
            bedroom: string;
            kids: string;
            kitchen: string;
            bathroom: string;
            balcony: string;
        };
        roomItems: Record<
            keyof DictionaryType['calculatePage']['roomTabs'],
            string[]
        >;
        itemNameLabel: string;
        itemNamePlaceholder: string;
        customItemLabel: string;
        customItemPlaceholder: string;
        selectedItemsLabel: string;
        selectedItemsEmpty: string;
        addButton: string;
        decreaseLabel: string;
        increaseLabel: string;
        assemblyLabel: string;
        submitCta: string;
        successTitle: string;
        successMessage: string;
        contactPrompt: string;
        contactNameLabel: string;
        contactPhoneLabel: string;
        contactCommentLabel: string;
        sendCta: string;
        sendingCta: string;
        consentLabel: string;
        submitError: string;
        submissionSuccessMessage: string;
        validation: {
            requiredFrom: string;
            requiredTo: string;
            requiredDate: string;
            requiredName: string;
            requiredPhone: string;
            requiredConsent: string;
        };
    };
    apartmentMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;
        tocTitle: string;
        tocItems: Array<{id: string; label: string}>;
        comparison: {
            id: string;
            title: string;
            paragraphs: string[];
            bullets: string[];
            phoneLabel: string;
        };
        process: {
            id: string;
            title: string;
            intro: string;
            steps: Array<{title: string; text: string}>;
        };
        pricing: {
            id: string;
            title: string;
            intro: string;
            note: string;
            tableLabel: string;
            tableHeaders: string[];
            rows: SmallMoveTableRow[];
            afterTable: string;
        };
        priceFactors: {
            id: string;
            title: string;
            intro: string;
            items: Array<{title: string; text: string}>;
        };
        solutions: {
            id: string;
            title: string;
            intro: string;
            items: Array<{title: string; text: string}>;
        };
        tips: {
            id: string;
            title: string;
            intro: string;
            items: Array<{title: string; text: string}>;
        };
        faq: {
            id: string;
            title: string;
            items: Array<{question: string; answer: string}>;
        };
        closing: {
            title: string;
            text: string;
            buttonLabel: string;
        };
    };
    smallMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;
        tocTitle: string;
        tocItems: Array<{id: string; label: string}>;
        comparison: {
            title: string;
            bullets: string[];
        };
        cta: {
            title: string;
            phoneLabel: string;
            formLabel: string;
            buttonLabel: string;
        };
        pricing: {
            id: string;
            title: string;
            intro: string;
            note: string;
            tableLabel: string;
            tableHeaders: string[];
            rows: SmallMoveTableRow[];
            afterTable: string;
        };
        definition: {
            id: string;
            title: string;
            text: string;
        };
        audience: {
            id: string;
            title: string;
            intro: string;
            items: Array<{title: string; text: string}>;
        };
        priceFactors: {
            id: string;
            title: string;
            items: Array<{title: string; text: string}>;
        };
        popularServices: {
            id: string;
            title: string;
            items: Array<{title: string; text: string}>;
        };
        crane: {
            id: string;
            title: string;
            intro: string;
            items: string[];
            outro: string;
        };
        cheap: {
            id: string;
            title: string;
            intro: string;
            items: Array<{title: string; text: string}>;
        };
        faq: {
            id: string;
            title: string;
            items: Array<{question: string; answer: string}>;
        };
        comparisonProcess: {
            id: string;
            title: string;
            steps: Array<{title: string; text: string}>;
        };
        findCompany: {
            id: string;
            title: string;
            intro: string;
            items: Array<{title: string; text: string}>;
            closing: string;
        };
    };
    telAvivMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;
        tocTitle: string;
        tocItems: Array<{id: string; label: string}>;
        why: {
            id: string;
            title: string;
            paragraphs: string[];
            bulletsTitle: string;
            bullets: string[];
            note: string;
        };
        pricing: {
            id: string;
            title: string;
            intro: string;
            tableLabel: string;
            tableHeaders: string[];
            rows: TelAvivMoveTableRow[];
            afterTable: string;
        };
        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{title: string; text: string}>;
        };
        smallMoves: {
            id: string;
            title: string;
            intro: string;
            bullets: string[];
        };
        officeMoves: {
            id: string;
            title: string;
            intro: string;
            bullets: string[];
        };
        extraServices: {
            id: string;
            title: string;
            intro: string;
            items: Array<{title: string; text: string}>;
        };
        faq: {
            id: string;
            title: string;
            items: Array<{question: string; answer: string}>;
        };
        closing: {
            text: string;
        };
    };
    pianoMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;
        tocTitle: string;
        tocItems: Array<{id: string; label: string}>;
        why: {
            id: string;
            title: string;
            intro: string;
            bulletsTitle: string;
            bullets: string[];
            noteLabel: string;
            note: string;
        };
        pricing: {
            id: string;
            title: string;
            intro: string;
            tableLabel: string;
            tableHeaders: string[];
            rows: SmallMoveTableRow[];
            afterTable: string;
        };
        comparison: {
            id: string;
            title: string;
            items: Array<{title: string; text: string}>;
        };
        crane: {
            id: string;
            title: string;
            intro: string;
            items: string[];
        };
        preparation: {
            id: string;
            title: string;
            intro: string;
            items: Array<{title: string; text: string}>;
        };
        stairs: {
            id: string;
            title: string;
            intro: string;
            items: string[];
            outro: string;
        };
        faq: {
            id: string;
            title: string;
            items: Array<{question: string; answer: string}>;
        };
        closing: {
            title: string;
            text: string;
            buttonLabel: string;
        };
    };
    officeMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;
        tocTitle: string;
        tocItems: Array<{id: string; label: string}>;
        advantages: {
            id: string;
            title: string;
            paragraphs: string[];
            bulletsTitle: string;
            bullets: string[];
            noteLabel: string;
            note: string;
        };
        pricing: {
            id: string;
            title: string;
            intro: string;
            tableLabel: string;
            tableHeaders: string[];
            rows: SmallMoveTableRow[];
            afterTable: string;
        };
        planning: {
            id: string;
            title: string;
            paragraphs: string[];
        };
        comparison: {
            id: string;
            title: string;
            intro: string;
            tableLabel: string;
            tableHeaders: string[];
            rows: OfficeMoveComparisonRow[];
        };
        packing: {
            id: string;
            title: string;
            intro: string;
            items: Array<{title: string; text: string}>;
        };
        tips: {
            id: string;
            title: string;
            intro: string;
            items: Array<{title: string; text: string}>;
        };
        faq: {
            id: string;
            title: string;
            items: Array<{question: string; answer: string}>;
        };
        closing: {
            title: string;
            text: string;
            buttonLabel: string;
        };
    };
    leaveReviewPage: {
        metaTitle: string;
        metaDescription: string;
        breadcrumbTestimonials: string;
        breadcrumbCurrent: string;
        breadcrumbSuccess: string;
        heroTitle: string;
        ratingLabel: string;
        ratingHint: string;
        uploadLabel: string;
        uploadHint: string;
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        carrierLabel: string;
        carrierPlaceholder: string;
        commentLabel: string;
        commentPlaceholder: string;
        submitLabel: string;
        submitError: string;
        submissionSuccessMessage: string;
        consentLabel: string;
        validation: {
            requiredName: string;
            requiredEmail: string;
            requiredRating: string;
            requiredConsent: string;
        };
    };
    footer: FooterDictionary;
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
        title: "РАСЧЕТ СТОИМОСТИ ПЕРЕВОЗКИ?",
        titleWithRegion: "РАСЧЕТ СТОИМОСТИ ПЕРЕВОЗКИ в {region}?",
        subtitle: "Получите лучшие предложения цены от перевозчиков онлайн!",
        fromLabel: "Откуда",
        fromPlaceholder: "Город",
        toLabel: "Куда",
        toPlaceholder: "Город",
        dateLabel: "Дата переезда",
        datePlaceholder: "Выберите дату",
        submit: "Продолжить оформление заказа",
        submitLabel: "получить предложения цены",
        requiredMessage: "Пожалуйста, заполните все поля",
        sliderHeading: "Услуги",
        sliderCta: "Подробнее",
        sliderPrevious: "Предыдущий слайд",
        sliderNext: "Следующий слайд",
        sliderItemLabelPrefix: "Перейти к услуге",
        sliderItems: [
            {title: "Перевозка мебели", slug: "perevozka-mebeli", image: 'furniture'},
            {title: "Квартирный переезд", slug: "kvartirnyj-pereezd", image: 'flat'},
            {title: "Офисный переезд", slug: "ofisnyj-pereezd", image: 'transport'},
            {title: "Услуги упаковки", slug: "uslugi-upakovki", image: 'crane'},
        ],
    },
    homeRegions: {
        heading: 'Выбор района',
        sliderPrevious: 'Предыдущий район',
        sliderNext: 'Следующий район',
        sliderItemLabelPrefix: 'Показать район',
        sliderItems: [
            {
                title: "Центр",
                slug: "centr",
                image: "/images/center.png",
                carrierRegion: null,
                cityLinks: [
                    {label: "Перевозки в Тель-Авиве", slug: "perevozki-v-tel-avive"},
                    {label: "Перевозки в Рамат-Гане", slug: "perevozki-v-ramat-gane"},
                    {label: "Перевозки в Гиватаиме", slug: "perevozki-v-givataime"},
                    {label: "Перевозки в Холоне", slug: "perevozki-v-holone"},
                    {label: "Перевозки в Бат-Яме", slug: "perevozki-v-bat-yame"},
                ],
            },
            {
                title: "Равнина (Шарон)",
                slug: "sharon",
                image: "/images/sharon.png",
                carrierRegion: "sharon",
                cityLinks: [
                    {label: "Перевозки в Нетании", slug: "perevozki-v-netanii"},
                    {label: "Перевозки в Герцлии", slug: "perevozki-v-gertslii"},
                    {label: "Перевозки в Кфар-Сабе", slug: "perevozki-v-kfar-sabe"},
                    {label: "Перевозки в Раанане", slug: "perevozki-v-raanane"},
                    {label: "Перевозки в Ход-ха-Шароне", slug: "perevozki-v-hod-ha-sharone"},
                ],
            },
            {
                title: "Низины (Шфела)",
                slug: "nizinnost",
                image: "/images/lowland.png",
                carrierRegion: "lowland",
                cityLinks: [
                    {label: "Перевозки в Ришон-ле-Ционе", slug: "perevozki-v-rishon-le-tsione"},
                    {label: "Перевозки в Реховоте", slug: "perevozki-v-rehovote"},
                    {label: "Перевозки в Рамле", slug: "perevozki-v-ramle"},
                    {label: "Перевозки в Лоде", slug: "perevozki-v-lode"},
                    {label: "Перевозки в Ашдоде", slug: "perevozki-v-ashdode"},
                ],
            },
            {
                title: "Иерусалим и окрестности",
                slug: "ierusalim-i-okrestnosti",
                image: "/images/jerusalem.png",
                carrierRegion: "jerusalem",
                cityLinks: [
                    {label: "Перевозки в Иерусалиме", slug: "perevozki-v-ierusalime"},
                    {label: "Перевозки в Бейт-Шемеше", slug: "perevozki-v-beit-shemeshe"},
                    {label: "Перевозки в Маале-Адумиме", slug: "perevozki-v-maale-adumime"},
                    {label: "Перевозки в Модиине", slug: "perevozki-v-modiine"},
                    {label: "Перевозки в Мевасерет-Ционе", slug: "perevozki-v-mevaseret-tsione"},
                ],
            },
            {
                title: "Север",
                slug: "sever",
                image: "/images/north.png",
                carrierRegion: "north",
                cityLinks: [
                    {label: "Перевозки в Хайфе", slug: "perevozki-v-hayfe"},
                    {label: "Перевозки в Назарете", slug: "perevozki-v-nazarete"},
                    {label: "Перевозки в Тверии", slug: "perevozki-v-tverii"},
                    {label: "Перевозки в Акко", slug: "perevozki-v-akko"},
                    {label: "Перевозки в Кармиэле", slug: "perevozki-v-karmiele"},
                ],
            },
            {
                title: "Юг",
                slug: "yug",
                image: "/images/south.png",
                carrierRegion: "south",
                cityLinks: [
                    {label: "Перевозки в Беэр-Шеве", slug: "perevozki-v-beer-sheve"},
                    {label: "Перевозки в Ашкелоне", slug: "perevozki-v-ashkelone"},
                    {label: "Перевозки в Эйлате", slug: "perevozki-v-eilate"},
                    {label: "Перевозки в Димоне", slug: "perevozki-v-dimone"},
                    {label: "Перевозки в Нетивоте", slug: "perevozki-v-netivote"},
                ],
            },
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
            {
                name: 'Coastal Route Movers',
                region: 'lowland',
                image: '/images/lowland.png',
                url: 'https://example.com/coastal-route',
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "phone number"}
            },
            {
                name: 'Lowland Cargo',
                region: 'lowland',
                image: '/images/lowland.png',
                url: 'https://example.com/lowland-cargo',
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "phone number"}
            },
            {
                name: 'Sharon Express',
                region: 'sharon',
                image: '/images/sharon.png',
                url: 'https://example.com/sharon-express',
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "phone number"}
            },
            {
                name: 'Green Valley Logistics',
                region: 'sharon',
                image: '/images/sharon.png',
                url: 'https://example.com/green-valley-logistics',
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
    homeTestimonials: {
        title: 'ОТЗЫВЫ',
        sliderAriaLabel: 'Отзывы клиентов о перевозках',
        previousSlideLabel: 'Предыдущий отзыв',
        nextSlideLabel: 'Следующий отзыв',
        dotLabelPrefix: 'Перейти к отзыву',
        ratingLabelSuffix: 'звезд из пяти',
        avatarAltPrefix: 'Фото клиента',
        cardAriaLabelPrefix: 'Перейти на сайт перевозчика',
        ctaLabel: 'Оставить отзыв',
        sliderItems: [
            {
                name: 'Алексей Морозов',
                company: 'LogiMove',
                review:
                    'Организовали перевозку за сутки: погрузили, аккуратно упаковали и доставили без единой царапины. Буду рекомендовать коллегам.',
                avatar: '/images/testimonials/person1.png',
                carrierUrl: 'https://example.com/logimove',
                rating: 5,
            },
            {
                name: 'Антон',
                company: 'Galil Express',
                review:
                    'Пунктуальная команда: приехали точно в оговоренное время и бережно отнеслись к вещам. Получилось даже дешевле, чем ожидали.',
                avatar: '/images/testimonials/person2.png',
                carrierUrl: 'https://example.com/galil-express',
                rating: 5,
            },
            {
                name: 'Даниэль Кац',
                company: 'Negev Logistic',
                review:
                    'Заказывали офисный переезд. Удобный расчет стоимости, четкая коммуникация и отличная упаковка техники — все приехало целым.',
                avatar: '/images/testimonials/person3.png',
                carrierUrl: 'https://example.com/negev-logistic',
                rating: 5,
            },
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
                title: '',
                excerpt: "Благодаря арктическому маршруту, срок доставки сокращен более чем на 20 дней. Успешная операция с габаритным грузом подтверждает эффективность СМП для тяжеловесных и срочных проектов.\nБлагодаря арктическому маршруту, срок доставки сокращен более чем на 20 дней. Успешная операция с габаритным грузом подтверждает эффективность СМП для тяжеловесных и срочных проектов.",
                slug: 'kak-podgotovitsya-k-pereezdu',
                image: '/images/articles/articlePlaceholder.png',
                body: [
                    'Подготовка к переезду начинается с планирования: составьте список вещей, определите сроки и заранее забронируйте транспорт.',
                    'Разделите имущество по категориям и используйте маркировку коробок. Это ускоряет разгрузку и позволяет избежать потерь.',
                    'Если требуется упаковка или разборка мебели, уточните эти услуги заранее и включите их в смету.',
                ],
                gallery: [
                    '/images/articles/articlePlaceholder.png',
                    '/images/articles/articlePlaceholder.png',
                    '/images/articles/articlePlaceholder.png',
                ],
            },
            {
                title: '',
                excerpt: "Благодаря арктическому маршруту, срок доставки сокращен более чем на 20 дней. Успешная операция с габаритным грузом подтверждает эффективность СМП для тяжеловесных и срочных проектов.\nБлагодаря арктическому маршруту, срок доставки сокращен более чем на 20 дней. Успешная операция с габаритным грузом подтверждает эффективность СМП для тяжеловесных и срочных проектов.",
                slug: 'perevozka-mebeli-bez-povrezhdenij',
                image: '/images/articles/articlePlaceholder.png',
                body: [
                    'Чтобы сохранить мебель в идеальном состоянии, используйте защитные углы, пленку и мягкие прокладки.',
                    'Стеклянные элементы следует перевозить вертикально, а фурнитуру — упаковывать отдельно и подписывать.',
                    'При необходимости закажите разборку мебели, чтобы снизить риск повреждений в пути.',
                ],
                gallery: [
                    '/images/articles/articlePlaceholder.png',
                    '/images/articles/articlePlaceholder.png',
                    '/images/articles/articlePlaceholder.png',
                ],
            },
            {
                title: '',
                excerpt: "Благодаря арктическому маршруту, срок доставки сокращен более чем на 20 дней. Успешная операция с габаритным грузом подтверждает эффективность СМП для тяжеловесных и срочных проектов.\nБлагодаря арктическому маршруту, срок доставки сокращен более чем на 20 дней. Успешная операция с габаритным грузом подтверждает эффективность СМП для тяжеловесных и срочных проектов.",
                slug: 'kak-vybrat-perevozchika',
                image: '/images/articles/articlePlaceholder.png',
                body: [
                    'Оцените опыт перевозчика, наличие страховки и реальные отзывы клиентов.',
                    'Сравните предложения по цене и перечню услуг, чтобы избежать скрытых платежей.',
                    'Надежная компания всегда предлагает прозрачный договор и заранее согласованный график.',
                ],
                gallery: [
                    '/images/articles/articlePlaceholder.png',
                    '/images/articles/articlePlaceholder.png',
                    '/images/articles/articlePlaceholder.png',
                ],
            },
            {
                title: '',
                excerpt: "Благодаря арктическому маршруту, срок доставки сокращен более чем на 20 дней. Успешная операция с габаритным грузом подтверждает эффективность СМП для тяжеловесных и срочных проектов.\nБлагодаря арктическому маршруту, срок доставки сокращен более чем на 20 дней. Успешная операция с габаритным грузом подтверждает эффективность СМП для тяжеловесных и срочных проектов.",
                slug: 'skolko-stoit-pereezd',
                image: '/images/articles/articlePlaceholder.png',
                body: [
                    'Стоимость зависит от расстояния, объема вещей и дополнительных услуг.',
                    'Сравните варианты транспорта и заранее подготовьте список предметов.',
                    'Четкое техническое задание помогает получить точный расчет и избежать переплат.',
                ],
                gallery: [
                    '/images/articles/articlePlaceholder.png',
                    '/images/articles/articlePlaceholder.png',
                    '/images/articles/articlePlaceholder.png',
                ],
            },
        ],
    },
    articlesPage: {
        metaTitle: 'Статьи о перевозках и переездах',
        metaDescription: 'Читайте полезные статьи о грузоперевозках, переездах и выборе перевозчика в Израиле.',
        breadcrumbCurrent: 'Статьи',
        title: 'СТАТЬИ',
        sectionAriaLabel: 'Список статей о перевозках',
        sliderAriaLabel: 'Слайдер со статьями',
        dotLabelPrefix: 'Перейти к статье',
    },
    articlePage: {
        metaTitleTemplate: '{title} — {site}',
        metaDescriptionTemplate: '{excerpt}',
        photoTitle: 'ФОТО',
        photosAriaLabel: 'Фотографии статьи',
        photoAltPrefix: 'Фотография',
        otherArticlesCta: 'К другим статьям',
        otherArticlesAriaLabel: 'Перейти к списку статей',
        fallbackBody: [
            'Статья находится в разработке. Скоро здесь появится подробный материал о перевозках и логистике.',
            'Пока вы можете ознакомиться с другими публикациями и подобрать подходящее решение для своего переезда.',
        ],
    },
    regionPage: {
        metaTitle: 'Перевозки в {region} | Надежные грузоперевозки',
        metaDescription: 'Закажите перевозку в регионе {region}. Надежные перевозчики, прозрачные цены и быстрый выезд по всей территории.',
        breadcrumbZones: 'Зоны обслуживания',
        orderTitle: 'Хотите заказать перевозку в {region}?',
        advantagesTitle: 'Преимущества',
        carriersTitle: 'Перевозчики в данном регионе',
        noCarriers: 'В этом регионе пока нет перевозчиков.',
        transportTable: {
            title: 'Примерные цены и форматы перевозок в {region}',
            description:
                'Сравните варианты транспорта, расстояния и доп. услуги для переездов по региону {region}. Данные помогают подобрать оптимальную стоимость перевозки квартиры.',
            ariaLabel: 'Таблица примерных цен и форматов перевозок',
            headers: [
                'Вид транспорта',
                'Размер квартиры',
                'Расстояние',
                'Доп.\nуслуги',
                'Примерная\nцена ₪',
            ],
            rowsByRegion: {
                nizinnost: [
                    {
                        transport: 'Газель',
                        size: '1-комнатная',
                        distance: 'до 10 км',
                        services: 'упаковка',
                        price: '850–1150',
                    },
                    {
                        transport: 'Фургон',
                        size: '2-комнатная',
                        distance: '10–25 км',
                        services: 'разборка мебели',
                        price: '1200–1600',
                    },
                    {
                        transport: 'Грузовик 5т',
                        size: '3-комнатная',
                        distance: '25–40 км',
                        services: 'такелаж',
                        price: '1800–2300',
                    },
                    {
                        transport: 'Грузовик 10т',
                        size: '4-комнатная',
                        distance: '40–60 км',
                        services: 'упаковка + подъем',
                        price: '2600–3200',
                    },
                    {
                        transport: 'Контейнер',
                        size: 'Дом',
                        distance: '60–80 км',
                        services: 'хранение',
                        price: '3300–4100',
                    },
                ],
                sharon: [
                    {
                        transport: 'Газель',
                        size: '1-комнатная',
                        distance: 'до 12 км',
                        services: 'упаковка',
                        price: '900–1200',
                    },
                    {
                        transport: 'Фургон',
                        size: '2-комнатная',
                        distance: '12–25 км',
                        services: 'разборка мебели',
                        price: '1300–1700',
                    },
                    {
                        transport: 'Грузовик 5т',
                        size: '3-комнатная',
                        distance: '25–45 км',
                        services: 'такелаж',
                        price: '1900–2450',
                    },
                    {
                        transport: 'Грузовик 10т',
                        size: '4-комнатная',
                        distance: '45–65 км',
                        services: 'упаковка + подъем',
                        price: '2700–3400',
                    },
                    {
                        transport: 'Контейнер',
                        size: 'Дом',
                        distance: '65–85 км',
                        services: 'хранение',
                        price: '3500–4300',
                    },
                ],
                centr: [
                    {
                        transport: 'Газель',
                        size: '1-комнатная',
                        distance: 'до 10 км',
                        services: 'упаковка',
                        price: '950–1250',
                    },
                    {
                        transport: 'Фургон',
                        size: '2-комнатная',
                        distance: '10–25 км',
                        services: 'разборка мебели',
                        price: '1400–1850',
                    },
                    {
                        transport: 'Грузовик 5т',
                        size: '3-комнатная',
                        distance: '25–45 км',
                        services: 'такелаж',
                        price: '2000–2600',
                    },
                    {
                        transport: 'Грузовик 10т',
                        size: '4-комнатная',
                        distance: '45–70 км',
                        services: 'упаковка + подъем',
                        price: '2900–3600',
                    },
                    {
                        transport: 'Контейнер',
                        size: 'Дом',
                        distance: '70–90 км',
                        services: 'хранение',
                        price: '3600–4500',
                    },
                ],
                yug: [
                    {
                        transport: 'Газель',
                        size: '1-комнатная',
                        distance: 'до 15 км',
                        services: 'упаковка',
                        price: '800–1050',
                    },
                    {
                        transport: 'Фургон',
                        size: '2-комнатная',
                        distance: '15–30 км',
                        services: 'разборка мебели',
                        price: '1150–1500',
                    },
                    {
                        transport: 'Грузовик 5т',
                        size: '3-комнатная',
                        distance: '30–50 км',
                        services: 'такелаж',
                        price: '1700–2200',
                    },
                    {
                        transport: 'Грузовик 10т',
                        size: '4-комнатная',
                        distance: '50–80 км',
                        services: 'упаковка + подъем',
                        price: '2500–3100',
                    },
                    {
                        transport: 'Контейнер',
                        size: 'Дом',
                        distance: '80–110 км',
                        services: 'хранение',
                        price: '3200–4000',
                    },
                ],
                sever: [
                    {
                        transport: 'Газель',
                        size: '1-комнатная',
                        distance: 'до 12 км',
                        services: 'упаковка',
                        price: '870–1150',
                    },
                    {
                        transport: 'Фургон',
                        size: '2-комнатная',
                        distance: '12–28 км',
                        services: 'разборка мебели',
                        price: '1250–1650',
                    },
                    {
                        transport: 'Грузовик 5т',
                        size: '3-комнатная',
                        distance: '28–45 км',
                        services: 'такелаж',
                        price: '1850–2350',
                    },
                    {
                        transport: 'Грузовик 10т',
                        size: '4-комнатная',
                        distance: '45–70 км',
                        services: 'упаковка + подъем',
                        price: '2650–3300',
                    },
                    {
                        transport: 'Контейнер',
                        size: 'Дом',
                        distance: '70–95 км',
                        services: 'хранение',
                        price: '3400–4200',
                    },
                ],
                'ierusalim-i-okrestnosti': [
                    {
                        transport: 'Газель',
                        size: '1-комнатная',
                        distance: 'до 12 км',
                        services: 'упаковка',
                        price: '920–1220',
                    },
                    {
                        transport: 'Фургон',
                        size: '2-комнатная',
                        distance: '12–26 км',
                        services: 'разборка мебели',
                        price: '1350–1750',
                    },
                    {
                        transport: 'Грузовик 5т',
                        size: '3-комнатная',
                        distance: '26–42 км',
                        services: 'такелаж',
                        price: '1950–2500',
                    },
                    {
                        transport: 'Грузовик 10т',
                        size: '4-комнатная',
                        distance: '42–65 км',
                        services: 'упаковка + подъем',
                        price: '2800–3500',
                    },
                    {
                        transport: 'Контейнер',
                        size: 'Дом',
                        distance: '65–90 км',
                        services: 'хранение',
                        price: '3500–4400',
                    },
                ],
            },
        },
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
    packingPage: {
        slug: "packing-services",
        metaTitle: "Packing services for your move | Israel",
        metaDescription: "Compare trusted packing crews in Israel, including boxes and insurance, and save up to 45% on moving costs.",
        title: "Packing services for moving",
        tocTitle: "Table of contents",
        tocItems: [
            {id: "why-us", label: "Why book packing services through our portal?"},
            {id: "pricing", label: "How much does it cost? Updated packing price list"},
            {id: "process", label: "Packing and moving: how it works"},
            {id: "tips", label: "Smart packing tips before the movers arrive"},
            {id: "timing", label: "When should you start packing?"},
            {id: "faq", label: "Packing services FAQ"},
        ],
        whyChooseUs: {
            id: "why-us",
            title: "Why book packing services through our portal?",
            paragraphs: [
                "Moving is exciting, but the packing stage can turn into weeks of chaos. Instead of living among boxes for a month, choose a smarter solution.",
                "We are not a single moving company. We are an aggregator portal that brings together the most reliable moving teams in Israel.",
            ],
            bulletsTitle: "Our advantages:",
            bullets: [
                "Lowest prices on the market: compare offers and save up to 45%.",
                "Everything in one place: packing, moving, disassembly, and assembly under one roof.",
                "Verified movers: we work only with screened and approved providers.",
                "Immediate availability: need packing today or this weekend? We have urgent solutions.",
                "Nationwide coverage: service from north to south.",
                "Affordable entry price: moving services starting at ₪249.",
            ],
        },
        pricing: {
            id: "pricing",
            title: "How much does it cost? Updated packing price list",
            intro: "One of the most common questions is “How much does it cost to pack a home?” The price depends on apartment size, volume, and packing complexity (for example, how many fragile items you have). The table below shows average ranges to set expectations.",
            note: "Please note: these are average prices. Through our system, thanks to competition between providers, you can receive especially attractive offers.",
            tableLabel: "Packing and moving price table",
            tableHeaders: ["What is included?", "Average price range", "Service type"],
            rows: [
                {
                    notes: "Professional packing of belongings into boxes",
                    priceRange: "₪20 – ₪50 per box",
                    item: "Per-box packing price",
                },
                {
                    notes: "Includes packing clothes, linens, and kitchenware",
                    priceRange: "₪1,000 – ₪1,800",
                    item: "2-room apartment packing",
                },
                {
                    notes: "Includes boxes and packing supplies",
                    priceRange: "₪1,500 – ₪2,500",
                    item: "3-room apartment packing",
                },
                {
                    notes: "Full packing with padding and wrapping",
                    priceRange: "₪1,800 – ₪3,500",
                    item: "4-room apartment packing",
                },
                {
                    notes: "Price varies by volume and crane needs",
                    priceRange: "₪2,000 – ₪4,500",
                    item: "5-room apartment packing",
                },
                {
                    notes: "Use of bubble wrap and special packing paper",
                    priceRange: "₪25 – ₪55 per box",
                    item: "Fragile items packing add-on",
                },
            ],
            afterTable: "Want a precise quote? Submit your details and compare offers from vetted movers.",
        },
        process: {
            id: "process",
            title: "Packing and moving: how it works",
            intro: "“Packing and moving” is the perfect solution if you want peace of mind. Instead of packing on your own for weeks, a professional crew handles everything quickly and safely.",
            steps: [
                {
                    title: "Preparation stage:",
                    text: "Movers arrive with everything needed — sturdy boxes (single and double wall), tape, stretch wrap, packing paper, and bubble wrap.",
                },
                {
                    title: "Packing stage:",
                    text: "The team packs the home systematically. Fragile items are wrapped separately, books go into small boxes, and clothing is organized neatly.",
                },
                {
                    title: "Labeling:",
                    text: "Every box is clearly marked with its room and contents (for example, “Kitchen – fragile” or “Kids room – toys”).",
                },
                {
                    title: "Moving and unloading:",
                    text: "After packing, everything is loaded onto the truck and delivered to the new home. Boxes are placed in the correct rooms according to labels.",
                },
            ],
            note: "Important to know: in most cases, packing and moving happen on the same day, from morning until late afternoon. For very large homes, packing may take place the day before the move.",
        },
        tips: {
            id: "tips",
            title: "Smart packing tips before the movers arrive",
            intro: "Even if you’ve booked packing services — and especially if you pack yourself — a few steps will make the move smoother:",
            items: [
                "Sort and declutter: if you didn’t use something in your current home, you won’t use it in the new one. Donate or discard it. Less volume means a cheaper move.",
                "First-night bag: prepare a separate bag with essentials — a change of clothes, toothbrushes, chargers, medication, and towels — so you don’t dig through dozens of boxes when you arrive tired.",
                "Valuables: jewelry, important documents, cash, and laptops should go with you in the car, not in the moving truck.",
                "Drawer packing: some dressers can stay packed in their drawers. Wrap the entire unit with stretch film to save box space.",
                "Keep the hardware: disassemble furniture? Put screws and small parts in one bag and attach it to the furniture or keep them in a dedicated box.",
            ],
        },
        timing: {
            id: "timing",
            title: "When should you start packing?",
            intro: "If you pack on your own, the biggest mistake is waiting until the last minute. Self-packing should begin about six weeks before the move.",
            items: [
                {
                    title: "Weeks before:",
                    text: "Pack items kept in storage or not used daily.",
                },
                {
                    title: "Two weeks before:",
                    text: "Start packing books, decor, and rooms you rarely use.",
                },
                {
                    title: "One week before:",
                    text: "Pack most clothes, toys, and kitchen equipment you won’t need soon.",
                },
                {
                    title: "Two days before:",
                    text: "Finish packing the kitchen and leave only basic items for the final days.",
                },
            ],
            outro: "Want to skip all this? Order packing through us and get everything done in one or two concentrated days!",
        },
        faq: {
            id: "faq",
            title: "Packing services FAQ",
            items: [
                {
                    question: "Do you provide insurance for belongings?",
                    answer: "Important to clarify: our portal connects customers with movers (an aggregator). We are not the insurer. However, we work only with registered professional movers and strongly recommend getting written confirmation from the mover you choose that they have valid cargo insurance covering damages.",
                },
                {
                    question: "Who provides the boxes and packing materials?",
                    answer: "When you order a full packing service, the moving company supplies everything — boxes, tape, packing paper, and bubble wrap. If you pack yourself, you can order moving boxes separately through us.",
                },
                {
                    question: "How long does it take to pack an apartment?",
                    answer: "A professional packing crew can pack a 3–4 room apartment in one workday (about 6–8 hours). Larger homes may require an extra day before moving.",
                },
                {
                    question: "Can I order packing without moving?",
                    answer: "Yes, you can order packing only, but it’s usually more cost-effective to book a combined packing + moving package.",
                },
            ],
            closingText: "Ready for an easy, stress-free move? Don’t break your back or waste valuable days. Fill out the form, compare attractive quotes for packing and moving, and let the professionals do the work for you!",
            buttonLabel: "Get packing quotes",
        },
    },
    calculatePage: {
        title: "Рассчитать стоимость",
        metaTitle: "Рассчитать стоимость переезда | Быстрый расчет",
        metaDescription: "Узнайте стоимость перевозки по Израилю, указав города отправления и назначения, а также дату переезда.",
        placeholderNotice: "Расширенная форма появится здесь. Мы используем введенные вами данные, чтобы подготовить расчет.",
        receivedDataTitle: "Полученные данные",
        missingData: "Данные не были переданы. Пожалуйста, вернитесь и заполните форму.",
        breadcrumbCurrent: "Калькулятор стоимости",
        breadcrumbSubmit: "Отправить заявку",
        breadcrumbSuccess: "Заявка отправлена",
        heroHeading: "Калькулятор стоимости переезда",
        dateLabel: "Дата",
        elevatorLabel: "Есть лифт?",
        floorLabel: "Какой этаж?",
        floorOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'],
        serviceTypeLabel: "Тип услуги",
        serviceOptions: [
            'Перевозка 1-комнатной квартиры',
            'Перевозка 2-комнатной квартиры',
            'Перевозка 3-комнатной квартиры',
            'Перевозка 4-комнатной квартиры',
            'Перевозка 5-комнатной квартиры',
            'Перевозка дома',
            'Перевозка офиса',
        ],
        roomTabsLabel: 'Комнаты',
        roomTabs: {
            livingRoom: 'Гостиная',
            bedroom: 'Спальня',
            kids: 'Детская',
            kitchen: 'Кухня',
            bathroom: 'Ванная и туалет',
            balcony: 'Балкон / махсан',
        },
        roomItems: {
            livingRoom: [
                'Диван',
                'Угловой диван',
                'Кресла',
                'Журнальный столик',
                'ТВ-тумба',
                'Телевизор',
                'Саундбар / колонки',
                'Стеллаж',
                'Полки',
                'Ковёр',
                'Торшер',
                'Вентилятор',
                'Картины',
            ],
            bedroom: [
                'Кровать',
                'Шкаф 2 двери',
                'Шкаф 3 двери',
                'Шкаф 4 двери',
                'Шкаф 5 дверей',
                'Шкаф 6 дверей',
                'Комод',
                'Комод с зеркалом',
                'Тумбочки прикроватные',
                'Пуф прикроватный',
            ],
            kids: [
                'Детская кровать',
                'Двухъярусная кровать',
                'Письменный стол',
                'Стул',
                'Шкаф',
                'Полки',
                'Манеж',
                'Кукольный дом',
                'Стеллаж',
            ],
            kitchen: [
                'Обеденный стол 4 стула',
                'Обеденный стол и 6 стульев',
                'Обеденный стол и 8 стульев',
                'Обеденный стол и 12 стульев',
                'Холодильник',
                'Морозильник',
                'Газовая плита',
                'Духовка',
                'Микроволновка',
                'Посудомоечная машина',
                'Тами-4 / Бар-водный фильтр',
            ],
            bathroom: [
                'Стиральная машина',
                'Сушилка',
                'Пенал',
            ],
            balcony: [
                'Пластиковые стулья',
                'Стол',
                'Уличная мебель (стол + кресла)',
                'Горшки с растениями',
                'Мангал',
                'Велосипед',
            ],
        },
        itemNameLabel: 'Название предмета',
        itemNamePlaceholder: 'Введите название предмета',
        customItemLabel: 'Добавить свой предмет',
        customItemPlaceholder: 'Введите название',
        selectedItemsLabel: 'Выбранные предметы',
        selectedItemsEmpty: 'Пока ничего не выбрано.',
        addButton: 'Добавить',
        decreaseLabel: 'Уменьшить количество',
        increaseLabel: 'Увеличить количество',
        assemblyLabel: 'Нужна разборка / сборка',
        submitCta: 'Рассчитать',
        successTitle: 'ПОЛУЧИЛОСЬ!',
        successMessage: 'Мы рассчитали стоимость вашей грузоперевозки!',
        contactPrompt: 'Введите данные, чтобы мы связались с вами.',
        contactNameLabel: 'ФИО',
        contactPhoneLabel: 'Номер телефона',
        contactCommentLabel: 'Комментарий',
        sendCta: 'Отправить',
        sendingCta: 'Отправляем...',
        consentLabel: 'Я подтверждаю правила и условия',
        submitError: 'Не удалось отправить заявку. Попробуйте еще раз.',
        submissionSuccessMessage: 'ВАША ЗАЯВКА УСПЕШНО ОТПРАВЛЕНА!',
        validation: {
            requiredFrom: 'Укажите город отправления',
            requiredTo: 'Укажите город назначения',
            requiredDate: 'Выберите дату переезда',
            requiredName: 'Укажите ваше имя',
            requiredPhone: 'Укажите номер телефона',
            requiredConsent: 'Подтвердите правила и условия',
        },
    },
    apartmentMovePage: {
        slug: 'apartments',
        metaTitle: 'Apartment move',
        metaDescription: 'Apartment move description.',
        title: 'Apartment move',
        tocTitle: 'Table of contents',
        tocItems: [],
        comparison: {
            id: 'why-compare',
            title: 'Why compare apartment moves?',
            paragraphs: [],
            bullets: [],
            phoneLabel: 'Call now',
        },
        process: {
            id: 'process',
            title: 'How to find an apartment move?',
            intro: '',
            steps: [],
        },
        pricing: {
            id: 'pricing',
            title: 'Apartment move price list',
            intro: '',
            note: '',
            tableLabel: 'Apartment move price list',
            tableHeaders: [],
            rows: [],
            afterTable: '',
        },
        priceFactors: {
            id: 'price-factors',
            title: 'What affects the price?',
            intro: '',
            items: [],
        },
        solutions: {
            id: 'solutions',
            title: 'Moving solutions',
            intro: '',
            items: [],
        },
        tips: {
            id: 'tips',
            title: 'Moving tips',
            intro: '',
            items: [],
        },
        faq: {
            id: 'faq',
            title: 'FAQ',
            items: [],
        },
        closing: {
            title: 'Ready to move?',
            text: '',
            buttonLabel: 'Get quotes',
        },
    },
    smallMovePage: {
        slug: 'small-move',
        metaTitle: 'Small move',
        metaDescription: 'Small move description.',
        title: 'Small move',
        tocTitle: 'Table of contents',
        tocItems: [],
        comparison: {
            title: 'Why compare small moves with us?',
            bullets: [],
        },
        cta: {
            title: 'Save on your small move',
            phoneLabel: 'Call us now',
            formLabel: 'Or leave a request',
            buttonLabel: 'Start here',
        },
        pricing: {
            id: 'pricing',
            title: 'Small move price list',
            intro: '',
            note: '',
            tableLabel: 'Small move price table',
            tableHeaders: [],
            rows: [],
            afterTable: '',
        },
        definition: {
            id: 'definition',
            title: 'What is a small move?',
            text: '',
        },
        audience: {
            id: 'audience',
            title: 'Who is this service for?',
            intro: '',
            items: [],
        },
        priceFactors: {
            id: 'price-factors',
            title: 'What affects the price?',
            items: [],
        },
        popularServices: {
            id: 'popular-services',
            title: 'Popular services',
            items: [],
        },
        crane: {
            id: 'crane',
            title: 'When do you need a crane?',
            intro: '',
            items: [],
            outro: '',
        },
        cheap: {
            id: 'cheap',
            title: 'How to get small moves cheap?',
            intro: '',
            items: [],
        },
        faq: {
            id: 'faq',
            title: 'FAQ',
            items: [],
        },
        comparisonProcess: {
            id: 'comparison-process',
            title: 'How comparison works',
            steps: [],
        },
        findCompany: {
            id: 'find-company',
            title: 'Find a company',
            intro: '',
            items: [],
            closing: '',
        },
    },
    telAvivMovePage: {
        slug: 'tel-aviv-moving',
        metaTitle: 'Moving in Tel Aviv',
        metaDescription: 'Tel Aviv moving services and price comparison.',
        title: 'Moving in Tel Aviv',
        tocTitle: 'Table of contents',
        tocItems: [],
        why: {
            id: 'why-us',
            title: 'Why use our portal?',
            paragraphs: [],
            bulletsTitle: 'Benefits',
            bullets: [],
            note: '',
        },
        pricing: {
            id: 'pricing',
            title: 'Tel Aviv moving price list',
            intro: '',
            tableLabel: 'Tel Aviv moving price table',
            tableHeaders: [],
            rows: [],
            afterTable: '',
        },
        challenges: {
            id: 'challenges',
            title: 'Challenges',
            intro: '',
            items: [],
        },
        smallMoves: {
            id: 'small-moves',
            title: 'Small moves',
            intro: '',
            bullets: [],
        },
        officeMoves: {
            id: 'office-moves',
            title: 'Office moves',
            intro: '',
            bullets: [],
        },
        extraServices: {
            id: 'extra-services',
            title: 'Additional services',
            intro: '',
            items: [],
        },
        faq: {
            id: 'faq',
            title: 'FAQ',
            items: [],
        },
        closing: {
            text: '',
        },
    },
    pianoMovePage: {
        slug: 'piano-moving',
        metaTitle: 'Piano moving',
        metaDescription: 'Piano moving description.',
        title: 'Piano moving',
        tocTitle: 'Table of contents',
        tocItems: [],
        why: {
            id: 'why-us',
            title: 'Why order piano moving with us?',
            intro: '',
            bulletsTitle: 'Benefits',
            bullets: [],
            noteLabel: 'Important:',
            note: '',
        },
        pricing: {
            id: 'pricing',
            title: 'Piano moving price list',
            intro: '',
            tableLabel: 'Piano moving price list',
            tableHeaders: [],
            rows: [],
            afterTable: '',
        },
        comparison: {
            id: 'upright-vs-grand',
            title: 'Upright piano vs grand piano',
            items: [],
        },
        crane: {
            id: 'crane',
            title: 'When do you need a crane?',
            intro: '',
            items: [],
        },
        preparation: {
            id: 'preparation',
            title: 'Preparing the piano for moving',
            intro: '',
            items: [],
        },
        stairs: {
            id: 'stairs',
            title: 'Moving via stairs',
            intro: '',
            items: [],
            outro: '',
        },
        faq: {
            id: 'faq',
            title: 'FAQ',
            items: [],
        },
        closing: {
            title: 'Ready to move your piano?',
            text: '',
            buttonLabel: 'Get quotes',
        },
    },
    officeMovePage: {
        slug: 'offices',
        metaTitle: 'Office move',
        metaDescription: 'Office move description.',
        title: 'Office move',
        tocTitle: 'Table of contents',
        tocItems: [],
        advantages: {
            id: 'why-us',
            title: 'Why choose us for office moves?',
            paragraphs: [],
            bulletsTitle: 'Our advantages',
            bullets: [],
            noteLabel: 'Important:',
            note: '',
        },
        pricing: {
            id: 'pricing',
            title: 'Office move price list',
            intro: '',
            tableLabel: 'Office move price list',
            tableHeaders: [],
            rows: [],
            afterTable: '',
        },
        planning: {
            id: 'planning',
            title: 'Planning an office move',
            paragraphs: [],
        },
        comparison: {
            id: 'day-night',
            title: 'Day or night office move',
            intro: '',
            tableLabel: 'Office move comparison',
            tableHeaders: [],
            rows: [],
        },
        packing: {
            id: 'packing',
            title: 'Packing and labeling',
            intro: '',
            items: [],
        },
        tips: {
            id: 'tips',
            title: 'Tips for saving',
            intro: '',
            items: [],
        },
        faq: {
            id: 'faq',
            title: 'FAQ',
            items: [],
        },
        closing: {
            title: 'Ready to move?',
            text: '',
            buttonLabel: 'Get quotes',
        },
    },
    leaveReviewPage: {
        metaTitle: "Оставить отзыв | Отзывы клиентов о перевозках",
        metaDescription: "Поделитесь впечатлением о перевозке: оценка, комментарий и фото. Ваш отзыв помогает выбрать перевозчика.",
        breadcrumbTestimonials: "Отзывы",
        breadcrumbCurrent: "Оставить отзыв",
        breadcrumbSuccess: "Ваш отзыв отправлен",
        heroTitle: "ОСТАВИТЬ ОТЗЫВ",
        ratingLabel: "Оцените перевозку",
        ratingHint: "Выберите количество звезд",
        uploadLabel: "Загрузить фото",
        uploadHint: "Добавьте фото к отзыву",
        nameLabel: "Ваше имя",
        namePlaceholder: "Имя",
        emailLabel: "Ваша почта",
        emailPlaceholder: "Email",
        carrierLabel: "Имя перевозчика или название фирмы:",
        carrierPlaceholder: "Введите сообщение...",
        commentLabel: "Комментарий",
        commentPlaceholder: "Введите сообщение...",
        submitLabel: "Отправить",
        submitError: "Не удалось отправить отзыв. Попробуйте еще раз.",
        submissionSuccessMessage: "ВАШ ОТЗЫВ ОТПРАВЛЕН",
        consentLabel: "Я подтверждаю правила и условия",
        validation: {
            requiredName: "Укажите ваше имя",
            requiredEmail: "Укажите вашу почту",
            requiredRating: "Поставьте оценку",
            requiredConsent: "Подтвердите правила и условия",
        },
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
                {label: "Small move", path: "small-move"},
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
            "contact": "Contact",
            "leaveReview": "Leave a review"
        },
        languageSwitcher: {
            he: 'Hebrew',
            ru: 'Russian',
            en: 'English',
        },
    },
    footer: {
        ariaLabel: 'Навигация по футеру',
        columns: {
            home: {
                title: 'Главная',
                links: [
                    {label: 'Статьи', anchor: 'articles'},
                    {label: 'Услуги', anchor: 'services'},
                    {label: 'Отзывы', anchor: 'testimonials'},
                    {label: 'Почему мы', anchor: 'whyUs'},
                    {label: 'Выбор района', anchor: 'regions'},
                    {label: 'Лучшие перевозчики', anchor: 'carriers'},
                    {label: 'Рассчитать стоимость', anchor: 'calculate'},
                ],
            },
            transportation: {
                title: 'Перевозки',
                links: [
                    {label: 'Квартиры', path: 'квартиры'},
                    {label: 'Офисный переезд', path: 'офисные'},
                    {label: 'Частный дом', path: 'частный-дом'},
                    {label: 'Маленький переезд', path: 'маленький-переезд'},
                ],
            },
            services: {
                title: 'Доп. услуги',
                links: [
                    {label: 'Упаковка', path: 'упаковка'},
                    {label: 'Хранение', path: 'хранение'},
                    {label: 'Поздние перевозки', path: 'поздние-перевозки'},
                ],
            },
            contacts: {
                title: 'Контакты',
                addressLabel: 'Адрес',
                emailLabel: 'Почта',
                phoneLabel: 'Телефон',
                socialLabel: 'Мы в соцсетях',
                socialLinks: [
                    {label: 'Facebook', href: 'https://facebook.com', network: 'facebook'},
                    {label: 'WhatsApp', href: 'https://wa.me/', network: 'whatsapp'},
                    {label: 'Telegram', href: 'https://t.me/', network: 'telegram'},
                    {label: 'Twitter', href: 'https://twitter.com', network: 'twitter'},
                ],
            },
        },
    },
    storagePage: {
        slug: 'storage',
        metaTitle: 'Storage services',
        metaDescription: 'Storage services description.',
        title: 'Storage services',
        tocTitle: 'Contents',
        tocItems: [
            {id: 'why-us', label: 'Why choose us'},
        ],
        whyChooseUs: {
            id: 'why-us',
            title: 'Why choose us',
            paragraphs: ['Storage services details.'],
            bulletsTitle: 'Benefits',
            bullets: ['Affordable prices.'],
            notice: 'Storage notice.',
        },
        whenUse: {
            id: 'when-use',
            title: 'When to use storage',
            intro: 'Storage service use cases.',
            items: [
                {title: 'Renovation:', text: 'Protect your items.'},
            ],
        },
        pricing: {
            id: 'pricing',
            title: 'Pricing',
            intro: 'Storage pricing overview.',
            tableLabel: 'Storage pricing table',
            tableHeaders: ['Storage size', 'Price range', 'Notes'],
            rows: [
                {
                    notes: 'Small storage items.',
                    priceRange: '150–250 ₪',
                    item: 'Single items storage',
                },
            ],
            afterTable: 'Prices are estimates.',
        },
        chooseStorage: {
            id: 'choose-storage',
            title: 'How to choose storage',
            items: ['Check security and insurance.'],
        },
        duration: {
            id: 'duration',
            title: 'Short vs long term',
            items: [
                {title: 'Short-term:', text: 'Flexible for moves and renovations.'},
            ],
        },
        tips: {
            id: 'tips',
            title: 'Packing tips',
            intro: 'Prepare items for storage.',
            items: [
                {title: 'Appliances:', text: 'Defrost and dry.'},
            ],
        },
        faq: {
            id: 'faq',
            title: 'FAQ',
            items: [
                {
                    question: 'Can I order storage and moving together?',
                    answer: 'Yes, combine services easily.',
                },
            ],
            closingText: 'Compare storage offers now.',
            buttonLabel: 'Get a quote',
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
            footer: {
                ...defaultDictionary.footer,
                ...loadedDict.footer,
                columns: {
                    home: {
                        ...defaultDictionary.footer.columns.home,
                        ...loadedDict.footer?.columns?.home,
                        links: loadedDict.footer?.columns?.home?.links ?? defaultDictionary.footer.columns.home.links,
                    },
                    transportation: {
                        ...defaultDictionary.footer.columns.transportation,
                        ...loadedDict.footer?.columns?.transportation,
                        links: loadedDict.footer?.columns?.transportation?.links
                            ?? defaultDictionary.footer.columns.transportation.links,
                    },
                    services: {
                        ...defaultDictionary.footer.columns.services,
                        ...loadedDict.footer?.columns?.services,
                        links: loadedDict.footer?.columns?.services?.links
                            ?? defaultDictionary.footer.columns.services.links,
                    },
                    contacts: {
                        ...defaultDictionary.footer.columns.contacts,
                        ...loadedDict.footer?.columns?.contacts,
                        socialLinks: loadedDict.footer?.columns?.contacts?.socialLinks
                            ?? defaultDictionary.footer.columns.contacts.socialLinks,
                    },
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
            homeTestimonials: {
                ...defaultDictionary.homeTestimonials,
                ...loadedDict.homeTestimonials,
                sliderItems: loadedDict.homeTestimonials?.sliderItems ?? defaultDictionary.homeTestimonials.sliderItems,
            },
            homeArticles: {
                ...defaultDictionary.homeArticles,
                ...loadedDict.homeArticles,
                articles: loadedDict.homeArticles?.articles ?? defaultDictionary.homeArticles.articles,
            },
            articlesPage: {
                ...defaultDictionary.articlesPage,
                ...loadedDict.articlesPage,
            },
            articlePage: {
                ...defaultDictionary.articlePage,
                ...loadedDict.articlePage,
                fallbackBody: loadedDict.articlePage?.fallbackBody ?? defaultDictionary.articlePage.fallbackBody,
            },
            regionPage: {
                ...defaultDictionary.regionPage,
                ...loadedDict.regionPage,
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
            packingPage: {
                ...defaultDictionary.packingPage,
                ...loadedDict.packingPage,
                whyChooseUs: {
                    ...defaultDictionary.packingPage.whyChooseUs,
                    ...loadedDict.packingPage?.whyChooseUs,
                    paragraphs: loadedDict.packingPage?.whyChooseUs?.paragraphs
                        ?? defaultDictionary.packingPage.whyChooseUs.paragraphs,
                    bullets: loadedDict.packingPage?.whyChooseUs?.bullets
                        ?? defaultDictionary.packingPage.whyChooseUs.bullets,
                },
                pricing: {
                    ...defaultDictionary.packingPage.pricing,
                    ...loadedDict.packingPage?.pricing,
                    rows: loadedDict.packingPage?.pricing?.rows
                        ?? defaultDictionary.packingPage.pricing.rows,
                },
                process: {
                    ...defaultDictionary.packingPage.process,
                    ...loadedDict.packingPage?.process,
                    steps: loadedDict.packingPage?.process?.steps
                        ?? defaultDictionary.packingPage.process.steps,
                },
                tips: {
                    ...defaultDictionary.packingPage.tips,
                    ...loadedDict.packingPage?.tips,
                    items: loadedDict.packingPage?.tips?.items
                        ?? defaultDictionary.packingPage.tips.items,
                },
                timing: {
                    ...defaultDictionary.packingPage.timing,
                    ...loadedDict.packingPage?.timing,
                    items: loadedDict.packingPage?.timing?.items
                        ?? defaultDictionary.packingPage.timing.items,
                },
                faq: {
                    ...defaultDictionary.packingPage.faq,
                    ...loadedDict.packingPage?.faq,
                    items: loadedDict.packingPage?.faq?.items
                        ?? defaultDictionary.packingPage.faq.items,
                },
            },
            storagePage: {
                ...defaultDictionary.storagePage,
                ...loadedDict.storagePage,
                whyChooseUs: {
                    ...defaultDictionary.storagePage.whyChooseUs,
                    ...loadedDict.storagePage?.whyChooseUs,
                    paragraphs: loadedDict.storagePage?.whyChooseUs?.paragraphs
                        ?? defaultDictionary.storagePage.whyChooseUs.paragraphs,
                    bullets: loadedDict.storagePage?.whyChooseUs?.bullets
                        ?? defaultDictionary.storagePage.whyChooseUs.bullets,
                },
                whenUse: {
                    ...defaultDictionary.storagePage.whenUse,
                    ...loadedDict.storagePage?.whenUse,
                    items: loadedDict.storagePage?.whenUse?.items
                        ?? defaultDictionary.storagePage.whenUse.items,
                },
                pricing: {
                    ...defaultDictionary.storagePage.pricing,
                    ...loadedDict.storagePage?.pricing,
                    rows: loadedDict.storagePage?.pricing?.rows
                        ?? defaultDictionary.storagePage.pricing.rows,
                },
                chooseStorage: {
                    ...defaultDictionary.storagePage.chooseStorage,
                    ...loadedDict.storagePage?.chooseStorage,
                    items: loadedDict.storagePage?.chooseStorage?.items
                        ?? defaultDictionary.storagePage.chooseStorage.items,
                },
                duration: {
                    ...defaultDictionary.storagePage.duration,
                    ...loadedDict.storagePage?.duration,
                    items: loadedDict.storagePage?.duration?.items
                        ?? defaultDictionary.storagePage.duration.items,
                },
                tips: {
                    ...defaultDictionary.storagePage.tips,
                    ...loadedDict.storagePage?.tips,
                    items: loadedDict.storagePage?.tips?.items
                        ?? defaultDictionary.storagePage.tips.items,
                },
                faq: {
                    ...defaultDictionary.storagePage.faq,
                    ...loadedDict.storagePage?.faq,
                    items: loadedDict.storagePage?.faq?.items
                        ?? defaultDictionary.storagePage.faq.items,
                },
            },
            calculatePage: {
                ...defaultDictionary.calculatePage,
                ...loadedDict.calculatePage,
            },
            apartmentMovePage: {
                ...defaultDictionary.apartmentMovePage,
                ...loadedDict.apartmentMovePage,
            },
            smallMovePage: {
                ...defaultDictionary.smallMovePage,
                ...loadedDict.smallMovePage,
            },
            telAvivMovePage: {
                ...defaultDictionary.telAvivMovePage,
                ...loadedDict.telAvivMovePage,
            },
            pianoMovePage: {
                ...defaultDictionary.pianoMovePage,
                ...loadedDict.pianoMovePage,
            },
            officeMovePage: {
                ...defaultDictionary.officeMovePage,
                ...loadedDict.officeMovePage,
            },
            leaveReviewPage: {
                ...defaultDictionary.leaveReviewPage,
                ...loadedDict.leaveReviewPage,
                validation: {
                    ...defaultDictionary.leaveReviewPage.validation,
                    ...loadedDict.leaveReviewPage?.validation,
                },
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
