import { Metadata } from 'next';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '@/lib/dictionaries';
import { buildLanguageAlternates, buildLocalizedPath } from '@/lib/localized-paths';
import { SITE_URL } from '@/lib/site-config';

type Props = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    alternates: {
      canonical: `${SITE_URL}${buildLocalizedPath(locale, 'home')}`,
      languages: buildLanguageAlternates('home'),
    },
  };
}

export function generateStaticParams() {
  const locales: Locale[] = ['he', 'ru', 'en'];
  return locales.map((locale) => ({ locale }));
}

export default function HomePage() {
  return <div className="sr-only">Landing content will be added here.</div>;
}
