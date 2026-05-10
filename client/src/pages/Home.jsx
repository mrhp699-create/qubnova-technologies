import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedCounter from '../components/common/AnimatedCounter.jsx';
import CTASection from '../components/common/CTASection.jsx';
import Card from '../components/common/Card.jsx';
import GradientButton from '../components/common/GradientButton.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import TechStackBadges from '../components/common/TechStackBadges.jsx';
import { projects, services, stats } from '../data/siteData.js';

export default function Home() {
  return <>
    <section className="relative overflow-hidden bg-aurora-midnight bg-aurora-radial pt-32 text-white">
      <div className="container-page grid min-h-[720px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <span className="rounded-full border border-aurora-cyan/30 bg-white/10 px-4 py-2 text-sm font-semibold text-aurora-cyan">AI software house for ambitious founders</span>
          <h1 className="mt-7 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">Build products that feel like the future.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-aurora-slate">Qubnova Technologies designs and engineers premium SaaS platforms, AI copilots, automation systems, and high-converting digital experiences.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><GradientButton to="/contact">Book a discovery call</GradientButton><GradientButton to="/projects" className="bg-white/10 shadow-none">View work</GradientButton></div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">{['Strategy-led builds', 'MERN + AI expertise', 'Launch-ready delivery'].map((item) => <span key={item} className="flex items-center gap-2 text-sm text-aurora-slate"><CheckCircle2 className="text-aurora-green" size={18} />{item}</span>)}</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-panel rounded-[2rem] p-4">
          <div className="rounded-[1.5rem] bg-aurora-ink p-5"><div className="mb-5 flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-aurora-green" /></div><div className="grid gap-4">{services.slice(0, 4).map(({ icon: Icon, title }, index) => <div key={title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"><span className="grid h-11 w-11 place-items-center rounded-xl bg-aurora-linear"><Icon size={20} /></span><div><p className="font-bold">{title}</p><p className="text-sm text-aurora-slate">Sprint {index + 1} · launch block</p></div><ArrowRight className="ml-auto text-aurora-cyan" size={18} /></div>)}</div></div>
        </motion.div>
      </div>
      <div className="container-page grid gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-4">{stats.map((stat) => <AnimatedCounter key={stat.label} {...stat} />)}</div>
    </section>
    <section className="section-spacing bg-aurora-snow dark:bg-aurora-midnight"><div className="container-page"><SectionHeading eyebrow="Services" title="Everything you need to launch, automate, and scale." description="From idea validation to cloud deployment, Qubnova blends engineering discipline with a premium product design mindset." /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, title, description }) => <Card key={title}><Icon className="text-aurora-violet dark:text-aurora-cyan" size={34} /><h3 className="mt-5 text-xl font-bold text-aurora-ink dark:text-white">{title}</h3><p className="mt-3 leading-7 text-slate-600 dark:text-aurora-slate">{description}</p></Card>)}</div></div></section>
    <section className="section-spacing"><div className="container-page"><SectionHeading eyebrow="Featured work" title="Proof-led product experiences." /><div className="grid gap-6 lg:grid-cols-3">{projects.map((project) => <Card key={project.slug} className="overflow-hidden p-0"><img src={project.image} alt={project.title} className="h-56 w-full object-cover" /><div className="p-6"><p className="text-sm font-semibold text-aurora-violet dark:text-aurora-cyan">{project.category}</p><h3 className="mt-2 text-2xl font-bold text-aurora-ink dark:text-white">{project.title}</h3><p className="mt-3 text-slate-600 dark:text-aurora-slate">{project.summary}</p><GradientButton to={`/projects/${project.slug}`} className="mt-5 py-2.5">Case study</GradientButton></div></Card>)}</div></div></section>
    <section className="section-spacing bg-slate-50 dark:bg-white/[0.03]"><div className="container-page"><SectionHeading eyebrow="Stack" title="Modern tools. Durable architecture." /><TechStackBadges /></div></section>
    <CTASection />
  </>;
}
