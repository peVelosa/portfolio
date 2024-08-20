import { useAnimation } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

const useNavbar = () => {
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
    setSections(Array.from(document.querySelectorAll('main section')));

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    isOpen ? navbarControl.start('visible') : navbarControl.start('hidden');
  }, [navbarControl, isOpen]);

  return { navbarControl, sections };
};

export default useNavbar;
