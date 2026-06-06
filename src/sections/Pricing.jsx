import PricingCard from '../components/PricingCard.jsx';

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

const Pricing = () => (
  <section
    id="pricing"
    className="relative pt-10 md:pt-16 pb-20 md:pb-32 bg-gradient-to-b from-surface-base to-surface-container/40"
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
        {PLANS.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
