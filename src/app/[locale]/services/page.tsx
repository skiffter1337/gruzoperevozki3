// app/[locale]/services/page.tsx
import { getDictionary } from '@/lib/dictionaries';
import { Metadata } from 'next';
import styles from './page.module.scss';

type Props = {
    params: Promise<{
        locale: 'he' | 'ru' | 'en';
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const dictionary = await getDictionary(locale);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ваш-сайт.co.il';

    return {
        title: dictionary.servicesPage?.title || 'Our Services',
        description: dictionary.servicesPage?.description || 'Professional moving services',

        alternates: {
            canonical: `${baseUrl}/${locale}/services`,
            languages: {
                'x-default': `${baseUrl}/services`,
                'he': `${baseUrl}/he/${dictionary.urls?.['services'] || 'services'}`,
                'ru': `${baseUrl}/ru/${dictionary.urls?.['services'] || 'services'}`,
                'en': `${baseUrl}/en/${dictionary.urls?.['services'] || 'services'}`,
            },
        },
    };
}

// Локальные данные услуг (храним прямо в компоненте)
const getServicesData = (locale: 'he' | 'ru' | 'en') => {
    const services = {
        'apartment-moving': {
            id: 'apartment-moving',
            he: {
                title: 'הובלת דירה',
                description: 'מעבר דירה שלמה עם צוות מקצועי, כולל אריזה, הובלה ופירוק',
                slug: 'הובלת-דירה',
                features: [
                    'אריזה מקצועית של כל החפצים',
                    'צוות מנוסה ואחראי',
                    'כלי רכב מתאימים',
                    'ביטוח מלא על הנכסים'
                ],
                price: '₪1,500'
            },
            ru: {
                title: 'Переезд квартиры',
                description: 'Полный переезд квартиры с профессиональной командой, включая упаковку, транспортировку и сборку',
                slug: 'pereezd-kvartiry',
                features: [
                    'Профессиональная упаковка всех вещей',
                    'Опытная и ответственная команда',
                    'Подходящий транспорт',
                    'Полная страховка имущества'
                ],
                price: '₪1,500'
            },
            en: {
                title: 'Apartment Moving',
                description: 'Complete apartment moving with professional team, including packing, transportation and assembly',
                slug: 'apartment-moving',
                features: [
                    'Professional packing of all items',
                    'Experienced and responsible team',
                    'Suitable vehicles',
                    'Full property insurance'
                ],
                price: '₪1,500'
            }
        },
        'office-moving': {
            id: 'office-moving',
            he: {
                title: 'הובלת משרד',
                description: 'מעבר משרדים ועסקים עם מינימום השבתה לפעילות העסקית',
                slug: 'הובלת-משרד',
                features: [
                    'תכנון מוקדם של המעבר',
                    'ציוד מתקדם להובלת רהיטים',
                    'אבטחת מידע וציוד טכנולוגי',
                    'הרכבה מהירה במקום החדש'
                ],
                price: '₪3,000'
            },
            ru: {
                title: 'Переезд офиса',
                description: 'Переезд офисов и бизнесов с минимальным простоем деятельности',
                slug: 'ofisnyj-pereezd',
                features: [
                    'Предварительное планирование переезда',
                    'Современное оборудование для перевозки мебели',
                    'Защита информации и технологического оборудования',
                    'Быстрая сборка на новом месте'
                ],
                price: '₪3,000'
            },
            en: {
                title: 'Office Moving',
                description: 'Office and business relocation with minimal disruption to operations',
                slug: 'office-moving',
                features: [
                    'Early planning of the move',
                    'Advanced equipment for furniture transportation',
                    'Information and technology equipment security',
                    'Quick assembly at the new location'
                ],
                price: '₪3,000'
            }
        },
        'cargo-transportation': {
            id: 'cargo-transportation',
            he: {
                title: 'הובלת מטענים',
                description: 'הובלת מטענים קטנים וגדולים ברחבי הארץ',
                slug: 'הובלת-מטענים',
                features: [
                    'מגוון רחב של כלי רכב',
                    'הובלות פנים-ארציות',
                    'מעקב אחרי המשלוח',
                    'אחריות על הסחורה'
                ],
                price: '₪800'
            },
            ru: {
                title: 'Перевозка грузов',
                description: 'Перевозка малых и крупных грузов по всей стране',
                slug: 'gruzoperevozki',
                features: [
                    'Широкий выбор транспортных средств',
                    'Внутренние перевозки',
                    'Отслеживание доставки',
                    'Гарантия на груз'
                ],
                price: '₪800'
            },
            en: {
                title: 'Cargo Transportation',
                description: 'Transportation of small and large cargo throughout the country',
                slug: 'cargo-transportation',
                features: [
                    'Wide range of vehicles',
                    'Domestic transportation',
                    'Delivery tracking',
                    'Cargo guarantee'
                ],
                price: '₪800'
            }
        }
    };

    // Преобразуем в массив для текущей локали
    return Object.values(services).map(service => ({
        id: service.id,
        title: service[locale].title,
        description: service[locale].description,
        slug: service[locale].slug,
        image: `/services/${service.id}.jpg`,
        features: service[locale].features,
        price: service[locale].price
    }));
};

export default async function ServicesPage({ params }: Props) {
    const { locale } = await params;
    const dictionary = await getDictionary(locale);

    // Получаем данные услуг для текущей локали
    const services = getServicesData(locale);

    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <h1>{dictionary.servicesPage?.title || 'Our Services'}</h1>
                <p>{dictionary.servicesPage?.description || 'Professional moving services'}</p>
            </div>



            <section className={styles.additionalInfo}>
                <h2 className={styles.sectionTitle}>
                    {dictionary.servicesPage?.whyChooseUs?.title || 'Why Choose Us?'}
                </h2>

                <div className={styles.features}>
                    {(dictionary.servicesPage?.whyChooseUs?.features || []).map((feature: any, index: number) => (
                        <div key={index} className={styles.feature}>
                            <div className={styles.featureIcon}>{feature.icon}</div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}