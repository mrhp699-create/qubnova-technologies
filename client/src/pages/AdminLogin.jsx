import { LockKeyhole } from 'lucide-react';
import PageHero from '../components/common/PageHero.jsx';
import GradientButton from '../components/common/GradientButton.jsx';

export default function AdminLogin() {
  return <><PageHero eyebrow="Admin" title="Secure Qubnova admin access." description="A polished login screen ready to connect to authentication and dashboard APIs." />
  <section className="section-spacing"><div className="container-page max-w-md"><form className="premium-border rounded-[2rem] bg-white/[0.82] p-8 shadow-luxury backdrop-blur-2xl dark:bg-white/[0.07]"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow"><LockKeyhole /></span><label className="mt-6 block text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-aurora-slate">Email</label><input className="input-luxury mt-2" placeholder="admin@qubnova.tech" /><label className="mt-5 block text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-aurora-slate">Password</label><input type="password" className="input-luxury mt-2" placeholder="••••••••" /><GradientButton to="/admin/dashboard" className="mt-6 w-full">Login</GradientButton></form></div></section></>;
}
