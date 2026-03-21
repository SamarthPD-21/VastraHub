import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { SearchProvider } from './context/SearchContext';
import Router from './router';
import allProducts from './data/allProducts';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            {/* allProducts passed so search typeahead works across all 144 product images */}
            <SearchProvider products={allProducts}>
              <Router />
              <Toaster
                position="bottom-right"
                toastOptions={{
                  duration: 2500,
                  style: {
                    fontFamily: 'var(--font-body)',
                    background: 'var(--color-bg-card)',
                    color: 'var(--color-text)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-md)',
                  },
                }}
              />
            </SearchProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
