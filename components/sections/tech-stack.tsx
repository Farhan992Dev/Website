'use client';

import { motion } from 'framer-motion';

export function TechStackSection({ content }: { content: { eyebrow: string; title: string; description: string; items: string[] } }) {
  return (
    <section id="tech-stack" className="mx-auto w-full max-w-7xl px-6 py-24 z-10 relative bg-black">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-neutral-400">
          {content.eyebrow}
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{content.title}</h2>
        <p className="text-lg leading-relaxed text-neutral-400 font-light">{content.description}</p>
      </div>
      
      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {content.items.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] px-8 py-4 text-sm font-medium text-neutral-300 transition-all hover:bg-white/10 hover:border-white/20 hover:text-white"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
