'use client';

import { motion } from 'framer-motion';

export function AboutSection({ content }: { content: { eyebrow: string; title: string; body?: string; lead?: string; story?: string; values?: string[] } }) {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-6 py-24 z-10 relative bg-black">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid gap-12 rounded-[3rem] border border-white/5 bg-white/[0.01] p-10 lg:grid-cols-[1.2fr_1fr] lg:p-16"
      >
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-neutral-400">
            {content.eyebrow}
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">{content.title}</h2>
          <p className="text-lg leading-relaxed text-neutral-400 font-light">{content.body ?? content.lead}</p>
          {content.story ? <p className="text-lg leading-relaxed text-neutral-500 font-light">{content.story}</p> : null}
        </div>
        
        {content.values?.length ? (
          <div className="grid gap-4 sm:grid-cols-2 content-center">
            {content.values.map((value, index) => (
              <motion.div 
                key={value}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-8 text-center text-sm font-medium text-neutral-300 transition-all hover:bg-white/5"
              >
                {value}
              </motion.div>
            ))}
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}