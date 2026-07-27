
# Royal Matka Biryani Project Guide

## Design System

### Colors (Tailwind v4 Theme Variables)
- `brand-charcoal` (`#0F0C0A`): Main dark background. A warm, earth-toned dark shade.
- `brand-cream` (`#FAF7F2`): Soft, warm off-white for light accents and page sections.
- `brand-gold` (`#C5A880`): Primary muted gold accent for text, borders, and decorations.
- `brand-gold-bright` (`#D4AF37`): Brighter gold for active indicators and details.
- `brand-spice` (`#C83E55`): Refined warm crimson red for primary Call to Action (CTA) buttons.
- `brand-spice-hover` (`#A52A3F`): Hover state for the spice red CTA.

### Typography
- **Headings**: `Cormorant Garamond` (elegant serif) loaded in `layout.js` via `var(--font-cormorant)` and styled as `font-serif`. Reserved for editorial display titles and large headings.
- **Body & UI**: `Plus Jakarta Sans` (modern, legible sans-serif) loaded via `var(--font-jakarta)` and styled as `font-sans`. Used for body copy, buttons, labels, and all navbar text/UI elements.

## Component Architecture

- `Navbar.jsx` (Client Component): Sticky navigation with scroll-sensitive height and background styling.
  - **Dimensions**: Transitions from a height of 72px (unscrolled) to a highly compact 64px (scrolled) on desktop; fixed 64px height on mobile.
  - **Logo**: Reduced to a compact layout (scaling from 44px to 36px on scroll) to prevent visual dominance.
  - **Typography**: Uses `Plus Jakarta Sans` (`font-sans`) for all elements including navigation links, the "ROYAL MATKA" brand name, and the Order CTA.
  - **Interactivity**: Transitions from transparent to blurred dark backdrop (`backdrop-blur-md bg-brand-charcoal/95 border-b border-brand-gold/15`). Includes mobile responsive drawer panel.
- `Hero.jsx` (Client Component): Editorial split layout.
  - Left column: Main heading (`h1` in Cormorant Garamond), supporting copy, CTAs, and structural trust badges.
  - Right column: Layered circular collage of food dishes with golden frames and hover transitions.

## Contact Configuration
- **WhatsApp Orders**: A temporary placeholder contact number (`923001002222`) is set via `PLACEHOLDER_WHATSAPP_NUMBER` in `Navbar.jsx` and `Hero.jsx`. Make sure to replace this in production.

