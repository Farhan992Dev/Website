"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUsSection({
  content,
}: {
  content: { eyebrow: string; title: string; points: string[] };
}) {
  return (
    <section
      id="why-us"
      className="mx-auto w-full   px-6 py-24 z-10 relative bg-main "
    >
      <div className="space-y-8 rounded-[3rem] border border-white/5 bg-white/[0.01] p-10 lg:p-16 relative overflow-hidden">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-neutral-400">
            {content.eyebrow}
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {content.title}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.points.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:bg-white/5"
              >
                <CheckCircle2
                  className="text-neutral-500 shrink-0 mt-0.5"
                  size={24}
                  strokeWidth={1.5}
                />
                <p className="text-base leading-relaxed text-neutral-400 font-light">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
