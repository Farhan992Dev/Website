import { notFound } from "next/navigation";

import { SiteNav } from "@/components/navigation/site-nav";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { VisitorLogger } from "@/components/providers/visitor-logger";
import { getSiteContent } from "@/lib/i18n/content";
import {
  isLocale,
  localeDirection,
  locales,
  type Locale,
} from "@/lib/i18n/locales";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const content = getSiteContent(locale);

  return (
    <div
      lang={locale}
      dir={localeDirection[locale]}
      className="min-h-screen bg-main!"
    >
      <CustomCursor />
      <VisitorLogger />
      <SmoothScrollProvider>
        <SiteNav locale={locale} content={content} />
        <main className="w-[90%] m-auto max-md:w-full max-md:px-3">{children}</main>
        <footer className="border-t border-white/5 bg-main">
          <div className="mx-auto flex w-full   flex-col gap-4 px-6 py-12 text-sm text-neutral-500">
            <p className="font-semibold text-white tracking-widest uppercase">
              {content.company.name}
            </p>
            <p className="text-neutral-400">{content.company.tagline}</p>
            <p className="text-neutral-600 mt-4 pt-4 border-t border-white/5">
              {content.company.email} · {content.company.phone}
            </p>
          </div>
        </footer>
      </SmoothScrollProvider>
    </div>
  );
}
