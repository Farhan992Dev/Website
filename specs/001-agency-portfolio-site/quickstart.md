# Quickstart: Agency Portfolio Website

## Purpose

Verify the public site works end to end for fast first load, bilingual browsing, and lead capture.

## Prerequisites

- Node.js and the project dependencies installed
- A local environment with the Next.js app available

## Run the app

1. Start the development server.
2. Open the homepage on a mobile viewport.
3. Switch between Persian and English.
4. Submit the contact form with valid data.

Expected result:
- The homepage loads quickly and clearly presents the company value proposition.
- All public sections remain available in both languages.
- RTL layout appears correctly for Persian.
- The contact form validates errors inline and accepts a valid submission.

## Validation checks

1. Run the production build and confirm it completes without errors.
2. Inspect page metadata for title, description, canonical, and alternate language entries.
3. Confirm the homepage hero, services, about, why choose us, and contact sections render without requiring client interaction.
4. Check that images use optimized delivery and that nonessential scripts are not blocking first paint.

Expected result:
- Public pages are indexable and metadata is present per locale.
- The main content is server-rendered or statically generated.
- Interactive code is limited to the language switcher and contact form.

## Done criteria

- The site is usable on mobile first.
- The same content is reachable in both Persian and English.
- SEO and performance checks pass for the public pages.