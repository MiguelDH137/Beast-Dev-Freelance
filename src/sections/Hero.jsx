import Button from '../components/Button.jsx';

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center overflow-hidden pt-6"
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

    <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-20 md:pt-12 md:pb-32 grid md:grid-cols-2 gap-12 items-center w-full">
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
          className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(circle, rgba(255,102,0,0.25), transparent 60%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="relative w-full max-w-lg">
          <div className="relative bg-surface-container border border-white/10 rounded-2xl p-3 shadow-2xl glow-orange-soft transform md:rotate-[-2deg]">
            <div className="aspect-video bg-surface-base rounded-lg flex items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-40"
                aria-hidden="true"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,102,0,0.2), transparent 60%)',
                }}
              />
              <div className="relative z-10 text-center px-6">
                <p className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-2">
                  Tu próxima web
                </p>
                <p className="text-white font-black text-lg">Convierte. Vende. Crece.</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-4 md:right-8 w-32 md:w-40 bg-surface-container border border-white/10 rounded-2xl p-2 shadow-2xl transform rotate-[6deg]">
            <div className="aspect-[9/16] bg-surface-base rounded-lg flex items-center justify-center">
              <div
                className="w-12 h-12 rounded-full cta-gradient"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
