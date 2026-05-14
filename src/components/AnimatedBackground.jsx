import { motion } from 'framer-motion';

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-1/4 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/10 via-violet-500/10 to-slate-900/0 blur-3xl"
        animate={{ opacity: [0.65, 0.9, 0.65], y: [0, -14, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-28 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/10 via-fuchsia-400/10 to-transparent blur-3xl"
        animate={{ opacity: [0.45, 0.75, 0.45], x: [0, 24, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 animated-grid opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.05),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.08),_transparent_28%)]" />
    </div>
  );
}

export default AnimatedBackground;
