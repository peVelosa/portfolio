import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function goTo(element: HTMLElement) {
  element.scrollIntoView({ behavior: 'smooth' });
}

const DesktopMenu = () => {
  const [sections, setSections] = useState<HTMLElement[] | []>([]);

  useEffect(() => {
    setSections(Array.from(document.getElementsByTagName('section')));
  }, []);

  return (
    <motion.header className="fixed left-1/2 top-4 isolate z-20 h-12 w-full max-w-xs -translate-x-1/2 rounded-lg bg-slate-600/60 p-2 text-sm text-slate-50 backdrop-blur-sm">
      <div className="items relative flex h-full items-center justify-end gap-2">
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
      </div>
    </motion.header>
  );
};

export default DesktopMenu;
