import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(currentScroll > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={handleClick}
          aria-label="Scroll to top"
          className="fixed right-6 bottom-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/15 bg-[#06131f]/95 text-cyan-100 shadow-[0_24px_80px_rgba(14,165,233,0.14)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-[#09202e] hover:shadow-[0_28px_100px_rgba(56,189,248,0.18)] focus:outline-none focus:ring-2 focus:ring-cyan-300/40 sm:right-8 sm:bottom-8 sm:h-14 sm:w-14"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTopButton;
