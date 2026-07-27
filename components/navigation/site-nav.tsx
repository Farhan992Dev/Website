'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { localizedPath, type Locale } from '@/lib/i18n/links';
import { type SiteContent } from '@/types/site';
import { Button } from '@/components/ui/button';

export function SiteNav({ locale, content }: { locale: Locale; content: SiteContent; }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href={localizedPath(locale, '/')} className="inline-flex items-center gap-3 text-sm font-bold tracking-wide text-white relative z-[60]">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-xs font-bold text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]">T</span>
          <span className="max-w-[11rem] leading-5">{content.navigation.brand}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {content.navigation.items.map((item) => (
            <Link key={item.href} href={localizedPath(locale, item.href)} className="text-sm font-medium text-neutral-400 transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:09354663872" className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2 rounded-full transition-all" dir="ltr">
            0935 466 3872
          </a>
          <Button asChild size="sm" className="rounded-full bg-white text-black hover:bg-neutral-200 font-semibold px-6">
            <Link href={localizedPath(locale, '/contact')}>{content.navigation.contactLabel}</Link>
          </Button>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex items-center gap-3 md:hidden relative z-[60]">
          <a href="tel:09354663872" className="inline-flex items-center text-xs font-bold text-white bg-white/10 active:bg-white/20 border border-white/20 px-3 py-1.5 rounded-full" dir="ltr">
            0935 466 3872
          </a>
          <button 
            className="p-2 text-white bg-transparent"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-0 top-full flex flex-col bg-black/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl md:hidden"
            >
              <nav className="flex flex-col gap-6" aria-label="Mobile">
                {content.navigation.items.map((item) => (
                  <Link 
                    key={item.href} 
                    href={localizedPath(locale, item.href)} 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-neutral-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <a href="tel:09354663872" className="flex items-center justify-center w-full py-2 text-lg font-bold text-white tracking-widest" dir="ltr">
                    0935 466 3872
                  </a>
                  <Button asChild size="lg" className="w-full rounded-full bg-white text-black hover:bg-neutral-200 font-semibold">
                    <Link href={localizedPath(locale, '/contact')} onClick={() => setIsOpen(false)}>
                      {content.navigation.contactLabel}
                    </Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}