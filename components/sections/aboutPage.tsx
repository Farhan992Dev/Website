"use client";

import { motion } from "framer-motion";
import { Card, CardDescription, CardTitle } from "../ui/card";

export function AboutPageComponent({
  content,
}: {
  content: {
    eyebrow: string;
    title: string;
    cap: string;
    body?: string;
    lead?: string;
    story?: string;
    values?: string[];
  };
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-main  about-hero-back">
        <div className="relative mx-auto grid mt-10 md:mt-0 md:min-h-[65vh] w-full gap-12 px-3  md:px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center gap-8"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10  backdrop-blur-md px-4 py-1.5 text-xs font-medium tracking-wider text-[#7779cd]">
              {content.eyebrow}
            </span>
            <h1 className="max-w-3xl text-2xl font-bold tracking-tight text-white sm:text-6xl lg:text-[2rem] leading-[1.1]">
              <p className="[text-shadow:0_0_10px_rgba(119,121,205,0.5)]">
                {content.title}
              </p>
              <p className="text-[#8b54f1] mt-4 [text-shadow:0_0_10px_rgba(119,121,205,0.5)]">
                {content.cap}
              </p>
            </h1>
            <p className="max-w-xl font-14 leading-relaxed text-neutral-400">
              {content.story}
            </p>
          </motion.div>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="gap-12 mt-20 md:mt-0 w-full md:w-[70%] border border-[#111280] rounded-xl flex justify-center mx-auto bg-white/[0.01] p-3"
      >
        <div className="flex gap-3 md:gap-20 w-full">
          {content?.items.map((item, index) => {
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="w-full"
              >
                <div className="flex justify-center max-md:flex-col gap-3 items-center  py-3   z-10">
                  <div className="flex flex-col gap-3 items-center max-md:order-2">
                    <CardTitle className="text-xl md:text-2xl font-bold text-white">
                      {item.number}
                    </CardTitle>

                    <div className="text-sm text-neutral-400 text-center">
                      {item.title}
                    </div>
                  </div>
                  <div className="p-1 md:p-2 rounded-full bg-[#550cb533] max-md:order-1">
                    <img
                      src={item?.icon}
                      alt="icon"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <section
        id="why-us"
        className="mx-auto w-full pr-2 py-10 z-10 mt-10 relative bg-main  aboutUs-back "
      >
        <div className="space-y-8 rounded-2xl flex justify-between  p-5 lg:p-18 relative overflow-hidden">
          <div className="hidden md:block md:w-[60%]"></div>
          <div className="relative w-full md:w-[40%] z-10">
            <span className="inline-flex w-fit items-center gap-2 py-1 rounded-lg border border-white/10  backdrop-blur-md px-2 text-sm font-medium tracking-wider text-[#7779cd]">
              {content.section_eyebrow}
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white ">
              {content.section_title}
            </h2>
            <p className="text-md mt-3 leading-relaxed text-neutral-400 font-light">
              {content.section_cap}
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-wrap gap-4 mt-2"></div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="why-us"
        className="mx-auto w-full pr-2 md:py-10 z-10 relative bg-main "
      >
        <div className="space-y-8 rounded-2xl flex p-5 lg:p-18 relative overflow-hidden">
          <div className="relative w-full md:w-[40%] z-10">
            <span className="inline-flex w-fit items-center gap-2 py-1 rounded-lg border border-white/10  backdrop-blur-md px-2 text-sm font-medium tracking-wider text-[#7779cd]">
              {content.section_eyebrow_3}
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white ">
              {content.section_title_3}
            </h2>
          </div>
        </div>
        <div className="mt-5 gap-6 flex flex-col md:flex-row justify-center">
          {content.items_2?.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="w-full md:w-[17%]"
            >
              <Card className="group h-full p-3 border-white/5 bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:bg-white/5 hover:border-white/10 relative overflow-hidden rounded-3xl">
                <div className="p-1 md:p-2 flex justify-center max-md:order-1">
                  <img
                    src={project?.icon}
                    alt="icon"
                    className="w-10 h-10 object-contain rounded-full bg-[#550cb533]"
                  />
                </div>
                <div className="relative pt-6 pb-3 flex justify-center flex-col items-center z-10">
                  <div className="flex items-center flex-col justify-center">
                    <CardDescription className=" text-xl text-white font-medium flex">
                      {project.title}
                    </CardDescription>
                    <CardTitle className="text-sm mt-3 text-neutral-400">
                      {project.desc}
                    </CardTitle>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
