import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import SectionWrapper from '@/components/Sections/SectionWrapper';

import TechIcon from '@/components/Icon';
import { stack } from '@/utils/stack';
import useFade from 'src/hooks/useFade';

const TechStack = () => {
  const { ref, fadeInX } = useFade();

  return (
    <SectionWrapper
      className="min-h-[40svh]"
      id="stack"
    >
      <div className="relative w-fit overflow-hidden text-4xl uppercase text-slate-300 md:text-6xl">
        <Reveal>
          <motion.h2>My Stack</motion.h2>
        </Reveal>
      </div>

      <div
        className="tech-stack"
        ref={ref}
      >
        {stack.map((tec, index) => (
          <TechIcon
            Icon={tec.Icon}
            fill={tec.fill}
            label={tec.label}
            key={index}
            paragraphControls={fadeInX}
            index={index}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TechStack;
