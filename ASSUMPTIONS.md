# Assumptions

## Data / APIs
- Original site is Squarespace Commerce (observed from runtime context and asset signatures).
- Original cart and checkout are server-backed by Squarespace; standalone clone uses local client-side cart storage and mock checkout behavior.
- Product metadata (titles, prices, URLs, variant dimensions/options) is inferred from page-embedded context and reproduced with safe placeholder media.

## Visual Assets
- Original proprietary photos/graphics/logos are not copied into this repo.
- Equivalent placeholders are generated/styled to preserve layout density, card rhythm, and visual hierarchy.

## Text / Content
- Content tone and section structure are preserved, but copy is paraphrased where needed to avoid verbatim proprietary reproduction.
- Contact/location details are represented for UI fidelity and can be edited by project owner.

## Forms
- Original form posts to Squarespace form backend with captcha.
- Clone implements local validated submit flow with simulated async request and success/error UI.

## E-commerce Behavior
- Original may support quick view modal on some collections; clone implements equivalent direct product navigation and in-card add-to-cart behavior.
- Inventory and scarcity are inferred only where visible; clone exposes generic stock messaging.
- No real payment processing is implemented; cart behavior is intentionally non-transactional.

## Routing
- All observed public routes are implemented, including product and design detail slugs discovered from the live site.
- Unknown unpublished/admin endpoints are out of scope.

## Responsiveness and Animation
- Breakpoints and transitions are inferred from rendered behavior and Squarespace defaults.
- Clone approximates timing/easing and menu/hover animations without copying source CSS verbatim.

