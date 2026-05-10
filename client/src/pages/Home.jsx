import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, CircleDotDashed, Sparkles, Zap } from 'lucide-react';
import AnimatedCounter from '../components/common/AnimatedCounter.jsx';
import CTASection from '../components/common/CTASection.jsx';
import Card from '../components/common/Card.jsx';
import GradientButton from '../components/common/GradientButton.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import TechStackBadges from '../components/common/TechStackBadges.jsx';
import { projects, services, stats } from '../data/siteData.js';

const trustSignals = ['Strategy-led builds', 'MERN + AI expertise', 'Launch-ready delivery'];

export default function Home() {
  return <>
    <section className="relative isolate overflow-hidden bg-aurora-obsidian pt-32 text-white">
      <div className="absolute inset-0 bg-premium-mesh opacity-95" />
      <div className="absolute inset-0 mesh-grid opacity-25" />
      <div className="absolute left-[-10rem] top-24 h-[34rem] w-[34rem] rounded-full bg-aurora-cyan/20 blur-3xl animate-float" />
      <div className="absolute right-[-12rem] top-36 h-[38rem] w-[38rem] rounded-full bg-aurora-violet/25 blur-3xl animate-float-slow" />
      <div className="container-page relative z-10 grid min-h-[820px] items-center gap-14 py-20 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="premium-border inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-aurora-cyan backdrop-blur-xl"><Sparkles size={16} /> AI software house for ambitious founders</span>
          <h1 className="mt-7 max-w-5xl text-5xl font-black tracking-[-0.065em] sm:text-6xl lg:text-7xl xl:text-8xl">Build products that feel like the <span className="aurora-text">future.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-aurora-slate">Qubnova Technologies designs and engineers premium SaaS platforms, AI copilots, automation systems, and high-converting digital experiences with a studio-grade visual finish.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><GradientButton to="/contact">Book a discovery call</GradientButton><GradientButton to="/projects" className="bg-white/10 shadow-none">View work</GradientButton></div>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">{trustSignals.map((item) => <span key={item} className="premium-border flex items-center gap-2 rounded-2xl bg-white/[0.08] px-4 py-3 text-sm font-semibold text-aurora-slate backdrop-blur-xl"><CheckCircle2 className="text-aurora-green" size={18} />{item}</span>)}</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.94, rotateY: -8 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ delay: 0.12, duration: 0.65 }} className="relative [perspective:1000px]">
          <div className="absolute -left-8 top-12 z-20 hidden rounded-3xl border border-white/15 bg-white/[0.12] p-4 shadow-aurora backdrop-blur-xl animate-float lg:block"><p className="text-xs font-bold uppercase tracking-[0.2em] text-aurora-slate">Velocity</p><p className="mt-1 text-2xl font-black">6-week MVP</p></div>
          <div className="absolute -right-4 bottom-12 z-20 hidden rounded-3xl border border-white/15 bg-white/[0.12] p-4 shadow-violet backdrop-blur-xl animate-float-slow lg:block"><p className="text-xs font-bold uppercase tracking-[0.2em] text-aurora-slate">Signal</p><p className="mt-1 text-2xl font-black">98% delight</p></div>
          <div className="premium-border glass-panel relative overflow-hidden rounded-[2.5rem] p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-aurora-violet/10" />
            <div className="relative rounded-[2rem] border border-white/10 bg-aurora-obsidian p-5 shadow-inner-glow">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-aurora-green" /></div>
                <span className="rounded-full bg-aurora-cyan/10 px-3 py-1 text-xs font-black text-aurora-cyan">QUBNOVA OS</span>
              </div>
              <div className="grid gap-4">
                {services.slice(0, 4).map(({ icon: Icon, title }, index) => <div key={title} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-aurora-cyan/50 hover:bg-white/[0.08]"><span className="grid h-12 w-12 place-items-center rounded-xl bg-aurora-linear bg-[length:220%_220%] shadow-glow animate-gradient-pan"><Icon size={20} /></span><div><p className="font-black">{title}</p><p className="text-sm text-aurora-slate">Sprint {index + 1} · launch block</p></div><ArrowRight className="ml-auto text-aurora-cyan transition group-hover:translate-x-1" size={18} /></div>)}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {['AI', 'UX', 'API'].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center"><CircleDotDashed className="mx-auto text-aurora-gold" size={18} /><p className="mt-2 text-xs font-black tracking-[0.2em] text-aurora-slate">{item}</p></div>)}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="container-page relative z-10 grid gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-4">{stats.map((stat) => <AnimatedCounter key={stat.label} {...stat} />)}</div>
    </section>
    <section className="section-spacing bg-aurora-snow/80 dark:bg-aurora-midnight/80"><div className="container-page"><SectionHeading eyebrow="Services" title="Everything you need to launch, automate, and scale." description="From idea validation to cloud deployment, Qubnova blends engineering discipline with a premium product design mindset." /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, title, description }) => <Card key={title}><span className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow"><Icon size={28} /></span><h3 className="mt-5 text-xl font-black text-aurora-ink dark:text-white">{title}</h3><p className="mt-3 leading-7 text-slate-600 dark:text-aurora-slate">{description}</p></Card>)}</div></div></section>
    <section className="section-spacing"><div className="container-page"><SectionHeading eyebrow="Featured work" title="Proof-led product experiences." description="Every case study is presented like an investor-ready product story: sharp visuals, measurable outcomes, and a credible build narrative." /><div className="grid gap-6 lg:grid-cols-3">{projects.map((project) => <Card key={project.slug} className="p-0"><div className="image-polish h-60 rounded-b-none"><img src={project.image} alt={project.title} /></div><div className="p-6"><p className="text-sm font-black uppercase tracking-[0.2em] text-aurora-violet dark:text-aurora-cyan">{project.category}</p><h3 className="mt-2 text-2xl font-black text-aurora-ink dark:text-white">{project.title}</h3><p className="mt-3 text-slate-600 dark:text-aurora-slate">{project.summary}</p><GradientButton to={`/projects/${project.slug}`} className="mt-5 py-2.5">Case study</GradientButton></div></Card>)}</div></div></section>
    <section className="section-spacing bg-white/45 dark:bg-white/[0.03]"><div className="container-page"><SectionHeading eyebrow="Stack" title="Modern tools. Durable architecture." /><TechStackBadges /></div></section>
    <section className="py-10"><div className="container-page"><div className="premium-border flex flex-col items-center justify-between gap-4 rounded-[2rem] bg-white/70 p-5 shadow-luxury backdrop-blur-2xl dark:bg-white/[0.06] sm:flex-row"><div className="flex items-center gap-3"><Zap className="text-aurora-gold" /><p className="font-black text-aurora-ink dark:text-white">Design system upgraded for luxury SaaS positioning.</p></div><p className="text-sm font-semibold text-slate-600 dark:text-aurora-slate">Aurora mesh · glass panels · motion-first interactions</p></div></div></section>
    <CTASection />
  </>;
}
