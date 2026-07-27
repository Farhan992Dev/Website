# Portfolio Constitution

## Core Principles

### I. Next.js Mobile-First Frontend
All user-facing work is built as a Next.js frontend with Tailwind CSS. Layouts, components, and interactions must be mobile-first by default, then enhanced progressively for larger screens. Reusable UI should be composition-friendly and kept close to the feature that owns it.

### II. SEO by Default
Every public page must be search-engine friendly. Use semantic HTML, meaningful metadata, clean routing, descriptive headings, canonical URLs when needed, and server-rendered or statically generated content where appropriate. Search visibility is a product requirement, not a polish step.

### III. Persian and English First-Class Support
The product must support both Persian and English. Language-aware content, direction handling, formatting, and navigation must work cleanly in both languages. No feature is complete unless both locales are considered in the UI and content flow.

### IV. Very Fast Load Time
Performance is a hard requirement. Minimize client-side JavaScript, prefer server rendering and static output where possible, optimize images and fonts, and avoid unnecessary dependencies or heavy runtime work. New code should be judged by its impact on initial load and interaction speed.

### V. Accessible and Maintainable UI
Interfaces must be accessible, readable, and easy to extend. Use semantic structure, strong contrast, keyboard support, and consistent component patterns. Keep implementation simple, avoid duplication, and prefer code that is easy to test and evolve.

## Technical Constraints

The stack is centered on Next.js and Tailwind CSS. Client-side state and effects should be used only when required for interactivity. Pages and components should be structured to support responsive behavior, localization, and SEO without duplicated logic.

## Development Standards

Every feature must preserve mobile usability, language coverage, SEO metadata, and performance budgets. Any exception must be explicit, documented, and justified before merge.

## Governance

This constitution overrides ad hoc preferences and guides implementation decisions for the portfolio. Changes to these principles require an explicit update to this file and agreement that the new rule still supports fast, multilingual, SEO-friendly delivery.

**Version**: 1.0.0 | **Ratified**: 2026-07-20 | **Last Amended**: 2026-07-20
