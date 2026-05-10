import PageHero from '../components/common/PageHero.jsx';
import Card from '../components/common/Card.jsx';
import GradientButton from '../components/common/GradientButton.jsx';
import { projects } from '../data/siteData.js';

export default function Projects() {
  return <><PageHero eyebrow="Projects" title="Case studies across SaaS, commerce, and AI automation." description="A showcase of the systems Qubnova can design, build, and scale for ambitious clients." />
  <section className="section-spacing"><div className="container-page grid gap-7 lg:grid-cols-3">{projects.map((project) => <Card key={project.slug} className="overflow-hidden p-0"><img src={project.image} alt={project.title} className="h-64 w-full object-cover" /><div className="p-6"><p className="font-semibold text-aurora-violet dark:text-aurora-cyan">{project.category}</p><h2 className="mt-2 text-2xl font-black text-aurora-ink dark:text-white">{project.title}</h2><p className="mt-3 text-slate-600 dark:text-aurora-slate">{project.summary}</p><p className="mt-4 rounded-2xl bg-aurora-green/10 px-4 py-3 text-sm font-bold text-aurora-green">{project.outcome}</p><GradientButton to={`/projects/${project.slug}`} className="mt-5 py-2.5">Read details</GradientButton></div></Card>)}</div></section></>;
}
