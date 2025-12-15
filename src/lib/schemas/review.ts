export interface ReviewSchemaProps {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}

export const buildReviewSchema = (reviews: ReviewSchemaProps[]) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  reviewRating: reviews.map((review) => ({
    '@type': 'Rating',
    ratingValue: review.rating,
  })),
  author: reviews.map((review) => ({
    '@type': 'Person',
    name: review.author,
  })),
  reviewBody: reviews.map((review) => review.reviewBody),
  datePublished: reviews.map((review) => review.datePublished).filter(Boolean),
});

export const buildAggregateRatingSchema = (ratingValue: number, reviewCount: number) => ({
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  ratingValue,
  reviewCount,
});
