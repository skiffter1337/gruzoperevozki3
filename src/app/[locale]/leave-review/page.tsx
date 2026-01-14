import { Metadata } from 'next';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/lib/dictionaries';
import { buildLanguageAlternates, buildLocalizedPath } from '@/lib/localized-paths';
import { SITE_URL } from '@/lib/site-config';
import LeaveReviewPageClient from '@/components/reviews/LeaveReviewPageClient';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const { metaTitle, metaDescription } = dictionary.leaveReviewPage;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: dictionary.metadata.keywords,
    alternates: {
      canonical: `${SITE_URL}${buildLocalizedPath(locale, 'leaveReview')}`,
      languages: buildLanguageAlternates('leaveReview'),
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${SITE_URL}${buildLocalizedPath(locale, 'leaveReview')}`,
      locale,
    },
  };
}

export default async function LeaveReviewPage({ params }: Props) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <LeaveReviewPageClient
      locale={locale}
      dictionary={dictionary.leaveReviewPage}
      homeLabel={dictionary.header.nav.home}
    />
  );
}
