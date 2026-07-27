'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/lib/i18n/locales';

export function HeroSection({ content, locale }: { content: { eyebrow: string; title: string; description: string; primaryCta: { label: string; href: string }; secondaryCta: { label: string; href: string }; quickLinks: Array<{ label: string; href: string }>; }; locale: Locale; }) {
  return (
    <section className="relative overflow-hidden bg-black border-b border-white/5">
      {/* Extremely subtle minimalist spotlight */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto grid min-h-[85vh] w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_1fr] items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center gap-8"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-medium tracking-wider text-neutral-300">
            {content.eyebrow}
          </span>
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-[4.5rem] leading-[1.1]">
            طراحی و توسعه<br />
            <span className="text-neutral-500">وب‌سایت‌های حرفه‌ای</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-neutral-400">
            {content.description}
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Button asChild size="lg" className="rounded-full bg-white hover:bg-neutral-200 text-black font-semibold px-8 transition-all hover:scale-105">
              <Link href={`/${locale}${content.primaryCta.href}`}>{content.primaryCta.label}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-white/10 bg-transparent hover:bg-white/5 text-white px-8 transition-all hover:scale-105">
              <Link href={`/${locale}${content.secondaryCta.href}`}>{content.secondaryCta.label}</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-3 pt-6">
            {content.quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-white/5 bg-white/[0.02] px-5 py-2 text-sm text-neutral-400 transition-all hover:bg-white/5 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          {/* Minimalist Card */}
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-black p-8 shadow-2xl ring-1 ring-white/5">
            <div className="space-y-8">
              <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-3 text-white">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-2xl font-medium text-white leading-snug">تخصص در پیاده‌سازی پروژه‌های پیچیده</h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                معماری اصولی، کدهای بهینه و رابط کاربری چشم‌نواز؛ هر آنچه برای درخشش در دنیای دیجیتال نیاز دارید.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                  <p className="text-2xl font-semibold text-white">۱۰۰٪</p>
                  <p className="text-xs text-neutral-500 mt-1 uppercase tracking-widest">تضمین کیفیت</p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                  <p className="text-2xl font-semibold text-white">۲۴/۷</p>
                  <p className="text-xs text-neutral-500 mt-1 uppercase tracking-widest">پشتیبانی</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}