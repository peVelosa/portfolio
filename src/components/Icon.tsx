import { AnimationControls, Variants, motion } from 'framer-motion';
import { type IconType } from 'react-icons';

type TechIcon = {
  Icon: IconType;
  paragraphControls?: AnimationControls;
  label?: string;
  fill?: string;
  index?: number;
};

const TechIcon = ({
  Icon,
  fill = 'red',
  paragraphControls,
  label,
  index,
}: TechIcon) => {
  return (
    <div className={`overflow-hidden ${label ? 'pt-8' : ''}`}>
      <motion.div
        className="group relative text-center"
        initial={paragraphControls ? 'hidden' : 'visible'}
        style={{ color: fill }}
        variants={iconFade}
        animate={paragraphControls}
        custom={index}
      >
        <Icon
          className={`h-[60px] w-[60px] text-black group-hover:text-inherit md:h-[90px] md:w-[90px]`}
        />
        {label && (
          <span className="absolute inset-x-0 -top-9 hidden break-words bg-slate-300 px-1 py-1 text-xs font-semibold text-black before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:border-x-8 before:border-t-8 before:border-slate-300 before:border-x-transparent before:content-[''] group-hover:block md:text-base">
            {label}
          </span>
        )}
      </motion.div>
    </div>
  );
};

const iconFade: Variants = {
  hidden: () => ({
    y: -100,
    scale: 0.5,
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

export default TechIcon;
