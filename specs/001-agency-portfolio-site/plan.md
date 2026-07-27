# Implementation Plan: Agency Portfolio Website

**Branch**: `001-agency-portfolio-site` | **Date**: 2026-07-20 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-agency-portfolio-site/spec.md`

**Note**: This plan is aligned to a small public marketing site with Persian and English support, SEO-first delivery, and minimal client-side JavaScript.

## Summary

Build a mobile-first agency portfolio site in Next.js with TypeScript, Tailwind CSS, shadcn/ui, React Hook Form, and Zod. The site should favor static/server-rendered public pages, localized content for Persian and English, an accessible contact flow, and fast initial load with only small interactive islands.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript on modern Next.js App Router

**Primary Dependencies**: Next.js, React, Tailwind CSS, shadcn/ui, React Hook Form, Zod

**Storage**: N/A for public content; contact submissions may be handled through a server action or route handler

**Testing**: ESLint, TypeScript typecheck, unit tests for form/schema logic, and end-to-end checks for locale switching and contact submission

**Target Platform**: Modern desktop and mobile browsers

**Project Type**: Web application

**Performance Goals**: Static or server-rendered public pages, minimal initial client JS, fast first paint on mobile networks

**Constraints**: Persian and English must both render correctly with direction-aware layout and localized metadata

**Scale/Scope**: Small brochure-style marketing site with a handful of public pages and one lead-capture form

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Pass. The plan follows the constitution: Next.js + Tailwind, SEO-first public pages, first-class Persian and English support, very fast load time, and accessible maintainable UI.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
app/
├── [locale]/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── services/page.tsx
├── globals.css
└── sitemap.ts

components/
├── ui/
└── forms/

content/
├── fa/
└── en/

lib/
├── seo/
├── i18n/
└── validation/

messages/

public/

tests/
├── e2e/
├── unit/
└── contract/
```

**Structure Decision**: Use a single Next.js app with `app/` for route segments, `components/` for shared UI, `components/forms/` for form islands, `content/` or `data/` for locale-aware page content, `lib/` for SEO/i18n/form helpers, and `messages/` for translation payloads.

## Complexity Tracking

None.
