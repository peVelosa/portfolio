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
  const sectionRef = useRef<ElementRef<'div'>>(null);
  const isInView = useInView(sectionRef, { once: true });

  const mainControls = useAnimation();
  const paragraphControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      paragraphControls.start('visible');
    }
  }, [isInView, mainControls, paragraphControls]);

  return (
    <SectionWrapper>
      <div ref={sectionRef}>
        <div className="md:text-6xl uppercase text-slate-300 mb-8 relative w-fit overflow-hidden text-4xl">
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
          <motion.p
            className="mb-4"
            initial="hidden"
            variants={paragraphVariants}
            animate={paragraphControls}
            custom={2}
          >
            In addition to my technical skills, I am a strong advocate for
            teamwork. I believe that collaboration is essential to achieving
            outstanding results, and I am always ready to contribute and learn
            from my colleagues. My dedication to excellence is reflected in my
            aversion to subpar work, as I believe that quality is paramount in
            any project.
          </motion.p>
          <motion.p
            className="mb-4"
            initial="hidden"
            variants={paragraphVariants}
            animate={paragraphControls}
            custom={3}
          >
            I am excited about future front-end development opportunities and I
            am continually seeking ways to enhance my skills and knowledge to
            create impressive solutions.
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutMe;
