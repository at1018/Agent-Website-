import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/#workflow' },
  { label: 'Architecture', href: '/#architecture' },
  { label: 'Vision', href: '/#vision' },
  { label: 'Contact', href: '/#contact' },
];

function NavBar({ scrollY }) {
  const [open, setOpen] = useState(false);
  const isScrolled = scrollY > 16;

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-[#080b18]/90 backdrop-blur-xl shadow-soft' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/25 ring-1 ring-white/10 backdrop-blur-xl">
            <Sparkles className="h-5 w-5 text-cyan-300" />
          </span>
          <div>
            <p className="font-semibold tracking-[0.24em] text-sm uppercase text-cyan-300">NovaMind</p>
            <p className="text-xs text-zinc-400">Adaptive AI Infrastructure</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-zinc-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="/#contact" className="inline-flex items-center justify-center rounded-3xl border border-cyan-300/20 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20 hover:text-white">
            Request Demo
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#060713]/95 backdrop-blur-xl">
          <div className="space-y-3 px-6 py-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 text-base font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="/#contact" className="block rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-3 text-base font-semibold text-cyan-100 transition hover:bg-cyan-400/20 hover:text-white">
              Request Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
