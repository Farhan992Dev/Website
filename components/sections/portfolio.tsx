'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function PortfolioSection({ content }: { content: { eyebrow: string; title: string; items: Array<{ title: string; category: string; href: string }> } }) {
  return (
    <section id="portfolio" className="mx-auto w-full max-w-7xl px-6 py-24 z-10 relative bg-black">
      <div className="flex flex-col items-start max-w-3xl space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-neutral-400">
          {content.eyebrow}
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{content.title}</h2>
      </div>
      
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {content.items.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Link href={project.href} className="group block h-full rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/5 hover:border-white/10 relative overflow-hidden">
              <div className="aspect-[4/3] w-full rounded-2xl bg-white/5 mb-8 border border-white/5 group-hover:border-white/10 transition-colors flex items-center justify-center">
                 {/* Placeholder for project image/graphic */}
                 <span className="text-neutral-600 font-mono text-sm tracking-widest uppercase">Project Preview</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-2">{project.category}</p>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                </div>
                <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white opacity-50 group-hover:opacity-100 transition-opacity">
                  &rarr;
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
