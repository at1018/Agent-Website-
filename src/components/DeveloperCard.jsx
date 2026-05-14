import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

function DeveloperCard({ name, role, linkedin, github }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-[20px] sm:rounded-[32px] border border-white/10 bg-[#08101e]/90 p-4 sm:p-6 shadow-soft backdrop-blur-2xl"
    >
      <div className="absolute right-4 sm:right-6 top-4 sm:top-6 h-12 w-12 sm:h-16 sm:w-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20" />
      <div className="relative z-10 flex items-center gap-3 sm:gap-4">
        <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 text-cyan-300 ring-1 ring-white/10 text-xs sm:text-sm font-semibold">{name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</div>
        <div className="min-w-0">
          <p className="text-base sm:text-lg font-semibold text-white truncate">{name}</p>
          <p className="text-xs sm:text-sm text-slate-400 truncate">{role}</p>
        </div>
      </div>
      <div className="relative z-10 mt-4 sm:mt-6 flex items-center gap-3 text-cyan-300">
        <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition">
          <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>
        <a href={github} target="_blank" rel="noreferrer" className="hover:text-white transition">
          <Github className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>
      </div>
    </motion.div>
  );
}

export default DeveloperCard;
