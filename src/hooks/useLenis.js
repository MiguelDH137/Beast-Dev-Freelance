import { useEffect } from 'react';
import Lenis from 'lenis';

let lenisInstance = null;

export const getLenis = () => lenisInstance;

export const useLenis = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisInstance = lenis;

    if (prefersReducedMotion.matches) {
      lenis.stop();
    }

    const handleMotionChange = (event) => {
      if (event.matches) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    prefersReducedMotion.addEventListener('change', handleMotionChange);

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      prefersReducedMotion.removeEventListener('change', handleMotionChange);
      lenis.destroy();
      if (lenisInstance === lenis) {
        lenisInstance = null;
      }
    };
  }, []);
};
