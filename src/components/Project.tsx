import { type FC } from 'react';
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
  return (
    <>
      <article className="mx-auto w-full  shrink-0 rounded-md bg-slate-100 shadow-md ">
        <div className="h-full w-full max-w-[90rem]">
          <div className="flex h-full flex-col items-start p-4 lg:p-12">
            <h1 className="mb-8 text-2xl font-bold lg:text-4xl">{title}</h1>
            <div className="grid h-full grid-rows-[auto_1fr] gap-4 overflow-hidden lg:grid-cols-[1fr_1fr]">
              <figure className="mx-auto block aspect-video h-full w-full max-w-xl overflow-hidden lg:order-2 lg:row-span-2">
                <img
                  src={src}
                  style={{ objectPosition: position }}
                  className="block max-h-full w-full rounded-md object-cover lg:order-2"
                />
              </figure>
              <div className="flex flex-col gap-8 lg:justify-between">
                <p className="text-lg md:text-xl">{description}</p>
                <div className="flex gap-8 font-semibold capitalize md:gap-0">
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
          </div>
        </div>
      </article>
    </>
  );
};

export default Project;
