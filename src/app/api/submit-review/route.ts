import {NextResponse} from 'next/server';

type ReviewSubmissionPayload = {
    rating: number;
    name: string;
    email: string;
    carrier: string;
    comment: string;
    consent: boolean;
    photoName: string | null;
};

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        return NextResponse.json({error: 'Missing RESEND_API_KEY'}, {status: 500});
    }

    const toEmail = process.env.RESEND_REVIEW_TO_EMAIL ?? process.env.RESEND_TO_EMAIL;
    if (!toEmail) {
        return NextResponse.json({error: 'Missing RESEND_REVIEW_TO_EMAIL'}, {status: 500});
    }

    const payload = (await request.json()) as ReviewSubmissionPayload;
    const {rating, name, email, carrier, comment, consent, photoName} = payload;

    const emailText = [
        'Новый отзыв с сайта',
        '',
        `Оценка: ${rating} / 5`,
        `Имя: ${name}`,
        `Email: ${email}`,
        `Перевозчик: ${carrier || 'Не указан'}`,
        `Комментарий: ${comment || 'Нет'}`,
        `Фото: ${photoName || 'Не прикреплено'}`,
        `Согласие: ${consent ? 'Да' : 'Нет'}`,
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
            to: [toEmail],
            subject: 'Новый отзыв с сайта',
            text: emailText,
        }),
    });

    if (!resendResponse.ok) {
        return NextResponse.json({error: 'Resend request failed'}, {status: 502});
    }

    return NextResponse.json({status: 'ok'});
}
