import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BrainCircuit,
  Brush,
  CheckCircle2,
  Code2,
  Layers3,
  LayoutDashboard,
  Palette,
  Rocket,
  Settings2,
  Sparkles,
  Target,
  UsersRound,
} from 'lucide-react';
import Card from '../components/common/Card.jsx';
import CTASection from '../components/common/CTASection.jsx';

const serviceCategories = [
  {
    icon: Code2,
    title: 'Full-Stack Web Development',
    description: 'Complete, responsive web apps with modern frontend, backend, database, API, and authentication systems.',
    preview: ['MERN apps', 'Business websites', 'Auth + APIs'],
  },
  {
    icon: Bot,
    title: 'AI Tools & Chatbot Integration',
    description: 'AI-ready interfaces, smart assistants, automation tools, and chatbot experiences for business workflows.',
    preview: ['Website chatbot', 'AI generators', 'API-ready setup'],
  },
  {
    icon: Rocket,
    title: 'SaaS MVP Development',
    description: 'Startup-ready SaaS products with dashboards, user roles, subscription-ready flows, and admin systems.',
    preview: ['SaaS landing page', 'User dashboard', 'MVP planning'],
  },
  {
    icon: LayoutDashboard,
    title: 'Business Dashboards & Admin Panels',
    description: 'Clean dashboard systems that help teams manage customers, projects, reports, invoices, and operations.',
    preview: ['Admin panels', 'CRM dashboards', 'Reports'],
  },
  {
    icon: Layers3,
    title: 'Modern UI/UX & Frontend Design',
    description: 'Premium interfaces for websites, dashboards, SaaS platforms, and mobile-friendly web applications.',
    preview: ['Landing UI', 'Responsive layouts', 'Redesigns'],
  },
  {
    icon: Palette,
    title: 'Graphic Design & Digital Branding',
    description: 'Professional brand visuals and marketing assets for social media, campaigns, products, and websites.',
    preview: ['Posters', 'Social creatives', 'Banners'],
  },
  {
    icon: Settings2,
    title: 'Deployment & Website Improvement',
    description: 'Launch support, hosting setup, bug fixing, responsive fixes, and practical improvements for existing projects.',
    preview: ['Vercel/Render', 'Bug fixes', 'UI improvements'],
  },
];

const detailedServices = [
  {
    icon: Code2,
    title: 'Full-Stack Web Development',
    description: 'We build complete web applications using modern frontend, backend, database, authentication, dashboard, and API systems.',
    features: [
      'MERN stack applications',
      'Business websites',
      'Admin dashboards',
      'CRUD applications',
      'Database-connected apps',
      'User authentication',
      'Portfolio websites',
      'SaaS MVPs',
      'Landing pages',
      'Responsive web apps',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'AI Tools & Chatbot Integration',
    description: 'We create AI-ready web systems, chatbot interfaces, automation tools, and smart business assistants using API-ready architecture and demo AI modes.',
    features: [
      'Website chatbot',
      'Business assistant chatbot',
      'AI content generator',
      'AI caption generator',
      'AI recommendation system',
      'FAQ chatbot',
      'Dashboard AI assistant',
      'Gemini/OpenAI-ready integration',
      'Client API key integration',
      'Demo/mock AI mode',
    ],
    note: 'AI tools can be built using demo AI mode, free-tier AI services, or client-provided API keys depending on the project requirements.',
  },
  {
    icon: Rocket,
    title: 'SaaS MVP Development',
    description: 'We help transform startup ideas into working SaaS-style web applications with authentication, dashboards, subscriptions, user roles, and admin systems.',
    features: [
      'SaaS landing page',
      'User dashboard',
      'Admin dashboard',
      'Subscription-ready structure',
      'Role-based access',
      'Payment-ready architecture',
      'Analytics dashboard',
      'Client management tools',
      'MVP planning and development',
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Business Dashboards & Admin Panels',
    description: 'We create clean and powerful dashboards that help businesses manage data, users, projects, invoices, customers, and reports.',
    features: [
      'Admin panels',
      'Analytics dashboards',
      'CRM dashboards',
      'Inventory dashboards',
      'Student dashboards',
      'Task dashboards',
      'Invoice dashboards',
      'Report management systems',
    ],
  },
  {
    icon: Brush,
    title: 'Modern UI/UX & Frontend Design',
    description: 'We design clean, responsive, and visually impressive interfaces for websites, dashboards, SaaS platforms, and mobile-friendly web apps.',
    features: [
      'Landing page UI',
      'Dashboard UI',
      'Responsive layouts',
      'Dark/light mode',
      'Animated interfaces',
      'Component-based design',
      'Modern web redesign',
      'Frontend improvement',
    ],
  },
  {
    icon: Palette,
    title: 'Graphic Design & Digital Branding',
    description: 'We design professional digital assets for businesses, products, social media, and online marketing.',
    features: [
      'Business posters',
      'Flyers',
      'Social media posts',
      'Product ads',
      'YouTube thumbnails',
      'Promotional banners',
      'Instagram creatives',
      'Brand identity visuals',
      'Website banners',
    ],
  },
  {
    icon: Settings2,
    title: 'Deployment & Website Improvement',
    description: 'We help move projects from local development to live deployment and improve existing websites or apps.',
    features: [
      'Vercel deployment',
      'Render deployment',
      'MongoDB Atlas setup',
      'Environment variables setup',
      'Bug fixing',
      'API connection fixes',
      'UI improvement',
      'Responsive fixes',
      'GitHub setup',
    ],
  },
];

const processSteps = [
  {
    title: 'Requirement Discussion',
    description: 'Understand goals, users, timeline, content, required features, and success expectations.',
  },
  {
    title: 'Feature Planning',
    description: 'Turn requirements into a practical roadmap with modules, priorities, and milestones.',
  },
  {
    title: 'UI/UX Design',
    description: 'Create clean screens, layouts, flows, and visual direction before development starts.',
  },
  {
    title: 'Development',
    description: 'Build responsive frontend, backend, database, APIs, dashboards, and integrations.',
  },
  {
    title: 'Testing',
    description: 'Review features, fix issues, test responsiveness, and prepare the product for handoff.',
  },
  {
    title: 'Deployment',
    description: 'Move the project live with hosting, environment setup, and launch-ready configuration.',
  },
];

const bestFor = [
  'Startups',
  'Small businesses',
  'Students',
  'Professionals',
  'Entrepreneurs',
  'Local businesses',
  'Creators',
  'Agencies needing support',
];

const createServiceId = (title) => title.toLowerCase().replaceAll(' & ', '-').replaceAll(' ', '-');

const SectionHeader = ({ eyebrow, title, description }) => (
  <div className="mx-auto mb-12 max-w-3xl text-center">
    <span className="inline-flex items-center gap-2 rounded-full border border-aurora-cyan/30 bg-aurora-cyan/10 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-aurora-violet dark:text-aurora-cyan">
      <Sparkles size={16} /> {eyebrow}
    </span>
    <h2 className="mt-5 text-3xl font-black tracking-[-0.045em] text-aurora-ink dark:text-white sm:text-5xl">{title}</h2>
    {description && <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-aurora-slate">{description}</p>}
  </div>
);

export default function Services() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-aurora-obsidian pt-32 text-white sm:pt-36">
        <div className="absolute inset-0 bg-premium-mesh opacity-95" />
        <div className="absolute inset-0 mesh-grid opacity-25" />
        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-aurora-cyan/25 blur-3xl animate-float" />
        <div className="absolute -right-24 top-28 h-96 w-96 rounded-full bg-aurora-fuchsia/20 blur-3xl animate-float-slow" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gold-line" />
        <div className="container-page section-spacing relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-black uppercase tracking-[0.22em] text-aurora-cyan backdrop-blur"
          >
            <BadgeCheck size={16} /> Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto mt-7 max-w-6xl text-4xl font-black tracking-[-0.06em] sm:text-6xl lg:text-7xl"
          >
            Services by <span className="aurora-text">Qubnova Technologies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-aurora-slate sm:text-xl"
          >
            From full-stack web applications to AI tools, dashboards, UI/UX, and digital design, Qubnova helps turn ideas into polished digital products.
          </motion.p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 text-left sm:grid-cols-3">
            {['Software builds', 'AI-ready products', 'Design + deployment'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-bold text-white/90 backdrop-blur">
                <CheckCircle2 className="mr-2 inline text-aurora-cyan" size={17} /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <SectionHeader
            eyebrow="Service categories"
            title="What clients can hire Qubnova for"
            description="Choose a focused service or combine multiple capabilities into one complete delivery plan."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map(({ icon: Icon, title, description, preview }, index) => (
              <Card key={title} className="flex h-full flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow transition duration-300 group-hover:rotate-3 group-hover:scale-110">
                    <Icon size={29} />
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-aurora-violet dark:bg-white/10 dark:text-aurora-cyan">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-2xl font-black tracking-[-0.03em] text-aurora-ink dark:text-white">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600 dark:text-aurora-slate">{description}</p>
                <ul className="mt-6 grid gap-3 text-sm font-bold text-slate-700 dark:text-aurora-slate">
                  {preview.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 rounded-2xl bg-slate-100/80 px-4 py-3 dark:bg-white/5">
                      <CheckCircle2 size={16} className="shrink-0 text-aurora-green" /> {feature}
                    </li>
                  ))}
                </ul>
                <a href={`#${createServiceId(title)}`} className="mt-7 inline-flex items-center gap-2 text-sm font-black text-aurora-violet transition group-hover:gap-3 dark:text-aurora-cyan">
                  Explore Service <ArrowRight size={16} />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50/80 dark:bg-white/[0.02]">
        <div className="container-page">
          <SectionHeader
            eyebrow="Detailed services"
            title="Clear offers, practical features, polished delivery"
            description="Each service is structured so clients know exactly what can be planned, designed, developed, improved, or launched."
          />
          <div className="space-y-8">
            {detailedServices.map(({ icon: Icon, title, description, features, note }, index) => (
              <motion.article
                id={createServiceId(title)}
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-90px' }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="premium-border scroll-mt-28 overflow-hidden rounded-[2rem] bg-white p-6 shadow-luxury dark:bg-white/[0.06] sm:p-8"
              >
                <span className="shine-overlay" />
                <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow"><Icon size={28} /></span>
                      <span className="text-sm font-black uppercase tracking-[0.2em] text-aurora-violet dark:text-aurora-cyan">Service 0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 text-3xl font-black tracking-[-0.045em] text-aurora-ink dark:text-white">{title}</h3>
                    <p className="mt-4 leading-8 text-slate-600 dark:text-aurora-slate">{description}</p>
                    {note && (
                      <div className="mt-6 rounded-2xl border border-aurora-cyan/25 bg-aurora-cyan/10 p-4 text-sm font-semibold leading-7 text-slate-700 dark:text-aurora-slate">
                        <Sparkles className="mr-2 inline text-aurora-cyan" size={17} /> {note}
                      </div>
                    )}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-aurora-slate">
                        <CheckCircle2 size={17} className="shrink-0 text-aurora-green" /> {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <SectionHeader
            eyebrow="Service process"
            title="A simple process from idea to launch"
            description="Qubnova keeps projects organized with clear planning, visible progress, testing, and deployment support."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(({ title, description }, index) => (
              <Card key={title} className="p-6">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aurora-obsidian text-sm font-black text-white shadow-violet">{index + 1}</span>
                  <h3 className="text-xl font-black text-aurora-ink dark:text-white">{title}</h3>
                </div>
                <p className="mt-4 leading-7 text-slate-600 dark:text-aurora-slate">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-aurora-obsidian text-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-aurora-cyan">
              <Target size={16} /> Best for
            </span>
            <h2 className="mt-6 text-3xl font-black tracking-[-0.045em] sm:text-5xl">Built for ambitious teams and practical launches</h2>
            <p className="mt-5 text-lg leading-8 text-aurora-slate">
              Qubnova is a strong fit when you need modern software, polished design, AI-ready tools, or reliable support to bring a digital idea online.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {bestFor.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-4 font-bold text-white/90 backdrop-blur">
                <UsersRound size={19} className="shrink-0 text-aurora-cyan" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Custom Digital Solution?"
        description="Tell Qubnova what you want to build, improve, automate, or launch, and get a practical project direction."
        buttonLabel="Request a Project Quote"
        buttonTo="/contact"
      />
    </>
  );
}
