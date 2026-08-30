# Header V3.2 — design and behavior

## Composition

The header is a structural line across the experience rather than a floating glass capsule.

- Left: animated JF Signal mark plus Jonathan Febraio / Software Engineer lockup.
- Center: Work, System, About and Contact.
- Right: EN/PT and the understated “Let’s talk” route.
- Case study: the center navigation becomes a contextual “Back to work” route.

## States

### Top

At the top of the home page the header is 88 px high, nearly transparent and integrated with the hero. The full wordmark is present and the bottom structure line is absent.

### Scrolled

After 64 px, `useHeaderState` applies a compact 69.6 px state with restrained blur, one subtle border and a shortened lockup. The grid columns do not change, so the transition does not shift the navigation.

### Case study

Routes under `/work/` use the compact surface immediately. The center becomes “Back to work”; language and contact remain available.

## Active navigation

`useActiveSection` observes `work`, `system`, `about` and `contact` with a viewport-centered root margin. A single signal line and node move to the active or hovered item. On mouse leave it returns to the section reported by the observer. `aria-current="location"` exposes the same state to assistive technology.

## Mobile behavior

Below 900 px the mark, language selector and 44 px menu control remain in the header. The menu:

- is rendered only while open, so hidden links never remain focusable;
- locks body scrolling and restores the previous value on cleanup;
- moves focus to the first route;
- traps Tab and Shift+Tab inside the panel;
- closes on Escape and returns focus to the trigger;
- closes after a route is selected;
- respects all safe-area insets;
- keeps section numbers and the JF Signal system language.

The 390, 430 and 768 px checks found no horizontal overflow and no visible interactive target below 44 × 44 px.
