import type { Metadata } from "next";

import { getSiteContent } from "@/lib/i18n/content";
import { createLocalizedMetadata } from "@/lib/seo/metadata";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { ServicesPageSection } from "@/components/sections/servicesPage";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : "fa";
  const content = getSiteContent(locale);
  return createLocalizedMetadata(
    locale,
    content.services.title,
    content.services.intro,
    "/services",
  );
}

export default async function ServicesPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : "fa";
  const respons = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_API}/service/getAllService`,
  );
  const { data } = await respons.json();

  return (
    <ServicesPageSection
      locale={locale}
      content={{
        items: data?.map((item) => ({
          title: item.title,
          summary: item.description,
          tech: item.tags,
          tags: item.type,
          tags_persian: item.type,
          link: item.link,
          image: item.image,
          category: item.Category,
        })),
      }}
    />
  );
}
