function Footer() {
  return (
    <footer className="border-t border-white/10 pt-12 pb-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-3 sm:px-6 lg:px-0">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">AGI</p>
            <p className="text-lg leading-8 text-slate-300">
              Self-evolving Agent General Intelligence for enterprises that demand adaptive intelligence, secure automation, and controlled capability expansion.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a href="#workflow" className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-white">How It Works</a>
            <a href="#architecture" className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-white">Architecture</a>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">© 2026 AGI. Self-Evolving Agent General Intelligence.</p>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
