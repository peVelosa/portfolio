import { twMerge } from 'tailwind-merge';
import { type FC } from 'react';

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: React.ComponentProps<'section'>['className'];
};

const SectionWrapper: FC<SectionWrapperProps> = ({ children, className }) => {
  return (
    <>
      <section
        className={twMerge(
          'w-screen h-screen grid place-items-center p-4',
          className,
        )}
      >
        <div className="max-w-6xl w-full">{children}</div>
      </section>
    </>
  );
};

export default SectionWrapper;
