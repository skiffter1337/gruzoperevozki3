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
  const { pathname, search } = request.nextUrl;

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

  // Перезапись маршрутов с кириллицей/ивритом на латиницу
  const pathSegments = pathname.split('/').filter(Boolean);

  if (pathSegments.length >= 2) {
    const locale = pathSegments[0];
    const segment = decodeURIComponent(pathSegments[1]); // Декодируем для правильного сравнения

    // Проверяем, нужно ли переписать маршрут
    if (REWRITE_MAP[locale] && segment in REWRITE_MAP[locale]) {
      const newSegment = REWRITE_MAP[locale][segment];
      const newPathname = `/${locale}/${newSegment}${pathSegments.length > 2 ? '/' + pathSegments.slice(2).join('/') : ''}`;

      const url = request.nextUrl.clone();
      url.pathname = newPathname;

      // Перезаписываем запрос с сохранением query параметров
      const response = NextResponse.rewrite(url);
      response.headers.set('Last-Modified', lastModifiedValue);
      return response;
    }
  }

  // Проверка наличия локали в URL
  const hasLocale = SUPPORTED_LOCALES.some(
      (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  // Если нет локали - редирект на локаль по умолчанию
  if (!hasLocale) {
    // Проверяем, возможно это уже переписанный маршрут с кириллицей
    const firstSegment = pathSegments[0];
    if (firstSegment && Object.keys(REWRITE_MAP).some(lang =>
        Object.keys(REWRITE_MAP[lang]).some(key => key === decodeURIComponent(firstSegment))
    )) {
      // Это маршрут без локали, но с кириллицей/ивритом
      const url = request.nextUrl.clone();
      url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
      return NextResponse.redirect(url);
    }

    const url = request.nextUrl.clone();
    const suffix = pathname === '/' ? '' : pathname;
    url.pathname = `/${DEFAULT_LOCALE}${suffix}`;
    return NextResponse.redirect(url);
  }

  const response = NextResponse.next();
  response.headers.set('Last-Modified', lastModifiedValue);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
