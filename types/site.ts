export type SiteContent = {
  locale: 'fa';
  dir: 'rtl';
  navigation: {
    brand: string;
    items: Array<{ label: string; href: string }>;
    languageLabel: string;
    contactLabel: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      primaryCta: { label: string; href: string };
      secondaryCta: { label: string; href: string };
      quickLinks: Array<{ label: string; href: string }>;
    };
    services: {
      eyebrow: string;
      title: string;
      intro: string;
      items: Array<{ title: string; summary: string; details: string }>;
    };
    aboutPreview: {
      eyebrow: string;
      title: string;
      body: string;
    };
    whyChooseUs: {
      eyebrow: string;
      title: string;
      points: string[];
    };
    contact: {
      eyebrow: string;
      title: string;
      body: string;
      directContacts: Array<{ label: string; href: string }>;
    };
    techStack: {
      eyebrow: string;
      title: string;
      description: string;
      items: string[];
    };
    portfolio: {
      eyebrow: string;
      title: string;
      items: Array<{ title: string; category: string; href: string }>;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    story: string;
    values: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    offerings: Array<{ title: string; summary: string; bullets: string[] }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    form: {
      fullName: string;
      email: string;
      phone: string;
      serviceInterest: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
  };
  company: {
    name: string;
    tagline: string;
    email: string;
    phone: string;
    messagingUrl: string;
  };
};