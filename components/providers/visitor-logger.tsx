'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { logVisitor } from '@/lib/api';

export function VisitorLogger() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      logVisitor(pathname);
    }
  }, [pathname]);

  return null;
}
