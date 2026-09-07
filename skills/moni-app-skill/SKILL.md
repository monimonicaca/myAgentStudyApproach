---
name: moni-app-skill
description: >
  Builds Android apps with Kotlin and Jetpack Compose following MVVM architecture.
  Use this skill whenever the user asks to create, modify, or scaffold an Android app,
  Android UI, Android screen, or any Android feature that involves Compose, ViewModels,
  navigation, or Jetpack libraries. Also use it when the user mentions
  "Android app", "mobile app", "MVVM", "Compose", or wants to build a screen in an
  Android context, even if they don't explicitly say "use MVVM" or "use Compose".
---

Workflow:
- Use `ponytail` full when coding — shortest diff that works.
- After coding, run `ponytail-review` on the changes.
- After `ponytail-review` finishes, spawn a new agent running `ponytail-audit` on the full repo.

# Moni App Skill — Android Compose + MVVM App Builder

Build Android apps with Kotlin and Jetpack Compose. This is the modern standard Google recommends for new Android apps. Always follow these rules.

## Architecture: MVVM

Every screen follows this structure:

```
feature/
├── FeatureScreen.kt          — @Composable UI, observes ViewModel, renders state
├── FeatureViewModel.kt       — Holds UI state, exposes StateFlow (or LiveData)
├── FeatureUiState.kt         — Data class for the screen's state
```

The ViewModel never references a View, Context, or any Compose type. It exposes data through `StateFlow` (preferred) or `LiveData`. The Composable collects the state and renders.

Activities serve as the container — one `MainActivity` with `setContent { }` that hosts a `NavHost` for navigation. Use Jetpack Navigation Compose (`navController`, `NavHost`, `composable()`) instead of XML nav graphs.

The ViewModel is obtained in the Composable via `viewModel()` from `androidx.lifecycle:lifecycle-viewmodel-compose`.

## Theming: Parameters, Not Hard-Coded

Never hard-code colors, text sizes, or dimensions. Use Material 3 theme systems and resource values:

- Colors → `MaterialTheme.colorScheme` (define in `Color.kt` / `Theme.kt`) or `@color/...` in `res/values/colors.xml`
- Text sizes → `MaterialTheme.typography` (define in `Type.kt` / `Theme.kt`) or `@dimen/...` in `res/values/dimens.xml`
- Strings → `stringResource(R.string....)` or `@string/...` in `res/values/strings.xml`
- Shapes → `MaterialTheme.shapes` (define in `Shape.kt` / `Theme.kt`)

This lets the user tune the look by editing theme files without touching individual screens.

## Layouts: Responsive

- When a screen has more than 3-4 distinct visual sections, decompose it into private `@Composable` functions (e.g. `ProfileHeader()`, `ProfileDetails()`, `ProfileActions()`). Each sub-composable handles one logical piece. Don't over-split — a single `Text` doesn't need its own function. The main screen composable becomes a readable outline of the page structure.
- Use `Modifier.fillMaxWidth()` and `Modifier.fillMaxSize()` to fill available space.
- Use `Modifier.weight()` inside `Row`/`Column` for proportional distribution.
- Use `Modifier.padding()` with `dimensionResource(R.dimen....)` references, never hard-coded `dp` values.
- For scrollable content, use `Modifier.verticalScroll(rememberScrollState())` on the root `Column`.
- For lists, use `LazyColumn` or `LazyVerticalGrid`.
- Use `ConstraintLayout` composable from `androidx.constraintlayout:constraintlayout-compose` only when you need complex constraint relationships. For most cases, `Column`/`Row`/`Box` with modifiers suffice.
- Separate logical sections with `HorizontalDivider()` (Material 3) between groups of fields, or wrap related fields in a `Card` with distinct elevation. Do not just stack fields with uniform spacing — visually group and separate them so the user can tell where one section ends and the next begins.

## Logging

Before adding any logs, run `scan_logging_utils.js` from the active project root to detect whether the project already defines its own log util in `util` / `utils`.

- If a project log util exists, use that util only.
- If no project log util exists, do not introduce `android.util.Log`, `java.util.logging.Logger`, or any other official logging API.
- In that case, skip logging additions and keep the change aligned with the project's existing logging setup.

Every screen must include logs only when the project already has a log util. Log in both the ViewModel and the Composable (via `LaunchedEffect` or callbacks):

- **ViewModel logs**: data loads, state mutations, errors.
- **UI logs**: button taps, form submissions, item selections.
- **Lifecycle logs**: screen creation, data rendering.

Use the project's existing log util with the tag set to the class name:

```kotlin
private const val TAG = "FeatureViewModel"
logD(TAG, "User tapped save: data=$data")
```

Log at appropriate levels using the project's util: `d` for flow, `w` for recoverable issues, `e` for errors.

Example of logging in a Composable callback:
```kotlin
Button(onClick = {
    logD(TAG, "Save button tapped")
    viewModel.save()
}) { Text("Save") }
```

## Strict Scope

Only create, modify, or delete files the user explicitly asks for. Do not add "nice to have" files (tests, documentation, extra screens, helper classes) without consent. If you think something is needed, ask first.

## Project Minimums

- **Min SDK**: 24 (Android 7.0)
- **Target SDK**: latest stable
- **Language**: Kotlin
- **UI**: Jetpack Compose with Material 3

## Example: Building a Login Screen

User says: "Add a login screen with email and password fields and a login button."

What gets created:

1. `LoginScreen.kt` — `@Composable` with `OutlinedTextField` for email, password, and a `Button`
2. `LoginViewModel.kt` — holds `LoginUiState(email, password, isLoading)` as `MutableStateFlow`, exposes via `StateFlow`
3. `LoginUiState.kt` — data class with email, password, isLoading
4. Updates `NavHost` in `MainActivity.kt` — adds the login route

No extra files. No "for later" abstractions. Just the feature.
