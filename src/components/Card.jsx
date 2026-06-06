const Card = ({ children, className = '', glow = false, popular = false }) => {
  const baseStyles =
    'bg-surface-container rounded-2xl p-6 md:p-8 transition-all duration-300';
  const borderStyles = popular
    ? 'border-2 border-brand-primary shadow-[0_0_40px_rgba(255,102,0,0.4)]'
    : 'border border-white/10';
  const hoverStyles = glow
    ? 'hover:border-brand-primary hover:shadow-[0_0_30px_rgba(255,102,0,0.3)]'
    : '';

  return (
    <div className={`${baseStyles} ${borderStyles} ${hoverStyles} ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Card;
