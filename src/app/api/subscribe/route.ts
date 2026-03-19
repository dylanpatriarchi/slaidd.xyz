import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    const webhookUrl = process.env.WEBHOOK_URL;
    if (!webhookUrl) {
      throw new Error('WEBHOOK_URL not defined');
    }
    const user = process.env.WEBHOOK_USER;
    if (!user) {
      throw new Error('WEBHOOK_USER not defined');
    }
    const pass = process.env.WEBHOOK_PASS;
    if (!pass) {
      throw new Error('WEBHOOK_PASS not defined');
    }
    const credentials = Buffer.from(`${user}:${pass}`).toString('base64');

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`,
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Webhook rejected subscription');
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('API Error:', error.message);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
