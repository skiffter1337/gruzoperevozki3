import { SITE_URL } from '../site-config';

export interface LocalBusinessSchemaProps {
  name: string;
  address: string;
  telephone: string;
  openingHours?: string;
  image?: string;
}

export const buildLocalBusinessSchema = ({
  name,
  address,
  telephone,
  openingHours,
  image = `${SITE_URL}/logo.svg`,
}: LocalBusinessSchemaProps) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name,
  address,
  telephone,
  openingHours,
  image,
  url: SITE_URL,
});
