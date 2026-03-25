// src/components/search/SearchDropdown.jsx
import { useNavigate } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';
import { useSearchContext } from '../../context/SearchContext';

export default function SearchDropdown({ onClose }) {
  const { query, results, closeSearch, highlightedIndex, setHighlightedIndex } = useSearchContext();
  const navigate = useNavigate();

  const handleClose = () => { closeSearch(); onClose?.(); };

  const handleResultClick = (product) => {
    navigate(`/product/${product.id}`);
    handleClose();
  };

  if (!query) return null;

  if (query.length >= 2 && results.length === 0) {
    return (
      <p className="py-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>
        No results for &ldquo;<strong>{query}</strong>&rdquo;
      </p>
    );
  }

  if (results.length === 0) return null;

  return (
    <ul className="mt-3 divide-y" style={{ borderColor: 'var(--color-border-light)' }}>
      {results.map((product, index) => {
        const isHighlighted = index === highlightedIndex;
        return (
          <li key={product.id}>
            <button
              onClick={() => handleResultClick(product)}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={`flex w-full items-center gap-3 py-2.5 px-3 -mx-3 rounded-lg text-left transition-all duration-200 
                ${isHighlighted ? 'bg-[color:var(--color-bg-secondary)] translate-x-1 opacity-100' : 'opacity-80 hover:opacity-100'}
              `}
            >
              <HiOutlineSearch 
                size={14} 
                className={`transition-colors ${isHighlighted ? 'text-[color:var(--color-primary)]' : 'text-[color:var(--color-text-muted)]'}`} 
              />
              <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                {product.name}
              </span>
              <span className="ml-auto text-xs capitalize" style={{ color: 'var(--color-text-muted)' }}>
                {product.gender} · {product.type}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
