import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Contact from './sections/Contact.jsx';
import { useSmoothScroll } from './hooks/useSmoothScroll.js';
import { useLenis } from './hooks/useLenis.js';

const Hero = lazy(() => import('./sections/Hero.jsx'));
const FeaturesBar = lazy(() => import('./sections/FeaturesBar.jsx'));
const Methodology = lazy(() => import('./sections/Methodology.jsx'));
const Pricing = lazy(() => import('./sections/Pricing.jsx'));
const Portfolio = lazy(() => import('./sections/Portfolio.jsx'));
const About = lazy(() => import('./sections/About.jsx'));
const Social = lazy(() => import('./sections/Social.jsx'));

const SectionFallback = () => (
  <div className="min-h-[200px]" aria-hidden="true" />
);

const App = () => {
  useLenis();
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-surface-base text-white">
      <a
        href="#main-content"
        className="skip-link"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<SectionFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FeaturesBar />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Methodology />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Social />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
