# Diff Report

## Replicated Exactly (Observed/Implemented)
- Multi-page information architecture with matching public route families (`/`, `/shop*`, `/about`, `/designs-gallery`, `/contact`, `/cart`, `/board-calculator`).
- Shared global layout pattern: top nav + footer + repeated category shortcuts.
- Product collection and product-detail navigation flow with slug-based URLs.
- Cart indicator and cart page with quantity controls and subtotal behavior.
- Contact form structure with required name/email/message fields and success feedback.
- Design gallery index plus detail pages with previous/next navigation.
- Responsive behavior for desktop/mobile navigation and grid collapse patterns.

## Approximated
- Visual styling/theme and board imagery are recreated with non-proprietary placeholder art instead of source media.
- Copy text is paraphrased to preserve structure and intent while avoiding verbatim proprietary content.
- Squarespace quick-view behavior is approximated via direct product detail navigation and in-page add-to-cart.
- Board calculator implementation is inferred as a practical estimator (route existed, internal logic not publicly visible).

## Could Not Be Verified Directly
- Original server-side checkout/payment behavior and order lifecycle.
- Exact animation timings, easing constants, and all breakpoint pixel values used by the original template CSS.
- Hidden inventory rules, scarcity thresholds, and shipping/business logic.
- Any non-public analytics, captcha verification, and backend anti-spam implementation details.

## Assumptions Made
- Site uses Squarespace Commerce and template 7.1 behaviors (from observable page context).
- Local cart persistence in `localStorage` is an acceptable standalone equivalent for demo behavior.
- Contact form submission is simulated asynchronously rather than calling third-party form APIs.
- Product names, slugs, and visible option sets are reproduced from observable public page context only.
