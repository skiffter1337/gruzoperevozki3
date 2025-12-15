import { NextRequest, NextResponse } from 'next/server';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/lib/site-config';

const lastModifiedValue = new Date(
  process.env.BUILD_TIMESTAMP || Date.now(),
).toUTCString();

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.match(/\.(?:png|jpg|jpeg|gif|ico|svg|css|js|webp)$/)
  ) {
    return NextResponse.next();
  }

  const ifModifiedSince = request.headers.get('if-modified-since');
  if (ifModifiedSince && new Date(ifModifiedSince) >= new Date(lastModifiedValue)) {
    return new NextResponse(null, {
      status: 304,
      headers: { 'Last-Modified': lastModifiedValue },
    });
  }

  const hasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (!hasLocale) {
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
