import { CheckCircle2 } from 'lucide-react';
import PageHero from '../components/common/PageHero.jsx';
import Card from '../components/common/Card.jsx';
import GradientButton from '../components/common/GradientButton.jsx';
import { pricing } from '../data/siteData.js';

export default function Pricing() {
  return <><PageHero eyebrow="Pricing" title="Flexible packages for launch, scale, and AI transformation." description="Transparent starting points. Every scope is refined around outcomes, complexity, and timeline." />
  <section className="section-spacing"><div className="container-page grid gap-6 lg:grid-cols-3">{pricing.map((plan) => <Card key={plan.name} className={plan.featured ? 'bg-aurora-obsidian text-white shadow-violet dark:bg-white/[0.10]' : ''}><p className="text-sm font-black uppercase tracking-[0.22em] text-aurora-violet dark:text-aurora-cyan">{plan.name}</p><h2 className={`mt-4 text-5xl font-black tracking-[-0.05em] ${plan.featured ? 'text-white' : 'text-aurora-ink dark:text-white'}`}>{plan.price}</h2><p className={`mt-3 leading-7 ${plan.featured ? 'text-aurora-slate' : 'text-slate-600 dark:text-aurora-slate'}`}>{plan.description}</p><ul className="mt-7 space-y-3">{plan.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm font-semibold"><CheckCircle2 className="text-aurora-green" size={18} /> {feature}</li>)}</ul><GradientButton to="/contact" className="mt-8 w-full">Choose plan</GradientButton></Card>)}</div></section></>;
}
