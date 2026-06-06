import { useState } from 'react';
import Button from './Button.jsx';

const NAV_LINKS = [
  { href: '#hero', label: 'Inicio' },
  { href: '#pricing', label: 'Planes' },
  { href: '#portafolio', label: 'Proyectos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Redes' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-surface-base/70 backdrop-blur-xl border-b border-white/10">
      <nav aria-label="Navegación principal" className="max-w-7xl mx-auto px-6 py-[2.8px] flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 group"
          aria-label="Beasts.dev Freelance — Inicio"
        >
          <span className="font-black text-white text-xl tracking-tight transition-colors duration-300 group-hover:text-brand-primary">
            Beasts<span className="text-brand-primary group-hover:text-white">.dev</span>
          </span>
        </a>

        <div className="hidden md:flex items-center justify-end gap-6 flex-1 ml-8">
          <ul className="flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-text-medium hover:text-white transition-colors duration-300 font-medium text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contacto" size="sm">
            Solicita tu Demo
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-surface-base/95 backdrop-blur-xl">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-text-medium hover:text-white transition-colors font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button href="#contacto" size="sm" onClick={handleLinkClick}>
                Solicita tu Demo
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
