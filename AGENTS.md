# AGENTS.md

## Project Overview
This project is a web app for presenting and selling surf-related products and experiences.

Core business areas:
- Wooden surfboards
- Balance boards
- Decorative boards
- DIY / workshop offerings
- Brand / maker story
- Product customization through selectable design overlays

The app should feel premium, handcrafted, natural, warm, and design-led. It should reflect craftsmanship, surf culture, wood materials, and a clean modern browsing and shopping experience.

---

## Product Goals
The website should help users:

1. Understand the brand and the makers
2. Browse surf-related products
3. Browse available imprint / visual design options
4. Understand the difference between product types
5. Explore and book DIY workshops
6. Choose an appropriate board through a selector / calculator
7. Preview products with different visual designs applied
8. Move smoothly from discovery to selection to inquiry / booking / purchase

---

## Current Codebase Context
This repo currently contains:
- app source code in `src/`
- research and extracted reference material in `_research/`
- planning and audit docs in the repo root such as `PLAN.md`, `SITE_MAP.md`, `ASSUMPTIONS.md`, `DIFF_REPORT.md`, `TODO.md`

Typical important source areas:
- `src/components/`
- `src/data/`
- `src/pages/`
- `src/state/`
- `src/App.tsx`
- `src/styles.css`
- `src/types.ts`

Research/reference assets may exist in:
- `_research/pages/`
- `_research/home.html`
- `_research/products-full.json`
- `_research/products-min.json`
- `_research/products.csv`

Agents should inspect the existing project structure before making architectural changes.

---

## Working Principles

### 1. Preserve product identity
This is not a generic store. The UI and functionality should communicate craftsmanship, wood materials, surf culture, and authenticity.

### 2. Reuse before duplicating
Prefer reusable components, shared styles, and centralized logic over one-off implementations.

### 3. Keep design and logic aligned
- Visual changes must not break behavior
- Functional changes must not create visual inconsistency
- Shared abstractions should be preferred over local hacks

### 4. Respect the current structure
Only introduce new folders or architectural patterns when they clearly improve maintainability.

### 5. Build for mobile as well as desktop
The experience must be responsive and usable across common device sizes.

---

## Core User Experience Goals
The app should feel:
- premium
- calm
- tactile
- handcrafted
- visual but not cluttered
- easy to browse
- trustworthy
- conversion-friendly

Avoid:
- generic template aesthetics
- visually noisy layouts
- overly technical customer-facing UI
- unnecessary animation or decorative clutter

---

## Information Architecture
The app is expected to center around these areas:
- Home
- About / Makers
- Products
- Product detail
- Designs
- Workshops
- Board Selector / Calculator
- Contact / Inquiry
- Cart / Checkout if applicable

Routing and navigation should stay predictable and coherent.

---

## Design System Expectations

### Typography
- Keep hierarchy clear and readable
- Headlines should feel editorial and premium
- Body text should remain simple and legible
- Avoid too many font families
- Use generous spacing

### Color
Favor a restrained palette inspired by:
- wood tones
- sand
- off-white
- ocean-influenced tones
- charcoal / dark neutral tones

Accent colors should support calls to action, not dominate the UI.

### Layout
- Prefer spacious layouts
- Keep strong section rhythm
- Let product imagery breathe
- Maintain alignment consistency
- Avoid cramped cards and uneven spacing

### Shared Components
Prefer reusable patterns for:
- buttons
- cards
- section containers
- nav/header/footer
- filters
- tabs/selectors
- modals/drawers
- form elements
- product preview modules
- workshop information blocks

---

## Functional Architecture Expectations

### Product data
Products should be modeled clearly enough to support:
- category
- dimensions/specs
- materials
- design compatibility
- pricing
- availability
- media
- descriptive content

### Design data
Designs should be modeled separately from products so they can be reused across eligible items.

At minimum, design entities should support:
- id
- name
- category/style
- preview asset
- overlay asset or rendering reference
- compatible product types
- transform/position metadata if needed

### Workshop data
Workshop entities should support:
- title
- description
- duration
- location
- skill level
- price or inquiry mode
- included materials
- CTA for booking/inquiry

### Board selector logic
Recommendation logic should be explicit, maintainable, and documented rather than hidden in UI code.

---

## File Ownership Expectations

### UI-focused work commonly touches
- `src/components/**`
- `src/pages/**` for layout changes
- `src/styles.css`
- future theme/style files if introduced carefully

### Logic-focused work commonly touches
- `src/pages/**`
- `src/data/**`
- `src/state/**`
- `src/types.ts`
- `src/App.tsx`
- utilities/modules added under `src/` where appropriate

Agents should edit the smallest relevant surface area first.

---

## Non-Negotiable Engineering Rules
1. Do not break existing routes without intentional replacement
2. Do not duplicate business logic across components/pages
3. Do not hardcode values that should live in structured data/config
4. Do not add ad hoc styling if a shared pattern should exist
5. Do not combine unrelated design and business changes without reason
6. Do not remove accessibility-related behavior casually
7. Do not leave loading, empty, success, or error states unhandled
8. Do not leave placeholder hacks undocumented
9. Keep new code readable and maintainable

---

## Definition of Done
A task is done only when:
- the relevant UI or feature is implemented
- affected pages/routes work
- styling is consistent with the rest of the app
- loading, empty, disabled, error, and success states are handled where applicable
- code is organized and readable
- duplicated patterns are minimized
- the app runs without runtime errors
- assumptions are documented when needed

---

## Agent Collaboration Rules

### UI agent
- Owns layout, hierarchy, visual polish, responsive structure, component consistency
- Should avoid changing business logic unless necessary for presentation
- Should prefer reusable shared styles/components over one-off patches

### Feature/logic agent
- Owns new pages, flows, recommendation logic, product/design compatibility logic, state, routing, and structured data behavior
- Should reuse existing UI components where possible
- Should avoid inventing a separate visual language

### Integrator/main agent
- Ensures changes remain consistent with this file
- Resolves overlap between visual and functional work
- Verifies the app still runs
- Keeps architecture coherent over time

---

## Preferred Workflow
For substantial tasks:
1. inspect the existing implementation
2. make a short plan
3. identify reusable pieces first
4. implement in coherent increments
5. test affected flows/pages
6. document assumptions briefly if needed

Agents should make reasonable autonomous decisions when details are missing, while staying aligned with the project goals and this file.