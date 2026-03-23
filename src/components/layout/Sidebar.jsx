

**It's the mobile filter drawer** — on desktop, the product filters (category, price range, size, gender) appear as a permanent left-side panel on the Shop/Category pages. But on mobile screens, that same panel can't just sit there — it would eat up the entire screen.

So `Sidebar.jsx` is a **slide-up or slide-in overlay** that gets triggered when the user taps a "Filters" button on mobile. It wraps the `<ProductFilters />` component and adds:

- A dark backdrop behind it
- A close button (✕) at the top
- A Framer Motion animation (`y: "100%"` → `y: 0`) so it slides up smoothly from the bottom
- A scroll-lock on the body so the page behind doesn't scroll while filters are open

**In simple terms:**

| Screen Size | How Filters Appear |
|---|---|
| Desktop (≥ 768px) | `ProductFilters.jsx` renders directly in the page layout as a left column |
| Mobile (< 768px) | `Sidebar.jsx` wraps `ProductFilters.jsx` and shows it as a bottom drawer |

The `useMediaQuery` hook detects which one to show, and a "Filter" button in `ProductSortBar.jsx` toggles the sidebar open/closed on mobile.

So it's **not** a navigation sidebar — it's purely a **responsive container for the filter panel** on smaller screens. If you're building desktop-only, you could skip it entirely and just use `ProductFilters.jsx` directly.
