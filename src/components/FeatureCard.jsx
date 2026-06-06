import { memo } from 'react';

const FeatureCard = memo(function FeatureCard({ icon, title, description, isExpanded, index, onToggle }) {
  const wrapperStyles = isExpanded
    ? 'border-brand-primary shadow-[0_0_30px_rgba(255,102,0,0.4)] scale-[1.03]'
    : 'border-white/10 hover:border-brand-primary hover:shadow-[0_0_20px_rgba(255,102,0,0.25)] hover:scale-[1.02]';

  return (
    <div
      className={`rounded-xl bg-surface-container border transition-all duration-300 ${wrapperStyles}`}
    >
      <button
        type="button"
        onClick={() => onToggle(index)}
        className="w-full flex flex-col items-center text-center gap-3 p-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-xl"
        aria-expanded={isExpanded}
        aria-controls={`feature-panel-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <div
          className={`w-12 h-12 rounded-lg cta-gradient flex items-center justify-center text-white transition-all duration-300 ${
            isExpanded ? 'shadow-[0_0_20px_rgba(255,102,0,0.6)]' : ''
          }`}
          style={{ boxShadow: '0 0 12px rgba(255,102,0,0.3)' }}
          aria-hidden="true"
        >
          {icon}
        </div>

        <div className="flex items-center gap-2">
          <p className="text-sm md:text-base font-semibold text-white">{title}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
            className={`w-4 h-4 text-brand-primary transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : 'rotate-0'
            }`}
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      <div
        id={`feature-panel-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
        aria-hidden={!isExpanded}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 pt-1 text-sm text-text-medium leading-relaxed text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
});

export default FeatureCard;
