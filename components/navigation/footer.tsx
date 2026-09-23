import Image from "next/image";
import Link from "next/link";

export const Footer = ({ content }) => {
  return (
    <>
      <footer className="border-t team-back mt-20 bg-main">
        <div className="w-full px-10 md:px-20 md:pb-10 flex-col md:flex-row flex justify-between">
          <div className="flex flex-col md:flex-row md:gap-20 gap-10 pt-10">
            <div className="mx-auto flex flex-col md:border-l pl-10 gap-4 text-sm text-neutral-500">
              <p className="font-semibold text-white tracking-widest uppercase">
                تماس با ما
              </p>
              <a
                href={`mailto:${content.company.email}`}
                className="text-white"
              >
                {content.company.email}
              </a>
              <a
                href={`tel:${content.company.phone}`}
                className="text-white md:mt-2"
              >
                {content.company.phone}
              </a>
            </div>
            <div className="md:hidden flex md:mt-8">
              <div className="mx-auto flex flex-col md:border-l pl-10  gap-4 text-sm text-neutral-500">
                <p className="font-semibold text-white tracking-widest uppercase">
                  لینک های مفید
                </p>
                <Link href={"/fa/about"} className="text-neutral-400">
                  درباره ما
                </Link>
                <Link href={"/fa/services"} className="text-neutral-400">
                  نمونه کار ها{" "}
                </Link>
                <Link href={"/fa/contact"} className="text-neutral-400">
                  تماس با ما
                </Link>
              </div>
              <div className="mx-auto flex flex-col gap-4 text-sm text-neutral-500">
                <p className="font-semibold text-white tracking-widest uppercase">
                  خدمات
                </p>
                <p className="text-neutral-400">توسعه وب </p>
                <p className="text-neutral-400"> اپلیکیشن موبایل </p>
                <p className="text-neutral-400">مشاوره دیجیتال </p>
                <p className="text-neutral-400">طراحی UI/UX </p>
              </div>
            </div>
            <div className="mx-auto hidden mt-5 md:mt-0 md:flex flex-col md:border-l pl-10  gap-4 text-sm text-neutral-500">
              <p className="font-semibold text-white tracking-widest uppercase">
                لینک های مفید
              </p>
              <Link href={"/fa/about"} className="text-neutral-400">
                درباره ما
              </Link>
              <Link href={"/fa/services"} className="text-neutral-400">
                نمونه کار ها{" "}
              </Link>
              <Link href={"/fa/contact"} className="text-neutral-400">
                تماس با ما
              </Link>
            </div>
            <div className="mx-auto hidden md:flex flex-col gap-4 text-sm text-neutral-500">
              <p className="font-semibold text-white tracking-widest uppercase">
                خدمات
              </p>
              <p className="text-neutral-400">توسعه وب </p>
              <p className="text-neutral-400"> اپلیکیشن موبایل </p>
              <p className="text-neutral-400">مشاوره دیجیتال </p>
              <p className="text-neutral-400">طراحی UI/UX </p>
            </div>
          </div>
          <div className="flex flex-col items-center pt-10 gap-3">
            <Image
              width={600}
              height={300}
              src={content.company.logo}
              alt={content.company.tagline}
              className="w-[240px]"
            />
            <p className="text-neutral-400 text-sm">
              {content.company.tagline}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center pb-3 text-neutral-400 text-sm">
          {content.company.copyRight}
        </div>
      </footer>
    </>
  );
};
