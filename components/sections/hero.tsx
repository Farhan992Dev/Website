"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { type Locale } from "@/lib/i18n/locales";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import nIcon from "../../public/node.svg";

export function HeroSection({
  content,
  locale,
}: {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    quickLinks: Array<{ label: string; href: string }>;
  };
  locale: Locale;
}) {
  return (
    <section className="relative overflow-hidden bg-main border-b border-white/5 hero-back ">
      {/* Extremely subtle minimalist spotlight */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto grid min-h-[85vh] w-full   gap-12 px-3  md:px-6 py-20 lg:grid-cols-[1.2fr_1fr] items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center gap-8"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10  backdrop-blur-md px-4 py-1.5 text-xs font-medium tracking-wider text-[#7779cd]">
            {content.eyebrow}
          </span>
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-[4.5rem] leading-[1.1]">
            <p className="[text-shadow:0_0_10px_rgba(119,121,205,0.5)]">
              طراحی و توسعه
            </p>
            <p className="text-[#8b54f1] mt-4 [text-shadow:0_0_10px_rgba(119,121,205,0.5)]">
              وب‌سایت‌های حرفه‌ای
            </p>
          </h1>
          <p className="max-w-xl font-14 leading-relaxed text-neutral-400">
            {content.description}
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Button
              asChild
              size="lg"
              className="rounded-xl border-[#020319] gradiant text-white px-8 transition-all hover:scale-105"
            >
              <Link href={`/${locale}${content.primaryCta.href}`}>
                {content.primaryCta.label}
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-xl border-white/10 bg-transparent hover:bg-white/5 text-white px-8 transition-all hover:scale-105"
            >
              <Link href={`/${locale}${content.secondaryCta.href}`}>
                {content.secondaryCta.label}
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-3 ">
            <Image
              src={"/node.svg"}
              className="border rounded-xl py-3 px-2"
              width={55}
              height={40}
              alt="nodejs"
            />
            <Image
              src={"/reac.svg"}
              className="border rounded-xl py-2 px-1"
              width={55}
              height={40}
              alt="react"
            />
            <Image
              src={"/net.svg"}
              className="border rounded-xl py-2 px-1"
              width={55}
              height={40}
              alt="net"
            />
            <Image
              src={"/next.svg"}
              className="border rounded-xl py-2 px-1"
              width={55}
              height={40}
              alt="docker"
            />
            <Image
              src={"/tailwind.svg"}
              className="border rounded-xl py-2 px-1"
              width={55}
              height={40}
              alt="tailwind"
            />
            <Image
              src={"/ts.svg"}
              className="border rounded-xl py-2 px-1"
              width={55}
              height={40}
              alt="ts"
            />
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative flex items-center justify-center lg:justify-end"
        ></motion.div> */}
      </div>
    </section>
  );
}
