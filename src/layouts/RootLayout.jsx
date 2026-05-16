import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import AnimatedBackground from '../components/AnimatedBackground';
import ScrollToTopButton from '../components/ScrollToTopButton';

function RootLayout({ children }) {
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden text-white">
      <AnimatedBackground />
      <NavBar scrollY={scrollY} />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="relative z-10 overflow-hidden"
      >
        {children}
      </motion.main>
      <ScrollToTopButton />
    </div>
  );
}

export default RootLayout;
