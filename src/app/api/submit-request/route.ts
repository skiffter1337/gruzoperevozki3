import {NextResponse} from 'next/server';

type SubmissionPayload = {
    calculator: {
        route: string;
        date: string;
        fromHasElevator: boolean;
        fromFloor: string;
        toHasElevator: boolean;
        toFloor: string;
        serviceType: string;
        needsAssembly: boolean;
        items: {name: string; count: number}[];
        activeRoom: string;
    };
    contact: {
        fullName: string;
        phone: string;
        comment: string;
        consent: boolean;
    };
};

const formatItems = (items: {name: string; count: number}[]) =>
    items.map((item) => `${item.name}: ${item.count}`).join('\n');

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        return NextResponse.json({error: 'Missing RESEND_API_KEY'}, {status: 500});
    }

    const payload = (await request.json()) as SubmissionPayload;
    const {calculator, contact} = payload;

    const emailText = [
        'Новая заявка с сайта',
        '',
        `Маршрут: ${calculator.route}`,
        `Дата: ${calculator.date}`,
        `Лифт (откуда): ${calculator.fromHasElevator ? 'Да' : 'Нет'}`,
        `Этаж (откуда): ${calculator.fromFloor || 'Не указано'}`,
        `Лифт (куда): ${calculator.toHasElevator ? 'Да' : 'Нет'}`,
        `Этаж (куда): ${calculator.toFloor || 'Не указано'}`,
        `Тип услуги: ${calculator.serviceType}`,
        `Нужна сборка/разборка: ${calculator.needsAssembly ? 'Да' : 'Нет'}`,
        `Комната: ${calculator.activeRoom}`,
        '',
        'Состав вещей:',
        formatItems(calculator.items),
        '',
        'Контактные данные:',
        `Имя: ${contact.fullName}`,
        `Телефон: ${contact.phone}`,
        `Комментарий: ${contact.comment || 'Нет'}`,
        `Согласие: ${contact.consent ? 'Да' : 'Нет'}`,
    ].join('\n');

    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

    const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: fromEmail,
            to: ['maavar.israel@gmail.com'],
            subject: 'Новая заявка с сайта',
            text: emailText,
        }),
    });

    if (!resendResponse.ok) {
        return NextResponse.json({error: 'Resend request failed'}, {status: 502});
    }

    return NextResponse.json({status: 'ok'});
}
