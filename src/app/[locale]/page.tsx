// app/[locale]/page.tsx
import {getDictionary} from '@/lib/dictionaries';
import {Metadata} from 'next';
import {LocalType} from "@/types/types";
// import JsonLd from '@/components/seo/JsonLd';
// import {LocalBusinessSchema} from '@/lib/schemas/local-business';

type Props = {
    params: Promise<{
        locale: string;
    }>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const {locale} = await params;
    const dictionary = await getDictionary(locale as LocalType);

    return {
        // title: dictionary.home.metaTitle,
        // description: dictionary.home.metaDescription,
        alternates: {
            canonical: `https://ваш-сайт.co.il/${locale}`,
            languages: {
                'x-default': 'https://ваш-сайт.co.il',
                'he': 'https://ваш-сайт.co.il/he',
                'ru': 'https://ваш-сайт.co.il/ru',
                'en': 'https://ваш-сайт.co.il/en',
            },
        },
    };
}

export default async function HomePage({params}: Props) {
    const {locale} = await params;
    const dictionary = await getDictionary(locale as LocalType);

    const localBusinessData = {
        // name: dictionary.company.name,
        // address: dictionary.company.address,
        // telephone: dictionary.company.phone,
        // openingHours: dictionary.company.openingHours,
        priceRange: "$$",
    };

    return (
        <>
            {/*<JsonLd data={LocalBusinessSchema(localBusinessData)}/>*/}
            <div>123</div>
        </>
    );
}