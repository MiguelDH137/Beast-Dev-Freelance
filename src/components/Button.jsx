const Button = ({
  children,
  href = '#',
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  ariaLabel,
  external = false,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-bold text-white transition-all duration-300 rounded-full whitespace-nowrap';

  const variants = {
    primary:
      'cta-gradient hover:scale-105 hover:shadow-[0_0_20px_rgba(255,102,0,0.5)]',
    secondary:
      'bg-surface-container border border-white/10 text-white hover:border-brand-primary hover:scale-105',
    ghost:
      'bg-transparent text-white hover:text-brand-primary-light',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (external || href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </a>
  );
};

export default Button;
