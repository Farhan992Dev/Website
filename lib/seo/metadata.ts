import type { Metadata } from 'next';
import { defaultLocale, type Locale } from '@/lib/i18n/locales';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio.example';

export function createPageMetadata({ locale, title, description, path = '/' }: { locale: Locale; title: string; description: string; path?: string; }): Metadata {
  const canonicalPath = path === '/' ? `/${defaultLocale}` : `/${defaultLocale}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${canonicalPath}`,
      languages: {
        fa: `${siteUrl}${canonicalPath}`
      }
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${canonicalPath}`,
      type: 'website',
      locale: 'fa_IR'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

export function createLocalizedMetadata(locale: Locale, title: string, description: string, path = '/') {
  return createPageMetadata({ locale, title, description, path });
}

export function localizedCanonical(locale: Locale, path = '/') {
  return `${siteUrl}/${defaultLocale}${path === '/' ? '' : path}`;
}

export function defaultMetadata() {
  return createLocalizedMetadata(defaultLocale, 'Portfolio', 'Agency portfolio website');
}