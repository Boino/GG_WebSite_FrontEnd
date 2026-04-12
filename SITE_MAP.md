# Site Map

## Global Layout
- Header with logo/title, primary nav, Instagram link, language text, cart counter
- Mobile menu toggle (open/close state)
- Footer with location + contact information
- Repeated category shortcuts on many pages

## Top-Level Routes
- `/` Home
- `/shop` Products (Shortboards collection)
- `/shop-1` Products hub page (category links)
- `/shop-balance-boards`
- `/shop-decoration-boards`
- `/shop-diy-kits`
- `/shop-evolutive-boards`
- `/shop-longboards`
- `/shop-small-decoration-boards-solid`
- `/about`
- `/designs-gallery`
- `/designs-gallery/:slug` (6 observed design detail pages)
- `/contact`
- `/board-calculator`
- `/cart`

## Observed Product Detail Routes
- `/shop/p/product-1-7njrk`
- `/shop/p/product-2-2s2bw`
- `/shop/p/product-3-tbt5a`
- `/shop-balance-boards/p/style-01-ej5na-8n7sk`
- `/shop-decoration-boards/p/style-01-ej5na-drgw4`
- `/shop-decoration-boards/p/style-01-ej5na-drgw4-htzxy`
- `/shop-diy-kits/p/style-01-ej5na-sd65l`
- `/shop-evolutive-boards/p/style-01-ej5na-kmr8w`
- `/shop-evolutive-boards/p/style-02-hxmaf-rdy9g`
- `/shop-evolutive-boards/p/style-03-g2rtt-x4z57`
- `/shop-longboards/p/style-01-ej5na-sm8kw`
- `/shop-small-decoration-boards-solid/p/...` (13 observed slugs)

## Key Components
- Hero image/text CTA sections
- Product card grid with image/title/price/option controls
- Product detail gallery + variant selectors + quantity + add-to-cart
- Cart summary with quantity controls, remove action, subtotal
- Contact form (name, email, message) with required validation and success state
- Design gallery cards + previous/next links on design detail pages
- Category shortcut grid/cards

## Core Interaction States
- Mobile menu: open/close
- Product options: required variant selection before add-to-cart
- Add-to-cart success feedback
- Cart: empty, populated, quantity adjustments, remove
- Contact form: pristine, invalid, submitting, success, failure fallback
- Buttons: hover/focus/disabled
- Responsive layouts for desktop/tablet/mobile

