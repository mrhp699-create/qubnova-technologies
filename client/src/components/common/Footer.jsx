import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const columns = [
  { title: 'Company', links: [['About', '/about'], ['Services', '/services'], ['Qubnova Labs', '/qubnova-labs'], ['Pricing', '/pricing']] },
  { title: 'Explore', links: [['Projects', '/projects'], ['AI Demo Lab', '/ai-demo-lab'], ['Design Portfolio', '/design-portfolio'], ['Blog', '/blog']] },
  { title: 'Admin', links: [['Admin Login', '/admin/login'], ['Dashboard', '/admin/dashboard']] },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-aurora-obsidian text-white">
      <div className="absolute inset-0 bg-premium-mesh opacity-70" />
      <div className="absolute inset-0 mesh-grid opacity-20" />
      <div className="container-page relative z-10 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aurora-linear bg-[length:220%_220%] font-black text-white shadow-aurora animate-gradient-pan">Q</span>
              <span className="text-xl font-black tracking-[-0.04em]">Qubnova Technologies</span>
            </Link>
            <p className="mt-5 max-w-md leading-7 text-aurora-slate">A premium software house for AI-powered products, SaaS platforms, automation, and standout digital experiences founded by Moaz Saeed.</p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => <a key={i} href="/contact" className="premium-border rounded-full bg-white/10 p-2.5 text-aurora-slate transition hover:-translate-y-1 hover:text-white"><Icon size={18} /></a>)}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => <div key={column.title}><h3 className="font-black text-white">{column.title}</h3><div className="mt-4 grid gap-3">{column.links.map(([label, path]) => <Link key={path} to={path} className="text-sm font-semibold text-aurora-slate transition hover:translate-x-1 hover:text-aurora-cyan">{label}</Link>)}</div></div>)}
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-aurora-slate sm:flex-row"><p>© {new Date().getFullYear()} Qubnova Technologies. All rights reserved.</p><p>Built with Aurora Luxury Theme · #00D4FF × #7C3AED × Gold</p></div>
      </div>
    </footer>
  );
}
