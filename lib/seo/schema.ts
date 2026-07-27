import { localizedCanonical } from '@/lib/seo/metadata';
import { type Locale } from '@/lib/i18n/locales';

export function createOrganizationSchema(locale: Locale, siteName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    description,
    url: localizedCanonical(locale),
    areaServed: ['IR', 'Global'],
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['Persian']
    }]
  };
}

export function createWebPageSchema(locale: Locale, title: string, description: string, path = '/') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: localizedCanonical(locale, path)
  };
}