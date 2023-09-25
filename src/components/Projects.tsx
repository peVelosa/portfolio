import SectionWrapper from './SectionWrapper';
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ElementRef, useEffect, useRef } from 'react';
import Reveal from './Reveal';

const Projects = () => {
  const titleRef = useRef<ElementRef<'div'>>(null);

  const project1Ref = useRef<ElementRef<'article'>>(null);
  const project2Ref = useRef<ElementRef<'article'>>(null);
  const project3Ref = useRef<ElementRef<'article'>>(null);
  const { scrollYProgress } = useScroll({
    target: project1Ref,
    offset: ['0.25 end', 'start center'],
  });
  const { scrollYProgress: scroll2 } = useScroll({
    target: project2Ref,
    offset: ['0.25 end', 'start center'],
  });
  const { scrollYProgress: scroll3 } = useScroll({
    target: project3Ref,
    offset: ['0.25 end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 0.7, 1], [-400, 100, 0]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [250, 500, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const y2 = useTransform(scroll2, [0, 0.7, 1], [-400, 100, 0]);
  const x2 = useTransform(scroll2, [0, 0.5, 1], [250, 500, 0]);
  const scale2 = useTransform(scroll2, [0, 1], [0.25, 1]);
  const y3 = useTransform(scroll3, [0, 0.7, 1], [-400, 100, 0]);
  const x3 = useTransform(scroll3, [0, 0.5, 1], [250, 500, 0]);
  const scale3 = useTransform(scroll3, [0, 1], [0.25, 1]);
  const mainControls = useAnimation();
  const isInView = useInView(titleRef, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);
  return (
    <SectionWrapper className="mt-20 place-content-between overflow-hidden">
      <div
        className="relative mb-16 w-fit overflow-hidden text-4xl uppercase text-slate-300 md:text-6xl"
        ref={titleRef}
      >
        <Reveal>
          <motion.h2>Projects</motion.h2>
        </Reveal>
      </div>
      <div className="grid gap-28">
        <motion.article
          className="project h-[35vh] rounded-md bg-slate-50 p-4 shadow-md"
          ref={project1Ref}
          style={{ y, scale, x }}
        >
          <h1 className="p-title font-bold">
            Rock, Paper, Scissors (Lizard, Spock)
          </h1>
          <p className="p-description">
            This site is a single-player site that you can play rock, paper,
            scissors against cpu
          </p>
          <div className="p-button self-end">
            <button className="mr-8 rounded-full bg-green-500 px-4 py-1">
              Demo
            </button>
            <button className="rounded-full bg-green-500 px-4 py-1">
              Source
            </button>
          </div>
          <div className="p-image">IMAGEM</div>
        </motion.article>
        <motion.article
          className="project h-[35vh] rounded-md bg-slate-50 p-4 shadow-md"
          ref={project2Ref}
          style={{ y: y2, scale: scale2, x: x2 }}
        >
          <h1 className="p-title font-bold">
            Rock, Paper, Scissors (Lizard, Spock)
          </h1>
          <p className="p-description">
            This site is a single-player site that you can play rock, paper,
            scissors against cpu
          </p>
          <div className="p-button self-end">
            <button className="mr-8 rounded-full bg-green-500 px-4 py-1">
              Demo
            </button>
            <button className="rounded-full bg-green-500 px-4 py-1">
              Source
            </button>
          </div>
          <div className="p-image">IMAGEM</div>
        </motion.article>
        <motion.article
          className="project h-[35vh] rounded-md bg-slate-50 p-4 shadow-md"
          ref={project3Ref}
          style={{ y: y3, scale: scale3, x: x3 }}
        >
          <h1 className="p-title font-bold">
            Rock, Paper, Scissors (Lizard, Spock)
          </h1>
          <p className="p-description">
            This site is a single-player site that you can play rock, paper,
            scissors against cpu
          </p>
          <div className="p-button self-end">
            <button className="mr-8 rounded-full bg-green-500 px-4 py-1">
              Demo
            </button>
            <button className="rounded-full bg-green-500 px-4 py-1">
              Source
            </button>
          </div>
          <div className="p-image">IMAGEM</div>
        </motion.article>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
