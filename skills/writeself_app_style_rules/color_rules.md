# WriteSelf Colour Rules

> This file defines all colour-related specifications for the WriteSelf design system: Colour System (§1), Gradient System (§2), Emotion-Colour Mapping (§3), and AI Module Colour Specification (§4).

---

## 1. Colour System (Full)

### 1.1 Background Colours

| Name | Hex | Usage |
|------|-----|-------|
| Primary Background | `linear-gradient(135deg, #E9E4EA, rgba(215, 204, 236, 0.85))` | Full‑screen background – gradient from light grey‑lavender `#E9E4EA` to translucent lavender `rgba(215,204,236,0.85)` (was solid `#F5F2FA`); replaces olive green |
| Secondary Background | `#FAF8F5` | Optional warm‑white for special sections |

### 1.2 Brand Colours

| Name | Hex | Usage |
|------|-----|-------|
| Primary (Soft Lavender) | `#A98BFF` | AI features, selected states, emotional highlights, brand identity |
| Primary Button | `#B18BFC` | Primary buttons, primary action gradients |
| Secondary (Soft Sage) | `#A8D5BA` | Growth, calmness, save actions, positive states (e.g., "Save entry", "Complete") |

### 1.3 Accent Colours

| Name | Hex | Usage |
|------|-----|-------|
| Warm Accent | `#FFD88A` | Joy, morning, positive moods |
| Emotional Accent | `#FFB59E` | Anxiety, stress, emotional warnings |

### 1.4 Text Colours

| Name | Hex | Usage |
|------|-----|-------|
| Primary Text | `#252332` | Titles, body text |
| Secondary Text | `#77738A` | Subtitles, supporting info |
| Muted Text | `#AAA6B8` | Placeholders, disabled states |

### 1.5 Surface & Card Colours

| Name | Value | Usage |
|------|-------|-------|
| Card Background | `#ECEBF1` with 0.85 opacity | Card surfaces |
| Glass Surface | `rgba(255,255,255,0.7)` | Translucent overlays only (modals, popovers, tooltips) — never standard cards |

### 1.6 Semantic Colours

| Name | Value | Usage |
|------|-------|-------|
| Error (light theme) | `#B3261A` | Form error messages, error borders, error helper text (Material 3 error) |
| Error (dark theme) | `#F2B8B5` | Error info on dark backgrounds |
| On Error | `#FFFFFF` (light) / `#601410` (dark) | Text on error colour blocks/buttons |
| Missing‑field warning | `#B3261A` | Border and hint for unfilled required fields—shares error colour to ensure visibility |
| On Primary (default / unclicked) | `#252332` | Primary button text in default state — dark text on lavender/gradient background for high contrast |
| On Primary (pressed / clicked) | `#FFFFFF` | Primary button text in pressed state — switches to light text as press feedback |

### 1.7 Illustration Colours

| Name | Value | Usage |
|------|-------|-------|
| Logo Line Colour | `#92908D` at 58% opacity | Brand logo — hand‑drawn sketch lines; warm grey. The only illustration colour in the system |

---

## 2. Gradient System (New)

Use pastel gradients instead of solid colour blocks to enhance emotion and depth.

| Name | Gradient Definition | Usage |
|------|---------------------|-------|
| AI Card Gradient | `linear-gradient(135deg, #E8DEFF, #F5EEFF)` | AI insights, AI rewriting cards |
| Mood Card Gradient | `linear-gradient(135deg, #F5F0FF, #FFFFFF)` | Daily journal cards, mood picker |
| Primary Button Gradient | `linear-gradient(90deg, #B18BFC, #8F7AE5)` | Save, submit, AI‑generate actions |
| Journal Entry Gradient | `linear-gradient(135deg, #FAF8F5, #FFFFFF)` | Entry list items, history |

---

## 3. Emotion‑Colour Mapping System (New)

Move away from simple red=anger, blue=sadness. Use a more nuanced "psychological colour" palette:

| Emotion | Hex | Description |
|---------|-----|-------------|
| Joy | `#FFD88A` | Warm yellow, sunny |
| Calm | `#A8D5BA` | Soft green, peaceful |
| Anxiety | `#FFB59E` | Pink‑orange, alert |
| Tired | `#B8C4D6` | Grey‑blue, low energy |
| Lonely | `#B7B3D9` | Pale lavender, quiet |
| Hopeful | `#C7E8A4` | Fresh green, optimistic |
| Touched | `#F6B8D4` | Pink, warm |
| Lost | `#AEB8D8` | Cool blue, introspective |

These colours are used for: mood tags, statistics charts, mood selectors, background accents.

---

## 4. AI Module Colour Specification (New)

AI is the core differentiator of WriteSelf; its visuals should feel distinct from regular operations.

- **Primary colour:** Lavender `#A98BFF`
- **Background glow:** `#F0E8FF`
- **Icons / accents:** `#A98BFF` with a subtle glow

**Usage:**
- "AI Insight", "AI Rewrite", "Generate Summary" buttons/labels use lavender.
- AI‑related cards or areas use the lavender gradient (see section 2).
- While AI is processing, buttons may pulse with a lavender glow animation.

**User perception goal:** AI is understanding me, not a cold tool.

---
