import PageHero from '../components/common/PageHero.jsx';
import Card from '../components/common/Card.jsx';
import GradientButton from '../components/common/GradientButton.jsx';
import { projects } from '../data/siteData.js';

export default function Projects() {
  return <><PageHero eyebrow="Projects" title="Case studies across SaaS, commerce, and AI automation." description="A showcase of the systems Qubnova can design, build, and scale for ambitious clients." />
  <section className="section-spacing"><div className="container-page grid gap-7 lg:grid-cols-3">{projects.map((project) => <Card key={project.slug} className="p-0"><div className="image-polish h-72 rounded-b-none"><img src={project.image} alt={project.title} /><div className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-aurora-violet backdrop-blur-xl dark:bg-aurora-obsidian/[0.80] dark:text-aurora-cyan">{project.category}</div></div><div className="p-6"><h2 className="text-2xl font-black text-aurora-ink dark:text-white">{project.title}</h2><p className="mt-3 text-slate-600 dark:text-aurora-slate">{project.summary}</p><p className="mt-5 rounded-2xl border border-aurora-green/20 bg-aurora-green/10 px-4 py-3 text-sm font-black text-aurora-green">{project.outcome}</p><GradientButton to={`/projects/${project.slug}`} className="mt-5 py-2.5">Read details</GradientButton></div></Card>)}</div></section></>;
}
