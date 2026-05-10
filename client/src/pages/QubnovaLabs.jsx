import PageHero from '../components/common/PageHero.jsx';
import GlassCard from '../components/common/GlassCard.jsx';
import CTASection from '../components/common/CTASection.jsx';
import { labs } from '../data/siteData.js';

export default function QubnovaLabs() {
  return <><PageHero eyebrow="Qubnova Labs" title="Where experiments become sellable software." description="Labs is the innovation arm for MVP frameworks, AI experiments, and reusable growth systems." />
  <section className="section-spacing"><div className="container-page grid gap-6 md:grid-cols-3">{labs.map(({ icon: Icon, title, description }, index) => <GlassCard key={title}><div className="flex items-center justify-between"><Icon className="text-aurora-violet dark:text-aurora-cyan" size={42} /><span className="aurora-text text-sm font-black">LAB 0{index + 1}</span></div><h2 className="mt-6 text-2xl font-black text-aurora-ink dark:text-white">{title}</h2><p className="mt-3 leading-7 text-slate-600 dark:text-aurora-slate">{description}</p></GlassCard>)}</div></section><CTASection title="Co-create a lab experiment with Qubnova." /></>;
}
