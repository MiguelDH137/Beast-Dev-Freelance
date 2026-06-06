const FeatureCard = ({ icon, title }) => (
  <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-surface-container border border-white/10 hover:border-brand-primary transition-all duration-300">
    <div
      className="w-12 h-12 rounded-lg cta-gradient flex items-center justify-center text-white"
      style={{ boxShadow: '0 0 12px rgba(255,102,0,0.3)' }}
      aria-hidden="true"
    >
      {icon}
    </div>
    <p className="text-sm md:text-base font-semibold text-white">{title}</p>
  </div>
);

export default FeatureCard;
