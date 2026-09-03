---
name: Rustic Hearth & Wing
colors:
  surface: '#fff8f5'
  surface-dim: '#e8d7cd'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ea'
  surface-container: '#fceae1'
  surface-container-high: '#f7e5db'
  surface-container-highest: '#f1dfd5'
  on-surface: '#231a14'
  on-surface-variant: '#554338'
  inverse-surface: '#392e28'
  inverse-on-surface: '#ffede4'
  outline: '#887366'
  outline-variant: '#dbc2b2'
  surface-tint: '#954a00'
  primary: '#954a00'
  on-primary: '#ffffff'
  primary-container: '#d97a2c'
  on-primary-container: '#482100'
  inverse-primary: '#ffb784'
  secondary: '#87512f'
  on-secondary: '#ffffff'
  secondary-container: '#feb68d'
  on-secondary-container: '#794525'
  tertiary: '#5e5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#929292'
  on-tertiary-container: '#2b2b2b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc6'
  primary-fixed-dim: '#ffb784'
  on-primary-fixed: '#301400'
  on-primary-fixed-variant: '#713700'
  secondary-fixed: '#ffdbc9'
  secondary-fixed-dim: '#feb68d'
  on-secondary-fixed: '#321200'
  on-secondary-fixed-variant: '#6b3a1a'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#fff8f5'
  on-background: '#231a14'
  surface-variant: '#f1dfd5'
typography:
  display-lg:
    fontFamily: domine
    fontSize: 48px
    fontWeight: '900'
    lineHeight: 52px
    letterSpacing: -1px
  headline-lg:
    fontFamily: domine
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: domine
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 34px
  headline-md:
    fontFamily: barlowCondensed
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: workSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: workSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-xl:
    fontFamily: barlowCondensed
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 20px
  label-md:
    fontFamily: barlowCondensed
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 20px
---

## Brand & Style

The brand identity centers on the "homemade family touch" of a traditional American roadhouse, adapted for a vibrant Honduran delivery market. It evokes the sensory experience of a backyard barbecue: the smell of charred wood, the warmth of the sun, and the comforting weight of a paper-wrapped burger.

The design style is **Tactile Modern-Retro**. It blends the bold, unapologetic signage of 1950s diners with the organic, textured warmth of a modern craft kitchen. The visual language is intentionally "un-precious"—relying on thick borders, heavy typography, and physical patterns like the black-and-white checkered paper to ground the digital experience in the physical reality of the food. 

The goal is to evoke an immediate appetite response through high-contrast imagery and a color palette that mimics grilled meats, toasted buns, and aged parchment.

## Colors

The palette is rooted in Earth tones and fire. 

- **Primary (Burnt Orange):** Used for primary actions, highlights, and status indicators. It represents heat and citrus.
- **Secondary (Dark Brown):** Used for typography, iconography, and deep borders. It provides the "grilled" anchor for the brand.
- **Background (Bone/Cream):** Replaces pure white to reduce eye strain and provide a "butcher paper" feel. A subtle noise or paper texture grain should be applied to this background layer.
- **Accent (Black/White Check):** A 16px repeating checkerboard pattern used exclusively for separators, footer tops, and heavy card borders to evoke the classic food-basket liner.

## Typography

The typography system mirrors vintage menu design. 

**Domine** serves as the primary headline font, providing the "Slab Serif" authority of a classic diner sign. Use it for menu categories and hero titles. 

**Barlow Condensed** is used for secondary headers, price tags, and labels. Its narrow, tall profile mimics industrial signage and allows for high-impact text in tight spaces.

**Work Sans** handles all body copy and descriptions, ensuring high legibility on mobile devices against textured backgrounds. 

All primary titles should be set in Dark Brown (#5C2E0F) to maintain the "homemade" warmth.

## Layout & Spacing

The layout utilizes a **Fixed Grid** approach for desktop and a **Fluid Stack** for mobile. 

- **Desktop:** 12-column grid with a 1200px max-width. Margins are generous (48px+) to allow the paper-texture background to breathe.
- **Mobile:** 4-column grid with 20px side margins.
- **Spacing Rhythm:** Based on an 8px scale. Food items (cards) should have generous internal padding (24px) to feel substantial and "hearty." 

Use the checkered pattern as a horizontal divider between major sections (e.g., between the Hero and the Menu) to break up the vertical flow and reinforce the food-truck aesthetic.

## Elevation & Depth

This design system eschews modern shadows in favor of **Tonal Layering and Bold Outlines**. 

- **Hard Borders:** Instead of shadows, use 2px solid Dark Brown (#5C2E0F) borders for cards and buttons. This creates a comic-book/illustrative feel that matches the food-truck vibe.
- **Physical Stacking:** Use the Bone/Cream background as the base, with white "Paper" cards sitting on top. 
- **Active States:** When a button or card is pressed, it should shift 2px down and 2px right, removing the "faux-depth" border to simulate a physical mechanical press.
- **Subtle Texture:** Apply a 3% opacity grain overlay across the entire UI to simulate the tactile feel of recycled paper menus.

## Shapes

The shape language is **Soft but Structured**. 

Edges are slightly rounded (0.25rem) to feel approachable and "hand-cut," but never fully circular or pill-shaped (except for small badges). This maintains the sturdy, reliable American Bar aesthetic. 

Imagery should occasionally break the grid—for example, a wing or a burger might "spill out" over the edge of a container or border to emphasize the abundance and "food porn" nature of the photography.

## Components

- **Primary Buttons:** Burnt Orange (#D97A2C) fill with a 2px Dark Brown border and white text in Barlow Condensed. No rounded corners (sharp or slightly soft).
- **Food Cards:** White background, 2px Dark Brown border. The image should take the top 60% of the card. Prices are highlighted in a Burnt Orange tag in the top right.
- **Checkered Dividers:** 16px high horizontal strips of the black and white checkered pattern used to separate logical sections.
- **Input Fields:** Bone/Cream background with a 1px Dark Brown border. Labels sit above the field in Barlow Condensed.
- **Chips/Filters:** Bone background with Dark Brown text. When active, they flip to Dark Brown background with Bone text.
- **Iconography:** Hand-drawn or heavy-stroke line icons. Avoid thin, minimalist icons; use icons that have visual weight.
- **The "Sunflower" Element:** Use a stylized sunflower graphic (from the mood board) as a watermark or a loading spinner to ground the brand in its Honduran/family roots.