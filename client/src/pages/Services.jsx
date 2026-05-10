import PageHero from '../components/common/PageHero.jsx';
import Card from '../components/common/Card.jsx';
import CTASection from '../components/common/CTASection.jsx';
import { services } from '../data/siteData.js';

export default function Services() {
  return <><PageHero eyebrow="Services" title="Full-stack execution for SaaS, AI, automation, and design." description="Choose focused delivery pods for strategy, product design, frontend, backend, AI workflows, and post-launch iteration." />
  <section className="section-spacing"><div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, title, description }, index) => <Card key={title}><div className="flex items-start justify-between gap-4"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow"><Icon size={30} /></span><span className="aurora-text text-sm font-black">0{index + 1}</span></div><h2 className="mt-6 text-2xl font-black text-aurora-ink dark:text-white">{title}</h2><p className="mt-4 leading-7 text-slate-600 dark:text-aurora-slate">{description}</p><ul className="mt-6 space-y-3 text-sm font-semibold text-slate-600 dark:text-aurora-slate"><li className="rounded-2xl bg-slate-100/80 px-4 py-3 dark:bg-white/5">Discovery and technical roadmap</li><li className="rounded-2xl bg-slate-100/80 px-4 py-3 dark:bg-white/5">Responsive implementation</li><li className="rounded-2xl bg-slate-100/80 px-4 py-3 dark:bg-white/5">Deployment and handoff</li></ul></Card>)}</div></section><CTASection title="Need a custom service mix?" /></>;
}
