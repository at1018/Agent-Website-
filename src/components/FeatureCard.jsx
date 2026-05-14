import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

function FeatureCard({ title, description, icon, index }) {
  const IconComponent = Icons[icon] || Icons.Shield;
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#09101e]/80 p-4 sm:p-6 shadow-soft backdrop-blur-xl"
    >
      <div className="absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-sky-500 opacity-70 transition-all duration-500 group-hover:h-1.5" />
      <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 text-cyan-300 shadow-[0_0_40px_rgba(99,179,255,0.08)]">
        <IconComponent className="h-6 w-6 sm:h-7 sm:w-7" />
      </div>
      <h3 className="mt-4 sm:mt-6 text-base sm:text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">{description}</p>
      <span className="mt-4 sm:mt-6 inline-flex rounded-full bg-cyan-400/5 px-2 sm:px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.24em] text-cyan-300">Feature {index}</span>
    </motion.div>
  );
}

export default FeatureCard;
