import { Metadata } from 'next';
import { Locale } from '../../../../../i18n-config';
import { getDictionary } from '@/lib/dictionaries';
import {
  buildLanguageAlternates,
  buildLocalizedPath,
  resolveRouteKey,
  RouteKey,
} from '@/lib/localized-paths';
import { SITE_URL } from '@/lib/site-config';

interface Props {
  params: { locale: Locale; slug: string[] };
}

function getRouteFromSlug(locale: Locale, slug?: string[]): RouteKey {
  if (!slug || slug.length === 0) return 'home';
  const matched = resolveRouteKey(locale, slug[0]);
  return matched || 'home';
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = params;
  const dictionary = await getDictionary(locale);
  const route = getRouteFromSlug(locale, slug);

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

export default function ContentPlaceholder() {
  return <div className="sr-only">Content placeholder.</div>;
}
