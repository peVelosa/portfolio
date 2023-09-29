import { motion, useAnimation } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import goTo from 'src/helpers/goTo';
import { navbarVariants } from 'src/helpers/variants';

const DesktopMenu = () => {
  const [sections, setSections] = useState<HTMLElement[] | []>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [lastScrollYPosition, setLastScrollYPosition] = useState<number>(0);

  const navbarControl = useAnimation();

  const onScroll = useCallback(() => {
    const currentScrollYPosition = window.scrollY;
    currentScrollYPosition < lastScrollYPosition
      ? setIsOpen(true)
      : setIsOpen(false);

    setLastScrollYPosition(() => currentScrollYPosition);
  }, [lastScrollYPosition]);

  useEffect(() => {
    setSections(Array.from(document.getElementsByTagName('section')));

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    isOpen ? navbarControl.start('visible') : navbarControl.start('hidden');
  }, [navbarControl, isOpen]);

  return (
    <header className="fixed left-1/2 top-4 isolate z-20 w-full max-w-xs -translate-x-1/2 px-8 text-xs font-semibold text-white md:px-2 md:text-sm">
      <motion.div
        className="items relative flex h-12 items-center justify-end gap-2 rounded-lg bg-slate-600/60 p-2 backdrop-blur-sm"
        initial="hidden"
        variants={navbarVariants}
        animate={navbarControl}
      >
        {sections.map((section, index) =>
          index === 0 ? (
            <div
              key={section.id}
              className="mr-auto rounded bg-slate-800 hover:bg-slate-900"
            >
              <button
                onClick={() => goTo(section)}
                className="rounded-full px-2 font-name text-2xl capitalize"
              >
                {'Pv'}
              </button>
            </div>
          ) : (
            <div
              key={section.id}
              className="mr-auto rounded hover:bg-slate-700"
            >
              <button
                onClick={() => goTo(section)}
                className="rounded-full px-2 py-2 capitalize"
              >
                {section.id}
              </button>
            </div>
          ),
        )}
      </motion.div>
    </header>
  );
};

export default DesktopMenu;
