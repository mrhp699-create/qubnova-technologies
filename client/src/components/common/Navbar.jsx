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
  const navClass = ({ isActive }) => `rounded-full px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-aurora-cyan/10 text-aurora-violet dark:text-aurora-cyan' : 'text-slate-700 hover:text-aurora-violet dark:text-aurora-slate dark:hover:text-white'}`;
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-2xl dark:bg-aurora-midnight/80">
      <nav className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-aurora-linear text-lg font-black text-white shadow-aurora">Q</span>
          <span><span className="block text-lg font-black leading-none text-aurora-ink dark:text-white">Qubnova</span><span className="text-xs font-semibold uppercase tracking-[0.22em] text-aurora-violet dark:text-aurora-cyan">Technologies</span></span>
        </Link>
        <div className="hidden items-center gap-1 xl:flex">{links.map(([label, path]) => <NavLink key={path} to={path} className={navClass}>{label}</NavLink>)}</div>
        <div className="hidden items-center gap-3 xl:flex"><ThemeToggle /><GradientButton to="/contact" className="py-2.5">Start</GradientButton></div>
        <div className="flex items-center gap-2 xl:hidden"><ThemeToggle /><button onClick={() => setOpen((v) => !v)} className="rounded-full p-2 text-aurora-ink dark:text-white" aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></div>
      </nav>
      {open && <div className="border-t border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-aurora-midnight xl:hidden"><div className="container-page grid gap-2">{links.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className={navClass}>{label}</NavLink>)}<GradientButton to="/contact" onClick={() => setOpen(false)} className="mt-2">Start a project</GradientButton></div></div>}
    </header>
  );
}
