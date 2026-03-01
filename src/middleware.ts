import { NextRequest, NextResponse } from 'next/server';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/lib/site-config';

const lastModifiedValue = new Date(
    process.env.BUILD_TIMESTAMP || Date.now(),
).toUTCString();

// Карта переписывания маршрутов для разных языков
const REWRITE_MAP: Record<string, Record<string, string>> = {
  ru: {
    'рассчитать-стоимость': 'calculate-cost',
    'дополнительные-услуги': 'services',
    'о-нас': 'about',
    'перевозки': 'transportation',
    'статьи': 'articles',
    'контакты': 'contact',
    'оставить-отзыв': 'leave-review',
  },
  he: {
    'חישוב-עלות': 'calculate-cost',
    'שירותים': 'services',
    'אודות': 'about',
    'הובלות': 'transportation',
    'מאמרים': 'articles',
    'צור-קשר': 'contact',
    'השארת-חוות-דעת': 'leave-review',
  },
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Статичные ресурсы пропускаем
  if (
      pathname.startsWith('/_next') ||
      pathname.match(/\.(?:png|jpg|jpeg|gif|ico|svg|css|js|webp|woff|woff2|ttf)$/)
  ) {
    return NextResponse.next();
  }

  // Проверка If-Modified-Since
  const ifModifiedSince = request.headers.get('if-modified-since');
  if (ifModifiedSince && new Date(ifModifiedSince) >= new Date(lastModifiedValue)) {
    return new NextResponse(null, {
      status: 304,
      headers: { 'Last-Modified': lastModifiedValue },
    });
  }

  // Убираем /he из URL для иврита (default locale)
  if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(`/${DEFAULT_LOCALE}`, '') || '/';
    return NextResponse.redirect(url);
  }

  // Перезапись маршрутов с кириллицей/ивритом на латиницу
  const pathSegments = pathname.split('/').filter(Boolean);
  const hasLocalePrefix = SUPPORTED_LOCALES.some(
      (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  const locale = hasLocalePrefix ? pathSegments[0] : DEFAULT_LOCALE;
  const segmentIndex = hasLocalePrefix ? 1 : 0;
  const segment = decodeURIComponent(pathSegments[segmentIndex] ?? '');

  if (segment && REWRITE_MAP[locale] && segment in REWRITE_MAP[locale]) {
    const newSegment = REWRITE_MAP[locale][segment];
    const rest = pathSegments.length > segmentIndex + 1
      ? '/' + pathSegments.slice(segmentIndex + 1).join('/')
      : '';
    const internalPrefix = `/${locale}`;
    const newPathname = `${internalPrefix}/${newSegment}${rest}`;

    const url = request.nextUrl.clone();
    url.pathname = newPathname;

    // Перезаписываем запрос с сохранением query параметров
    const response = NextResponse.rewrite(url);
    response.headers.set('Last-Modified', lastModifiedValue);
    return response;
  }

  // Проверка наличия локали в URL
  const hasLocale = hasLocalePrefix;

  // Если нет локали - редирект на нужную локаль или внутренний rewrite
  if (!hasLocale) {
    const firstSegment = pathSegments[0];
    if (firstSegment) {
      const decodedSegment = decodeURIComponent(firstSegment);
      const matchedLocale = Object.keys(REWRITE_MAP).find((lang) =>
        Object.prototype.hasOwnProperty.call(REWRITE_MAP[lang], decodedSegment),
      );

      if (matchedLocale && matchedLocale !== DEFAULT_LOCALE) {
        const url = request.nextUrl.clone();
        url.pathname = `/${matchedLocale}${pathname}`;
        return NextResponse.redirect(url);
      }
    }

    const url = request.nextUrl.clone();
    const suffix = pathname === '/' ? '' : pathname;
    url.pathname = `/${DEFAULT_LOCALE}${suffix}`;
    const response = NextResponse.rewrite(url);
    response.headers.set('Last-Modified', lastModifiedValue);
    return response;
  }

  const response = NextResponse.next();
  response.headers.set('Last-Modified', lastModifiedValue);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
