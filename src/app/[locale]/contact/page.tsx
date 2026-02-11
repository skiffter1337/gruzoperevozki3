import { Metadata } from 'next';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/lib/dictionaries';
import { buildLanguageAlternates, buildLocalizedPath } from '@/lib/localized-paths';
import { SITE_URL } from '@/lib/site-config';
import ContactPageClient from '@/components/contact/ContactPageClient';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const { metaTitle, metaDescription } = dictionary.contactPage;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: dictionary.metadata.keywords,
    alternates: {
      canonical: `${SITE_URL}${buildLocalizedPath(locale, 'contact')}`,
      languages: buildLanguageAlternates('contact'),
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${SITE_URL}${buildLocalizedPath(locale, 'contact')}`,
      locale,
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <ContactPageClient
      locale={locale}
      dictionary={dictionary.contactPage}
      homeLabel={dictionary.header.nav.home}
    />
  );
}
