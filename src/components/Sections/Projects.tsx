import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import Project from '@/components/Project';
import { projectsToShow } from '@/utils/projectsToShow';
import SectionWrapper from './SectionWrapper';
import useScrollAnimation from 'src/hooks/useScrollAnimation';

const Projects = () => {
  const { targetRef, x } = useScrollAnimation(projectsToShow.length);

  return (
    <>
      <SectionWrapper id="projects">
        <div
          className={`h-[400svh]`}
          ref={targetRef}
        >
          <div className="sticky top-4 h-screen overflow-hidden">
            <div className="grid h-full grid-rows-[auto_1fr] pb-12">
              <div className="relative w-fit text-4xl uppercase leading-none text-slate-300 md:text-6xl">
                <Reveal>
                  <motion.h2>Projects</motion.h2>
                </Reveal>
              </div>
              <div className="w-full overflow-hidden">
                <motion.div
                  className="flex h-full gap-4 will-change-transform"
                  style={{ x }}
                >
                  {projectsToShow.map((p) => (
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
        </div>
      </SectionWrapper>
    </>
  );
};

export default Projects;
