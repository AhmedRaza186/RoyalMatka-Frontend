
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
  - **Dimensions**: Fixed layout height of `64px` (h-16) on mobile and desktop.
  - **Logo**: Compact size (36px width on mobile, 40px width on desktop) to prevent visual dominance.
  - **Typography**: Uses `Cormorant Garamond` (`font-serif`) for the "Royal Matka" brand name and mobile navigation links; and `Plus Jakarta Sans` (`font-sans`) for body text, subtitles, desktop navigation links, and Order CTA.
  - **Interactivity**: Transitions from transparent to a blurred charcoal backdrop (`backdrop-blur-xl bg-brand-charcoal/90 border-b border-brand-gold/10`). Includes mobile responsive drawer panel.
- `Hero.jsx` (Server Component): Editorial split layout.
  - Left column: Main heading (`h1` in Cormorant Garamond), supporting copy, CTAs, and structural trust badges.
  - Right column: Layered circular collage of food dishes with golden frames and hover transitions.
- `MenuPreview.jsx` (Client Component): Signature dishes showcase and menu preview.
  - **Layout**: Responsive 3-column grid on desktop, single-column stacked layout on mobile. Cards feature organic clay pot food images with radial shadow overlays.
  - **Typography**: Headings in `Cormorant Garamond` (`font-serif`), cards details, buttons, and subheadings in `Plus Jakarta Sans` (`font-sans`).
  - **Data Structure**: All product data (naming, descriptions, images, tags, pricing arrays) is kept in a single structured `SIGNATURE_ITEMS` array for easy maintenance.
  - **Interactivity**: Hover image scaling and direct WhatsApp order CTA linked to the centralized `siteConfig.whatsappNumber`.

## Contact Configuration
- **WhatsApp Orders**: Configured centrally via `siteConfig.whatsappNumber` in `src/app/config/site.js`. Employs a temporary placeholder number (`923001002222`) with `displayPhone` representation.


