import { NextResponse } from 'next/server';

import { BACKEND_API_URL } from '@/lib/api';
import { createContactInquirySchema, type ContactLocale } from '@/lib/validation/contact';

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const locale: ContactLocale = 'fa';
  const schema = createContactInquirySchema(locale);
  const parsed = schema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, issues: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const response = await fetch(`${BACKEND_API_URL}/contactUs/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
      cache: 'no-store',
    });

    const responseBody = await response.json().catch(() => null);

    return NextResponse.json(responseBody ?? { ok: response.ok }, { status: response.status });
  } catch (error) {
    console.error('Error forwarding contact request:', error);
    return NextResponse.json(
      { ok: false, message: 'Backend unavailable' },
      { status: 502 }
    );
  }
}