import Button from '../components/Button.jsx';
import heroMockup from '../assets/mockups/img_hero_section.png';

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center overflow-hidden pt-2"
  >
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{
        background:
          'radial-gradient(circle at 20% 20%, rgba(255,102,0,0.15), transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,140,66,0.1), transparent 50%)',
      }}
    />
    <div
      className="absolute inset-0 pointer-events-none opacity-30"
      aria-hidden="true"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,102,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,0.08) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
      }}
    />

    <div className="relative max-w-7xl mx-auto px-6 pt-4 pb-20 md:pt-6 md:pb-32 grid md:grid-cols-2 gap-12 items-center w-full">
      <div className="flex flex-col gap-6 text-center md:text-left">
        <span className="inline-flex items-center gap-2 self-center md:self-start px-4 py-1.5 rounded-full bg-surface-container border border-white/10 text-text-medium text-xs font-semibold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
          Demo gratuita disponible
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
          ¡Impulsa tu Marca con una{' '}
          <span className="text-gradient-orange">Landing Page</span> Profesional!
        </h1>

        <p className="text-base md:text-lg text-text-medium leading-relaxed max-w-xl mx-auto md:mx-0">
          Creamos páginas web modernas, ultra rápidas y optimizadas para móviles
          para que conviertas visitantes en clientes reales.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-2">
          <Button href="#contacto" size="lg">
            Solicita tu página aquí
          </Button>
          <Button href="#pricing" variant="secondary" size="lg">
            Conoce nuestros planes
          </Button>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div
          className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(circle, rgba(255,102,0,0.3), transparent 60%)',
            filter: 'blur(40px)',
          }}
        />

        <img
          src={heroMockup}
          alt="Mockup 3D de una laptop y un smartphone mostrando una landing page profesional en funcionamiento"
          className="relative z-10 w-full max-w-xl h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          width="1400"
          height="1050"
          loading="eager"
        />
      </div>
    </div>
  </section>
);

export default Hero;
