import PageHero from '../components/common/PageHero.jsx';
import Card from '../components/common/Card.jsx';
import GradientButton from '../components/common/GradientButton.jsx';
import { pricing } from '../data/siteData.js';

export default function Pricing() {
  return <><PageHero eyebrow="Pricing" title="Flexible packages for launch, scale, and AI transformation." description="Transparent starting points. Every scope is refined around outcomes, complexity, and timeline." />
  <section className="section-spacing"><div className="container-page grid gap-6 lg:grid-cols-3">{pricing.map((plan) => <Card key={plan.name} className={plan.featured ? 'border-aurora-cyan bg-aurora-midnight text-white shadow-violet dark:bg-white/10' : ''}><p className="text-sm font-bold uppercase tracking-[0.2em] text-aurora-violet dark:text-aurora-cyan">{plan.name}</p><h2 className={`mt-4 text-4xl font-black ${plan.featured ? 'text-white' : 'text-aurora-ink dark:text-white'}`}>{plan.price}</h2><p className={`mt-3 ${plan.featured ? 'text-aurora-slate' : 'text-slate-600 dark:text-aurora-slate'}`}>{plan.description}</p><ul className="mt-6 space-y-3">{plan.features.map((feature) => <li key={feature} className="text-sm">✓ {feature}</li>)}</ul><GradientButton to="/contact" className="mt-7 w-full">Choose plan</GradientButton></Card>)}</div></section></>;
}
