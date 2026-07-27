# Tasks: Agency Portfolio Website

**Input**: Design documents from `/specs/001-agency-portfolio-site/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are not explicitly requested in the feature spec, so this task list focuses on implementation tasks only.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create the Next.js + TypeScript + Tailwind CSS + shadcn/ui project scaffold in `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `tailwind.config.ts`, and `components.json`
- [X] T002 Create the initial source and content directories in `app/`, `components/ui/`, `components/forms/`, `components/navigation/`, `components/sections/`, `content/fa/`, `content/en/`, `lib/i18n/`, `lib/seo/`, `lib/validation/`, `messages/`, and `public/`
- [X] T003 [P] Add the global app shell, font loading, and base Tailwind styles in `app/layout.tsx` and `app/globals.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Build the locale and content registry in `lib/i18n/locales.ts`, `content/fa/site.ts`, `content/en/site.ts`, `messages/fa.json`, and `messages/en.json`
- [X] T005 [P] Create SEO metadata helpers and structured data builders in `lib/seo/metadata.ts`, `lib/seo/schema.ts`, and `app/sitemap.ts`
- [X] T006 [P] Create reusable shadcn/ui primitives and shared navigation foundation in `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/input.tsx`, `components/ui/form.tsx`, and `components/navigation/site-nav.tsx`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Learn Services Quickly (Priority: P1) 🎯 MVP

**Goal**: A visitor immediately understands the company’s services, about information, and why they should choose the company.

**Independent Test**: Open the homepage on mobile or desktop, in either locale, and confirm the main services, supporting sections, and primary call to action are visible without extra navigation.

### Implementation for User Story 1

- [X] T007 [P] [US1] Write localized homepage, about, services, and why-choose-us content in `content/fa/home.ts`, `content/en/home.ts`, `content/fa/about.ts`, `content/en/about.ts`, `content/fa/services.ts`, and `content/en/services.ts`
- [X] T008 [P] [US1] Build the homepage hero, service grid, about preview, and why-choose-us sections in `app/[locale]/page.tsx`, `components/sections/hero.tsx`, `components/sections/services.tsx`, `components/sections/about.tsx`, and `components/sections/why-choose-us.tsx`
- [X] T009 [P] [US1] Build the public about and services pages in `app/[locale]/about/page.tsx` and `app/[locale]/services/page.tsx`
- [X] T010 [US1] Add homepage metadata, structured data, and anchor navigation in `app/[locale]/page.tsx`, `lib/seo/metadata.ts`, `lib/seo/schema.ts`, and `components/navigation/site-nav.tsx`

**Checkpoint**: User Story 1 should now be fully functional and demonstrable as the MVP

---

## Phase 4: User Story 2 - Switch Languages (Priority: P2)

**Goal**: A visitor can browse the full public experience in either Persian or English without losing context.

**Independent Test**: Switch languages from any public page and confirm the same content remains reachable with the correct direction and localized labels.

### Implementation for User Story 2

- [X] T011 [P] [US2] Implement locale-aware layout direction and document language handling in `app/[locale]/layout.tsx`
- [X] T012 [P] [US2] Create language switcher and localized path helpers in `components/navigation/language-switcher.tsx` and `lib/i18n/links.ts`
- [X] T013 [US2] Localize navigation labels and page titles across `content/fa/navigation.ts`, `content/en/navigation.ts`, and `lib/seo/metadata.ts`
- [X] T014 [US2] Ensure all public routes resolve correctly for both locales in `app/[locale]/about/page.tsx`, `app/[locale]/services/page.tsx`, and `app/[locale]/contact/page.tsx`

**Checkpoint**: User Stories 1 and 2 should now both work independently

---

## Phase 5: User Story 3 - Contact the Company (Priority: P3)

**Goal**: A visitor can submit a project inquiry or use a direct contact option from the public site.

**Independent Test**: Open the contact page, submit valid inquiry data, and confirm the direct contact paths are clearly visible and accessible.

### Implementation for User Story 3

- [X] T015 [P] [US3] Define the contact inquiry schema and shared types in `lib/validation/contact.ts`
- [X] T016 [P] [US3] Build the contact form client component with React Hook Form and Zod in `components/forms/contact-form.tsx`
- [X] T017 [US3] Implement the contact page and submission endpoint in `app/[locale]/contact/page.tsx` and `app/api/contact/route.ts`
- [X] T018 [US3] Add direct contact buttons and inquiry entry points across the contact section and navigation in `components/sections/contact.tsx` and `components/navigation/site-nav.tsx`

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T019 [P] Refine responsive spacing, typography, and RTL alignment in `app/globals.css` and `components/sections/*.tsx`
- [X] T020 [P] Optimize font loading, image handling, and script delivery in `app/layout.tsx` and `public/*`
- [X] T021 Finalize sitemap coverage and alternate language metadata in `app/sitemap.ts` and `lib/seo/metadata.ts`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Models/content before sections and pages
- Shared helpers before page-specific wiring
- Services before page composition where applicable
- Core implementation before cross-cutting polish
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Story-local content and UI tasks marked [P] can run in parallel when they touch different files
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
Task: "Write localized homepage, about, services, and why-choose-us content in `content/fa/home.ts`, `content/en/home.ts`, `content/fa/about.ts`, `content/en/about.ts`, `content/fa/services.ts`, and `content/en/services.ts`"
Task: "Build the homepage hero, service grid, about preview, and why-choose-us sections in `app/[locale]/page.tsx`, `components/sections/hero.tsx`, `components/sections/services.tsx`, `components/sections/about.tsx`, and `components/sections/why-choose-us.tsx`"
Task: "Build the public about and services pages in `app/[locale]/about/page.tsx` and `app/[locale]/services/page.tsx`"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Confirm the homepage and public discovery pages communicate the offer clearly
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
