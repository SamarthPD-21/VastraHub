# VastraHub — Complete Assets Usage Guide

> This guide covers every single image, SVG, WebP, PNG, ICO, and icon used in the
> VastraHub React.js project. For each asset you will find: the exact file name,
> the folder it lives in, the component or page that imports it, the exact purpose
> it serves on screen, the recommended dimensions, and the best website to source it.

--- 

## How to Read This Guide

| Column | Meaning |
|--------|---------|
| **File name** | Exact file name you must use — spelling and casing must match your JSON/import paths |
| **Folder** | Path relative to the project root |
| **Used in** | React component or page file that references this asset |
| **Purpose** | What the user actually sees this image doing on screen |
| **Dimensions** | Width × Height in pixels at the time you save/export the file |
| **Format** | File format required |
| **Source** | Best website to find or generate this asset for free |

---

## Quick Count Reference

| Category | Count |
|----------|-------|
| Product images (WebP) | 144 |
| Hero banner images (WebP) | 4 |
| Category card images (WebP) | 4 |
| Section promo banners (WebP) | 3 |
| Offer / misc UI images (WebP) | 3 |
| SVG illustrations | 9 |
| Logo SVGs | 2 |
| Misc root assets | 4 |
| **Grand total** | **173** |
| Icon files | 0 — handled entirely by `react-icons` npm package, no files needed |

---

---

# PART 1 — PRODUCT IMAGES

All product images live inside `public/assets/images/products/`.
Every clothing type has its own sub-folder.
Each product gets **2 images**: an `a` (primary / front view) and a `b` (secondary / back or detail view).
6 products per type × 2 images = 12 images per folder × 12 folders = **144 images total**.

**Naming convention:** `[type-shortcode]-[001 to 006]-[a or b].webp`
**Format for all product images:** `.webp`
**Dimensions for all product images:** `800 × 1000 px` (portrait, 4:5 ratio)
**Compression target:** 60–80 KB per file after WebP conversion at 78% quality

---

## 1.1 Men — Suits

**Folder:** `public/assets/images/products/men/suits/`

| File name | Used in component | Used in page | Purpose on screen |
|-----------|------------------|--------------|-------------------|
| `suit-001-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail shown in the product grid card |
| `suit-001-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary thumbnail shown in the detail page image gallery |
| `suit-002-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail — product 2 |
| `suit-002-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 2 |
| `suit-003-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail — product 3 |
| `suit-003-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 3 |
| `suit-004-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail — product 4 |
| `suit-004-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 4 |
| `suit-005-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail — product 5 |
| `suit-005-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 5 |
| `suit-006-a.webp` | `ProductCard.jsx` | `RelatedProducts.jsx` | Primary thumbnail — product 6, also shown in related products strip |
| `suit-006-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 6 |



---

## 1.2 Men — Blazers

**Folder:** `public/assets/images/products/men/blazers/`

| File name | Used in component | Used in page | Purpose on screen |
|-----------|------------------|--------------|-------------------|
| `blazer-001-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail in product grid |
| `blazer-001-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Back or side view in detail gallery |
| `blazer-002-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail — product 2 |
| `blazer-002-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 2 |
| `blazer-003-a.webp` | `ProductCard.jsx` | `FeaturedProducts.jsx` | Shown in "New Arrivals" section on homepage if marked `isNew: true` |
| `blazer-003-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 3 |
| `blazer-004-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 4 |
| `blazer-004-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 4 |
| `blazer-005-a.webp` | `ProductCard.jsx` | `BestSellers.jsx` | Shown in horizontal "Best Sellers" scroll on homepage if marked `isFeatured: true` |
| `blazer-005-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 5 |
| `blazer-006-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 6 |
| `blazer-006-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 6 |


## 1.3 Men — Dress Shirts

**Folder:** `public/assets/images/products/men/dress-shirts/`

| File name | Used in component | Used in page | Purpose on screen |
|-----------|------------------|--------------|-------------------|
| `shirt-001-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail in grid |
| `shirt-001-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Collar or cuff detail close-up |
| `shirt-002-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 2 |
| `shirt-002-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 2 |
| `shirt-003-a.webp` | `ProductCard.jsx` | `FeaturedProducts.jsx` | New arrival card on homepage |
| `shirt-003-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 3 |
| `shirt-004-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 4 |
| `shirt-004-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 4 |
| `shirt-005-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 5 |
| `shirt-005-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 5 |
| `shirt-006-a.webp` | `ProductCard.jsx` | `RelatedProducts.jsx` | Shown in related products for other men formal items |
| `shirt-006-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 6 |


## 1.4 Men — Outdoor Jackets

**Folder:** `public/assets/images/products/men/jackets/`

| File name | Used in component | Used in page | Purpose on screen |
|-----------|------------------|--------------|-------------------|
| `jacket-001-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail in outdoor category grid |
| `jacket-001-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Back view or pocket detail |
| `jacket-002-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 2 |
| `jacket-002-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 2 |
| `jacket-003-a.webp` | `ProductCard.jsx` | `FeaturedProducts.jsx` | Homepage new arrivals card |
| `jacket-003-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 3 |
| `jacket-004-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 4 |
| `jacket-004-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 4 |
| `jacket-005-a.webp` | `ProductCard.jsx` | `BestSellers.jsx` | Homepage best sellers horizontal scroll |
| `jacket-005-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 5 |
| `jacket-006-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 6 |
| `jacket-006-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 6 |




## 1.5 Men — Cargo & Chino Pants

**Folder:** `public/assets/images/products/men/cargo-pants/`

| File name | Used in component | Used in page | Purpose on screen |
|-----------|------------------|--------------|-------------------|
| `cargo-001-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail in grid |
| `cargo-001-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Side pocket or waistband detail |
| `cargo-002-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 2 |
| `cargo-002-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 2 |
| `cargo-003-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 3 |
| `cargo-003-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 3 |
| `cargo-004-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 4 |
| `cargo-004-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 4 |
| `cargo-005-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 5 |
| `cargo-005-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 5 |
| `cargo-006-a.webp` | `ProductCard.jsx` | `RelatedProducts.jsx` | Related products for other men outdoor items |
| `cargo-006-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 6 |



## 1.6 Men — Hoodies & Sweatshirts

**Folder:** `public/assets/images/products/men/hoodies/`

| File name | Used in component | Used in page | Purpose on screen |
|-----------|------------------|--------------|-------------------|
| `hoodie-001-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail in outdoor category |
| `hoodie-001-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Hood detail or back view |
| `hoodie-002-a.webp` | `ProductCard.jsx` | `FeaturedProducts.jsx` | New arrivals section on homepage |
| `hoodie-002-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 2 |
| `hoodie-003-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 3 |
| `hoodie-003-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 3 |
| `hoodie-004-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 4 |
| `hoodie-004-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 4 |
| `hoodie-005-a.webp` | `ProductCard.jsx` | `BestSellers.jsx` | Best sellers horizontal scroll |
| `hoodie-005-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 5 |
| `hoodie-006-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 6 |
| `hoodie-006-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 6 |



## 1.7 Women — Formal Kurtas

**Folder:** `public/assets/images/products/women/formal-kurtas/`

| File name | Used in component | Used in page | Purpose on screen |
|-----------|------------------|--------------|-------------------|
| `fkurta-001-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail in women formal grid |
| `fkurta-001-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Full-length or neckline detail |
| `fkurta-002-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 2 |
| `fkurta-002-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 2 |
| `fkurta-003-a.webp` | `ProductCard.jsx` | `FeaturedProducts.jsx` | Featured on homepage new arrivals |
| `fkurta-003-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 3 |
| `fkurta-004-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 4 |
| `fkurta-004-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 4 |
| `fkurta-005-a.webp` | `ProductCard.jsx` | `BestSellers.jsx` | Best sellers section |
| `fkurta-005-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 5 |
| `fkurta-006-a.webp` | `ProductCard.jsx` | `RelatedProducts.jsx` | Related products for women formal category |
| `fkurta-006-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 6 |



## 1.8 Women — Blazers

**Folder:** `public/assets/images/products/women/blazers/`

| File name | Used in component | Used in page | Purpose on screen |
|-----------|------------------|--------------|-------------------|
| `wblazer-001-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail in women formal grid |
| `wblazer-001-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Lapel or button detail shot |
| `wblazer-002-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 2 |
| `wblazer-002-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 2 |
| `wblazer-003-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 3 |
| `wblazer-003-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 3 |
| `wblazer-004-a.webp` | `ProductCard.jsx` | `FeaturedProducts.jsx` | New arrivals section |
| `wblazer-004-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 4 |
| `wblazer-005-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 5 |
| `wblazer-005-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 5 |
| `wblazer-006-a.webp` | `ProductCard.jsx` | `BestSellers.jsx` | Best sellers scroll |
| `wblazer-006-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 6 |



## 1.9 Women — Formal Dresses

**Folder:** `public/assets/images/products/women/formal-dresses/`

| File name | Used in component | Used in page | Purpose on screen |
|-----------|------------------|--------------|-------------------|
| `dress-001-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail in formal category |
| `dress-001-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Back zipper or fabric texture shot |
| `dress-002-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 2 |
| `dress-002-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 2 |
| `dress-003-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 3 |
| `dress-003-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 3 |
| `dress-004-a.webp` | `ProductCard.jsx` | `FeaturedProducts.jsx` | Featured new arrival on homepage |
| `dress-004-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 4 |
| `dress-005-a.webp` | `ProductCard.jsx` | `BestSellers.jsx` | Best sellers horizontal scroll |
| `dress-005-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 5 |
| `dress-006-a.webp` | `ProductCard.jsx` | `RelatedProducts.jsx` | Related products strip |
| `dress-006-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 6 |



## 1.10 Women — Windcheaters

**Folder:** `public/assets/images/products/women/windcheaters/`

| File name | Used in component | Used in page | Purpose on screen |
|-----------|------------------|--------------|-------------------|
| `wcheat-001-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail in outdoor women grid |
| `wcheat-001-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Hood up or zipper detail |
| `wcheat-002-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 2 |
| `wcheat-002-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 2 |
| `wcheat-003-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 3 |
| `wcheat-003-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 3 |
| `wcheat-004-a.webp` | `ProductCard.jsx` | `FeaturedProducts.jsx` | New arrivals card on homepage |
| `wcheat-004-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 4 |
| `wcheat-005-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 5 |
| `wcheat-005-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 5 |
| `wcheat-006-a.webp` | `ProductCard.jsx` | `BestSellers.jsx` | Best sellers strip |
| `wcheat-006-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 6 |



## 1.11 Women — Casual Kurtas

**Folder:** `public/assets/images/products/women/casual-kurtas/`

| File name | Used in component | Used in page | Purpose on screen |
|-----------|------------------|--------------|-------------------|
| `ckurta-001-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail in women outdoor grid |
| `ckurta-001-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Hem or print detail shot |
| `ckurta-002-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 2 |
| `ckurta-002-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 2 |
| `ckurta-003-a.webp` | `ProductCard.jsx` | `FeaturedProducts.jsx` | New arrivals on homepage |
| `ckurta-003-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 3 |
| `ckurta-004-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 4 |
| `ckurta-004-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 4 |
| `ckurta-005-a.webp` | `ProductCard.jsx` | `BestSellers.jsx` | Best sellers horizontal scroll |
| `ckurta-005-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 5 |
| `ckurta-006-a.webp` | `ProductCard.jsx` | `RelatedProducts.jsx` | Related products for women outdoor |
| `ckurta-006-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 6 |



## 1.12 Women — Track Pants & Joggers

**Folder:** `public/assets/images/products/women/track-pants/`

| File name | Used in component | Used in page | Purpose on screen |
|-----------|------------------|--------------|-------------------|
| `track-001-a.webp` | `ProductCard.jsx` | `ShopPage`, `CategoryPage` | Primary thumbnail in women outdoor grid |
| `track-001-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Elastic waistband or ankle detail |
| `track-002-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 2 |
| `track-002-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 2 |
| `track-003-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 3 |
| `track-003-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 3 |
| `track-004-a.webp` | `ProductCard.jsx` | `FeaturedProducts.jsx` | New arrivals card |
| `track-004-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 4 |
| `track-005-a.webp` | `ProductCard.jsx` | `BestSellers.jsx` | Best sellers scroll |
| `track-005-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 5 |
| `track-006-a.webp` | `ProductCard.jsx` | `ShopPage` | Primary thumbnail — product 6 |
| `track-006-b.webp` | `ProductImageGallery.jsx` | `ProductDetailPage` | Secondary view — product 6 |



---

# PART 2 — BANNER & UI IMAGES

All banner images live inside `public/assets/images/banners/`.
These are wide, lifestyle or editorial photographs used for large visual sections.

---

## 2.1 Hero Carousel Banners

**Folder:** `public/assets/images/banners/`
**Component:** `HeroBanner.jsx` (uses Swiper.js)
**Page:** `HomePage.jsx`
**Dimensions:** `1440 × 600 px`
**Format:** `.webp`
**Purpose:** These 4 images are the full-width rotating hero carousel at the very top of the homepage. They auto-play every 4 seconds. Each slide has an overlaid heading and CTA button on top of the image.

| File name | Slide number | Visual theme | Overlay text suggestion |
|-----------|-------------|--------------|------------------------|
| `hero-1.webp` | Slide 1 | Indian man in premium navy suit — office or corporate backdrop | "Dress for the boardroom" |
| `hero-2.webp` | Slide 2 | Indian woman in formal kurta set — clean or pastel background | "Formal, but make it you" |
| `hero-3.webp` | Slide 3 | Person in outdoor jacket — hill station or forest backdrop | "Built for the outdoors" |
| `hero-4.webp` | Slide 4 | Flat-lay of clothes + seasonal sale visual — warm, rich colors | "Season sale — up to 40% off" |



## 2.2 Category Card Images

**Folder:** `public/assets/images/banners/`
**Component:** `CategoryGrid.jsx`
**Page:** `HomePage.jsx`
**Dimensions:** `600 × 700 px`
**Format:** `.webp`
**Purpose:** These 4 images appear as tall portrait cards in the "Shop by Category" section on the homepage. Each card links to a category page. The image fills the card with a gradient overlay and category label at the bottom.

| File name | Category it represents | Visual description |
|-----------|----------------------|-------------------|
| `cat-men-formal.webp` | Men → Formal | Indian man in suit or blazer, preferably in an office or boardroom setting |
| `cat-men-outdoor.webp` | Men → Outdoor | Man in a windcheater or hoodie in a park, hill, or urban outdoor setting |
| `cat-women-formal.webp` | Women → Formal | Indian woman in formal kurta or blazer, office or minimal studio background |
| `cat-women-outdoor.webp` | Women → Outdoor | Woman in windcheater or joggers in a natural or outdoor setting |

**Best source:** [Unsplash.com](https://unsplash.com) — search per category | [Pexels.com](https://pexels.com)

---

## 2.3 Section Promo Banners

**Folder:** `public/assets/images/banners/`
**Dimensions:** `1200 × 400 px`
**Format:** `.webp`
**Purpose:** These are wide but shorter banners used between product sections on the homepage.

| File name | Component | Page | Purpose on screen |
|-----------|-----------|------|-------------------|
| `promo-new-arrivals.webp` | `FeaturedProducts.jsx` | `HomePage.jsx` | Background or header image for the "New Arrivals" section — flat-lay of freshly styled clothes on a marble or linen surface |
| `promo-bestsellers.webp` | `BestSellers.jsx` | `HomePage.jsx` | Background for the "Best Sellers" strip — clothing rack scene or editorial multi-product layout |
| `offer-strip.webp` | `OfferBanner.jsx` | `HomePage.jsx` | Full-width dark background banner in the middle of the homepage — "Free shipping on orders above ₹999" — can be a solid dark graphic made in Canva |

**Best source:** [Freepik.com](https://freepik.com) free section | [Canva.com](https://canva.com) free plan for the offer strip

---

## 2.4 Miscellaneous UI Images

**Folder:** `public/assets/images/banners/`
**Format:** `.webp`

| File name | Dimensions | Component | Page | Purpose on screen |
|-----------|-----------|-----------|------|-------------------|
| `about-india.webp` | 800 × 400 px | `Footer.jsx` | All pages | Small illustrative background image in the footer "Made in India" or "Ships across India" section. Can be an abstract fabric/textile texture or a soft India map illustration |
| `avatar-placeholder.webp` | 200 × 200 px | `ProfilePage.jsx`, `Navbar.jsx` | `ProfilePage` | Shown as the default user avatar in the profile page and in the navbar user dropdown when no real photo exists. A simple circular silhouette or abstract face works perfectly |
| `payment-badges.webp` | 400 × 60 px | `Footer.jsx` | All pages | A horizontal strip showing payment method logos — Visa, Mastercard, UPI, Paytm, Rupay. This is purely decorative. Shows users the site "accepts" these (even though checkout is fake) |

**Best source for avatar:** [UIAvatars.com](https://ui-avatars.com) — generates initials-based avatar, export as PNG then convert
**Best source for payment badges:** [Flaticon.com](https://flaticon.com) — download individual payment icons, combine in Canva

---

---

# PART 3 — SVG ILLUSTRATIONS

All SVG illustrations live inside `public/assets/illustrations/`.
These are vector graphics used for empty states, error pages, and decorative purposes.
SVGs are preferred over raster images here because they scale perfectly and are tiny in file size.

---

| File name | Folder | Component | Page | What the user sees | Dimensions | Best source |
|-----------|--------|-----------|------|-------------------|-----------|-------------|
| `empty-cart.svg` | `public/assets/illustrations/` | `CartDrawer.jsx`, `CartPage.jsx` | `CartPage` | Shown in the center of the cart drawer and cart page when the user has added 0 items to cart. Sits above the text "Your cart is empty" and a "Start Shopping" button | 300 × 300 px | [undraw.co](https://undraw.co) — search `"empty"` or `"shopping"` — set brand color before download |
| `empty-wishlist.svg` | `public/assets/illustrations/` | `WishlistPage.jsx` | `WishlistPage` | Shown when the user's wishlist has 0 saved items. Sits above the text "Nothing saved yet" and a "Browse Products" button | 300 × 300 px | [undraw.co](https://undraw.co) — search `"wishlist"` or `"favorites"` |
| `404-illustration.svg` | `public/assets/illustrations/` | `NotFoundPage.jsx` | `*` (any unmatched route) | Large centered illustration on the custom 404 page. Shown when user navigates to a route that doesn't exist. Sits above the text "Page not found" and a "Go Home" button | 400 × 320 px | [undraw.co](https://undraw.co) — search `"page not found"` or `"lost"` |
| `order-success.svg` | `public/assets/illustrations/` | `CheckoutPage.jsx` (step 3) | `CheckoutPage` | Shown on the final step of the fake checkout flow after the user clicks "Place Order". Celebration or success themed illustration above "Your order has been placed!" text | 300 × 280 px | [storyset.com](https://storyset.com) — search `"order success"` — download as SVG |
| `no-results.svg` | `public/assets/illustrations/` | `SearchResultsPage.jsx`, `ShopPage.jsx` | `SearchResultsPage`, `ShopPage` | Shown when Fuse.js returns an empty array for a search query, or when active filters produce zero matching products. Sits above "No results found. Try a different search." | 280 × 280 px | [undraw.co](https://undraw.co) — search `"search"` or `"not found"` |
| `loading-spinner.svg` | `public/assets/illustrations/` | `Skeleton.jsx`, `App.jsx` (Suspense fallback) | All pages | A small animated ring spinner shown while route-level React lazy components are loading via Suspense. Also used as fallback inside Skeleton.jsx | 48 × 48 px | [SVGRepo.com](https://svgrepo.com) — search `"spinner"` — pick a clean ring style with animation |
| `india-delivery.svg` | `public/assets/illustrations/` | `Footer.jsx`, `ProductDetailPage.jsx` | All pages, `ProductDetailPage` | Small icon shown near "Free delivery across India" text in the footer and near the size selector on the product detail page | 40 × 40 px | [Flaticon.com](https://flaticon.com) — search `"delivery india"` or `"truck india"` |
| `size-guide.svg` | `public/assets/illustrations/` | `SizeSelector.jsx` → opens `Modal.jsx` | `ProductDetailPage` | A body measurement diagram shown inside a modal when the user clicks "Size Guide" on the product page. Shows chest, waist, hip measurements mapped to XS–XXL | 500 × 400 px | [Freepik.com](https://freepik.com) free section — search `"size chart diagram"` — look for an SVG version |
| `hero-pattern-bg.svg` | `public/assets/illustrations/` | `HeroBanner.jsx` | `HomePage` | A very subtle geometric or fabric-weave SVG pattern used as an additional background layer behind the hero banner slides. Adds texture without being distracting — set opacity to 5–10% | Tileable / any size | [Heropatterns.com](https://heropatterns.com) — pick a subtle pattern, download SVG, set low opacity in CSS |

---

---

# PART 4 — LOGO FILES

Logo files live inside `src/assets/` because they are imported directly in JSX using ES module imports, not referenced via public URL paths.

**Folder:** `src/assets/`

| File name | Format | Used in component | Page | Purpose on screen | Dimensions | How to make |
|-----------|--------|------------------|------|-------------------|-----------|-------------|
| `logo.svg` | `.svg` | `Navbar.jsx`, `Footer.jsx` | All pages | The VastraHub brand logotype shown in the top-left of the sticky navigation bar and in the footer center. This is the dark/colored version — visible on white and light grey backgrounds | 160 × 40 px (wide wordmark) | [Canva.com](https://canva.com) free plan — use a fashion logo template, replace text with "VastraHub", export as SVG |
| `logo-dark.svg` | `.svg` | `Navbar.jsx` | All pages (dark mode) | Identical to `logo.svg` but with inverted/white text and strokes — used automatically when the ThemeContext switches to dark mode via a conditional class on the `<img>` tag | 160 × 40 px | Same Canva design — duplicate, change all dark colors to white, re-export as SVG |

**Implementation note in `Navbar.jsx`:**
```jsx
import { useTheme } from '../context/ThemeContext';
import logoDark from '../assets/logo-dark.svg';
import logoLight from '../assets/logo.svg';

const { theme } = useTheme();
<img src={theme === 'dark' ? logoDark : logoLight} alt="VastraHub" />
```

---

---

# PART 5 — MISC ROOT ASSETS

These files live directly inside the `public/` folder. They are not imported in JSX — the browser and search engines access them directly via URL.

**Folder:** `public/`

| File name | Format | Where it appears | Purpose | Dimensions | How to make |
|-----------|--------|-----------------|---------|-----------|-------------|
| `favicon.ico` | `.ico` | Browser tab, bookmarks | The small icon that appears in the browser tab beside the page title. Also used when a user bookmarks the site. Should be a simplified version of the logo mark — just the icon, not the wordmark | 32 × 32 px | [Favicon.io](https://favicon.io/favicon-generator/) — type "V" or your logo initial, pick a fashion-appropriate color, download the `.ico` file |
| `favicon-192.png` | `.png` | Android home screen | Used when a mobile user adds the website to their Android home screen as a PWA shortcut. Referenced in `public/manifest.json` | 192 × 192 px | [Favicon.io](https://favicon.io) generates this automatically alongside the `.ico` — download the full package |
| `og-image.jpg` | `.jpg` | WhatsApp link preview, LinkedIn share, Twitter card | When someone shares the VastraHub URL on social media or messaging apps, this image is automatically shown as the preview thumbnail. Should show the brand logo + a product or fashion image on a clean background | 1200 × 630 px | [Canva.com](https://canva.com) free — use the "Social Media" template, add logo + product image + brand colors, export as JPG |
| `robots.txt` | `.txt` | Search engine crawlers | Tells Google and other search bots which pages to crawl. For this project, allow everything. Content is just 2 lines: `User-agent: *` and `Allow: /` | N/A — text file | Create manually in any text editor |

**How to link `og-image.jpg` in `public/index.html`:**
```html
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:title" content="VastraHub — Formal & Outdoor Wear for Men & Women" />
<meta property="og:description" content="Premium formal and outdoor clothing for men and women across India." />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="/og-image.jpg" />
```

---

---

# PART 6 — ICONS

## No icon files needed

All icons in VastraHub are provided by the `react-icons` npm package. This library ships over 10,000 icons from dozens of popular icon sets, all as React components. They are tree-shaken automatically by Vite — only the icons you actually use are included in the final bundle.

**Install:**
```bash
npm install react-icons
```

**Usage in any component:**
```jsx
import { FiSearch, FiShoppingCart, FiHeart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { HiOutlineStar, HiFilter } from 'react-icons/hi';
import { BiLogoInstagram, BiLogoFacebook } from 'react-icons/bi';

// Use as a regular component — size and color are controlled by CSS
<FiSearch size={20} className="text-gray-600" />
```

---

## Icon usage map by component

| Component | Icons used | Icon set |
|-----------|-----------|----------|
| `Navbar.jsx` | Search, ShoppingCart, Heart (wishlist), User (profile), Menu (hamburger), X (close mobile menu), Sun/Moon (theme toggle) | `react-icons/fi` (Feather) |
| `ProductCard.jsx` | Heart (wishlist toggle), ShoppingCart (add to cart quick action), Eye (quick view) | `react-icons/fi` |
| `ProductDetailPage.jsx` | Star (rating), ChevronLeft, ChevronRight (gallery nav), Share, ShoppingBag | `react-icons/hi` (Heroicons) |
| `CartDrawer.jsx` | X (close), Trash (remove item), Plus, Minus (quantity) | `react-icons/fi` |
| `ProductFilters.jsx` | ChevronDown (accordion toggle), Filter, X (clear filter) | `react-icons/fi` |
| `RatingStars.jsx` | Star (filled), StarOutline (empty) | `react-icons/hi` |
| `Footer.jsx` | Instagram, Facebook, Twitter/X, WhatsApp, Phone, MapPin | `react-icons/bi` (BoxIcons) + `react-icons/fi` |
| `ScrollToTop.jsx` | ChevronUp or ArrowUp | `react-icons/fi` |
| `Breadcrumb.jsx` | ChevronRight (separator) | `react-icons/fi` |
| `SearchBar.jsx` | Search, X (clear search) | `react-icons/fi` |
| `CheckoutPage.jsx` | CheckCircle (step complete), Lock (secure payment) | `react-icons/hi` |
| `ProfilePage.jsx` | User, Mail, MapPin, Edit | `react-icons/fi` |

---

---

# PART 7 — COMPLETE FOLDER TREE SUMMARY

```
public/
├── favicon.ico                          ← Browser tab icon
├── favicon-192.png                      ← Android shortcut icon
├── og-image.jpg                         ← Social media share preview
├── robots.txt                           ← SEO crawler instructions
│
└── assets/
    ├── images/
    │   ├── banners/
    │   │   ├── hero-1.webp              ← Hero slide 1 — Men formal
    │   │   ├── hero-2.webp              ← Hero slide 2 — Women formal
    │   │   ├── hero-3.webp              ← Hero slide 3 — Outdoor
    │   │   ├── hero-4.webp              ← Hero slide 4 — Sale
    │   │   ├── cat-men-formal.webp      ← Category card image
    │   │   ├── cat-men-outdoor.webp     ← Category card image
    │   │   ├── cat-women-formal.webp    ← Category card image
    │   │   ├── cat-women-outdoor.webp   ← Category card image
    │   │   ├── promo-new-arrivals.webp  ← New Arrivals section bg
    │   │   ├── promo-bestsellers.webp   ← Best Sellers section bg
    │   │   ├── offer-strip.webp         ← Mid-page offer banner
    │   │   ├── about-india.webp         ← Footer decorative image
    │   │   ├── avatar-placeholder.webp  ← Default user avatar
    │   │   └── payment-badges.webp      ← Payment logos strip
    │   │
    │   └── products/
    │       ├── men/
    │       │   ├── suits/               ← 12 images (suit-001-a to suit-006-b)
    │       │   ├── blazers/             ← 12 images
    │       │   ├── dress-shirts/        ← 12 images
    │       │   ├── jackets/             ← 12 images
    │       │   ├── cargo-pants/         ← 12 images
    │       │   └── hoodies/             ← 12 images
    │       │
    │       └── women/
    │           ├── formal-kurtas/       ← 12 images
    │           ├── blazers/             ← 12 images
    │           ├── formal-dresses/      ← 12 images
    │           ├── windcheaters/        ← 12 images
    │           ├── casual-kurtas/       ← 12 images
    │           └── track-pants/         ← 12 images
    │
    └── illustrations/
        ├── empty-cart.svg               ← Empty cart state
        ├── empty-wishlist.svg           ← Empty wishlist state
        ├── 404-illustration.svg         ← 404 page
        ├── order-success.svg            ← Checkout success
        ├── no-results.svg               ← Empty search / filter
        ├── loading-spinner.svg          ← Suspense fallback
        ├── india-delivery.svg           ← Footer + product page icon
        ├── size-guide.svg               ← Size modal diagram
        └── hero-pattern-bg.svg          ← Hero section texture

src/
└── assets/
    ├── logo.svg                         ← Brand logo (light mode)
    └── logo-dark.svg                    ← Brand logo (dark mode)
```

---

# PART 8 — IMAGE COMPRESSION WORKFLOW

Before committing any image to the repository, run it through this workflow. GitHub Pages has no CDN and your page load speed directly affects the impression you make on recruiters.

**Step 1 — Convert and compress all WebP images:**
Go to [Squoosh.app](https://squoosh.app), drag your JPG/PNG into it, select `WebP` as the output format, set quality to `78`, and download. Repeat for each product image. Target file size: 40–80 KB per product image.

**Step 2 — Verify SVGs are clean:**
Open each SVG in VS Code and check that there are no embedded raster images, no `<script>` tags, and no excessive path data. SVGs from undraw.co are already clean. SVGs from Freepik may contain bloat — run them through [SVGOMG](https://jakearchibald.github.io/svgomg/) to compress.

**Step 3 — Check banner images:**
Hero banners at 1440×600 should be under 150 KB each after WebP conversion at 75% quality. Category cards should be under 80 KB each.

**Step 4 — Add explicit width and height to all `<img>` tags:**
This prevents Cumulative Layout Shift (CLS) which hurts Lighthouse scores. Even with lazy loading, setting dimensions reserves space so the page doesn't jump when images load.

```jsx
<img
  src={product.images[0]}
  alt={product.name}
  width={800}
  height={1000}
  loading="lazy"
/>
```

---

*VastraHub Assets Guide — maintained alongside the project source code*
*Total asset count: 173 files | Last updated: project setup phase*