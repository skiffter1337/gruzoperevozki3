import { Metadata } from 'next';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '@/lib/dictionaries';
import { buildLanguageAlternates, buildLocalizedPath } from '@/lib/localized-paths';
import { SITE_URL } from '@/lib/site-config';
import BookingBanner from '@/components/home/BookingBanner';
import CarriersSection from '@/components/home/CarriersSection';
import ServicesSlider from '@/components/home/ServicesSlider';
import RegionsSlider from '@/components/home/RegionsSlider';
import AboutSection from '@/components/home/AboutSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ArticlesSection from '@/components/home/ArticlesSection';

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
    keywords: dictionary.metadata.keywords,
    alternates: {
      canonical: `${SITE_URL}${buildLocalizedPath(locale, 'home')}`,
      languages: buildLanguageAlternates('home'),
    },
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      url: `${SITE_URL}${buildLocalizedPath(locale, 'home')}`,
      locale,
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <>
      <BookingBanner locale={locale} dictionary={dictionary.homeHero} />
      <ServicesSlider locale={locale} dictionary={dictionary.homeHero} />
      <RegionsSlider locale={locale} dictionary={dictionary.homeRegions} />
      <CarriersSection locale={locale} dictionary={dictionary.homeCarriers} />
      <AboutSection dictionary={dictionary.homeAbout} />
      <WhyUsSection locale={locale} dictionary={dictionary.homeWhyUs} />
      <TestimonialsSection locale={locale} dictionary={dictionary.homeTestimonials} />
      <ArticlesSection locale={locale} dictionary={dictionary.homeArticles} />
    </>
  );
}
