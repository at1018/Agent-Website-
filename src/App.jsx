import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  return (
    <RootLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </RootLayout>
  );
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

export default App;
