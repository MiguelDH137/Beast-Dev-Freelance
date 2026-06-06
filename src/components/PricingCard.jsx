import MagneticButton from './MagneticButton.jsx';

const PricingCard = ({ name, price, features, popular = false, badge }) => (
  <div
    className={`relative bg-surface-container rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 hover:scale-[1.02] ${
      popular
        ? 'border-2 border-brand-primary shadow-[0_0_40px_rgba(255,102,0,0.4)]'
        : 'border border-white/10'
    }`}
  >
    {badge && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 cta-gradient text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
        {badge}
      </span>
    )}

    <div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl md:text-5xl font-black text-white">€{price}</span>
        <span className="text-text-medium text-sm">/mes</span>
      </div>
    </div>

    <ul className="flex flex-col gap-3 flex-grow">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-3 text-text-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff6600"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="text-white/90">{feature}</span>
        </li>
      ))}
    </ul>

    <MagneticButton href="#contacto" size="md" className="w-full">
      Solicita el tuyo
    </MagneticButton>
  </div>
);

export default PricingCard;
