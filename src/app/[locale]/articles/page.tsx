import { Metadata } from 'next';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/lib/dictionaries';
import { buildLanguageAlternates, buildLocalizedPath } from '@/lib/localized-paths';
import { SITE_URL } from '@/lib/site-config';
import ArticlesPageClient from '@/components/articles/ArticlesPageClient';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const { metaTitle, metaDescription } = dictionary.articlesPage;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: dictionary.metadata.keywords,
    alternates: {
      canonical: `${SITE_URL}${buildLocalizedPath(locale, 'articles')}`,
      languages: buildLanguageAlternates('articles'),
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${SITE_URL}${buildLocalizedPath(locale, 'articles')}`,
      locale,
    },
  };
}

export default async function ArticlesPage({ params }: Props) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <ArticlesPageClient
      locale={locale}
      dictionary={dictionary.articlesPage}
      articlesDictionary={dictionary.homeArticles}
      homeLabel={dictionary.header.nav.home}
    />
  );
}
