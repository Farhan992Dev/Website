import { defaultLocale, localeDirection, type Locale } from './locales';

export function localizedPath(_locale: Locale, path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `/${defaultLocale}${normalizedPath === '/' ? '' : normalizedPath}`;
}

export function localeHome(_locale: Locale) {
  return `/${defaultLocale}`;
}

export function otherLocale(locale: Locale) {
  return locale;
}

export function localizedPathForLocaleSwap(locale: Locale, path: string) {
  return localizedPath(locale, path);
}

export { defaultLocale, localeDirection };