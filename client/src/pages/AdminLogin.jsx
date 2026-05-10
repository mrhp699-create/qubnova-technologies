import PageHero from '../components/common/PageHero.jsx';
import GradientButton from '../components/common/GradientButton.jsx';

export default function AdminLogin() {
  return <><PageHero eyebrow="Admin" title="Secure Qubnova admin access." description="A polished login screen ready to connect to authentication and dashboard APIs." />
  <section className="section-spacing"><div className="container-page max-w-md"><form className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-violet dark:border-white/10 dark:bg-white/10"><label className="text-sm font-bold">Email</label><input className="mt-2 w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-3 dark:border-white/10" placeholder="admin@qubnova.tech" /><label className="mt-5 block text-sm font-bold">Password</label><input type="password" className="mt-2 w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-3 dark:border-white/10" placeholder="••••••••" /><GradientButton type="button" to="/admin/dashboard" className="mt-6 w-full">Login</GradientButton></form></div></section></>;
}
