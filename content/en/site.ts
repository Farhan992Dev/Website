import { enAboutContent } from './about';
import { enContactContent } from './contact';
import { enHomeContent } from './home';
import { enNavigation } from './navigation';
import { enServicesContent } from './services';

export const enSiteContent = {
  locale: 'en',
  dir: 'ltr',
  navigation: enNavigation,
  home: enHomeContent,
  about: enAboutContent,
  services: enServicesContent,
  contact: enContactContent,
  company: {
    name: 'Web Design & Support Studio',
    tagline: 'Fast, multilingual websites that turn visitors into inquiries',
    email: 'hello@example.com',
    phone: '+989000000000',
    messagingUrl: 'https://wa.me/989000000000'
  }
} as const;