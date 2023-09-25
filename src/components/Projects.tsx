import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const Projects = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInViewRef1 = useInView(ref1);
  const isInViewRef2 = useInView(ref2);
  const isInViewRef3 = useInView(ref3);

  useEffect(() => {
    console.log('ref1: ', isInViewRef1);
    console.log('ref2: ', isInViewRef2);
    console.log('ref3: ', isInViewRef3);
  }, [isInViewRef1, isInViewRef2, isInViewRef3]);

  return (
    <SectionWrapper>
      <article className="grid min-h-[60vh] ">
        <div className="col-span-2 col-start-1 flex flex-col justify-between bg-red-200">
          <div>
            <h1>Rock, Paper, Scissors (Lizard, Spock)</h1>
            <h2>This is a web game </h2>
          </div>
          <div className="group-last:hidden">
            <button className="rounded-md bg-green-300 px-2 py-1">
              Source
            </button>
            <button className="rounded-md bg-green-300 px-2 py-1">Demo</button>
          </div>
        </div>
        <div className="col-span-1 col-start-3 bg-red-100">imagem</div>
      </article>
    </SectionWrapper>
  );
};

export default Projects;
