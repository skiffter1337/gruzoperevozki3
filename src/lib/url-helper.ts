import {getDictionary} from '@/lib/dictionaries';

/**
 * Функция для перевода URL между языками
 */
export async function getTranslatedUrl(
    currentPath: string,
    targetLocale: 'he' | 'ru' | 'en'
): Promise<string> {
    // Извлекаем сегменты пути
    const segments = currentPath.split('/').filter(Boolean);

    // Если путь пустой, возвращаем корень для целевого языка
    if (segments.length === 0) {
        return `/${targetLocale}`;
    }

    // Первый сегмент - текущая локаль
    const currentLocale = segments[0] as 'he' | 'ru' | 'en' | string;

    // Если локаль не поддерживается, добавляем целевую локаль в начало
    if (!['he', 'ru', 'en'].includes(currentLocale)) {
        return `/${targetLocale}${currentPath}`;
    }

    // Если локаль уже целевая, возвращаем тот же путь
    if (currentLocale === targetLocale) {
        return currentPath;
    }

    // Загружаем словари для текущего и целевого языков
    const currentDict = await getDictionary(currentLocale);
    const targetDict = await getDictionary(targetLocale);

    // Преобразуем оставшиеся сегменты
    const translatedSegments = segments.slice(1).map(segment => {
        // Пытаемся найти перевод в urls
        if (currentDict.urls && targetDict.urls) {
            // Находим ключ по значению в текущем словаре
            const urlKey = Object.keys(currentDict.urls).find(
                key => currentDict.urls![key] === segment
            );

            if (urlKey && targetDict.urls[urlKey]) {
                return targetDict.urls[urlKey];
            }
        }

        // Если нет перевода, оставляем как есть
        return segment;
    });

    // Собираем новый путь
    return `/${targetLocale}/${translatedSegments.join('/')}`;
}

