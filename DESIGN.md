---
name: Cyber Obsidian
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363940'
  surface-container-lowest: '#0b0e14'
  surface-container-low: '#191c22'
  surface-container: '#1d2026'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e1e2eb'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e1e2eb'
  inverse-on-surface: '#2e3037'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#e0b6ff'
  on-secondary: '#4c007d'
  secondary-container: '#6d11ad'
  on-secondary-container: '#d7a4ff'
  tertiary: '#fff4e8'
  on-tertiary: '#422c00'
  tertiary-container: '#ffd388'
  on-tertiary-container: '#7d5800'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#f2daff'
  secondary-fixed-dim: '#e0b6ff'
  on-secondary-fixed: '#2e004e'
  on-secondary-fixed-variant: '#6a0baa'
  tertiary-fixed: '#ffdea9'
  tertiary-fixed-dim: '#ffba27'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4100'
  background: '#10131a'
  on-background: '#e1e2eb'
  surface-variant: '#32353c'
typography:
  display-hero:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-xl-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Outfit
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.06em
  label-md:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Outfit
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The visual identity embodies an elite, high-stakes digital vault tailored for esports enthusiasts, competitive skin traders, and high-tier gacha collectors. It communicates extreme speed, computational precision, and vault-grade asset security. The aesthetic rejects muddy sci-fi tropes in favor of an hyper-clarity Cyber Glassmorphism motif: ultra-deep obsidian foundations, needle-sharp translucent surfaces, and searing neon cyan energy conduits.

The emotional arc balances the laser-focused utility of a premier high-frequency trading platform with the kinetic dopamine rush of unboxing rare drop tiers. Visual weight stays tight, sleek, and technical—maintaining balanced bilingual harmony across Latin and Thai scripts without typographic degradation.

## Colors

The palette operates on strict luminosity hierarchy against deep obsidian space:

- **Primary Neon Cyan (`#00F0FF`)**: The command line of the UI. Applied to primary action vectors, real-time telemetry, active tab conduits, and interactive state triggers. Hover transitions shift down to `#00D2DF` with an expanding outer glow.
- **Secondary Neon Purple (`#9D4EDD`)**: The mystery and probability layer. Applied to gacha core mechanics, epic tier drops, inventory mystery capsules, and subtle ambient gradients across hero card backs.
- **Tertiary Luxury Gold (`#FFB703`)**: Reserved strictly for the peak value tier: VIP passes, legendary grade skins, critical hits, and celebratory currency balances. Never used for general functional UI cues.
- **Obsidian Dark Surfaces**: Base canvas starts at deep void `#0B0E14`, stepping up to `#121824` for recessed panels, and `#182030` for floating glass cards.
- **Border & Highlight Alpha**: Structural glass lines utilize `rgba(0, 240, 255, 0.15)` for inactive borders, scaling to `rgba(0, 240, 255, 0.65)` under active targeting.

## Typography

Typography establishes an assertive, computational tone. **Outfit** serves as the display and label powerhouse—its geometric contours, open counters, and tight apexes inject an energetic esports identity. **Inter** acts as the high-density informational bedrock, chosen for its neutral legibility, consistent tabular numerics, and optical compatibility with Thai loopless type rendering.

All micro labels and badges (status, item tiers, rarity meters) utilize uppercase Outfit with extended letter-spacing (`0.06em` to `0.1em`) to mimic HUD displays. Data tables, transaction records, and inventory countdowns use tabular figures (`font-variant-numeric: tabular-nums`) to prevent layout shifting during real-time auctions.

## Layout & Spacing

The structural layout relies on a strict 12-column fluid grid system bounded by a maximum canvas width of `1440px`. Screen real estate is engineered for rapid asset scanning and continuous gacha loop animations:

- **Desktop (1024px+)**: 12 columns, `1.5rem` (`24px`) gutters, `2rem` (`32px`) margins. Side navigation rails collapse into cyber icons to yield maximum viewport space to item matrices and probability dials.
- **Tablet (768px – 1023px)**: 8 columns, `1rem` (`16px`) gutters, `1.5rem` (`24px`) margins. Marketplace cards wrap from 4-across to 2-across.
- **Mobile (< 768px)**: 4 columns, `1rem` (`16px`) gutters, `1rem` (`16px`) outer margins. Data tables convert to card carousels, and the primary pull mechanism docks into an ergonomic bottom sheet bar.

Spacing follows an unambiguous 8pt spatial grid scale (`4px`, `8px`, `16px`, `24px`, `40px`). Component interiors preserve spatial breathing room: compact gaps inside chips and tags, generous padding in transaction confirmation modals to prevent accidental high-tier asset burns.

## Elevation & Depth

Depth is established via progressive luminous transparency and atmospheric backdrops rather than conventional heavy black drop shadows:

- **Level 0 (Canvas Base)**: Matte obsidian `#0B0E14`. Serves as the negative space vacuum.
- **Level 1 (Sub-Panels & Data Trenches)**: `#121824` with a 1px border of `rgba(255, 255, 255, 0.05)`.
- **Level 2 (Interactive Glass Surfaces)**: Translucent `#182030` at 70% opacity backed by `backdrop-filter: blur(16px)`. Border is defined by `rgba(0, 240, 255, 0.15)`. Soft ambient glow: `box-shadow: 0 8px 32px -4px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)`.
- **Level 3 (Targeted / Active / Gacha Pulled Elements)**: Highlighted glass panel wrapped in an electric glow: `box-shadow: 0 0 24px -2px rgba(0, 240, 255, 0.35), inset 0 0 12px rgba(0, 240, 255, 0.1)`.
- **Level 4 (Legendary Tier Overdrive)**: Reserved for top-rank drops and VIP triggers: `box-shadow: 0 0 32px 0px rgba(255, 183, 3, 0.4), inset 0 0 16px rgba(255, 183, 3, 0.15)`. Border transitions to solid `#FFB703`.

## Shapes

The design system standardizes on **Level 2 (Rounded)** curvature. Pure sharp corners feel dated and harsh, while pill forms dilute the technical discipline of high-grade military and esports equipment.

- Base input fields, buttons, and status tags use `0.5rem` (`8px`) corners.
- Marketplace containers, gacha showcase viewports, and dialogue sheets scale to `rounded-lg` (`1rem` / `16px`).
- Deep modal overlays and primary unboxing enclosures utilize `rounded-xl` (`1.5rem` / `24px`).
- Circular geometry (`rounded-full`) is reserved strictly for user avatars, radial drop odds indicators, and single-icon trigger nodes.

## Components

### Buttons & Interactive Controls
- **Primary CTA**: Solid fill `#00F0FF` with bold obsidian typography (`#0B0E14`). Upon hover, fires an energetic bloom: `box-shadow: 0 0 20px rgba(0, 240, 255, 0.6)`. Active compression scales down to `0.98`.
- **Secondary CTA**: Translucent background `rgba(157, 78, 221, 0.15)` framed by a 1px `#9D4EDD` border and white text. Hover triggers violet luminescence.
- **Ghost/Tertiary Action**: Transparent fill with `rgba(255, 255, 255, 0.7)` label, shifting to neon cyan text and subtle background tint on focus.

### Status Badges & Rarity Chips
Badges use `label-sm` Outfit typography, uppercase, set inside a `rounded` 8px container with micro-padding (`2px 8px`):
- **HOT**: Searing crimson/cyan split glow (`#FF0055` background tint with white text).
- **SALE**: Cyber Cyan background `rgba(0, 240, 255, 0.15)` with `#00F0FF` text and 1px border.
- **LEGENDARY / VIP**: Deep gold aura `rgba(255, 183, 3, 0.2)` accompanied by `#FFB703` text and a metallic gold linear border gradient.

### Cyber Glass Cards
Standard marketplace product cards:
- Layered on `rgba(24, 32, 48, 0.75)` with `16px` backdrop blur.
- Outer border: `1px solid rgba(0, 240, 255, 0.12)`.
- Rarity indicator: A 2px high accent line at the top border reflecting the item's tier (Common: Grey, Rare: Cyan, Epic: Violet, Legendary: Gold).
- Hover state: Elevation lifts by `-4px` with the cyan border alpha escalating to `0.5`.

### Data Tables & Transaction Logs
- Clean zero-border tables with `#121824` alternate striping.
- Numeric columns align right using tabular figures.
- Dividers are faint hairline strokes (`rgba(255, 255, 255, 0.06)`).

### Input Fields & Selectors
- Background: `#121824`. Border: `1px solid rgba(255, 255, 255, 0.12)`.
- Active / Focused: Border switches to `#00F0FF` with a faint `0 0 8px rgba(0, 240, 255, 0.3)` glow.
- Placeholders: Muted slate `rgba(255, 255, 255, 0.35)`.

### Gacha Drop Rate Chamber
- Dynamic radial probability wheels ringed with the secondary violet and primary cyan accents.
- Live rolling reels render on ultra-dark canvas with dynamic radial neon light cast behind the winning asset tier.