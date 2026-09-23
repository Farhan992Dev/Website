import { faAboutContent } from "./about";
import { faContactContent } from "./contact";
import { faHomeContent } from "./home";
import { faNavigation } from "./navigation";
import { faServicesContent } from "./services";

export const faSiteContent = {
  locale: "fa",
  dir: "rtl",
  navigation: faNavigation,
  home: faHomeContent,
  about: faAboutContent,
  services: faServicesContent,
  contact: faContactContent,
  company: {
    name: "توسعه‌گران نوین",
    tagline: "راهکار های نوین  برای کسب و کار مدرن",
    email: "info@toseegaran-novin.ir",
    phone: "09354663872",
    messagingUrl: "https://wa.me/989354663872",
    logo: "/logo.png",
    copyRight: "تمامی حقوق محفوظ است",
  },
} as const;
