import SectionWrapper from './SectionWrapper';
import TypeWriter from '@/components/TypeWriter';
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
      <SectionWrapper
        className="relative grid place-items-center"
        id="introduction"
      >
        <div className="mb-6 overflow-hidden p-2 font-name">
          <motion.h1
            className="text-center text-4xl md:text-7xl"
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
            className="text-center text-2xl md:text-4xl"
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
        <motion.div
          className="icon-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            opacity: {
              delay: 1.65,
            },
          }}
        />
      </SectionWrapper>
    </>
  );
};

export default Introduction;
