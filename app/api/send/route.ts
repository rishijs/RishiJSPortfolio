import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from 'app/components/emailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { fullname, email, subject, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: `${fullname} <onboarding@resend.dev>`,
      to: ['rishijs2002@gmail.com'],
      subject: subject+'-'+Date.now(),
      react: EmailTemplate({ fullname: fullname, message: message, email: email }),
    });

    if (error) {
        return NextResponse.json({ error: JSON.stringify(error) }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
