"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function PortfolioSection({
  content,
}: {
  content: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ title: string; category: string; href: string }>;
  };
}) {
  return (
    <section
      id="portfolio"
      className="relative mx-auto w-full px-3  md:px-6 pt-24 pb-20 z-10 bg-main "
    >
      <div className="max-w-3xl space-y-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10  backdrop-blur-md px-2 text-sm font-medium tracking-wider text-[#7779cd]">
          <img src="/h-icon.png" className="w-10 h-10" alt="" />
          {content.eyebrow}
        </span>
        <h2
          className="text-5xl tracking-tight text-white "
          style={{ lineHeight: "4rem" }}
        >
          {content.title}
        </h2>
        <p className="text-sm leading-relaxed text-neutral-400 font-light">
          {content.intro}
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-5">
        {content.items.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Card className="group h-full p-3 border-white/5 bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:bg-white/5 hover:border-white/10 relative overflow-hidden rounded-3xl">
              <div className="aspect-[6/5] w-full rounded-2xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors flex items-center justify-center">
                {/* Placeholder for project image/graphic */}
                <span className="text-neutral-600 font-mono text-sm tracking-widest uppercase">
                  Project Preview
                </span>
              </div>
              <div className="relative pt-6 pb-3 flex justify-center flex-col items-center z-10">
                <div className="flex items-center flex-col justify-center">
                  <CardDescription className=" text-xl text-white font-medium flex">
                    {project.category}
                  </CardDescription>
                  <CardTitle className="text-sm mt-3 text-neutral-400">
                    {project.title}
                  </CardTitle>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
