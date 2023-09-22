import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { type ElementRef, useRef, useEffect } from 'react';
import Reveal from './Reveal';

const variants: Variants = {
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
      delay: 0.25,
    },
  },
};
const paragraphVariants: Variants = {
  hidden: (i: number) => ({
    x: '-100vw',
    transition: {
      type: 'spring',
      delay: i * 0.5,
      stiffness: 200,
      damping: 10,
    },
  }),
  visible: (i: number) => ({
    x: 0,
    transition: {
      type: 'spring',
      delay: i * 0.5,
      duration: 1,
      stiffness: 200,
      damping: 40,
    },
  }),
};

const AboutMe = () => {
  const ref = useRef<ElementRef<'div'>>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const paragraphControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      paragraphControls.start('visible');
    }
  }, [isInView, mainControls, paragraphControls]);

  return (
    <SectionWrapper className="min-h-[60vh] mt-8">
      <div ref={ref}>
        <div className="md:text-6xl uppercase text-slate-300 mb-12 relative w-fit overflow-hidden text-4xl">
          <Reveal>
            <motion.h2
              variants={variants}
              initial="hidden"
              animate={mainControls}
            >
              About me
            </motion.h2>
          </Reveal>
        </div>
        <div className="md:ml-20 md:text-2xl text-xl px-4">
          <motion.p
            className="mb-4"
            initial="hidden"
            variants={paragraphVariants}
            animate={paragraphControls}
            custom={1}
          >
            I am a 21 year old Brazilian
            <span className="font-bold"> front-end developer</span>,
            specializing in <span className="font-bold">ReactJS</span> and{' '}
            <span className="font-bold">Next.js</span>. My passion for coding
            and my commitment to quality have driven me to create
            high-performance web interfaces and exceptional user experiences. I
            have a constant thirst for learning and am eager to expand my
            knowledge, with plans to acquire expertise in Angular, Node.js, and
            Flutter to further enrich my skill set.
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutMe;
