import PageHero from '../components/common/PageHero.jsx';
import Card from '../components/common/Card.jsx';
import EmptyState from '../components/common/EmptyState.jsx';

const metrics = ['Leads', 'Projects', 'Blog posts', 'Lab demos'];

export default function AdminDashboard() {
  return <><PageHero eyebrow="Dashboard" title="Qubnova command center." description="Manage leads, projects, portfolio entries, content, and future SaaS modules from one workspace." />
  <section className="section-spacing"><div className="container-page"><div className="grid gap-5 md:grid-cols-4">{metrics.map((metric, index) => <Card key={metric}><p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-aurora-slate">{metric}</p><h2 className="aurora-text mt-3 text-5xl font-black">{(index + 1) * 8}</h2><p className="mt-2 text-sm font-semibold text-slate-500 dark:text-aurora-slate">Live module placeholder</p></Card>)}</div><div className="mt-8 premium-border rounded-[2rem] bg-white/75 p-6 shadow-luxury backdrop-blur-xl dark:bg-white/[0.06]"><EmptyState title="CMS modules coming next" description="Connect this dashboard to your MERN backend to manage projects, posts, demos, and inquiries." /></div></div></section></>;
}
