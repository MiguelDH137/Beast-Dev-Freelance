import PortfolioCard from '../components/PortfolioCard.jsx';

const PROJECTS = [
  {
    title: 'TechNova Solutions',
    category: 'Landing Corporativa',
    description:
      'Diseño premium oscuro con acentos brillantes y un enfoque total en conversión B2B.',
  },
  {
    title: 'Aura Lifestyle',
    category: 'E-commerce Minimalista',
    description:
      'Catálogo ultrarrápido, navegación limpia y experiencia de compra sin fricción.',
  },
  {
    title: 'Nexus AI Platform',
    category: 'Landing con IA',
    description:
      'Landing page con agente de IA integrado, captura de leads y demo conversacional 24/7.',
  },
];

const Portfolio = () => (
  <section id="portafolio" className="py-20 md:py-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container border border-white/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
          Casos de Éxito
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
        {PROJECTS.map((project) => (
          <PortfolioCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
