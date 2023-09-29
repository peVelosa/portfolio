import { Variants } from 'framer-motion';

const navbarVariants: Variants = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
};
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
const itemVariants: Variants = {
  hidden: (i: number) => ({
    y: 150,
    transition: {
      delay: i * 0.5,
      type: 'spring',
      stiffness: 200,
      damping: 40,
    },
  }),
  visible: (i: number) => ({
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 1,
      type: 'spring',
      stiffness: 200,
      damping: 40,
    },
  }),
};
const iconVariants: Variants = {
  hidden: (i: number) => ({
    y: -100,
    scale: 0.5,
    transition: {
      type: 'spring',
      delay: i * 0.2,
      stiffness: 200,
      damping: 10,
    },
  }),
  visible: (i: number) => ({
    y: 0,
    scale: 1,
    transition: {
      y: {
        type: 'spring',
        delay: i * 0.2,
        duration: 1,
        stiffness: 200,
        damping: 40,
      },
      scale: {
        delay: i * 0.25,
        duration: 0.75,
      },
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

export {
  navbarVariants,
  headerVariants,
  paragraphVariants,
  itemVariants,
  iconVariants,
  barVariant,
};
