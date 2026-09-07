# Component Semantics & Information Types

This file defines which visual component type should be used for each kind of information in WriteSelf, based on its **role** and **interactivity**. It prevents the common failure where every piece of information (timestamp, location, weather, tags, attachments) is rendered as the same Chip.

## 1. Information Taxonomy

| Information Type | Examples | Visual Form | Interactivity | Justification |
|------------------|----------|-------------|---------------|---------------|
| **System Timestamp** | "12:42 · Sep 7" | Plain `Text` in `onSurfaceVariant` (Muted Text `#AAA6B8`) | None (non-interactive) | System-provided, not actionable |
| **Environment Metadata** | "Shanghai", "Clear" | Inline `Icon` + `Text`, no container | None (non-interactive) | Contextual, passive |
| **User Tags** | "#travel" | `AssistChip` or `FilterChip` | Clickable (filter / navigate) | User-generated metadata, interactive |
| **Attachments (count)** | "📷 3", "🎙 1" | `AssistChip` with leading icon and count label, or `IconButton` with badge | Clickable (open attachment list) | User-added content, interactive. **Note:** If using `IconButton`, its height must be reduced to match surrounding chips (via `Modifier.height(32.dp)`). Prefer `AssistChip` for visual consistency in a horizontal row. |
| **Empty Attachment Add** | "+ Photo" | `AssistChip` with leading plus icon (uniform height with other chips) | Clickable (add action) | Primary user action — keep consistent height with attachments |

## 2. Prohibited Patterns

- ❌ **Never** wrap a timestamp or environment metadata in a `Chip` or `Card` container.
- ❌ **Never** make a non-interactive element clickable.
- ❌ **Never** use the same visual style (e.g., filled capsule) for both interactive and passive elements.
- ❌ **Never** display attachment counts as a standalone `Text` without an interactive parent.

## 3. Recommended Grouping

When multiple information types appear together (e.g., in a journal entry context), group them by role:

```
Timestamp (plain)         → top, centred, subtle
Environment (icon+text)   → next row, centred, subtle
--- divider (optional) ---
Tags + Attachments        → interactive row using AssistChips
```

## 4. Use Material 3 Components When Possible

- For clickable tags/attachments: `AssistChip` (with `onClick`).
- For adding new attachments: `IconButton` or `AssistChip` with leading `+` icon.
- For filter/toggle tags: `FilterChip`.
- Do **not** build a custom `Row + Modifier.clickable` unless no M3 component fits (which is rare).

## 5. Interaction Feedback

Interactive elements must carry an `onClick` and visible press feedback (Material 3 ripple / pressed state). A tag or attachment that looks like a chip but has no click handler is a violation even if its visual form is correct.
