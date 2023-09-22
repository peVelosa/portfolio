import { AnimationControls, Variants, motion } from 'framer-motion';
import { IconType } from 'react-icons';

const paragraphVariants: Variants = {
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

type TechIcon = {
  Icon: IconType;
  paragraphControls: AnimationControls;
  fill: string;
  index: number;
};

const TechIcon = ({ Icon, fill, paragraphControls, index }: TechIcon) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="text-center"
        initial="hidden"
        variants={paragraphVariants}
        animate={paragraphControls}
        custom={index}
      >
        <Icon
          size={80}
          fill={fill}
        />
      </motion.div>
    </div>
  );
};

export default TechIcon;
