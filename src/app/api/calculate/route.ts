import {NextResponse} from 'next/server';

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

export async function POST(request: Request) {
    if (!resendApiKey) {
        return NextResponse.json(
            {error: 'Resend API key is not configured.'},
            {status: 500}
        );
    }

    let payload: Record<string, unknown> | null = null;
    try {
        payload = await request.json();
    } catch (error) {
        return NextResponse.json({error: 'Invalid request body.'}, {status: 400});
    }
    const {
        route,
        date,
        fromHasElevator,
        fromFloor,
        toHasElevator,
        toFloor,
        serviceType,
        needsAssembly,
        items,
        activeRoom,
        fullName,
        phone,
        comment,
    } = payload ?? {};

    if (!route || !date || !fullName || !phone) {
        return NextResponse.json({error: 'Missing required fields.'}, {status: 400});
    }

    const itemsList = Array.isArray(items)
        ? items
              .map((item: {name?: string; count?: number}) => `${item.name ?? ''} (${item.count ?? 0})`)
              .join(', ')
        : '—';

    const emailText = [
        `Новая заявка на перевозку`,
        ``,
        `Маршрут: ${route}`,
        `Дата: ${date}`,
        `Тип услуги: ${serviceType ?? '—'}`,
        `Лифт (откуда): ${fromHasElevator ? 'Да' : 'Нет'}`,
        `Этаж (откуда): ${fromFloor || '—'}`,
        `Лифт (куда): ${toHasElevator ? 'Да' : 'Нет'}`,
        `Этаж (куда): ${toFloor || '—'}`,
        `Разборка/сборка: ${needsAssembly ? 'Да' : 'Нет'}`,
        `Комната: ${activeRoom ?? '—'}`,
        `Предметы: ${itemsList || '—'}`,
        ``,
        `Контактные данные`,
        `ФИО: ${fullName}`,
        `Телефон: ${phone}`,
        `Комментарий: ${comment || '—'}`,
    ].join('\n');

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: resendFromEmail,
                to: ['shulapov1999@gmail.com'],
                subject: 'Новая заявка на перевозку',
                text: emailText,
            }),
        });

        if (!response.ok) {
            return NextResponse.json({error: 'Failed to send email.'}, {status: 500});
        }

        return NextResponse.json({ok: true});
    } catch (error) {
        return NextResponse.json({error: 'Failed to send email.'}, {status: 500});
    }
}
