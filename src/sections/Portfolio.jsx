import { motion } from 'motion/react';
import PortfolioCard from '../components/PortfolioCard.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import mondongoCars from '../assets/mockups/proyecto_mondongocars.png';
import tecnoWorld from '../assets/mockups/proyecto_tecnoworld.png';
import cloverModa from '../assets/mockups/proyecto_clovermoda.png';

const PROJECTS = [
  {
    title: 'Mondongo Cars',
    category: 'Catálogo Automotriz',
    description:
      'Catálogo automotriz dark premium con tarjetas minimalistas, tipografía moderna y detalles en naranja vibrante de alta conversión.',
    image: mondongoCars,
    href: 'https://catalogo-mondongo-cars.bungouseven.workers.dev/',
  },
  {
    title: 'Tecno World',
    category: 'Sitio Corporativo',
    description:
      'Sitio corporativo dark con estética gaming, tipografías audaces, iconos minimalistas y potentes acentos en naranja fosforescente de alto impacto.',
    image: tecnoWorld,
    href: 'https://landingpage-tecnoworld.vercel.app/',
  },
  {
    title: 'Clover Moda.',
    category: 'E-commerce Editorial',
    description:
      'E-commerce editorial minimalista, estética light luxury en tonos beige, tipografía elegante serif y acentos morados.',
    image: cloverModa,
    href: 'https://catalogo-clover-moda.bungouseven.workers.dev/',
  },
];

const Portfolio = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      ref={ref}
      id="portafolio"
      className={`reveal pt-10 md:pt-16 pb-0 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container border border-white/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
            Proyectos Realizados
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Proyectos que <span className="text-gradient-orange">Impulsan Marcas</span>
          </h2>
          <p className="text-text-medium text-lg leading-relaxed">
            Una muestra de las interfaces modernas, dinámicas y de alta conversión que
            diseñamos para nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
            >
              <PortfolioCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
