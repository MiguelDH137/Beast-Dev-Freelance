import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import FeaturesBar from './sections/FeaturesBar.jsx';
import Methodology from './sections/Methodology.jsx';
import Pricing from './sections/Pricing.jsx';
import Portfolio from './sections/Portfolio.jsx';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import { useSmoothScroll } from './hooks/useSmoothScroll.js';

const App = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-surface-base text-white overflow-x-hidden">
      <a
        href="#main-content"
        className="skip-link"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <FeaturesBar />
        <Methodology />
        <Pricing />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
