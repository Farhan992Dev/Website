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
import { Footer } from "@/components/navigation/footer";

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
        <main className="w-[90%] m-auto max-md:w-full max-md:px-3">
          {children}
        </main>
        {/* <Footer content={content} /> */}
      </SmoothScrollProvider>
    </div>
  );
}
