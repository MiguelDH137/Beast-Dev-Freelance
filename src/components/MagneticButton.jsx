import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';
import Button from './Button.jsx';

const MagneticButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  ariaLabel,
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (event) => {
    if (shouldReduceMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = (event.clientX - rect.left - rect.width / 2) * 0.3;
    const offsetY = (event.clientY - rect.top - rect.height / 2) * 0.3;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, display: 'inline-block' }}
    >
      <Button
        href={href}
        size={size}
        variant={variant}
        onClick={onClick}
        className={className}
        ariaLabel={ariaLabel}
      >
        {children}
      </Button>
    </motion.span>
  );
};

export default MagneticButton;
