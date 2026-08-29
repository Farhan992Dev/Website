"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Smartphone, Pencil, Siren } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type Locale } from "@/lib/i18n/locales";
export function ServicesSection({
  content,
  locale,
}: {
  content: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ title: string; summary: string; details: string }>;
  };
  locale: Locale;
}) {
  const icons = [Siren, Smartphone, Code2, Pencil];

  return (
    <section
      id="services"
      className="relative mx-auto w-full flex   px-6 pt-24 pb-10 z-10 bg-main "
    >
      <div className="max-w-3xl space-y-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10  backdrop-blur-md px-4 py-1.5 text-sm font-medium tracking-wider text-[#7779cd]">
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
      <div className="mt-16 grid gap-6 md:grid-cols-4">
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
                <CardHeader className="relative flex justify-center flex-col items-center z-10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center m-auto justify-center rounded-full bg-white/10 text-white">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-xl font-medium text-white">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-neutral-400 flex  mt-2 font-light">
                    {item.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative flex justify-center  z-10">
                  {/* <p className="text-sm leading-relaxed text-neutral-500">
                    {item.details}
                  </p> */}

                  <Link
                    className="border rounded-full px-3 py-2"
                    href={`/${locale}/contact`}
                  >
                    {" "}
                    &larr;
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
