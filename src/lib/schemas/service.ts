import { SITE_URL } from '../site-config';

export interface ServiceSchemaProps {
  name: string;
  description: string;
  price?: string;
  urlPath?: string;
}

export const buildServiceSchema = ({
  name,
  description,
  price,
  urlPath,
}: ServiceSchemaProps) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  offers: price
    ? {
        '@type': 'Offer',
        price,
        priceCurrency: 'ILS',
      }
    : undefined,
  url: urlPath ? `${SITE_URL}${urlPath}` : SITE_URL,
});
