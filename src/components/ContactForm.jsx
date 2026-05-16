import { motion } from 'framer-motion';

function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="grid gap-5 rounded-[32px] border border-white/10 bg-[#08101f]/90 p-8 shadow-soft backdrop-blur-xl"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300">
          <span>Name</span>
          <input type="text" placeholder="Avery Chen" className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20" />
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          <span>Email</span>
          <input type="email" placeholder="hello@agi.ai" className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20" />
        </label>
      </div>
      <label className="space-y-2 text-sm text-slate-300">
        <span>Message</span>
        <textarea rows="5" placeholder="Build Agent General Intelligence for my enterprise." className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20" />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-400">We’ll route your request to the executive team and share a product roadmap preview.</p>
        <button type="submit" className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">
          Request early access
        </button>
      </div>
    </motion.form>
  );
}

export default ContactForm;
