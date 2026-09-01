# Page Composition Rules (Design System)

## 0. Layout Scope & Modes

This document distinguishes two layout modes. Where rules conflict (single vs. multiple cards, single vs. two-column, centered vs. left-aligned text, max width), the value is selected by the active mode — not by a single global rule.

### Mode A — Auth / Single-Task Screens

Applies to: splash, captcha, forgot password, and any screen whose entire purpose is one focused action.

```
Column count        : Single column
Cards per screen    : 1 (one floating card, centred)
Alignment           : All centred horizontally
Max content width   : 400dp
Information density  : Very low — one focused task per screen
```

Detailed specs: see §14.

### Mode B — Main App Screens

Applies to: Home, Journal Detail, Mood Tracking, AI Insights, Analytics, Profile, Settings, and any content-rich screen.

```
Column count        : Single main column; small feature cards may form a two-column row
Cards per screen    : Multiple (Primary + Secondary + Supporting)
Alignment           : Text left-aligned; data / emotional visualization centred
Content width       : Large cards 90% screen width; small cards 42% ~ 45% screen width
Information density : Low — one dominant focal point per screen
```

Detailed specs: see §1 – §13.

### Conflict Resolution Cheat Sheet

| Conflict point             | Mode A (Auth)                 | Mode B (Main App)                    |
| -------------------------- | ----------------------------- | ------------------------------------ |
| Cards per screen           | 1                             | Multiple                             |
| Column layout              | Single column                 | Single + optional two-column smalls  |
| Text alignment             | All centred                   | Left-aligned                         |
| Data / visualization align | Centred                       | Centred                              |
| Max content width          | 400dp                         | 90% screen width (large cards)       |

---

## 1. Overall Layout: Vertical Breathing Flow

### Core Principle

Every screen should follow a calm vertical storytelling structure:

```
Top Identity Area
        ↓
Primary Information Area
        ↓
Feature Card Area
        ↓
Supporting Information Area
```

The layout should feel like a personal space, not a dashboard.

Avoid:

* Dense information grids
* Multiple competing sections
* Edge-to-edge content blocks
* Crowded layouts

Recommended structure:

```
┌────────────────────┐
│  Status Bar        │
│                    │
│  Header            │
│  (identity/title)  │
│                    │
│  Main Highlight    │
│  (core content)   │
│                    │
│  Feature Cards     │
│                    │
│  Secondary Lists   │
│                    │
└────────────────────┘
```

The main visual focus should stay around:

```
35% ~ 65% of screen height
```

Avoid placing all important content at the top.

> Mode A note: Auth screens collapse this structure into a single centred card. The vertical breathing rhythm still applies (logo → card → bottom action); see §14.

---

## 2. Island Card Composition

All major content should live inside independent visual containers.

The interface should be constructed as:

```
Background
    ↓
Floating Rounded Card
    ↓
Content
```

Example (Mode B):

```
Background

 ├── Primary Card
 │
 ├── Secondary Card
 │
 └── Supporting Card
```

Cards should feel like soft floating islands.

### Card Visual Specs (Cross-Mode)

Applies to every floating card, regardless of mode.

| Attribute        | Specification                                  |
| ---------------- | ---------------------------------------------- |
| Shadow           | Not needed for now (deferred)                  |
| Internal padding | 16dp (24dp for large cards) |

Usage rules differ by mode — see §14.

---

## 3. Card Size System

> The sizes below apply to **Mode B (Main App)**. For Mode A (Auth), a single centred card with `max-width 400dp` is used — see §14.

### Large Feature Cards

Used for:

* AI insights
* Journal statistics
* Emotional analysis
* Main actions

Recommended:

```
Width:
90% of screen width

Height:
20% ~ 35% of screen height
```

Structure:

```
┌─────────────────┐
│                 │
│   Main Focus    │
│                 │
└─────────────────┘
```

---

### Small Feature Cards

Used for:

* Quick actions
* Daily intentions
* Reflection entries

Recommended:

```
Width:
42% ~ 45% of screen width

Height:
15% ~ 20% of screen height
```

Two-column layout (Mode B only — Mode A never uses two columns):

```
┌────────┐  ┌────────┐
│ Card A │  │ Card B │
│        │  │        │
└────────┘  └────────┘
```

---

## 4. Negative Space Principle

The interface should prioritize breathing room.

The design language is:

> Less content, more emotional space.

---

### Screen Padding

Horizontal padding:

```
24dp
```

Default vertical padding:

```
32dp
```

Avoid:

```
|Text|
```

Prefer:

```
|        Text        |
```

---

### Card Spacing

Vertical spacing between cards:

```
16dp
```

Example:

```
Header

↓ 16dp

Hero Card

↓ 16dp

Feature Cards

↓ 16dp

Supporting Content
```

---

### Internal Spacing (Cross-Mode)

| Item                            | Value | Description                                          |
| ------------------------------- | ----- | ---------------------------------------------------- |
| Card Internal Padding            | 16dp  | Inside every card (24dp for large cards)           |
| Card Vertical Item Spacing       | 16dp  | Between items inside a card (`Arrangement.spacedBy`) |
| Logo to Card Spacing (Mode A)   | 32dp  | Vertical space from logo to the auth card            |
| Card to Bottom Actions (Mode A) | 16dp  | Vertical space from card to the bottom action row    |

---

## 5. Single Visual Focus Rule

Each screen must have one dominant visual element.

The user should immediately understand:

"What is the most important thing here?"

Example:

Home Screen:

Primary focus:

```
Start Your Journal
```

Not:

* Date
* Mood
* Goals
* Statistics

all competing equally.

Visual hierarchy:

```
              ★
        Main Focus


   Secondary   Secondary


      Supporting Content
```

---

## 7. Alignment Rules

Alignment differs by mode.

### Mode A — Auth / Single-Task Screens

All content is centred horizontally:

```
Center Alignment
```

Including:

* Logo and subtitle
* The card itself (centred on screen)
* Titles, body, button labels, input fields
* Helper / supporting text

> Exception: text buttons stacked inside the auth card may align start.

---

### Mode B — Main App Screens

#### Text Alignment

All informational content should use:

```
Left Alignment
```

Including:

* Titles
* Descriptions
* Labels
* Supporting text

Example:

```
Journal History

470

Total journals
```

---

#### Data Alignment

Emotional or analytical data should use:

```
Center Alignment
```

Examples:

* Numbers
* Charts
* Mood indicators
* Progress visualization

Example:

```
       470

 Total journals
```

---

## 8. Header Composition Rules

Headers should remain minimal.

> Applies primarily to Mode B. Mode A screens typically use a logo + subtitle block instead of a header bar.

Two main patterns:

### Profile Header

```
Avatar              Actions


        Greeting

        Subtitle
```

---

### Detail Header

```
←              Title              ×
```

Rules:

* Keep actions secondary
* Avoid multiple competing buttons
* Maintain large empty space

---

## 9. Illustration Composition Rules

Illustrations should support the content, not dominate it.

Recommended ratio:

```
Text:
60% ~ 70%

Illustration:
30% ~ 40%
```

Example:

```
┌──────────────────┐
│ Text        ☀️   │
│                  │
│ Button           │
└──────────────────┘
```

Illustrations should feel:

* Gentle
* Decorative
* Emotional
* Lightweight

---

## 10. Data Visualization Composition

Use centered emotional visualization.

Preferred:

```
        ┌───────┐

          470

     Total journals

        └───────┘
```

Avoid:

* Complex dashboards
* Dense charts
* Multiple metrics competing together

The visualization should communicate a feeling first, data second.

---

## 11. Scrolling Structure

> Applies to Mode B. Mode A screens do not scroll — they fit a single centred card.

Recommended page hierarchy:

```
Scrollable Column

 ├── Header
 │
 ├── Hero Section
 │
 ├── Feature Cards
 │
 ├── AI Insight Cards
 │
 ├── History / Timeline
 │
 └── Additional Content
```

Avoid:

* Nested scrolling areas
* Multiple independent scroll containers

---

## 13. Overall Composition Formula

```
Calm Personal UI

=

Large Negative Space

+

Floating Rounded Cards

+

Single Visual Focus

+

Soft Layer Separation

+

Centered Emotional Elements

+

Low Information Density
```

---

## 14. Auth / Single-Task Screen Layout (Mode A)

This section consolidates the layout constraints for auth and single-task screens (splash, captcha, forgot password). For these screens, it supersedes the conflicting general rules elsewhere in this document.

### Layout Parameters

| Item                           | Value                     | Description                                                       |
| ------------------------------ | ------------------------- | ----------------------------------------------------------------- |
| Screen Horizontal Padding      | 24dp                      | Left and right margins                                            |
| Screen Vertical Padding        | 32dp                      | Top and bottom margins                                            |
| Max Content Width              | 400dp                     | Card constraint, centred                                          |
| Logo to Card Spacing           | 32dp                      | Vertical space                                                    |
| Card to Bottom Actions Spacing  | 16dp                      | Vertical space                                                    |
| Card Internal Padding           | 16dp                      | Inside padding                                                    |
| Card Vertical Item Spacing      | 16dp                      | Between items (`Arrangement.spacedBy`)                            |
| Alignment Rules                 | All centred horizontally  | Text buttons inside card may align start                         |
| Information Density            | Very low                  | One focused task per screen                                       |

Whitespace strategy: content floats in a single card; spacer-based vertical rhythm (no grid).

### Card (Mode A)

| Attribute     | Specification                          |
| ------------- | -------------------------------------- |
| Count         | One card per screen                    |
| Position      | Centred, max-width 400dp               |
| Shadow        | Not needed for now (deferred)          |
| Padding       | 16dp                                   |

### Button (Mode A)

| Attribute | Specification                          |
| --------- | -------------------------------------- |
| Height    | 46dp                                   |

### OutlinedTextField (Mode A)

| Attribute   | Specification                          |
| ----------- | -------------------------------------- |
| Background  | Transparent (inherits from card)       |
| Padding     | Material 3 default (~16dp internal)    |

---

# Design Philosophy

> Every screen should feel like a quiet personal room, not a productivity dashboard.
> Use floating rounded containers, generous breathing space, one emotional focal point, and a vertical storytelling flow.

This composition system should be applied consistently across:

* Home
* Journal Detail
* Mood Tracking
* AI Insights
* Analytics
* Profile
* Settings
* Auth (splash / captcha / forgot password) — Mode A

so every page feels like part of the same emotional product world.
