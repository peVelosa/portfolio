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
import Reveal from '@/components/Reveal';

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
      delay: 0.15,
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

const yearsOld = Math.floor(
  (new Date().getTime() - new Date(2002, 0, 4).getTime()) /
    (1000 * 60 * 60 * 24 * 365),
);

const AboutMe = () => {
  const ref = useRef<ElementRef<'div'>>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0.4, 1], [0, -400]);
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
    <SectionWrapper
      className=" mt-8 grid place-content-center"
      id="about"
    >
      <div
        ref={ref}
        className="relative isolate"
      >
        <div className="w-fit uppercase text-slate-200">
          <Reveal className="mb-8 overflow-hidden text-4xl sm:hidden">
            <motion.h2
              variants={headerVariants}
              initial="hidden"
              animate={mainControls}
            >
              About me
            </motion.h2>
          </Reveal>
          <motion.h2
            className="pointer-events-none absolute -top-20 -z-10 hidden font-about sm:block sm:text-9xl"
            style={{ x }}
          >
            About me
          </motion.h2>
        </div>

        <div className="z-20 px-4 text-xl md:ml-20 md:text-2xl">
          <motion.p
            className="mb-4 block "
            initial="hidden"
            variants={paragraphVariants}
            animate={paragraphControls}
          >
            I am a {yearsOld} year old Brazilian
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
