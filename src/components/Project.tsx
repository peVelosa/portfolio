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
      <div className=" w-full shrink-0 rounded-md bg-slate-50 shadow-md">
        <motion.article
          ref={projectRef}
          className="mx-auto h-full max-w-5xl"
        >
          <motion.div className="h-full p-12">
            <h1 className="mb-8 text-lg font-bold lg:text-4xl">{title}</h1>
            <div className="grid h-full lg:grid-cols-[3fr_1fr]">
              <img
                src={image}
                className="block max-h-full max-w-full rounded-md lg:order-2"
              />
              <div className="flex flex-col">
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
              </div>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </>
  );
};

export default Project;
