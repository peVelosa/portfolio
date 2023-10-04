import { AnimationControls, motion } from 'framer-motion';
import { type IconType } from 'react-icons';
import { iconVariants } from '@/helpers/variants';

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
        variants={iconVariants}
        animate={paragraphControls}
        custom={index}
      >
        <Icon
          className={`h-[60px] w-[60px] text-black group-hover:text-inherit md:h-[90px] md:w-[90px]`}
        />
        {label && (
          <span className="absolute inset-x-0 -top-9 hidden bg-slate-300 px-1 py-1 text-sm font-semibold text-black before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:border-x-8 before:border-t-8 before:border-slate-300 before:border-x-transparent before:content-[''] group-hover:block md:text-base">
            {label}
          </span>
        )}
      </motion.div>
    </div>
  );
};

export default TechIcon;
