# Fifty Seventh & 7th — Design System Conventions

## Palette

| Token | Value | Usage |
|---|---|---|
| `bg-dark` / `--color-dark` | `#F5F0E8` | Main limestone background |
| `bg-dark-2` / `--color-dark-2` | `#EDE8DF` | Linen alternate section background |
| `bg-dark-3` / `--color-dark-3` | `#E4DDD1` | Stone tertiary background |
| `bg-cream` / `--color-cream` | `#FAF8F4` | Lightest cream surface |
| `text-ink` / `--color-ink` | `#1C1A17` | All headings |
| `text-light` / `--color-light` | `#2C2822` | Body text (warm near-black) |
| `text-gold` / `--color-gold` | `#B8975A` | Eyebrow labels, borders, accents |
| `bg-mid` / `--color-mid` | `#D4C9B0` | Dividers, mid-tone surfaces |

> **Semantic inversion note**: `bg-dark` is actually the light limestone background and `text-light` is the dark body text. Token *names* were kept stable from the original dark theme; only their *values* were remapped to the limestone palette.

## Typography

- **Headings (H1–H3)**: `font-display` (Playfair Display), `font-normal` (weight 400). Never bold on luxury headings.
- **Italic subheadings / testimonials**: `font-editorial` (Cormorant Garamond), italic.
- **Body / UI labels**: `font-body` (Inter).
- **Eyebrows**: `font-body text-[0.65rem] tracking-[0.22em] uppercase text-gold` — always above headings, gold color.
- **Nav links**: `font-body text-[0.72rem] tracking-[0.12em] uppercase`.

## Spacing & Layout

- **Section padding**: `py-20 md:py-28` (desktop) / `py-14` (mobile).
- **Container**: `max-w-[1200px] mx-auto px-6 md:px-10`.
- **Two-column gap**: `gap-16`.

## Component Rules

- **Zero border-radius everywhere**: `rounded-none` on all cards, buttons, and images.
- **Gold accent**: use only for eyebrow labels, dividers, active borders, and link accents. Never as a large background fill.
- **Shadows**: `shadow-[0_24px_64px_rgba(0,0,0,0.5)]` only — no colored box shadows.
- **Animations**: vertical-only (`y` axis). No lateral slides. Ease: `[0.16, 1, 0.3, 1]` (luxury spring).
- **Glass surfaces**: `glass-dark` class = `rgba(245, 240, 232, 0.92)` + `backdrop-blur-xl` for navbar. `glass-card` = `rgba(237, 232, 223, 0.8)` + gold border at 18% opacity.

## Key Components

- **`GoldDivider`**: 48px animated gold line — use between eyebrow and body on every section header.
- **`SectionLabel`**: Eyebrow chip above section headings. Always gold, always uppercase tracking.
- **`LuxuryButton`**: Two variants — `filled` (gold background, ink text) and `outline` (gold border, transparent bg).
- **`GlassCard`**: Warm-glass surface with gold border. Used for property info, awards, neighborhood cards.
- **`PropertyCard`**: For listing cards — includes neighborhood badge (gold), image zoom on hover, glass overlay.
- **`PageHeader`**: 480px tall parallax header with limestone veil (76% opacity) for text legibility over photos.
