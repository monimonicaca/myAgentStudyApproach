# WriteSelf Visual Design System (Full Version)

***

## 1. Visual Identity

**Product Personality:** Introspective, gentle, personal, with warm AI companionship

**Emotional Keywords:** calm, introspective, soft, personal, trust, warmth, simplicity, humane, intelligent, premium

**Brand Character:** A gentle AI companion—not a tool, not a coach. The brand name "WriteSelf" and tagline "理解每一个自己" (understand every self) position the product as an AI‑enhanced private space for self‑reflection.

**Visual Philosophy:** Soft emotional AI journal language, blending iOS premium minimalism with glassmorphism. Floating cards convey the warm, intelligent feeling of "AI is understanding me."

**User Feeling:** The user should feel at ease, unjudged, and welcomed into a reflective space gently guided by AI. The interface is a soft invitation, not a cold command.

***

## 2. Visual Style

**Visual Style:** Soft Emotional AI Journal

**Design Approach:** Centred, single‑column layouts with generous whitespace. One primary action per screen. Cards use a floating glass aesthetic—clean background and soft shadows for depth.

> Layout scope: the single-centred-column, one-card-per-screen rules in this document apply to **Mode A** (auth / single-task screens). Main-app screens follow **Mode B** — single main column with optional two-column small feature cards, multiple cards per screen, text left-aligned, large cards at 90% screen width.

**Reference Style:** iOS premium minimalism, AI product futuristic feel, emotional wellness apps, glassmorphism.

**Key Characteristics:**

- Single centred content column
- Floating glass cards (shadow deferred)
- No decorative elements, no hard borders

**Avoid:** Multi‑column layouts, dense information, harsh shadows, sharp corners.

***

## 3. Typography System

| Name                         | Size                         | Weight              | Usage                                               |
| ---------------------------- | ---------------------------- | ------------------- | --------------------------------------------------- |
| Large Title (Brand)          | N/A (logo image)             | N/A                 | Splash logo "WRITESELF" as vector image             |
| Splash Subtitle              | 18sp                         | Normal              | Tagline "理解每一个自己"                                   |
| Page Title / Header Subtitle | 20sp                         | Normal (bodyMedium) | Subtitle below logo                                 |
| Body                         | 16sp (Material 3 bodyLarge)  | Normal              | General text, form labels                          |
| Button Label                 | 14sp (Material 3 labelLarge) | Medium              | Button text                                         |
| Input Label / Placeholder    | 16sp (Material 3 default)    | Normal              | OutlinedTextField labels                            |
| Caption                      | 11sp (Material 3 labelSmall) | Medium              | Helper text (reserved; not used in current screens) |

**Typeface:** System default (FontFamily.Default)\
**Hierarchy:** Flat – only two deliberate levels above body: logo and subtitle. No multi‑level heading hierarchy.

***

## 4. Layout System

> These parameters apply to **Mode A** (auth / single-task screens).

| Item                           | Value                    | Description                                                       |
| ------------------------------ | ------------------------ | ----------------------------------------------------------------- |
| Screen Horizontal Padding      | 24dp                     | Left and right margins                                            |
| Screen Vertical Padding        | 32dp                     | Top and bottom margins                                            |
| Max Content Width              | 400dp                    | Card constraint, centred                                          |
| Logo to Card Spacing           | 32dp                     | Vertical space                                                    |
| Card to Bottom Actions Spacing | 16dp                     | Vertical space                                                    |
| Card Internal Padding          | 16dp                     | Inside padding                                       |
| Card Vertical Item Spacing     | 16dp                     | Between items (Arrangement.spacedBy)                 |
| Alignment Rules                | All centred horizontally | Text buttons inside card align start                             |
| Information Density            | Very low                 | One focused task per screen                                       |

**Whitespace Strategy:** Generous – content floats in a single card; spacer‑based vertical rhythm (no grid).

***

## 5. Icon and Illustration Style

- **Icons:** No icons used in analysed screens (apart from the logo) – keeping it pure.
- **Illustration:** The only illustration is the brand logo – hand‑drawn, sketch‑like flowing lines. The logo is an abstract human figure – organic, artistic, with no solid fills or geometric shapes.
- **Imagery:** No photography or raster images.
- **AI elements:** For AI interaction areas, a subtle glow / halo may be added to reinforce the "intelligent companion" feel.

***

## 6. Motion and Interaction Style

| Type             | Specification                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| Overall Feeling  | Subtle, gradual, calming                                                                                            |
| Transition Style | Fade‑in opacity animations (`tween(400ms)`) with staggered delays                                                   |
| Splash           | Logo fades in → subtitle fades in 160ms later                                                                       |
| Captcha Drag     | Drag gesture with tween snap‑back animation (200ms)                                                                 |
| Button Loading   | Smooth transition from text to spinner                                                                              |
| Page Transition  | Not explicitly styled – relies on Compose Navigation defaults                                                       |
| Modal Behaviour  | No slide‑up or scale animation defined (current). Uses Surface card (8dp elevation, large shape, 24dp padding)     |
| AI Processing    | Suggested: pulsing glow on the action button (to be implemented)                                                   |

***

## 7. Design Principles (Final)

1. **One task per screen** – stay focused, avoid multitasking clutter.
2. **AI as gentle companion** – all AI interactions use soft glow, conveying understanding, not control.
3. **Floating glass texture** – cards feel light and elevated, creating clear depth.
4. **Progressive disclosure** – show only what's needed; hide complexity behind cards and dialogs.

***

## 8. Restrictions & Avoidances (Final)

**Must Avoid:**

- ❌ Multi‑column layouts, dense information, harsh drop shadows
- ❌ Sharp corners, heavy borders, dividers
- ❌ Inconsistent component styles across screens

**Must Adhere To:**

- ✅ Soft shadow on cards
- ✅ Generous whitespace, content breathes
- ✅ **Highlight errors and required-field misses prominently**—thicken border to 2dp, sync label/placeholder/helper text, show specific missing reason; must be visible at a glance

***

## 9. Brand One‑Liner (Internal Use)

> **WriteSelf uses a soft emotional AI journal visual language.**\
> The design combines: iOS premium minimalism, floating glass cards, gentle AI‑inspired accents, and a warm private diary atmosphere.\
> **The interface should feel like: a personal memory garden enhanced by AI.**

***
