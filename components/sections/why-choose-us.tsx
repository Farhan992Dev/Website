"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Link } from "lucide-react";
import { Button } from "../ui/button";
import { Locale } from "@/lib/i18n/locales";

export function WhyChooseUsSection({
  content,
  locale,
}: {
  content: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    points: string[];
  };
  locale: Locale;
}) {
  return (
    <section
      id="why-us"
      className="mx-auto w-full px-6 py-24 z-10 relative bg-main  ideh-back"
    >
      <div className="space-y-8 rounded-2xl    bg-white/[0.01] p-5 lg:p-18 relative overflow-hidden">
        <div className="relative z-10">
          <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10  backdrop-blur-md px-2 text-sm font-medium tracking-wider text-[#7779cd]">
            <img src="/h-icon.png" className="w-10 h-10" alt="" />
            {content.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white ">
            {content.title}
          </h2>{" "}
          <p className="text-md mt-3 leading-relaxed text-neutral-400 font-light">
            {content.intro}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </div>
      </div>
    </section>
  );
}
