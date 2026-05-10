import { useParams } from 'react-router-dom';
import EmptyState from '../components/common/EmptyState.jsx';
import PageHero from '../components/common/PageHero.jsx';
import CTASection from '../components/common/CTASection.jsx';
import TechStackBadges from '../components/common/TechStackBadges.jsx';
import { projects } from '../data/siteData.js';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <main className="pt-32"><div className="container-page section-spacing"><EmptyState title="Project not found" actionLabel="Back to projects" actionTo="/projects" /></div></main>;
  return <><PageHero eyebrow={project.category} title={project.title} description={project.summary} />
  <section className="section-spacing"><div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"><img src={project.image} alt={project.title} className="rounded-[2rem] object-cover shadow-violet" /><div className="rounded-[2rem] border border-slate-200 p-8 dark:border-white/10"><h2 className="text-3xl font-black text-aurora-ink dark:text-white">Outcome</h2><p className="mt-4 text-2xl font-bold text-aurora-green">{project.outcome}</p><p className="mt-5 leading-8 text-slate-600 dark:text-aurora-slate">We combined product strategy, polished UI, resilient backend architecture, and automation-first workflows to move the client from scattered processes to a unified digital platform.</p><div className="mt-8"><TechStackBadges items={project.stack} /></div></div></div></section><CTASection title="Want results like this?" /></>;
}
