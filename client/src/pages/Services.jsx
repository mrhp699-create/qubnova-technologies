import PageHero from '../components/common/PageHero.jsx';
import Card from '../components/common/Card.jsx';
import CTASection from '../components/common/CTASection.jsx';
import { services } from '../data/siteData.js';

export default function Services() {
  return <><PageHero eyebrow="Services" title="Full-stack execution for SaaS, AI, automation, and design." description="Choose focused delivery pods for strategy, product design, frontend, backend, AI workflows, and post-launch iteration." />
  <section className="section-spacing"><div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, title, description }) => <Card key={title}><Icon className="text-aurora-violet dark:text-aurora-cyan" size={38} /><h2 className="mt-5 text-2xl font-bold text-aurora-ink dark:text-white">{title}</h2><p className="mt-4 leading-7 text-slate-600 dark:text-aurora-slate">{description}</p><ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-aurora-slate"><li>• Discovery and technical roadmap</li><li>• Responsive implementation</li><li>• Deployment and handoff</li></ul></Card>)}</div></section><CTASection title="Need a custom service mix?" /></>;
}
