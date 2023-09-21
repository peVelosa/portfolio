import { motion } from 'framer-motion';
import Reveal from './Reveal';
import SectionWrapper from './SectionWrapper';

const TechStack = () => {
  return (
    <SectionWrapper className="h-fit">
      <div className="md:text-6xl uppercase text-slate-300 mb-8 relative w-fit overflow-hidden text-4xl">
        <Reveal once={false}>
          <motion.h2>My Stack</motion.h2>
        </Reveal>
        
      </div>
    </SectionWrapper>
  );
};

export default TechStack;
