const PortfolioCard = ({ title, category, description, gradient = 'from-orange-500/20 to-orange-700/10' }) => (
  <a
    href="#contacto"
    className="group block relative bg-surface-container rounded-2xl overflow-hidden border border-white/10 hover:border-brand-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,102,0,0.3)]"
  >
    <div
      className={`aspect-video bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,102,0,0.25),transparent_60%)]" />
      <div className="relative z-10 w-3/4 h-3/4 rounded-lg bg-surface-base/80 border border-white/10 flex items-center justify-center">
        <span className="text-text-medium text-sm font-medium tracking-wider uppercase">
          {category}
        </span>
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-primary-light transition-colors">
        {title}
      </h3>
      <p className="text-text-medium text-sm leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Ver Demo en Vivo
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </div>
  </a>
);

export default PortfolioCard;
