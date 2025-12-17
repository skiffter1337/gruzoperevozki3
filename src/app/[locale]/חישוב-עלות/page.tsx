import CalculatePage, { CalculatePageProps, createCalculateMetadata } from '../calculate-page';

export async function generateMetadata(props: CalculatePageProps) {
  return createCalculateMetadata(props);
}

export default function Page(props: CalculatePageProps) {
  return <CalculatePage {...props} />;
}
