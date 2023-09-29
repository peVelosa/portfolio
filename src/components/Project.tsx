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
            <div className="grid h-full grid-rows-[4fr_3fr] gap-4 overflow-hidden lg:grid-cols-[1fr_1fr]">
              <a
                href={demo}
                target="_blank"
                className="mx-auto hidden max-w-xl overflow-hidden hover:scale-105 lg:order-2 lg:row-span-2 lg:block"
              >
                <figure className="block aspect-video h-full lg:aspect-auto">
                  <img
                    src={src}
                    style={{ objectPosition: position }}
                    className="block max-h-full w-full rounded-md object-cover lg:order-2"
                  />
                </figure>
              </a>
              <figure className="mx-auto block aspect-video h-full max-w-xl overflow-hidden lg:hidden">
                <img
                  src={src}
                  style={{ objectPosition: position }}
                  className="block max-h-full w-full rounded-md object-cover lg:order-2"
                />
              </figure>
              <div className="flex flex-col gap-8">
                <p className="text-lg md:text-xl">{description}</p>
                <div className="flex font-semibold capitalize">
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
