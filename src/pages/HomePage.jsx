// src/pages/HomePage.jsx
// Assembles all home section components and their connected images

import HeroBanner from '../components/home/HeroBanner';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import OfferBanner from '../components/home/OfferBanner';
import BestSellers from '../components/home/BestSellers';
import Testimonials from '../components/home/Testimonials';
import CouponPopup from '../components/home/CouponPopup';

export default function HomePage() {
  return (
    <main>
      <CouponPopup />
      {/* 1. Full-width hero carousel — hero-1 to hero-4.webp + hero-pattern-bg.svg */}
      <HeroBanner />

      {/* 2. Shop by Category — cat-men-formal, cat-men-outdoor, cat-women-formal, cat-women-outdoor .webp */}
      <CategoryGrid />

      {/* 3. New Arrivals — promo-new-arrivals.webp header + product images from allProducts (isNew: true) */}
      <FeaturedProducts />

      {/* 4. Mid-page offer strip — offer-strip.webp + india-delivery.svg */}
      <OfferBanner />

      {/* 5. Best Sellers horizontal scroll — promo-bestsellers.webp header + product images (isBestSeller: true) */}
      <BestSellers />

      {/* 6. Testimonial user reviews */}
      <Testimonials />
    </main>
  );
}
