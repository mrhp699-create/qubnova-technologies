import { useMemo, useState } from 'react';
import { ArrowUpRight, Bot, BrainCircuit, CheckCircle2, Code2, ExternalLink, FileText, GitBranch, Layers3, LayoutDashboard, Palette, Sparkles, Tags, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../components/common/Card.jsx';
import GradientButton from '../components/common/GradientButton.jsx';
import PageHero from '../components/common/PageHero.jsx';

const filters = [
  'All',
  'Full-Stack Apps',
  'AI Tools',
  'Dashboards',
  'SaaS MVPs',
  'UI/UX',
  'Graphic Design',
];

const projects = [
  {
    slug: 'ai-lms-platform',
    title: 'AI LMS Platform',
    category: 'Full-Stack / AI',
    filterTags: ['Full-Stack Apps', 'AI Tools', 'Dashboards', 'SaaS MVPs'],
    description: 'A MERN-based learning platform that recommends courses based on student interests and provides dashboards for students and admins.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    status: 'Prototype-ready',
    accent: 'from-cyan-400 via-violet-500 to-fuchsia-500',
    icon: BrainCircuit,
    features: ['User login', 'Interest selection', 'Course recommendations', 'Course dashboard', 'Admin panel', 'Course management'],
    value: 'Shows how Qubnova can combine authentication, recommendation logic, dashboards, and admin workflows into one scalable learning product.',
    demoHref: '/ai-demo-lab',
  },
  {
    slug: 'business-crm-dashboard',
    title: 'Business CRM Dashboard',
    category: 'Dashboard / MERN',
    filterTags: ['Dashboards', 'Full-Stack Apps', 'SaaS MVPs', 'UI/UX'],
    description: 'A clean CRM dashboard for managing leads, customers, tasks, notes, and analytics.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Charts'],
    status: 'Case study',
    accent: 'from-blue-400 via-cyan-400 to-emerald-400',
    icon: LayoutDashboard,
    features: ['Customer management', 'Lead tracking', 'Task management', 'Analytics cards', 'Notes', 'Admin panel'],
    value: 'Proves practical business-software thinking with structured data, role-based admin patterns, and executive analytics.',
    demoHref: '/projects',
  },
  {
    slug: 'qubnova-assistant-bot',
    title: 'Qubnova Assistant Bot',
    category: 'AI Tool',
    filterTags: ['AI Tools', 'SaaS MVPs', 'UI/UX'],
    description: 'A website chatbot demo that answers questions about Qubnova services, projects, pricing, founder, and contact options.',
    techStack: ['React', 'AI Logic', 'API-ready', 'Tailwind CSS'],
    status: 'Live demo concept',
    accent: 'from-violet-500 via-fuchsia-500 to-rose-400',
    icon: Bot,
    features: ['Chatbot UI', 'Quick reply buttons', 'Service-based answers', 'FAQ support', 'API-ready structure', 'Demo AI mode'],
    value: 'Demonstrates customer-facing AI UX, structured response flows, lead qualification, and API-ready chatbot architecture.',
    demoHref: '/ai-demo-lab',
  },
  {
    slug: 'invoice-generator',
    title: 'Invoice Generator',
    category: 'Business Tool',
    filterTags: ['SaaS MVPs', 'Full-Stack Apps', 'UI/UX'],
    description: 'A simple business invoice generator with client details, service information, pricing, invoice preview, and PDF export.',
    techStack: ['React', 'Forms', 'PDF Export', 'Tailwind CSS'],
    status: 'Utility MVP',
    accent: 'from-emerald-400 via-cyan-400 to-blue-500',
    icon: FileText,
    features: ['Client info form', 'Service details', 'Price calculation', 'Invoice preview', 'PDF download'],
    value: 'Highlights the ability to turn a common business workflow into a polished utility with useful calculations and export actions.',
    demoHref: '/ai-demo-lab',
  },
  {
    slug: 'website-cost-estimator',
    title: 'Website Cost Estimator',
    category: 'Business Tool',
    filterTags: ['SaaS MVPs', 'AI Tools', 'UI/UX'],
    description: 'A smart estimator that helps clients estimate website or web app cost based on selected features.',
    techStack: ['React', 'Estimator Logic', 'Tailwind CSS', 'UX Forms'],
    status: 'Interactive demo',
    accent: 'from-amber-300 via-orange-400 to-fuchsia-500',
    icon: Sparkles,
    features: ['Project type selection', 'Page count', 'Chatbot option', 'Dashboard option', 'Admin panel option', 'Estimated price range'],
    value: 'Shows how Qubnova can make decision-support tools that qualify leads while educating clients on scope and budget.',
    demoHref: '/ai-demo-lab',
  },
  {
    slug: 'graphic-design-collection',
    title: 'Graphic Design Collection',
    category: 'Design',
    filterTags: ['Graphic Design', 'UI/UX'],
    description: 'A collection of creative digital designs including posters, flyers, product ads, social media creatives, and thumbnails.',
    techStack: ['Figma', 'Photoshop', 'Canva', 'Brand Systems'],
    status: 'Portfolio set',
    accent: 'from-pink-400 via-violet-500 to-indigo-500',
    icon: Palette,
    features: ['Design gallery', 'Category filters', 'Image preview', 'Design descriptions'],
    value: 'Confirms Qubnova can support product builds with strong visuals, campaign creatives, thumbnail systems, and brand consistency.',
    demoHref: '/design-portfolio',
  },
];

const proofItems = [
  { title: 'Full-stack architecture', description: 'Auth, APIs, databases, dashboards, admin flows, and production-minded structure.', icon: Code2 },
  { title: 'UI/UX thinking', description: 'Clean layouts, clear user paths, responsive screens, and conversion-focused interactions.', icon: Layers3 },
  { title: 'AI-ready logic', description: 'Recommendation flows, chatbot UX, quick replies, and API-ready intelligence layers.', icon: BrainCircuit },
  { title: 'Business problem solving', description: 'Tools that reduce manual work, organize operations, and help clients make decisions.', icon: Workflow },
  { title: 'Dashboard design', description: 'Analytics cards, management panels, lead tracking, and data-heavy interfaces.', icon: LayoutDashboard },
  { title: 'Creative design capability', description: 'Visual systems for ads, posters, thumbnails, galleries, and product storytelling.', icon: Palette },
];

function ProjectMockup({ project }) {
  const Icon = project.icon;

  return (
    <div className="relative overflow-hidden rounded-[1.7rem] border border-white/20 bg-aurora-obsidian p-4 shadow-2xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-25`} />
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/20 blur-3xl" />
      <div className="relative rounded-[1.25rem] border border-white/10 bg-white/[0.08] p-4 backdrop-blur-xl">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.18em] text-white/75">Mockup</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-[0.85fr_1.15fr]">
          <div className={`flex min-h-36 flex-col justify-between rounded-2xl bg-gradient-to-br ${project.accent} p-4 text-white shadow-glow`}>
            <Icon size={34} />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">{project.category}</p>
              <p className="mt-1 text-lg font-black leading-tight">{project.title}</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-16 rounded-2xl border border-white/10 bg-white/10 p-3">
              <div className="h-2 w-2/3 rounded-full bg-white/40" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                <span className="h-2 rounded-full bg-white/20" />
                <span className="h-2 rounded-full bg-white/20" />
                <span className="h-2 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <span className="h-16 rounded-2xl bg-white/10" />
              <span className="h-16 rounded-2xl bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.filterTags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects & Digital Products"
        description="A collection of full-stack apps, AI tools, dashboard concepts, business utilities, and creative design work built to demonstrate Qubnova Technologies’ practical capabilities."
      />

      <section className="pb-12 pt-8 sm:pb-16">
        <div className="container-page">
          <div className="glass-panel premium-border rounded-[2rem] p-3">
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`relative inline-flex items-center gap-2 overflow-hidden rounded-full px-4 py-2.5 text-sm font-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-aurora-cyan focus:ring-offset-2 dark:focus:ring-offset-aurora-midnight ${
                      isActive
                        ? 'bg-aurora-linear bg-[length:220%_220%] text-white shadow-violet animate-gradient-pan'
                        : 'bg-white/75 text-slate-600 hover:-translate-y-0.5 hover:text-aurora-violet dark:bg-white/[0.07] dark:text-aurora-slate dark:hover:text-aurora-cyan'
                    }`}
                    aria-pressed={isActive}
                  >
                    <Tags size={15} />
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-32">
        <div className="container-page">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-aurora-violet dark:text-aurora-cyan">Featured Projects Grid</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-aurora-ink dark:text-white sm:text-4xl">Portfolio cards built like mini case studies.</h2>
            </div>
            <p className="max-w-xl text-sm font-semibold text-slate-600 dark:text-aurora-slate">
              Showing {visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'} for <span className="text-aurora-violet dark:text-aurora-cyan">{activeFilter}</span>.
            </p>
          </div>

          <motion.div layout className="grid items-stretch gap-7 lg:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project) => (
              <Card key={project.slug} className="flex h-full p-4" as={motion.article} layout>
                <div id={project.slug} className="flex h-full scroll-mt-28 flex-col">
                  <ProjectMockup project={project} />
                  <div className="flex flex-1 flex-col p-2 pt-6">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-aurora-cyan/25 bg-aurora-cyan/10 px-3 py-1 text-xs font-black text-aurora-violet dark:text-aurora-cyan">{project.category}</span>
                      <span className="rounded-full border border-aurora-green/25 bg-aurora-green/10 px-3 py-1 text-xs font-black text-aurora-green">{project.status}</span>
                    </div>

                    <h3 className="text-2xl font-black text-aurora-ink dark:text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-aurora-slate">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-[0.7rem] font-black text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-aurora-slate">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 rounded-3xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.04]">
                      <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-aurora-violet dark:text-aurora-cyan">Key features</p>
                      <ul className="grid gap-2 text-sm text-slate-600 dark:text-aurora-slate">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 shrink-0 text-aurora-green" size={16} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="mt-5 text-sm font-semibold leading-6 text-slate-700 dark:text-white/80">{project.value}</p>

                    <div className="mt-auto grid gap-3 pt-6 sm:grid-cols-3">
                      <a href={`#${project.slug}`} className="group inline-flex items-center justify-center gap-2 rounded-full bg-aurora-linear bg-[length:220%_220%] px-4 py-2.5 text-sm font-black text-white shadow-violet transition duration-300 animate-gradient-pan hover:-translate-y-0.5 hover:shadow-aurora">
                        View Details <ArrowUpRight className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={16} />
                      </a>
                      <a href={project.demoHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/75 px-4 py-2.5 text-sm font-black text-aurora-ink shadow-sm transition duration-300 hover:-translate-y-0.5 hover:text-aurora-violet dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-aurora-cyan">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                      <a href={`https://github.com/qubnova-technologies/${project.slug}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-black text-aurora-ink transition duration-300 hover:-translate-y-0.5 hover:bg-aurora-cyan/10 dark:text-white dark:hover:bg-white/10">
                        <GitBranch size={16} /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-spacing border-y border-slate-200/80 bg-white/45 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.26em] text-aurora-violet dark:text-aurora-cyan">Project Proof Section</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-aurora-ink dark:text-white sm:text-5xl">What These Projects Prove</h2>
            <p className="mt-5 text-lg text-slate-600 dark:text-aurora-slate">Each concept is designed to prove practical delivery skills: product strategy, interface design, business logic, AI readiness, and full-stack execution.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proofItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="h-full">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-aurora-linear text-white shadow-aurora">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-black text-aurora-ink dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-aurora-slate">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <div className="premium-border relative overflow-hidden rounded-[2.5rem] bg-aurora-obsidian px-6 py-14 text-center shadow-luxury sm:px-10 lg:px-16">
            <div className="absolute inset-0 bg-aurora-radial opacity-80" />
            <div className="mesh-grid absolute inset-0 opacity-40" />
            <div className="relative z-10 mx-auto max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-aurora-gold">Build with Qubnova</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">Want a Project Like This?</h2>
              <p className="mt-5 text-lg text-aurora-slate">Bring Qubnova your idea, workflow, dashboard, chatbot, MVP, or design need — and turn it into a polished digital product.</p>
              <GradientButton to="/contact" className="mt-8 px-7 py-3.5">
                Start Your Project
              </GradientButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
