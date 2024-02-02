import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Reveal from '@/components/Reveal';
import { headerVariants, paragraphVariants } from '@/helpers/variants';
import useParallax from 'src/hooks/useParallax';
import useFade from 'src/hooks/useFade';

const yearsOld = Math.floor(
  (new Date().getTime() - new Date(2002, 0, 4).getTime()) /
    (1000 * 60 * 60 * 24 * 365),
);

const AboutMe = () => {
  const { ref, x } = useParallax();
  const { fadeInX, ref: headerRef } = useFade();

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
          <div ref={headerRef}>
            <Reveal className="mb-8 overflow-hidden text-4xl sm:hidden">
              <motion.h2
                initial="hidden"
                variants={headerVariants}
                animate={fadeInX}
              >
                About me
              </motion.h2>
            </Reveal>
          </div>
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
            animate={fadeInX}
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
