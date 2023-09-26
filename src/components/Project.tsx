import { useAnimation, useInView, motion } from 'framer-motion';
import { useRef, useEffect, type FC, ElementRef } from 'react';

type ProjectProps = {
  title: string;
  description: string;
  demo: string;
  source: string;
  image: string;
};

const Project: FC<ProjectProps> = ({
  title,
  description,
  demo,
  source,
  image,
}) => {
  const projectRef = useRef<ElementRef<'article'>>(null);

  const mainControls = useAnimation();
  const isInView = useInView(projectRef);

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);

  return (
    <>
      <div className="h-full w-full shrink-0">
        <motion.article
          ref={projectRef}
          className="h-full"
        >
          <motion.div className="flex h-full flex-col gap-8 rounded-md bg-slate-50 p-12 shadow-md">
            <h1 className="text-lg font-bold md:text-4xl">{title}</h1>
            <img
              src={image}
              className="max-h-full max-w-full rounded-md"
            />
            <p className="text-xl">{description}</p>
            <div className="font-semibold capitalize">
              <a
                className="mr-8 inline-block rounded-md bg-slate-100 px-6 py-2 shadow-lg hover:bg-slate-200"
                target="_blank"
                href={demo}
              >
                demo
              </a>
              <a
                className="mr-8 inline-block rounded-md bg-slate-700 px-6 py-2 text-white shadow-lg hover:bg-slate-900"
                target="_blank"
                href={source}
              >
                source
              </a>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </>
  );
};

export default Project;
