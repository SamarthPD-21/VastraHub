export default function SizeSelector({ sizes, selectedSize, onSelect }) {
  if (!sizes || sizes.length === 0) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>Select Size</p>
        <button className="text-xs font-bold transition-opacity hover:opacity-75" style={{ color: 'var(--color-primary)' }}>
          Size Guide
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((sz) => (
          <button
            key={sz}
            onClick={() => onSelect(sz)}
            className="h-10 rounded-lg px-4 text-sm font-bold transition-all active:scale-[0.98]"
            style={{ 
              border: selectedSize === sz ? '2px solid var(--color-primary)' : '1px solid var(--color-border)', 
              color: selectedSize === sz ? 'var(--color-primary)' : 'var(--color-text)', 
              background: 'var(--color-bg-card)' 
            }}
          >
            {sz}
          </button>
        ))}
      </div>
    </div>
  );
}
