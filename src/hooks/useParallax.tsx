import { useScroll, useTransform } from 'framer-motion';
import { useRef, ElementRef } from 'react';

const useParallax = () => {
  const ref = useRef<ElementRef<'div'>>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0.4, 1], [0, -400]);

  return { ref, x };
};

export default useParallax;
