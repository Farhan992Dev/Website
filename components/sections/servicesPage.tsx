"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Pencil,
  Siren,
  SquareArrowOutUpRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type Locale } from "@/lib/i18n/locales";
import { usePathname, useSearchParams } from "next/navigation";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ServicesPageSection({
  content,
  locale,
}: {
  content: {
    items: Array<{
      title: string;
      summary: string;
      tech: [string];
      link?: string;
      tags: string;
      tags_persian: string;
      image: string;
    }>;
  };
  locale: Locale;
}) {
  const pathname = usePathname();
  const serchParams = useSearchParams();
  const icons = [Siren, Smartphone, Code2, Pencil];
  const [categoryData, setCategoryData] = useState([]);
  const filter = serchParams.get("filter") || "";

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        "https://web-site-back.vercel.app/category/getAll",
      );

      const data = await response.json();
      setCategoryData(data?.category);
    };

    getCategories();
  }, []);

  const filteredItems =
    content &&
    content?.items?.filter((item) => {
      if (!filter) return true;

      return filter === "" || item?.category?.title === filter;
    });

  return (
    <section
      id="services"
      className="relative mx-auto w-full flex-col px-3 md:px-6 md:pt-10 pt-5  md:pb-10 z-10 bg-main "
    >
      <div className="flex flex-col  service-back min-h-[40vh] md:min-h-[50vh]  justify-center gap-8">
        <span className="hidden md:inline-flex w-fit items-center gap-2 rounded-lg border border-white/10  backdrop-blur-md px-2 text-sm font-medium tracking-wider text-[#7779cd]">
          <img src="/h-icon.png" className="w-10 h-10" alt="" />
          خدمات
        </span>

        <h1 className="text-xl font-bold mt-[12rem]  tracking-tight flex flex-col text-white  lg:text-[3.5rem] leading-[1.1]">
          <p className="[text-shadow:0_0_10px_rgba(119,121,205,0.5)]">
            نمونه کار های ما
          </p>
          <p className="text-[#8b54f1] mt-4 [text-shadow:0_0_10px_rgba(119,121,205,0.5)]">
            ایده ها به واقعیت تبدیل میشوند
          </p>
        </h1>

        <p className="text-sm leading-relaxed  text-neutral-400 font-light">
          در این بخش،بخشی از پروژه های موفق و همکارهای ما را مشاهده میکنید.
        </p>
      </div>
      <div className="flex flex-wrap mt-5 gap-4">
        <Button
          asChild
          size="default"
          className={` ${filter == "" ? "gradiant  text-white " : "gradiant-options text-white border border-[#111280] "} rounded-xl transition-all hover:scale-105`}
        >
          <Link href={`/${locale}/services`} replace>
            همه
          </Link>
        </Button>
        {categoryData?.length > 0 &&
          categoryData?.map((item) => (
            <Button
              asChild
              size="default"
              className={` ${filter == item?.title ? "gradiant  text-white " : "gradiant-options text-white border border-[#111280] "} rounded-xl transition-all hover:scale-105`}
            >
              <Link href={`/${locale}/services?filter=${item?.title}`} replace>
                {item.title}{" "}
              </Link>
            </Button>
          ))}
      </div>
      <div key={filter} className="mt-5 md:mt-[3rem] grid gap-6 md:grid-cols-4">
        {filteredItems?.map((item, index) => {
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="group h-full border-white/5 bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:bg-white/5 hover:border-white/10 relative overflow-hidden rounded-xl">
                <CardHeader className="relative flex flex-col z-10">
                  <div className="flex w-full justify-end">
                    <div className="mb-4 font-12 inline-flex py-1 px-2 rounded-lg gradiant-options text-white">
                      {item.category?.title}
                    </div>
                  </div>
                  <div>
                    <Image
                      alt={item.title}
                      // src={`http://localhost:4000${item.image}`}
                      src={`https://web-site-back.vercel.app${item.image}`}
                      className="object-fill! rounded-xl h-full w-full"
                      width={700}
                      height={500}
                    />
                  </div>
                  <CardTitle className="text-xl mt-3 font-medium text-white">
                    {item.title}
                  </CardTitle>

                  <CardDescription className="text-neutral-400  flex mt-1 font-light">
                    {item.summary}
                  </CardDescription>

                  <div className="flex w-full mt-3 justify-end gap-2">
                    {item.tech.map((i) => (
                      <div className=" font-12 gap-2 flex py-1 px-2 rounded-md gradiant-options text-white border border-[#111280]">
                        {i}
                      </div>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="mt-3 flex items-center justify-between z-10">
                  <Link target="_blank" className="font-14" href={item?.link}>
                    مشاهده پروژه
                  </Link>
                  <Link target="_blank" href={item?.link}>
                    <SquareArrowOutUpRight className="w-[20px]" />
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
