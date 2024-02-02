import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Reveal from '@/components/Reveal';
import { socialMedias } from '@/utils/socialMedias';
import Icon from '@/components/Icon';
import Link from '../Link';
import useFade from 'src/hooks/useFade';
import useParallax from 'src/hooks/useParallax';
import { headerVariants, paragraphVariants } from '@/helpers/variants';

const Contact = () => {
  const { ref, x } = useParallax();
  const { fadeInX, ref: headerRef } = useFade();

  return (
    <SectionWrapper
      className="min-h-[60vh] md:mt-32"
      id="contact"
    >
      <div
        ref={ref}
        className="relative isolate"
      >
        <div
          className="w-fit uppercase text-slate-200"
          ref={headerRef}
        >
          <Reveal className="mb-8 overflow-hidden text-4xl sm:hidden">
            <motion.h2
              initial="hidden"
              variants={headerVariants}
              animate={fadeInX}
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
            animate={fadeInX}
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
