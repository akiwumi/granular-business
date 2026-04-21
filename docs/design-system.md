# BigDrop-Inspired Design System

## Reference Direction

Inspired by BigDrop Inc.'s premium digital agency aesthetic: dark-first, typographically bold, minimal color palette, and strong motion principles. This is an original design system built from observed patterns — not copied code.

## Brand Feel

- Dark, confident, and premium
- Bold editorial typography
- Purposeful whitespace and breathing room
- Accent blue as the single brand color
- Motion that feels intentional, never decorative

## Live Design System

See `design-system.html` in the project root for the full interactive reference.

---

## Core Tokens

### Colors

| Token | Value | Use |
|---|---|---|
| `--color-black` | `#080808` | Page background |
| `--color-surface-1` | `#0f0f0f` | Card, sidebar background |
| `--color-surface-2` | `#161616` | Input background, nested surfaces |
| `--color-surface-3` | `#1e1e1e` | Hover state, secondary surface |
| `--color-surface-4` | `#252525` | Active state |
| `--color-border` | `#2a2a2a` | Default border |
| `--color-ink-primary` | `#ffffff` | Primary text |
| `--color-ink-secondary` | `#a0a0a0` | Body text, descriptions |
| `--color-ink-tertiary` | `#5a5a5a` | Metadata, labels |
| `--color-accent` | `#1461f0` | CTAs, links, focus rings |
| `--color-accent-hover` | `#2b73ff` | Hover state for accent |
| `--color-success` | `#22c55e` | Success states |
| `--color-warning` | `#f59e0b` | Warning states |
| `--color-error` | `#ef4444` | Error states |

### Typography

- **Sans**: Inter (300–900) — all UI and editorial copy
- **Mono**: DM Mono (400–500) — code, tokens, data labels

| Scale | Size | Weight | Use |
|---|---|---|---|
| `--text-8xl` | 96px | 900 | Display |
| `--text-7xl` | 72px | 900 | H1 |
| `--text-6xl` | 60px | 800 | H2 |
| `--text-5xl` | 48px | 800 | H3 |
| `--text-4xl` | 36px | 700 | H4 |
| `--text-xl` | 20px | 400 | Body large |
| `--text-base` | 16px | 400 | Body |
| `--text-sm` | 14px | 400 | Small, captions |
| `--text-xs` | 12px | 600 | Eyebrow labels (uppercase) |

### Spacing

Base-8 scale from `--space-1` (4px) to `--space-32` (128px).

### Border Radius

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Badges, tags |
| `--radius-md` | 8px | Buttons, inputs |
| `--radius-lg` | 12px | Header, nav |
| `--radius-xl` | 16px | Cards |
| `--radius-2xl` | 24px | Large panels |
| `--radius-full` | 9999px | Pills, avatars |

### Motion

- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` — exits with energy, settles smoothly
- **Fast**: 150ms — hover states
- **Base**: 250ms — card transitions
- **Slow**: 400ms — panel open/close

---

## Components

### Buttons

7 variants × 5 sizes:
- **Variants**: Primary, Secondary, Outline, Ghost, Accent Outline, White, Danger
- **Sizes**: xs (28px), sm (36px), md (44px), lg (52px), xl (60px)

### Forms

- `form-input`: dark fill, 1px border, accent focus ring (3px glow)
- Error state: red border + red focus ring
- Disabled: 50% opacity, `not-allowed` cursor

### Cards

- **Content card**: image + tag + title + desc + footer
- **Stat card**: large numeric value + delta indicator
- **Feature card**: icon box + title + description

### Badges

5 variants (Default, Accent, Success, Warning, Error) + dot indicator variant.

### Navigation

Frosted-glass sticky header: `backdrop-filter: blur(20px)` on `rgba(8,8,8,0.85)` base.

### Avatars

6 sizes (xs→2xl) with letter fallback. Group variant with 2px border gap overlap.

### Progress

Single-track bar (6px height). 4 color variants: accent, success, warning, error.

---

## Agency Patterns

### Work List
Horizontal rule rows with client name, category tags, and animated arrow. Arrow shifts right and turns accent blue on hover.

### Service Listing
Numbered rows (monospace counter) with name and description in a 3-column layout.

### Agency Stats
Massive numbers (`--text-7xl`, weight 900) with accent-colored unit suffix.

### Scrolling Marquee
CSS `animation: marquee` infinite loop. Duplicate items for seamless wrap.

### Hero
- Announcement pill with pulsing dot
- Gradient text headline (accent → purple)
- Subtle grid background + radial glow
- Dual CTA: Primary filled + Outline ghost

---

## Effects

| Effect | Implementation |
|---|---|
| Gradient text | `background-clip: text` with linear-gradient |
| Accent glow | `box-shadow: 0 0 40px rgba(20,97,240,0.25)` |
| Gradient border | Pseudo-element with gradient, z-index trick |
| Grid texture | CSS `background-image` with two linear-gradients |
| Frosted glass | `backdrop-filter: blur(20px)` |
