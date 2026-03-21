import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            Loved by Thousands
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: 'var(--color-text-muted)' }}>
            See what our customers have to say about their VastraHub experience. We pride ourselves on delivering premium quality and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}
            >
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
              </div>
              <p className="text-sm leading-relaxed mb-8 italic" style={{ color: 'var(--color-text-secondary)' }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={t.avatar} 
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border"
                  style={{ borderColor: 'var(--color-border)' }} 
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
