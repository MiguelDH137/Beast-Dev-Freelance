import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import NumberFlow from '@number-flow/react';
import MagneticButton from '../components/MagneticButton.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const STEPS = [
  {
    value: 1,
    title: 'Consulta',
    description:
      'Conversamos sobre tu negocio, objetivos y público. Entendemos qué necesitas antes de escribir una sola línea de código.',
  },
  {
    value: 2,
    title: 'Desarrollo',
    description:
      'Diseñamos y construimos tu landing con foco en conversión, velocidad y una experiencia impecable en cualquier dispositivo.',
  },
  {
    value: 3,
    title: 'Lanzamiento',
    description:
      'Publicamos tu web en un dominio profesional, configuramos SEO y te entregamos soporte los 7 días de la semana.',
  },
];

const StepNumber = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div
      ref={ref}
      className="relative z-10 flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface-base border-2 border-brand-primary flex items-center justify-center shadow-[0_0_25px_rgba(255,102,0,0.35)]"
    >
      <span className="text-gradient-orange font-black text-base md:text-lg">
        <NumberFlow
          value={inView ? value : 0}
          format={{ style: 'decimal', minimumIntegerDigits: 2 }}
          transformTiming={{ duration: 700, easing: 'ease-out' }}
        />
      </span>
    </div>
  );
};

const Methodology = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      ref={ref}
      id="metodologia"
      className={`reveal relative pt-20 md:pt-32 pb-10 md:pb-16 overflow-hidden ${isVisible ? 'is-visible' : ''}`}
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
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
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

        <div className="relative max-w-3xl mx-auto">
          <div
            className="absolute left-7 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-primary/60 to-transparent"
            aria-hidden="true"
          />

          <ol className="space-y-8 md:space-y-12">
            {STEPS.map((step, index) => (
              <motion.li
                key={step.value}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index * 0.1, ease: 'easeOut' }}
                className="relative flex items-start gap-6 md:gap-8"
              >
                <StepNumber value={step.value} />
                <div className="flex-1 bg-surface-container border border-white/10 rounded-2xl p-6 md:p-8 hover:border-brand-primary transition-colors duration-300">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <MagneticButton href="#contacto" size="lg">
            Quiero ver mi propuesta gratis
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
