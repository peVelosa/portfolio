import { twMerge } from 'tailwind-merge';

import { type Variants, motion, useAnimation, useInView } from 'framer-motion';
import { type ElementRef, FC, useEffect, useRef } from 'react';

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

  const barVariant: Variants = {
    hidden: {
      left: 0,
      right: 0,
    },
    visible: {
      left: '100%',
      transition: {
        duration,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      barControl.start('visible');
    } else {
      barControl.start('hidden');
    }
  }, [isInView, barControl]);

  return (
    <div
      className={twMerge('relative w-fit', className)}
      ref={ref}
    >
      {children}
      <motion.div
        className="absolute -bottom-1 -top-1 bg-red-400"
        variants={barVariant}
        initial="hidden"
        animate={barControl}
      />
    </div>
  );
};

export default Reveal;
