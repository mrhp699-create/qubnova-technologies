import { Award, Compass, Layers3, ShieldCheck } from 'lucide-react';
import PageHero from '../components/common/PageHero.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import GlassCard from '../components/common/GlassCard.jsx';
import CTASection from '../components/common/CTASection.jsx';

export default function About() {
  const values = [
    ['Clarity before code', Compass],
    ['Premium interfaces', Award],
    ['Measurable business outcomes', Layers3],
    ['Secure scalable foundations', ShieldCheck],
  ];
  return <><PageHero eyebrow="About" title="A product-minded technology partner for the AI era." description="Qubnova Technologies, founded by Moaz Saeed, helps brands turn complex ideas into elegant, revenue-ready software." />
  <section className="section-spacing"><div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div><SectionHeading align="left" eyebrow="Philosophy" title="We build with strategy, speed, and taste." description="Every engagement starts with the business model, user journey, and operational workflow. Then we ship polished systems that are practical to maintain and ready to grow." /><div className="premium-border rounded-[2rem] bg-white/70 p-6 shadow-luxury backdrop-blur-xl dark:bg-white/[0.06]"><p className="text-sm font-black uppercase tracking-[0.22em] text-aurora-violet dark:text-aurora-cyan">Founder-led delivery</p><p className="mt-3 leading-8 text-slate-600 dark:text-aurora-slate">The visual language is intentionally high-end: cinematic gradients, calm spacing, precise motion, and components that feel ready for premium SaaS buyers.</p></div></div><div className="grid gap-4 sm:grid-cols-2">{values.map(([value, Icon], index) => <GlassCard key={value}><Icon className="text-aurora-violet dark:text-aurora-cyan" size={34} /><span className="aurora-text mt-5 block text-3xl font-black">0{index + 1}</span><h3 className="mt-2 text-xl font-black text-aurora-ink dark:text-white">{value}</h3></GlassCard>)}</div></div></section><CTASection title="Let’s architect your next digital product." /></>;
}
