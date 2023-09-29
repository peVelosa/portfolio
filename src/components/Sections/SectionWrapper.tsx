import { twMerge } from 'tailwind-merge';
import { type FC } from 'react';

type SectionWrapperProps = {
  children: React.ReactNode;
  id: string;
  className?: React.ComponentProps<'section'>['className'];
};

const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <>
      <section
        className={twMerge('min-h-screen w-screen p-4', className)}
        id={id}
      >
        <div className={'mx-auto w-full max-w-6xl'}>{children}</div>
      </section>
    </>
  );
};

export default SectionWrapper;
