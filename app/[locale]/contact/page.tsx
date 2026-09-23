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
    <div className="bg-main md:min-h-[calc(100vh-80px)] pt-10 md:pt-20">
      <section className="mx-auto flex flex-col w-full gap-16 px-2 md:px-5 pb-24">
        <div className="space-y-8 contact-back mt-10">
          <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10  backdrop-blur-md px-2 text-sm font-medium tracking-wider text-[#7779cd]">
            <img src="/h-icon.png" className="w-10 h-10" alt="" />
            {content.contact.eyebrow}
          </span>

          <h1 className="max-w-3xl text-2xl font-bold tracking-tight text-[#8b54f1] [text-shadow:0_0_10px_rgba(119,121,205,0.5)] sm:text-xl lg:text-[4.5rem] leading-[1.1]">
            {content.contact.title}
          </h1>

          <p className="max-w-xl font-14 leading-relaxed text-neutral-400">
            {content.contact.intro}
          </p>

          <div className=" flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
              راه‌های ارتباطی مستقیم
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center rounded-full border border-white/10 py-3 px-2">
                <a href={`mailto:${content.company.email}`}>
                  <img src="/email.svg" className="w-10 h-7" alt="" />
                </a>
              </div>
              <div className="flex items-center rounded-full border border-white/10 py-3 px-2">
                <a href={`mailto:${content.company.messagingUrl}`}>
                   <img src="/whatsapp.svg" className="w-10 h-7" alt="" />
                </a>
              </div>
              <div className="flex items-center rounded-full border border-white/10 py-3 px-2">
                <a href={`tel:${content.company.phone}`}>
                  <img src="/phone.svg" className="w-10 h-7" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1rem] w-full  md:w-[50%] mx-auto border border-white/5 bg-white/[0.01] p-4 sm:p-12 relative overflow-hidden">
          <div className=" mb-10">
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
