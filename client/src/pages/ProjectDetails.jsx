import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Bot,
  CheckCircle2,
  Database,
  ExternalLink,
  GitBranch,
  Layers3,
  LayoutDashboard,
  LineChart,
  LockKeyhole,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import EmptyState from '../components/common/EmptyState.jsx';
import Button from '../components/common/Button.jsx';
import GradientButton from '../components/common/GradientButton.jsx';
import { projects } from '../data/siteData.js';

const projectDetails = {
  'nova-crm': {
    overview:
      'Nova CRM is an AI-assisted sales platform concept built to centralize leads, conversations, pipeline stages, and executive reporting in one responsive workspace. It gives sales teams a clear operating system for tracking every opportunity from first contact to closed deal.',
    problem:
      'Growing teams often manage leads across spreadsheets, inboxes, chat apps, and disconnected notes. That makes follow-ups slow, pipeline health hard to measure, and high-value opportunities easy to miss.',
    solution:
      'The platform solves this by combining a structured CRM database, dashboard analytics, automated follow-up logic, and AI-ready insight modules. Teams can prioritize hot leads, monitor conversion stages, and create a repeatable workflow for sales operations.',
    features: ['Lead pipeline dashboard', 'Automated follow-up reminders', 'Executive analytics cards', 'AI-ready sales insights', 'Secure user roles', 'Responsive CRM workspace'],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'AI-ready logic', 'JWT', 'REST API'],
  },
  'aurora-commerce': {
    overview:
      'Aurora Commerce is a modern headless storefront concept for product catalogs, bundles, checkout journeys, and conversion-focused analytics. It is designed for online brands that need a fast shopping experience with flexible backend workflows.',
    problem:
      'Many e-commerce businesses lose sales because their storefronts are slow, their promotions are hard to manage, and their abandoned-cart workflows are disconnected from customer behavior.',
    solution:
      'The solution uses a responsive React storefront, API-driven product logic, bundle-ready data structures, and automation hooks for checkout and abandoned-cart recovery. The result is a commerce experience that is easier to scale and optimize.',
    features: ['Product catalog UI', 'Dynamic bundle sections', 'Checkout conversion flow', 'Abandoned-cart automation', 'Revenue analytics panels', 'Mobile-first shopping pages'],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Stripe-ready checkout', 'REST API', 'Analytics'],
  },
  'qub-agent': {
    overview:
      'Qub Agent is an AI automation concept for customer support teams that need faster answers, smarter escalation, and better quality control. It is structured as a support copilot that can connect to company knowledge and operational workflows.',
    problem:
      'Support teams spend too much time answering repetitive questions, searching documentation manually, and escalating tickets without enough context for the next person to respond quickly.',
    solution:
      'The app introduces an AI-ready support workflow with knowledge retrieval, ticket triage, escalation paths, and reporting. It helps businesses reduce repetitive work while keeping human agents in control of complex cases.',
    features: ['AI support assistant', 'Knowledge-base retrieval', 'Escalation workflow', 'Ticket quality reporting', 'Conversation context cards', 'Automation-ready webhooks'],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'AI-ready logic', 'RAG-ready architecture', 'REST API'],
  },
};

const featureIcons = [LayoutDashboard, Workflow, LineChart, Bot, ShieldCheck, Sparkles, Database, Network];

function getDetails(project) {
  const custom = projectDetails[project.slug] || {};
  return {
    overview:
      custom.overview ||
      project.overview ||
      `${project.title} is a polished ${project.category.toLowerCase()} case study that shows how Qubnova turns product strategy, frontend design, backend planning, and business workflows into a client-ready digital platform.`,
    problem:
      custom.problem ||
      project.problem ||
      `Businesses need clear, reliable systems that reduce manual work, organize information, and make the value of their digital product easy for users to understand.`,
    solution:
      custom.solution ||
      project.solution ||
      `This project solves the challenge with a responsive interface, structured data flows, reusable components, automation-ready logic, and a scalable architecture that can grow from MVP to production.`,
    features: custom.features || project.features || ['Responsive dashboard UI', 'Business workflow planning', 'Database-ready structure', 'Authentication-ready screens', 'API-ready logic', 'Modern client experience'],
    stack: custom.stack || project.techStack || project.stack || ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'AI-ready logic', 'JWT', 'REST API'],
  };
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-aurora-violet dark:text-aurora-cyan">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-aurora-ink dark:text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-aurora-slate">{description}</p> : null}
    </div>
  );
}

function MockupCard({ title, variant = 'dashboard' }) {
  return (
    <div className="premium-border rounded-[2rem] bg-white/80 p-4 shadow-luxury backdrop-blur-2xl dark:bg-white/[0.07]">
      <div className="overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-slate-950 dark:border-white/10">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-auto h-2 w-24 rounded-full bg-white/20" />
        </div>
        <div className="bg-[radial-gradient(circle_at_top_right,rgba(0,212,255,0.22),transparent_18rem),linear-gradient(135deg,#111827,#0b1020)] p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <div className="h-3 w-24 rounded-full bg-aurora-cyan/70" />
              <div className="mt-3 h-6 w-40 rounded-xl bg-white/85" />
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow">
              {variant === 'workflow' ? <Workflow size={22} /> : <LayoutDashboard size={22} />}
            </div>
          </div>
          {variant === 'workflow' ? (
            <div className="space-y-3">
              {[0, 1, 2].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-aurora-cyan/20 text-aurora-cyan"><CheckCircle2 size={16} /></span>
                  <span className="h-3 flex-1 rounded-full bg-white/35" />
                  <span className="h-3 w-12 rounded-full bg-aurora-green/70" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map((item) => <div key={item} className="h-20 rounded-2xl bg-white/10 p-3"><div className="h-2 w-12 rounded-full bg-white/35" /><div className="mt-4 h-5 w-16 rounded-xl bg-white/80" /></div>)}
              </div>
              <div className="mt-4 h-36 rounded-2xl border border-white/10 bg-white/10 p-4">
                <div className="flex h-full items-end gap-2">
                  {[46, 72, 54, 88, 66, 96, 78].map((height) => <span key={height} className="flex-1 rounded-t-xl bg-gradient-to-t from-aurora-violet to-aurora-cyan" style={{ height: `${height}%` }} />)}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-aurora-slate">{title}</p>
    </div>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <main className="pt-32"><div className="container-page section-spacing"><EmptyState title="Project not found" actionLabel="Back to projects" actionTo="/projects" /></div></main>;
  }

  const details = getDetails(project);
  const screenshots = project.screenshots || [];

  return (
    <main className="overflow-hidden">
      <section className="relative isolate pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(0,212,255,0.20),transparent_30rem),radial-gradient(circle_at_85%_12%,rgba(124,58,237,0.20),transparent_28rem)]" />
        <div className="container-page pb-16 pt-10 sm:pb-20 lg:pt-16">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-slate-500 transition hover:text-aurora-violet dark:text-aurora-slate dark:hover:text-aurora-cyan">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex rounded-full bg-aurora-linear p-px shadow-glow">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-aurora-violet backdrop-blur-xl dark:bg-aurora-obsidian/90 dark:text-aurora-cyan">{project.category}</span>
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-[-0.07em] text-aurora-ink dark:text-white sm:text-6xl lg:text-7xl">{project.title}</h1>
              <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-600 dark:text-aurora-slate">{project.summary || project.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <GradientButton href={project.liveUrl || '#'} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={18} /></GradientButton>
                <Button href={project.githubUrl || '#'} target="_blank" rel="noreferrer" variant="secondary"><GitBranch size={18} /> GitHub</Button>
                <Button to="/projects" variant="ghost"><ArrowLeft size={18} /> Back to Projects</Button>
              </div>
            </div>
            <div className="premium-border rounded-[2.5rem] bg-white/75 p-3 shadow-luxury backdrop-blur-2xl dark:bg-white/[0.07]">
              <div className="image-polish min-h-[340px] rounded-[2rem] lg:min-h-[470px]">
                <img src={project.image} alt={`${project.title} project preview`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-8">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader eyebrow="Overview" title="What this project is" description="A client-ready case study built to communicate purpose, execution, and business value clearly." />
          <div className="premium-border rounded-[2rem] bg-white/78 p-8 shadow-luxury backdrop-blur-2xl dark:bg-white/[0.07] lg:p-10">
            <p className="text-xl leading-9 text-slate-700 dark:text-aurora-slate">{details.overview}</p>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-page grid gap-7 lg:grid-cols-2">
          <div className="premium-border rounded-[2rem] bg-white/78 p-8 shadow-luxury backdrop-blur-2xl dark:bg-white/[0.07] lg:p-10">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-rose-500/10 text-rose-500"><Layers3 size={26} /></div>
            <h2 className="mt-6 text-3xl font-black tracking-[-0.04em] text-aurora-ink dark:text-white">Problem</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-aurora-slate">{details.problem}</p>
          </div>
          <div className="premium-border rounded-[2rem] bg-aurora-obsidian p-8 text-white shadow-violet lg:p-10">
            <div className="absolute inset-0 bg-premium-mesh opacity-80" />
            <div className="relative z-10">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-aurora-cyan"><Rocket size={26} /></div>
              <h2 className="mt-6 text-3xl font-black tracking-[-0.04em]">Solution</h2>
              <p className="mt-4 text-lg leading-8 text-aurora-slate">{details.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-page">
          <SectionHeader eyebrow="Main Features" title="Core capabilities delivered" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {details.features.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return (
                <div key={feature} className="premium-border rounded-[1.75rem] bg-white/78 p-6 shadow-luxury backdrop-blur-2xl transition duration-300 hover:-translate-y-1 dark:bg-white/[0.07]">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow"><Icon size={22} /></div>
                  <h3 className="mt-5 text-xl font-black text-aurora-ink dark:text-white">{feature}</h3>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-aurora-slate">Designed as a practical, client-facing feature that supports daily workflows and long-term product growth.</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Tech Stack" title="Modern stack for scalable delivery" description="Badges highlight the frontend, backend, database, API, authentication, automation, and AI-ready foundations used for this project." />
          <div className="premium-border rounded-[2rem] bg-white/78 p-8 shadow-luxury backdrop-blur-2xl dark:bg-white/[0.07]">
            <div className="flex flex-wrap gap-3">
              {details.stack.map((item) => (
                <span key={item} className="rounded-full border border-aurora-cyan/20 bg-aurora-cyan/10 px-5 py-3 text-sm font-black text-aurora-ink shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-page">
          <SectionHeader eyebrow="Screenshots / Mockups" title="A polished product experience" description="When live screenshots are not available, the case study uses refined interface mockups to communicate dashboard structure, workflow logic, and responsive UI direction." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {screenshots.length > 0 ? screenshots.map((screenshot, index) => (
              <div key={screenshot} className="image-polish min-h-[320px]"><img src={screenshot} alt={`${project.title} screenshot ${index + 1}`} /></div>
            )) : (
              <>
                <MockupCard title="Dashboard overview mockup" />
                <MockupCard title="Workflow automation mockup" variant="workflow" />
              </>
            )}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader eyebrow="Proof" title="What this project proves" />
          <div className="premium-border rounded-[2rem] bg-white/78 p-8 shadow-luxury backdrop-blur-2xl dark:bg-white/[0.07] lg:p-10">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora-green/10 text-aurora-green"><LockKeyhole size={26} /></div>
            <p className="mt-6 text-2xl font-black leading-10 tracking-[-0.03em] text-aurora-ink dark:text-white">
              This project demonstrates full-stack MERN development, database design, authentication, dashboard UI, AI-ready logic, business workflow planning, and modern responsive frontend design.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-page">
          <div className="premium-border relative isolate overflow-hidden rounded-[2.5rem] bg-aurora-obsidian p-8 text-center text-white shadow-violet sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-premium-mesh opacity-95" />
            <div className="absolute inset-0 mesh-grid opacity-25" />
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-aurora-cyan/20 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-aurora-fuchsia/20 blur-3xl" />
            <div className="relative z-10">
              <p className="mx-auto mb-5 h-px max-w-xs bg-gold-line" />
              <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">Need a Similar Project?</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-aurora-slate">Bring Qubnova a workflow, dashboard, SaaS idea, or AI automation concept and we will turn it into a polished product plan.</p>
              <GradientButton to="/contact" className="mt-9">Contact Qubnova</GradientButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
