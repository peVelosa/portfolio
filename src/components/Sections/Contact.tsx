import {
  motion,
  useTransform,
  useScroll,
  useAnimation,
  useInView,
} from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Reveal from '@/components/Reveal';
import { headerVariants, paragraphVariants } from '@/helpers/variants';
import { socialMedias } from '@/utils/socialMedias';
import Icon from '@/components/Icon';
import { type ElementRef, useRef, useEffect } from 'react';
import Link from '../Link';

const Contact = () => {
  const ref = useRef<ElementRef<'div'>>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0.6, 1], [0, 600]);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const paragraphControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      paragraphControls.start('visible');
    }
  }, [isInView, mainControls, paragraphControls]);

  return (
    <SectionWrapper
      className="mt-32 min-h-[60vh]"
      id="contact"
    >
      <div
        ref={ref}
        className="relative isolate"
      >
        <div className="w-fit uppercase text-slate-200">
          <Reveal className="mb-8 overflow-hidden text-4xl sm:hidden">
            <motion.h2
              initial="hidden"
              variants={headerVariants}
              animate={mainControls}
            >
              Contact
            </motion.h2>
          </Reveal>
          <motion.h2
            className="pointer-events-none absolute -top-20 -z-10 hidden font-about sm:block sm:text-9xl"
            style={{ x }}
          >
            Contact
          </motion.h2>
        </div>

        <div className="z-20 px-4 text-xl md:ml-20 md:text-2xl">
          <motion.p
            className="mb-4 block "
            initial="hidden"
            variants={paragraphVariants}
            animate={paragraphControls}
          >
            Feel free to visit me on other platforms or to download my resume.
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialMedias.map((socialMedia, index) => (
              <Link
                key={index}
                href={socialMedia.href}
                className="p-0 shadow-none md:p-0"
              >
                <Icon
                  key={index}
                  Icon={socialMedia.Icon}
                  fill={socialMedia.fill}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
