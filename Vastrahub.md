# 👔 VastraHub — React.js Frontend Project Breakdown
### A Static Clothes-Selling Showcase Website | Deployable on GitHub Pages

---

## 📌 Project Overview

| Property | Details |
|---|---|
| **Project Name** | VastraHub |
| **Type** | Frontend-only Static React.js App |
| **Target Audience** | Indian men & women (formal + outdoor wear) |
| **Deployment** | GitHub Pages |
| **Backend** | ❌ None — 100% static |
| **Purpose** | Recruiter portfolio showcase |

---

## 🎯 Key Features

### 🔐 Auth (UI-Only / Show Features)
| Feature | Implementation |
|---|---|
| Login Modal / Page | Controlled React form with client-side validation only |
| Sign Up Modal / Page | Form with regex validation (email, password strength meter) |
| Persistent "session" | `localStorage` stores a fake user object on login |
| Protected Route illusion | Redirects to login if localStorage user is absent |
| Logout | Clears localStorage, resets auth context |

> ⚠️ These features are **purely cosmetic** — no real authentication. Users can type anything and "log in". All data lives in `localStorage`.

---

### 🛍️ Core Shopping Features
| Feature | Implementation |
|---|---|
| Product Listing with Filters | Static JSON data, filtered client-side |
| Client-Side Search | Fuzzy search with `Fuse.js` over product JSON |
| Category Navigation | Men → Formal / Outdoor, Women → Formal / Outdoor |
| Product Detail Page | Dynamic route `/product/:id`, data from JSON |
| Shopping Cart | `Context API` + `localStorage` for persistence |
| Wishlist | `Context API` + `localStorage` |
| Size Selector | Static state — no inventory check |
| Sort & Filter | By price, category, type — all client-side |
| Related Products | Filtered from same category in JSON |
| Image Zoom on Hover | CSS transform or `react-medium-image-zoom` |
| Breadcrumb Navigation | Dynamic based on current route |

---

### 🎨 UI/UX Features
| Feature | Implementation |
|---|---|
| Hero Banner / Carousel | `Swiper.js` with autoplay |
| Skeleton Loaders | Fake loading delay with `setTimeout` + CSS skeleton |
| Dark/Light Mode Toggle | CSS variables + `localStorage` preference |
| Responsive Design | Tailwind CSS breakpoints (mobile-first) |
| Smooth Page Transitions | `Framer Motion` `<AnimatePresence>` |
| Toast Notifications | `react-hot-toast` for cart/wishlist actions |
| Sticky Navbar | CSS `position: sticky` + scroll-aware class toggle |
| Back to Top Button | Scroll event listener |
| 404 Page | Custom styled not-found component |
| Lazy Image Loading | Native `loading="lazy"` attribute |

---

## 🧶 Product Catalog Structure

### 👔 Men's Collection (6 Types)

| # | Type | Category | Products in JSON |
|---|---|---|---|
| 1 | Suits | Formal | 6 products |
| 2 | Blazers | Formal | 6 products |
| 3 | Dress Shirts | Formal | 6 products |
| 4 | Outdoor Jackets | Outdoor | 6 products |
| 5 | Cargo & Chino Pants | Outdoor | 6 products |
| 6 | Hoodies & Sweatshirts | Outdoor | 6 products |

### 👗 Women's Collection (6 Types)

| # | Type | Category | Products in JSON |
|---|---|---|---|
| 1 | Formal Kurtas & Suits | Formal | 6 products |
| 2 | Women's Blazers | Formal | 6 products |
| 3 | Formal Dresses | Formal | 6 products |
| 4 | Outdoor Windcheaters | Outdoor | 6 products |
| 5 | Casual/Outdoor Kurtas | Outdoor | 6 products |
| 6 | Track Pants & Joggers | Outdoor | 6 products |

**Total: 12 types × 6 products = 72 products**

---

## 🖼️ Complete Assets Inventory

### Product Images
| Source | Count | Notes |
|---|---|---|
| Men's products (6 types × 6 products × 2 angles) | **72 images** | Front + back or alternate view |
| Women's products (6 types × 6 products × 2 angles) | **72 images** | Front + back or alternate view |
| **Product images subtotal** | **144 images** | Recommended: 800×1000px, WebP |

### UI / Branding Assets
| Asset | Count | Notes |
|---|---|---|
| Hero banner slides | 4 | 1440×600px, one per season/collection |
| Category banner images | 4 | Men Formal, Men Outdoor, Women Formal, Women Outdoor |
| Homepage feature banners | 2 | "New Arrivals" + "Best Sellers" |
| Brand logo (SVG) | 1 | Light + Dark variant = 2 SVGs |
| Favicon | 1 | 32×32px ICO or SVG |
| OG / social share image | 1 | 1200×630px for GitHub Pages meta tag |
| 404 illustration | 1 | SVG recommended |
| Empty cart illustration | 1 | SVG recommended |
| Empty wishlist illustration | 1 | SVG recommended |
| Loader / spinner | 1 | CSS or SVG animation |
| Payment badges strip | 1 | (Decorative only — Visa, UPI, etc.) |

### Icon Assets
| Asset | Count | Notes |
|---|---|---|
| React Icons library | N/A | Replaces individual icon files |
| Custom SVG icons (if any) | ~5 | Size guide ruler, India map pin, etc. |

### Total Asset Count Summary
| Category | Count |
|---|---|
| Product Images | 144 |
| UI / Banner Images | 12 |
| SVG Illustrations | 4 |
| SVG Icons (custom) | ~5 |
| Logo variants | 2 |
| Misc (favicon, OG) | 2 |
| **GRAND TOTAL** | **~169 assets** |

> 💡 **Tip for recruiter project**: Use free stock images from [Unsplash](https://unsplash.com) / [Pexels](https://pexels.com) or Indian clothing e-commerce references. Convert all to `.webp` using `cwebp` or Squoosh to keep bundle size minimal for GitHub Pages.

---

## 📁 Folder Structure

```
VastraHub/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── og-image.jpg
│   └── assets/
│       └── images/
│           ├── banners/
│           │   ├── hero-1.webp
│           │   ├── hero-2.webp
│           │   ├── hero-3.webp
│           │   ├── hero-4.webp
│           │   ├── category-men-formal.webp
│           │   ├── category-men-outdoor.webp
│           │   ├── category-women-formal.webp
│           │   └── category-women-outdoor.webp
│           │
│           ├── products/
│           │   ├── men/
│           │   │   ├── suits/
│           │   │   │   ├── suit-001-a.webp
│           │   │   │   ├── suit-001-b.webp
│           │   │   │   └── ... (12 images per type)
│           │   │   ├── blazers/
│           │   │   ├── dress-shirts/
│           │   │   ├── jackets/
│           │   │   ├── cargo-pants/
│           │   │   └── hoodies/
│           │   │
│           │   └── women/
│           │       ├── formal-kurtas/
│           │       ├── blazers/
│           │       ├── formal-dresses/
│           │       ├── windcheaters/
│           │       ├── casual-kurtas/
│           │       └── track-pants/
│           │
│           └── illustrations/
│               ├── empty-cart.svg
│               ├── empty-wishlist.svg
│               └── 404.svg
│
├── src/
│   │
│   ├── assets/                        # Imported assets (logos, SVGs used in JSX)
│   │   ├── logo.svg
│   │   ├── logo-dark.svg
│   │   └── icons/
│   │       ├── size-guide.svg
│   │       └── india-pin.svg
│   │
│   ├── components/                    # Reusable UI components
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx             # Sticky nav with search, cart, wishlist, auth icons
│   │   │   ├── Footer.jsx             # Links, social icons, "Made in India" branding
│   │   │   ├── Sidebar.jsx            # Mobile filter drawer
│   │   │   └── ScrollToTop.jsx        # Scroll-to-top button component
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.jsx             # Reusable button with variants
│   │   │   ├── Badge.jsx              # "New", "Sale", "Hot" product badges
│   │   │   ├── Skeleton.jsx           # Skeleton loader for cards
│   │   │   ├── Modal.jsx              # Generic modal wrapper
│   │   │   ├── Breadcrumb.jsx         # Dynamic breadcrumb trail
│   │   │   ├── RatingStars.jsx        # Static star rating display
│   │   │   ├── PriceDisplay.jsx       # Price with strike-through original
│   │   │   └── Tooltip.jsx            # Hover tooltip wrapper
│   │   │
│   │   ├── product/
│   │   │   ├── ProductCard.jsx        # Grid card: image, name, price, wishlist btn
│   │   │   ├── ProductGrid.jsx        # Responsive grid of ProductCards
│   │   │   ├── ProductImageGallery.jsx # Thumbnail + zoom main image
│   │   │   ├── ProductFilters.jsx     # Side panel: category, price range, size
│   │   │   ├── ProductSortBar.jsx     # Sort dropdown + results count
│   │   │   ├── SizeSelector.jsx       # XS/S/M/L/XL/XXL button group
│   │   │   ├── ColorSelector.jsx      # Color dot selector
│   │   │   ├── RelatedProducts.jsx    # Horizontal scroll of related items
│   │   │   └── ProductBadge.jsx       # "New Arrival", "Best Seller" tag
│   │   │
│   │   ├── cart/
│   │   │   ├── CartDrawer.jsx         # Slide-in cart sidebar
│   │   │   ├── CartItem.jsx           # Single item row in cart
│   │   │   └── CartSummary.jsx        # Price breakdown + fake checkout button
│   │   │
│   │   ├── auth/
│   │   │   ├── LoginModal.jsx         # Login form modal (UI only)
│   │   │   ├── SignupModal.jsx        # Sign up form modal (UI only)
│   │   │   └── AuthGuard.jsx          # Redirects to login if no localStorage user
│   │   │
│   │   ├── home/
│   │   │   ├── HeroBanner.jsx         # Swiper.js fullwidth hero carousel
│   │   │   ├── CategoryGrid.jsx       # 4 category cards (Men F, Men O, Women F, Women O)
│   │   │   ├── FeaturedProducts.jsx   # "New Arrivals" section
│   │   │   ├── BestSellers.jsx        # "Best Sellers" horizontal scroll
│   │   │   ├── OfferBanner.jsx        # Mid-page promotional banner
│   │   │   └── Testimonials.jsx       # Static fake customer reviews
│   │   │
│   │   └── search/
│   │       ├── SearchBar.jsx          # Input with Fuse.js integration
│   │       └── SearchDropdown.jsx     # Instant results dropdown overlay
│   │
│   ├── pages/                         # Route-level page components
│   │   ├── HomePage.jsx
│   │   ├── ShopPage.jsx               # All products with filters
│   │   ├── CategoryPage.jsx           # /category/:gender/:type
│   │   ├── ProductDetailPage.jsx      # /product/:id
│   │   ├── CartPage.jsx               # Full cart page view
│   │   ├── WishlistPage.jsx
│   │   ├── SearchResultsPage.jsx      # /search?q=...
│   │   ├── ProfilePage.jsx            # Fake user profile (localStorage data)
│   │   ├── CheckoutPage.jsx           # Multi-step fake checkout (UI only)
│   │   └── NotFoundPage.jsx           # 404
│   │
│   ├── context/                       # React Context API global state
│   │   ├── CartContext.jsx            # Cart items, add/remove/update, total
│   │   ├── WishlistContext.jsx        # Wishlist items, toggle
│   │   ├── AuthContext.jsx            # Fake user, login/logout (localStorage)
│   │   ├── ThemeContext.jsx           # Dark/light mode
│   │   └── SearchContext.jsx          # Search query, results, open/close state
│   │
│   ├── data/                          # All static JSON — replaces backend
│   │   ├── products/
│   │   │   ├── men-suits.json
│   │   │   ├── men-blazers.json
│   │   │   ├── men-dress-shirts.json
│   │   │   ├── men-jackets.json
│   │   │   ├── men-cargo-pants.json
│   │   │   ├── men-hoodies.json
│   │   │   ├── women-formal-kurtas.json
│   │   │   ├── women-blazers.json
│   │   │   ├── women-formal-dresses.json
│   │   │   ├── women-windcheaters.json
│   │   │   ├── women-casual-kurtas.json
│   │   │   └── women-track-pants.json
│   │   │
│   │   ├── allProducts.js             # Aggregator: imports + merges all JSONs, exports flat array
│   │   ├── categories.js              # Category metadata (name, slug, banner, description)
│   │   └── testimonials.js            # Static fake reviews
│   │
│   ├── hooks/                         # Custom React Hooks
│   │   ├── useCart.js                 # Sugar over CartContext
│   │   ├── useWishlist.js             # Sugar over WishlistContext
│   │   ├── useAuth.js                 # Sugar over AuthContext
│   │   ├── useSearch.js               # Fuse.js search logic hook
│   │   ├── useLocalStorage.js         # Generic localStorage hook with state sync
│   │   ├── useScrollPosition.js       # Returns scroll Y for navbar/back-to-top
│   │   └── useMediaQuery.js           # Responsive breakpoint detection
│   │
│   ├── utils/                         # Pure utility functions
│   │   ├── formatPrice.js             # Formats to ₹ Indian Rupee format
│   │   ├── filterProducts.js          # Client-side filter logic
│   │   ├── sortProducts.js            # Sort by price, name, rating
│   │   ├── validateForm.js            # Login/signup form validation
│   │   └── generateSlug.js            # "Men's Blue Suit" → "mens-blue-suit"
│   │
│   ├── constants/
│   │   ├── routes.js                  # Route path constants (avoids magic strings)
│   │   ├── sizes.js                   # ['XS','S','M','L','XL','XXL']
│   │   └── sortOptions.js             # Sort dropdown options config
│   │
│   ├── styles/
│   │   ├── globals.css                # CSS variables, resets, base styles
│   │   ├── animations.css             # Reusable keyframe animations
│   │   └── tailwind.css               # Tailwind directives entry
│   │
│   ├── App.jsx                        # Root: ThemeProvider, Router, Context Providers
│   ├── main.jsx                       # Vite entry point
│   └── router.jsx                     # All route definitions (HashRouter!)
│
├── .github/
│   └── workflows/
│       └── deploy.yml                 # GitHub Actions: build + deploy to gh-pages branch
│
├── index.html                         # Vite root HTML
├── vite.config.js                     # base: '/VastraHub/' for GitHub Pages
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.cjs
├── .prettierrc
└── package.json
```

---

## 🛠️ Tech Stack & Justification

| Technology | Version | Why |
|---|---|---|
| **React.js** | 18.x | Component architecture, hooks, large ecosystem |
| **Vite** | 5.x | Lightning-fast dev server, optimized build — preferred over CRA for 2025 |
| **React Router DOM** | 6.x | Client-side routing — **MUST use `HashRouter`** for GitHub Pages |
| **Tailwind CSS** | 3.x | Utility-first, no unused CSS in prod build, easy responsiveness |
| **Framer Motion** | 11.x | Page transitions, stagger animations, cart drawer slide-ins |
| **Swiper.js** | 11.x | Touch-friendly hero carousel, mobile swipe support |
| **Fuse.js** | 7.x | Lightweight fuzzy search over static JSON — zero backend needed |
| **React Hot Toast** | 2.x | Beautiful, accessible toast notifications (cart add, wishlist) |
| **React Icons** | 5.x | 10,000+ icons (FI, HI, BI sets) — no individual SVG files |
| **Zustand** *(optional alt)* | 4.x | Lighter alternative to Context API if state gets complex |
| **react-medium-image-zoom** | 5.x | Accessible, smooth product image zoom |
| **Lucide React** | latest | Clean icon set for UI controls |

### Why Vite over Create React App?
CRA is deprecated. Vite produces smaller bundles, has native ESM, and deploys cleanly to GitHub Pages with a simple `base` config.

### Why HashRouter over BrowserRouter?
GitHub Pages does not support server-side redirects. `BrowserRouter` will return **404 on refresh** for any route other than `/`. `HashRouter` uses `/#/shop` style URLs which work purely on the client — **critical for this project**.

---

## ⚙️ GitHub Pages Deployment Setup

### `vite.config.js`
```js
export default defineConfig({
  base: '/VastraHub/', // Must match your GitHub repo name exactly
  plugins: [react()],
})
```

### `router.jsx`
```jsx
import { HashRouter } from 'react-router-dom';
// ✅ Use HashRouter — NOT BrowserRouter
```

### `package.json` scripts
```json
"scripts": {
  "build": "vite build",
  "deploy": "npm run build && gh-pages -d dist"
}
```

### GitHub Actions (`deploy.yml`)
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 💡 Product JSON Schema

Every product in the 12 JSON files follows this structure:

```json
{
  "id": "mens-suit-001",
  "name": "Classic Navy Pinstripe Suit",
  "slug": "classic-navy-pinstripe-suit",
  "gender": "men",
  "category": "formal",
  "type": "suits",
  "price": 8999,
  "originalPrice": 12999,
  "discount": 30,
  "currency": "INR",
  "rating": 4.3,
  "reviewCount": 128,
  "images": [
    "/assets/images/products/men/suits/suit-001-a.webp",
    "/assets/images/products/men/suits/suit-001-b.webp"
  ],
  "sizes": ["S", "M", "L", "XL", "XXL"],
  "colors": ["Navy", "Charcoal", "Black"],
  "badge": "Best Seller",
  "description": "A timeless navy pinstripe suit crafted for the modern Indian professional...",
  "fabric": "80% Wool, 20% Polyester",
  "inStock": true,
  "isNew": false,
  "isFeatured": true
}
```

---

## ⚠️ Tricky & Challenging Parts — Developer Watch List

### 🔴 CRITICAL: HashRouter vs BrowserRouter
**Problem**: If you use `<BrowserRouter>`, all page refreshes on GitHub Pages will return `404`.
**Fix**: Use `<HashRouter>` throughout. Every `<Link>` and `useNavigate` still works identically — the only difference is URLs become `/#/shop` instead of `/shop`. Never mix the two.

---

### 🔴 CRITICAL: Image Path Resolution on GitHub Pages
**Problem**: Absolute paths like `/assets/images/product.webp` break on GitHub Pages because the app is served from `/VastraHub/` subdirectory, not `/`.
**Fix**: Set `base: '/VastraHub/'` in `vite.config.js`. In JSON files, store image paths as relative (`assets/images/...`) OR use the Vite `import.meta.env.BASE_URL` prefix helper. Test locally with `vite preview --base=/VastraHub/` before every deploy.

---

### 🟠 localStorage Sync Across Tabs
**Problem**: If a user opens the site in two tabs, cart updates in Tab 1 won't appear in Tab 2 without a page reload.
**Fix**: Add a `window.addEventListener('storage', ...)` listener in your context providers to sync state whenever localStorage changes externally.

---

### 🟠 Search Bar Performance with Fuse.js
**Problem**: Re-instantiating a `new Fuse(allProducts, options)` on every keystroke is expensive with 72 products.
**Fix**: Create the Fuse instance once outside the component (module scope) or inside a `useMemo`. Only run `fuse.search(query)` in the search handler.

---

### 🟠 Filter + Sort State in URL (Bookmark-ability)
**Problem**: If filters are only in component state, users can't share or bookmark filtered views.
**Fix**: Sync filter state with URL query params using `useSearchParams()` from React Router. `/shop?gender=men&type=suits&sort=price-asc` should produce a filtered view on direct load.

---

### 🟡 Cart Persistence on Page Refresh
**Problem**: React state is wiped on refresh; cart items disappear.
**Fix**: Use the `useLocalStorage` custom hook instead of plain `useState` in CartContext. On initialization, read from `localStorage.getItem('cart')` and parse JSON. Add a `useEffect` that writes cart state back to localStorage on every change.

---

### 🟡 Fake Auth Session Security Illusion
**Problem**: localStorage is readable by anyone via browser DevTools. Users can manually inject a "user" object and bypass your AuthGuard.
**Context**: For a portfolio/showcase project this is **acceptable and expected**. Add a comment in code like `// Note: This is a UI-only auth simulation for portfolio purposes`. Recruiters understand this.
**Do NOT**: Use any real passwords, real emails, or attempt JWT — it will mislead reviewers.

---

### 🟡 Product Image Loading Performance
**Problem**: 144 product images loading at once will kill page performance and look bad.
**Fix (3-part)**:
1. Convert all images to `.webp` (50–80% smaller than JPEG)
2. Use native `<img loading="lazy" />` on all product cards
3. Set explicit `width` and `height` attributes to prevent layout shift (CLS)

---

### 🟡 Mobile Navigation & Filter Drawer
**Problem**: The filter sidebar used on desktop needs to become a bottom drawer or full-screen overlay on mobile.
**Fix**: Use `useMediaQuery('(max-width: 768px)')` hook to conditionally render either the sidebar (desktop) or a `<Sidebar>` component triggered by a filter button (mobile). Use Framer Motion `AnimatePresence` + `y: "100%"` for the slide-up mobile drawer.

---

### 🟡 Checkout Multi-Step Form (UI Only)
**Problem**: A realistic multi-step checkout (Address → Payment → Review) involves complex state management across steps.
**Fix**: Use a local `step` state (1, 2, 3) and `formData` object inside `CheckoutPage`. Each "step" is a conditional render. At the final step, show a fake order success screen. Write clearly in the README: "Checkout is a UI prototype only."

---

### 🟢 Bundle Size on GitHub Pages
**Problem**: Large bundles slow initial load, hurting first impressions.
**Fix**: Use `React.lazy()` + `<Suspense>` for every page component (route-level code splitting). Vite will automatically split them. Use `vite-plugin-imagemin` or manually compress all images before committing.

---

### 🟢 SEO & Meta Tags (Without React Helmet)
**Problem**: GitHub Pages serves a single `index.html` — no SSR, no per-page meta tags.
**Fix for portfolio**: Add good meta tags in the root `public/index.html` and an OG image. For per-page titles, use `document.title = "..."` in a `useEffect` inside each page component. This is sufficient for a portfolio.

---

## 📦 Complete `package.json` Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0",
    "framer-motion": "^11.3.0",
    "swiper": "^11.1.0",
    "fuse.js": "^7.0.0",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.2.1",
    "lucide-react": "^0.400.0",
    "react-medium-image-zoom": "^5.2.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.4.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "gh-pages": "^6.1.1",
    "postcss": "^8.4.40",
    "tailwindcss": "^3.4.7",
    "vite": "^5.3.5"
  }
}
```

---

## 🗺️ Page Routes Map

```
/                           → HomePage
/#/shop                     → ShopPage (all products)
/#/shop?gender=men          → ShopPage (men filtered)
/#/shop?gender=women        → ShopPage (women filtered)
/#/category/men/formal      → CategoryPage
/#/category/men/outdoor     → CategoryPage
/#/category/women/formal    → CategoryPage
/#/category/women/outdoor   → CategoryPage
/#/product/:id              → ProductDetailPage
/#/search?q=blazer          → SearchResultsPage
/#/cart                     → CartPage
/#/wishlist                 → WishlistPage
/#/checkout                 → CheckoutPage (AuthGuard protected)
/#/profile                  → ProfilePage (AuthGuard protected)
*                           → NotFoundPage (404)
```

---

## 📊 Estimated Development Timeline

| Phase | Tasks | Time Estimate |
|---|---|---|
| **Phase 1** | Setup Vite + Tailwind + Router + Context providers | 1 day |
| **Phase 2** | JSON data entry (72 products × schema) | 2 days |
| **Phase 3** | Core components (Navbar, Footer, ProductCard, ProductGrid) | 2 days |
| **Phase 4** | All pages (Home, Shop, Category, Product Detail) | 3 days |
| **Phase 5** | Cart, Wishlist, Search (Fuse.js) | 2 days |
| **Phase 6** | Auth modals, Profile, Checkout flow | 1.5 days |
| **Phase 7** | Animations (Framer Motion), Dark mode, Polish | 1.5 days |
| **Phase 8** | Image optimization, bundle size, GitHub Pages deploy | 1 day |
| **Total** | | **~14 days** |

---

## ✅ Recruiter-Ready Checklist

- [ ] Clean, organized folder structure visible in GitHub repo
- [ ] Meaningful commit history (feature branches, descriptive messages)
- [ ] `README.md` with live demo link, screenshots, and tech stack badges
- [ ] Mobile-responsive on 320px to 1440px
- [ ] Lighthouse score > 85 (Performance, Accessibility, Best Practices)
- [ ] Dark mode toggle working
- [ ] No console errors or warnings in production build
- [ ] Code comments on complex logic (Fuse.js, filter logic, localStorage sync)
- [ ] `// UI-only` comments on auth/checkout for recruiter transparency
- [ ] At least one custom hook showcased prominently

---

*Project Breakdown by VastraHub Architecture Guide — Frontend Only Edition*