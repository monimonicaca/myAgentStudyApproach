## 0. Implementation Mandate

> **Any interactive element (button, tag, attachment, clickable card) must NOT be hand-built with `Row` + `Modifier.clip` + `.background`.**
> Use Compose Material 3 standard components to guarantee built-in touch feedback (Ripple), accessible touch-target size, and standard internal padding.

| Design intent | Forbidden implementation | Required component |
| :--- | :--- | :--- |
| Clickable tag / attachment | `Row` + `background` | `AssistChip` or `FilterChip` |
| Primary / secondary action button | `Box` + `clip` | `Button` or `OutlinedButton` |
| Three-column auxiliary feature entry (AI actions: Template / Polish / Preview) | Three equal `Box` cards | `Card` + `onClick` with **72–80dp height** (exception to `page_composing_rules.md` §3, as these are horizontal action buttons, not content cards) |
| Mood selector | Hand-built `Row` grid | `FilterChip` (use its `selected` state) |

## Shared Card & Button Styles

### Card Components

All cards should follow a consistent **soft, floating, rounded** visual language.

* **Purpose:** Content container, floating above the background.
* **Shape:** Rounded corners, never sharp rectangular corners.
* **Corner radius:** **24–28dp** for standard cards; **28–32dp** for prominent/hero cards.
* **Background:** `#ECEBF1` with 0.85 opacity — soft tinted surface, subtly distinguishable from the page background.
* **Border:** Avoid visible heavy borders. If separation is necessary, use a very subtle border or tonal difference.
* **Shadow:** Not needed for now (deferred).
* **Internal padding:** **16dp** standard; **24dp** for large cards.
* **Content alignment:** Primarily left-aligned; center only when the content itself is the visual focus.
* **Internal spacing:** Use **8dp / 12dp / 16dp** spacing between related elements.
* **Card spacing:** Maintain **16dp** between adjacent cards.
* **Interaction:** Interactive cards should provide a subtle pressed/selected state without dramatically changing their shape or elevation.

### Button Components

Buttons should feel like **soft floating controls**, rather than conventional hard UI controls.

* **Shape:** Fully rounded / pill-shaped.
* **Height:** **46dp** for primary actions.
* **Horizontal padding:** **20–24dp**.
* **Corner radius:** **22dp**.
* **Primary button:** Use `#B18BFC` as the main visual emphasis.
* **Primary Button background:** Must use `Brush.horizontalGradient` to implement `linear-gradient(90deg, #B18BFC, #8F7AE5)`; **never** use a solid `primary_button` colour resource.
* **Secondary button:** Use a soft neutral or translucent surface instead of a strong contrasting color.
* **Text:** Short, clear, medium-weight label (Material 3 labelLarge, 14sp); avoid overly bold typography.
* **Icon + text:** Keep **8dp** between icon and label.
* **Button spacing:** Maintain **8–12dp** between buttons in the same action group.
* **Visual weight:** Primary actions should be visually stronger than secondary actions, but never visually aggressive.
* **States:** Preserve the same shape and dimensions across default, pressed, disabled, and selected states; disabled uses Material 3 default disabled alpha.
* **Loading:** Replace text with `CircularProgressIndicator` (**20dp**, **2dp** stroke).

### Chip Components (AssistChip / FilterChip)

Chips are **only** for interactive, user-manipulated elements — never for passive information.

- **AssistChip**: used for tags, attachment counts (with leading icon), or quick actions.
- **FilterChip**: used when selecting among options (e.g., mood filters).
- **Do NOT use chips for:**
  - Timestamp (use plain `Text`)
  - Location / Weather (use icon + plain `Text`)
  - Any non-clickable system information

**Chip styling:**
- Height: 28dp (tight), or 32dp for easier touch targets.
- Corner radius: 16dp (pill).
- Container color: `Color.Transparent` (default, unselected) — never `surfaceVariant`; selected state uses emotion colour + alpha (e.g., `moodColor.copy(alpha = 0.2f)`).
- Label color: `onSurfaceVariant`.
- Leading icon size: 14–16dp.
- Spacing between chips: 8dp.

### TextButton (Secondary)

Secondary navigation buttons that complement primary actions.

* **Purpose:** Secondary navigation (e.g., forgot password).
* **Colour:** Soft Lavender `#A98BFF`.
* **Interaction:** Material 3 default ripple.

### OutlinedTextField (Input)

Form input fields that sit inside cards.

* **Background:** Transparent (inherits from card).
* **Border:** Material 3 outlined style; default secondary text colour, focused primary colour; thickens to **2dp** on error.
* **Corner radius:** Material 3 default small shape.
* **Padding:** Material 3 default (~**16dp** internal).
* **Label / Placeholder:** Material 3 default style.
* **Error state:** Required fields left empty on submit must be highlighted immediately — error colour `#B3261A` border + error-colour helper text below, border thickened to 2dp, label and placeholder turn red, specific missing reason shown below (e.g., "This field is required"); must NOT use secondary text colour or grey to downplay errors.
* **Blur validation:** Validate on blur; if error, render per Error state; if pass, restore normal border.

### Progress Indicator

Loading spinners used inside buttons and other loading contexts.

* **Purpose:** Loading state inside buttons.
* **Size:** **20dp**.
* **Stroke:** **2dp**.
* **Colour:** `#252332` on primary buttons (matches default text) or `#A98BFF` in other contexts.

### Shared Component Principle

> **Cards should feel like soft floating spaces; buttons should feel like soft floating actions.**

Both should share the same **rounded geometry, restrained visual weight, generous internal spacing, and subtle tonal separation** so that cards and controls feel like parts of one unified visual system.
