import Link from 'next/link';

import { localizedPathForLocaleSwap } from '@/lib/i18n/links';
import { type Locale } from '@/lib/i18n/locales';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher({ locale, path, label }: { locale: Locale; path: string; label: string; }) {
  return (
    <Button variant="outline" size="sm" asChild>
      <Link href={localizedPathForLocaleSwap(locale, path)} aria-label={label}>
        {label}
      </Link>
    </Button>
  );
}