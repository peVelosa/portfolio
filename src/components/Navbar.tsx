import { Variants, motion } from 'framer-motion';
import goTo from 'src/helpers/goTo';
import useNavbar from 'src/hooks/useNavbar';

const navbarVariants: Variants = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
};

const Navbar = () => {
  const { navbarControl, sections } = useNavbar();

  return (
    <header className="fixed left-1/2 top-4 isolate z-20 w-fit -translate-x-1/2 px-8 text-xs font-semibold text-white md:px-2 md:text-sm">
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
              className="mr-auto hidden rounded bg-slate-800 hover:bg-slate-900 sm:block"
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

export default Navbar;
