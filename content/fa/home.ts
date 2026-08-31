export const faHomeContent = {
  hero: {
    eyebrow: "خلق تجربه های دیجیتال ماندگار",
    title: "طراحی و توسعه وب‌سایت‌های حرفه‌ای",
    description:
      "تیمی متخصص برای خلق بهترین تجربه‌های دیجیتال و اجرای پروژه‌های شما با بالاترین کیفیت و سرعت.",
    primaryCta: { label: "شروع پروژه", href: "/contact" },
    secondaryCta: { label: "مشاهده نمونه کارها", href: "/services" },
    heroImage: "/heroImage.png",
    quickLinks: [
      { label: "خدمات", href: "#services" },
      { label: "درباره ما", href: "#about" },
      { label: "چرا ما", href: "#why-us" },
    ],
  },
  services: {
    eyebrow: "خدمات ما",
    title: "راهکار های دیجیتال برای رشد کسب و کار شما",
    intro:
      "از ایده تا اجرا،در کنار شما هستیم تا بهترین تجربه دیجیتال را برای کاربران تان خلق کنیم.",
    items: [
      {
        title: "مشاوره دیجیتال    ",
        summary: "تحلیل، استراتژی و راهکار های دیجیتال تخصصی",
        details: "فروشگاه‌های اختصاصی و قدرتمند با تجربه خرید بی‌نقص.",
      },
      {
        title: "  اپلیکیشن موبایل",
        summary: "توسعه اپ های اندروید و ios با عملکرد بالا",
        details: "توسعه برنامه‌های اندروید و iOS با بهترین تکنولوژی‌ها.",
      },
      {
        title: "توسعه وب  ",
        summary: "سایت های سریع ، امن و مقایس پذیر",
        details: "ربات‌های هوشمند و کاربردی برای تسهیل ارتباط با مشتریان.",
      },
      {
        title: "طراحی UI/UX  ",
        summary: "طراحی رابط کاربری مدرن و تجربه کاربری مدرن",
        details: "ربات‌های هوشمند و کاربردی برای تسهیل ارتباط با مشتریان.",
      },
    ],
  },
  aboutPreview: {
    // eyebrow: "درباره ما",
    // title: "تیمی متشکل از برنامه‌نویسان باسابقه و متخصص",
    // body: "ما روی کیفیت، سرعت و معماری اصولی نرم‌افزار تمرکز داریم تا بهترین نتیجه را برای شما خلق کنیم.",
    items: [
      {
        number: "7",
        title: "  تیم متخصص      ",
        icon: "user.svg",
      },
      {
        number: "500+",

        title: "   مشتری فعال  ",
        icon: "customer.svg",
      },
      {
        number: "%97",

        title: " رضایت مشتریان    ",
        icon: "consent.svg",
      },
      {
        number: "20+",

        title: "  پروژه موفق ",
        icon: "project.svg",
      },
      {
        number: "7+",

        title: " سال تجربه",
        icon: "date.svg",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "همین حالا شروع کنید  ",
    title: "ایده شما، شروع یک تحول دیجیتال است",
    intro: "بیایید با هم ، آینده دیجیتال کسب و کار شما را بسازیم.",
    primaryCta: { label: "شروع پروژه", href: "/contact" },
    secondaryCta: { label: "تماس باما  ", href: "/contact" },
  },
  contact: {
    eyebrow: "تماس با ما",
    title: "برای شروع پروژه، مسیر تماس همیشه روشن است",
    body: "می‌توانید از فرم، ایمیل یا پیام‌رسان استفاده کنید. ما اطلاعات اولیه را دریافت می‌کنیم و برای ادامه گفتگو با شما تماس می‌گیریم.",
    directContacts: [
      { label: "ایمیل", href: "mailto:info@toseegaran-novin.ir" },
      { label: "واتساپ", href: "https://wa.me/989354663872" },
      { label: "تلفن", href: "tel:09354663872" },
    ],
  },
  techStack: {
    eyebrow: "تکنولوژی‌های ما",
    // title: "ابزارهایی که برای توسعه استفاده می‌کنیم",
    // description:
    //   "استفاده از به‌روزترین و قدرتمندترین فریم‌ورک‌های توسعه برای تضمین سرعت، امنیت و مقیاس‌پذیری نرم‌افزار شما.",
    items: [
      { text: "C#", img: "/net.svg" },
      { text: "Next.js", img: "/next.svg" },
      { text: "Node.js", img: "/node.svg" },
      { text: "TypeScript", img: "ts.svg" },
      { text: "Tailwind CSS", img: "tailwind.svg" },
      { text: "PostgreSQL", img: "postgr.svg" },
      { text: "Framer Motion", img: "framer.svg" },
      { text: "Docker", img: "docker.svg" },
    ],
  },
  portfolio: {
    eyebrow: "پروژه‌های منتخب",
    title: "پروژه هایی    که به آنها افتخار می‌کنیم",
    intro: "هر پروژه، داستانی از  همکاری ، خلاقیت ، و نتیجه ماندگار است",
    items: [
      {
        title: "پلتفرم تجارت الکترونیک پلاس",
        category: "فروشگاه آنلاین",
        href: "#",
      },
      { title: "داشبورد مدیریت ناوگان", category: "وب اپلیکیشن", href: "#" },
      { title: "ربات هوشمند پشتیبانی", category: "ربات تلگرام", href: "#" },
    ],
  },
} as const;
