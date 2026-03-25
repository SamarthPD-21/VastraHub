import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import allProducts from '../data/allProducts';
import ProductGrid from '../components/product/ProductGrid';
import ProductSortBar from '../components/product/ProductSortBar';
import ProductFilters from '../components/product/ProductFilters';
import Sidebar from '../components/layout/Sidebar';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { SORT_OPTIONS } from '../constants/sortOptions';

export default function ShopPage() {
  const [params] = useSearchParams();
  const genderParam = params.get('gender') ?? '';
  const typeParam = params.get('type') ?? '';
  const categoryParam = params.get('category') ?? '';

  const isMobile = useMediaQuery('(max-width: 767px)');

  const [sort, setSort] = useState(SORT_OPTIONS[0].value);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = isMobile ? 6 : 8; // 8 items on desktop/monitor

  // Sync url params visually to the local sidebar arrays
  useEffect(() => {
    if (genderParam) setSelectedGenders([genderParam]);
    if (categoryParam) setSelectedCategories([categoryParam]);
    setCurrentPage(1);
  }, [genderParam, categoryParam]);

  // Reset page on filter or sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedGenders, selectedCategories, maxPrice, sort, typeParam]);

  const filtered = useMemo(() => {
    let list = allProducts;

    if (selectedGenders.length > 0) {
      list = list.filter((p) => selectedGenders.includes(p.gender));
    } else if (genderParam) {
      list = list.filter((p) => p.gender === genderParam);
    }

    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.type));
    } else if (categoryParam) {
      list = list.filter((p) => p.type === categoryParam);
    }

    if (typeParam) {
      list = list.filter((p) => p.type === typeParam);
    }

    list = list.filter((p) => p.price <= maxPrice);

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [genderParam, typeParam, categoryParam, selectedGenders, selectedCategories, maxPrice, sort]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage, itemsPerPage]);

  const heading = genderParam
    ? `${genderParam.charAt(0).toUpperCase() + genderParam.slice(1)}${typeParam ? ` — ${typeParam.charAt(0).toUpperCase() + typeParam.slice(1)}` : ''}`
    : 'All Products';

  return (
    <main className="container py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Desktop: inline sticky sidebar */}
        {!isMobile && isFilterOpen && (
          <aside className="w-64 shrink-0 sticky top-24 z-20 hidden lg:block">
            <ProductFilters
              selectedGenders={selectedGenders}
              setSelectedGenders={setSelectedGenders}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              onApply={() => setIsFilterOpen(false)}
            />
          </aside>
        )}

        {/* Mobile: slide-up drawer via Sidebar component */}
        {isMobile && (
          <Sidebar
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            selectedGenders={selectedGenders}
            setSelectedGenders={setSelectedGenders}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
        )}

        {/* Main Content Area */}
        <div className="flex-1 w-full min-w-0">
          <ProductSortBar
            count={filtered.length}
            sort={sort}
            setSort={setSort}
            heading={heading}
            isFilterOpen={isFilterOpen}
            onToggleFilters={() => setIsFilterOpen(!isFilterOpen)}
          />

          <ProductGrid products={paginatedProducts} />

          {/* Pagination UI */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-12 pb-8">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="p-2.5 rounded-xl border transition-all hover:bg-[color:var(--color-bg-secondary)] disabled:opacity-30 disabled:cursor-not-allowed group"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
              >
                <FiChevronLeft size={20} className="transition-transform group-hover:-translate-x-0.5" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300
                      ${currentPage === page
                        ? 'bg-[color:var(--color-primary)] text-white shadow-md transform scale-110'
                        : 'border hover:bg-[color:var(--color-bg-secondary)] transform hover:scale-105'}
                    `}
                    style={{
                      borderColor: currentPage === page ? 'transparent' : 'var(--color-border)',
                      color: currentPage === page ? 'white' : 'var(--color-text)'
                    }}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="p-2.5 rounded-xl border transition-all hover:bg-[color:var(--color-bg-secondary)] disabled:opacity-30 disabled:cursor-not-allowed group"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
              >
                <FiChevronRight size={20} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
