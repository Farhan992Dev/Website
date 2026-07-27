import type { Metadata } from 'next';

import { AboutSection } from '@/components/sections/about';
import { getSiteContent } from '@/lib/i18n/content';
import { createLocalizedMetadata } from '@/lib/seo/metadata';
import { isLocale, type Locale } from '@/lib/i18n/locales';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : 'fa';
  const content = getSiteContent(locale);
  return createLocalizedMetadata(locale, content.about.title, content.about.lead, '/about');
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : 'fa';
  const content = getSiteContent(locale);

  return <AboutSection content={content.about} />;
}