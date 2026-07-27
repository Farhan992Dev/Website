import { z } from 'zod';

const copy = {
  fa: {
    fullName: 'نام کامل را وارد کنید.',
    email: 'یک ایمیل معتبر وارد کنید.',
    message: 'لطفاً توضیح کوتاهی درباره پروژه وارد کنید.',
    locale: 'زبان انتخاب‌شده معتبر نیست.'
  }
} as const;

export type ContactLocale = keyof typeof copy;

export function createContactInquirySchema(locale: ContactLocale) {
  const messages = copy[locale];

  return z.object({
    fullName: z.string().trim().min(2, messages.fullName),
    email: z.string().trim().email(messages.email),
    phone: z.string().trim().optional().or(z.literal('')),
    serviceInterest: z.string().trim().optional().or(z.literal('')),
    message: z.string().trim().min(10, messages.message),
    locale: z.enum(['fa'], { message: messages.locale })
  });
}

export type ContactInquiryInput = z.infer<ReturnType<typeof createContactInquirySchema>>;