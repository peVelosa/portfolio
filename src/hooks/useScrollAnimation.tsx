import { useScroll, useTransform } from 'framer-motion';
import { ElementRef, useRef } from 'react';

const useScrollAnimation = (elements: number) => {
  const targetRef = useRef<ElementRef<'div'>>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.975],
    ['10%', `-${(elements - 1) * 100 + 10}%`],
  );

  return { targetRef, x };
};

export default useScrollAnimation;
