import SectionWrapper from './SectionWrapper';
import TypeWriter from '../TypeWriter';
import { motion, Variants } from 'framer-motion';

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

const Introduction = () => {
  const aboutMe = ['geek', 'gamer', 'code lover'];

  return (
    <>
      <SectionWrapper className="font-name">
        <div className="overflow-hidden p-2 mb-6">
          <motion.h1
            className="text-center font-sans md:text-7xl text-4xl"
            initial="hidden"
            animate="visible"
            key="name"
            variants={itemVariants}
            custom={1}
          >
            Pedro Velosa
          </motion.h1>
        </div>
        <div className="overflow-hidden p-2">
          <motion.h2
            className="text-center md:text-4xl text-2xl"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            key="about-me"
            custom={2}
          >
            Front-end developer &{' '}
            <TypeWriter
              words={aboutMe}
              typeSpeed={150}
              deleteSpeed={120}
              delaySpeed={1000}
              initialDelay={1650}
            />
          </motion.h2>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Introduction;
