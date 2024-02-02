import { useInView, useAnimation } from 'framer-motion';
import { useRef, ElementRef, useEffect } from 'react';

const useFade = () => {
  const ref = useRef<ElementRef<'div'>>(null);
  const isInView = useInView(ref, { once: true });

  const fadeInX = useAnimation();

  useEffect(() => {
    if (isInView) {
      fadeInX.start('visible');
    }
  }, [isInView, fadeInX]);

  return { ref, fadeInX };
};

export default useFade;
