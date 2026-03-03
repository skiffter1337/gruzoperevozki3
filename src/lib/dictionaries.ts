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
    metaTitle?: string;
    metaDescription?: string;
    datePublished?: string;
    dateModified?: string;
    authorName?: string;
    publisherName?: string;
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

export interface HolonMoveTableRow {
    type: string;
    priceRange: string;
    notes: string;
}

export type CityMoveTocItem = {
    id: string;
    label: string;
};

export type CityMoveChallengesItem = {
    title: string;
    text: string;
};

export type CityMoveExtraServiceItem = {
    title: string;
    text: string;
};

export type CityMoveFaqItem = {
    question: string;
    answer: string;
};

export type CityMoveTableRow = {
    type: string;
    priceRange: string;
    notes: string;
};

export type CityMovePageDictionary = {
    slug: string;
    metaTitle: string;
    metaDescription: string;
    title: string;

    tocTitle: string;
    tocItems: CityMoveTocItem[];

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
        rows: CityMoveTableRow[];
        afterTable: string;
    };

    challenges: {
        id: string;
        title: string;
        intro: string;
        items: CityMoveChallengesItem[];
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
        items: CityMoveExtraServiceItem[];
    };

    faq: {
        id: string;
        title: string;
        items: CityMoveFaqItem[];
    };

    closing: {
        text: string;
    };
};

export interface PriceListTableRow {
    service: string;
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
    network: 'facebook' | 'whatsapp' | 'telegram';
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
            contact: string;
            leaveReview: string;
            terms: string;
        };
        languageSwitcher: {
            he: string;
            ru: string;
            en: string;
        };
        slogan: string;
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
        tocItems: Array<{ id: string; label: string }>;
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
            steps: Array<{ title: string; text: string }>;
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
            items: Array<{ title: string; text: string }>;
            outro: string;
        };
        faq: {
            id: string;
            title: string;
            items: Array<{ question: string; answer: string }>;
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
        tocItems: Array<{ id: string; label: string }>;
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
            items: Array<{ title: string; text: string }>;
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
            items: Array<{ title: string; text: string }>;
        };
        tips: {
            id: string;
            title: string;
            intro: string;
            items: Array<{ title: string; text: string }>;
        };
        faq: {
            id: string;
            title: string;
            items: Array<{ question: string; answer: string }>;
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
        servicePlaceholder: string;
        serviceOptions: string[];
        boxesLabel: string;
        boxesPlaceholder: string;
        boxesOptions: string[];
        roomTabsLabel: string;
        roomTabs: {
            livingRoom: string;
            bedroom: string;
            kids: string;
            kitchen: string;
            bathroom: string;
            balcony: string;
            all: string;
        };
        roomItems: Record<
            Exclude<keyof DictionaryType['calculatePage']['roomTabs'], 'all'>,
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
        removeLabel: string;
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
            requiredServiceType: string;
            requiredBoxesRange: string;
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
        tocItems: Array<{ id: string; label: string }>;
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
            steps: Array<{ title: string; text: string }>;
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
            items: Array<{ title: string; text: string }>;
        };
        solutions: {
            id: string;
            title: string;
            intro: string;
            items: Array<{ title: string; text: string }>;
        };
        tips: {
            id: string;
            title: string;
            intro: string;
            items: Array<{ title: string; text: string }>;
        };
        faq: {
            id: string;
            title: string;
            items: Array<{ question: string; answer: string }>;
        };
        closing: {
            title: string;
            text: string;
            buttonLabel: string;
        };
    };
    houseMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;
        tocTitle: string;
        tocItems: Array<{ id: string; label: string }>;
        comparison: {
            id: string;
            title: string;
            paragraphs: string[];
            bullets: string[];
        };
        process: {
            id: string;
            title: string;
            intro: string;
            steps: Array<{ title: string; text: string }>;
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
            items: Array<{ title: string; text: string }>;
        };
        solutions: {
            id: string;
            title: string;
            intro: string;
            items: Array<{ title: string; text: string }>;
        };
        tips: {
            id: string;
            title: string;
            intro: string;
            items: Array<{ title: string; text: string }>;
        };
        faq: {
            id: string;
            title: string;
            items: Array<{ question: string; answer: string }>;
        };
        closing: {
            id: string;
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
        tocItems: Array<{ id: string; label: string }>;
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
            items: Array<{ title: string; text: string }>;
        };
        priceFactors: {
            id: string;
            title: string;
            items: Array<{ title: string; text: string }>;
        };
        popularServices: {
            id: string;
            title: string;
            items: Array<{ title: string; text: string }>;
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
            items: Array<{ title: string; text: string }>;
        };
        faq: {
            id: string;
            title: string;
            items: Array<{ question: string; answer: string }>;
        };
        comparisonProcess: {
            id: string;
            title: string;
            steps: Array<{ title: string; text: string }>;
        };
        findCompany: {
            id: string;
            title: string;
            intro: string;
            items: Array<{ title: string; text: string }>;
            closing: string;
        };
    };
    haifaMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;
        tocTitle: string;
        tocItems: Array<{ id: string; label: string }>;
        advantages: {
            id: string;
            title: string;
            bullets: string[];
        };
        howToFind: {
            id: string;
            title: string;
            paragraphs: string[];
            stepsTitle: string;
            steps: string[];
            outro: string;
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
        challenges: {
            id: string;
            title: string;
            items: Array<{ title: string; text: string }>;
        };
        smallMoves: {
            id: string;
            title: string;
            text: string;
        };
        services: {
            id: string;
            title: string;
            items: Array<{ title: string; text: string }>;
        };
        faq: {
            id: string;
            title: string;
            items: Array<{ question: string; answer: string }>;
        };
        closing: {
            id: string;
            title: string;
            text: string;
            buttonLabel: string;
        };
    };
    priceListPage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;
        tocTitle: string;
        tocItems: Array<{ id: string; label: string }>;
        advantages: {
            id: string;
            title: string;
            intro: string;
            bullets: string[];
        };
        calculator: {
            id: string;
            title: string;
            paragraphs: string[];
        };
        apartmentPricing: {
            id: string;
            title: string;
            paragraphs: string[];
            tableLabel: string;
            tableHeaders: string[];
            rows: PriceListTableRow[];
        };
        smallMovePricing: {
            id: string;
            title: string;
            intro: string;
            tableLabel: string;
            tableHeaders: string[];
            rows: PriceListTableRow[];
        };
        singleItemsPricing: {
            id: string;
            title: string;
            intro: string;
            tableLabel: string;
            tableHeaders: string[];
            rows: PriceListTableRow[];
        };
        officePricing: {
            id: string;
            title: string;
            intro: string;
            tableLabel: string;
            tableHeaders: string[];
            rows: PriceListTableRow[];
        };
        furniturePricing: {
            id: string;
            title: string;
            intro: string;
            tableLabel: string;
            tableHeaders: string[];
            rows: PriceListTableRow[];
        };
        studentPricing: {
            id: string;
            title: string;
            intro: string;
            tableLabel: string;
            tableHeaders: string[];
            rows: PriceListTableRow[];
        };
        specialPricing: {
            id: string;
            title: string;
            intro: string;
            tableLabel: string;
            tableHeaders: string[];
            rows: PriceListTableRow[];
        };
        calculatorBestPrice: {
            id: string;
            title: string;
            paragraphs: string[];
            steps: string[];
            factorsTitle: string;
            factors: string[];
            closing: string;
            cta: string;
        };
    };
    eilatMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    };
    netivotMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    },
    ashkelonMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    },
    dimonaMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    };
    beerShevaMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    };
    tiberiasMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    };
    karmielMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    },
    nazarethMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    };
    akkoMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    },
    maaleAdumimMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    },
    mevaseretZionMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    };
    beitShemeshMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    };
    modiinMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    };
    jerusalemMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    },
    ramlaMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    },
    ashdodMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    },
    rehovotMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    },
    lodMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    },
    rishonLeZionMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    },
    hodHaSharonMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    },
    kfarSabaMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    },
    herzliyaMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    },
    raananaMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    },
    netanyaMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    },
    ramatGanMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    };
    givataimMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;
        tocTitle: string;
        tocItems: { id: string; label: string }[];
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
            rows: { type: string; priceRange: string; notes: string }[];
            afterTable: string;
        };
        challenges: {
            id: string;
            title: string;
            intro: string;
            items: { title: string; text: string }[];
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
            items: { title: string; text: string }[];
        };
        faq: {
            id: string;
            title: string;
            items: { question: string; answer: string }[];
        };
        closing: {
            text: string;
        };
    };
    batYamMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;

        tocTitle: string;
        tocItems: Array<{
            id: string;
            label: string;
        }>;

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
            tableHeaders: [string, string, string];
            rows: Array<{
                type: string;
                priceRange: string;
                notes: string;
            }>;
            afterTable: string;
        };

        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{
                title: string;
                text: string;
            }>;
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
            items: Array<{
                title: string;
                text: string;
            }>;
        };

        faq: {
            id: string;
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };

        closing: {
            text: string;
        };
    };
    telAvivMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;
        tocTitle: string;
        tocItems: Array<{ id: string; label: string }>;
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
            items: Array<{ title: string; text: string }>;
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
            items: Array<{ title: string; text: string }>;
        };
        faq: {
            id: string;
            title: string;
            items: Array<{ question: string; answer: string }>;
        };
        closing: {
            text: string;
        };
    };
    holonMovePage: {
        slug: string;
        metaTitle: string;
        metaDescription: string;
        title: string;
        tocTitle: string;
        tocItems: Array<{ id: string; label: string }>;
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
            rows: HolonMoveTableRow[];
            afterTable: string;
        };
        challenges: {
            id: string;
            title: string;
            intro: string;
            items: Array<{ title: string; text: string }>;
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
            items: Array<{ title: string; text: string }>;
        };
        faq: {
            id: string;
            title: string;
            items: Array<{ question: string; answer: string }>;
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
        tocItems: Array<{ id: string; label: string }>;
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
            items: Array<{ title: string; text: string }>;
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
            items: Array<{ title: string; text: string }>;
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
            items: Array<{ question: string; answer: string }>;
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
        tocItems: Array<{ id: string; label: string }>;
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
            items: Array<{ title: string; text: string }>;
        };
        tips: {
            id: string;
            title: string;
            intro: string;
            items: Array<{ title: string; text: string }>;
        };
        faq: {
            id: string;
            title: string;
            items: Array<{ question: string; answer: string }>;
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
    contactPage: {
        metaTitle: string;
        metaDescription: string;
        breadcrumbCurrent: string;
        heroTitle: string;
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        commentLabel: string;
        commentPlaceholder: string;
        submitLabel: string;
        submittingLabel: string;
        submitError: string;
        submissionSuccessMessage: string;
        validation: {
            requiredName: string;
            requiredEmail: string;
            requiredComment: string;
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
    eilatMovePage: {
        slug: "перевозки-в-эйлате",
        metaTitle: "Перевозки в Эйлате недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Эйлате? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости. Межгород в/из Эйлата — по точному расчёту.",
        title: "Эйлат: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Эйлате",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Эйлате через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Эйлате — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Эйлате: логистика, жара и межгород"},
            {id: "small-moves", label: "Небольшие перевозки в Эйлате — быстро и выгодно"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Эйлате"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Эйлате через наш портал?",
            paragraphs: [
                "Эйлат — курортный город на юге страны, где переезды часто связаны с длинной логистикой и сезонностью. Важно заранее продумать маршрут, время выезда и условия разгрузки — особенно если переезд в/из центра Израиля.",
                "Наш портал — агрегатор, где рекомендованные перевозчики конкурируют за ваш заказ. Вы получаете несколько предложений, сравниваете условия и выбираете оптимальный вариант по цене и сервису.",
            ],
            bulletsTitle: "Что вы получаете, заказывая через нас:",
            bullets: [
                "Сравнение цен от нескольких перевозчиков — экономия до 45%.",
                "Перевозки от 249 ₪: от одной вещи до переезда квартиры или офиса (межгород рассчитывается отдельно).",
                "Только рекомендованные исполнители: отбор по качеству и отзывам.",
                "Комплекс услуг: упаковка, разборка/сборка мебели, при необходимости — подъёмный кран.",
                "Гибкие варианты по времени: будни, пятница, срочные переезды по согласованию.",
                "Междугородняя логистика: Эйлат ↔ центр/юг/север Израиля.",
            ],
            note:
                "Важно: мы выступаем как портал-агрегатор и связываем вас с рекомендованными перевозчиками. Страхование имущества предоставляет (или не предоставляет) выбранная компания. Рекомендуем заранее уточнить наличие действующего страхового покрытия груза до начала работ.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Эйлате — сколько это действительно стоит?",
            intro:
                "Локальные перевозки по Эйлату обычно проще, но междугородние переезды (в/из Эйлата) сильно зависят от расстояния, объёма и графика. Ниже — ориентиры для внутригородских задач и базовой упаковки.",
            tableLabel: "Прайс-лист перевозок в Эйлате",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Эйлате", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи (по городу)",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина; зависит от этажности/доступа.",
                },
                {
                    type: "Небольшая перевозка / студия (по городу)",
                    priceRange: "600–1 250 ₪",
                    notes: "Внутри Эйлата, без сложной логистики.",
                },
                {
                    type: "2-комнатная квартира (по городу)",
                    priceRange: "1 200–2 100 ₪",
                    notes: "Цена выше, если нет лифта или дальняя парковка.",
                },
                {
                    type: "3-комнатная квартира (по городу)",
                    priceRange: "2 000–3 400 ₪",
                    notes: "Обычно включает базовую разборку/сборку.",
                },
                {
                    type: "4-комнатная квартира (по городу)",
                    priceRange: "2 900–4 800 ₪",
                    notes: "Рекомендуется предварительная оценка объёма.",
                },
                {
                    type: "Межгород Эйлат ↔ центр/север",
                    priceRange: "По точному расчёту",
                    notes: "Зависит от объёма, километража, этажей и остановок.",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Чаще всего почасовая оплата.",
                },
            ],
            afterTable:
                "Цены указаны для ориентира. Для точного расчёта (особенно межгорода) заполните форму — перевозчики пришлют предложения под ваш маршрут и условия.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Эйлате: логистика, жара и межгород",
            intro: "Эйлат — особенный город, и у переездов здесь есть свои нюансы. Вот что важно учесть:",
            items: [
                {
                    title: "Длинная логистика:",
                    text:
                        "межгород в/из Эйлата — это планирование маршрута и времени, иногда с ночным выездом. Обсудите график заранее, чтобы избежать лишних часов в пути.",
                },
                {
                    title: "Жара и безопасность вещей:",
                    text:
                        "в жаркие месяцы упаковка и защита техники особенно важны. Попросите надёжную фиксацию и защитные материалы для хрупких предметов.",
                },
                {
                    title: "Сезонность и загрузка:",
                    text:
                        "в туристические периоды спрос выше. Если нужен конкретный день — лучше бронировать заранее.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Эйлате — быстро и выгодно",
            intro:
                "Нужно перевезти несколько предметов, технику или вещи из небольшой квартиры? Небольшая перевозка часто решается быстрее и дешевле.",
            bullets: [
                "Фургоны и небольшие грузовики: удобны для локальных задач по городу.",
                "Перевозят: технику, матрасы, диваны, комоды, коробки. Цена — от 249 ₪ за одну вещь по Эйлату.",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Эйлате",
            intro:
                "Офисный переезд требует точности и минимального простоя. Мы помогаем найти перевозчиков, которые умеют работать с бизнес-переездами:",
            bullets: [
                "Упаковка техники и документов: компьютеры, мониторы, архивы.",
                "Переезд в удобное время: вечер/пятница по согласованию.",
                "Разборка и сборка: столы, шкафы, стеллажи и рабочие места.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл спокойнее, можно добавить услуги «под ключ»:",
            items: [
                {
                    title: "Профессиональная упаковка:",
                    text:
                        "бригада привезёт коробки и материалы, аккуратно упакует и промаркирует вещи.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "разберут шкафы, кровати и стеллажи и соберут на новом месте.",
                },
                {
                    title: "Упаковочные материалы:",
                    text:
                        "пузырчатая плёнка, скотч, стрейч, защитные уголки — можно заказать заранее.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Почему межгород из/в Эйлат считают отдельно?",
                    answer:
                        "Потому что расстояние большое, и цена зависит от маршрута, объёма, этажей, времени выезда и возможных остановок. Лучше указать детали — и перевозчики дадут точный расчёт.",
                },
                {
                    question: "Можно ли заказать перевозку одной вещи по Эйлату?",
                    answer:
                        "Да. Для этого часто используют фургон или небольшой грузовик. Старт — от 249 ₪ в пределах города.",
                },
                {
                    question: "Как подготовиться к переезду в жару?",
                    answer:
                        "Упакуйте хрупкое и технику с защитой, договоритесь о раннем выезде/разгрузке и попросите фиксировать вещи ремнями и плёнкой.",
                },
                {
                    question: "Нужен ли подъёмный кран?",
                    answer:
                        "Если мебель не проходит в дверь/лестницу или высокий этаж — кран экономит время и снижает риск повреждений. Стоимость обычно отдельная, часто по часам.",
                },
            ],
        },
        closing: {
            text:
                "Планируете переезд в Эйлате или из/в Эйлат? Заполните форму, получите предложения от рекомендованных перевозчиков и выберите самое выгодное — без переплат.",
        },
    },
    netivotMovePage: {
        slug: "перевозки-в-нетивоте",
        metaTitle: "Перевозки в Нетивоте недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Нетивоте? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Нетивот: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Нетивоте",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Нетивоте через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Нетивоте — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Нетивоте: частные дома, подъезды и межгород"},
            {id: "small-moves", label: "Небольшие перевозки в Нетивоте — быстро и выгодно"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Нетивоте"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Нетивоте через наш портал?",
            paragraphs: [
                "Нетивот — город, который быстро развивается: новые кварталы, частные дома и переезды между соседними городами юга. Чтобы переезд прошёл спокойно, важно заранее понять объём вещей и условия подъезда к дому.",
                "Наш портал — агрегатор, где рекомендованные перевозчики конкурируют за ваш заказ. Вы получаете несколько предложений, сравниваете условия и выбираете оптимальный вариант по цене и сервису.",
            ],
            bulletsTitle: "Что вы получаете, заказывая через нас:",
            bullets: [
                "Сравнение цен от нескольких перевозчиков — экономия до 45%.",
                "Перевозки от 249 ₪: от одной вещи до переезда квартиры, дома или офиса.",
                "Только рекомендованные исполнители: отбор по качеству и отзывам.",
                "Комплекс услуг: упаковка, разборка/сборка мебели, при необходимости — подъёмный кран.",
                "Гибкие варианты по времени: будни, пятница, срочные переезды по согласованию.",
                "Маршруты по городу и межгород: Нетивот ↔ Беэр-Шева ↔ центр/юг Израиля.",
            ],
            note:
                "Важно: мы выступаем как портал-агрегатор и связываем вас с рекомендованными перевозчиками. Страхование имущества предоставляет (или не предоставляет) выбранная компания. Рекомендуем заранее уточнить наличие действующего страхового покрытия груза до начала работ.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Нетивоте — сколько это действительно стоит?",
            intro:
                "Цена зависит от объёма вещей, этажности (если квартира), наличия лифта, доступности подъезда и расстояния (межгород). Ниже — ориентировочные диапазоны по предложениям перевозчиков для Нетивота.",
            tableLabel: "Прайс-лист перевозок в Нетивоте",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Нетивоте", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина; зависит от этажности/доступа.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студента",
                    priceRange: "550–1 150 ₪",
                    notes: "Подходит для небольших переездов по городу и в соседние районы.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 100–1 950 ₪",
                    notes: "Цена выше, если нет лифта или сложная парковка.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "1 950–3 250 ₪",
                    notes: "Обычно включает базовую разборку/сборку.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 800–4 700 ₪",
                    notes: "Рекомендуется предварительная оценка объёма.",
                },
                {
                    type: "Перевозка дома / 5-комнатной квартиры",
                    priceRange: "4 000–6 900 ₪",
                    notes: "Часто влияет расстояние до парковки и объём мебели.",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Чаще всего почасовая оплата.",
                },
            ],
            afterTable:
                "Цены указаны для ориентира. Для точного расчёта и более выгодного предложения заполните форму — перевозчики пришлют цены под ваш объём и условия.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Нетивоте: частные дома, подъезды и межгород",
            intro: "Чтобы переезд прошёл без сюрпризов, заранее обсудите эти моменты:",
            items: [
                {
                    title: "Частные дома и двор:",
                    text:
                        "часто нужно учесть лестницы, входы, ширину ворот и удобство подъезда. Это влияет на время и состав бригады.",
                },
                {
                    title: "Подъезд и парковка:",
                    text:
                        "в некоторых местах грузовой машине нужно остановиться дальше, и перенос вещей становится длиннее. Лучше уточнить точку разгрузки заранее.",
                },
                {
                    title: "Междугородние переезды:",
                    text:
                        "Нетивот часто связан с Беэр-Шевой и другими городами юга. Согласуйте километраж, остановки и точное время выезда.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Нетивоте — быстро и выгодно",
            intro:
                "Если вам нужно перевезти несколько предметов или вещи из небольшой квартиры — «малый формат» обычно оптимален.",
            bullets: [
                "Фургоны и небольшие грузовики: дешевле и проще для небольших задач.",
                "Перевозят: технику, матрасы, диваны, комоды, коробки. Цена — от 249 ₪ за одну вещь в пределах города (межгород рассчитывается отдельно).",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Нетивоте",
            intro:
                "Для офисов важно минимизировать простой. Мы помогаем найти перевозчиков, которые умеют работать с бизнес-переездами:",
            bullets: [
                "Упаковка техники и документов: компьютеры, мониторы, архивы.",
                "Переезд в удобное время: вечер/пятница по согласованию.",
                "Разборка и сборка: столы, шкафы, стеллажи и рабочие места.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл спокойнее, можно добавить услуги «под ключ»:",
            items: [
                {
                    title: "Профессиональная упаковка:",
                    text:
                        "бригада привезёт коробки и материалы, аккуратно упакует и промаркирует вещи.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "разберут шкафы, кровати и стеллажи и соберут на новом месте.",
                },
                {
                    title: "Упаковочные материалы:",
                    text:
                        "пузырчатая плёнка, скотч, стрейч, защитные уголки — можно заказать заранее.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Когда лучше бронировать перевозку в Нетивоте?",
                    answer:
                        "В конце месяца и летом спрос выше — лучше бронировать за 1–2 недели. В обычные недели часто можно найти вариант за несколько дней.",
                },
                {
                    question: "Можно ли заказать перевозку одной вещи?",
                    answer:
                        "Да. Для этого часто используют фургон или небольшой грузовик. Старт — от 249 ₪ внутри города.",
                },
                {
                    question: "Сколько стоит межгород из Нетивота?",
                    answer:
                        "Зависит от города назначения, объёма, этажей/доступа и остановок. Укажите детали — и перевозчики дадут точные предложения.",
                },
                {
                    question: "Нужен ли подъёмный кран?",
                    answer:
                        "Если мебель не проходит в дверь/лестницу или высокий этаж — кран экономит время и снижает риск повреждений. Стоимость обычно отдельная, часто по часам.",
                },
            ],
        },
        closing: {
            text:
                "Планируете переезд в Нетивоте? Заполните форму, получите предложения от рекомендованных перевозчиков и выберите самое выгодное — без переплат.",
        },
    },
    ashkelonMovePage: {
        slug: "перевозки-в-ашкелоне",
        metaTitle: "Перевозки в Ашкелоне недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Ашкелоне? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Ашкелон: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Ашкелоне",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Ашкелоне через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Ашкелоне — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Ашкелоне: новые районы, парковка и сезонность"},
            {id: "small-moves", label: "Небольшие перевозки в Ашкелоне — быстро и выгодно"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Ашкелоне"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Ашкелоне через наш портал?",
            paragraphs: [
                "Ашкелон активно растёт: новые кварталы, ремонты, аренда у моря — всё это означает регулярные переезды. При этом в часы пик могут быть пробки на выездах и сложности с парковкой у подъезда.",
                "Наш портал — агрегатор, где рекомендованные перевозчики конкурируют за ваш заказ. Вы получаете несколько предложений, сравниваете условия и выбираете оптимальный вариант по цене и сервису.",
            ],
            bulletsTitle: "Что вы получаете, заказывая через нас:",
            bullets: [
                "Сравнение цен от нескольких перевозчиков — экономия до 45%.",
                "Перевозки от 249 ₪: от одной вещи до переезда квартиры или офиса.",
                "Только рекомендованные исполнители: отбор по качеству и отзывам.",
                "Комплекс услуг: упаковка, разборка/сборка мебели, при необходимости — подъёмный кран.",
                "Гибкие варианты по времени: будни, пятница, срочные переезды по согласованию.",
                "Маршруты по городу и межгород: Ашкелон ↔ центр/юг Израиля.",
            ],
            note:
                "Важно: мы выступаем как портал-агрегатор и связываем вас с рекомендованными перевозчиками. Страхование имущества предоставляет (или не предоставляет) выбранная компания. Рекомендуем заранее уточнить наличие действующего страхового покрытия груза до начала работ.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Ашкелоне — сколько это действительно стоит?",
            intro:
                "Цена зависит от объёма вещей, этажности, лифта, доступности подъезда и сезонности (лето, конец месяца). Ниже — ориентировочные диапазоны по предложениям перевозчиков для Ашкелона.",
            tableLabel: "Прайс-лист перевозок в Ашкелоне",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Ашкелоне", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина; зависит от этажности."
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студента",
                    priceRange: "550–1 150 ₪",
                    notes: "Часто заказывают для аренды и переездов в новые районы."
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 100–1 950 ₪",
                    notes: "Цена выше, если нет лифта или сложная парковка."
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "1 950–3 200 ₪",
                    notes: "Обычно включает базовую разборку/сборку."
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 800–4 600 ₪",
                    notes: "Рекомендуется предварительная оценка объёма."
                },
                {
                    type: "Перевозка 5-комнатной квартиры / дома",
                    priceRange: "4 000–6 800 ₪",
                    notes: "Иногда требуется подъёмный кран (доплата)."
                },
                {type: "Доплата за подъёмный кран", priceRange: "300–500 ₪", notes: "Чаще всего почасовая оплата."},
            ],
            afterTable:
                "Цены указаны для ориентира. Для точного расчёта и более выгодного предложения заполните форму — перевозчики пришлют цены под ваш объём и условия.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Ашкелоне: новые районы, парковка и сезонность",
            intro:
                "В Ашкелоне переезд обычно проходит проще, чем в мегаполисе, но есть нюансы, которые важно учесть заранее:",
            items: [
                {
                    title: "Парковка у подъезда:",
                    text:
                        "в новых районах парковка часто лучше, но у некоторых домов есть ограничения для грузового транспорта. Опытные перевозчики заранее уточняют подъезд и точку разгрузки.",
                },
                {
                    title: "Сезонность у моря:",
                    text:
                        "летом и в конце месяца спрос выше. Если вам важна конкретная дата — лучше бронировать заранее.",
                },
                {
                    title: "Межгород и график дорог:",
                    text:
                        "если переезд связан с центром/югом, обсудите время выезда, чтобы избежать пробок на трассах в часы пик.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Ашкелоне — быстро и выгодно",
            intro:
                "Нужно перевезти пару предметов, технику или вещи из маленькой квартиры? Для этого удобнее «малый формат».",
            bullets: [
                "Фургоны и небольшие грузовики: дешевле и проще для небольших задач.",
                "Перевозят: технику, матрасы, диваны, комоды, коробки. Цена — от 249 ₪ за одну вещь в пределах города.",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Ашкелоне",
            intro:
                "Офисный переезд требует аккуратности и быстроты, чтобы бизнес не останавливался. Мы помогаем найти перевозчиков, которые умеют работать с офисами:",
            bullets: [
                "Упаковка техники и документов: компьютеры, мониторы, архивы.",
                "Переезд в удобное время: вечер/пятница по согласованию.",
                "Разборка и сборка: столы, шкафы, стеллажи и рабочие места.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл спокойнее, можно добавить услуги «под ключ»:",
            items: [
                {
                    title: "Профессиональная упаковка:",
                    text:
                        "бригада привезёт коробки и материалы, аккуратно упакует и промаркирует вещи.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "разберут шкафы, кровати и стеллажи и соберут на новом месте.",
                },
                {
                    title: "Упаковочные материалы:",
                    text:
                        "пузырчатая плёнка, скотч, стрейч, защитные уголки — можно заказать заранее.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Когда лучше бронировать перевозку в Ашкелоне?",
                    answer:
                        "В конце месяца и летом спрос выше — лучше бронировать за 1–2 недели. В обычные недели часто можно найти вариант за несколько дней.",
                },
                {
                    question: "Можно ли заказать перевозку одной вещи?",
                    answer:
                        "Да. Для этого часто используют фургон или небольшой грузовик. Старт — от 249 ₪ внутри города.",
                },
                {
                    question: "Что сильнее всего влияет на цену?",
                    answer:
                        "Этаж, лифт, расстояние до парковки, объём вещей, разборка/сборка и межгород. Чем точнее условия, тем точнее финальная цена.",
                },
                {
                    question: "Делаете ли вы перевозки с подъёмным краном?",
                    answer:
                        "Да, при необходимости перевозчик организует кран. Обычно это отдельная доплата (часто почасовая).",
                },
            ],
        },
        closing: {
            text:
                "Планируете переезд в Ашкелоне? Заполните форму, получите предложения от рекомендованных перевозчиков и выберите самое выгодное — без переплат.",
        },
    },
    dimonaMovePage: {
        slug: "перевозки-в-димоне",
        metaTitle: "Перевозки в Димоне недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Димоне? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Димона: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Димоне",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Димоне через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Димоне — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Димоне: жара, расстояния и подъезды"},
            {id: "small-moves", label: "Небольшие перевозки в Димоне — быстро и выгодно"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Димоне"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Димоне через наш портал?",
            paragraphs: [
                "Димона — город Негева: здесь переезды часто связаны с межгородом (в центр или обратно), а летом особенно важно планировать время из-за жары. Даже небольшой переезд будет проще, если всё заранее организовано.",
                "Наш портал — агрегатор, где рекомендованные перевозчики конкурируют за ваш заказ. Вы получаете несколько предложений, сравниваете условия и выбираете оптимальный вариант по цене и сервису.",
            ],
            bulletsTitle: "Что вы получаете, заказывая через нас:",
            bullets: [
                "Сравнение цен от нескольких перевозчиков — экономия до 45%.",
                "Перевозки от 249 ₪: от одной вещи до переезда квартиры или офиса.",
                "Только рекомендованные исполнители: отбор по качеству и отзывам.",
                "Комплекс услуг: упаковка, разборка/сборка мебели, при необходимости — подъёмный кран.",
                "Гибкие варианты по времени: будни, пятница, срочные переезды по согласованию.",
                "Местные и междугородние маршруты: Димона ↔ Беэр-Шева ↔ центр/север.",
            ],
            note:
                "Важно: мы выступаем как портал-агрегатор и связываем вас с рекомендованными перевозчиками. Страхование имущества предоставляет (или не предоставляет) выбранная компания. Рекомендуем заранее уточнить наличие действующего страхового покрытия груза до начала работ.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Димоне — сколько это действительно стоит?",
            intro:
                "Цена зависит от объёма вещей, этажности, лифта, доступности подъезда и расстояния (особенно при межгороде). Ниже — ориентировочные диапазоны по предложениям перевозчиков для Димоны.",
            tableLabel: "Прайс-лист перевозок в Димоне",
            tableHeaders: [
                "Тип перевозки",
                "Ориентировочный диапазон цен в Димоне",
                "Примечания",
            ],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина; зависит от этажности.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студента",
                    priceRange: "550–1 100 ₪",
                    notes: "Часто заказывают при переездах в Беэр-Шеву и обратно.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 100–1 900 ₪",
                    notes: "Цена выше при отсутствии лифта и долгой переноске.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "1 900–3 200 ₪",
                    notes: "Обычно включает базовую разборку/сборку.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 700–4 500 ₪",
                    notes: "Рекомендуется предварительная оценка.",
                },
                {
                    type: "Перевозка 5-комнатной квартиры / дома",
                    priceRange: "3 900–6 700 ₪",
                    notes: "Иногда нужен подъёмный кран (доплата).",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Чаще всего почасовая оплата.",
                },
            ],
            afterTable:
                "Цены указаны для ориентира. Для точного расчёта и более выгодного предложения заполните форму — перевозчики пришлют цены под ваш объём и условия.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Димоне: жара, расстояния и подъезды",
            intro:
                "Чтобы переезд прошёл без сюрпризов, учитывайте особенности Негева и заранее обсудите детали:",
            items: [
                {
                    title: "Жара и солнце:",
                    text:
                        "летом лучше начинать рано утром. Профессионалы используют защитные материалы и не держат вещи под солнцем дольше нужного.",
                },
                {
                    title: "Междугородние маршруты:",
                    text:
                        "Димона часто связана с поездками в Беэр-Шеву и в центр страны. Важно заранее согласовать километраж, остановки и точное время выезда.",
                },
                {
                    title: "Подъезды и доступ к дому:",
                    text:
                        "в некоторых домах подъезд узкий или далеко от парковки. Опытные перевозчики учитывают это в оценке времени и состава бригады.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Димоне — быстро и выгодно",
            intro:
                "Если вам нужно перевезти пару предметов или вещи из небольшой квартиры, не обязательно заказывать большую машину.",
            bullets: [
                "Фургоны и небольшие грузовики: дешевле и проще для небольших задач.",
                "Перевозят: технику, матрасы, диваны, комоды, коробки. Цена — от 249 ₪ за одну вещь в пределах города (межгород рассчитывается отдельно).",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Димоне",
            intro:
                "Для офисов важно минимизировать простой. Мы помогаем найти перевозчиков, которые умеют работать с бизнес-переездами:",
            bullets: [
                "Упаковка техники и документов: компьютеры, мониторы, архивы.",
                "Переезд в удобное время: вечер/пятница по согласованию.",
                "Разборка и сборка: столы, шкафы, стеллажи и рабочие места.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы ваш переезд прошёл спокойнее, можно добавить услуги «под ключ»:",
            items: [
                {
                    title: "Профессиональная упаковка:",
                    text:
                        "бригада привезёт коробки и материалы, аккуратно упакует и промаркирует вещи.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "разберут шкафы, кровати и стеллажи и соберут на новом месте.",
                },
                {
                    title: "Упаковочные материалы:",
                    text:
                        "пузырчатая плёнка, скотч, стрейч, защитные уголки — можно заказать заранее.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Когда лучше бронировать перевозку в Димоне?",
                    answer:
                        "Если планируется межгород или конец месяца — лучше бронировать за 1–2 недели. В обычные недели часто можно найти вариант за несколько дней.",
                },
                {
                    question: "Сколько стоит межгород из Димоны?",
                    answer:
                        "Зависит от маршрута, объёма, этажей и остановок. Укажите город назначения и детали — и перевозчики дадут точные предложения.",
                },
                {
                    question: "Можно ли заказать перевозку одной вещи?",
                    answer:
                        "Да. Для этого часто используют фургон или небольшой грузовик. Старт — от 249 ₪ внутри города.",
                },
                {
                    question: "Делаете ли вы перевозки с подъёмным краном?",
                    answer:
                        "Да, при необходимости перевозчик организует кран. Обычно это отдельная доплата (часто почасовая).",
                },
            ],
        },
        closing: {
            text:
                "Планируете переезд в Димоне? Заполните форму, получите предложения от рекомендованных перевозчиков и выберите самое выгодное — без переплат.",
        },
    },
    beerShevaMovePage: {
        slug: "перевозки-в-беэр-шеве",
        metaTitle: "Перевозки в Беэр-Шеве недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Беэр-Шеве? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Беэр-Шева: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Беэр-Шеве",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Беэр-Шеве через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Беэр-Шеве — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Беэр-Шеве: жара, парковка и расстояния"},
            {id: "small-moves", label: "Небольшие перевозки в Беэр-Шеве — решение для студентов и отдельных вещей"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Беэр-Шеве"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"}
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Беэр-Шеве через наш портал?",
            paragraphs: [
                "Беэр-Шева — столица Негева: здесь много студентов, активная аренда и частые переезды между районами. Но даже в «просторном» городе есть свои нюансы — жаркие дни, длинные подъезды, и иногда нужна точная логистика по времени.",
                "Наш портал — агрегатор, где рекомендованные перевозчики конкурируют за ваш заказ. Вы получаете несколько предложений, сравниваете условия и выбираете оптимальный вариант по цене и сервису."
            ],
            bulletsTitle: "Что вы получаете, заказывая через нас:",
            bullets: [
                "Сравнение цен от нескольких перевозчиков — экономия до 45%.",
                "Перевозки от 249 ₪: от одной вещи до переезда квартиры или офиса.",
                "Только рекомендованные исполнители: отбор по качеству и отзывам.",
                "Комплекс услуг: упаковка, разборка/сборка мебели, при необходимости — подъёмный кран.",
                "Гибкие варианты по времени: будни, пятница, срочные переезды по согласованию.",
                "Переезды по городу и междугородние маршруты: Беэр-Шева ↔ центр/север Израиля."
            ],
            note:
                "Важно: мы выступаем как портал-агрегатор и связываем вас с рекомендованными перевозчиками. Страхование имущества предоставляет (или не предоставляет) выбранная компания. Рекомендуем заранее уточнить наличие действующего страхового покрытия груза до начала работ."
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Беэр-Шеве — сколько это действительно стоит?",
            intro:
                "Цена зависит от объёма вещей, этажа, лифта, доступности подъезда и сезонности (конец месяца, лето, студенческие переезды). Ниже — ориентировочные диапазоны по предложениям перевозчиков в Беэр-Шеве.",
            tableLabel: "Прайс-лист перевозок в Беэр-Шеве",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Беэр-Шеве", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина; зависит от этажности."
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студента",
                    priceRange: "550–1 100 ₪",
                    notes: "Часто заказывают в начале/конце семестра."
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 100–1 900 ₪",
                    notes: "Цена выше при отсутствии лифта или сложном подъезде."
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "1 900–3 100 ₪",
                    notes: "Обычно включает базовую разборку/сборку."
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 700–4 400 ₪",
                    notes: "Рекомендуется предварительная оценка объёма."
                },
                {
                    type: "Перевозка 5-комнатной квартиры / дома",
                    priceRange: "3 900–6 400 ₪",
                    notes: "Иногда нужен подъёмный кран (доплата)."
                },
                {type: "Доплата за подъёмный кран", priceRange: "300–500 ₪", notes: "Чаще всего почасовая оплата."}
            ],
            afterTable:
                "Цены указаны для ориентира. Для точного расчёта и более выгодного предложения заполните форму — перевозчики пришлют цены под ваш объём и условия."
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Беэр-Шеве: жара, парковка и расстояния",
            intro:
                "Чтобы переезд прошёл без сюрпризов, важно учесть особенности города и выбрать правильную команду:",
            items: [
                {
                    title: "Жара и сухой климат:",
                    text:
                        "летом лучше планировать погрузку на раннее утро. Профессионалы приезжают вовремя, бережно упаковывают технику и не держат вещи под солнцем."
                },
                {
                    title: "Парковка у подъезда:",
                    text:
                        "в некоторых районах парковочные карманы заняты, а подъезд длинный. Опытные перевозчики подбирают подходящий размер машины и заранее согласуют точку остановки."
                },
                {
                    title: "Дистанции между районами и межгород:",
                    text:
                        "часто переезды идут «Беэр-Шева ↔ центр/север». Важно заранее обсудить время выезда, маршрут и доп. остановки, чтобы цена не выросла в процессе."
                }
            ]
        },
        smallMoves: {
            id: "small-moves",
            title:
                "Небольшие перевозки в Беэр-Шеве — решение для студентов и отдельных вещей",
            intro:
                "В Беэр-Шеве много студентов и арендаторов, поэтому «малые перевозки» — один из самых популярных запросов.",
            bullets: [
                "Фургоны и небольшие грузовики: удобно, быстро и дешевле, чем заказывать большую машину.",
                "Часто перевозят: кровати, матрасы, холодильники, стиралки, комоды, коробки и мелкую мебель. Цена — от 249 ₪ за одну вещь в пределах города."
            ]
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Беэр-Шеве",
            intro:
                "Офисный переезд требует аккуратности и чёткого плана, чтобы бизнес не «встал». Мы помогаем найти перевозчиков, которые умеют работать с офисами:",
            bullets: [
                "Упаковка техники и документов: компьютеры, мониторы, оргтехника, архивы.",
                "Переезд в удобное время: вечер/пятница по согласованию, чтобы не терять рабочие часы.",
                "Разборка и сборка: столы, стеллажи, шкафы, переговорные."
            ]
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro:
                "Чтобы переезд был максимально «безболезненным», можно добавить полезные услуги:",
            items: [
                {
                    title: "Профессиональная упаковка:",
                    text:
                        "бригада привезёт коробки и материалы, упакует вещи по комнатам и подпишет каждую коробку."
                },
                {
                    title: "Разборка и сборка мебели:",
                    text:
                        "аккуратно разберут кровати, шкафы и стеллажи и соберут на новом месте."
                },
                {
                    title: "Упаковочные материалы:",
                    text:
                        "скотч, пузырчатая плёнка, стрейч, защитные уголки — можно заказать заранее."
                }
            ]
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Когда лучше бронировать перевозку в Беэр-Шеве?",
                    answer:
                        "В конце месяца и в периоды студенческих переездов лучше бронировать за 1–2 недели. В «спокойные» недели можно найти вариант за несколько дней, иногда и день-в-день."
                },
                {
                    question: "Можно ли заказать маленькую перевозку без большой машины?",
                    answer:
                        "Да. Для одной-двух вещей часто выгоднее фургон или небольшой грузовик — это быстрее и дешевле."
                },
                {
                    question: "Что влияет на цену сильнее всего?",
                    answer:
                        "Этаж, наличие лифта, расстояние до парковки, объём вещей, разборка/сборка и межгород. Чем точнее вы опишете условия, тем честнее будет финальная цена."
                },
                {
                    question: "Делаете ли вы перевозки с подъёмным краном?",
                    answer:
                        "Да, при необходимости перевозчик организует кран. Обычно это отдельная доплата (часто почасовая)."
                }
            ]
        },
        closing: {
            text:
                "Планируете переезд в Беэр-Шеве? Заполните форму, получите предложения от рекомендованных перевозчиков и выберите самое выгодное — без переплат."
        }
    },
    tiberiasMovePage: {
        slug: "перевозки-в-тверии",
        metaTitle: "Перевозки в Тверии недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Тверии? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, аккуратная перевозка техники, подъём на этаж и при необходимости подъёмный кран.",
        title: "Тверия: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Тверии",
        tocItems: [
            {
                id: "why-us",
                label: "Почему стоит заказать перевозку в Тверии через наш портал?",
            },
            {
                id: "pricing",
                label: "Прайс-лист перевозок в Тверии — сколько это действительно стоит?",
            },
            {
                id: "challenges",
                label:
                    "Сложности перевозки в Тверии: подъёмы, парковка у набережной и узкие улицы",
            },
            {
                id: "small-moves",
                label:
                    "Небольшие перевозки в Тверии — быстрое решение для отдельных вещей",
            },
            {
                id: "office-moves",
                label: "Перевозка офисов и бизнеса в Тверии",
            },
            {
                id: "extra-services",
                label: "Дополнительные услуги: упаковка, разборка и сборка",
            },
            {
                id: "faq",
                label: "Часто задаваемые вопросы",
            },
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Тверии через наш портал?",
            paragraphs: [
                "Тверия — город на берегу Кинерета, с живописными районами, гостиницами и домами на склонах. Переезд здесь часто означает подъёмы, ограниченные парковки у набережной и необходимость аккуратно перевозить технику и мебель в жарком климате.",
                "Наш портал — это агрегатор, где рекомендованные перевозчики соревнуются за ваш заказ. Вы получаете несколько предложений, сравниваете условия и выбираете лучший вариант по цене и сервису — без лишних звонков и переплат.",
            ],
            bulletsTitle: "Что вы получаете через наш сервис:",
            bullets: [
                "Экономия до 45%: сравнение предложений помогает выбрать самое выгодное.",
                "Старт от 249 ₪: есть варианты для одной вещи и небольших перевозок.",
                "Проверенные перевозчики: работаем с исполнителями с хорошей репутацией и отзывами.",
                "Переезд «под ключ»: упаковка, разборка/сборка, подъем на этаж, вынос/занос.",
                "Гибкий график: можно подобрать удобный слот, включая раннее утро.",
                "По всей стране: перевозки из/в Тверию и между городами Израиля.",
            ],
            note:
                "Важно: мы — портал (агрегатор), который связывает вас с рекомендованными перевозчиками. Мы не предоставляем страховку самостоятельно. Ответственность за страхование груза лежит на выбранной транспортной компании. Рекомендуем заранее уточнить наличие действующего страхового полиса у перевозчика.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Тверии — сколько это действительно стоит?",
            intro:
                "Стоимость перевозки в Тверии зависит от объёма вещей, этажа, наличия лифта, доступности подъезда (особенно в районах со склонами) и сезона. Ниже — ориентиры по ценам на основе типовых предложений перевозчиков.",
            tableLabel: "Прайс-лист перевозок в Тверии",
            tableHeaders: [
                "Тип перевозки",
                "Ориентировочный диапазон цен в Тверии",
                "Примечания",
            ],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes:
                        "Холодильник, диван, стиральная машина. Цена зависит от этажа и заноса.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студии",
                    priceRange: "600–1 200 ₪",
                    notes:
                        "Подходит для арендаторов, студентов, небольших переездов по городу.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 200–2 000 ₪",
                    notes:
                        "Сильнее всего влияет этаж и доступ к подъезду (склоны/узкие улицы).",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 000–3 200 ₪",
                    notes:
                        "Часто включает базовую разборку/сборку мебели (по договорённости).",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 800–4 500 ₪",
                    notes:
                        "Рекомендуется предварительная оценка для точной стоимости.",
                },
                {
                    type: "Перевозка 5-комнатной квартиры / дома",
                    priceRange: "4 000–6 500 ₪",
                    notes:
                        "Иногда требуется подъёмный кран или дополнительные грузчики.",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes:
                        "Обычно почасовая оплата; актуально при сложном подъёме крупной мебели.",
                },
            ],
            afterTable:
                "Цены указаны для ориентира. Чтобы получить точный расчёт и более выгодную цену, заполните форму — перевозчики пришлют предложения под ваш объём и адреса.",
        },
        challenges: {
            id: "challenges",
            title:
                "Сложности перевозки в Тверии: подъёмы, парковка у набережной и узкие улицы",
            intro:
                "Тверия сочетает туристические зоны, плотные районы у воды и дома на возвышенностях. Вот что важно учесть при планировании переезда:",
            items: [
                {
                    title: "Подъёмы и доступ к подъезду:",
                    text:
                        "в некоторых районах подъезд грузовика может быть ограничен. Опытные перевозчики подбирают подходящий транспорт и планируют маршрут заранее.",
                },
                {
                    title: "Парковка у набережной и в туристических местах:",
                    text:
                        "в часы пик и в сезон бывает сложно остановиться рядом с домом. Часто помогает раннее время начала или предварительная договорённость о месте.",
                },
                {
                    title: "Жара и чувствительная техника:",
                    text:
                        "летом важно защищать электронику и хрупкие вещи. Уточните упаковку и правильную фиксацию в кузове, особенно для телевизоров и стекла.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title:
                "Небольшие перевозки в Тверии — быстрое решение для отдельных вещей",
            intro:
                "Не всегда нужен большой грузовик. Для одной-двух вещей или небольшой комнаты удобнее заказать малую перевозку — это быстрее и заметно дешевле.",
            bullets: [
                "Фургоны и небольшие грузовики: подходят для матрасов, стиральных машин, небольших диванов и коробок.",
                "Экономия времени: можно договориться на короткое окно и выполнить перевозку «в один заход».",
                "Цена часто начинается от 249 ₪ за одну вещь по городу (зависит от этажа и заноса).",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Тверии",
            intro:
                "Офисный переезд требует организации, чтобы не останавливать работу команды. Перевозчики могут помочь спланировать этапы и сделать всё аккуратно и быстро.",
            bullets: [
                "Упаковка техники и документов: компьютеры, мониторы, архивы и хрупкие предметы.",
                "Гибкое время: переезд вечером или в конце недели, чтобы не терять рабочие часы.",
                "Разборка/сборка мебели: столы, стеллажи, офисные шкафы и переговорные зоны.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro:
                "Чтобы переезд прошёл спокойно, многие перевозчики предлагают полный набор дополнительных услуг — вы выбираете только то, что нужно.",
            items: [
                {
                    title: "Профессиональная упаковка:",
                    text:
                        "команда упакует вещи в коробки, защитит хрупкое, промаркирует по комнатам и подготовит к транспортировке.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text:
                        "аккуратно разберут кровати, шкафы и стеллажи, а затем соберут на новом месте.",
                },
                {
                    title: "Упаковочные материалы:",
                    text:
                        "коробки, плёнка, скотч, защитные уголки — можно заказать заранее и не искать в последний момент.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "За сколько времени лучше заказывать перевозку в Тверии?",
                    answer:
                        "В сезон и в конце месяца лучше бронировать за 1–2 недели. В более спокойные периоды часто можно найти перевозчика за несколько дней, иногда даже на ближайшую дату.",
                },
                {
                    question: "Что сильнее всего влияет на цену переезда?",
                    answer:
                        "Объём вещей, этаж, наличие лифта, расстояние заноса от машины до входа и необходимость разборки/упаковки. В некоторых районах Тверии также влияет доступность подъезда.",
                },
                {
                    question: "Можно ли перевезти одну вещь — например холодильник?",
                    answer:
                        "Да. Для этого чаще всего подходит малая перевозка (фургон/небольшой грузовик). Цена обычно стартует от 249 ₪ и зависит от этажа и заноса.",
                },
                {
                    question: "Нужен ли подъёмный кран?",
                    answer:
                        "Если мебель не проходит в дверные проёмы/лестницы или нужен подъём на высокий этаж при сложном доступе, перевозчик может организовать подъёмный кран. Обычно это отдельная почасовая оплата.",
                },
            ],
        },
        closing: {
            text:
                "Планируете переезд в Тверии? Заполните форму, получите несколько предложений от рекомендованных перевозчиков и выберите лучший вариант по цене и условиям.",
        },
    },
    karmielMovePage: {
        slug: "перевозки-в-кармиэле",
        metaTitle: "Перевозки в Кармиэле недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Кармиэле? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, аккуратная перевозка техники и подъёмный кран при необходимости.",
        title: "Кармиэль: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Кармиэле",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Кармиэле через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Кармиэле — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Кармиэле: подъёмы, доступ к дому и парковка"},
            {id: "small-moves", label: "Небольшие перевозки в Кармиэле — быстро и без переплат"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Кармиэле"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Кармиэле через наш портал?",
            paragraphs: [
                "Кармиэль — удобный город на севере: много новых кварталов, спокойные улицы и хорошая логистика. Но переезд здесь всё равно требует точного расчёта — особенно если есть подъёмы, узкие подъезды, большой объём мебели или вы переезжаете между центром страны и Галилеей.",
                "Наш портал помогает сделать переезд проще и выгоднее: вы получаете несколько предложений от рекомендованных перевозчиков, сравниваете условия и выбираете лучшее по цене/сервису.",
            ],
            bulletsTitle: "Преимущества, которые экономят вам деньги и время:",
            bullets: [
                "Сравнение цен в одном месте: несколько предложений под вашу задачу — от 249 ₪.",
                "Экономия до 45%: конкуренция перевозчиков помогает получить честную цену.",
                "Только рекомендованные исполнители: отбор и контроль качества по отзывам клиентов.",
                "Подходит для любых задач: от одной вещи до квартир и офисов, внутри города и по всей стране.",
                "Гибкость по времени: можно подобрать удобный слот, включая срочные перевозки при наличии.",
                "Доп. услуги по запросу: упаковка, разборка/сборка, коробки, кран при необходимости.",
            ],
            note: "Важно: мы — портал-агрегатор, который связывает вас с рекомендованными транспортными компаниями. Страхование груза оформляется выбранным перевозчиком (если доступно). Рекомендуем заранее уточнить наличие действующего страхового покрытия до начала работ.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Кармиэле — сколько это действительно стоит?",
            intro:
                "Стоимость переезда в Кармиэле зависит от объёма вещей, этажности, лифта, подъезда к дому и дистанции (особенно если переезд между городами). Ниже — ориентиры по средним ценам на основе предложений перевозчиков.",
            tableLabel: "Прайс-лист перевозок в Кармиэле",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Кармиэле", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина. Цена зависит от этажа и расстояния.",
                },
                {
                    type: "Небольшая перевозка (несколько коробок/единиц мебели)",
                    priceRange: "350–800 ₪",
                    notes: "Удобно для студента, арендатора или доставки покупок.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 100–1 900 ₪",
                    notes: "Если нет лифта или сложный подъезд — цена может вырасти.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "1 900–3 100 ₪",
                    notes: "Часто включает базовую разборку/сборку мебели.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 700–4 400 ₪",
                    notes: "Рекомендуется предварительная оценка объёма.",
                },
                {
                    type: "Междугородний переезд (центр ↔ север)",
                    priceRange: "1 600–5 500 ₪",
                    notes: "Цена зависит от объёма и километража, иногда выгоднее комбинировать рейсы.",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Обычно почасовая оплата, по ситуации (балкон/окно/габарит).",
                },
            ],
            afterTable:
                "Цены указаны для ориентира. Для точного расчёта заполните форму — вы получите несколько предложений и сможете выбрать оптимальный вариант.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Кармиэле: подъёмы, доступ к дому и парковка",
            intro: "Кармиэль часто удобнее мегаполиса, но у города есть свои особенности. Вот что важно учесть при переезде:",
            items: [
                {
                    title: "Подъёмы и рельеф:",
                    text: "в некоторых районах и на подъездных улицах бывают уклоны. Перевозчики подбирают транспорт и планируют погрузку так, чтобы избежать лишних рисков и задержек.",
                },
                {
                    title: "Подъезд к дому и место для машины:",
                    text: "в новых кварталах обычно проще, но у отдельных домов въезд может быть узким или с ограничениями. Лучше заранее согласовать точку остановки и время погрузки.",
                },
                {
                    title: "Этаж/лифт и габаритная мебель:",
                    text: "если лифт маленький или мебели много, может потребоваться разборка, а иногда и подъём через окно/балкон. Это ускоряет процесс и снижает риск повреждений.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Кармиэле — быстро и без переплат",
            intro: "Нужно перевезти одну вещь, несколько коробок или мебель после покупки? Для этого не всегда нужен большой грузовик.",
            bullets: [
                "Мы подберём перевозчика с подходящим транспортом (фургон/небольшой грузовик), чтобы вы не переплачивали за лишний объём.",
                "Частые сценарии: доставка холодильника/дивана, переезд студента, вывоз вещей на хранение. Старт — от 249 ₪ в пределах города (в зависимости от этажа и расстояния).",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Кармиэле",
            intro:
                "Офисный переезд важно сделать быстро и аккуратно, чтобы не останавливать работу. Перевозчики могут организовать переезд «под ключ», включая:",
            bullets: [
                "Упаковка техники и документов: аккуратно, с маркировкой и защитой.",
                "Переезд в удобное время: вечер/утро, чтобы минимизировать простой.",
                "Разборка и сборка: столы, шкафы, стеллажи, рабочие станции.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл спокойно, можно добавить услуги, которые экономят вам время и нервы:",
            items: [
                {
                    title: "Профессиональная упаковка:",
                    text: "команда упакует хрупкие вещи, одежду, кухню и технику, промаркирует коробки по комнатам.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "шкафы, кровати, стеллажи — аккуратно разберут и соберут на новом месте.",
                },
                {
                    title: "Коробки и материалы:",
                    text: "скотч, пузырчатая плёнка, коробки разных размеров — можно заказать заранее.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Когда лучше бронировать перевозку в Кармиэле?",
                    answer:
                        "Если переезд планируется на конец месяца или летний сезон — лучше за 1–2 недели. В более спокойные периоды часто можно найти варианты за несколько дней.",
                },
                {
                    question: "Можно ли заказать перевозку из Кармиэля в центр страны (или наоборот)?",
                    answer:
                        "Да. Укажите города и объём — система покажет предложения для междугородней перевозки, иногда с выгодными вариантами по маршруту.",
                },
                {
                    question: "Что влияет на цену больше всего?",
                    answer:
                        "Объём вещей, этаж/лифт, расстояние, необходимость разборки мебели, а также доступ к дому и время (пиковые дни дороже).",
                },
                {
                    question: "Нужен ли подъёмный кран в Кармиэле?",
                    answer:
                        "Иногда — да: высокий этаж, маленький лифт или крупная мебель. Перевозчик оценит ситуацию и при необходимости организует кран с почасовой оплатой.",
                },
            ],
        },
        closing: {
            text: "Планируете переезд в Кармиэле? Заполните форму, получите несколько предложений от рекомендованных перевозчиков и выберите самое выгодное по цене и условиям.",
        },
    },
    nazarethMovePage: {
        slug: "перевозки-в-назарете",
        metaTitle: "Перевозки в Назарете недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Назарете? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Назарет: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Назарете",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Назарете через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Назарете — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Назарете: узкие улицы, подъёмы и парковка"},
            {id: "small-moves", label: "Небольшие перевозки в Назарете — быстро и недорого"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Назарете"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Назарете через наш портал?",
            paragraphs: [
                "Назарет — город с холмами, плотной застройкой и районами, где не всегда удобно подъехать большой машиной. Переезд тут часто требует правильного транспорта, опытных грузчиков и чёткого тайминга.",
                "Наш портал — это агрегатор: вы оставляете заявку, а рекомендованные перевозчики конкурируют за ваш заказ. Вы сравниваете предложения, выбираете лучшее по цене и условиям — и экономите время и деньги.",
            ],
            bulletsTitle: "Что вы получаете через наш сервис:",
            bullets: [
                "Цены от 249 ₪: выгодные предложения на небольшие перевозки и переезды.",
                "Экономия до 45%: сравнение нескольких предложений вместо случайного выбора «по телефону».",
                "Проверенные перевозчики: работаем с исполнителями, которые прошли отбор и получают хорошие отзывы.",
                "Услуги под ключ: упаковка, разборка/сборка мебели, аккуратная погрузка и разгрузка.",
                "Подходящий транспорт: от фургона для одной вещи до грузовика под квартиру/офис.",
                "Переезды по всему Израилю: из Назарета, в Назарет и между любыми городами.",
            ],
            note: "Важно: мы — портал (агрегатор), который связывает вас с рекомендованными транспортными компаниями. Страхование не предоставляем напрямую. Ответственность за страхование груза лежит на выбранном перевозчике — уточните наличие действующего полиса до начала работ.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Назарете — сколько это действительно стоит?",
            intro:
                "Стоимость зависит от объёма вещей, этажности, наличия лифта, удобства подъезда и сезона. Ниже — ориентиры по средним ценам на основе предложений рекомендованных перевозчиков.",
            tableLabel: "Прайс-лист перевозок в Назарете",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Назарете", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина, шкаф. Цена зависит от этажности и доступа.",
                },
                {
                    type: "Небольшая перевозка (до 10 коробок)",
                    priceRange: "350–700 ₪",
                    notes: "Фургон + грузчик/два грузчика по необходимости.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студента",
                    priceRange: "650–1 300 ₪",
                    notes: "Часто выбирают при аренде и переездах внутри города.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 200–2 200 ₪",
                    notes: "Цена выше, если подъезд сложный или нет лифта.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 000–3 400 ₪",
                    notes: "Обычно включает базовую разборку/сборку мебели.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 900–4 800 ₪",
                    notes: "Рекомендуется предварительная оценка по фото/видео.",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Обычно почасовая оплата, зависит от условий на объекте.",
                },
            ],
            afterTable:
                "Цены указаны для ориентира. Для точного расчёта и более выгодного предложения заполните заявку — вы получите несколько вариантов и сможете выбрать лучший.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Назарете: узкие улицы, подъёмы и парковка",
            intro: "В Назарете есть особенности, которые важно учитывать при планировании переезда. Вот главные моменты и решения:",
            items: [
                {
                    title: "Узкие улицы и плотная застройка:",
                    text: "в некоторых районах удобнее использовать фургон или небольшой грузовик. Опытные перевозчики подбирают транспорт под подъезд и объём вещей.",
                },
                {
                    title: "Подъёмы и лестницы:",
                    text: "холмистый рельеф и дома без лифта могут увеличить время работ. Помогает грамотная упаковка, командная работа грузчиков и план погрузки.",
                },
                {
                    title: "Парковка и туристические зоны:",
                    text: "в часы пик и рядом с популярными местами может быть сложно остановиться. Лучше выбирать утренние часы и заранее продумать место для машины.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Назарете — быстро и недорого",
            intro:
                "Если нужно перевезти пару предметов, технику или вещи из комнаты — нет смысла заказывать большой грузовик. Для Назарета это особенно актуально из-за узких улиц.",
            bullets: [
                "Фургоны и небольшие грузовики: удобно подъезжают и часто обходятся дешевле.",
                "Популярные задачи: холодильник, диван, кровать, стиральная машина, коробки, детская мебель.",
                "Цена обычно стартует от 249 ₪ за одну вещь в пределах города (зависит от этажности и доступа).",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Назарете",
            intro:
                "Переезд бизнеса важен тем, что нельзя «выпасть» из работы надолго. Мы помогаем организовать переезд офиса, магазина или небольшого склада с понятным планом и сроками:",
            bullets: [
                "Аккуратная упаковка техники и документов: компьютеры, принтеры, витрины, стеллажи.",
                "Гибкое время: переезд вечером/в конце недели, чтобы быстрее вернуться к работе.",
                "Разборка/сборка и расстановка: рабочие столы, шкафы, стойки, торговое оборудование.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл спокойно, перевозчики могут взять на себя подготовку и «сложные» задачи:",
            items: [
                {
                    title: "Упаковка вещей:",
                    text: "команда упакует имущество в коробки, защитит хрупкие предметы, промаркирует коробки по комнатам.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "шкафы, кровати, столы аккуратно разбирают и собирают на новом месте — это экономит время и снижает риск повреждений.",
                },
                {
                    title: "Материалы и коробки:",
                    text: "можно заказать коробки, стрейч-плёнку, пузырчатую плёнку и скотч — всё привезут заранее или в день переезда.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Когда лучше заказывать перевозку в Назарете?",
                    answer:
                        "Если планируете переезд в «горячие» даты (конец месяца, лето), лучше бронировать за 1–2 недели. В спокойный сезон часто можно найти варианты за несколько дней.",
                },
                {
                    question: "Можно ли перевезти одну вещь или несколько коробок?",
                    answer:
                        "Да. Это частый запрос: выбирают фургон или небольшой грузовик — обычно так дешевле и удобнее для узких улиц.",
                },
                {
                    question: "Что влияет на цену больше всего?",
                    answer:
                        "Этаж, наличие лифта, расстояние, объём вещей, удобство подъезда к дому и необходимость разборки/сборки мебели.",
                },
                {
                    question: "Нужен ли подъёмный кран?",
                    answer:
                        "Иногда да — если мебель не проходит в дверь/лифт или высокий этаж. Перевозчик оценивает по фото/видео и предлагает оптимальный вариант.",
                },
            ],
        },
        closing: {
            text: "Планируете переезд в Назарете? Заполните форму, получите несколько предложений от рекомендованных перевозчиков и выберите самое выгодное.",
        },
    },
    akkoMovePage: {
        slug: "перевозки-в-акко",
        metaTitle: "Перевозки в Акко недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Акко (Acre)? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Акко: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Акко",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Акко через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Акко — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Акко: Старый город, узкие улицы и парковка"},
            {id: "small-moves", label: "Небольшие перевозки в Акко — когда нужно перевезти пару вещей"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Акко"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Акко через наш портал?",
            paragraphs: [
                "Акко — красивый прибрежный город с историческим центром и смешанной застройкой: от старых каменных домов в районе Старого города до современных кварталов. Переезд здесь часто усложняют узкие улицы, туристический трафик и ограничения на подъезд крупного транспорта.",
                "Наш портал — это агрегатор перевозчиков: вы оставляете заявку, а рекомендованные компании предлагают цены и условия. Вы сравниваете предложения и выбираете лучшее — по цене, срокам и сервису.",
            ],
            bulletsTitle: "Преимущества, которые экономят вам деньги и время:",
            bullets: [
                "Перевозки от 249 ₪: честные конкурентные цены.",
                "Экономия до 45%: сравнивайте предложения и не переплачивайте.",
                "Рекомендованные перевозчики: работаем с компаниями, прошедшими отбор и проверку.",
                "Услуги «под ключ»: упаковка, разборка/сборка, коробки, при необходимости — подъёмный кран.",
                "Гибкость по времени: можно найти варианты «день-в-день» (в зависимости от загрузки).",
                "По всему Израилю: переезды внутри Акко, в Акко и из Акко — в любые города.",
            ],
            note: "Важно: мы — портал-агрегатор и связываем вас с рекомендованными перевозчиками. Страхование груза предоставляет выбранная компания (если у неё есть действующий полис). Перед началом работ уточните условия ответственности и страховки у перевозчика.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Акко — сколько это действительно стоит?",
            intro: "Стоимость переезда в Акко зависит от объёма вещей, этажа, наличия лифта, возможности подъезда к дому и необходимости подъёмного крана. Ниже — ориентиры по средним предложениям перевозчиков, чтобы было проще планировать бюджет.",
            tableLabel: "Прайс-лист перевозок в Акко",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Акко", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина. Цена зависит от этажа и доступа."
                },
                {
                    type: "Небольшая перевозка (несколько коробок)",
                    priceRange: "350–650 ₪",
                    notes: "Подходит для студентов и небольших переездов."
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студии",
                    priceRange: "650–1 250 ₪",
                    notes: "Быстро и выгодно, если есть нормальный подъезд."
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 200–2 100 ₪",
                    notes: "Без лифта/с узким подъездом может потребоваться доплата."
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 000–3 300 ₪",
                    notes: "Часто включает базовую разборку/сборку мебели."
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 900–4 700 ₪",
                    notes: "Рекомендуется предварительная оценка объёма."
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Обычно почасовая оплата, зависит от сложности."
                },
            ],
            afterTable: "Цены приведены для ориентира. Чтобы получить точный расчёт и лучшее предложение, заполните форму на сайте — перевозчики пришлют варианты под ваш переезд.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Акко: Старый город, узкие улицы и парковка",
            intro: "Акко может быть очень удобным для жизни, но для переезда важно учесть нюансы города. Вот основные сложности и как профессиональные перевозчики решают их:",
            items: [
                {
                    title: "Узкие улицы и ограничения подъезда:",
                    text: "в Старом городе и в некоторых кварталах крупной машине сложно подъехать. Перевозчики подбирают транспорт подходящего размера и планируют маршрут заранее."
                },
                {
                    title: "Парковка и туристический трафик:",
                    text: "в часы пик и в сезон бывает сложно остановиться рядом с подъездом. Лучше планировать переезд на раннее утро и заранее «держать» место для разгрузки."
                },
                {
                    title: "Старые дома и узкие пролёты:",
                    text: "в некоторых зданиях мебель не проходит по лестнице. Тогда помогает подъёмный кран или аккуратная разборка крупной мебели."
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Акко — когда нужно перевезти пару вещей",
            intro: "Если нужно перевезти холодильник, кровать, пару коробок или вещи из съёмной квартиры — большая машина не всегда нужна. Для Акко особенно удобны фургоны и небольшие грузовики.",
            bullets: [
                "Экономия: малый транспорт обычно дешевле и быстрее по городу.",
                "Что перевозят: техника, диваны, кровати, шкафы, коробки и личные вещи — от 249 ₪ за одну вещь по городу.",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Акко",
            intro: "Переезд бизнеса важен тем, что нельзя «остановить работу» надолго. Перевозчики, работающие через наш портал, помогают организовать офисный переезд аккуратно и в удобное время:",
            bullets: [
                "Упаковка техники и документов: компьютеры, мониторы, архивы — с маркировкой и защитой.",
                "Гибкий график: вечерние часы или пятница — чтобы сократить простой.",
                "Разборка/сборка мебели: столы, шкафы, стеллажи, перегородки.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл спокойно, можно добавить услуги, которые реально экономят время и снижают риски повреждений:",
            items: [
                {
                    title: "Профессиональная упаковка:",
                    text: "бригада упакует вещи в коробки, защитит хрупкое и промаркирует по комнатам."
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "аккуратная разборка шкафов/кроватей и сборка на новом месте — особенно полезно в домах с узкими проходами."
                },
                {
                    title: "Коробки и материалы:",
                    text: "скотч, стрейч, пузырчатая плёнка и коробки — можно заказать заранее вместе с переездом."
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Когда лучше заказывать перевозку в Акко?",
                    answer: "В конце месяца и летом лучше бронировать за 1–2 недели. В более спокойные периоды часто находятся варианты за несколько дней, иногда и «день-в-день»."
                },
                {
                    question: "Нужен ли подъёмный кран в Акко?",
                    answer: "Если мебель не проходит по лестнице/в лифт или подъезд неудобный, кран может сэкономить время и снизить риск повреждений. Стоимость обычно почасовая."
                },
                {
                    question: "Можно ли перевезти только одну вещь?",
                    answer: "Да, многие перевозчики выполняют перевозку одной вещи или нескольких коробок. Часто это самый быстрый вариант для локальных перевозок по городу."
                },
                {
                    question: "Как понять итоговую цену?",
                    answer: "Цена зависит от этажности, лифта, доступа к подъезду, объёма вещей и дополнительных услуг. Заполните заявку — вы получите несколько точных предложений и выберете лучшее."
                },
            ],
        },
        closing: {
            text: "Планируете переезд в Акко? Заполните форму, получите предложения от рекомендованных перевозчиков и выберите самый выгодный вариант — без переплат и лишнего стресса.",
        },
    },
    maaleAdumimMovePage: {
        slug: "перевозки-в-маале-адумим",
        metaTitle: "Перевозки в Маале-Адумим недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Маале-Адумим? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Маале-Адумим: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Маале-Адумим",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Маале-Адумим через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Маале-Адумим — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Маале-Адумим: подъезды, парковка и логистика"},
            {id: "small-moves", label: "Небольшие перевозки в Маале-Адумим — быстро и выгодно"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Маале-Адумим"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Маале-Адумим через наш портал?",
            paragraphs: [
                "Маале-Адумим — город с активной застройкой и семейными районами. Переезд здесь часто включает работу с подъездами, парковкой у дома и аккуратной перевозкой мебели по узким проездам во дворах.",
                "Наш портал — агрегатор, где рекомендованные перевозчики конкурируют за ваш заказ. Вы получаете несколько предложений, сравниваете условия и выбираете оптимальный вариант по цене и сервису.",
            ],
            bulletsTitle: "Преимущества, которые экономят вам деньги и время:",
            bullets: [
                "Сравнение цен в одном месте: получите несколько предложений и выберите лучшее.",
                "Экономия до 45%: конкуренция перевозчиков снижает итоговую стоимость.",
                "Проверенные исполнители: работаем только с рекомендованными перевозчиками.",
                "Все услуги под ключ: упаковка, разборка/сборка, вынос/занос, кран при необходимости.",
                "Гибкие форматы: от перевозки одной вещи до полного переезда квартиры или офиса.",
            ],
            note: "Обратите внимание: мы выступаем как портал (сайт-агрегатор), который связывает вас с рекомендованными транспортными компаниями. Мы не предоставляем страховку самостоятельно. Ответственность за страхование имущества лежит на выбранном перевозчике. Перед началом работ уточните наличие действующего страхования груза.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Маале-Адумим — сколько это действительно стоит?",
            intro:
                "Стоимость переезда зависит от объёма вещей, этажа, наличия лифта, расстояния и сложности подъезда к дому. Ниже — ориентиры по средним ценам по предложениям перевозчиков.",
            tableLabel: "Прайс-лист перевозок в Маале-Адумим",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Маале-Адумим", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина. Цена зависит от этажности и заноса.",
                },
                {
                    type: "Небольшая перевозка (до 10 коробок)",
                    priceRange: "350–650 ₪",
                    notes: "Подойдёт для студентов и точечных перевозок.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студии",
                    priceRange: "650–1 300 ₪",
                    notes: "Итог зависит от лифта и расстояния до парковки.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 200–2 200 ₪",
                    notes: "Чаще всего требуется разборка базовой мебели.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 000–3 400 ₪",
                    notes: "Рекомендуется предварительный список вещей для точной оценки.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 900–4 800 ₪",
                    notes: "Возможна доплата за сложный подъезд/дальний занос.",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Обычно стоимость за час, по необходимости.",
                },
            ],
            afterTable:
                "Цены в таблице приведены для ориентира. Для точного расчёта и более выгодного предложения заполните форму — перевозчики рассчитают стоимость под ваш объём и адрес.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Маале-Адумим: подъезды, парковка и логистика",
            intro: "Чтобы переезд прошёл без сюрпризов, важно учитывать особенности района и дома. Вот ключевые моменты:",
            items: [
                {
                    title: "Подъезд к дому и «дальний занос»:",
                    text: "в некоторых дворах и на внутренних улицах парковка у подъезда ограничена. Попросите перевозчика заранее оценить расстояние до входа — это влияет на цену и время.",
                },
                {
                    title: "Этажность и лифт:",
                    text: "если лифт маленький или его нет, время работ увеличивается. Для крупной мебели иногда выгоднее использовать подъёмный кран.",
                },
                {
                    title: "Маршрут и время выезда:",
                    text: "планируйте переезд на утро, чтобы избежать лишних задержек и быстрее завершить разгрузку.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Маале-Адумим — быстро и выгодно",
            intro: "Не всегда нужен большой грузовик: часто достаточно фургона, чтобы перевезти 1–2 вещи или несколько коробок.",
            bullets: [
                "Оптимально для: техники, дивана, кровати, нескольких коробок, вещей из кладовки.",
                "Цена обычно начинается от 249 ₪ за одну вещь в пределах города (зависит от этажей и заноса).",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Маале-Адумим",
            intro:
                "Офисный переезд требует аккуратности и скорости, чтобы минимально останавливать работу команды. Мы помогаем найти перевозчика, который умеет работать с корпоративными задачами:",
            bullets: [
                "Упаковка техники и документов: компьютеры, мониторы, архивы и оргтехника.",
                "Переезд в удобное время: вечером/в конце недели — по согласованию.",
                "Разборка/сборка мебели: столы, тумбы, стеллажи, переговорные.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл проще, можно добавить нужные услуги к заказу:",
            items: [
                {
                    title: "Профессиональная упаковка:",
                    text: "перевозчик привезёт материалы, аккуратно упакует хрупкие вещи и промаркирует коробки по комнатам.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "шкафы, кровати, столы — безопасная разборка и сборка на новом месте.",
                },
                {
                    title: "Подъёмный кран:",
                    text: "если мебель не проходит по лестнице/в лифт, кран ускоряет работу и снижает риск повреждений.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "За сколько времени нужно заказывать перевозку в Маале-Адумим?",
                    answer:
                        "В пиковые периоды (лето, конец месяца) лучше бронировать за 1–2 недели. В спокойные недели часто можно найти свободные варианты за несколько дней.",
                },
                {
                    question: "Сколько стоит перевозка одной вещи?",
                    answer: "Обычно от 249 ₪, но итог зависит от этажей, лифта и того, насколько близко можно подъехать к входу.",
                },
                {
                    question: "Нужно ли заказывать подъёмный кран заранее?",
                    answer:
                        "Если есть риск, что мебель не пройдёт в лифт/по лестнице — лучше обсудить заранее. Перевозчик подскажет, нужен ли кран, и рассчитает доплату.",
                },
                {
                    question: "Вы даёте гарантию или страховку?",
                    answer:
                        "Мы — портал-агрегатор и подбираем рекомендованных перевозчиков. Условия ответственности и страхования уточняются у выбранного исполнителя до начала работ.",
                },
            ],
        },
        closing: {
            text: "Планируете переезд в Маале-Адумим? Заполните форму, получите несколько предложений от рекомендованных перевозчиков и выберите самое выгодное по цене и условиям.",
        },
    },
    mevaseretZionMovePage: {
        slug: "перевозки-в-мевасерет-цион",
        metaTitle: "Перевозки в Мевасерет-Цион недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Мевасерет-Цион? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, частные дома и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Мевасерет-Цион: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Мевасерет-Цион",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Мевасерет-Цион через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Мевасерет-Цион — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Мевасерет-Цион: подъёмы, парковка и доступ к дому"},
            {id: "small-moves", label: "Небольшие перевозки в Мевасерет-Цион — доставка отдельных вещей и коробок"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Мевасерет-Цион"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Мевасерет-Цион через наш портал?",
            paragraphs: [
                "Мевасерет-Цион — уютный город в Иерусалимских горах. Здесь часто переезжают в квартиры и частные дома, но из-за подъёмов, извилистых улиц и плотных жилых кварталов перевозку лучше планировать заранее.",
                "Наш портал — это агрегатор, где рекомендованные перевозчики конкурируют за ваш заказ. Вы получаете несколько предложений, сравниваете условия и выбираете лучшее — без лишних звонков и переплат.",
            ],
            bulletsTitle: "Что вы получаете через наш сервис:",
            bullets: [
                "Экономия до 45%: сравнение предложений помогает снизить стоимость переезда.",
                "Старт от 249 ₪: можно найти решение даже для одной вещи или небольшого объёма.",
                "Рекомендованные перевозчики: мы подключаем только тех, кто прошёл отбор и получил хорошие отзывы.",
                "Подходящий транспорт: от небольших фургонов до грузовиков для дома/квартиры.",
                "Полный пакет услуг: упаковка, разборка/сборка мебели, вынос/занос, при необходимости — кран.",
                "Удобно для переездов с/в Иерусалим: часто нужны точные тайминги — наши перевозчики умеют работать по графику.",
            ],
            note: "Важно: мы выступаем как портал (агрегатор), который связывает вас с рекомендованными перевозчиками. Страхование груза оформляет выбранная транспортная компания. Перед началом работ уточните наличие действующего страхового покрытия.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Мевасерет-Цион — сколько это действительно стоит?",
            intro:
                "Цена переезда зависит от объёма вещей, этажа, наличия лифта, расстояния до места парковки и необходимости разборки мебели. Ниже — ориентиры по средним ценам по предложениям перевозчиков.",
            tableLabel: "Прайс-лист перевозок в Мевасерет-Цион",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Мевасерет-Цион", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина. Цена зависит от этажа и доступа.",
                },
                {
                    type: "Небольшая перевозка (до 10–15 коробок)",
                    priceRange: "350–750 ₪",
                    notes: "Подходит для доставки из/в Иерусалим и соседние районы.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студия",
                    priceRange: "700–1 400 ₪",
                    notes: "Часто достаточно небольшой машины и 2 грузчиков.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 300–2 200 ₪",
                    notes: "Стоимость может вырасти при далёкой парковке или без лифта.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 200–3 500 ₪",
                    notes: "Обычно включает базовую разборку/сборку мебели.",
                },
                {
                    type: "Перевозка 4–5 комнат / частный дом",
                    priceRange: "3 500–6 800 ₪",
                    notes: "Рекомендуется предварительный осмотр для точной сметы.",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–600 ₪",
                    notes: "Чаще нужно при крупной мебели/узких лестницах (оплата по часу).",
                },
            ],
            afterTable:
                "Цены указаны для ориентира. Для точного расчёта и лучшей цены заполните форму — вы получите несколько предложений.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Мевасерет-Цион: подъёмы, парковка и доступ к дому",
            intro:
                "Горный рельеф и жилые кварталы накладывают свои особенности. Вот частые ситуации и как их решают профессиональные перевозчики:",
            items: [
                {
                    title: "Подъёмы и узкие улицы:",
                    text: "часть районов расположена на склонах, а улицы могут быть извилистыми. Важно подобрать правильный размер машины и заранее продумать маршрут подъезда.",
                },
                {
                    title: "Парковка рядом с домом:",
                    text: "в некоторых местах сложно остановить грузовик прямо у подъезда/ворот. Рекомендуем заранее «держать место» и сообщить перевозчику, если придётся носить вещи дальше обычного.",
                },
                {
                    title: "Частные дома и лестницы:",
                    text: "при переезде в дом часто требуется больше времени на вынос/занос, а иногда — кран для крупной мебели через окно/балкон.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Мевасерет-Цион — доставка отдельных вещей и коробок",
            intro:
                "Не всегда нужен большой переезд: иногда важно быстро и аккуратно перевезти 1–2 предмета или несколько коробок.",
            bullets: [
                "Фургоны и небольшие грузовики: удобно для доставки мебели, техники или коробок по городу и в Иерусалим.",
                "Что чаще всего перевозят: диваны, кровати, шкафы, стиральные машины, холодильники, рабочие столы и коробки. Стоимость — от 249 ₪ в зависимости от доступа и этажности.",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Мевасерет-Цион",
            intro:
                "Офисный переезд — это скорость и порядок, чтобы команда могла быстро вернуться к работе. Перевозчики по запросу помогают с:",
            bullets: [
                "Упаковкой техники и документов: компьютеры, мониторы, периферия, архивы.",
                "Перевозкой по удобному графику: утром/вечером или в дни с меньшей нагрузкой.",
                "Разборкой и сборкой мебели: столы, стеллажи, шкафы, переговорные.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл спокойно, можно добавить полезные услуги от перевозчика:",
            items: [
                {
                    title: "Профессиональная упаковка:",
                    text: "команда упакует вещи в коробки, защитит хрупкое плёнкой/картоном и промаркирует по комнатам.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "аккуратно разберут шкафы/кровати и соберут на новом месте, чтобы ничего не шаталось и не скрипело.",
                },
                {
                    title: "Поставка материалов:",
                    text: "коробки, скотч, пузырчатая плёнка — можно заказать заранее и не искать в последний момент.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Когда лучше бронировать перевозку в Мевасерет-Цион?",
                    answer:
                        "Если переезд планируется на конец месяца или в сезон отпусков, лучше бронировать за 1–2 недели. В спокойные периоды часто можно найти дату за несколько дней.",
                },
                {
                    question: "Нужно ли предупреждать про подъёмы/далёкую парковку?",
                    answer:
                        "Да, это важно для точной цены. Сообщите, если парковка будет не у входа или если есть крутой подъём/лестницы — перевозчик подберёт людей и транспорт.",
                },
                {
                    question: "Можно ли заказать перевозку «одной вещи»?",
                    answer:
                        "Да. Это популярный формат: перевезти диван, холодильник или стиральную машину. Стоимость обычно стартует от 249 ₪.",
                },
                {
                    question: "Доступен ли подъёмный кран?",
                    answer: "Да, при необходимости перевозчик организует кран. Обычно оплачивается отдельно по времени работы.",
                },
            ],
        },
        closing: {
            text: "Планируете переезд в Мевасерет-Цион? Заполните форму, получите предложения от рекомендованных перевозчиков и выберите самое выгодное.",
        },
    },
    beitShemeshMovePage: {
        slug: "перевозки-в-бейт-шемеше",
        metaTitle: "Перевозки в Бейт-Шемеше недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Бейт-Шемеше? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Бейт-Шемеш: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Бейт-Шемеше",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Бейт-Шемеше через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Бейт-Шемеше — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Бейт-Шемеше: подъёмы, парковка и доступ"},
            {id: "small-moves", label: "Небольшие перевозки в Бейт-Шемеше — быстро и без переплат"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Бейт-Шемеше"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Бейт-Шемеше через наш портал?",
            paragraphs: [
                "Бейт-Шемеш активно растёт: новые районы, переезды внутри города и между Бейт-Шемешем, Иерусалимом и центром страны — обычное дело. Но на практике переезд здесь может быть непростым: холмы и крутые подъёмы, разный тип застройки, ограничения по парковке и времени разгрузки.",
                "Наш портал — это агрегатор перевозчиков: вы оставляете заявку один раз, а рекомендованные компании присылают предложения. Вы сравниваете цену, условия и выбираете лучший вариант — часто дешевле рынка и без лишних звонков.",
            ],
            bulletsTitle: "Что вы получаете, заказывая через нас:",
            bullets: [
                "Цены от 249 ₪: предложения от перевозчиков под ваш бюджет и объём.",
                "Экономия до 45%: за счёт конкуренции предложений в системе.",
                "Рекомендованные исполнители: мы отбираем перевозчиков по отзывам и качеству сервиса.",
                "Под ваш сценарий: квартира, дом, небольшой переезд, офис — найдём подходящую машину и команду.",
                "Гибкость по времени: можно подобрать раннее утро/вечер, чтобы избежать пробок и проблем с доступом.",
                "Допуслуги «в одном месте»: упаковка, разборка/сборка, вынос крупной техники, кран при необходимости.",
            ],
            note: "Важно: мы — портал-агрегатор и соединяем вас с перевозчиками. Страхование груза оформляет выбранная компания. Перед началом работ уточните наличие действующего страхового полиса у исполнителя.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Бейт-Шемеше — сколько это действительно стоит?",
            intro:
                "Цена переезда зависит от этажа, лифта, расстояния парковки до подъезда и того, нужно ли поднимать вещи по лестнице/через балкон. Ниже — ориентиры по средним предложениям перевозчиков в Бейт-Шемеше.",
            tableLabel: "Прайс-лист перевозок в Бейт-Шемеше",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Бейт-Шемеше", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина. Влияет этаж и доступ.",
                },
                {
                    type: "Небольшая перевозка (несколько коробок)",
                    priceRange: "350–650 ₪",
                    notes: "Подходит для студентов/съёмных квартир.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студии",
                    priceRange: "650–1 300 ₪",
                    notes: "Цена зависит от лифта и парковки рядом с домом.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 200–2 100 ₪",
                    notes: "Если дом на подъёме, время погрузки может быть больше.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 000–3 300 ₪",
                    notes: "Часто включает базовую разборку/сборку мебели.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 900–4 700 ₪",
                    notes: "Рекомендуется предварительный осмотр для точной оценки.",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–550 ₪",
                    notes: "Обычно оплата за час; зависит от доступа к месту установки.",
                },
            ],
            afterTable:
                "Цены — ориентировочные. Для точного расчёта (и часто более выгодного) заполните форму и получите несколько предложений.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Бейт-Шемеше: подъёмы, парковка и доступ",
            intro:
                "В городе есть районы с плотной застройкой и районы с новыми домами. Вот что чаще всего влияет на стоимость и организацию переезда:",
            items: [
                {
                    title: "Подъёмы и узкие улицы:",
                    text: "в некоторых кварталах грузовику сложно развернуться или остановиться рядом с подъездом. Опытные перевозчики подбирают подходящий размер машины и планируют маршрут заранее.",
                },
                {
                    title: "Парковка и дистанция до подъезда:",
                    text: "когда нет места у входа, грузчикам приходится носить вещи дальше — это добавляет время. Хороший лайфхак: «зарезервировать» место личным авто заранее.",
                },
                {
                    title: "Лифты и проходы:",
                    text: "в новых домах лифты есть, но иногда мебель не проходит по габаритам. Тогда применяют частичную разборку или подъём через окно/балкон (при необходимости — кран).",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Бейт-Шемеше — быстро и без переплат",
            intro:
                "Не всегда нужен большой грузовик. Для перевозки одной вещи или нескольких коробок выгоднее взять фургон или небольшой грузовик.",
            bullets: [
                "Подберём перевозчика под малый объём: фургон/пикап/малый грузовик — дешевле и быстрее по времени.",
                "Частые кейсы: диван, кровать, холодильник, стиральная машина, коробки после ремонта. Цена — от 249 ₪ в пределах города.",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Бейт-Шемеше",
            intro:
                "Если вы перевозите офис, магазин или небольшой склад, важно минимально «останавливать» работу. Рекомендованные перевозчики помогают с организацией:",
            bullets: [
                "Маркировка и упаковка техники: компьютеры, периферия, документы — аккуратно и безопасно.",
                "Гибкое время: можно перенести переезд на вечер/пятницу, чтобы меньше влиять на рабочий день.",
                "Разборка/сборка: столы, стеллажи, шкафы, стойки — под ключ.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro:
                "Чтобы переезд прошёл спокойно, можно добавить услуги, которые экономят время и уменьшают риск повреждений:",
            items: [
                {
                    title: "Упаковка и защита вещей:",
                    text: "коробки, плёнка, скотч, защита мебели и техники. Команда может упаковать всё в день переезда или накануне.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "шкафы, кровати, столы — аккуратно разбирают, перевозят и собирают на новом месте.",
                },
                {
                    title: "Подъёмный кран (по необходимости):",
                    text: "если крупная мебель не проходит в дверь/лифт или высокий этаж — кран экономит время и снижает риски.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Когда лучше заказывать перевозку в Бейт-Шемеше?",
                    answer:
                        "В конце месяца и летом спрос выше — лучше бронировать за 1–2 недели. В остальные периоды часто можно найти дату за несколько дней. Если нужно срочно — попробуйте заявку «день-в-день».",
                },
                {
                    question: "Нужен ли кран?",
                    answer:
                        "Кран нужен, если мебель не проходит по лестнице/в лифт или этаж высокий. Окончательно решают после замера проходов и оценки доступа к месту установки крана.",
                },
                {
                    question: "Что сильнее всего влияет на цену?",
                    answer:
                        "Этаж, наличие лифта, расстояние от парковки до входа, объём вещей, необходимость разборки/упаковки и сложность доступа (подъёмы, узкие улицы).",
                },
                {
                    question: "Вы даёте страховку?",
                    answer:
                        "Мы — агрегатор. Страхование оформляет выбранная транспортная компания. Перед началом работ уточните у перевозчика условия и наличие полиса.",
                },
            ],
        },
        closing: {
            text: "Планируете переезд в Бейт-Шемеше? Заполните заявку, получите несколько предложений от рекомендованных перевозчиков и выберите самое выгодное по цене и условиям.",
        },
    },
    modiinMovePage: {
        slug: "перевозки-в-моодиине",
        metaTitle: "Перевозки в Модиине недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Модиине (Modiin-Maccabim-Reut)? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, дома и офисы — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Модиин: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Модиине",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Модиине через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Модиине — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Модиине: доступ в дома, лифты и парковка"},
            {id: "small-moves", label: "Небольшие перевозки в Модиине — быстро и без переплат"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Модиине"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Модиине через наш портал?",
            paragraphs: [
                "Модиин — комфортный и современный город, но переезд здесь тоже требует организации: согласование въезда в жилые комплексы, работа с лифтами, аккуратная перевозка мебели в новые квартиры и дома.",
                "Наш портал — это агрегатор, где рекомендованные перевозчики конкурируют за ваш заказ. Вы получаете несколько предложений, сравниваете условия и выбираете лучшее по цене и сервису.",
            ],
            bulletsTitle: "Что вы получаете на практике:",
            bullets: [
                "Цены от 249 ₪: быстро находите подходящий вариант под ваш бюджет.",
                "Экономия до 45%: сравнение предложений помогает не переплачивать.",
                "Проверенные перевозчики: выбираем компании с хорошими отзывами и рекомендациями.",
                "Удобно для квартир и частных домов: Модиин — город «семейных» переездов, и мы это учитываем.",
                "Гибкость по времени: можно найти перевозку на ближайшие даты, включая срочные варианты.",
                "По всему Израилю: переезды внутри Модиина, из Модиина и в Модиин.",
            ],
            note: "Важно: мы выступаем как портал-агрегатор и связываем вас с рекомендованными перевозчиками. Страхование груза оформляет выбранная транспортная компания — заранее уточните наличие действующего полиса.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Модиине — сколько это действительно стоит?",
            intro:
                "Стоимость перевозки в Модиине зависит от объёма вещей, этажности, наличия лифта, длины маршрута (внутри города или между городами) и необходимости доп. услуг. Ниже — ориентиры по средним предложениям.",
            tableLabel: "Прайс-лист перевозок в Модиине",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Модиине", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина. Цена зависит от этажа/лифта.",
                },
                {
                    type: "Небольшая перевозка (до 8–10 коробок)",
                    priceRange: "350–700 ₪",
                    notes: "Подходит для студентов/переезда комнаты/доставки мебели.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры",
                    priceRange: "650–1 300 ₪",
                    notes: "Часто без крана, если есть лифт и нормальный подъезд.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 200–2 100 ₪",
                    notes: "Цена выше при сложном доступе или длинной переноске.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 000–3 400 ₪",
                    notes: "Обычно включает базовую разборку/сборку.",
                },
                {
                    type: "Перевозка 4–5 комнат / частный дом",
                    priceRange: "3 200–6 800 ₪",
                    notes: "Рекомендуется предварительная оценка объёма.",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–550 ₪",
                    notes: "Обычно почасовая оплата (если требуется подъём через окно/балкон).",
                },
            ],
            afterTable:
                "Цены — ориентировочные. Для точного расчёта заполните форму: вы получите несколько предложений и выберете самое выгодное.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Модиине: доступ в дома, лифты и парковка",
            intro:
                "Модиин более удобен для логистики, чем центр Тель-Авива, но и здесь есть нюансы. Вот на что стоит обратить внимание:",
            items: [
                {
                    title: "Въезд в жилые комплексы:",
                    text: "в некоторых домах нужно согласовать въезд грузовой машины, время работы лифта или получить разрешение у ваад-байт. Лучше уточнить это заранее.",
                },
                {
                    title: "Лифты и защита стен:",
                    text: "в новых домах часто требуют защиту лифта/стен при перевозке. Профессиональные перевозчики привозят плёнку, картон и крепёж.",
                },
                {
                    title: "Переноска до подъезда:",
                    text: "иногда парковка есть, но подъезд не близко. Длинная переноска увеличивает время работ — лучше заранее описать ситуацию в заявке.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Модиине — быстро и без переплат",
            intro:
                "Если вам нужно перевезти одну-две вещи или небольшое количество коробок — нет смысла заказывать большую машину на весь день.",
            bullets: [
                "Мы подберём перевозчиков с фургонами и небольшими грузовиками: это дешевле и проще по времени.",
                "Чаще всего перевозят: диваны, кровати, холодильники, стиральные машины, шкафы и коробки. Стоимость — от 249 ₪ по городу.",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Модиине",
            intro:
                "Офисный переезд — это скорость и аккуратность, чтобы не остановить работу. Перевозчики, доступные на нашем портале, помогают с:",
            bullets: [
                "Упаковкой техники и документов: компьютеры, мониторы, серверы, архивы.",
                "Гибким временем переезда: вечером или в конце недели — по согласованию.",
                "Разборкой/сборкой мебели: рабочие столы, тумбы, шкафы, переговорные.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл спокойно, можно подключить дополнительные услуги:",
            items: [
                {
                    title: "Упаковка вещей:",
                    text: "команда упакует имущество в коробки, промаркирует и подготовит хрупкие предметы (посуда, техника, декор).",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "аккуратно разберут шкафы/кровати и соберут на новом месте, чтобы ничего не шаталось и не скрипело.",
                },
                {
                    title: "Упаковочные материалы:",
                    text: "коробки, скотч, стрейч-плёнка, пузырчатая плёнка — можно заказать заранее.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Нужно ли заранее согласовывать переезд в доме в Модиине?",
                    answer:
                        "Иногда да: некоторые дома просят согласовать время работы лифта или въезд грузовика. Если есть ваад-байт — лучше уточнить правила заранее.",
                },
                {
                    question: "Можно ли найти перевозку «на завтра»?",
                    answer:
                        "Да, часто можно. Но в конце месяца и в сезон переездов лучше бронировать заранее, чтобы получить лучший выбор по цене и времени.",
                },
                {
                    question: "Что влияет на итоговую цену сильнее всего?",
                    answer: "Объём вещей, этаж/лифт, расстояние, сложность доступа и дополнительные услуги (упаковка, сборка, кран).",
                },
                {
                    question: "Когда нужен подъёмный кран?",
                    answer:
                        "Если мебель не проходит в дверь/лифт или нужно поднимать через окно/балкон. Перевозчик оценит ситуацию и предложит вариант.",
                },
            ],
        },
        closing: {
            text: "Переезжаете в Модиине? Заполните форму, получите несколько предложений от рекомендованных перевозчиков и выберите лучшее по цене и условиям.",
        },
    },
    jerusalemMovePage: {
        slug: "перевозки-в-иерусалиме",
        metaTitle: "Перевозки в Иерусалиме недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Иерусалиме? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Иерусалим: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Иерусалиме",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Иерусалиме через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Иерусалиме — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Иерусалиме: подъёмы, узкие улицы и парковка"},
            {id: "small-moves", label: "Небольшие перевозки в Иерусалиме — быстро и без переплат"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Иерусалиме"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Иерусалиме через наш портал?",
            paragraphs: [
                "Иерусалим — город с особым ритмом: холмы, старые кварталы, узкие подъезды и улицы, где крупной машине не всегда просто развернуться. Переезд здесь часто требует точного планирования, правильного транспорта и опытной команды.",
                "Наш портал — агрегатор, который помогает быстро сравнить предложения от рекомендованных перевозчиков. Вы получаете несколько вариантов, выбираете по цене и условиям, а главное — избегаете переплат и случайных исполнителей.",
            ],
            bulletsTitle: "Преимущества, которые экономят вам время и деньги:",
            bullets: [
                "Перевозки от 249 ₪: честные конкурентные цены.",
                "Экономия до 45% благодаря сравнению нескольких предложений.",
                "Только проверенные перевозчики с рекомендациями клиентов.",
                "Услуги под ключ: упаковка, разборка/сборка, подъёмный кран при необходимости.",
                "Гибкие слоты: можно найти перевозку «день-в-день» (если есть доступность).",
                "Переезды по городу и по всей стране: из/в Иерусалим.",
            ],
            note: "Обратите внимание: мы выступаем как портал (сайт-агрегатор), который связывает вас с рекомендованными транспортными компаниями. Мы не предоставляем страховку самостоятельно. Ответственность за страхование имущества лежит на выбранном перевозчике. Перед началом работ уточните у компании наличие действующего страхования груза.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Иерусалиме — сколько это действительно стоит?",
            intro:
                "Стоимость переезда в Иерусалиме зависит от объёма вещей, этажности, лифта, доступности подъезда и необходимости крана. Ниже — ориентиры по средним ценам, чтобы вам было проще спланировать бюджет.",
            tableLabel: "Прайс-лист перевозок в Иерусалиме",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Иерусалиме", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина. Влияет этаж и расстояние.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студента",
                    priceRange: "650–1 300 ₪",
                    notes: "Часто без крана, но зависит от подъезда.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 300–2 200 ₪",
                    notes: "Если нет лифта — цена может вырасти.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 200–3 500 ₪",
                    notes: "Обычно включает базовую разборку/сборку.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "3 200–5 000 ₪",
                    notes: "Рекомендуется предварительная оценка объёма.",
                },
                {
                    type: "Перевозка 5-комнатной квартиры / пентхауса",
                    priceRange: "4 500–7 000 ₪",
                    notes: "Часто требуется подъёмный кран (доплата).",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–600 ₪",
                    notes: "Обычно оплата за час работы.",
                },
            ],
            afterTable: "Цены — ориентировочные. Чтобы получить точный расчёт и более выгодные предложения, заполните форму на сайте.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Иерусалиме: подъёмы, узкие улицы и парковка",
            intro: "Иерусалим часто требует «умного» подхода к логистике. Вот что встречается чаще всего и как это решают профессионалы:",
            items: [
                {
                    title: "Подъёмы и сложный рельеф:",
                    text: "холмистая местность влияет на время погрузки/разгрузки и выбор машины. Опытные перевозчики заранее планируют маршрут и подъезд.",
                },
                {
                    title: "Узкие улицы и старые районы:",
                    text: "в некоторых кварталах крупному грузовику сложно проехать. Решение — машина подходящего размера или перенос вещей до точки загрузки.",
                },
                {
                    title: "Парковка и доступ к подъезду:",
                    text: "иногда нужно «забронировать» место или выбрать раннее время. При необходимости помогает подъёмный кран — особенно когда мебель не проходит по лестнице.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Иерусалиме — быстро и без переплат",
            intro:
                "Если нужно перевезти одну-две вещи или пару коробок, большая машина не всегда оправдана. Для этого есть малые перевозки — дешевле и гибче по времени.",
            bullets: [
                "Фургоны и небольшие грузовики для перевозки дивана, холодильника, стиральной машины, кровати, шкафов и коробок.",
                "Стоимость часто начинается от 249 ₪ в пределах города — итог зависит от этажа и доступности подъезда.",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Иерусалиме",
            intro:
                "Офисный переезд важен тем, что нужно сохранить порядок и минимизировать простой. Рекомендованные перевозчики помогают организовать переезд аккуратно и быстро:",
            bullets: [
                "Упаковка техники и документов: компьютеры, мониторы, папки, архивы.",
                "Перевозка в удобное время: вечер, пятница или по согласованию.",
                "Разборка и сборка мебели: столы, стеллажи, переговорные зоны.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл спокойно, можно подключить дополнительные услуги у выбранного перевозчика:",
            items: [
                {
                    title: "Упаковка вещей:",
                    text: "команда упакует имущество в коробки, защитит хрупкое и промаркирует по комнатам."
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "аккуратная разборка шкафов и кроватей, сборка на новом месте — экономит время и нервы."
                },
                {
                    title: "Коробки и материалы:",
                    text: "скотч, плёнка, коробки — можно заказать заранее, чтобы не бегать в последний момент."
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Когда лучше бронировать перевозку в Иерусалиме?",
                    answer:
                        "В пиковые периоды (лето, конец месяца) лучше бронировать за 2–3 недели. В более спокойные недели иногда можно найти варианты за несколько дней или даже «день-в-день».",
                },
                {
                    question: "Нужен ли подъёмный кран в Иерусалиме?",
                    answer:
                        "Если высокий этаж, узкая лестница или мебель не проходит — кран сильно упрощает процесс. Стоимость обычно считается по часам и оплачивается отдельно.",
                },
                {
                    question: "Что влияет на финальную цену?",
                    answer:
                        "Объём вещей, этаж, лифт, расстояние, доступность подъезда, разборка/сборка, упаковка и необходимость крана.",
                },
                {
                    question: "Как выбрать надёжного перевозчика?",
                    answer:
                        "Сравните предложения и уточните детали: что включено, есть ли опыт похожих переездов, условия по времени и наличие страхования груза.",
                },
            ],
        },
        closing: {
            text: "Планируете переезд в Иерусалиме? Заполните форму, получите несколько предложений от рекомендованных перевозчиков и выберите самое выгодное.",
        },
    },
    ramlaMovePage: {
        slug: "перевозки-в-рамле",
        metaTitle: "Перевозки в Рамле недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Рамле? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Рамла: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Рамле",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Рамле через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Рамле — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Рамле: доступ, парковка и дома без лифта"},
            {id: "small-moves", label: "Небольшие перевозки в Рамле — быстро и выгодно"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Рамле"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Рамле через наш портал?",
            paragraphs: [
                "Рамла — удобный город в центре страны, но переезд здесь тоже требует подготовки: узкие улицы в старых кварталах, ограниченная парковка возле домов и разный уровень доступности подъездов.",
                "Наш портал — это агрегатор, где рекомендованные перевозчики конкурируют за ваш заказ. Вы получаете несколько предложений, сравниваете условия и выбираете оптимальный вариант по цене и сервису.",
            ],
            bulletsTitle: "Что вы получаете, заказывая через нас:",
            bullets: [
                "Экономия до 45%: сравнение предложений помогает не переплачивать.",
                "Цены от 249 ₪: можно найти варианты под любой бюджет — от одной вещи до переезда квартиры.",
                "Проверенные перевозчики: работаем с компаниями, которые имеют опыт и рекомендации.",
                "Гибкие форматы: переезды по городу, в Лод, Реховот, Модиин и по всей стране.",
                "Полный пакет услуг: упаковка, разборка/сборка мебели, подъемный кран при необходимости.",
                "Срочные заказы: часто можно найти перевозчика «день-в-день».",
            ],
            note: "Важно: мы выступаем как портал-агрегатор и соединяем вас с рекомендованными перевозчиками. Страхование груза предоставляет (или не предоставляет) выбранная транспортная компания — уточните условия заранее до начала работ.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Рамле — сколько это действительно стоит?",
            intro:
                "Стоимость переезда в Рамле зависит от объёма вещей, этажа, наличия лифта, расстояния между точками и удобства подъезда для машины. Ниже — ориентировочные диапазоны цен по городу на основе типовых предложений.",
            tableLabel: "Прайс-лист перевозок в Рамле",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Рамле", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина. Цена зависит от этажа и доступа.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студента",
                    priceRange: "600–1 200 ₪",
                    notes: "Идеально для небольших переездов внутри города.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 200–2 000 ₪",
                    notes: "Если нет лифта — стоимость обычно выше.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 000–3 200 ₪",
                    notes: "Часто включает базовую разборку/сборку мебели.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 800–4 500 ₪",
                    notes: "Рекомендуется предварительный осмотр для точной оценки.",
                },
                {
                    type: "Перевозка 5-комнатной квартиры / пентхауса",
                    priceRange: "4 000–6 500 ₪",
                    notes: "Иногда требуется подъёмный кран (оплачивается отдельно).",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Обычно стоимость за час работы крана."
                },
            ],
            afterTable:
                "Цены указаны для ориентира. Для точного расчёта и более выгодного предложения заполните форму — перевозчики пришлют варианты под ваш объём и адрес.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Рамле: доступ, парковка и дома без лифта",
            intro: "Чтобы переезд прошёл без сюрпризов, важно учесть особенности города. Вот что чаще всего влияет на процесс и стоимость:",
            items: [
                {
                    title: "Ограниченная парковка у подъезда:",
                    text: "в некоторых районах сложно поставить грузовую машину прямо у входа. Опытный перевозчик подберёт подходящий транспорт и время, а вам стоит заранее продумать место для разгрузки.",
                },
                {
                    title: "Старые дома и узкие лестничные пролёты:",
                    text: "мебель не всегда проходит по лестнице — тогда помогает частичная разборка или подъём через окно/балкон.",
                },
                {
                    title: "Подъездные пути и время выезда:",
                    text: "в часы пик движение плотнее. Лучшее время для погрузки — раннее утро или середина дня, чтобы сэкономить время бригады.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Рамле — быстро и выгодно",
            intro:
                "Не всегда нужен большой грузовик. Для одной-двух вещей или нескольких коробок удобнее заказать малую перевозку — это быстрее и дешевле.",
            bullets: [
                "Фургоны и небольшие грузовики: оптимально для перевозки техники, дивана, кровати, нескольких коробок.",
                "Цена от 249 ₪ за одну вещь в пределах города — зависит от этажности и доступа к подъезду.",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Рамле",
            intro:
                "Офисный переезд — это про скорость и аккуратность, чтобы не останавливать работу. Рекомендованные перевозчики помогают организовать процесс под ваш график:",
            bullets: [
                "Аккуратная упаковка техники и документов: компьютеры, мониторы, архивы и периферия.",
                "Гибкое время: переезд вечером или в конце недели по согласованию.",
                "Разборка/сборка: столы, стеллажи, шкафы и рабочие места.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro:
                "Чтобы переезд прошёл спокойнее, можно добавить сервисы — это часто экономит время и снижает риск повреждений.",
            items: [
                {
                    title: "Услуги упаковки:",
                    text: "бригада привезёт материалы, упакует имущество и промаркирует коробки по комнатам.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "аккуратная разборка шкафов/кроватей и сборка на новом месте."
                },
                {title: "Поставка коробок:", text: "коробки, скотч, пузырчатая плёнка — можно заказать заранее."},
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "За сколько времени нужно бронировать перевозку в Рамле?",
                    answer:
                        "В конце месяца и летом лучше бронировать за 1–2 недели. В более спокойные периоды часто можно найти варианты за несколько дней, иногда — «день-в-день».",
                },
                {
                    question: "Что влияет на итоговую цену больше всего?",
                    answer:
                        "Объём вещей, этаж/лифт, расстояние между точками и удобство подъезда машины. Если есть крупная мебель, иногда нужна разборка или кран.",
                },
                {
                    question: "Можно ли заказать перевозку только одной вещи?",
                    answer: "Да, это популярный формат. Укажите предмет, этажи и адреса — и перевозчики пришлют предложения.",
                },
                {
                    question: "Делаете ли вы перевозки с подъёмным краном?",
                    answer:
                        "Да. Если мебель не проходит по лестнице/в лифт, перевозчик может организовать кран. Обычно оплата почасовая и идёт отдельно.",
                },
            ],
        },
        closing: {
            text: "Планируете переезд в Рамле? Заполните форму, получите несколько предложений от рекомендованных перевозчиков и выберите самое выгодное по цене и условиям.",
        },
    },
    ashdodMovePage: {
        slug: "перевозки-в-ашдоде",
        metaTitle: "Перевозки в Ашдоде недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Ашдоде? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Ашдод: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Ашдоде",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Ашдоде через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Ашдоде — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Ашдоде: подъезды, парковка и расстояния"},
            {id: "small-moves", label: "Небольшие перевозки в Ашдоде — быстро и недорого"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Ашдоде"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Ашдоде через наш портал?",
            paragraphs: [
                "Ашдод — прибрежный город с разными районами: от современных кварталов до старых домов с узкими подъездами. Переезд здесь часто упирается в логистику: где остановить машину, как поднять крупную мебель и как уложиться в удобное время.",
                "Наш портал — это агрегатор: перевозчики конкурируют за ваш заказ, а вы получаете несколько предложений, сравниваете условия и выбираете оптимальное по цене и сервису.",
            ],
            bulletsTitle: "Что вы получаете, заказывая перевозку через нас:",
            bullets: [
                "Экономия до 45%: сравнение предложений снижает итоговую стоимость переезда.",
                "Старт от 249 ₪: можно заказать перевозку одной вещи или небольшую доставку по городу.",
                "Рекомендованные перевозчики: отбираем компании по опыту и отзывам клиентов.",
                "Услуги «под ключ»: упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
                "Гибкость по времени: доступно планирование на удобный день, включая плотные периоды конца месяца.",
                "Маршруты по всей стране: из Ашдода/в Ашдод и межгород.",
            ],
            note: "Важно: мы — портал-агрегатор и связываем вас с рекомендованными перевозчиками. Мы не оформляем страховку самостоятельно. Уточняйте наличие страхования груза у выбранной компании до начала работ.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Ашдоде — сколько это действительно стоит?",
            intro:
                "Цена зависит от объёма вещей, этажности, наличия лифта, расстояния между адресами и сложности подъезда к дому. Ниже — ориентиры по средним ценам по предложениям перевозчиков в Ашдоде.",
            tableLabel: "Прайс-лист перевозок в Ашдоде",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Ашдоде", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Диван, холодильник, стиральная машина. Цена зависит от этажа/лифта.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студии",
                    priceRange: "600–1 150 ₪",
                    notes: "Подходит для небольших переездов внутри города.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 150–1 950 ₪",
                    notes: "На стоимость влияет подъезд к дому и наличие парковки.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "1 900–3 100 ₪",
                    notes: "Часто включает базовую разборку/сборку.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 700–4 400 ₪",
                    notes: "Рекомендуется предварительная оценка объёма.",
                },
                {
                    type: "Перевозка 5-комнатной квартиры / пентхауса",
                    priceRange: "3 900–6 400 ₪",
                    notes: "Иногда нужен подъёмный кран (оплачивается отдельно).",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Обычно стоимость за час работы крана."
                },
            ],
            afterTable:
                "Цены — ориентировочные. Для точного расчёта (и часто более выгодной цены) заполните форму и получите несколько предложений.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Ашдоде: подъезды, парковка и расстояния",
            intro: "Даже внутри одного города условия могут сильно отличаться. Вот частые сложности и как их решают профессиональные перевозчики:",
            items: [
                {
                    title: "Подъезд к дому и парковка:",
                    text: "в некоторых местах трудно остановить грузовик близко к подъезду. Перевозчики подбирают оптимальный размер машины и планируют время, когда проще подъехать.",
                },
                {
                    title: "Этажность и лифты:",
                    text: "в новых домах часто есть лифт, но не всегда подходит по размеру. Если крупная мебель не входит, помогает подъёмный кран или аккуратный ручной подъём.",
                },
                {
                    title: "Маршрут и межгород:",
                    text: "Ашдод — удобная точка для переездов на юг и в центр. На стоимость влияет не только километраж, но и время на погрузку/разгрузку и условия доступа.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Ашдоде — быстро и недорого",
            intro:
                "Не всегда нужен большой грузовик и бригада. Иногда надо перевезти одну вещь или пару коробок — и сделать это без переплат.",
            bullets: [
                "Подберём перевозчика с фургоном/небольшим грузовиком — это обычно дешевле и быстрее по городу.",
                "Частые кейсы: доставка дивана, холодильника, стиральной машины, кровати, коробок. Стартовая цена — от 249 ₪.",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Ашдоде",
            intro:
                "Офисный переезд — это сроки и ответственность. Мы помогаем подобрать перевозчиков, которые умеют работать аккуратно и по плану:",
            bullets: [
                "Упаковка техники и документов: компьютеры, мониторы, архивы, периферия.",
                "Перевозка в удобное время: вечером/в конце недели, чтобы минимизировать простой.",
                "Разборка и сборка офисной мебели: столы, шкафы, рабочие места.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл без стресса, перевозчики предлагают расширенный сервис:",
            items: [
                {
                    title: "Упаковка вещей:",
                    text: "команда упакует имущество в коробки, защитит хрупкое и подпишет коробки по комнатам.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "аккуратно разберут шкафы/кровати/стеллажи и соберут на новом месте.",
                },
                {
                    title: "Упаковочные материалы:",
                    text: "коробки, стрейч, скотч, пузырчатая плёнка — можно заказать заранее.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "За сколько времени лучше бронировать перевозку в Ашдоде?",
                    answer:
                        "В конце месяца и летом лучше бронировать за 1–2 недели. В более спокойные периоды часто можно найти перевозчика за несколько дней.",
                },
                {
                    question: "Можно ли перевезти одну вещь недорого?",
                    answer:
                        "Да. Для таких задач подходят фургоны и небольшие машины — обычно это самый бюджетный вариант. Старт — от 249 ₪.",
                },
                {
                    question: "Что влияет на цену сильнее всего?",
                    answer:
                        "Объём вещей, этаж/лифт, расстояние между адресами, сложность подъезда и необходимость разборки мебели или крана.",
                },
                {
                    question: "Делаете ли вы перевозки с подъёмным краном?",
                    answer:
                        "Да, при необходимости перевозчик организует подъёмный кран. Обычно услуга оплачивается отдельно — чаще всего по часам.",
                },
            ],
        },
        closing: {
            text: "Планируете переезд в Ашдоде? Заполните форму, получите несколько предложений от рекомендованных перевозчиков и выберите лучшее по цене и условиям.",
        },
    },
    rehovotMovePage: {
        slug: "перевозки-в-реховоте",
        metaTitle: "Перевозки в Реховоте недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Реховоте? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, дома, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели и подъёмный кран при необходимости.",
        title: "Реховот: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Реховоте",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Реховоте через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Реховоте — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Реховоте: доступ, парковка и этажность"},
            {id: "small-moves", label: "Небольшие перевозки в Реховоте — быстро и выгодно"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Реховоте"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Реховоте через наш портал?",
            paragraphs: [
                "Реховот — комфортный город, но переезд здесь всё равно требует правильной организации: разные типы домов (квартиры, виллы, новостройки), ограничения по подъезду и «окна» для парковки возле подъезда.",
                "Наш портал — агрегатор, где рекомендованные перевозчики конкурируют за ваш заказ. Вы получаете несколько предложений, сравниваете условия и выбираете лучший вариант по цене и сервису.",
            ],
            bulletsTitle: "Преимущества, которые экономят вам деньги и время:",
            bullets: [
                "Цены от 249 ₪: подбираем вариант под ваш бюджет и объём вещей.",
                "Экономия до 45%: благодаря сравнению предложений от нескольких перевозчиков.",
                "Рекомендованные исполнители: работаем с перевозчиками, прошедшими проверку и отбор.",
                "Удобно «под ключ»: упаковка, разборка/сборка, коробки, при необходимости — кран.",
                "Гибкие даты: переезды в будни, по пятницам и по согласованию — в удобные часы.",
                "Не только по городу: Реховот ↔ центр страны, Реховот ↔ юг и другие направления.",
            ],
            note:
                "Важно: мы — портал (агрегатор), который связывает вас с рекомендованными перевозчиками. Страхование груза предоставляет выбранная транспортная компания. Уточните наличие действующего страхового полиса до начала работ.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Реховоте — сколько это действительно стоит?",
            intro:
                "Стоимость зависит от объёма вещей, этажа, наличия лифта, расстояния и времени (конец месяца/лето обычно дороже). Ниже — ориентиры по средним ценам на основе предложений перевозчиков в Реховоте.",
            tableLabel: "Прайс-лист перевозок в Реховоте",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Реховоте", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина, шкаф. Цена зависит от этажа."
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студента",
                    priceRange: "600–1 200 ₪",
                    notes: "Подходит для небольших квартир и переездов с минимальным объёмом."
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 200–2 000 ₪",
                    notes: "Цена выше, если нет лифта или сложный подъезд к дому."
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 000–3 200 ₪",
                    notes: "Часто включает базовую разборку/сборку мебели."
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 800–4 500 ₪",
                    notes: "Рекомендуется предварительный осмотр для точной оценки."
                },
                {
                    type: "Перевозка 5-комнатной квартиры / дома",
                    priceRange: "4 000–6 800 ₪",
                    notes: "Иногда нужен кран или дополнительная команда грузчиков."
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Обычно тарифицируется за час работы."
                },
            ],
            afterTable:
                "Цены указаны для ориентира. Для точного расчёта заполните форму — вы получите несколько предложений и сможете выбрать самое выгодное.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Реховоте: доступ, парковка и этажность",
            intro:
                "Реховот обычно удобнее по логистике, чем центр, но есть нюансы. Вот что чаще всего влияет на стоимость и сроки:",
            items: [
                {
                    title: "Подъезд к дому и узкие улицы:",
                    text:
                        "в некоторых районах удобнее использовать фургон или средний грузовик. Опытные перевозчики подбирают транспорт под локацию и объём вещей.",
                },
                {
                    title: "Лифт, этажность и новостройки:",
                    text:
                        "в домах без лифта или с маленьким лифтом перенос занимает больше времени. В новостройках иногда нужно согласовать время погрузки и защиту стен/лифта.",
                },
                {
                    title: "Крупная мебель и техника:",
                    text:
                        "если предметы не проходят по лестнице/в лифт, решением становится подъёмный кран через окно или балкон — это быстрее и безопаснее для имущества.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Реховоте — быстро и выгодно",
            intro:
                "Нужно перевезти пару вещей или сделать «малый переезд»? Это частый запрос: диван, холодильник, кровать, несколько коробок или переезд из студии.",
            bullets: [
                "Подберём перевозчика с небольшим транспортом — это дешевле, чем заказывать большую машину.",
                "Стоимость от 249 ₪ за одну вещь по городу (в зависимости от этажа и сложности погрузки).",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Реховоте",
            intro:
                "Переезд офиса важен темпом и аккуратностью: техника, документы, мебель, рабочие места. Мы помогаем организовать офисные переезды с понятным планом.",
            bullets: [
                "Аккуратная упаковка техники и маркировка коробок по отделам/кабинетам.",
                "Гибкое время работ: вечер, пятница и другие варианты, чтобы снизить простой бизнеса.",
                "Разборка/сборка столов, шкафов, стеллажей и перевозка офисной мебели.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro:
                "Чтобы переезд прошёл спокойно, перевозчики предлагают дополнительные услуги, которые реально экономят время и снижают риск повреждений:",
            items: [
                {
                    title: "Упаковка имущества:",
                    text:
                        "команда упакует вещи в коробки, защитит хрупкое, подпишет коробки по комнатам и подготовит всё к перевозке.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text:
                        "аккуратно разберут кровати, шкафы, столы и соберут их на новом месте — без потерь деталей и перекосов.",
                },
                {
                    title: "Коробки и материалы:",
                    text:
                        "можно заказать коробки, скотч, пузырчатую плёнку и стрейч — удобно, если вы не хотите искать всё отдельно.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Когда лучше бронировать перевозку в Реховоте?",
                    answer:
                        "Если переезд на конец месяца или летом — лучше за 1–2 недели. В менее загруженные периоды часто можно найти варианты за несколько дней.",
                },
                {
                    question: "Сколько грузчиков нужно?",
                    answer:
                        "Для небольшого переезда обычно достаточно 2-х. Для 3–4 комнат — часто 3–4 грузчика, в зависимости от этажности и объёма мебели.",
                },
                {
                    question: "Нужен ли подъёмный кран?",
                    answer:
                        "Если мебель не проходит в лифт/проёмы или высокий этаж без удобного подъёма — кран часто экономит время и снижает риск повреждений.",
                },
                {
                    question: "Можно ли перевезти одну вещь или несколько коробок?",
                    answer:
                        "Да. Это популярный формат — перевозчики с фургонами и небольшими грузовиками делают такие заказы ежедневно.",
                },
            ],
        },
        closing: {
            text:
                "Планируете переезд в Реховоте? Заполните форму, получите несколько предложений от рекомендованных перевозчиков и выберите лучшее по цене и условиям.",
        },
    },
    lodMovePage: {
        slug: "перевозки-в-лоде",
        metaTitle: "Перевозки в Лоде недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Лоде? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры и офисы, небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Лод: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Лоде",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Лоде через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Лоде — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Лоде: доступ, парковка и старые дома"},
            {id: "small-moves", label: "Небольшие перевозки в Лоде — быстро и недорого"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Лоде"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Лоде через наш портал?",
            paragraphs: [
                "Лод — город с удобной логистикой рядом с ключевыми трассами и аэропортом, но переезд здесь всё равно требует опыта: разные типы застройки, дворы с ограниченным доступом, узкие подъезды и нехватка места для грузовика.",
                "Наш портал — это агрегатор рекомендованных перевозчиков. Вы получаете несколько предложений, сравниваете цены и выбираете оптимальный вариант по бюджету и условиям — без лишних звонков и переплат.",
            ],
            bulletsTitle: "Преимущества, которые экономят вам деньги и время:",
            bullets: [
                "Перевозки от 249 ₪: честные предложения от перевозчиков, которые конкурируют за ваш заказ.",
                "Экономия до 45%: сравнение нескольких цен помогает выбрать лучшее предложение.",
                "Проверенные перевозчики: работаем только с теми, кто прошёл отбор и имеет рекомендации.",
                "Под любые задачи: квартира, офис, отдельные вещи, срочные перевозки.",
                "Доп. услуги в одном месте: упаковка, разборка/сборка, кран при необходимости.",
                "По всей стране: из Лода и в Лод — без ограничений по направлениям.",
            ],
            note: "Важно: мы — портал-агрегатор и соединяем вас с рекомендованными перевозчиками. Мы не оформляем страховку самостоятельно. Уточняйте у выбранного перевозчика наличие действующего страхования груза до начала работ.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Лоде — сколько это действительно стоит?",
            intro:
                "Стоимость переезда в Лоде зависит от объёма вещей, этажа, наличия лифта, расстояния и доступности подъезда. Ниже — ориентиры по средним ценам на основе предложений перевозчиков.",
            tableLabel: "Прайс-лист перевозок в Лоде",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Лоде", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина, шкаф. Цена зависит от этажа и подъезда.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студента",
                    priceRange: "600–1 200 ₪",
                    notes: "Подходит для небольших переездов и арендаторов.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 200–2 000 ₪",
                    notes: "Цена выше, если нет лифта или сложный доступ.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 000–3 200 ₪",
                    notes: "Часто включает базовую разборку/сборку мебели.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 800–4 500 ₪",
                    notes: "Рекомендуется предварительная оценка объёма.",
                },
                {
                    type: "Перевозка 5-комнатной квартиры / пентхауса",
                    priceRange: "4 000–6 500 ₪",
                    notes: "Иногда требуется подъёмный кран (доплата).",
                },
                {type: "Доплата за подъёмный кран", priceRange: "300–500 ₪", notes: "Стоимость за час работы крана."},
            ],
            afterTable:
                "Цены — ориентировочные. Для точного расчёта и более выгодного предложения заполните форму — перевозчики пришлют конкретные варианты под ваш переезд.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Лоде: доступ, парковка и старые дома",
            intro: "Чтобы переезд прошёл без сюрпризов, учитывайте основные моменты, с которыми сталкиваются в Лоде:",
            items: [
                {
                    title: "Ограниченный доступ во дворы:",
                    text: "в некоторых районах сложно подъехать крупной машиной. Опытные перевозчики подбирают подходящий транспорт и планируют разгрузку заранее.",
                },
                {
                    title: "Парковка рядом с подъездом:",
                    text: "иногда приходится заранее «держать место» для грузовика или выбирать более раннее время, чтобы быстро загрузиться/разгрузиться.",
                },
                {
                    title: "Старые дома и узкие лестницы:",
                    text: "крупная мебель может не пройти. В таких случаях кран или частичная разборка мебели экономят время и снижают риск повреждений.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Лоде — быстро и недорого",
            intro:
                "Если нужно перевезти одну-две вещи или несколько коробок — большой грузовик не обязателен. Малые перевозки особенно выгодны для арендаторов и студентов.",
            bullets: [
                "Фургоны и небольшие грузовики — дешевле и манёвреннее по городу.",
                "Что перевозят чаще всего: техника, диваны/кровати, шкафы, коробки, покупки из магазинов.",
                "Цена обычно стартует от 249 ₪ за одну вещь в пределах города (зависит от этажа и условий подъезда).",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Лоде",
            intro:
                "Лод — удобная точка для бизнеса благодаря транспортной доступности. Офисный переезд важен по срокам: чем быстрее — тем меньше простой.",
            bullets: [
                "Аккуратная упаковка техники и документов, маркировка коробок по отделам.",
                "Переезд в удобное время: вечер, пятница — чтобы не мешать рабочему дню.",
                "Разборка/сборка столов, стеллажей, переговорных и офисных шкафов.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл проще, перевозчики обычно предлагают расширенный сервис:",
            items: [
                {
                    title: "Упаковка имущества:",
                    text: "команда упакует вещи в коробки, защитит хрупкое и подпишет всё по комнатам.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "разберут шкафы/кровати/стеллажи и соберут на новом месте аккуратно и надёжно.",
                },
                {
                    title: "Коробки и материалы:",
                    text: "можно заказать коробки, скотч, пузырчатую плёнку и стрейч под ваш объём.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Когда лучше заказывать перевозку в Лоде?",
                    answer:
                        "В конце месяца и летом слоты разбирают быстрее — лучше бронировать за 1–2 недели. В более спокойные периоды часто можно найти перевозчика за несколько дней.",
                },
                {
                    question: "Можно ли уложиться в бюджет на небольшую перевозку?",
                    answer:
                        "Да. Для одной-двух вещей выгоднее выбрать фургон/малый грузовик. Это часто дешевле, чем заказывать стандартный переезд.",
                },
                {
                    question: "Что влияет на цену сильнее всего?",
                    answer:
                        "Этаж, наличие лифта, расстояние переноски до машины, объём мебели и доступ к подъезду. Чем проще подъезд и меньше ручной переноски — тем ниже стоимость.",
                },
                {
                    question: "Нужен ли подъёмный кран?",
                    answer:
                        "Если мебель не проходит в лестничный пролёт/лифт или высокий этаж — кран может сэкономить время и снизить риск повреждений. Перевозчик подскажет по ситуации.",
                },
            ],
        },
        closing: {
            text: "Планируете переезд в Лоде? Заполните форму, получите несколько предложений от рекомендованных перевозчиков и выберите самое выгодное по цене и условиям.",
        },
    },
    rishonLeZionMovePage: {
        slug: "перевозки-в-ришон-ле-ционе",
        metaTitle: "Перевозки в Ришон-ле-Ционе недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Ришон-ле-Ционе? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Ришон-ле-Цион: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Ришон-ле-Ционе",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Ришон-ле-Ционе через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Ришон-ле-Ционе — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Ришон-ле-Ционе: парковка, этажность и доступ"},
            {id: "small-moves", label: "Небольшие перевозки в Ришон-ле-Ционе — когда нужно быстро и недорого"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Ришон-ле-Ционе"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Ришон-ле-Ционе через наш портал?",
            paragraphs: [
                "Ришон-ле-Цион — большой и разный город: новые районы с высотками и подземными парковками, старые кварталы с узкими подъездами, а также деловые зоны. Из-за этого цена и сложность переезда могут сильно отличаться даже на соседних улицах.",
                "Наш портал — это агрегатор: перевозчики конкурируют за ваш заказ, а вы выбираете самое выгодное предложение по цене и условиям. Это удобно, быстро и чаще всего заметно дешевле, чем искать компанию вручную.",
            ],
            bulletsTitle: "Что вы получаете, оформляя заявку через наш портал:",
            bullets: [
                "Экономия до 45%: сравнение предложений помогает не переплачивать.",
                "Цены от 249 ₪: есть варианты для малых перевозок и одной вещи.",
                "Проверенные перевозчики: работаем только с рекомендованными исполнителями.",
                "Гибкость по времени: можно подобрать утро/вечер, будни и часто пятницу.",
                "Полный сервис: упаковка, разборка/сборка, вынос/занос, при необходимости — подъёмный кран.",
                "Переезды по всему Израилю: внутри города, из Ришон-ле-Циона и в Ришон-ле-Цион.",
            ],
            note: "Важно: мы — портал-агрегатор и связываем вас с рекомендованными перевозчиками. Страхование груза оформляет выбранная компания. Перед началом работ уточните у перевозчика наличие действующего полиса «страхование груза при перевозке».",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Ришон-ле-Ционе — сколько это действительно стоит?",
            intro:
                "Итоговая цена зависит от объёма вещей, этажа, наличия лифта, расстояния до парковки и необходимости разборки мебели. Ниже — ориентиры по городу на основе типичных предложений перевозчиков.",
            tableLabel: "Прайс-лист перевозок в Ришон-ле-Ционе",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Ришон-ле-Ционе", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина. Влияет этаж и лифт."
                },
                {
                    type: "Небольшая перевозка (до 10–15 коробок)",
                    priceRange: "350–750 ₪",
                    notes: "Фургон/малый грузовик; удобно для арендаторов и студентов."
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студии",
                    priceRange: "650–1 300 ₪",
                    notes: "Часто включает базовую погрузку/разгрузку."
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 200–2 100 ₪",
                    notes: "Цена растёт при дальнем паркинге или без лифта."
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 000–3 300 ₪",
                    notes: "Обычно нужна разборка части мебели."
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 900–4 700 ₪",
                    notes: "Рекомендуется предварительный осмотр/созвон."
                },
                {type: "Доплата за подъёмный кран", priceRange: "300–500 ₪", notes: "Как правило, почасовая оплата."},
            ],
            afterTable:
                "Цены указаны для ориентира. Для точного расчёта (и часто более выгодной цены) заполните заявку на сайте и сравните предложения.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Ришон-ле-Ционе: парковка, этажность и доступ",
            intro:
                "Чтобы переезд прошёл без сюрпризов, важно заранее учесть особенности дома и подъезда. Вот самые частые сложности и как их решают профессионалы:",
            items: [
                {
                    title: "Парковка и расстояние до подъезда:",
                    text: "в некоторых местах сложно остановиться прямо у входа. Перевозчики заранее планируют точку разгрузки и подбирают подходящий транспорт, а вы можете помочь — «зарезервировать» место заранее.",
                },
                {
                    title: "Высотные дома и ограничения лифтов:",
                    text: "в новых домах лифт есть, но он может быть узким или требовать бронирования. Если мебель не проходит — согласовывают подъёмный кран.",
                },
                {
                    title: "Разборка мебели и защита имущества:",
                    text: "столы, шкафы и кровати безопаснее перевозить частично разобранными. Профессионалы используют плёнку, уголки и ремни, чтобы снизить риск повреждений.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Ришон-ле-Ционе — когда нужно быстро и недорого",
            intro:
                "Иногда не нужен большой грузовик: перевезти пару вещей, технику или коробки можно намного дешевле на фургоне.",
            bullets: [
                "Малые перевозки особенно удобны при покупке/продаже вещей, переезде из комнаты или студии, доставке техники и мебели.",
                "Стоимость часто начинается от 249 ₪ за одну вещь в пределах города — итог зависит от этажа и лифта.",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Ришон-ле-Ционе",
            intro:
                "Офисный переезд важен по времени: нужно быстро, аккуратно и с минимальной остановкой работы. Перевозчики помогают организовать процесс:",
            bullets: [
                "Упаковка и маркировка: компьютеры, документы и техника — по рабочим зонам.",
                "Гибкое время: вечерние часы и часто пятница, чтобы вернуться к работе без простоя.",
                "Разборка/сборка: столы, перегородки, стеллажи и офисные шкафы.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд был спокойным, можно заказать услуги «под ключ»:",
            items: [
                {
                    title: "Упаковка вещей:",
                    text: "команда привезёт материалы, упакует и промаркирует коробки по комнатам."
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "аккуратная разборка крупной мебели, сборка на новом месте и базовая настройка."
                },
                {
                    title: "Поставка коробок и материалов:",
                    text: "коробки, плёнка, скотч и защита углов — можно заказать заранее."
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "За сколько времени лучше заказывать перевозку в Ришон-ле-Ционе?",
                    answer: "В конце месяца и летом лучше бронировать за 1–2 недели. В спокойные периоды часто можно найти перевозчика за 2–4 дня.",
                },
                {
                    question: "Что сильнее всего влияет на цену?",
                    answer: "Объём вещей, этаж и лифт, расстояние до парковки, разборка мебели и необходимость крана.",
                },
                {
                    question: "Можно ли перевезти одну вещь недорого?",
                    answer: "Да, для этого обычно выбирают фургон или малый грузовик. Цены часто начинаются от 249 ₪ в пределах города.",
                },
                {
                    question: "Нужно ли мне самому покупать упаковочные материалы?",
                    answer: "Не обязательно: многие перевозчики могут привезти коробки, плёнку и скотч, а также выполнить упаковку.",
                },
            ],
        },
        closing: {
            text: "Планируете переезд в Ришон-ле-Ционе? Заполните заявку, получите предложения от рекомендованных перевозчиков и выберите самое выгодное по цене и условиям.",
        },
    },
    hodHaSharonMovePage: {
        slug: "перевозки-в-ход-ха-шароне",
        metaTitle: "Перевозки в Ход-ха-Шароне недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Ход-ха-Шароне? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Перевозка квартир и офисов, небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Ход-ха-Шарон: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Ход-ха-Шароне",
        tocItems: [
            {
                id: "why-us",
                label: "Почему стоит заказать перевозку в Ход-ха-Шароне через наш портал?",
            },
            {
                id: "pricing",
                label:
                    "Прайс-лист перевозок в Ход-ха-Шароне — сколько это действительно стоит?",
            },
            {
                id: "challenges",
                label: "Сложности перевозки в Ход-ха-Шароне: подъезды, лифты и время выезда",
            },
            {
                id: "small-moves",
                label:
                    "Небольшие перевозки в Ход-ха-Шароне — для отдельных вещей и студенческих переездов",
            },
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Ход-ха-Шароне"},
            {
                id: "extra-services",
                label: "Дополнительные услуги: упаковка, разборка и сборка",
            },
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],

        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Ход-ха-Шароне через наш портал?",
            paragraphs: [
                "Ход-ха-Шарон — удобный и спокойный город Шарона, но переезд здесь тоже требует организации: важно правильно оценить объём, этаж, доступ к подъезду и время выезда на трассы 4/531, чтобы не попасть в пробки.",
                "Наш портал — это не одна транспортная компания, а площадка, где проверенные перевозчики конкурируют за ваш заказ. Вы сравниваете предложения и выбираете оптимальное по цене и условиям.",
            ],
            bulletsTitle: "Преимущества, которые экономят вам деньги и время:",
            bullets: [
                "Перевозки от 249 ₪: честные и конкурентные цены.",
                "Экономия до 45%: сравнение предложений помогает не переплачивать.",
                "Только проверенные перевозчики: работаем с рекомендованными компаниями.",
                "Полный комплекс услуг: упаковка, разборка/сборка, подъёмный кран и хранение.",
                "Гибкость по времени: можно найти варианты «день-в-день» или на удобную дату.",
                "По всей стране: перевозки внутри города, из Ход-ха-Шарона и в Ход-ха-Шарон.",
            ],
            note: "Обратите внимание: мы выступаем как портал (сайт-агрегатор), который связывает вас с рекомендованными перевозчиками. Мы не предоставляем страховку самостоятельно. Ответственность за страхование имущества лежит на выбранной компании. Перед началом работ уточните у перевозчика наличие действующего полиса страхования груза.",
        },

        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Ход-ха-Шароне — сколько это действительно стоит?",
            intro:
                "Цена переезда зависит от размера квартиры, этажа, наличия лифта, расстояния и даты (конец месяца/лето обычно дороже). Ниже — ориентиры по средним предложениям перевозчиков в Ход-ха-Шароне.",
            tableLabel: "Прайс-лист перевозок в Ход-ха-Шароне",
            tableHeaders: [
                "Тип перевозки",
                "Ориентировочный диапазон цен в Ход-ха-Шароне",
                "Примечания",
            ],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина. Цена зависит от этажа.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студента",
                    priceRange: "600–1 200 ₪",
                    notes: "Подходит для небольших квартир и точечных переездов.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 200–2 000 ₪",
                    notes:
                        "Если лифт маленький — цена может вырасти из-за ручного подъёма.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 000–3 300 ₪",
                    notes: "Часто включает разборку/сборку базовой мебели.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 900–4 700 ₪",
                    notes: "Рекомендуется предварительный осмотр для точной оценки.",
                },
                {
                    type: "Перевозка 5-комнатной квартиры / дома",
                    priceRange: "4 200–6 800 ₪",
                    notes: "Иногда требуется подъёмный кран (доплата).",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Обычно почасовая оплата.",
                },
            ],
            afterTable:
                "Цены в таблице — ориентировочные. Для точного расчёта заполните форму на сайте и сравните предложения перевозчиков.",
        },

        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Ход-ха-Шароне: подъезды, лифты и время выезда",
            intro:
                "Хотя город более «просторный», чем центр Тель-Авива, в переезде всё равно есть нюансы. Вот ключевые моменты:",
            items: [
                {
                    title: "Доступ к подъезду и парковка:",
                    text: "в новых районах обычно проще с парковкой, но во дворах и у школ могут быть ограничения. Лучше заранее выбрать место для грузовика.",
                },
                {
                    title: "Лифты и крупная мебель:",
                    text: "даже при наличии лифта крупная мебель может не проходить. В таких случаях помогает подъёмный кран или аккуратный разбор/сборка.",
                },
                {
                    title: "Время выезда на трассы:",
                    text: "в часы пик можно «потерять» время на 4/531. Оптимально планировать переезд на раннее утро или середину дня.",
                },
            ],
        },

        smallMoves: {
            id: "small-moves",
            title:
                "Небольшие перевозки в Ход-ха-Шароне — для отдельных вещей и студенческих переездов",
            intro:
                "Не всегда нужен большой грузовик. Для пары предметов или переезда из аренды часто выгоднее малый транспорт.",
            bullets: [
                "Фургоны и небольшие грузовики: дешевле, быстрее и проще припарковаться.",
                "Что перевозят чаще всего: диваны, кровати, шкафы, техника, коробки. Цена — от 249 ₪ за одну вещь по городу.",
            ],
        },

        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Ход-ха-Шароне",
            intro:
                "Офисный переезд важен тем, что нужно минимально «остановить» работу. Перевозчики предлагают:",
            bullets: [
                "Аккуратная упаковка техники и документов.",
                "Переезд в удобное время: вечером или по пятницам — чтобы вернуться к работе быстрее.",
                "Разборка/сборка рабочих мест, шкафов и перегородок.",
            ],
        },

        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл без стресса, можно подключить дополнительные услуги:",
            items: [
                {
                    title: "Упаковка вещей:",
                    text: "команда упакует имущество в коробки, защитит хрупкое и промаркирует коробки по комнатам.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "аккуратно разберут шкафы/кровати и соберут на новом месте.",
                },
                {
                    title: "Коробки и материалы:",
                    text: "можно заказать коробки, скотч, пузырчатую плёнку и другие расходники.",
                },
            ],
        },

        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "За сколько времени лучше заказывать перевозку в Ход-ха-Шароне?",
                    answer:
                        "Летом и в конце месяца лучше бронировать за 1–2 недели. В спокойные периоды можно найти перевозчика за несколько дней, а иногда и «день-в-день».",
                },
                {
                    question: "Можно ли перевезти одну-две вещи без большого переезда?",
                    answer:
                        "Да. Для этого чаще всего берут фургон/малый грузовик. Стоимость обычно начинается от 249 ₪ в пределах города.",
                },
                {
                    question: "Нужно ли мне самому покупать страховку?",
                    answer:
                        "Страхование условий зависит от выбранного перевозчика. Перед работами уточните наличие действующего полиса и что именно покрывается.",
                },
                {
                    question: "Когда нужен подъёмный кран?",
                    answer:
                        "Если мебель не проходит в лифт/дверной проём или этаж высокий, кран ускоряет процесс и снижает риск повреждений. Оплата обычно почасовая.",
                },
            ],
        },

        closing: {
            text: "Переезд в Ход-ха-Шароне можно сделать проще и дешевле. Заполните форму, получите несколько предложений от перевозчиков и выберите самое выгодное.",
        },
    },
    kfarSabaMovePage: {
        slug: "перевозки-в-кфар-сабе",
        metaTitle: "Перевозки в Кфар-Сабе недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Кфар-Сабе? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Перевозки квартир и офисов, небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран при необходимости.",
        title: "Кфар-Саба: умное сравнение цен и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Кфар-Сабе",
        tocItems: [
            {
                id: "why-us",
                label: "Почему стоит заказать перевозку в Кфар-Сабе через наш портал?",
            },
            {
                id: "pricing",
                label:
                    "Прайс-лист перевозок в Кфар-Сабе — сколько это действительно стоит?",
            },
            {
                id: "challenges",
                label: "Сложности переезда: парковка, доступ к подъезду и этажность",
            },
            {
                id: "small-moves",
                label: "Небольшие перевозки в Кфар-Сабе — быстро и выгодно",
            },
            {
                id: "office-moves",
                label: "Перевозка офисов и бизнеса в Кфар-Сабе",
            },
            {
                id: "extra-services",
                label: "Дополнительные услуги: упаковка, разборка и сборка",
            },
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Кфар-Сабе через наш портал?",
            paragraphs: [
                "Кфар-Саба — комфортный город в регионе Шарон, но переезд здесь тоже требует планирования: удобные кварталы с домами разного типа, узкие подъезды в некоторых зданиях, правила парковки и ограниченный доступ для грузовиков в отдельных зонах.",
                "Наш портал — это агрегатор рекомендованных перевозчиков: вы получаете несколько предложений, сравниваете цены и выбираете лучшее по бюджету и условиям, без долгих звонков и переплат.",
            ],
            bulletsTitle: "Преимущества, которые экономят вам деньги и время:",
            bullets: [
                "Цены от 249 ₪: конкурентные предложения от проверенных перевозчиков.",
                "Экономия до 45%: сравнение ставок помогает не переплачивать.",
                "Только рекомендованные компании: фильтрация по качеству и отзывам.",
                "Услуги «под ключ»: упаковка, разборка/сборка, коробки, кран при необходимости.",
                "Гибкость по времени: можно найти перевозку заранее или срочно (по возможности).",
                "Маршруты по всей стране: внутри Кфар-Сабы, в/из центра и по Израилю.",
            ],
            note: "Важно: мы — портал (агрегатор), который связывает вас с перевозчиками. Мы не оформляем страховку самостоятельно. Ответственность за страхование имущества лежит на выбранной компании — рекомендуем заранее уточнить наличие действующего полиса страхования груза.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Кфар-Сабе — сколько это действительно стоит?",
            intro: "Стоимость переезда в Кфар-Сабе зависит от объёма вещей, этажа, наличия лифта, расстояния между адресами и условий подъезда к дому. Ниже — ориентиры по средним ценам по предложениям перевозчиков в городе.",
            tableLabel: "Прайс-лист перевозок в Кфар-Сабе",
            tableHeaders: [
                "Тип перевозки",
                "Ориентировочный диапазон цен в Кфар-Сабе",
                "Примечания",
            ],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes:
                        "Холодильник, диван, стиральная машина. Цена зависит от этажности.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студии",
                    priceRange: "600–1 200 ₪",
                    notes: "Часто подходит для арендаторов и небольших переездов.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 200–2 000 ₪",
                    notes: "Без лифта/сложный доступ может повысить стоимость.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 000–3 200 ₪",
                    notes: "Обычно включает базовую разборку/сборку мебели.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 800–4 500 ₪",
                    notes: "Рекомендуется предварительная оценка объёма.",
                },
                {
                    type: "Перевозка 5-комнатной квартиры / дома",
                    priceRange: "4 000–6 500 ₪",
                    notes: "Иногда нужен кран для крупной мебели/техники.",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Обычно стоимость за час работы.",
                },
            ],
            afterTable:
                "Цены — ориентировочные. Для точного расчёта (и часто более выгодной цены) заполните форму: перевозчики предложат ставки под ваш конкретный адрес и объём.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности переезда в Кфар-Сабе: парковка, доступ и этажность",
            intro:
                "Даже в спокойном городе переезд может быть непростым. Вот типичные моменты и как их обычно решают профессиональные перевозчики:",
            items: [
                {
                    title: "Парковка у дома:",
                    text:
                        "в отдельных районах сложно поставить грузовик у подъезда. Лучше заранее продумать место и, при необходимости, попросить управляющую компанию/соседей помочь освободить зону.",
                },
                {
                    title: "Этажи и лифт:",
                    text:
                        "если лифт маленький или отсутствует, время работ и нагрузка на бригаду увеличиваются. Для крупной мебели иногда выгоднее использовать подъёмный кран.",
                },
                {
                    title: "Чувствительные вещи и техника:",
                    text:
                        "телевизоры, стекло, бытовая техника и дорогая мебель требуют правильной упаковки — это снижает риск повреждений и ускоряет разгрузку на месте.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Кфар-Сабе — быстро и выгодно",
            intro:
                "Если вам нужно перевезти пару вещей или переехать из студии — не обязательно заказывать большую машину. Малые перевозки часто экономят и деньги, и время.",
            bullets: [
                "Подходят для перевозки дивана, кровати, шкафа, стиральной машины, нескольких коробок или техники.",
                "Меньшая машина проще с парковкой и доступом к подъезду.",
                "Стоимость обычно начинается от 249 ₪ за одну вещь в пределах города (в зависимости от этажности и условий).",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Кфар-Сабе",
            intro:
                "Офисный переезд требует аккуратности и чёткого плана, чтобы команда как можно быстрее вернулась к работе. Перевозчики, работающие через наш портал, часто предлагают:",
            bullets: [
                "Аккуратную упаковку техники, документов и оргтехники.",
                "Разборку/сборку столов, шкафов и рабочих мест.",
                "Возможность переезда в удобное время (вечером/в конце недели) — по договорённости.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл максимально спокойно, можно добавить услуги «под ключ»:",
            items: [
                {
                    title: "Профессиональная упаковка:",
                    text:
                        "бригада привозит коробки и материалы, упаковывает вещи по комнатам и подписывает коробки для удобной распаковки.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text:
                        "кровати, шкафы, стеллажи — аккуратно разбирают и собирают на новом месте, чтобы ничего не повредить.",
                },
                {
                    title: "Коробки и материалы:",
                    text:
                        "можно заказать коробки, скотч, пузырчатую плёнку — часто по цене ниже розничной.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "За сколько времени лучше заказывать перевозку в Кфар-Сабе?",
                    answer:
                        "В пиковые даты (лето, конец месяца) — лучше за 1–3 недели. В спокойные периоды можно найти перевозчика за несколько дней. Иногда возможны срочные варианты (по доступности).",
                },
                {
                    question: "Входит ли упаковка в стоимость?",
                    answer:
                        "Обычно нет — упаковка считается отдельной услугой. Но некоторые перевозчики предлагают пакетные варианты «под ключ».",
                },
                {
                    question: "Нужен ли подъёмный кран?",
                    answer:
                        "Если мебель не проходит в дверь/лифт или этаж высокий, кран может сэкономить время и снизить риск повреждений. Условия и стоимость зависят от объекта и времени работы.",
                },
                {
                    question: "Как выбрать надёжного перевозчика?",
                    answer:
                        "Через портал вы видите предложения и выбираете по цене/условиям. Мы подключаем перевозчиков, которые проходят отбор и получают рекомендации от клиентов.",
                },
            ],
        },
        closing: {
            text:
                "Планируете переезд в Кфар-Сабе? Получите несколько предложений, сравните цены и выберите самый выгодный вариант — без переплат и лишних звонков.",
        },
    },
    herzliyaMovePage: {
        slug: "перевозки-в-герцлии",
        metaTitle: "Перевозки в Герцлии недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Герцлии? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Небольшие перевозки, перевозка квартир и офисов — от 249 ₪. Упаковка, разборка/сборка, подъёмный кран и срочные перевозки.",
        title: "Герцлия: умное сравнение цен и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Герцлии",
        tocItems: [
            {
                id: "why-us",
                label: "Почему стоит заказать перевозку в Герцлии через наш портал?",
            },
            {
                id: "pricing",
                label: "Прайс-лист перевозок в Герцлии — сколько это действительно стоит?",
            },
            {
                id: "challenges",
                label: "Сложности перевозки в Герцлии: парковка, высотки и подъёмные краны",
            },
            {
                id: "small-moves",
                label:
                    "Небольшие перевозки в Герцлии — идеально для арендаторов и перевозки отдельных вещей",
            },
            {
                id: "office-moves",
                label: "Перевозка офисов и бизнеса в Герцлии (включая Герцлия-Питуах)",
            },
            {
                id: "extra-services",
                label: "Дополнительные услуги: упаковка, разборка и сборка",
            },
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],

        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Герцлии через наш портал?",
            paragraphs: [
                "Герцлия — удобный и престижный город у моря, но переезд здесь всё равно может быть непростым: плотные кварталы, ограниченная парковка у домов, а в новых районах — высотки с правилами по времени разгрузки.",
                "Наш портал — это агрегатор, который помогает найти оптимальный вариант: перевозчики конкурируют за ваш заказ, а вы выбираете по цене, условиям и отзывам — без лишних звонков и переплат.",
            ],
            bulletsTitle: "Преимущества, которые экономят вам деньги и время:",
            bullets: [
                "Честные цены: перевозки от 249 ₪ — вы видите диапазон до заказа.",
                "Экономия до 45%: сравнение предложений помогает избежать «туристических» цен.",
                "Только рекомендованные перевозчики: отбор по качеству сервиса и отзывам.",
                "Всё в одном месте: упаковка, разборка/сборка, подъёмный кран, хранение.",
                "Гибкость по времени: можно найти перевозку «день-в-день» (если есть свободные слоты).",
                "По всей стране: перевозки по Герцлии, из Герцлии и в Герцлию из любых городов.",
            ],
            note:
                "Важно: мы — портал-агрегатор, который связывает вас с рекомендованными перевозчиками. Мы не оформляем страховку самостоятельно. Ответственность за страхование имущества лежит на выбранной транспортной компании. Рекомендуем заранее уточнить наличие действующего полиса «страхование груза при перевозке» до начала работ.",
        },

        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Герцлии — сколько это действительно стоит?",
            intro:
                "Стоимость переезда в Герцлии зависит от объёма вещей, этажности, наличия лифта, расстояния и условий подъезда к дому. Ниже — ориентиры по средним ценам на основе предложений перевозчиков в городе.",
            tableLabel: "Прайс-лист перевозок в Герцлии",
            tableHeaders: [
                "Тип перевозки",
                "Ориентировочный диапазон цен в Герцлии",
                "Примечания",
            ],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes:
                        "Холодильник, диван, стиральная машина, шкаф. Цена зависит от этажности и доступа.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студии",
                    priceRange: "650–1 300 ₪",
                    notes: "Часто актуально для арендаторов и небольших переездов.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 250–2 100 ₪",
                    notes: "На цену влияет лифт и возможность парковки у подъезда.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 000–3 300 ₪",
                    notes: "Обычно включает базовую разборку/сборку мебели.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 900–4 700 ₪",
                    notes: "Рекомендуется предварительная оценка объёма.",
                },
                {
                    type: "Перевозка 5-комнатной квартиры / пентхауса",
                    priceRange: "4 200–6 800 ₪",
                    notes: "Часто требуется подъёмный кран (доплата).",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–550 ₪",
                    notes: "Обычно стоимость за час работы крана.",
                },
            ],
            afterTable:
                "Цены — ориентировочные. Для точного расчёта и более выгодного предложения заполните форму на сайте и сравните варианты.",
        },

        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Герцлии: парковка, высотки и подъёмные краны",
            intro: "Даже в «удобной» Герцлии есть нюансы, которые лучше учесть заранее:",
            items: [
                {
                    title: "Ограниченная парковка у дома:",
                    text:
                        "в некоторых районах сложно поставить грузовик прямо у подъезда. Хорошая практика — заранее «зарезервировать» место или согласовать точку разгрузки.",
                },
                {
                    title: "Высотные дома и правила управляющей компании:",
                    text:
                        "в новых проектах часто есть ограничения по времени для переездов и бронирование грузового лифта. Перевозчик подстроится, но лучше уточнить правила заранее.",
                },
                {
                    title: "Крупная мебель и узкие проходы:",
                    text:
                        "если диван/шкаф не проходит в лифт или дверной проём, подъёмный кран экономит время и снижает риск повреждений.",
                },
            ],
        },

        smallMoves: {
            id: "small-moves",
            title:
                "Небольшие перевозки в Герцлии — идеально для арендаторов и перевозки отдельных вещей",
            intro:
                "Не всегда нужен большой грузовик: иногда надо перевезти пару коробок, кровать или технику. Для таких задач подходят фургоны и небольшие машины — это быстрее и дешевле.",
            bullets: [
                "Подходит для студентов, арендаторов и точечных покупок (Facebook/Marketplace).",
                "Перевозят технику, мебель, коробки, личные вещи. Цена часто стартует от 249 ₪ в пределах города.",
            ],
        },

        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Герцлии (включая Герцлия-Питуах)",
            intro:
                "Герцлия-Питуах — один из деловых центров, и офисный переезд здесь важен «без остановки бизнеса». Перевозчики помогают организовать процесс аккуратно и по плану:",
            bullets: [
                "Упаковка техники и документов: ПК, мониторы, серверное, папки — с маркировкой.",
                "Гибкое время: переезд вечером/в пятницу, чтобы команда работала уже в воскресенье.",
                "Разборка/сборка: рабочие места, переговорные, шкафы и стеллажи.",
            ],
        },

        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro:
                "Чтобы переезд прошёл спокойнее, многие перевозчики предлагают дополнительные услуги:",
            items: [
                {
                    title: "Упаковка:",
                    text:
                        "команда упакует имущество в коробки, защитит хрупкое и промаркирует по комнатам.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "аккуратно разберут шкафы/кровати и соберут на новом месте.",
                },
                {
                    title: "Поставка материалов:",
                    text:
                        "коробки, скотч, пузырчатая плёнка и другие материалы — по запросу.",
                },
            ],
        },

        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Когда лучше бронировать перевозку в Герцлии?",
                    answer:
                        "Летом и в конце месяца лучше бронировать за 1–2 недели. В спокойные периоды можно найти варианты за несколько дней, иногда даже день-в-день.",
                },
                {
                    question: "Нужен ли подъёмный кран?",
                    answer:
                        "Если мебель не проходит в лифт/дверь или этаж высокий, кран часто решает проблему быстрее и безопаснее. Обычно оплачивается отдельно по часам.",
                },
                {
                    question: "Входит ли упаковка в цену?",
                    answer:
                        "Не всегда. Упаковка и материалы часто считаются отдельно — в форме можно указать, что вам нужен полный сервис.",
                },
                {
                    question: "Как понять, что перевозчик надёжен?",
                    answer:
                        "Мы работаем с рекомендованными перевозчиками и даём возможность сравнить условия и отзывы, чтобы вы выбирали осознанно.",
                },
            ],
        },

        closing: {
            text:
                "Планируете переезд в Герцлии? Заполните данные, получите предложения от рекомендованных перевозчиков и выберите самый выгодный вариант.",
        },
    },
    raananaMovePage: {
        slug: "перевозки-в-раанане",
        metaTitle: "Перевозки в Раанане недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Раанане? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Небольшие перевозки, перевозка квартир и офисов — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран и срочные перевозки.",

        title: "Раанана: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Раанане",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Раанане через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Раанане — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Раанане: парковки, подъезды и согласования"},
            {id: "small-moves", label: "Небольшие перевозки в Раанане — быстро и выгодно"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Раанане"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],

        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Раанане через наш портал?",
            paragraphs: [
                "Раанана — спокойный и зелёный город, но переезд здесь тоже может «съесть» нервы: закрытые жилые комплексы, правила управляющих компаний, ограничения по парковке у подъездов и лифтам по часам.",
                "Наш портал — агрегатор, который помогает сделать переезд проще и дешевле: перевозчики конкурируют за ваш заказ, а вы выбираете лучшее предложение по цене и условиям.",
            ],
            bulletsTitle: "Преимущества, которые экономят вам деньги и время:",
            bullets: [
                "Цены от 249 ₪: получаете конкурентные предложения вместо «цены с потолка».",
                "Экономия до 45%: сравнение нескольких офферов помогает реально снизить стоимость переезда.",
                "Проверенные перевозчики: работаем с рекомендованными компаниями и мастерами.",
                "Гибкие форматы: от одной вещи до переезда квартиры/дома и офиса.",
                "Удобное планирование: можно найти варианты «день-в-день» и заранее под нужную дату.",
                "По всему Израилю: перевозки внутри Раананы, из/в Раанану и по стране.",
            ],
            note:
                "Важно: мы — портал (сайт-агрегатор), который связывает вас с рекомендованными перевозчиками. Мы не предоставляем страховку самостоятельно. Ответственность за страхование имущества лежит на выбранном перевозчике. Рекомендуем заранее уточнить наличие действующего полиса «страхование груза при перевозке» до начала работ.",
        },

        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Раанане — сколько это действительно стоит?",
            intro:
                "Стоимость переезда в Раанане зависит от объёма вещей, этажа, наличия лифта, расстояния и необходимости согласований (например, въезд в закрытый комплекс или бронирование лифта). Ниже — ориентиры по средним ценам на основе предложений рекомендованных перевозчиков.",
            tableLabel: "Прайс-лист перевозок в Раанане",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Раанане", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина, шкаф. Цена зависит от этажа и доступа к подъезду."
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студента",
                    priceRange: "550–1 150 ₪",
                    notes: "Подходит для небольшого объёма и коротких переездов по городу."
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 100–1 900 ₪",
                    notes: "Если лифт маленький/занят по графику — цена может вырасти."
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "1 900–3 100 ₪",
                    notes: "Часто включает базовую разборку/сборку мебели."
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 700–4 400 ₪",
                    notes: "Рекомендуется предварительная оценка для точной цены."
                },
                {
                    type: "Перевозка 5-комнатной квартиры / дома",
                    priceRange: "3 800–6 300 ₪",
                    notes: "Иногда нужен подъёмный кран (доплата)."
                },
                {type: "Доплата за подъёмный кран", priceRange: "300–500 ₪", notes: "Стоимость за час работы крана."},
            ],
            afterTable:
                "Цены — ориентировочные. Точную стоимость и более выгодный расчёт вы получите после заполнения формы: перевозчики пришлют предложения под ваш объём и адрес.",
        },

        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Раанане: парковки, подъезды и согласования",
            intro:
                "Раанана комфортнее многих крупных городов, но есть свои нюансы. Вот что чаще всего влияет на сроки и цену переезда:",
            items: [
                {
                    title: "Закрытые комплексы и охрана:",
                    text:
                        "иногда нужен предварительный пропуск, согласование времени въезда и места разгрузки. Лучше сообщить об этом заранее — перевозчик подберёт оптимальный транспорт и команду.",
                },
                {
                    title: "Бронирование лифта и «часы тишины»:",
                    text:
                        "в новых домах бывает правило брони лифта и ограничения по шуму. Опытные перевозчики подстроят график и помогут уложиться в разрешённое время.",
                },
                {
                    title: "Подъезд к дому и парковка у входа:",
                    text:
                        "на некоторых улицах сложно остановиться рядом с подъездом. Решение — раннее время, компактный грузовик или быстрый челночный вынос.",
                },
            ],
        },

        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Раанане — быстро и выгодно",
            intro:
                "Если нужно перевезти пару вещей или небольшую студию — нет смысла переплачивать за большую машину. В Раанане особенно популярны «малые перевозки» для арендаторов, студентов и покупок с рук.",
            bullets: [
                "Фургоны и небольшие грузовики: дешевле, быстрее, удобнее во дворах и на узких улицах.",
                "Что перевозят чаще всего: холодильники, стиральные машины, диваны, кровати, шкафы, коробки. Цена — от 249 ₪ за одну вещь в пределах города.",
            ],
        },

        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Раанане",
            intro:
                "В Раанане много офисов, клиник и небольших компаний. Офисный переезд важен тем, что всё должно работать «на следующий день». Мы помогаем найти перевозчиков, которые умеют делать такие переезды аккуратно и по плану:",
            bullets: [
                "Упаковка техники и документов: компьютеры, периферия, архив — с маркировкой и защитой.",
                "Гибкое время: переезд вечером или в конце недели, чтобы минимально остановить работу.",
                "Разборка/сборка: столы, шкафы, перегородки — аккуратно и по месту.",
            ],
        },

        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro:
                "Чтобы переезд прошёл спокойно, перевозчики часто берут на себя всё «под ключ». Вот что можно добавить к заказу:",
            items: [
                {
                    title: "Услуги упаковки:",
                    text:
                        "команда упакует имущество в коробки, защитит хрупкое, промаркирует коробки по комнатам — так распаковка займёт меньше времени.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text:
                        "шкафы, кровати, стеллажи и рабочие столы аккуратно разберут и соберут уже в новой квартире/офисе.",
                },
                {
                    title: "Поставка коробок и материалов:",
                    text:
                        "скотч, пузырчатая плёнка, стрейч и коробки можно заказать заранее — часто по цене ниже, чем в рознице.",
                },
            ],
        },

        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "За сколько времени лучше заказывать перевозку в Раанане?",
                    answer:
                        "В пик сезона (лето, конец месяца) лучше бронировать за 1–2 недели. В спокойные периоды часто можно найти варианты за несколько дней, а иногда и «день-в-день».",
                },
                {
                    question: "Нужно ли предупреждать про закрытый комплекс или охрану?",
                    answer:
                        "Да — это важно. Если нужен пропуск или ограничен въезд, перевозчик заранее подготовит документы и подберёт транспорт подходящего размера.",
                },
                {
                    question: "Включены ли чаевые грузчикам в цену?",
                    answer:
                        "Обычно нет. Чаевые — на ваше усмотрение; часто дают 50–100 ₪ каждому грузчику в зависимости от сложности и качества сервиса.",
                },
                {
                    question: "Можно ли заказать подъёмный кран в Раанане?",
                    answer:
                        "Да. Если мебель не проходит в лифт/двери или высокий этаж — перевозчик организует кран. Оплата обычно почасовая и считается отдельно.",
                },
            ],
        },

        closing: {
            text:
                "Планируете переезд в Раанане? Не переплачивайте. Заполните форму, получите предложения от рекомендованных перевозчиков и выберите оптимальное по цене и условиям.",
        },
    },
    netanyaMovePage: {
        slug: "перевозки-в-нетании",
        metaTitle: "Перевозки в Нетании недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Нетании? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка, подъёмный кран при необходимости.",
        title: "Нетания: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Нетании",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Нетании через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Нетании — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Нетании: парковка, подъезды и сезонные нагрузки"},
            {id: "small-moves", label: "Небольшие перевозки в Нетании — быстро и без переплат"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Нетании"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Нетании через наш портал?",
            paragraphs: [
                "Нетания — прибрежный город с активным трафиком в часы пик и плотной застройкой в отдельных районах. Переезд здесь часто упирается в парковку, время разгрузки и нюансы подъезда к дому.",
                "Наш портал — это агрегатор, который помогает быстро сравнить предложения от рекомендованных перевозчиков и выбрать лучшее по цене и условиям. Перевозчики конкурируют за ваш заказ — вы выигрываете.",
            ],
            bulletsTitle: "Преимущества, которые экономят вам деньги и время:",
            bullets: [
                "Цена от 249 ₪: конкурентные предложения на перевозки по городу и по стране.",
                "Экономия до 45%: сравнивайте несколько вариантов и выбирайте выгоднее.",
                "Только рекомендованные перевозчики: работаем с проверенными командами.",
                "Комплекс услуг: упаковка, разборка/сборка, коробки, кран и другие опции.",
                "Гибкие сроки: можно найти перевозку заранее или «день-в-день» при наличии слотов.",
                "Маршруты по всему Израилю: из Нетании, в Нетанию и по стране.",
            ],
            note: "Важно: мы — портал-агрегатор, который связывает вас с перевозчиками. Мы не оформляем страховку самостоятельно. Ответственность за страхование груза лежит на выбранной компании. Рекомендуем заранее уточнить наличие действующего полиса «страхование груза при перевозке».",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Нетании — сколько это действительно стоит?",
            intro:
                "Цена зависит от объёма вещей, этажа, наличия лифта, удалённости парковки и сезона. Ниже — ориентиры по средним предложениям рекомендованных перевозчиков в Нетании.",
            tableLabel: "Прайс-лист перевозок в Нетании",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Нетании", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина. Зависит от этажа/лифта.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студента",
                    priceRange: "600–1 200 ₪",
                    notes: "Часто без разборки сложной мебели.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 200–2 100 ₪",
                    notes: "Если парковка далеко — возможна доплата.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 000–3 300 ₪",
                    notes: "Нередко включает базовую разборку/сборку.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 800–4 700 ₪",
                    notes: "Лучше согласовать состав мебели заранее.",
                },
                {
                    type: "Перевозка 5-комнатной квартиры / пентхауса",
                    priceRange: "4 000–6 800 ₪",
                    notes: "Иногда требуется подъёмный кран.",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Обычно почасово (зависит от условий).",
                },
            ],
            afterTable:
                "Цены — ориентировочные. Для точного расчёта заполните данные в форме, чтобы получить персональные предложения.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Нетании: парковка, подъезды и сезонные нагрузки",
            intro: "Чтобы переезд прошёл без лишних нервов, важно учитывать местные особенности:",
            items: [
                {
                    title: "Парковка у дома:",
                    text: "в некоторых кварталах место для грузовика найти непросто. Помогает ранний выезд и предварительное «резервирование» места.",
                },
                {
                    title: "Подъезды и лифты:",
                    text: "узкие проходы и небольшие лифты часто требуют частичной разборки мебели или использования подъёмного крана для крупногабарита.",
                },
                {
                    title: "Нагрузка в сезон:",
                    text: "летом и в конце месяца спрос выше — лучше бронировать заранее, чтобы выбрать лучшую цену и время.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Нетании — быстро и без переплат",
            intro:
                "Если нужно перевезти пару предметов или вещи из небольшой квартиры, нет смысла переплачивать за большую машину.",
            bullets: [
                "Фургоны и небольшие грузовики: оптимально по цене и манёвренности.",
                "Частые сценарии: диван, кровать, холодильник, стиральная машина, коробки.",
                "Стоимость: от 249 ₪ за одну вещь по городу (в зависимости от этажности и условий).",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Нетании",
            intro:
                "Офисный переезд важен тем, что время простоя — это деньги. Перевозчики помогают организовать всё быстро и аккуратно:",
            bullets: [
                "Упаковка техники и документов: маркировка, защита, аккуратная переноска.",
                "Гибкое время: вечер/пятница — чтобы команда вернулась к работе как можно быстрее.",
                "Разборка/сборка офисной мебели: столы, тумбы, шкафы, переговорные.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл максимально спокойно, можно заказать дополнительные опции:",
            items: [
                {
                    title: "Упаковка вещей:",
                    text: "поможем упаковать имущество в коробки, промаркировать и подготовить к перевозке.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "аккуратно разберут шкафы/кровати и соберут на новом месте.",
                },
                {
                    title: "Коробки и материалы:",
                    text: "скотч, плёнка, пузырчатая упаковка — можно получить через перевозчика.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "За сколько времени лучше бронировать перевозку в Нетании?",
                    answer:
                        "В высокий сезон и под конец месяца — за 1–3 недели. В спокойные периоды можно найти варианты за несколько дней, иногда и «день-в-день».",
                },
                {
                    question: "Входит ли разборка мебели в стоимость?",
                    answer:
                        "Зависит от перевозчика и объёма работ. Базовая разборка иногда включена, но лучше уточнить заранее и прописать в предложении.",
                },
                {
                    question: "Нужен ли подъёмный кран?",
                    answer:
                        "Если мебель не проходит в дверь/лифт или этаж высокий, кран часто экономит время и снижает риск повреждений. Обычно оплачивается отдельно (почасово).",
                },
                {
                    question: "Как выбрать надёжного перевозчика?",
                    answer:
                        "Сравните несколько предложений, задайте вопросы про опыт, упаковку и страховку. На портале вы получаете варианты от рекомендованных исполнителей.",
                },
            ],
        },
        closing: {
            text: "Планируете переезд в Нетании? Заполните данные в форме, получите предложения от рекомендованных перевозчиков и выберите самое выгодное.",
        },
    },
    ramatGanMovePage: {
        slug: "перевозки-в-рамат-гане",
        metaTitle: "Перевозки в Рамат-Гане недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Рамат-Гане? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Малые перевозки, квартиры и офисы — от 249 ₪. Упаковка, разборка/сборка, подъёмный кран и срочные переезды.",
        title: "Рамат-Ган: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Рамат-Гане",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Рамат-Гане через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Рамат-Гане — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Рамат-Гане: парковка, трафик и лифты"},
            {id: "small-moves", label: "Небольшие перевозки в Рамат-Гане — для студентов и отдельных вещей"},
            {id: "office-moves", label: "Переезд офиса и бизнеса в Рамат-Гане"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Рамат-Гане через наш портал?",
            paragraphs: [
                "Рамат-Ган — город рядом с Тель-Авивом, где легко столкнуться с плотным трафиком, ограничениями по парковке и домами с непростыми подъездами. Добавьте деловые районы и часы пик — и переезд без плана быстро превращается в стресс.",
                "Наш портал — агрегатор, который делает переезд проще и выгоднее: перевозчики конкурируют за ваш заказ, а вы выбираете оптимальную цену и условия.",
            ],
            bulletsTitle: "Преимущества, которые экономят вам деньги и время:",
            bullets: [
                "Честные цены: перевозки от 249 ₪ — без «сюрпризов» в последний момент.",
                "Экономия до 45%: сравнивайте предложения и выбирайте лучшее.",
                "Проверенные перевозчики: работаем с теми, кто прошёл отбор и имеет рекомендации.",
                "Полный комплекс услуг: упаковка, разборка/сборка, подъёмный кран, хранение.",
                "Гибкий график: срочные переезды «день-в-день», а также по согласованию — пятницы и праздники.",
                "По всей стране: переезды внутри Рамат-Гана, в/из Тель-Авива и по Израилю.",
            ],
            note: 'Важно: мы — портал (агрегатор), который связывает вас с рекомендованными транспортными компаниями. Мы не предоставляем страховку самостоятельно. Ответственность за страхование имущества лежит на выбранном перевозчике. Рекомендуем заранее подтвердить наличие действующего полиса «страхование груза при перевозке» до начала работ.',
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Рамат-Гане — сколько это действительно стоит?",
            intro:
                "Стоимость переезда в Рамат-Гане зависит от объёма вещей, этажа, наличия лифта, расстояния и удобства подъезда для грузовой машины. Ниже — ориентиры по средним ценам на основе предложений рекомендованных перевозчиков.",
            tableLabel: "Прайс-лист перевозок в Рамат-Гане",
            tableHeaders: [
                "Тип перевозки",
                "Ориентировочный диапазон цен в Рамат-Гане",
                "Примечания",
            ],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина, шкаф. Цена зависит от этажа и доступа к подъезду.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студента",
                    priceRange: "600–1 150 ₪",
                    notes: "Часто заказывают для небольших переездов внутри города и в/из Тель-Авива.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 150–1 950 ₪",
                    notes: "Если лифт маленький или парковка далеко — цена может вырасти.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "1 950–3 100 ₪",
                    notes: "Обычно включает базовую разборку/сборку мебели.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 700–4 400 ₪",
                    notes: "Рекомендуется предварительный осмотр для точной оценки.",
                },
                {
                    type: "Перевозка 5-комнатной квартиры / пентхауса",
                    priceRange: "3 900–6 400 ₪",
                    notes: "Иногда требуется подъёмный кран (доплата).",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Обычно тарификация за час работы.",
                },
            ],
            afterTable:
                "Цены указаны для ориентира. Чтобы получить точный расчёт и более выгодное предложение — заполните форму на сайте и сравните ответы перевозчиков.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Рамат-Гане: парковка, трафик и лифты",
            intro:
                "Рамат-Ган часто «чувствуется» как часть большого центра, поэтому планирование — ключ. Вот типовые сложности и решения:",
            items: [
                {
                    title: "Парковка у дома:",
                    text: "в некоторых районах сложно остановить грузовик рядом с подъездом. Решение — подобрать транспорт подходящего размера и заранее подготовить место для погрузки.",
                },
                {
                    title: "Лифты и узкие проходы:",
                    text: "в старых зданиях лифты маленькие, а лестничные пролёты узкие. Иногда выгоднее использовать подъёмный кран, чтобы поднять крупную мебель через окно/балкон.",
                },
                {
                    title: "Часы пик и пробки:",
                    text: "лучше планировать переезд ранним утром, чтобы сократить время в дороге и ускорить погрузку/разгрузку.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Рамат-Гане — для студентов и отдельных вещей",
            intro:
                "Если нужно перевезти пару коробок или одну крупную вещь, не обязательно заказывать большую машину. В Рамат-Гане популярны малые перевозки — быстро, гибко и дешевле.",
            bullets: [
                "Подберём перевозчика с фургоном или небольшим грузовиком под ваш объём вещей — это снижает стоимость.",
                "Что перевозят чаще всего: холодильники, стиральные машины, диваны, кровати, шкафы и коробки. Цена: от 249 ₪ за одну вещь в пределах города.",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Переезд офиса и бизнеса в Рамат-Гане",
            intro:
                "В Рамат-Гане много офисов и бизнес-центров — офисный переезд важен по срокам и аккуратности. Мы помогаем организовать переезд так, чтобы команда быстро вернулась к работе:",
            bullets: [
                "Упаковка техники и документов: аккуратно и с маркировкой по отделам/кабинетам.",
                "Гибкое время: вечерние переезды или по пятницам, чтобы минимально «останавливать» бизнес.",
                "Разборка и сборка: рабочие места, шкафы, перегородки, переговорные столы.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro:
                "Чтобы переезд прошёл спокойно, рекомендованные компании предлагают полный набор дополнительных услуг:",
            items: [
                {
                    title: "Услуги упаковки:",
                    text: "команда приедет в день переезда (или накануне), упакует имущество в качественные коробки и промаркирует по комнатам.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "аккуратная разборка шкафов/кроватей и профессиональная сборка на новом месте.",
                },
                {
                    title: "Поставка коробок:",
                    text: "коробки, скотч, пузырчатая плёнка и защитные материалы — можно заказать заранее.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "За сколько времени лучше заказывать перевозку в Рамат-Гане?",
                    answer:
                        "Летом и в конце месяца лучше бронировать за 1–2 недели. В более спокойные периоды часто можно найти варианты за несколько дней, а иногда и «день-в-день».",
                },
                {
                    question: "Включены ли чаевые грузчикам в цену?",
                    answer:
                        "Обычно нет. Часто оставляют 50–100 ₪ каждому грузчику — в зависимости от сложности и качества сервиса.",
                },
                {
                    question: "Как снизить стоимость переезда?",
                    answer:
                        "Уточните точный объём вещей, подготовьте коробки заранее и обеспечьте удобный доступ к подъезду. А главное — сравните несколько предложений через портал.",
                },
                {
                    question: "Можно ли заказать подъёмный кран?",
                    answer:
                        "Да. Если мебель не проходит в дверь/лифт или высокий этаж — перевозчик организует кран. Оплата чаще всего почасовая и идёт отдельно.",
                },
            ],
        },
        closing: {
            text: "Планируете переезд в Рамат-Гане? Заполните форму, получите предложения от проверенных перевозчиков и выберите самое выгодное по цене и условиям.",
        },
    },
    batYamMovePage: {
        slug: "перевозки-в-бат-яме",
        metaTitle: "Перевозки в Бат-Яме и центре страны недорого — от 249 ₪",
        metaDescription:
            "Нужна перевозка в Бат-Яме? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Небольшие перевозки, перевозка квартир и офисов — от 249 ₪. Упаковка, разборка/сборка мебели, подъёмный кран и срочные перевозки.",
        title: "Бат-Ям: умное сравнение цен и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Бат-Яме",
        tocItems: [
            {id: "why-us", label: "Почему стоит заказать перевозку в Бат-Яме через наш портал?"},
            {id: "pricing", label: "Прайс-лист перевозок в Бат-Яме — сколько это действительно стоит?"},
            {id: "challenges", label: "Сложности перевозки в Бат-Яме: подъезды, парковка и крупная мебель"},
            {id: "small-moves", label: "Небольшие перевозки в Бат-Яме — для студентов и перевозки отдельных вещей"},
            {id: "office-moves", label: "Перевозка офисов и бизнеса в Бат-Яме"},
            {id: "extra-services", label: "Дополнительные услуги: упаковка, разборка и сборка"},
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Бат-Яме через наш портал?",
            paragraphs: [
                "Бат-Ям — динамичный прибрежный город рядом с крупными транспортными развязками, и переезд здесь часто упирается в детали: где остановиться грузовику, как поднять крупную мебель, сколько времени займёт спуск/подъём по лестнице.",
                "Наш портал — агрегатор, который помогает сделать переезд проще и выгоднее. Мы не транспортная компания: у нас перевозчики конкурируют за ваш заказ, а вы выбираете лучшее предложение по цене и условиям.",
            ],
            bulletsTitle: "Преимущества, которые экономят вам деньги и время:",
            bullets: [
                "Низкие цены: перевозки от 249 ₪ (в зависимости от типа и объёма).",
                "Экономия до 45%: сравнивайте предложения и выбирайте оптимальное.",
                "Проверенные перевозчики: только компании с рекомендациями и опытом.",
                "Полный комплекс услуг: упаковка, разборка/сборка, подъёмный кран, хранение.",
                "Срочные перевозки: при необходимости можно найти вариант «день-в-день».",
                "Внутри Бат-Яма и по всей стране: переезды «туда-обратно» без лишних звонков.",
            ],
            note:
                "Обратите внимание: мы выступаем как портал (сайт-агрегатор), который связывает вас с рекомендованными транспортными компаниями. Мы не предоставляем страховку самостоятельно. Ответственность за страхование имущества лежит на выбранном перевозчике. Мы настоятельно рекомендуем заранее уточнить у выбранной компании наличие действующего полиса «страхование груза при перевозке» до начала работ.",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Бат-Яме — сколько это действительно стоит?",
            intro:
                "Сколько стоит перевезти квартиру в Бат-Яме? Цена зависит от объёма вещей, этажа, наличия лифта, расстояния и удобства подъезда для машины. Ниже — ориентиры по средним ценам по предложениям рекомендованных перевозчиков.",
            tableLabel: "Прайс-лист перевозок в Бат-Яме",
            tableHeaders: ["Тип перевозки", "Ориентировочный диапазон цен в Бат-Яме", "Примечания"],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина, шкаф. Цена зависит от этажа.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студента",
                    priceRange: "600–1 200 ₪",
                    notes: "Подходит для небольших переездов и арендаторов.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 200–2 000 ₪",
                    notes: "Цена может вырасти, если нет лифта или сложный подъезд.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 000–3 200 ₪",
                    notes: "Часто включает базовую разборку/сборку мебели.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 800–4 500 ₪",
                    notes: "Рекомендуется предварительный осмотр для точной оценки.",
                },
                {
                    type: "Перевозка 5-комнатной квартиры / пентхауса",
                    priceRange: "4 000–6 500 ₪",
                    notes: "Иногда требуется подъёмный кран (доплата).",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Обычно стоимость за час работы крана.",
                },
            ],
            afterTable:
                "Цены в таблице приведены для ориентира. Чтобы получить точный расчёт и часто — более выгодную цену, заполните форму на сайте и сравните предложения.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Бат-Яме: подъезды, парковка и крупная мебель",
            intro: "Даже в компактном городе переезд может стать сложным без подготовки. Вот что чаще всего влияет на цену и сроки:",
            items: [
                {
                    title: "Подъезд и парковка:",
                    text: "если к дому сложно подъехать или негде остановиться рядом с подъездом, погрузка занимает больше времени. Помогает заранее выбрать место для машины и уточнить правила парковки.",
                },
                {
                    title: "Лифт и этаж:",
                    text: "при отсутствии лифта или при маленьком лифте увеличивается объём ручной работы. Для крупной мебели иногда выгоднее использовать подъёмный кран через окно/балкон.",
                },
                {
                    title: "Крупногабарит и разборка:",
                    text: "шкафы, кровати и крупная техника часто требуют разборки/защиты. Профессиональная упаковка и правильная фиксация снижают риск повреждений.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Бат-Яме — для студентов и перевозки отдельных вещей",
            intro:
                "Не всегда нужен большой грузовик. Для пары предметов или небольшой квартиры удобнее фургон или малый грузовик — быстрее и дешевле.",
            bullets: [
                "Перевозка отдельных вещей: диваны, холодильники, стиральные машины, кровати, коробки — от 249 ₪ по городу.",
                "Гибкое время и экономия: малые перевозки часто проще подобрать на удобный день и час.",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и бизнеса в Бат-Яме",
            intro:
                "Офисный переезд важен тем, что простой бизнеса стоит дорого. Рекомендованные перевозчики помогают организовать всё аккуратно и по плану:",
            bullets: [
                "Упаковка техники и документов: компьютеры, мониторы, архивы и периферия.",
                "Переезд в удобное время: вечер, пятница или по согласованию, чтобы меньше мешать работе.",
                "Разборка/сборка мебели: рабочие места, стеллажи, переговорные столы.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл легко, перевозчики могут предложить дополнительные услуги «под ключ»:",
            items: [
                {
                    title: "Услуги упаковки:",
                    text: "команда упакует вещи в коробки, промаркирует по комнатам и защитит хрупкое."
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "аккуратно разберут шкафы/кровати и соберут на новом месте."
                },
                {title: "Поставка коробок:", text: "коробки, скотч, пузырчатая плёнка — можно заказать заранее."},
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "За сколько времени бронировать перевозку в Бат-Яме?",
                    answer:
                        "В пиковые периоды (лето, конец месяца) лучше бронировать за 1–3 недели. В менее загруженные недели часто можно найти варианты за несколько дней, а иногда и «день-в-день».",
                },
                {
                    question: "Включены ли чаевые грузчикам в цену?",
                    answer:
                        "Обычно нет. Чаевые — по желанию. Часто ориентируются на 50–100 ₪ каждому грузчику, в зависимости от сложности.",
                },
                {
                    question: "Как понять, что перевозчик надёжен?",
                    answer:
                        "На портале вы получаете предложения от перевозчиков, которые прошли отбор и имеют рекомендации. Сравнивайте условия, уточняйте детали и выбирайте комфортный вариант.",
                },
                {
                    question: "Можно ли заказать подъёмный кран?",
                    answer: "Да. Если мебель не проходит по лестнице/в лифт или этаж высокий, перевозчик организует кран. Обычно оплата отдельно, по часам.",
                },
            ],
        },
        closing: {
            text:
                "Планируете переезд в Бат-Яме? Сравните предложения, выберите лучшее по цене и условиям и не переплачивайте. Заполните форму — и получите варианты от рекомендованных перевозчиков.",
        },
    },
    metadata: {
        title: 'Default Title',
        description: 'Default Description',
        keywords: 'default, keywords, sharon, center, south, north, jerusalem',
    },
    givataimMovePage: {
        slug: "перевозки-в-гиватаиме",
        metaTitle: "Перевозки в Гиватаиме недорого — от 249 ₪",
        metaDescription:
            "Ищете перевозку в Гиватаиме? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45% на переезде. Небольшие перевозки, перевозка квартир и офисов — от 249 ₪. Упаковка, разборка/сборка и подъёмный кран при необходимости.",
        title: "Гиватаим: умное сравнение цен на перевозки и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Гиватаиме",
        tocItems: [
            {
                id: "why-us",
                label: "Почему стоит заказать перевозку в Гиватаиме через наш портал?",
            },
            {
                id: "pricing",
                label:
                    "Прайс-лист перевозок в Гиватаиме — сколько это действительно стоит?",
            },
            {
                id: "challenges",
                label: "Сложности перевозки в Гиватаиме: парковка, подъезды и этажи",
            },
            {
                id: "small-moves",
                label: "Небольшие перевозки в Гиватаиме — для студентов и отдельных вещей",
            },
            {id: "office-moves", label: "Перевозка офисов и малого бизнеса в Гиватаиме"},
            {
                id: "extra-services",
                label: "Дополнительные услуги: упаковка, разборка и сборка",
            },
            {id: "faq", label: "Часто задаваемые вопросы"},
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Гиватаиме через наш портал?",
            paragraphs: [
                "Гиватаим — уютный город рядом с Тель-Авивом: много жилых кварталов, плотная застройка и улицы, где не всегда просто остановить грузовик у подъезда. Переезд здесь легче, когда заранее понятны цена и логистика.",
                "Наш портал — это агрегатор: перевозчики конкурируют за ваш заказ, а вы сравниваете предложения и выбираете лучшее по цене и условиям. Мы не одна транспортная компания — мы площадка с проверенными исполнителями.",
            ],
            bulletsTitle: "Что вы получаете через наш сервис:",
            bullets: [
                "Честные цены: перевозки от 249 ₪ и понятные условия.",
                "Экономия до 45% за счёт сравнения нескольких предложений.",
                "Только рекомендованные перевозчики (проверка и отзывы).",
                "Всё в одном месте: упаковка, разборка/сборка, кран, хранение.",
                "Гибкость по времени: можно подобрать утро/вечер, пятницу, иногда «день-в-день».",
                "Маршруты: внутри Гиватаима, в/из Тель-Авива и по всей стране.",
            ],
            note: "Важно: мы выступаем как портал (сайт-агрегатор), который связывает вас с рекомендованными транспортными компаниями. Мы не предоставляем страховку самостоятельно. Ответственность за страхование имущества лежит на выбранном перевозчике. Рекомендуем заранее уточнить у компании наличие действующего полиса «страхование груза при перевозке».",
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Гиватаиме — сколько это действительно стоит?",
            intro: "Стоимость переезда в Гиватаиме зависит от объёма вещей, этажа, лифта и удобства подъезда к дому. Ниже — ориентиры по средним ценам на основе предложений рекомендованных перевозчиков.",
            tableLabel: "Прайс-лист перевозок в Гиватаиме",
            tableHeaders: [
                "Тип перевозки",
                "Ориентировочный диапазон цен в Гиватаиме",
                "Примечания",
            ],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Холодильник, диван, стиральная машина, шкаф. Цена зависит от этажа.",
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студента",
                    priceRange: "600–1 200 ₪",
                    notes: "Часто заказывают для переезда в соседние районы и в/из Тель-Авива.",
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 200–2 000 ₪",
                    notes: "Если нет лифта — цена может быть выше.",
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "2 000–3 200 ₪",
                    notes: "Обычно включает базовую разборку/сборку мебели.",
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 800–4 500 ₪",
                    notes: "Рекомендуется предварительный осмотр для точной оценки.",
                },
                {
                    type: "Перевозка 5-комнатной квартиры / пентхауса",
                    priceRange: "4 000–6 500 ₪",
                    notes: "Иногда нужен подъёмный кран (доплата).",
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Стоимость за час работы крана.",
                },
            ],
            afterTable:
                "Цены — ориентировочные. Для точного расчёта и более выгодной цены заполните форму на сайте.",
        },
        challenges: {
            id: "challenges",
            title: "Сложности перевозки в Гиватаиме: парковка, подъезды и этажи",
            intro: "Гиватаим компактный и жилой, поэтому ключевые сложности — это подъезд к дому и перенос вещей по этажам. Вот что важно учесть:",
            items: [
                {
                    title: "Парковка у подъезда:",
                    text: "на некоторых улицах сложно остановиться рядом с домом. Уточните заранее, где может встать машина, и по возможности «удержите» место личным авто.",
                },
                {
                    title: "Высокие этажи и узкие пролёты:",
                    text: "в старых домах мебель может не проходить по лестнице. В таких случаях кран экономит время и снижает риск повреждений.",
                },
                {
                    title: "Пиковые часы:",
                    text: "планируйте переезд на утро, чтобы проще было с парковкой и дорогами, особенно если едете через Тель-Авив.",
                },
            ],
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Гиватаиме — для студентов и отдельных вещей",
            intro: "Небольшие перевозки в Гиватаиме популярны: перевезти диван, технику или несколько коробок можно без большой машины.",
            bullets: [
                "Перевозчики с фургонами и небольшими грузовиками — обычно дешевле и быстрее по времени.",
                "Что перевозят чаще всего: холодильники, стиральные машины, диваны, кровати, шкафы, коробки. Цена: от 249 ₪ за одну вещь по городу.",
            ],
        },
        officeMoves: {
            id: "office-moves",
            title: "Перевозка офисов и малого бизнеса в Гиватаиме",
            intro: "В Гиватаиме много небольших офисов, студий и кабинетов. Переезд важно организовать так, чтобы бизнес не простаивал:",
            bullets: [
                "Аккуратная упаковка техники и документов.",
                "Гибкое время: вечер/пятница по договорённости.",
                "Разборка и сборка рабочих мест, шкафов и стеллажей.",
            ],
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл проще, перевозчики могут взять на себя дополнительные задачи:",
            items: [
                {
                    title: "Услуги упаковки:",
                    text: "упаковка вещей в коробки, маркировка по комнатам, защита хрупкого.",
                },
                {
                    title: "Разборка и сборка мебели:",
                    text: "аккуратно разберут и соберут шкафы, кровати, стеллажи на новом месте.",
                },
                {
                    title: "Поставка коробок:",
                    text: "коробки, скотч, пузырчатая плёнка — можно заказать заранее у перевозчика.",
                },
            ],
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "За сколько времени бронировать перевозку в Гиватаиме?",
                    answer:
                        "Летом и в конце месяца лучше за 1–2 недели. В более спокойные периоды — иногда достаточно нескольких дней.",
                },
                {
                    question: "Включены ли чаевые грузчикам в цену?",
                    answer:
                        "Обычно нет. Часто оставляют 50–100 ₪ каждому грузчику — по ситуации.",
                },
                {
                    question: "Как выбрать надёжного перевозчика?",
                    answer:
                        "Через наш портал вы получаете предложения от рекомендованных перевозчиков и можете сравнить условия и отзывы.",
                },
                {
                    question: "Когда нужен подъёмный кран?",
                    answer:
                        "Если мебель не проходит в дверь/лестницу, высокий этаж, маленький лифт — кран часто решает проблему быстрее и безопаснее.",
                },
            ],
        },
        closing: {
            text: "Планируете переезд в Гиватаиме? Заполните форму, получите предложения от лучших перевозчиков и выберите самое выгодное.",
        },
    },
    homeHero: {
        title: "РАСЧЕТ СТОИМОСТИ ПЕРЕВОЗКИ?",
        titleWithRegion: "РАСЧЕТ СТОИМОСТИ ПЕРЕВОЗКИ в {region}?",
        subtitle: "Получите предложения с ценами от перевозчиков онлайн!",
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
                    {label: "Тель-Авив", slug: "перевозки-в-тель-авиве"},
                    {label: "Рамат-Ган", slug: "перевозки-в-рамат-гане"},
                    {label: "Гиватаим", slug: "перевозки-в-гиватаиме"},
                    {label: "Холон", slug: "перевозки-в-холоне"},
                    {label: "Бат-Ям", slug: "перевозки-в-бат-яме"},
                ],
            },
            {
                title: "Равнина (Шарон)",
                slug: "sharon",
                image: "/images/sharon.png",
                carrierRegion: "sharon",
                cityLinks: [
                    {label: "Нетания", slug: "перевозки-в-нетании"},
                    {label: "Герцлия", slug: "перевозки-в-герцлии"},
                    {label: "Кфар-Саба", slug: "перевозки-в-кфар-сабе"},
                    {label: "Раанана", slug: "перевозки-в-раанане"},
                    {label: "Ход-ха-Шарон", slug: "перевозки-в-ход-ха-шароне"},
                ],
            },
            {
                title: "Низины (Шфела)",
                slug: "nizinnost",
                image: "/images/lowland.png",
                carrierRegion: "lowland",
                cityLinks: [
                    {label: "Ришон-ле-Цион", slug: "перевозки-в-ришон-ле-ционе"},
                    {label: "Реховот", slug: "перевозки-в-реховоте"},
                    {label: "Рамла", slug: "перевозки-в-рамле"},
                    {label: "Лод", slug: "перевозки-в-лоде"},
                    {label: "Ашдод", slug: "перевозки-в-ашдоде"},
                ],
            },
            {
                title: "Иерусалим и окрестности",
                slug: "ierusalim-i-okrestnosti",
                image: "/images/jerusalem.png",
                carrierRegion: "jerusalem",
                cityLinks: [
                    {label: "Иерусалим", slug: "перевозки-в-иерусалиме"},
                    {label: "Бейт-Шемеш", slug: "перевозки-в-бейт-шемеше"},
                    {label: "Маале-Адумим", slug: "перевозки-в-маале-адумим"},
                    {label: "Модиин", slug: "перевозки-в-моодиине"},
                    {label: "Мевасерет-Цион", slug: "перевозки-в-мевасерет-цион"},
                ],
            },
            {
                title: "Север",
                slug: "sever",
                image: "/images/north.png",
                carrierRegion: "north",
                cityLinks: [
                    {label: "Хайфа", slug: "перевозки-в-хайфе"},
                    {label: "Назарет", slug: "перевозки-в-назарете"},
                    {label: "Тверия", slug: "перевозки-в-тверии"},
                    {label: "Акко", slug: "перевозки-в-акко"},
                    {label: "Кармиэль", slug: "перевозки-в-кармиэле"},
                ],
            },
            {
                title: "Юг",
                slug: "yug",
                image: "/images/south.png",
                carrierRegion: "south",
                cityLinks: [
                    {label: "Беэр-Шева", slug: "перевозки-в-беэр-шеве"},
                    {label: "Ашкелон", slug: "перевозки-в-ашкелоне"},
                    {label: "Эйлат", slug: "перевозки-в-эйлате"},
                    {label: "Димона", slug: "перевозки-в-димоне"},
                    {label: "Нетивот", slug: "перевозки-в-нетивоте"},
                ],
            },
        ],
    },
    homeCarriers: {
        title: 'Рекомендуемые перевозчики',
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
                name: 'Urban Moving',
                region: 'south',
                image: '/images/carriers/urban-moving.png',
                url: 'https://urbanmoving.net/',
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "050-8318084"}
            },
            {
                name: 'שור הובלות',
                region: 'south',
                image: '/images/carriers/bull-moving.png',
                url: 'https://shor-hovalot.co.il/',
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "050-3073160"}
            },
            {
                name: 'Urban Moving',
                region: 'north',
                image: '/images/carriers/urban-moving.png',
                url: 'https://urbanmoving.net/',
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "050-8318084"}
            },
            {
                name: "שור הובלות",
                region: "north",
                image: "/images/carriers/bull-moving.png",
                url: "https://shor-hovalot.co.il",
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "050-3073160"}
            },
            {
                name: 'Urban Moving',
                region: 'jerusalem',
                image: '/images/jerusalem.png',
                url: 'https://urbanmoving.net/',
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "050-8318084"}
            },
            {
                name: "שור הובלות",
                region: "jerusalem",
                image: "/images/carriers/bull-moving.png",
                url: "https://shor-hovalot.co.il",
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "050-3073160"}
            },
            {
                name: 'Urban Moving',
                region: 'lowland',
                image: '/images/carries/urban-moving.png',
                url: 'https://urbanmoving.net/',
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "050-8318084"}
            },
            {
                name: "שור הובלות",
                region: "lowland",
                image: "/images/carriers/bull-moving.png",
                url: "https://shor-hovalot.co.il",
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "050-3073160"}
            },
            {
                name: 'Urban Moving',
                region: 'sharon',
                image: '/images/carriers/urban-moving.png',
                url: 'https://urbanmoving.net',
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "050-8318084"}
            },
            {
                name: "שור הובלות",
                region: "sharon",
                image: "/images/carriers/bull-moving.png",
                url: "https://shor-hovalot.co.il",
                contactInfo: {info: "Information", contacts: "contacts", phoneNumber: "050-3073160"}
            },
        ],
    },
    homeAbout: {
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
            {title: 'До 45% экономии — выбирайте лучшего перевозчика.', icon: 'economy.svg'},
            {title: 'Перевозки от 250 шекелей', icon: 'price.svg'},
            {title: 'Перевозки по всей стране', icon: 'country.svg'},
            {title: 'Экстренные перевозки 24/7 — день в день и вечерние выезды.', icon: 'express.svg'},
            {
                title: 'Полный комплекс услуг — от разборки и упаковки до аккуратной транспортировки.',
                icon: 'full-service.svg'
            },
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
                company: 'שור הובלות',
                review:
                    'Организовали перевозку за сутки: погрузили, аккуратно упаковали и доставили без единой царапины. Буду рекомендовать коллегам.',
                avatar: '/images/testimonials/person1.png',
                carrierUrl: 'https://shor-hovalot.co.il/',
                rating: 5,
            },
            {
                name: 'Антон',
                company: 'Urban Moving',
                review:
                    'Пунктуальная команда: приехали точно в оговоренное время и бережно отнеслись к вещам. Получилось даже дешевле, чем ожидали.',
                avatar: '/images/testimonials/person2.png',
                carrierUrl: 'https://urbanmoving.net',
                rating: 5,
            },
            {
                name: 'Даниэль Кац',
                company: 'Urban Moving',
                review:
                    'Заказывали офисный переезд. Удобный расчет стоимости, четкая коммуникация и отличная упаковка техники — все приехало целым.',
                avatar: '/images/testimonials/person3.png',
                carrierUrl: 'https://urbanmoving.net/',
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
        servicePlaceholder: "Выберите тип услуги",
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
        floorOptions: ["-3", "-2", "-1", "0", '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'],
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
        boxesLabel: 'Количество коробок',
        boxesPlaceholder: 'Выберите количество коробок',
        boxesOptions: [
            '1–10 — 1-комнатная квартира',
            '11–20 — 1-комнатная квартира',
            '21–30 — квартира 1–2 комнаты',
            '31–40 — квартира 1–2 комнаты',
            '41–50 — квартира 2–3 комнаты',
            '51–60 — 3-комнатная квартира',
            '61–70 — квартира 3–4 комнаты',
            '71–80 — квартира 3–4 комнаты',
            '81–100 — 4-комнатная квартира',
            '101–120 — квартира 4–5 комнат',
            '120–140 — 5-комнатная квартира',
            '140–160 — 6-комнатная квартира',
        ],
        roomTabsLabel: 'Комнаты',
        roomTabs: {
            all: "Все",
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
        removeLabel: 'Удалить предмет',
        assemblyLabel: 'Нужна разборка / сборка',
        submitCta: 'Рассчитать',
        successTitle: 'ЕЩЁ ОДИН ШАГ!',
        successMessage: 'Заполните форму, и перевозчики свяжутся с вами для уточнения всех деталей вашего переезда.',
        contactPrompt: 'Введите данные, чтобы мы связались с вами.',
        contactNameLabel: 'Имя',
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
            requiredServiceType: "Выберите тип услуги",
            requiredBoxesRange: 'Выберите количество коробок',
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
    houseMovePage: {
        slug: 'private-house',
        metaTitle: 'Private house move',
        metaDescription: 'Private house move description.',
        title: 'Private house move',
        tocTitle: 'Table of contents',
        tocItems: [],
        comparison: {
            id: 'why-compare',
            title: 'Why compare private house moves?',
            paragraphs: [],
            bullets: [],
        },
        process: {
            id: 'process',
            title: 'How to book a private house move?',
            intro: '',
            steps: [],
        },
        pricing: {
            id: 'pricing',
            title: 'Private house move pricing',
            intro: '',
            note: '',
            tableLabel: 'Private house move pricing',
            tableHeaders: [],
            rows: [],
            afterTable: '',
        },
        priceFactors: {
            id: 'price-factors',
            title: 'What affects the price?',
            items: [],
        },
        solutions: {
            id: 'solutions',
            title: 'Solutions for any move',
            intro: '',
            items: [],
        },
        tips: {
            id: 'tips',
            title: 'Preparation tips',
            intro: '',
            items: [],
        },
        faq: {
            id: 'faq',
            title: 'FAQ',
            items: [],
        },
        closing: {
            id: 'closing',
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
    haifaMovePage: {
        slug: '',
        metaTitle: '',
        metaDescription: '',
        title: '',
        tocTitle: '',
        tocItems: [],
        advantages: {
            id: 'advantages',
            title: '',
            bullets: [],
        },
        howToFind: {
            id: 'how-to-find',
            title: '',
            paragraphs: [],
            stepsTitle: '',
            steps: [],
            outro: '',
        },
        pricing: {
            id: 'pricing',
            title: '',
            intro: '',
            tableLabel: '',
            tableHeaders: [],
            rows: [],
            afterTable: '',
        },
        challenges: {
            id: 'challenges',
            title: '',
            items: [],
        },
        smallMoves: {
            id: 'small-moves',
            title: '',
            text: '',
        },
        services: {
            id: 'services',
            title: '',
            items: [],
        },
        faq: {
            id: 'faq',
            title: '',
            items: [],
        },
        closing: {
            id: 'closing',
            title: '',
            text: '',
            buttonLabel: '',
        },
    },
    priceListPage: {
        slug: '',
        metaTitle: '',
        metaDescription: '',
        title: '',
        tocTitle: '',
        tocItems: [],
        advantages: {
            id: 'advantages',
            title: '',
            intro: '',
            bullets: [],
        },
        calculator: {
            id: 'calculator',
            title: '',
            paragraphs: [],
        },
        apartmentPricing: {
            id: 'apartment-pricing',
            title: '',
            paragraphs: [],
            tableLabel: '',
            tableHeaders: [],
            rows: [],
        },
        smallMovePricing: {
            id: 'small-move-pricing',
            title: '',
            intro: '',
            tableLabel: '',
            tableHeaders: [],
            rows: [],
        },
        singleItemsPricing: {
            id: 'single-items-pricing',
            title: '',
            intro: '',
            tableLabel: '',
            tableHeaders: [],
            rows: [],
        },
        officePricing: {
            id: 'office-pricing',
            title: '',
            intro: '',
            tableLabel: '',
            tableHeaders: [],
            rows: [],
        },
        furniturePricing: {
            id: 'furniture-pricing',
            title: '',
            intro: '',
            tableLabel: '',
            tableHeaders: [],
            rows: [],
        },
        studentPricing: {
            id: 'student-pricing',
            title: '',
            intro: '',
            tableLabel: '',
            tableHeaders: [],
            rows: [],
        },
        specialPricing: {
            id: 'special-pricing',
            title: '',
            intro: '',
            tableLabel: '',
            tableHeaders: [],
            rows: [],
        },
        calculatorBestPrice: {
            id: 'calculator-best-price',
            title: '',
            paragraphs: [],
            steps: [],
            factorsTitle: '',
            factors: [],
            closing: '',
            cta: '',
        },
    },
    holonMovePage: {
        slug: "перевозки-в-холоне",
        metaTitle: "Перевозки в Холоне недорого — от 249 ₪",
        metaDescription: "Нужна перевозка в Холоне? Получите предложения от рекомендованных перевозчиков, сравните цены и сэкономьте до 45%. Квартиры, офисы и небольшие перевозки — от 249 ₪. Упаковка, разборка/сборка, подъёмный кран и срочные переезды.",
        title: "Перевозки в Холоне: сравнение цен и экономия до 45%",
        tocTitle: "Содержание: полный гид по переезду в Холоне",
        tocItems: [
            {
                id: "why-us",
                label: "Почему стоит заказать перевозку в Холоне через наш портал?"
            },
            {
                id: "pricing",
                label: "Прайс-лист перевозок в Холоне — сколько это действительно стоит?"
            },
            {
                id: "challenges",
                label: "Особенности перевозки в Холоне: подъезды, парковка и часы загрузки"
            },
            {
                id: "small-moves",
                label: "Небольшие перевозки в Холоне — для студентов и отдельных вещей"
            },
            {
                id: "office-moves",
                label: "Офисные переезды и перевозка бизнеса в Холоне"
            },
            {
                id: "extra-services",
                label: "Дополнительные услуги: упаковка, разборка и сборка"
            },
            {
                id: "faq",
                label: "Часто задаваемые вопросы"
            }
        ],
        why: {
            id: "why-us",
            title: "Почему стоит заказать перевозку в Холоне через наш портал?",
            paragraphs: [
                "Холон удобно расположен рядом с Тель-Авивом и Ришон-ле-Ционом, но переезд здесь всё равно требует грамотной организации: подъезды, лифты, узкие лестницы и загруженные часы на основных дорогах легко добавляют времени и лишних расходов.",
                "Наш портал — это агрегатор: перевозчики конкурируют за ваш заказ, а вы получаете несколько ценовых предложений и выбираете лучшее по цене и условиям."
            ],
            bulletsTitle: "Что вы получаете через наш сервис:",
            bullets: [
                "Перевозки от 249 ₪: честные и конкурентные цены.",
                "Экономия до 45% благодаря сравнению предложений.",
                "Рекомендованные перевозчики: отбор и контроль качества.",
                "Услуги «под ключ»: упаковка, разборка/сборка, кран, хранение.",
                "Гибкие даты: переезды в короткие сроки, по договорённости — в пятницу и в праздники.",
                "Маршруты по всему Израилю: внутри Холона, из Холона и в Холон."
            ],
            note: "Важно: мы — портал, который соединяет вас с транспортными компаниями. Мы не предоставляем страховку напрямую. Уточняйте наличие действующего полиса «страхование груза при перевозке» у выбранного перевозчика до начала работ."
        },
        pricing: {
            id: "pricing",
            title: "Прайс-лист перевозок в Холоне — сколько это действительно стоит?",
            intro: "Цена переезда в Холоне зависит от объёма вещей, этажности, наличия лифта, расстояния и сезона. Ниже — ориентиры по средним ценам на основе предложений наших перевозчиков.",
            tableLabel: "Прайс-лист перевозок в Холоне",
            tableHeaders: [
                "Тип перевозки",
                "Ориентировочный диапазон цен в Холоне",
                "Примечания"
            ],
            rows: [
                {
                    type: "Перевозка одной вещи",
                    priceRange: "249–450 ₪",
                    notes: "Диван, холодильник, стиральная машина. Влияет этаж и лифт."
                },
                {
                    type: "Перевозка 1-комнатной квартиры / студента",
                    priceRange: "550–1 150 ₪",
                    notes: "Часто без большой мебели, выгодно на небольшом транспорте."
                },
                {
                    type: "Перевозка 2-комнатной квартиры",
                    priceRange: "1 100–1 900 ₪",
                    notes: "Без лифта стоимость может быть выше."
                },
                {
                    type: "Перевозка 3-комнатной квартиры",
                    priceRange: "1 900–3 100 ₪",
                    notes: "Обычно включает базовую разборку/сборку."
                },
                {
                    type: "Перевозка 4-комнатной квартиры",
                    priceRange: "2 700–4 400 ₪",
                    notes: "Рекомендуется предварительный осмотр для точной оценки."
                },
                {
                    type: "Перевозка 5-комнатной квартиры / пентхауса",
                    priceRange: "3 900–6 300 ₪",
                    notes: "Иногда нужен подъёмный кран (доплата)."
                },
                {
                    type: "Доплата за подъёмный кран",
                    priceRange: "300–500 ₪",
                    notes: "Чаще всего почасовая оплата."
                }
            ],
            afterTable: "Цены указаны для ориентира. Для точного расчёта заполните данные и получите несколько предложений под вашу задачу."
        },
        challenges: {
            id: "challenges",
            title: "Особенности перевозки в Холоне: подъезды, парковка и часы загрузки",
            intro: "Холон сочетает новые кварталы и старую застройку, поэтому важно учитывать детали на месте. Вот что чаще всего влияет на переезд:",
            items: [
                {
                    "title": "Подъезды и лифты:",
                    "text": "в части домов лифты небольшие, а лестницы узкие — иногда удобнее использовать подъёмный кран для крупной мебели."
                },
                {
                    "title": "Парковка у подъезда:",
                    "text": "на некоторых улицах сложно остановиться грузовику. Рекомендуем заранее продумать место и время прибытия."
                },
                {
                    "title": "Загруженные часы:",
                    "text": "лучше планировать перевозку на раннее утро, чтобы быстрее пройти ключевые развязки и сократить время в пути."
                }
            ]
        },
        smallMoves: {
            id: "small-moves",
            title: "Небольшие перевозки в Холоне — для студентов и отдельных вещей",
            intro: "Нужен мини-переезд или доставка одной покупки? Для Холона часто выгоднее фургон или небольшой грузовик — быстрее и дешевле.",
            bullets: [
                "Сеть перевозчиков с небольшим транспортом: гибкое время и более низкая цена.",
                "Что перевозят: диваны, кровати, шкафы, технику, коробки. Старт — от 249 ₪ в пределах города."
            ]
        },
        officeMoves: {
            id: "office-moves",
            title: "Офисные переезды и перевозка бизнеса в Холоне",
            intro: "Переезд офиса важен по срокам: техника, документы, мебель — всё должно приехать без простоев. Мы помогаем найти перевозчиков под бизнес-задачи:",
            bullets: [
                "Аккуратная упаковка техники и документов.",
                "Гибкое время: вечер/пятница — чтобы не останавливать работу.",
                "Разборка/сборка рабочих мест, шкафов и переговорных столов."
            ]
        },
        extraServices: {
            id: "extra-services",
            title: "Дополнительные услуги: упаковка, разборка и сборка",
            intro: "Чтобы переезд прошёл спокойно, можно подключить дополнительные услуги от перевозчика:",
            items: [
                {
                    "title": "Услуги упаковки:",
                    "text": "команда упакует имущество в коробки, промаркирует по комнатам и подготовит к перевозке."
                },
                {
                    "title": "Разборка и сборка мебели:",
                    "text": "аккуратная разборка шкафов/кроватей и сборка на новом месте."
                },
                {
                    "title": "Поставка коробок:",
                    "text": "коробки, скотч и плёнка — по договорённости, часто по хорошей цене."
                }
            ]
        },
        faq: {
            id: "faq",
            title: "Часто задаваемые вопросы",
            items: [
                {
                    "question": "За сколько времени бронировать перевозку в Холоне?",
                    "answer": "Летом и в конце месяца лучше за 1–3 недели. В спокойные периоды часто можно найти слот за несколько дней, иногда даже день-в-день."
                },
                {
                    "question": "Входит ли разборка мебели в цену?",
                    "answer": "Зависит от предложения перевозчика. Обычно базовая разборка/сборка оговаривается отдельно в деталях заказа."
                },
                {
                    "question": "Как получить честную цену?",
                    "answer": "Заполните данные максимально точно (этаж, лифт, объём, адреса) — тогда предложения будут ближе к финальной стоимости."
                },
                {
                    "question": "Можно ли заказать подъёмный кран?",
                    "answer": "Да. Если мебель не проходит по лестнице/в лифт или этаж высокий, перевозчик организует кран. Обычно оплачивается отдельно."
                }
            ]
        },
        closing: {
            text: "Переезжаете в Холоне? Заполните форму, получите несколько предложений от рекомендованных перевозчиков и выберите лучшее по цене и условиям."
        }
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
    contactPage: {
        metaTitle: 'Контакты | Обратная связь по перевозкам',
        metaDescription: 'Страница контактов для отзывов, предложений и замечаний. Напишите нам через форму — мы оперативно ответим на ваше обращение.',
        breadcrumbCurrent: 'Контакты',
        heroTitle: 'СВЯЗАТЬСЯ С НАМИ',
        nameLabel: 'Имя',
        namePlaceholder: 'Введите имя',
        emailLabel: 'Почта',
        emailPlaceholder: 'Введите email',
        commentLabel: 'Текст комментария',
        commentPlaceholder: 'Напишите ваш отзыв, предложение или замечание',
        submitLabel: 'Отправить',
        submittingLabel: 'Отправка...',
        submitError: 'Не удалось отправить сообщение. Попробуйте еще раз.',
        submissionSuccessMessage: 'ВАШЕ СООБЩЕНИЕ ОТПРАВЛЕНО',
        validation: {
            requiredName: 'Укажите ваше имя',
            requiredEmail: 'Укажите вашу почту',
            requiredComment: 'Введите текст комментария',
        },
    },
    company: {
        name: "Ваша транспортная компания",
        address: "",
        phone: "+972501234567",
        phoneFormatted: "050-123-4567",
        email: "maavar.israel@gmail.com",
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
            "leaveReview": "Leave a review",
            "terms": "Terms"
        },
        languageSwitcher: {
            he: 'Hebrew',
            ru: 'Russian',
            en: 'English',
        },
        slogan: "Отсюда начинается переезд"
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
                    {label: 'Рекомендуемые перевозчики', anchor: 'carriers'},
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
                    {label: 'Facebook', href: 'https://www.facebook.com/share/18KG6Lz3vM/?mibextid=wwXIfr', network: 'facebook'},
                    {label: 'WhatsApp', href: 'https://wa.me/', network: 'whatsapp'},
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
            houseMovePage: {
                ...defaultDictionary.houseMovePage,
                ...loadedDict.houseMovePage,
            },
            smallMovePage: {
                ...defaultDictionary.smallMovePage,
                ...loadedDict.smallMovePage,
            },
            haifaMovePage: {
                ...defaultDictionary.haifaMovePage,
                ...loadedDict.haifaMovePage,
            },
            priceListPage: {
                ...defaultDictionary.priceListPage,
                ...loadedDict.priceListPage,
            },
            telAvivMovePage: {
                ...defaultDictionary.telAvivMovePage,
                ...loadedDict.telAvivMovePage,
            },
            ramatGanMovePage: {...defaultDictionary.ramatGanMovePage, ...loadedDict.ramatGanMovePage},
            holonMovePage: {
                ...defaultDictionary.holonMovePage,
                ...loadedDict.holonMovePage,
            },
            givataimMovePage: {
                ...defaultDictionary.givataimMovePage,
                ...loadedDict.givataimMovePage,
            },
            batYamMovePage: {...defaultDictionary.batYamMovePage, ...loadedDict.batYamMovePage},
            raananaMovePage: {...defaultDictionary.raananaMovePage, ...loadedDict.raananaMovePage},
            rishonLeZionMovePage: {...defaultDictionary.rishonLeZionMovePage, ...loadedDict.rishonLeZionMovePage},
            hodHaSharonMovePage: {...defaultDictionary.hodHaSharonMovePage, ...loadedDict.hodHaSharonMovePage},
            kfarSabaMovePage: {...defaultDictionary.kfarSabaMovePage, ...loadedDict.kfarSabaMovePage},
            herzliyaMovePage: {...defaultDictionary.herzliyaMovePage, ...loadedDict.herzliyaMovePage},
            netanyaMovePage: {...defaultDictionary.netanyaMovePage, ...loadedDict.netanyaMovePage},

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
            contactPage: {
                ...defaultDictionary.contactPage,
                ...loadedDict.contactPage,
                validation: {
                    ...defaultDictionary.contactPage.validation,
                    ...loadedDict.contactPage?.validation,
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

