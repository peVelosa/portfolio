import {
  motion,
  useTransform,
  useScroll,
  Variants,
  useAnimation,
  useInView,
} from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { type ElementRef, useRef, useEffect } from 'react';
import Reveal from './Reveal';

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
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.8], [-400, 350]);
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
    <SectionWrapper className=" mt-8 grid place-content-center">
      <div
        ref={ref}
        className="relative isolate"
      >
        <div className="w-fit uppercase text-slate-200">
          <Reveal className="mb-8 overflow-hidden text-4xl md:hidden">
            <motion.h2
              variants={headerVariants}
              initial="hidden"
              animate={mainControls}
            >
              About me
            </motion.h2>
          </Reveal>
          <motion.h2
            className="pointer-events-none absolute -top-24 -z-10 hidden leading-none md:block md:text-[12rem]"
            style={{ x }}
          >
            About me
          </motion.h2>
        </div>

        <div className="z-20 px-4 text-xl md:ml-20 md:text-2xl">
          <p className="hidden leading-9 md:block">
            I am a 21 year old Brazilian
            <span className="font-bold"> front-end developer</span>,
            specializing in <span className="font-bold">ReactJS</span> and{' '}
            <span className="font-bold">Next.js</span>. My passion for coding
            and my commitment to quality have driven me to create
            high-performance web interfaces and exceptional user experiences. I
            have a constant thirst for learning and am eager to expand my
            knowledge, with plans to acquire expertise in Angular, Node.js, and
            Flutter to further enrich my skill set.
          </p>
          <motion.p
            className="mb-4 block md:hidden"
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
