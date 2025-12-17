import type { MetadataRoute } from 'next';
import { SUPPORTED_LOCALES } from '@/lib/site-config';
import {
  buildAbsoluteUrl,
  buildLanguageAlternates,
  RouteKey,
} from '@/lib/localized-paths';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: RouteKey[] = ['home', 'calculate'];
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    SUPPORTED_LOCALES.forEach((locale) => {
      entries.push({
        url: buildAbsoluteUrl(locale, route),
        lastModified,
        alternates: {
          languages: buildLanguageAlternates(route),
        },
      });
    });
  });

  return entries;
}
