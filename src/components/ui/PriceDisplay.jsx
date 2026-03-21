import React from 'react';

export default function PriceDisplay({ price, mrp, className = '', size = 'md' }) {
  const hasDiscount = mrp && mrp > price;
  const discountPct = hasDiscount ? Math.round(((mrp - price) / mrp) * 100) : 0;

  const sizes = {
    sm: { price: 'text-sm', mrp: 'text-xs', pct: 'text-[10px]' },
    md: { price: 'text-base', mrp: 'text-xs', pct: 'text-xs' },
    lg: { price: 'text-xl', mrp: 'text-sm', pct: 'text-sm' },
    xl: { price: 'text-2xl', mrp: 'text-base', pct: 'text-sm' },
  };

  const s = sizes[size] || sizes.md;

  return (
    <div className={`flex items-baseline flex-wrap gap-2 ${className}`}>
      <span className={`font-bold ${s.price}`} style={{ color: 'var(--color-text)' }}>
        ₹{Number(price).toLocaleString('en-IN')}
      </span>
      
      {hasDiscount && (
        <>
          <span className={`line-through opacity-60 font-medium ${s.mrp}`} style={{ color: 'var(--color-text-muted)' }}>
            ₹{Number(mrp).toLocaleString('en-IN')}
          </span>
          <span className={`font-bold text-green-600 dark:text-green-500 ${s.pct}`}>
            ({discountPct}% OFF)
          </span>
        </>
      )}
    </div>
  );
}
