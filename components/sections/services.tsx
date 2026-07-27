'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/lib/i18n/locales';

export function ServicesSection({ content, locale }: { content: { eyebrow: string; title: string; intro: string; items: Array<{ title: string; summary: string; details: string }> }; locale: Locale; }) {
  const icons = [Code2, Smartphone, Bot];

  return (
    <section id="services" className="relative mx-auto w-full max-w-7xl px-6 py-24 z-10 bg-black">
      <div className="max-w-3xl space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-400">
          {content.eyebrow}
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{content.title}</h2>
        <p className="text-lg leading-relaxed text-neutral-400 font-light">{content.intro}</p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {content.items.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="group h-full border-white/5 bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:bg-white/5 hover:border-white/10 relative overflow-hidden rounded-3xl">
                <div className="absolute top-0 right-0 p-3 opacity-[0.03] transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700 text-white">
                  <Icon size={120} />
                </div>
                <CardHeader className="relative z-10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-xl font-medium text-white">{item.title}</CardTitle>
                  <CardDescription className="text-neutral-400 mt-2 font-light">{item.summary}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <p className="text-sm leading-relaxed text-neutral-500">{item.details}</p>
                  <Button asChild variant="ghost" className="px-0 text-white hover:text-neutral-300 hover:bg-transparent font-medium">
                    <Link href={`/${locale}/contact`}>مشاوره پروژه &larr;</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}