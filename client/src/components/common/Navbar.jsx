import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import GradientButton from './GradientButton.jsx';
import ThemeToggle from './ThemeToggle.jsx';

const links = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Projects', '/projects'], ['AI Lab', '/ai-demo-lab'], ['Design', '/design-portfolio'], ['Pricing', '/pricing'], ['Blog', '/blog'], ['Contact', '/contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navClass = ({ isActive }) => `relative rounded-full px-3 py-2 text-sm font-black transition duration-300 ${isActive ? 'bg-aurora-cyan/[0.12] text-aurora-violet shadow-sm dark:text-aurora-cyan' : 'text-slate-700 hover:bg-white/70 hover:text-aurora-violet dark:text-aurora-slate dark:hover:bg-white/10 dark:hover:text-white'}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav className="container-page premium-border flex h-20 items-center justify-between gap-4 rounded-full bg-white/[0.82] shadow-luxury backdrop-blur-2xl dark:bg-aurora-obsidian/[0.72]">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aurora-linear bg-[length:220%_220%] text-lg font-black text-white shadow-aurora animate-gradient-pan transition group-hover:rotate-6">Q</span>
          <span>
            <span className="block text-lg font-black leading-none tracking-[-0.03em] text-aurora-ink dark:text-white">Qubnova</span>
            <span className="text-[0.66rem] font-black uppercase tracking-[0.28em] text-aurora-violet dark:text-aurora-cyan">Technologies</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 xl:flex">
          {links.map(([label, path]) => <NavLink key={path} to={path} className={navClass}>{label}</NavLink>)}
        </div>
        <div className="hidden items-center gap-3 xl:flex"><ThemeToggle /><GradientButton to="/contact" className="py-2.5">Start</GradientButton></div>
        <div className="flex items-center gap-2 xl:hidden"><ThemeToggle /><button onClick={() => setOpen((v) => !v)} className="rounded-full bg-white/70 p-2 text-aurora-ink shadow-sm dark:bg-white/10 dark:text-white" aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></div>
      </nav>
      {open && (
        <div className="container-page mt-3 xl:hidden">
          <div className="premium-border grid gap-2 rounded-[2rem] bg-white/[0.92] p-4 shadow-luxury backdrop-blur-2xl dark:bg-aurora-obsidian/[0.92]">
            {links.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className={navClass}>{label}</NavLink>)}
            <GradientButton to="/contact" onClick={() => setOpen(false)} className="mt-2">Start a project</GradientButton>
          </div>
        </div>
      )}
    </header>
  );
}
