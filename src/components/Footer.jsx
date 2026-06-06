import logo from '../assets/logo/logo.png';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const FOOTER_LINKS = [
  { href: '#hero', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const [ref, isVisible] = useScrollReveal();

  return (
    <footer
      ref={ref}
      className={`reveal border-t border-white/5 bg-surface-base ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Beasts.dev Freelance"
            className="w-14 h-14 object-contain transition-all duration-500 ease-out hover:scale-125 hover:-rotate-6 hover:drop-shadow-[0_0_25px_rgba(255,102,0,0.7)] hover:brightness-110"
            width="56"
            height="56"
          />
          <span className="font-black text-white tracking-tight">
            Beasts<span className="text-brand-primary">.dev</span> Freelance
          </span>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <ul className="flex items-center gap-6 text-sm text-text-medium">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-text-medium">
          © {year} Beasts.dev Freelance. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
