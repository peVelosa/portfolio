import { Variants } from 'framer-motion';

const headerVariants: Variants = {
  hidden: {
    y: 75,
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      duration: 1,
      stiffness: 100,
      damping: 18,
    },
  },
};
const paragraphVariants: Variants = {
  hidden: () => ({
    x: '-100vw',
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 200,
      damping: 10,
    },
  }),
  visible: () => ({
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.2,
      duration: 1,
      stiffness: 200,
      damping: 40,
    },
  }),
};

const barVariant = (duration: number): Variants => {
  return {
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
};

export { headerVariants, paragraphVariants, barVariant };
