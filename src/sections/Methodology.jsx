import Button from '../components/Button.jsx';

const STEPS = [
  {
    number: '01',
    title: 'Consulta',
    description:
      'Conversamos sobre tu negocio, objetivos y público. Entendemos qué necesitas antes de escribir una sola línea de código.',
  },
  {
    number: '02',
    title: 'Desarrollo',
    description:
      'Diseñamos y construimos tu landing con foco en conversión, velocidad y una experiencia impecable en cualquier dispositivo.',
  },
  {
    number: '03',
    title: 'Lanzamiento',
    description:
      'Publicamos tu web en un dominio profesional, configuramos SEO y te entregamos soporte los 7 días de la semana.',
  },
];

const Methodology = () => (
  <section
    id="metodologia"
    className="relative pt-20 md:pt-32 pb-10 md:pb-16 overflow-hidden"
  >
    <div
      className="absolute inset-0 pointer-events-none opacity-50"
      aria-hidden="true"
      style={{
        background:
          'radial-gradient(circle at 50% 0%, rgba(255,102,0,0.12), transparent 50%)',
      }}
    />

    <div className="relative max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container border border-white/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
          Nuestra metodología
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          Tu Web Primero,{' '}
          <span className="text-gradient-orange">Los Pagos Después.</span>
        </h2>
        <p className="text-text-medium text-lg leading-relaxed">
          Te preparamos una Demostración Gratuita de tu sitio web sin compromisos.
          Si te encanta cómo se ve y cómo funciona, eliges el plan que mejor se
          adapte a ti. Así de fácil.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
        {STEPS.map((step, index) => (
          <div
            key={step.number}
            className="relative bg-surface-container border border-white/10 rounded-2xl p-8 hover:border-brand-primary transition-all duration-300"
          >
            <div className="text-6xl md:text-7xl font-black text-gradient-orange mb-4 leading-none">
              {step.number}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-text-medium leading-relaxed">{step.description}</p>

            {index < STEPS.length - 1 && (
              <div
                className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-brand-primary to-transparent"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button href="#contacto" size="lg">
          Quiero ver mi propuesta gratis
        </Button>
      </div>
    </div>
  </section>
);

export default Methodology;
