import { NextResponse } from 'next/server';

type ContactSubmissionPayload = {
  locale: 'ru' | 'en' | 'he';
  name: string;
  email: string;
  comment: string;
};

const SUBJECT_BY_LOCALE: Record<ContactSubmissionPayload['locale'], string> = {
  ru: 'Новое обращение с страницы контактов',
  en: 'New inquiry from the contact page',
  he: 'פניה חדשה מדף יצירת הקשר',
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 });
  }

  const toEmail = process.env.EMAIL_TO;
  if (!toEmail) {
    return NextResponse.json({ error: 'Missing EMAIL_TO' }, { status: 500 });
  }

  const payload = (await request.json()) as ContactSubmissionPayload;
  const { locale, name, email, comment } = payload;

  if (!name?.trim() || !email?.trim() || !comment?.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const emailText = [
    'Новое сообщение с контактной формы сайта',
    '',
    `Локаль: ${locale}`,
    `Имя: ${name}`,
    `Email: ${email}`,
    `Комментарий: ${comment}`,
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
      subject: SUBJECT_BY_LOCALE[locale] ?? SUBJECT_BY_LOCALE.ru,
      text: emailText,
    }),
  });

  if (!resendResponse.ok) {
    return NextResponse.json({ error: 'Resend request failed' }, { status: 502 });
  }

  return NextResponse.json({ status: 'ok' });
}
