import SocialCard from '../components/SocialCard.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const INSTAGRAM_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TIKTOK_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V8.55a8.16 8.16 0 004.77 1.52V6.65a4.85 4.85 0 01-1.84-.04z" />
  </svg>
);

const Social = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      ref={ref}
      id="redes"
      className={`reveal relative pt-10 md:pt-16 pb-20 md:pb-32 overflow-hidden ${isVisible ? 'is-visible' : ''}`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(255,102,0,0.12), transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container border border-white/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
            Conecta con nosotros
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Síguenos en nuestras{' '}
            <span className="text-gradient-orange">Redes</span>
          </h2>
          <p className="text-text-medium text-lg leading-relaxed">
            Descubre nuestro día a día, tips de diseño y desarrollo, y entérate
            antes que nadie de los nuevos proyectos que estamos lanzando para
            nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <SocialCard
            name="Instagram"
            description="Síguenos para ver tips de diseño web, lanzamientos de proyectos y escríbenos al DM para agendar tu demo."
            ctaLabel="Enviar Mensaje en Instagram"
            href="https://www.instagram.com/best.devfreelance?utm_source=qr&igsh=YTF3OWxsc296dmJz"
            icon={INSTAGRAM_ICON}
          />
          <SocialCard
            name="TikTok"
            description="Mira nuestro proceso de programación en el día a día, el antes y después de nuestros clientes, y contáctanos por mensaje."
            ctaLabel="Hablar por TikTok"
            href="https://www.tiktok.com/@best.dev_freelance?_r=1&_t=ZS-96gcDfDaOBx"
            icon={TIKTOK_ICON}
          />
        </div>
      </div>
    </section>
  );
};

export default Social;
