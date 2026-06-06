import logo from '../assets/logo/logo.png';

const SPECIALTIES = [
  { label: 'Full Stack', icon: '⟨/⟩' },
  { label: 'UI / UX', icon: '◐' },
  { label: 'IA & Automatizaciones', icon: '✦' },
];

const About = () => (
  <section
    id="nosotros"
    className="relative py-20 md:py-32 overflow-hidden"
  >
    <div
      className="absolute inset-0 pointer-events-none opacity-60"
      aria-hidden="true"
      style={{
        background:
          'radial-gradient(circle at 80% 50%, rgba(255,102,0,0.1), transparent 50%)',
      }}
    />

    <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container border border-white/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
          Sobre Nosotros
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          El Equipo Detrás de{' '}
          <span className="text-gradient-orange">Beasts.dev</span>
        </h2>
        <p className="text-text-medium text-lg leading-relaxed mb-6">
          Somos un equipo multidisciplinario de desarrolladores y diseñadores
          freelance apasionados por llevar los negocios al entorno digital.
          Combinamos la ingeniería de software con el diseño de vanguardia para
          crear herramientas que no solo se vean bien, sino que vendan las
          24 horas del día.
        </p>
        <p className="text-text-medium text-lg leading-relaxed mb-8">
          Nos tomamos en serio tu crecimiento: por eso ofrecemos soporte los
          7 días de la semana y una metodología transparente basada en
          resultados tangibles.
        </p>

        <div className="flex flex-wrap gap-3">
          {SPECIALTIES.map((specialty) => (
            <div
              key={specialty.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-white/10 hover:border-brand-primary transition-all duration-300"
            >
              <span className="text-brand-primary font-bold" aria-hidden="true">
                {specialty.icon}
              </span>
              <span className="text-white text-sm font-semibold">
                {specialty.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div
          className="absolute w-80 h-80 rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(circle, rgba(255,102,0,0.25), transparent 60%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="relative w-full max-w-xl flex flex-col items-center group">
          <img
            src={logo}
            alt="Logo de las Tres Bestias — Lobo, Zorro y Dálmata"
            className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(255,102,0,0.45)] transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_0_70px_rgba(255,102,0,0.7)] group-hover:brightness-110"
            width="512"
            height="512"
          />
          <p className="text-center mt-6 text-text-medium text-sm tracking-wider uppercase transition-colors duration-300 group-hover:text-brand-primary">
            Lobo · Zorro · Dálmata
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
