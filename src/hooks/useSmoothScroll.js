import { useEffect } from 'react';
import { getLenis } from './useLenis.js';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href || href === '#') return;

      const element = document.querySelector(href);
      if (!element) return;

      event.preventDefault();

      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(element, { offset: -80 });
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      if (typeof history.pushState === 'function') {
        history.pushState(null, '', href);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};
