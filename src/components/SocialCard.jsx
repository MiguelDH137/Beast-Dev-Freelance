const SocialCard = ({ name, description, ctaLabel, href, icon, accent = 'hover:shadow-[0_0_30px_rgba(255,102,0,0.4)]' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group block bg-surface-container border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:border-brand-primary ${accent}`}
  >
    <div
      className="w-16 h-16 rounded-2xl cta-gradient flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
      aria-hidden="true"
    >
      {icon}
    </div>

    <h3 className="text-2xl font-black text-white mb-3">{name}</h3>
    <p className="text-text-medium leading-relaxed mb-6">{description}</p>

    <span className="inline-flex items-center gap-2 text-brand-primary font-bold">
      {ctaLabel}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
        aria-hidden="true"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
      <span className="sr-only">(se abre en una pestaña nueva)</span>
    </span>
  </a>
);

export default SocialCard;
