import { twMerge } from 'tailwind-merge';
import type { FC } from 'react';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  target?: React.HTMLAttributeAnchorTarget;
  className?: React.ComponentProps<'section'>['className'];
};

const Link: FC<LinkProps> = ({
  href,
  target = '_blank',
  className,
  children,
}) => {
  return (
    <a
      href={href}
      target={target}
      className={twMerge(
        'mr-4 inline-block rounded-md px-4 py-1 shadow-lg md:mr-8 md:px-6 md:py-2',
        className,
      )}
    >
      {children}
    </a>
  );
};

export default Link;
