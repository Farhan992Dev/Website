import type { MetadataRoute } from 'next';

import { locales } from '@/lib/i18n/locales';

const routes = ['', '/about', '/services', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `https://portfolio.example/${locale}${route}`,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.7
    }))
  );
}