// import SectionWrapper from './SectionWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ElementRef, useRef } from 'react';
import Reveal from './Reveal';
import Project from './Project';
import { projects as myProjects } from '../utils/projects';
import SectionWrapper from './SectionWrapper';

const Projects = () => {
  const titleRef = useRef<ElementRef<'div'>>(null);
  const targetRef = useRef<ElementRef<'div'>>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['10%', `-${(myProjects.length - 1) * 100 + 5}%`],
  );
  return (
    <>
      <SectionWrapper>
        <div
          className={`h-[400svh]`}
          ref={targetRef}
        >
          <div className="sticky top-4 grid h-[90vh]  grid-rows-[auto_1fr] overflow-hidden">
            <div
              className="relative mb-16 w-fit text-4xl uppercase leading-none text-slate-300 md:text-6xl"
              ref={titleRef}
            >
              <Reveal>
                <motion.h2>Projects</motion.h2>
              </Reveal>
            </div>
            <div className="w-full overflow-hidden">
              <motion.div
                className="flex h-full gap-4"
                style={{ x }}
              >
                {myProjects.map((p) => (
                  <Project
                    key={p.title}
                    title={p.title}
                    description={p.description}
                    demo={p.links.demo}
                    source={p.links.source}
                    image={p.image}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Projects;
