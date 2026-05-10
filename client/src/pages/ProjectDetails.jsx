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
  <section className="section-spacing"><div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"><div className="image-polish min-h-[420px]"><img src={project.image} alt={project.title} /></div><div className="premium-border rounded-[2rem] bg-white/78 p-8 shadow-luxury backdrop-blur-2xl dark:bg-white/[0.07]"><p className="text-sm font-black uppercase tracking-[0.2em] text-aurora-violet dark:text-aurora-cyan">Outcome</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-aurora-ink dark:text-white">{project.outcome}</h2><p className="mt-5 leading-8 text-slate-600 dark:text-aurora-slate">We combined product strategy, polished UI, resilient backend architecture, and automation-first workflows to move the client from scattered processes to a unified digital platform.</p><div className="mt-8"><TechStackBadges items={project.stack} /></div></div></div></section><CTASection title="Want results like this?" /></>;
}
