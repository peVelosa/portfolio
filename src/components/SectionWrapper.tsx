import { twMerge } from 'tailwind-merge';
import { type FC } from 'react';

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: React.ComponentProps<'section'>['className'];
  childClassName?: React.ComponentProps<'div'>['className'];
};

const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  className,
  childClassName,
}) => {
  return (
    <>
      <section className={twMerge('min-h-screen w-screen p-4', className)}>
        <div className={twMerge('mx-auto w-full max-w-6xl', childClassName)}>
          {children}
        </div>
      </section>
    </>
  );
};

export default SectionWrapper;
