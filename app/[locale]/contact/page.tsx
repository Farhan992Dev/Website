import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { ContactSection } from "@/components/sections/contact";
import { getSiteContent } from "@/lib/i18n/content";
import { createLocalizedMetadata } from "@/lib/seo/metadata";
import { isLocale, type Locale } from "@/lib/i18n/locales";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : "fa";
  const content = getSiteContent(locale);
  return createLocalizedMetadata(
    locale,
    content.contact.title,
    content.contact.intro,
    "/contact",
  );
}

export default function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : "fa";
  const content = getSiteContent(locale);

  return (
    <div className="bg-main min-h-[calc(100vh-80px)] pt-20">
      <section className="mx-auto grid w-full   gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8 pb-24">
        <div className="space-y-8 mt-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-neutral-400">
            {content.contact.eyebrow}
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {content.contact.title}
          </h1>
          <p className="text-lg leading-relaxed text-neutral-400 font-light max-w-lg">
            {content.contact.intro}
          </p>

          <div className="pt-8 flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
              راه‌های ارتباطی مستقیم
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${content.company.email}`}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                ایمیل
              </a>
              <a
                href={content.company.messagingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                واتساپ
              </a>
              <a
                href={`tel:${content.company.phone}`}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                تلفن
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[3rem] border border-white/5 bg-white/[0.01] p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/50 border border-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </span>
          </div>
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">
              فرم درخواست پروژه
            </h2>
            <p className="text-neutral-400 text-sm">
              لطفاً اطلاعات خود را وارد کنید تا در سریع‌ترین زمان با شما تماس
              بگیریم.
            </p>
          </div>
          <ContactForm locale={locale} labels={content.contact.form} />
        </div>
      </section>
    </div>
  );
}
