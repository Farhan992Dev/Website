import type { Metadata } from 'next';

import { AboutSection } from '@/components/sections/about';
import { ContactSection } from '@/components/sections/contact';
import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us';
import { TechStackSection } from '@/components/sections/tech-stack';
import { PortfolioSection } from '@/components/sections/portfolio';
import { getSiteContent } from '@/lib/i18n/content';
import { createLocalizedMetadata } from '@/lib/seo/metadata';
import { createOrganizationSchema, createWebPageSchema } from '@/lib/seo/schema';
import { isLocale, type Locale } from '@/lib/i18n/locales';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : 'fa';
  const content = getSiteContent(locale);

  return createLocalizedMetadata(locale, content.company.name, content.home.hero.description, '/');
}

export default async function LocaleHomePage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : 'fa';
  const content = getSiteContent(locale);

  // Fetch dynamic data from Go API
  let settings: any[] = [];
  let apiProjects: any[] = [];
  try {
    const [settingsRes, projectsRes] = await Promise.all([
      fetch('http://localhost:8081/api/settings', { next: { revalidate: 10 } }),
      fetch('http://localhost:8081/api/projects', { next: { revalidate: 10 } })
    ]);
    if (settingsRes.ok) settings = await settingsRes.json();
    if (projectsRes.ok) apiProjects = await projectsRes.json();
  } catch (error) {
    console.log('Backend not available, using static defaults');
  }

  const isVisible = (section: string) => {
    const s = settings.find(s => s.SectionName === section);
    return s ? s.IsVisible : true; // Default to true if not found in DB
  };

  const dynamicPortfolio = apiProjects.length > 0 ? {
    ...content.home.portfolio,
    items: apiProjects.map(p => ({ title: p.Title, category: p.Category, href: p.Href }))
  } : content.home.portfolio;

  return (
    <>
      {isVisible('hero') && <HeroSection locale={locale} content={content.home.hero} />}
      {isVisible('services') && <ServicesSection locale={locale} content={content.home.services} />}
      {isVisible('portfolio') && <PortfolioSection content={dynamicPortfolio} />}
      {isVisible('about') && <AboutSection content={{ ...content.home.aboutPreview, body: content.home.aboutPreview.body }} />}
      {isVisible('tech-stack') && <TechStackSection content={content.home.techStack} />}
      {isVisible('why-us') && <WhyChooseUsSection content={content.home.whyChooseUs} />}
      {isVisible('contact') && <ContactSection content={content.home.contact} />}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            createOrganizationSchema(locale, content.company.name, content.home.hero.description),
            createWebPageSchema(locale, content.home.hero.title, content.home.hero.description)
          ])
        }}
      />
    </>
  );
}