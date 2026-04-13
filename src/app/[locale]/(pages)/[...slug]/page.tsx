import {Metadata} from 'next';
import {Locale} from '../../../../../i18n-config';
import {getAllDictionaries, getDictionary} from '@/lib/dictionaries';
import {
    buildLanguageAlternates,
    buildLocalizedPath,
    joinLocalizedPath,
    resolveRouteKey,
    RouteKey,
} from '@/lib/localized-paths';
import {DEFAULT_LOCALE, SITE_URL, SUPPORTED_LOCALES} from '@/lib/site-config';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import ArticlesSection from '@/components/home/ArticlesSection';
import BookingBanner from '@/components/home/BookingBanner';
import RegionAdvantagesSection from '@/components/regions/RegionAdvantagesSection';
import RegionCarriersSection from '@/components/regions/RegionCarriersSection';
import RegionTransportTableSection from '@/components/regions/RegionTransportTableSection';
import ApartmentMovePage from '@/components/transportation/ApartmentMovePage';
import HouseMovePage from '@/components/transportation/HouseMovePage';
import OfficeMovePage from '@/components/transportation/OfficeMovePage';
import SmallMovePage from '@/components/transportation/SmallMovePage';
import PriceListPage from '@/components/transportation/PriceListPage';
import PianoMovePage from '@/components/transportation/PianoMovePage';
import TelAvivMovePage from '@/components/transportation/TelAvivMovePage';
import HaifaMovePage from '@/components/transportation/HaifaMovePage';
import PackingPage from '@/components/services/PackingPage';
import StoragePage from '@/components/services/StoragePage';
import styles from './region.module.scss';
import HolonMovePage from "@/components/transportation/HolonMovePage";
import GivataimMovePage from "@/components/transportation/GivataimMovePage";
import BatYamMovePage from "@/components/transportation/BatYamMovePage";
import RamatGanMovePage from "@/components/transportation/RamatGanMovePage";
import NetanyaMovePage from "@/components/transportation/NetanyaMovePage";
import RaananaMovePage from "@/components/transportation/RaananaMovePage";
import HerzliyaMovePage from "@/components/transportation/HerzliyaMovePage";
import KfarSabaMovePage from "@/components/transportation/KfarSabaMovePage";
import HodHaSharonMovePage from "@/components/transportation/HodHaSharonMovePage";
import RishonLeZionMovePage from "@/components/transportation/RishonLeZionMovePage";
import LodMovePage from "@/components/transportation/LodMovePage";
import RehovotMovePage from "@/components/transportation/RehovotMovePage";
import AshdodMovePage from "@/components/transportation/AshdodMovePage";
import RamlaMovePage from "@/components/transportation/RamlaMovePage";
import JerusalemMovePage from "@/components/transportation/JerusalemMovePage";
import ModiinMovePage from "@/components/transportation/ModiinMovePage";
import BeitShemeshMovePage from "@/components/transportation/BeitShemeshMovePage";
import MevaseretZionMovePage from "@/components/transportation/MevaseretZionMovePage";
import MaaleAdumimMovePage from "@/components/transportation/MaaleAdumimMovePage";
import AkkoMovePage from "@/components/transportation/AkkoMovePage";
import NazarethMovePage from "@/components/transportation/NazarethMovePage";
import KarmielMovePage from "@/components/transportation/KarmielMovePage";
import TiberiasMovePage from "@/components/transportation/TiberiasMovePage";
import BeerShevaMovePage from "@/components/transportation/BeerShevaMovePage";
import DimonaMovePage from "@/components/transportation/DimonaMovePage";
import AshkelonMovePage from "@/components/transportation/AshkelonMovePage";
import NetivotMovePage from "@/components/transportation/NetivotMovePage";
import EilatMovePage from "@/components/transportation/EilatMovePage";

interface Props {
    params: Promise<{ locale: Locale; slug: string[] }>;
}

function decodeSlugSegment(value?: string) {
    if (!value) return value;
    return value.includes('%') ? decodeURIComponent(value) : value;
}

function getRouteFromSlug(locale: Locale, slug?: string[]): RouteKey {
    if (!slug || slug.length === 0) return 'home';
    const matched = resolveRouteKey(locale, decodeSlugSegment(slug[0]) ?? slug[0]);
    return matched || 'home';
}

function formatRegionTemplate(template: string, region: string): string {
    return template.replace('{region}', region);
}

function buildSmallMovePath(locale: Locale, slug: string) {
    return `${buildLocalizedPath(locale, 'transportation')}/${slug}`;
}

function isSmallMoveSlug(slug: string[], smallMoveSlug: string) {
    return slug[0] === smallMoveSlug || slug[1] === smallMoveSlug;
}

function buildPriceListPath(locale: Locale, slug: string) {
    return `${buildLocalizedPath(locale, 'transportation')}/${slug}`;
}

function isPriceListSlug(slug: string[], priceListSlug: string) {
    return slug[0] === priceListSlug || slug[1] === priceListSlug;
}

function buildPianoMovePath(locale: Locale, slug: string) {
    return `${buildLocalizedPath(locale, 'transportation')}/${slug}`;
}

function isPianoMoveSlug(slug: string[], pianoMoveSlug: string) {
    return slug[0] === pianoMoveSlug || slug[1] === pianoMoveSlug;
}

function buildTelAvivMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isTelAvivMoveSlug(slug: string[], telAvivMoveSlug: string) {
    return slug[0] === telAvivMoveSlug || slug[1] === telAvivMoveSlug;
}

function buildHolonMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isHolonMoveSlug(slug: string[], holonMoveSlug: string) {
    return slug[0] === holonMoveSlug || slug[1] === holonMoveSlug;
}

function buildGivataimMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isGivataimMoveSlug(slug: string[], givataimMoveSlug: string) {
    return slug[0] === givataimMoveSlug || slug[1] === givataimMoveSlug;
}

function buildBatYamMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isBatYamMoveSlug(slug: string[], batYamMoveSlug: string) {
    return slug[0] === batYamMoveSlug || slug[1] === batYamMoveSlug;
}

function buildRamatGanMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isRamatGanMoveSlug(slug: string[], ramatGanMoveSlug: string) {
    return slug[0] === ramatGanMoveSlug || slug[1] === ramatGanMoveSlug;
}

function buildNetanyaMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isNetanyaMoveSlug(slug: string[], netanyaMoveSlug: string) {
    return slug[0] === netanyaMoveSlug || slug[1] === netanyaMoveSlug;
}

function buildRaananaMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isRaananaMoveSlug(slug: string[], raananaMoveSlug: string) {
    return slug[0] === raananaMoveSlug || slug[1] === raananaMoveSlug;
}

function buildHerzliyaMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isHerzliyaMoveSlug(slug: string[], herzliyaMoveSlug: string) {
    return slug[0] === herzliyaMoveSlug || slug[1] === herzliyaMoveSlug;
}

function buildKfarSabaMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isKfarSabaMoveSlug(slug: string[], kfarSabaMoveSlug: string) {
    return slug[0] === kfarSabaMoveSlug || slug[1] === kfarSabaMoveSlug;
}

function buildHodHaSharonMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isHodHaSharonMoveSlug(slug: string[], hodHaSharonMoveSlug: string) {
    return slug[0] === hodHaSharonMoveSlug || slug[1] === hodHaSharonMoveSlug;
}

function buildRishonLeZionMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isRishonLeZionMoveSlug(slug: string[], rishonLeZionMoveSlug: string) {
    return slug[0] === rishonLeZionMoveSlug || slug[1] === rishonLeZionMoveSlug;
}

function buildLodZionMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isLodMoveSlug(slug: string[], lodMoveSlug: string) {
    return slug[0] === lodMoveSlug || slug[1] === lodMoveSlug;
}

function buildRehovotMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isRehovotMoveSlug(slug: string[], rehovotMoveSlug: string) {
    return slug[0] === rehovotMoveSlug || slug[1] === rehovotMoveSlug;
}

function buildAshdodMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isAshdodMoveSlug(slug: string[], ashdodMoveSlug: string) {
    return slug[0] === ashdodMoveSlug || slug[1] === ashdodMoveSlug;
}

function buildRamlaMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isRamlaMoveSlug(slug: string[], ramlaMoveSlug: string) {
    return slug[0] === ramlaMoveSlug || slug[1] === ramlaMoveSlug;
}
function buildJerusalemMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isJerusalemMoveSlug(slug: string[], jerusalemMoveSlug: string) {
    return slug[0] === jerusalemMoveSlug || slug[1] === jerusalemMoveSlug;
}
function buildModiinMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isModiinMoveSlug(slug: string[], modiinMoveSlug: string) {
    return slug[0] === modiinMoveSlug || slug[1] === modiinMoveSlug;
}
function buildBeitShemeshMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isBeitShemeshMoveSlug(slug: string[], beitShemeshMoveSlug: string) {
    return slug[0] === beitShemeshMoveSlug || slug[1] === beitShemeshMoveSlug;
}
function buildMevaseretZionMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isMevaseretZionMoveSlug(slug: string[], mevaseretZionMoveSlug: string) {
    return slug[0] === mevaseretZionMoveSlug || slug[1] === mevaseretZionMoveSlug;
}
function buildMaaleAdumimMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isMaaleAdumimMoveSlug(slug: string[], maaleAdumimMoveSlug: string) {
    return slug[0] === maaleAdumimMoveSlug || slug[1] === maaleAdumimMoveSlug;
}
function buildAkkoMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isAkkoMoveSlug(slug: string[], akkoMoveSlug: string) {
    return slug[0] === akkoMoveSlug || slug[1] === akkoMoveSlug;
}
function buildNazarethMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isNazarethMoveSlug(slug: string[], nazarethMoveSlug: string) {
    return slug[0] === nazarethMoveSlug || slug[1] === nazarethMoveSlug;
}
function buildKarmielMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isKarmielMoveSlug(slug: string[], karmielMoveSlug: string) {
    return slug[0] === karmielMoveSlug || slug[1] === karmielMoveSlug;
}
function buildTiberiasMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isTiberiasMoveSlug(slug: string[], tiberiasMoveSlug: string) {
    return slug[0] === tiberiasMoveSlug || slug[1] === tiberiasMoveSlug;
}
function buildBeerShevaMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isBeerShevaMoveSlug(slug: string[], beerShevaMoveSlug: string) {
    return slug[0] === beerShevaMoveSlug || slug[1] === beerShevaMoveSlug;
}
function buildDimonaMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isDimonaMoveSlug(slug: string[], dimonaMoveSlug: string) {
    return slug[0] === dimonaMoveSlug || slug[1] === dimonaMoveSlug;
}
function buildAshkelonMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isAshkelonMoveSlug(slug: string[], ashkelonMoveSlug: string) {
    return slug[0] === ashkelonMoveSlug || slug[1] === ashkelonMoveSlug;
}
function buildNetivotMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isNetivotMoveSlug(slug: string[], netivotMoveSlug: string) {
    return slug[0] === netivotMoveSlug || slug[1] === netivotMoveSlug;
}

function buildEilatMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isEilatMoveSlug(slug: string[], eilatMoveSlug: string) {
    return slug[0] === eilatMoveSlug || slug[1] === eilatMoveSlug;
}

function buildHaifaMovePath(locale: Locale, slug: string) {
    return `${joinLocalizedPath(buildLocalizedPath(locale, 'home'), slug)}`;
}

function isHaifaMoveSlug(slug: string[], haifaMoveSlug: string) {
    return slug[0] === haifaMoveSlug || slug[1] === haifaMoveSlug;
}

const lateMoveSlugsByLocale: Record<Locale, string> = {
    he: 'הובלות-מאוחרות',
    ru: 'поздние-перевозки',
    en: 'late-moves',
};

function buildLateMovePath(locale: Locale) {
    return `${buildLocalizedPath(locale, 'transportation')}/${lateMoveSlugsByLocale[locale]}`;
}

function isLateMoveSlug(slug: string[], locale: Locale) {
    const lateSlug = lateMoveSlugsByLocale[locale];
    return slug[0] === lateSlug || slug[1] === lateSlug;
}

function buildApartmentMovePath(locale: Locale, slug: string) {
    return `${buildLocalizedPath(locale, 'transportation')}/${slug}`;
}

function isApartmentMoveSlug(slug: string[], apartmentMoveSlug: string) {
    return slug[0] === apartmentMoveSlug || slug[1] === apartmentMoveSlug;
}

function buildOfficeMovePath(locale: Locale, slug: string) {
    return `${buildLocalizedPath(locale, 'transportation')}/${slug}`;
}

function isOfficeMoveSlug(slug: string[], officeMoveSlug: string) {
    return slug[0] === officeMoveSlug || slug[1] === officeMoveSlug;
}

function buildHouseMovePath(locale: Locale, slug: string) {
    return `${buildLocalizedPath(locale, 'transportation')}/${slug}`;
}

function isHouseMoveSlug(slug: string[], houseMoveSlug: string) {
    return slug[0] === houseMoveSlug || slug[1] === houseMoveSlug;
}

function buildPackingPath(locale: Locale, slug: string) {
    return `${buildLocalizedPath(locale, 'services')}/${slug}`;
}

function isPackingSlug(slug: string[], packingSlug: string) {
    return slug[0] === packingSlug || slug[1] === packingSlug;
}

function buildStoragePath(locale: Locale, slug: string) {
    return `${buildLocalizedPath(locale, 'services')}/${slug}`;
}

function isStorageSlug(slug: string[], storageSlug: string) {
    return slug[0] === storageSlug || slug[1] === storageSlug;
}

async function buildSmallMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].smallMovePage.slug;
        languages[locale] = `${SITE_URL}${buildSmallMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].smallMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildSmallMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function buildLateMoveLanguageAlternates() {
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        languages[locale] = `${SITE_URL}${buildLateMovePath(locale)}`;
    });

    languages['x-default'] = `${SITE_URL}${buildLateMovePath(DEFAULT_LOCALE)}`;

    return languages;
}

async function buildPriceListLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].priceListPage.slug;
        if (slug) {
            languages[locale] = `${SITE_URL}${buildPriceListPath(locale, slug)}`;
        }
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].priceListPage.slug;
    if (defaultSlug) {
        languages['x-default'] = `${SITE_URL}${buildPriceListPath(DEFAULT_LOCALE, defaultSlug)}`;
    }

    return languages;
}

async function buildOfficeMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].officeMovePage.slug;
        languages[locale] = `${SITE_URL}${buildOfficeMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].officeMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildOfficeMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function buildPianoMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].pianoMovePage.slug;
        languages[locale] = `${SITE_URL}${buildPianoMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].pianoMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildPianoMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function buildTelAvivMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].telAvivMovePage.slug;
        languages[locale] = `${SITE_URL}${buildTelAvivMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].telAvivMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildTelAvivMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function buildHolonMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].holonMovePage.slug;
        languages[locale] = `${SITE_URL}${buildHolonMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].holonMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildHolonMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function buildGivataimMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].givataimMovePage.slug;
        languages[locale] = `${SITE_URL}${buildGivataimMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].givataimMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildGivataimMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function batYamMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].batYamMovePage.slug;
        languages[locale] = `${SITE_URL}${buildBatYamMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].batYamMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildBatYamMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function ramatGanMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].batYamMovePage.slug;
        languages[locale] = `${SITE_URL}${buildRamatGanMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].batYamMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildRamatGanMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function netanyaMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].netanyaMovePage.slug;
        languages[locale] = `${SITE_URL}${buildNetanyaMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].netanyaMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildNetanyaMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function raananaMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].raananaMovePage.slug;
        languages[locale] = `${SITE_URL}${buildRaananaMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].raananaMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildRaananaMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function herzliyaMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].herzliyaMovePage.slug;
        languages[locale] = `${SITE_URL}${buildHerzliyaMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].herzliyaMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildHerzliyaMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function kfarSabaMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].kfarSabaMovePage.slug;
        languages[locale] = `${SITE_URL}${buildKfarSabaMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].kfarSabaMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildKfarSabaMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function hodHaSharonMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].hodHaSharonMovePage.slug;
        languages[locale] = `${SITE_URL}${buildHodHaSharonMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].hodHaSharonMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildHodHaSharonMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function rishonLeZionMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].hodHaSharonMovePage.slug;
        languages[locale] = `${SITE_URL}${buildRishonLeZionMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].hodHaSharonMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildRishonLeZionMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function lodMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].lodMovePage.slug;
        languages[locale] = `${SITE_URL}${buildLodZionMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].lodMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildLodZionMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function rehovotMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].rehovotMovePage.slug;
        languages[locale] = `${SITE_URL}${buildRehovotMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].lodMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildRehovotMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function ashdodMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].ashdodMovePage.slug;
        languages[locale] = `${SITE_URL}${buildAshdodMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].ashdodMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildAshdodMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function ramlaMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].ramlaMovePage.slug;
        languages[locale] = `${SITE_URL}${buildRamlaMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].ramlaMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildRamlaMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function jerusalemMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].jerusalemMovePage.slug;
        languages[locale] = `${SITE_URL}${buildJerusalemMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].jerusalemMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildJerusalemMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function modiinMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].modiinMovePage.slug;
        languages[locale] = `${SITE_URL}${buildModiinMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].modiinMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildModiinMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}
async function beitShemeshMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].beitShemeshMovePage.slug;
        languages[locale] = `${SITE_URL}${buildBeitShemeshMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].beitShemeshMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildBeitShemeshMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}
async function mevaseretZionMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].mevaseretZionMovePage.slug;
        languages[locale] = `${SITE_URL}${buildMevaseretZionMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].mevaseretZionMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildMevaseretZionMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}
async function maaleAdumimMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].maaleAdumimMovePage.slug;
        languages[locale] = `${SITE_URL}${buildMaaleAdumimMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].maaleAdumimMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildMaaleAdumimMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}
async function akkoMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].akkoMovePage.slug;
        languages[locale] = `${SITE_URL}${buildAkkoMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].akkoMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildAkkoMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}
async function nazarethLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].nazarethMovePage.slug;
        languages[locale] = `${SITE_URL}${buildNazarethMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].nazarethMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildNazarethMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}
async function karmielLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].karmielMovePage.slug;
        languages[locale] = `${SITE_URL}${buildKarmielMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].karmielMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildKarmielMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}
async function tiberiasLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].tiberiasMovePage.slug;
        languages[locale] = `${SITE_URL}${buildTiberiasMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].tiberiasMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildTiberiasMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}
async function beerShevaLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].beerShevaMovePage.slug;
        languages[locale] = `${SITE_URL}${buildBeerShevaMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].beerShevaMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildBeerShevaMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}
async function dimonaLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].dimonaMovePage.slug;
        languages[locale] = `${SITE_URL}${buildDimonaMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].dimonaMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildDimonaMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}
async function ashkelonLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].ashkelonMovePage.slug;
        languages[locale] = `${SITE_URL}${buildAshkelonMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].ashkelonMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildAshkelonMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}
async function netivotLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].netivotMovePage.slug;
        languages[locale] = `${SITE_URL}${buildAshkelonMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].netivotMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildAshkelonMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function eilatLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].eilatMovePage.slug;
        languages[locale] = `${SITE_URL}${buildEilatMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].eilatMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildEilatMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function buildHaifaMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].haifaMovePage.slug;
        if (!slug) return;
        languages[locale] = `${SITE_URL}${buildHaifaMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].haifaMovePage.slug;
    if (defaultSlug) {
        languages['x-default'] = `${SITE_URL}${buildHaifaMovePath(DEFAULT_LOCALE, defaultSlug)}`;
    }

    return languages;
}

async function buildApartmentMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].apartmentMovePage.slug;
        languages[locale] = `${SITE_URL}${buildApartmentMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].apartmentMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildApartmentMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

function findRegionIndexBySlug(
    dictionaries: Awaited<ReturnType<typeof getAllDictionaries>>,
    slug: string,
) {
    for (const locale of SUPPORTED_LOCALES) {
        const index = dictionaries[locale].homeRegions.sliderItems.findIndex(
            (item) => item.slug === slug,
        );
        if (index >= 0) {
            return index;
        }
    }

    return -1;
}

async function buildRegionLanguageAlternates(regionIndex: number) {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const regionSlug = dictionaries[locale].homeRegions.sliderItems[regionIndex]?.slug;
        if (!regionSlug) return;
        languages[locale] = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), regionSlug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].homeRegions.sliderItems[regionIndex]?.slug;
    if (defaultSlug) {
        languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'home')}/${defaultSlug}`;
    }

    return languages;
}

async function buildPackingLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].packingPage.slug;
        languages[locale] = `${SITE_URL}${buildPackingPath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].packingPage.slug;
    languages['x-default'] = `${SITE_URL}${buildPackingPath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function buildStorageLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].storagePage.slug;
        languages[locale] = `${SITE_URL}${buildStoragePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].storagePage.slug;
    languages['x-default'] = `${SITE_URL}${buildStoragePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

async function buildHouseMoveLanguageAlternates() {
    const dictionaries = await getAllDictionaries();
    const languages: Record<string, string> = {};

    SUPPORTED_LOCALES.forEach((locale) => {
        const slug = dictionaries[locale].houseMovePage.slug;
        languages[locale] = `${SITE_URL}${buildHouseMovePath(locale, slug)}`;
    });

    const defaultSlug = dictionaries[DEFAULT_LOCALE].houseMovePage.slug;
    languages['x-default'] = `${SITE_URL}${buildHouseMovePath(DEFAULT_LOCALE, defaultSlug)}`;

    return languages;
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const {locale, slug} = await params;
    const dictionary = await getDictionary(locale);
    const decodedSlug = slug?.map((segment) => decodeSlugSegment(segment) ?? segment) ?? [];
    const regionSlug = decodedSlug[0];
    const route = getRouteFromSlug(locale, decodedSlug);

    if (isApartmentMoveSlug(decodedSlug, dictionary.apartmentMovePage.slug)) {
        const canonical = `${SITE_URL}${buildApartmentMovePath(
            locale,
            dictionary.apartmentMovePage.slug,
        )}`;

        return {
            title: dictionary.apartmentMovePage.metaTitle,
            description: dictionary.apartmentMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await buildApartmentMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.apartmentMovePage.metaTitle,
                description: dictionary.apartmentMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }

    if (isSmallMoveSlug(decodedSlug, dictionary.smallMovePage.slug)) {
        const canonical = `${SITE_URL}${buildSmallMovePath(locale, dictionary.smallMovePage.slug)}`;

        return {
            title: dictionary.smallMovePage.metaTitle,
            description: dictionary.smallMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await buildSmallMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.smallMovePage.metaTitle,
                description: dictionary.smallMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }

    if (isLateMoveSlug(decodedSlug, locale)) {
        const canonical = `${SITE_URL}${buildLateMovePath(locale)}`;

        return {
            title: dictionary.lateMovePage.metaTitle,
            description: dictionary.lateMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await buildLateMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.lateMovePage.metaTitle,
                description: dictionary.lateMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }

    if (isPriceListSlug(decodedSlug, dictionary.priceListPage.slug)) {
        const canonical = `${SITE_URL}${buildPriceListPath(locale, dictionary.priceListPage.slug)}`;

        return {
            title: dictionary.priceListPage.metaTitle,
            description: dictionary.priceListPage.metaDescription,
            alternates: {
                canonical,
                languages: await buildPriceListLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.priceListPage.metaTitle,
                description: dictionary.priceListPage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }

    if (isHouseMoveSlug(decodedSlug, dictionary.houseMovePage.slug)) {
        const canonical = `${SITE_URL}${buildHouseMovePath(locale, dictionary.houseMovePage.slug)}`;

        return {
            title: dictionary.houseMovePage.metaTitle,
            description: dictionary.houseMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await buildHouseMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.houseMovePage.metaTitle,
                description: dictionary.houseMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }

    if (isTelAvivMoveSlug(decodedSlug, dictionary.telAvivMovePage.slug)) {
        const canonical = `${SITE_URL}${buildTelAvivMovePath(locale, dictionary.telAvivMovePage.slug)}`;

        return {
            title: dictionary.telAvivMovePage.metaTitle,
            description: dictionary.telAvivMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await buildTelAvivMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.telAvivMovePage.metaTitle,
                description: dictionary.telAvivMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }

    if (isHolonMoveSlug(decodedSlug, dictionary.holonMovePage.slug)) {
        const canonical = `${SITE_URL}${buildHolonMovePath(locale, dictionary.holonMovePage.slug)}`;

        return {
            title: dictionary.holonMovePage.metaTitle,
            description: dictionary.holonMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await buildHolonMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.holonMovePage.metaTitle,
                description: dictionary.holonMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isGivataimMoveSlug(decodedSlug, dictionary.givataimMovePage.slug)) {
        const canonical = `${SITE_URL}${buildGivataimMovePath(locale, dictionary.holonMovePage.slug)}`;

        return {
            title: dictionary.givataimMovePage.metaTitle,
            description: dictionary.givataimMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await buildGivataimMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.givataimMovePage.metaTitle,
                description: dictionary.givataimMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isBatYamMoveSlug(decodedSlug, dictionary.givataimMovePage.slug)) {
        const canonical = `${SITE_URL}${buildBatYamMovePath(locale, dictionary.holonMovePage.slug)}`;

        return {
            title: dictionary.batYamMovePage.metaTitle,
            description: dictionary.batYamMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await batYamMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.batYamMovePage.metaTitle,
                description: dictionary.batYamMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isRamatGanMoveSlug(decodedSlug, dictionary.givataimMovePage.slug)) {
        const canonical = `${SITE_URL}${buildRamatGanMovePath(locale, dictionary.holonMovePage.slug)}`;

        return {
            title: dictionary.batYamMovePage.metaTitle,
            description: dictionary.batYamMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await ramatGanMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.batYamMovePage.metaTitle,
                description: dictionary.batYamMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isNetanyaMoveSlug(decodedSlug, dictionary.netanyaMovePage.slug)) {
        const canonical = `${SITE_URL}${buildNetanyaMovePath(locale, dictionary.holonMovePage.slug)}`;

        return {
            title: dictionary.netanyaMovePage.metaTitle,
            description: dictionary.netanyaMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await netanyaMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.netanyaMovePage.metaTitle,
                description: dictionary.netanyaMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isRaananaMoveSlug(decodedSlug, dictionary.raananaMovePage.slug)) {
        const canonical = `${SITE_URL}${buildRaananaMovePath(locale, dictionary.raananaMovePage.slug)}`;

        return {
            title: dictionary.raananaMovePage.metaTitle,
            description: dictionary.raananaMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await raananaMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.raananaMovePage.metaTitle,
                description: dictionary.raananaMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isHerzliyaMoveSlug(decodedSlug, dictionary.herzliyaMovePage.slug)) {
        const canonical = `${SITE_URL}${buildHerzliyaMovePath(locale, dictionary.raananaMovePage.slug)}`;

        return {
            title: dictionary.herzliyaMovePage.metaTitle,
            description: dictionary.herzliyaMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await herzliyaMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.herzliyaMovePage.metaTitle,
                description: dictionary.herzliyaMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isKfarSabaMoveSlug(decodedSlug, dictionary.kfarSabaMovePage.slug)) {
        const canonical = `${SITE_URL}${buildKfarSabaMovePath(locale, dictionary.raananaMovePage.slug)}`;

        return {
            title: dictionary.kfarSabaMovePage.metaTitle,
            description: dictionary.kfarSabaMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await kfarSabaMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.kfarSabaMovePage.metaTitle,
                description: dictionary.kfarSabaMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isHodHaSharonMoveSlug(decodedSlug, dictionary.hodHaSharonMovePage.slug)) {
        const canonical = `${SITE_URL}${buildHodHaSharonMovePath(locale, dictionary.raananaMovePage.slug)}`;

        return {
            title: dictionary.hodHaSharonMovePage.metaTitle,
            description: dictionary.hodHaSharonMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await hodHaSharonMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.hodHaSharonMovePage.metaTitle,
                description: dictionary.hodHaSharonMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isRishonLeZionMoveSlug(decodedSlug, dictionary.rishonLeZionMovePage.slug)) {
        const canonical = `${SITE_URL}${buildRishonLeZionMovePath(locale, dictionary.rishonLeZionMovePage.slug)}`;

        return {
            title: dictionary.rishonLeZionMovePage.metaTitle,
            description: dictionary.rishonLeZionMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await rishonLeZionMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.rishonLeZionMovePage.metaTitle,
                description: dictionary.rishonLeZionMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isLodMoveSlug(decodedSlug, dictionary.lodMovePage.slug)) {
        const canonical = `${SITE_URL}${buildLodZionMovePath(locale, dictionary.lodMovePage.slug)}`;

        return {
            title: dictionary.lodMovePage.metaTitle,
            description: dictionary.lodMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await lodMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.lodMovePage.metaTitle,
                description: dictionary.lodMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isRehovotMoveSlug(decodedSlug, dictionary.rehovotMovePage.slug)) {
        const canonical = `${SITE_URL}${buildRehovotMovePath(locale, dictionary.rehovotMovePage.slug)}`;

        return {
            title: dictionary.rehovotMovePage.metaTitle,
            description: dictionary.rehovotMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await rehovotMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.rehovotMovePage.metaTitle,
                description: dictionary.rehovotMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isAshdodMoveSlug(decodedSlug, dictionary.ashdodMovePage.slug)) {
        const canonical = `${SITE_URL}${buildAshdodMovePath(locale, dictionary.ashdodMovePage.slug)}`;

        return {
            title: dictionary.ashdodMovePage.metaTitle,
            description: dictionary.ashdodMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await ashdodMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.ashdodMovePage.metaTitle,
                description: dictionary.ashdodMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isRamlaMoveSlug(decodedSlug, dictionary.ramlaMovePage.slug)) {
        const canonical = `${SITE_URL}${buildRamlaMovePath(locale, dictionary.ramlaMovePage.slug)}`;

        return {
            title: dictionary.ramlaMovePage.metaTitle,
            description: dictionary.ramlaMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await ramlaMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.ramlaMovePage.metaTitle,
                description: dictionary.ramlaMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isJerusalemMoveSlug(decodedSlug, dictionary.jerusalemMovePage.slug)) {
        const canonical = `${SITE_URL}${buildJerusalemMovePath(locale, dictionary.jerusalemMovePage.slug)}`;

        return {
            title: dictionary.jerusalemMovePage.metaTitle,
            description: dictionary.jerusalemMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await jerusalemMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.jerusalemMovePage.metaTitle,
                description: dictionary.jerusalemMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isModiinMoveSlug(decodedSlug, dictionary.modiinMovePage.slug)) {
        const canonical = `${SITE_URL}${buildModiinMovePath(locale, dictionary.modiinMovePage.slug)}`;

        return {
            title: dictionary.modiinMovePage.metaTitle,
            description: dictionary.modiinMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await modiinMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.modiinMovePage.metaTitle,
                description: dictionary.modiinMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isBeitShemeshMoveSlug(decodedSlug, dictionary.beitShemeshMovePage.slug)) {
        const canonical = `${SITE_URL}${buildBeitShemeshMovePath(locale, dictionary.beitShemeshMovePage.slug)}`;

        return {
            title: dictionary.beitShemeshMovePage.metaTitle,
            description: dictionary.beitShemeshMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await beitShemeshMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.beitShemeshMovePage.metaTitle,
                description: dictionary.beitShemeshMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isMevaseretZionMoveSlug(decodedSlug, dictionary.mevaseretZionMovePage.slug)) {
        const canonical = `${SITE_URL}${buildMevaseretZionMovePath(locale, dictionary.beitShemeshMovePage.slug)}`;

        return {
            title: dictionary.mevaseretZionMovePage.metaTitle,
            description: dictionary.mevaseretZionMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await mevaseretZionMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.mevaseretZionMovePage.metaTitle,
                description: dictionary.mevaseretZionMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isMaaleAdumimMoveSlug(decodedSlug, dictionary.maaleAdumimMovePage.slug)) {
        const canonical = `${SITE_URL}${buildMaaleAdumimMovePath(locale, dictionary.beitShemeshMovePage.slug)}`;

        return {
            title: dictionary.maaleAdumimMovePage.metaTitle,
            description: dictionary.maaleAdumimMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await maaleAdumimMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.maaleAdumimMovePage.metaTitle,
                description: dictionary.maaleAdumimMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isAkkoMoveSlug(decodedSlug, dictionary.akkoMovePage.slug)) {
        const canonical = `${SITE_URL}${buildAkkoMovePath(locale, dictionary.akkoMovePage.slug)}`;

        return {
            title: dictionary.akkoMovePage.metaTitle,
            description: dictionary.akkoMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await akkoMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.akkoMovePage.metaTitle,
                description: dictionary.akkoMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isNazarethMoveSlug(decodedSlug, dictionary.nazarethMovePage.slug)) {
        const canonical = `${SITE_URL}${buildNazarethMovePath(locale, dictionary.nazarethMovePage.slug)}`;

        return {
            title: dictionary.nazarethMovePage.metaTitle,
            description: dictionary.nazarethMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await nazarethLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.nazarethMovePage.metaTitle,
                description: dictionary.nazarethMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isKarmielMoveSlug(decodedSlug, dictionary.karmielMovePage.slug)) {
        const canonical = `${SITE_URL}${buildKarmielMovePath(locale, dictionary.karmielMovePage.slug)}`;

        return {
            title: dictionary.karmielMovePage.metaTitle,
            description: dictionary.karmielMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await karmielLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.karmielMovePage.metaTitle,
                description: dictionary.karmielMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
    if (isTiberiasMoveSlug(decodedSlug, dictionary.tiberiasMovePage.slug)) {
        const canonical = `${SITE_URL}${buildKarmielMovePath(locale, dictionary.tiberiasMovePage.slug)}`;

        return {
            title: dictionary.tiberiasMovePage.metaTitle,
            description: dictionary.tiberiasMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await tiberiasLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.tiberiasMovePage.metaTitle,
                description: dictionary.tiberiasMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
 if (isBeerShevaMoveSlug(decodedSlug, dictionary.beerShevaMovePage.slug)) {
        const canonical = `${SITE_URL}${buildBeerShevaMovePath(locale, dictionary.beerShevaMovePage.slug)}`;

        return {
            title: dictionary.beerShevaMovePage.metaTitle,
            description: dictionary.beerShevaMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await beerShevaLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.beerShevaMovePage.metaTitle,
                description: dictionary.beerShevaMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
if (isDimonaMoveSlug(decodedSlug, dictionary.dimonaMovePage.slug)) {
        const canonical = `${SITE_URL}${buildDimonaMovePath(locale, dictionary.dimonaMovePage.slug)}`;

        return {
            title: dictionary.dimonaMovePage.metaTitle,
            description: dictionary.dimonaMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await dimonaLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.dimonaMovePage.metaTitle,
                description: dictionary.dimonaMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
if (isAshkelonMoveSlug(decodedSlug, dictionary.ashkelonMovePage.slug)) {
        const canonical = `${SITE_URL}${buildAshkelonMovePath(locale, dictionary.ashkelonMovePage.slug)}`;

        return {
            title: dictionary.ashkelonMovePage.metaTitle,
            description: dictionary.ashkelonMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await ashkelonLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.ashkelonMovePage.metaTitle,
                description: dictionary.ashkelonMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
if (isNetivotMoveSlug(decodedSlug, dictionary.netivotMovePage.slug)) {
        const canonical = `${SITE_URL}${buildNetivotMovePath(locale, dictionary.netivotMovePage.slug)}`;

        return {
            title: dictionary.netivotMovePage.metaTitle,
            description: dictionary.netivotMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await netivotLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.netivotMovePage.metaTitle,
                description: dictionary.netivotMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }
if (isEilatMoveSlug(decodedSlug, dictionary.eilatMovePage.slug)) {
        const canonical = `${SITE_URL}${buildEilatMovePath(locale, dictionary.eilatMovePage.slug)}`;

        return {
            title: dictionary.eilatMovePage.metaTitle,
            description: dictionary.eilatMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await eilatLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.eilatMovePage.metaTitle,
                description: dictionary.eilatMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }

    if (isHaifaMoveSlug(decodedSlug, dictionary.haifaMovePage.slug)) {
        const canonical = `${SITE_URL}${buildHaifaMovePath(locale, dictionary.haifaMovePage.slug)}`;

        return {
            title: dictionary.haifaMovePage.metaTitle,
            description: dictionary.haifaMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await buildHaifaMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.haifaMovePage.metaTitle,
                description: dictionary.haifaMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }

    if (isPianoMoveSlug(decodedSlug, dictionary.pianoMovePage.slug)) {
        const canonical = `${SITE_URL}${buildPianoMovePath(locale, dictionary.pianoMovePage.slug)}`;

        return {
            title: dictionary.pianoMovePage.metaTitle,
            description: dictionary.pianoMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await buildPianoMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.pianoMovePage.metaTitle,
                description: dictionary.pianoMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }

    if (isOfficeMoveSlug(decodedSlug, dictionary.officeMovePage.slug)) {
        const canonical = `${SITE_URL}${buildOfficeMovePath(locale, dictionary.officeMovePage.slug)}`;

        return {
            title: dictionary.officeMovePage.metaTitle,
            description: dictionary.officeMovePage.metaDescription,
            alternates: {
                canonical,
                languages: await buildOfficeMoveLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.officeMovePage.metaTitle,
                description: dictionary.officeMovePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }

    if (isPackingSlug(decodedSlug, dictionary.packingPage.slug)) {
        const canonical = `${SITE_URL}${buildPackingPath(locale, dictionary.packingPage.slug)}`;

        return {
            title: dictionary.packingPage.metaTitle,
            description: dictionary.packingPage.metaDescription,
            alternates: {
                canonical,
                languages: await buildPackingLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.packingPage.metaTitle,
                description: dictionary.packingPage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }

    if (isStorageSlug(decodedSlug, dictionary.storagePage.slug)) {
        const canonical = `${SITE_URL}${buildStoragePath(locale, dictionary.storagePage.slug)}`;

        return {
            title: dictionary.storagePage.metaTitle,
            description: dictionary.storagePage.metaDescription,
            alternates: {
                canonical,
                languages: await buildStorageLanguageAlternates(),
            },
            openGraph: {
                title: dictionary.storagePage.metaTitle,
                description: dictionary.storagePage.metaDescription,
                url: canonical,
                locale,
            },
        };
    }

    let regionIndex = dictionary.homeRegions.sliderItems.findIndex((item) => item.slug === regionSlug);

    if (regionIndex < 0 && regionSlug) {
        const dictionaries = await getAllDictionaries();
        regionIndex = findRegionIndexBySlug(dictionaries, regionSlug);
    }

    if (regionIndex >= 0) {
        const regionItem = dictionary.homeRegions.sliderItems[regionIndex];
        const title = formatRegionTemplate(dictionary.regionPage.metaTitle, regionItem.title);
        const description = formatRegionTemplate(dictionary.regionPage.metaDescription, regionItem.title);
        const canonical = `${SITE_URL}${joinLocalizedPath(buildLocalizedPath(locale, 'home'), regionSlug)}`;

        return {
            title,
            description,
            keywords: dictionary.metadata.keywords,
            alternates: {
                canonical,
                languages: await buildRegionLanguageAlternates(regionIndex),
            },
            openGraph: {
                title,
                description,
                url: canonical,
                locale,
            },
        };
    }

    const baseTitle = dictionary.metadata.title;

    return {
        title: route === 'home' ? baseTitle : `${baseTitle} — ${dictionary.header.nav[route]}`,
        description: dictionary.metadata.description,
        alternates: {
            canonical: `${SITE_URL}${buildLocalizedPath(locale, route)}`,
            languages: buildLanguageAlternates(route),
        },
    };
}

export default async function RegionPage({params}: Props) {
    const {locale, slug} = await params;
    const dictionary = await getDictionary(locale);
    const decodedSlug = slug?.map((segment) => decodeSlugSegment(segment) ?? segment) ?? [];
    const regionSlug = decodedSlug[0];
    const route = getRouteFromSlug(locale, decodedSlug);
    if (isApartmentMoveSlug(decodedSlug, dictionary.apartmentMovePage.slug)) {
        return (
            <ApartmentMovePage
                locale={locale}
                dictionary={dictionary.apartmentMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isSmallMoveSlug(decodedSlug, dictionary.smallMovePage.slug)) {
        return (
            <SmallMovePage
                locale={locale}
                dictionary={dictionary.smallMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isLateMoveSlug(decodedSlug, locale)) {
        return (
            <SmallMovePage
                locale={locale}
                dictionary={dictionary.lateMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isPriceListSlug(decodedSlug, dictionary.priceListPage.slug)) {
        return (
            <PriceListPage locale={locale}
                           dictionary={dictionary.priceListPage}
                           calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isHouseMoveSlug(decodedSlug, dictionary.houseMovePage.slug)) {
        return (
            <HouseMovePage
                locale={locale}
                dictionary={dictionary.houseMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isTelAvivMoveSlug(decodedSlug, dictionary.telAvivMovePage.slug)) {
        return (
            <TelAvivMovePage
                locale={locale}
                dictionary={dictionary.telAvivMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isHolonMoveSlug(decodedSlug, dictionary.holonMovePage.slug)) {
        return (
            <HolonMovePage
                locale={locale}
                dictionary={dictionary.holonMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isGivataimMoveSlug(decodedSlug, dictionary.givataimMovePage.slug)) {
        return (
            <GivataimMovePage
                locale={locale}
                dictionary={dictionary.givataimMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isBatYamMoveSlug(decodedSlug, dictionary.batYamMovePage.slug)) {
        return (
            <BatYamMovePage
                locale={locale}
                dictionary={dictionary.batYamMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isRamatGanMoveSlug(decodedSlug, dictionary.ramatGanMovePage.slug)) {
        return (
            <RamatGanMovePage
                locale={locale}
                dictionary={dictionary.ramatGanMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isNetanyaMoveSlug(decodedSlug, dictionary.netanyaMovePage.slug)) {
        return (
            <NetanyaMovePage
                locale={locale}
                dictionary={dictionary.netanyaMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isRaananaMoveSlug(decodedSlug, dictionary.raananaMovePage.slug)) {
        return (
            <RaananaMovePage
                locale={locale}
                dictionary={dictionary.raananaMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isHerzliyaMoveSlug(decodedSlug, dictionary.herzliyaMovePage.slug)) {
        return (
            <HerzliyaMovePage
                locale={locale}
                dictionary={dictionary.herzliyaMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isKfarSabaMoveSlug(decodedSlug, dictionary.kfarSabaMovePage.slug)) {
        return (
            <KfarSabaMovePage
                locale={locale}
                dictionary={dictionary.kfarSabaMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isHodHaSharonMoveSlug(decodedSlug, dictionary.hodHaSharonMovePage.slug)) {
        return (
            <HodHaSharonMovePage
                locale={locale}
                dictionary={dictionary.hodHaSharonMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isRishonLeZionMoveSlug(decodedSlug, dictionary.rishonLeZionMovePage.slug)) {
        return (
            <RishonLeZionMovePage
                locale={locale}
                dictionary={dictionary.rishonLeZionMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isLodMoveSlug(decodedSlug, dictionary.lodMovePage.slug)) {
        return (
            <LodMovePage
                locale={locale}
                dictionary={dictionary.lodMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isRehovotMoveSlug(decodedSlug, dictionary.rehovotMovePage.slug)) {
        return (
            <RehovotMovePage
                locale={locale}
                dictionary={dictionary.rehovotMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isAshdodMoveSlug(decodedSlug, dictionary.ashdodMovePage.slug)) {
        return (
            <AshdodMovePage
                locale={locale}
                dictionary={dictionary.ashdodMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isRamlaMoveSlug(decodedSlug, dictionary.ramlaMovePage.slug)) {
        return (
            <RamlaMovePage
                locale={locale}
                dictionary={dictionary.ramlaMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isJerusalemMoveSlug(decodedSlug, dictionary.jerusalemMovePage.slug)) {
        return (
            <JerusalemMovePage
                locale={locale}
                dictionary={dictionary.jerusalemMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isModiinMoveSlug(decodedSlug, dictionary.modiinMovePage.slug)) {
        return (
            <ModiinMovePage
                locale={locale}
                dictionary={dictionary.modiinMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isBeitShemeshMoveSlug(decodedSlug, dictionary.beitShemeshMovePage.slug)) {
        return (
            <BeitShemeshMovePage
                locale={locale}
                dictionary={dictionary.beitShemeshMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isMevaseretZionMoveSlug(decodedSlug, dictionary.mevaseretZionMovePage.slug)) {
        return (
            <MevaseretZionMovePage
                locale={locale}
                dictionary={dictionary.mevaseretZionMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isMaaleAdumimMoveSlug(decodedSlug, dictionary.maaleAdumimMovePage.slug)) {
        return (
            <MaaleAdumimMovePage
                locale={locale}
                dictionary={dictionary.maaleAdumimMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isAkkoMoveSlug(decodedSlug, dictionary.akkoMovePage.slug)) {
        return (
            <AkkoMovePage
                locale={locale}
                dictionary={dictionary.akkoMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isNazarethMoveSlug(decodedSlug, dictionary.nazarethMovePage.slug)) {
        return (
            <NazarethMovePage
                locale={locale}
                dictionary={dictionary.nazarethMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isKarmielMoveSlug(decodedSlug, dictionary.karmielMovePage.slug)) {
        return (
            <KarmielMovePage
                locale={locale}
                dictionary={dictionary.karmielMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isTiberiasMoveSlug(decodedSlug, dictionary.tiberiasMovePage.slug)) {
        return (
            <TiberiasMovePage
                locale={locale}
                dictionary={dictionary.tiberiasMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isBeerShevaMoveSlug(decodedSlug, dictionary.beerShevaMovePage.slug)) {
        return (
            <BeerShevaMovePage
                locale={locale}
                dictionary={dictionary.beerShevaMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isDimonaMoveSlug(decodedSlug, dictionary.dimonaMovePage.slug)) {
        return (
            <DimonaMovePage
                locale={locale}
                dictionary={dictionary.dimonaMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isAshkelonMoveSlug(decodedSlug, dictionary.ashkelonMovePage.slug)) {
        return (
            <AshkelonMovePage
                locale={locale}
                dictionary={dictionary.ashkelonMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isNetivotMoveSlug(decodedSlug, dictionary.netivotMovePage.slug)) {
        return (
            <NetivotMovePage
                locale={locale}
                dictionary={dictionary.netivotMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isEilatMoveSlug(decodedSlug, dictionary.eilatMovePage.slug)) {
        return (
            <EilatMovePage
                locale={locale}
                dictionary={dictionary.eilatMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isHaifaMoveSlug(decodedSlug, dictionary.haifaMovePage.slug)) {
        return (
            <HaifaMovePage
                locale={locale}
                dictionary={dictionary.haifaMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isPianoMoveSlug(decodedSlug, dictionary.pianoMovePage.slug)) {
        return (
            <PianoMovePage
                locale={locale}
                dictionary={dictionary.pianoMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isOfficeMoveSlug(decodedSlug, dictionary.officeMovePage.slug)) {
        return (
            <OfficeMovePage
                locale={locale}
                dictionary={dictionary.officeMovePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isPackingSlug(decodedSlug, dictionary.packingPage.slug)) {
        return (
            <PackingPage
                locale={locale}
                dictionary={dictionary.packingPage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    if (isStorageSlug(decodedSlug, dictionary.storagePage.slug)) {
        return (
            <StoragePage
                locale={locale}
                dictionary={dictionary.storagePage}
                calculatorDictionary={dictionary.homeHero}
            />
        );
    }
    let regionItem = dictionary.homeRegions.sliderItems.find((item) => item.slug === regionSlug);

    if (!regionItem && regionSlug) {
        const dictionaries = await getAllDictionaries();
        const regionIndex = findRegionIndexBySlug(dictionaries, regionSlug);
        regionItem = dictionary.homeRegions.sliderItems[regionIndex];
    }

    if (!regionItem) {
        return <div className="sr-only">Content placeholder.</div>;
    }

    const breadcrumbs = [
        {
            label: dictionary.header.nav.home,
            href: buildLocalizedPath(locale, 'home'),
        },
        {
            label: dictionary.regionPage.breadcrumbZones,
            href: `${buildLocalizedPath(locale, 'home')}#regions-section`,
        },
        {
            label: regionItem.title,
            current: true,
        },
    ];


    return (
        <>
            <section className={styles.page} aria-labelledby="region-page-title">
                <div className={styles.container}>
                    <div className={styles.breadcrumbsWrapper}>
                        <Breadcrumbs items={breadcrumbs}/>
                    </div>
                </div>
            </section>

            <BookingBanner
                locale={locale}
                dictionary={dictionary.homeHero}
                headingLevel="h2"
                regionTitle={regionItem.title}
            />

            <RegionAdvantagesSection
                locale={locale}
                title={dictionary.regionPage.advantagesTitle}
                dictionary={dictionary.homeWhyUs}
                cards={dictionary.homeWhyUs.cards}
            />

            <RegionCarriersSection
                title={dictionary.regionPage.carriersTitle}
                emptyLabel={dictionary.regionPage.noCarriers}
                dictionary={dictionary.homeCarriers}
                region={regionItem.carrierRegion}
            />

            <ArticlesSection locale={locale} dictionary={dictionary.homeArticles}/>

            <RegionTransportTableSection
                locale={locale}
                regionTitle={regionItem.title}
                regionSlug={regionItem.slug}
                dictionary={dictionary.regionPage.transportTable}
            />
        </>
    );
}
