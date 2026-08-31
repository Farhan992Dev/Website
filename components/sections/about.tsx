"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Icon } from "lucide-react";

export function AboutSection({
  content,
}: {
  content: {
    eyebrow: string;
    title: string;
    body?: string;
    lead?: string;
    story?: string;
    values?: string[];
  };
}) {
  return (
    <section
      id="about"
      className="mx-auto w-full  team-back md:my-20 px-3  md:px-6 z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="gap-12 rounded-[3rem] flex justify-end  py-10 border-white/5 bg-white/[0.01] p-3"
      >
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-20 w-full">
          {content.items.map((item, index) => {
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="w-full"
              >
                <div className="flex justify-center max-md:flex-col gap-3 items-center  z-10">
                  <div className="flex flex-col gap-3 items-center max-md:order-2">
                    <CardTitle className="text-2xl font-bold text-white">
                      {item.number}
                    </CardTitle>

                    <div className="text-sm text-neutral-400 text-center">
                      {item.title}
                    </div>
                  </div>

                  {/* آیکون */}
                  <div className="p-1 md:p-5 rounded-full bg-[#550cb533] max-md:order-1">
                    <img
                      src={item?.icon}
                      alt="icon"
                      className="w-15 h-10 object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
