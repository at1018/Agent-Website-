import { motion } from 'framer-motion';

function About() {
  return (
    <div className="px-6 pb-24 pt-[120px] sm:px-8">
      <div className="mx-auto max-w-6xl space-y-16">
        <section className="rounded-[36px] border border-white/10 bg-[#08101f]/90 p-10 shadow-soft backdrop-blur-xl">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-white">
              A New Category of Intelligence: Infrastructure that Learns to Build Itself.
            </h1>
            <p className="text-lg leading-8 text-slate-300 max-w-4xl">
              Most AI is static—it is only as good as the day it was programmed. AGI is a Self-Evolving Operating System designed to identify its own limitations and build the tools required to overcome them. We don't just solve today's problems; we build the architecture to solve tomorrow's.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }} className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6 rounded-[32px] border border-white/10 bg-[#09101f]/90 p-8">
              <h3 className="text-xl font-semibold text-white">From Cost Center to Appreciating Asset</h3>
              <p className="text-base leading-8 text-slate-300">Traditional AI projects are 'Cost Centers'—they require endless maintenance and expensive developers to update. AGI is an Appreciating Asset. Because it identifies its own 'Capability Gaps' and builds its own tools, the system actually becomes more efficient and more valuable the more you use it.</p>
            </div>
            <div className="space-y-6 rounded-[32px] border border-white/10 bg-[#09101f]/90 p-8">
              <h3 className="text-xl font-semibold text-white">The End of the 'Privacy vs. Power' Trade-off</h3>
              <p className="text-base leading-8 text-slate-300">We believe a company's intelligence should stay within its walls. AGI is built to run entirely On-System. You get the power of the world's most advanced AI evolution without ever sending a single byte of proprietary data to a public cloud.</p>
            </div>
          </motion.div>
        </section>
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[36px] border border-white/10 bg-[#08101f]/90 p-8 shadow-soft backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-white">Architecture for Growth</h3>
          <div className="mt-8 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold text-white">The Self-Healing Core</p>
              <p className="mt-2 text-sm text-slate-300">Instead of crashing when it hits a new task, AGI analyzes the requirement and triggers a 'Tool-Forging' workflow.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold text-white">Autonomous Gap Remediation</p>
              <p className="mt-2 text-sm text-slate-300">The system automatically specs out the technical requirements for missing integrations (CRMs, ERPs, APIs), reducing R&D time by 90%.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold text-white">Human-in-the-Loop Sovereignty</p>
              <p className="mt-2 text-sm text-slate-300">We bridge the gap between AI autonomy and Enterprise security. The system proposes growth; you maintain 100% control through an intuitive approval gateway.</p>
            </div>
          </div>
        </section>
          <div className="rounded-[36px] border border-white/10 bg-[#08101f]/90 p-8 shadow-soft backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">The Roadmap to Autonomy</h3>
            <div className="mt-8 space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                  <span>Phase 1</span>
                  <span className="text-slate-400">Current</span>
                </div>
                <p className="mt-3 font-semibold text-white">Autonomous Tool Forging</p>
                <p className="mt-2 text-sm text-slate-300">Enabling the agent to write and deploy its own modular connectors to standard business software.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                  <span>Phase 2</span>
                  <span className="text-slate-400">Next</span>
                </div>
                <p className="mt-3 font-semibold text-white">Neural Mesh Coordination</p>
                <p className="mt-2 text-sm text-slate-300">Connecting multiple specialized agents into one 'Brain' that shares tools across your entire company.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                  <span>Phase 3</span>
                  <span className="text-slate-400">Future</span>
                </div>
                <p className="mt-3 font-semibold text-white">ROI Optimization Engine</p>
                <p className="mt-2 text-sm text-slate-300">Automatically switching between large and small models to ensure every task is completed at the lowest possible cost.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
