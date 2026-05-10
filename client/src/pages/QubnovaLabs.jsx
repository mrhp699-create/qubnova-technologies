import { ArrowRight, Bot, BrainCircuit, Building2, Cloud, GraduationCap, LayoutDashboard, Lightbulb, Palette, ReceiptText, Rocket, Sparkles, WandSparkles, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero.jsx';
import GlassCard from '../components/common/GlassCard.jsx';
import Button from '../components/common/Button.jsx';

const labProjects = [
  { icon: WandSparkles, title: 'AI Caption Generator', description: 'A practical concept for turning short prompts into clean social content drafts.' },
  { icon: LayoutDashboard, title: 'Website Cost Estimator', description: 'A guided utility for helping founders understand website scope and budget ranges.' },
  { icon: Bot, title: 'Qubnova Assistant Bot', description: 'An experimental assistant concept for FAQs, service guidance, and simple lead support.' },
  { icon: ReceiptText, title: 'Invoice Generator', description: 'A lightweight business tool idea for creating fast, branded invoices and records.' },
  { icon: Building2, title: 'CRM Dashboard', description: 'A future dashboard concept for managing leads, clients, follow-ups, and reports.' },
  { icon: GraduationCap, title: 'AI LMS Concept', description: 'A learning platform experiment for structured lessons, AI help, and progress tracking.' },
  { icon: Workflow, title: 'Business Automation Tools', description: 'Small workflow utilities for reducing repetitive business tasks and manual updates.' },
];

const visionItems = [
  'AI business dashboards',
  'SaaS tools for small businesses',
  'AI content systems',
  'CRM and invoice platforms',
  'Learning platforms',
  'Automation tools',
];

const roadmap = [
  'Portfolio & Freelancing Brand',
  'Client Services',
  'AI Demo Tools',
  'SaaS Product Development',
  'Software House Team',
  'Qubnova Academy',
];

const divisions = [
  { icon: Rocket, title: 'Qubnova Technologies', description: 'The core brand for web, software, automation, and digital product services.' },
  { icon: BrainCircuit, title: 'Qubnova Labs', description: 'The experiment space for testing AI tools, SaaS concepts, and product ideas.' },
  { icon: Palette, title: 'Qubnova Studio', description: 'A future creative division for UI/UX, brand systems, and digital design.' },
  { icon: Cloud, title: 'Qubnova Cloud', description: 'A future direction for cloud tools, hosting workflows, and managed digital systems.' },
  { icon: GraduationCap, title: 'Qubnova Academy', description: 'A learning-focused division planned for courses, resources, and practical tech education.' },
];

export default function QubnovaLabs() {
  return (
    <>
      <PageHero
        eyebrow="Qubnova Labs"
        title="Qubnova Labs"
        description="Qubnova Labs is the innovation space of Qubnova Technologies where AI tools, SaaS ideas, automation systems, and experimental digital products are designed, tested, and improved."
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button to="/ai-demo-lab" className="bg-aurora-linear text-white hover:shadow-glow">
            Open AI Demo Lab <ArrowRight size={18} />
          </Button>
          <span className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-aurora-slate backdrop-blur-xl">
            Experimental ideas • Honest progress • Future SaaS vision
          </span>
        </div>
      </PageHero>

      <section className="section-spacing relative overflow-hidden">
        <div className="floating-orb -left-28 top-24 h-72 w-72 bg-aurora-cyan/20" />
        <div className="floating-orb -right-28 bottom-10 h-80 w-80 bg-aurora-violet/20" />
        <div className="container-page relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="aurora-text text-sm font-black uppercase tracking-[0.35em]">What is Qubnova Labs?</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-aurora-ink dark:text-white sm:text-5xl">
              A practical playground for future-ready digital products.
            </h2>
          </div>
          <GlassCard className="bg-gradient-to-br from-white/90 via-white/70 to-aurora-cyan/10 dark:from-white/[0.1] dark:via-white/[0.07] dark:to-aurora-violet/10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-aurora-linear text-white shadow-glow">
              <Lightbulb size={30} />
            </div>
            <p className="mt-6 text-xl font-bold leading-9 text-aurora-ink dark:text-white">
              Qubnova Labs is where new ideas are converted into practical digital experiments, AI tools, business utilities, and future SaaS products.
            </p>
            <p className="mt-4 leading-7 text-slate-600 dark:text-aurora-slate">
              The goal is to validate useful concepts step by step: first as demos, then as internal systems, and eventually as focused products when they prove valuable.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="section-spacing bg-aurora-obsidian text-white">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="aurora-text text-sm font-black uppercase tracking-[0.35em]">Lab Projects</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">Prototype ideas being explored.</h2>
            <p className="mt-5 leading-8 text-aurora-slate">
              These cards represent experimental product directions and demo concepts, not claims of completed commercial platforms.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {labProjects.map(({ icon: Icon, title, description }, index) => (
              <GlassCard key={title} className="bg-gradient-to-br from-white/[0.12] via-white/[0.07] to-aurora-cyan/[0.08]">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow">
                    <Icon size={28} />
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-aurora-cyan">
                    Concept 0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-aurora-slate">{description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="aurora-text text-sm font-black uppercase tracking-[0.35em]">Future SaaS Vision</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-aurora-ink dark:text-white sm:text-5xl">
              Building toward useful, focused software.
            </h2>
            <p className="mt-5 leading-8 text-slate-600 dark:text-aurora-slate">
              Qubnova aims to build practical SaaS products that help small teams save time, understand their data, and use AI in everyday business workflows.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {visionItems.map((item) => (
              <div key={item} className="premium-border rounded-[1.6rem] bg-gradient-to-br from-white/90 via-white/70 to-aurora-violet/10 p-5 shadow-luxury dark:from-white/[0.1] dark:via-white/[0.06] dark:to-aurora-cyan/10">
                <div className="relative z-10 flex items-center gap-3">
                  <Sparkles className="text-aurora-violet dark:text-aurora-cyan" size={22} />
                  <span className="font-black text-aurora-ink dark:text-white">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-aurora-obsidian text-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="aurora-text text-sm font-black uppercase tracking-[0.35em]">Startup Roadmap</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">A measured path from service brand to product company.</h2>
          </div>
          <div className="relative mt-14">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-aurora-cyan via-aurora-violet to-aurora-gold md:block" />
            <div className="grid gap-5">
              {roadmap.map((step, index) => (
                <div key={step} className="relative grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl md:grid-cols-[4rem_1fr] md:items-center md:p-6">
                  <div className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl bg-aurora-linear text-sm font-black shadow-glow">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-xl font-black">{step}</h3>
                    <p className="mt-2 leading-7 text-aurora-slate">
                      {index < 3 ? 'Current foundation stage focused on credibility, client value, and learning from real use cases.' : 'Future stage planned for product development, team growth, and education-driven expansion.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="aurora-text text-sm font-black uppercase tracking-[0.35em]">Future Divisions</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-aurora-ink dark:text-white sm:text-5xl">A future ecosystem, built one validated step at a time.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {divisions.map(({ icon: Icon, title, description }) => (
              <GlassCard key={title} className="p-5">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-black text-aurora-ink dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-aurora-slate">{description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-32">
        <div className="container-page">
          <div className="premium-border overflow-hidden rounded-[2.5rem] bg-aurora-obsidian p-8 text-center text-white shadow-aurora sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-premium-mesh opacity-80" />
            <div className="absolute inset-0 mesh-grid opacity-20" />
            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="aurora-text text-sm font-black uppercase tracking-[0.35em]">Explore the Demo Lab</span>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">See the experimental side of Qubnova.</h2>
              <p className="mt-5 leading-8 text-aurora-slate">
                Visit the AI Demo Lab to explore early concepts, small utilities, and practical examples of the direction Qubnova Labs is moving toward.
              </p>
              <Link
                to="/ai-demo-lab"
                className="group relative mt-8 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-black text-aurora-midnight transition duration-300 hover:-translate-y-0.5 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-aurora-cyan focus:ring-offset-2 focus:ring-offset-aurora-midnight"
              >
                <span className="shine-overlay" />
                <span className="relative z-10 inline-flex items-center gap-2">Open AI Demo Lab <ArrowRight size={18} /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
