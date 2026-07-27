import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function ContactSection({ content }: { content: { eyebrow: string; title: string; body: string; directContacts: Array<{ label: string; href: string }> }; }) {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-6 py-24 z-10 relative bg-black">
      <div className="grid gap-12 rounded-[3rem] border border-white/5 bg-white/[0.01] p-10 lg:grid-cols-[1.2fr_1fr] lg:p-16 relative overflow-hidden">
        
        <div className="space-y-8 relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-neutral-400">
            {content.eyebrow}
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{content.title}</h2>
          <p className="text-lg leading-relaxed text-neutral-400 font-light">{content.body}</p>
          <div className="flex flex-wrap gap-4 mt-2">
            {content.directContacts.map((item) => (
              <Button key={item.href} asChild variant="outline" className="rounded-full border-white/10 bg-transparent hover:bg-white/5 text-white px-8 transition-all hover:scale-105">
                <Link href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 relative z-10 flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">فرم درخواست پروژه</p>
          <p className="mt-6 text-lg leading-relaxed text-neutral-300 font-light">در صفحه تماس، فرم کامل پروژه در دسترس است و پیام شما برای ادامه بررسی دریافت می‌شود.</p>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-neutral-200 font-semibold px-8 transition-all hover:scale-105 w-full sm:w-auto">
               <Link href="/fa/contact">ورود به فرم تماس</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}