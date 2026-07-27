# Research: Agency Portfolio Website

## Next.js app structure

Decision: Use the App Router with one small route tree for the public site, shared layout shells, and content-driven sections.

Rationale: A brochure site does not need a heavy domain-driven or monorepo structure. Keeping routes in `app/`, shared UI in `components/`, and content in `content/` or `data/` keeps the app easy to reason about and lets most pages stay static or server-rendered.

Alternatives considered: Pages Router is workable, but App Router gives cleaner nested layouts, better metadata handling, and more natural locale-aware route segments. A CMS-first architecture was not chosen because the site scope is small and the performance is the priority.

## shadcn/ui usage

Decision: Use shadcn/ui selectively for a small set of interactive primitives such as buttons, dialogs, dropdowns, tabs, and form controls, but keep most of the page as server-rendered markup.

Rationale: shadcn/ui is most efficient when treated as source code, not as a broad component dependency. Installing only the components actually used avoids bundle bloat, and keeping them as leaf client islands prevents the whole page from becoming client-rendered.

Alternatives considered: A full component library would speed up initial UI assembly, but it typically adds more JavaScript and opinionated abstractions than a marketing site needs.

## React Hook Form + Zod

Decision: Keep the contact form in a dedicated client component, put the schema in a shared `lib/validation/contact.ts` file, and derive TypeScript types from the Zod schema.

Rationale: This keeps validation rules in one place, makes form behavior testable, and lets the UI stay thin. RHF should manage field state and submission, while Zod owns structure, required fields, and localized error messages.

Alternatives considered: Manual validation is simpler at first but duplicates business rules and makes localized error handling harder. Putting schema definitions inside the component would couple validation to UI and reduce reuse.

## Multilingual and RTL support

Decision: Use route-based locales, separate content payloads per language, and set `dir` and `lang` at the layout level for each locale.

Rationale: Route-based i18n makes language selection explicit, improves SEO, and avoids mixing Persian and English text in one rendering path. Direction handling should be centralized so spacing, alignment, and icon mirroring stay consistent across the site.

Alternatives considered: Auto-translating content in the browser is not suitable because it hurts quality, adds runtime cost, and weakens SEO. A single mixed-language route without locale segments makes indexing and direction handling brittle.

## SEO essentials

Decision: Render indexable text on the server, define metadata per page and per locale, add canonical and alternate language URLs, and include structured data for the organization and contact page.

Rationale: Public pages need to be discoverable and understandable without client hydration. Strong metadata, semantic headings, sitemap coverage, and schema.org markup materially improve crawlability and click-through quality.

Alternatives considered: Client-only rendering can work visually but is weaker for crawling, social previews, and first-load performance.

## Performance practices that matter

Decision: Prefer static generation or server rendering for public pages, keep client islands tiny, optimize images and fonts, avoid third-party scripts unless essential, and load below-the-fold sections lazily.

Rationale: The biggest load-time wins come from reducing JavaScript, avoiding hydration for non-interactive content, and keeping media assets small. For a brochure site, this matters more than micro-optimizing component internals.

Alternatives considered: Heavy animation libraries, large icon packs, client-side content fetching, and broad global state all increase initial cost without helping the main conversion path.