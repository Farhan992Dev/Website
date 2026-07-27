import { faSiteContent } from '@/content/fa/site';
import { type Locale } from './locales';

const contentByLocale = {
  fa: faSiteContent
} as const;

export function getSiteContent(locale: Locale) {
  return contentByLocale[locale] ?? contentByLocale.fa;
}