import { Metadata } from 'next';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '@/lib/dictionaries';
import { buildLanguageAlternates, buildLocalizedPath } from '@/lib/localized-paths';
import { SITE_URL } from '@/lib/site-config';

type Props = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
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

export default function HomePage() {
  return <div>Landing content will be added here.</div>;
}
