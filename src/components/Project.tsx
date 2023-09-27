import { useAnimation, useInView, motion } from 'framer-motion';
import { useRef, useEffect, type FC, ElementRef } from 'react';
import Link from './Link';

type ProjectProps = {
  title: string;
  description: string;
  demo: string;
  source: string;
  image: { src: string; position: string };
};

const Project: FC<ProjectProps> = ({
  title,
  description,
  demo,
  source,
  image: { src, position },
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
      <div className="mx-auto w-full  shrink-0 rounded-md bg-slate-100 shadow-md">
        <motion.article
          ref={projectRef}
          className="h-full w-full max-w-[90rem]"
        >
          <motion.div className="flex h-full flex-col items-start p-12">
            <h1 className="mb-8 text-2xl font-bold lg:text-4xl">{title}</h1>
            <div className="grid h-full grid-rows-[4fr_3fr] gap-4 lg:grid-cols-[1fr_1fr]">
              <a
                href={demo}
                target="_blank"
                className="mx-auto block max-w-xl overflow-hidden hover:scale-105 lg:order-2 lg:row-span-2"
              >
                <figure className="block aspect-video h-full lg:aspect-auto">
                  <img
                    src={src}
                    style={{ objectPosition: position }}
                    className="block max-h-full w-full rounded-md object-cover lg:order-2"
                  />
                </figure>
              </a>
              <div className="flex flex-col gap-8">
                <p className="text-lg md:text-xl">{description}</p>
                <div className="font-semibold capitalize">
                  <Link
                    href={source}
                    className="bg-slate-700 text-white hover:bg-slate-900"
                  >
                    source
                  </Link>
                  <Link
                    href={demo}
                    className="bg-slate-200 hover:bg-slate-300"
                  >
                    demo
                  </Link>
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
