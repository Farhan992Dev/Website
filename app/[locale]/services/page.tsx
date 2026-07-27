import type { Metadata } from 'next';

import { ServicesSection } from '@/components/sections/services';
import { getSiteContent } from '@/lib/i18n/content';
import { createLocalizedMetadata } from '@/lib/seo/metadata';
import { isLocale, type Locale } from '@/lib/i18n/locales';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : 'fa';
  const content = getSiteContent(locale);
  return createLocalizedMetadata(locale, content.services.title, content.services.intro, '/services');
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : 'fa';
  const content = getSiteContent(locale);

  return <ServicesSection locale={locale} content={{ eyebrow: content.services.eyebrow, title: content.services.title, intro: content.services.intro, items: content.services.offerings.map((item) => ({ title: item.title, summary: item.summary, details: item.bullets.join(' · ') })) }} />;
}