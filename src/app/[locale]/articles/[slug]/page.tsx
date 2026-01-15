import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Locale } from '../../../../../i18n-config';
import { getAllDictionaries, getDictionary } from '@/lib/dictionaries';
import { buildLanguageAlternates, buildLocalizedPath } from '@/lib/localized-paths';
import { DEFAULT_LOCALE, SITE_URL, SUPPORTED_LOCALES } from '@/lib/site-config';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import ArticleGallery from '@/components/articles/ArticleGallery';

import styles from './ArticlePage.module.scss';

interface Props {
  params: Promise<{ locale: Locale; slug: string }>;
}

type TemplateValues = {
  title: string;
  site: string;
  excerpt: string;
};

const templateKeys: (keyof TemplateValues)[] = ['title', 'site', 'excerpt'];

const formatTemplate = (template: string, values: TemplateValues) =>
  templateKeys.reduce(
    (result, key) => result.replaceAll(`{${key}}`, values[key]),
    template,
  );

function findArticleIndexBySlug(
  dictionaries: Awaited<ReturnType<typeof getAllDictionaries>>,
  slug: string,
) {
  for (const locale of SUPPORTED_LOCALES) {
    const index = dictionaries[locale].homeArticles.articles.findIndex((item) => item.slug === slug);
    if (index >= 0) {
      return index;
    }
  }

  return -1;
}

async function buildArticleLanguageAlternates(articleIndex: number) {
  const dictionaries = await getAllDictionaries();
  const languages: Record<string, string> = {};

  SUPPORTED_LOCALES.forEach((locale) => {
    const articleSlug = dictionaries[locale].homeArticles.articles[articleIndex]?.slug;
    if (!articleSlug) return;
    languages[locale] = `${SITE_URL}${buildLocalizedPath(locale, 'articles')}/${articleSlug}`;
  });

  const defaultSlug = dictionaries[DEFAULT_LOCALE].homeArticles.articles[articleIndex]?.slug;
  if (defaultSlug) {
    languages['x-default'] = `${SITE_URL}${buildLocalizedPath(DEFAULT_LOCALE, 'articles')}/${defaultSlug}`;
  }

  return languages;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const dictionary = await getDictionary(locale);
  const articleIndex = dictionary.homeArticles.articles.findIndex((item) => item.slug === slug);
  let article = dictionary.homeArticles.articles[articleIndex];
  let resolvedIndex = articleIndex;

  if (!article) {
    const dictionaries = await getAllDictionaries();
    resolvedIndex = findArticleIndexBySlug(dictionaries, slug);
    if (resolvedIndex >= 0) {
      article = dictionary.homeArticles.articles[resolvedIndex];
    }
  }

  if (!article) {
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

  const templateValues = {
    title: article.title,
    site: dictionary.metadata.title,
    excerpt: article.excerpt,
  };
  const metaTitle = formatTemplate(dictionary.articlePage.metaTitleTemplate, templateValues);
  const metaDescription = formatTemplate(
    dictionary.articlePage.metaDescriptionTemplate,
    templateValues,
  );
  const canonical = `${SITE_URL}${buildLocalizedPath(locale, 'articles')}/${article.slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: dictionary.metadata.keywords,
    alternates: {
      canonical,
      languages:
        resolvedIndex >= 0
          ? await buildArticleLanguageAlternates(resolvedIndex)
          : buildLanguageAlternates('articles'),
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      locale,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const dictionary = await getDictionary(locale);
  let article = dictionary.homeArticles.articles.find((item) => item.slug === slug);

  if (!article) {
    const dictionaries = await getAllDictionaries();
    const index = findArticleIndexBySlug(dictionaries, slug);
    if (index >= 0) {
      article = dictionary.homeArticles.articles[index];
    }
  }

  if (!article) {
    notFound();
  }

  const articleBody = article.body?.length ? article.body : dictionary.articlePage.fallbackBody;
  const galleryItems = article.gallery ?? [];
  const articlesPath = buildLocalizedPath(locale, 'articles');

  const breadcrumbs = [
    {
      label: dictionary.header.nav.home,
      href: buildLocalizedPath(locale, 'home'),
    },
    {
      label: dictionary.articlesPage.breadcrumbCurrent,
      href: articlesPath,
    },
    {
      label: article.title,
      current: true,
    },
  ];

  return (
    <article
      className={styles.page}
      itemScope
      itemType="https://schema.org/BlogPosting"
      aria-labelledby="article-title"
    >
      <div className={styles.container}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className={styles.hero}>
          <div className={styles.imageWrapper}>
            <Image
              src={article.image}
              alt={`${dictionary.homeArticles.imageAltPrefix} ${article.title}`}
              width={520}
              height={360}
              className={styles.heroImage}
              sizes="(max-width: 1024px) 100vw, 520px"
              priority
              itemProp="image"
            />
          </div>
          <div className={styles.heroContent}>
            <h1 id="article-title" className={styles.title} itemProp="headline">
              {article.title}
            </h1>
            <p className={styles.excerpt} itemProp="description">
              {article.excerpt}
            </p>
          </div>
        </div>

        <div className={styles.body} itemProp="articleBody">
          {articleBody.map((paragraph, index) => (
            <p key={`${paragraph.slice(0, 12)}-${index}`}>{paragraph}</p>
          ))}
        </div>

        {galleryItems.length > 0 && (
          <ArticleGallery
            images={galleryItems}
            title={article.title}
            photosAriaLabel={dictionary.articlePage.photosAriaLabel}
            photoAltPrefix={dictionary.articlePage.photoAltPrefix}
            photoTitle={dictionary.articlePage.photoTitle}
          />
        )}

        <div className={styles.ctaWrapper}>
          <Link
            href={articlesPath}
            className={styles.ctaLink}
            aria-label={dictionary.articlePage.otherArticlesAriaLabel}
          >
            {dictionary.articlePage.otherArticlesCta}
          </Link>
        </div>
      </div>
    </article>
  );
}
