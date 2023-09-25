import { twMerge } from 'tailwind-merge';
import { type FC } from 'react';

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: React.ComponentProps<'section'>['className'];
};

const SectionWrapper: FC<SectionWrapperProps> = ({ children, className }) => {
  return (
    <>
      <section className={twMerge('min-h-screen w-screen p-4', className)}>
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </section>
    </>
  );
};

export default SectionWrapper;
