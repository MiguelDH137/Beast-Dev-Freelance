const PortfolioCard = ({ title, category, description, image, href }) => {
  const isExternal = href && /^https?:\/\//.test(href);
  const linkProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      href={href || '#contacto'}
      {...linkProps}
      className="group block relative bg-surface-container rounded-2xl overflow-hidden border border-white/10 hover:border-brand-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,102,0,0.3)] hover:-translate-y-1"
    >
      <div className="aspect-video relative overflow-hidden bg-surface-base">
        <img
          src={image}
          alt={`Mockup del proyecto ${title}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-surface-base/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />
      </div>

      <div className="p-6">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">
          {category}
        </span>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-primary-light transition-colors">
          {title}
        </h3>
        <p className="text-text-medium text-sm leading-relaxed mb-4">{description}</p>
        <span className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Ver Demo en Vivo
          {isExternal ? (
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
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          ) : (
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
          )}
        </span>
      </div>
    </a>
  );
};

export default PortfolioCard;
