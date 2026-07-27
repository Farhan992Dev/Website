import { NextResponse } from 'next/server';

import { createContactInquirySchema, type ContactLocale } from '@/lib/validation/contact';

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const locale: ContactLocale = 'fa';
  const schema = createContactInquirySchema(locale);
  const parsed = schema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, issues: parsed.error.flatten() }, { status: 400 });
  }

  return NextResponse.json({ ok: true, locale, message: 'received' });
}