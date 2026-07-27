export const enHomeContent = {
  hero: {
    eyebrow: 'Website Design, Online Stores, and Support',
    title: 'A fast, multilingual portfolio site that turns visitors into project inquiries',
    description: 'We build focused experiences for brands that need website design, e-commerce, WordPress support, or a custom solution that loads quickly and converts well.',
    primaryCta: { label: 'Start a Project', href: '/contact' },
    secondaryCta: { label: 'View Services', href: '/services' },
    quickLinks: [
      { label: 'Services', href: '#services' },
      { label: 'About', href: '#about' },
      { label: 'Why Us', href: '#why-us' }
    ]
  },
  services: {
    eyebrow: 'Core Services',
    title: 'Three clear ways to begin working together',
    intro: 'The site is structured so visitors quickly understand what is offered and which service fits their project best.',
    items: [
      { title: 'Website Design', summary: 'Professional, fast, and brand-focused pages', details: 'From landing pages to full websites with a conversion-first structure.' },
      { title: 'Online Stores', summary: 'Scalable and easy-to-manage e-commerce builds', details: 'For brands that want to start selling online with confidence.' },
      { title: 'WordPress & Custom', summary: 'Support and development for WordPress or custom builds', details: 'For projects that need flexibility, maintainability, and speed.' }
    ]
  },
  aboutPreview: {
    eyebrow: 'About Us',
    title: 'We focus on clarity, speed, and reliable delivery',
    body: 'Every project should communicate the brand clearly, perform well on mobile, and make the next step easy for the visitor.'
  },
  whyChooseUs: {
    eyebrow: 'Why Choose Us',
    title: 'Reasons that make the choice straightforward',
    points: [
      'Mobile-first layouts that work beautifully on phones',
      'True English and Persian support with proper direction handling',
      'Lightweight implementation for fast loading',
      'Focused on lead generation, not only visual polish'
    ]
  },
  contact: {
    eyebrow: 'Contact',
    title: 'The path to starting a project is always visible',
    body: 'Use the form, email, or a messaging channel. We capture the basics and follow up with the next step.',
    directContacts: [
      { label: 'Email', href: 'mailto:hello@example.com' },
      { label: 'WhatsApp', href: 'https://wa.me/989000000000' },
      { label: 'Phone', href: 'tel:+989000000000' }
    ]
  }
} as const;