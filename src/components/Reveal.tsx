import { twMerge } from 'tailwind-merge';

import { motion, useAnimation, useInView } from 'framer-motion';
import { type ElementRef, FC, useEffect, useRef } from 'react';
import { barVariant } from '@/helpers/variants';

type RevealProps = {
  children: React.ReactNode;
  className?: React.ComponentProps<'div'>['className'];
  duration?: number;
  once?: boolean;
};

const Reveal: FC<RevealProps> = ({
  children,
  className,
  duration = 1,
  once = true,
}) => {
  const ref = useRef<ElementRef<'div'>>(null);
  const isInView = useInView(ref, { once });

  const barControl = useAnimation();
  const variant = barVariant(duration);

  useEffect(() => {
    if (isInView) {
      barControl.start('visible');
    } else {
      barControl.start('hidden');
    }
  }, [isInView, barControl]);

  return (
    <div
      className={twMerge('relative mb-4 w-fit md:mb-12', className)}
      ref={ref}
    >
      {children}
      <motion.div
        className="absolute -bottom-1 -top-1 bg-red-400"
        initial="hidden"
        variants={variant}
        animate={barControl}
      />
    </div>
  );
};

export default Reveal;
