import { motion } from 'motion/react';
import PricingCard from '../components/PricingCard.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const PLANS = [
  {
    name: 'Esencial',
    price: 25,
    features: [
      'Single Landing Page',
      'Mobile Optimized',
      'Basic SEO',
      'Diseño Moderno',
      'Mensualidades cómodas',
    ],
  },
  {
    name: 'Profesional',
    price: 35,
    popular: true,
    badge: 'Most Popular',
    features: [
      'Multi-page Sitio',
      'Advanced SEO tactics',
      'CMS Integration',
      'Priority Support',
      'Dominio Profesional incluido',
      'Ideal para marcas en crecimiento',
    ],
  },
  {
    name: 'Pro + IA',
    price: 55,
    features: [
      'Everything in Pro',
      'AI Chatbot Integration',
      'Dynamic Conversion',
      'Chatbot con Inteligencia Artificial',
      'Análisis y optimización continua',
    ],
  },
];

const Pricing = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      ref={ref}
      id="pricing"
      className={`reveal relative pt-10 md:pt-16 pb-20 md:pb-32 bg-gradient-to-b from-surface-base to-surface-container/40 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container border border-white/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
            Planes de Rendimiento
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Elige el nivel de <span className="text-gradient-orange">potencia</span> que tu marca necesita
          </h2>
          <p className="text-text-medium text-lg leading-relaxed">
            Suscripciones mensuales sin permanencia. Cancela cuando quieras y escala
            tu plan en cualquier momento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
            >
              <motion.div
                whileInView={
                  plan.popular
                    ? { scale: [0.95, 1.02, 1] }
                    : { scale: 1 }
                }
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, times: [0, 0.6, 1], ease: 'easeOut' }}
              >
                <PricingCard {...plan} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
