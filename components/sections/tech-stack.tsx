"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TechStackSection({
  content,
}: {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
}) {
  return (
    <section
      id="tech-stack"
      className="mx-auto w-full  px-3  md:px-6  py-24 z-10 relative bg-main "
    >
      <div className="flex flex-col  text-center max-w-3xl  space-y-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10  backdrop-blur-md px-2 text-sm font-medium tracking-wider text-[#7779cd]">
          <img src="/h-icon.png" className="w-10 h-10" alt="" />
          {content.eyebrow}
        </span>
      </div>

      <div className="mt-5 flex overflow-x-auto max-md:mb-5 justify-center gap-4">
        {content.items.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex items-center justify-center rounded-2xl border gap-2 border-white/5 bg-white/[0.02] px-8 py-3 text-sm font-medium text-neutral-300 transition-all hover:bg-white/10 hover:border-white/20 hover:text-white"
          >
            <Image src={tech.img} width={40} height={30} alt="nodejs" />
            <div> {tech.text}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
