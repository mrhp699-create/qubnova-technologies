import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const columns = [
  { title: 'Company', links: [['About', '/about'], ['Services', '/services'], ['Qubnova Labs', '/qubnova-labs'], ['Pricing', '/pricing']] },
  { title: 'Explore', links: [['Projects', '/projects'], ['AI Demo Lab', '/ai-demo-lab'], ['Design Portfolio', '/design-portfolio'], ['Blog', '/blog']] },
  { title: 'Admin', links: [['Admin Login', '/admin/login'], ['Dashboard', '/admin/dashboard']] },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-aurora-midnight">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_2fr]">
          <div><Link to="/" className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-aurora-linear font-black text-white">Q</span><span className="text-xl font-black text-aurora-ink dark:text-white">Qubnova Technologies</span></Link><p className="mt-5 max-w-md leading-7 text-slate-600 dark:text-aurora-slate">A premium software house for AI-powered products, SaaS platforms, automation, and standout digital experiences founded by Moaz Saeed.</p><div className="mt-6 flex gap-3">{[Twitter, Linkedin, Github, Mail].map((Icon, i) => <a key={i} href="/contact" className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-aurora-cyan hover:text-aurora-violet dark:border-white/10 dark:text-aurora-slate"><Icon size={18} /></a>)}</div></div>
          <div className="grid gap-8 sm:grid-cols-3">{columns.map((column) => <div key={column.title}><h3 className="font-bold text-aurora-ink dark:text-white">{column.title}</h3><div className="mt-4 grid gap-3">{column.links.map(([label, path]) => <Link key={path} to={path} className="text-sm text-slate-600 transition hover:text-aurora-violet dark:text-aurora-slate dark:hover:text-white">{label}</Link>)}</div></div>)}</div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-aurora-slate sm:flex-row"><p>© {new Date().getFullYear()} Qubnova Technologies. All rights reserved.</p><p>Built with Aurora Theme · #00D4FF × #7C3AED</p></div>
      </div>
    </footer>
  );
}
