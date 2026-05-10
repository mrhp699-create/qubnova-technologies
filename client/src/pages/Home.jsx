import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Boxes,
  BrainCircuit,
  Brush,
  CheckCircle2,
  Code2,
  FileText,
  Flag,
  Gauge,
  Image,
  Layers3,
  LayoutDashboard,
  Lightbulb,
  Megaphone,
  MessageSquare,
  MonitorSmartphone,
  Palette,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Youtube,
} from 'lucide-react';
import GradientButton from '../components/common/GradientButton.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const trustStats = [
  { value: '10+', label: 'Demo Modules' },
  { value: '6+', label: 'Service Categories' },
  { value: '100%', label: 'Responsive Design' },
  { value: 'AI-Ready', label: 'Architecture' },
  { value: 'MERN', label: 'Full-Stack Build' },
];

const serviceCards = [
  { icon: Code2, title: 'Full-Stack Web Apps', description: 'Production-ready React, Node, Express, and MongoDB systems built around real business workflows.' },
  { icon: Bot, title: 'AI Chatbots', description: 'Smart chatbot experiences for lead capture, support, onboarding, FAQs, and internal productivity.' },
  { icon: Rocket, title: 'SaaS MVPs', description: 'Founder-friendly MVP builds with clean user flows, scalable architecture, and launch momentum.' },
  { icon: LayoutDashboard, title: 'Business Dashboards', description: 'Admin panels, CRMs, analytics portals, and operating dashboards that make decisions easier.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Premium interfaces with modern hierarchy, mobile responsiveness, and conversion-focused layouts.' },
  { icon: PenTool, title: 'Graphic Design', description: 'Social creatives, ads, thumbnails, brand banners, flyers, and polished visual assets.' },
];

const featuredProjects = [
  { title: 'AI LMS Platform', category: 'EdTech SaaS', description: 'A learning platform concept with AI support, module progress, and instructor-ready dashboards.', stack: ['React', 'MERN', 'AI'] },
  { title: 'Business CRM Dashboard', category: 'Operations', description: 'A clean pipeline and client-management dashboard for teams that need better sales visibility.', stack: ['React', 'Node.js', 'MongoDB'] },
  { title: 'Qubnova Assistant Bot', category: 'AI Chatbot', description: 'A branded assistant experience designed to answer service, pricing, project, and contact questions.', stack: ['AI', 'Chat UI', 'Automation'] },
  { title: 'Invoice Generator', category: 'Business Tool', description: 'A lightweight tool for creating structured invoices with practical fields and export-ready layouts.', stack: ['React', 'Utility', 'UX'] },
  { title: 'Website Cost Estimator', category: 'AI Demo Tool', description: 'An estimator flow that helps clients understand website scope, complexity, and launch budget.', stack: ['Estimator', 'Logic', 'SaaS'] },
  { title: 'Graphic Design Collection', category: 'Creative Studio', description: 'A curated design showcase for posters, social media visuals, banners, and launch creatives.', stack: ['Branding', 'Design', 'Ads'] },
];

const aiTools = [
  { icon: Bot, title: 'Qubnova Assistant Bot' },
  { icon: Sparkles, title: 'AI Caption Generator' },
  { icon: Gauge, title: 'Website Cost Estimator' },
  { icon: FileText, title: 'Invoice Generator' },
  { icon: MessageSquare, title: 'Client Brief Generator' },
  { icon: Lightbulb, title: 'Business Name Generator' },
];

const designItems = [
  { icon: Image, title: 'Posters', accent: 'from-cyan-400/25 to-violet-500/20' },
  { icon: FileText, title: 'Flyers', accent: 'from-violet-500/25 to-fuchsia-500/20' },
  { icon: Boxes, title: 'Product Ads', accent: 'from-emerald-400/20 to-cyan-400/20' },
  { icon: Megaphone, title: 'Social Media Designs', accent: 'from-cyan-400/20 to-blue-500/20' },
  { icon: Youtube, title: 'YouTube Thumbnails', accent: 'from-red-400/20 to-violet-500/20' },
  { icon: Flag, title: 'Brand Banners', accent: 'from-amber-300/20 to-cyan-400/20' },
];

const processSteps = [
  'Understand the Idea',
  'Plan the Features',
  'Design the UI/UX',
  'Build the Full-Stack System',
  'Test and Improve',
  'Deploy and Support',
];

const reasons = [
  { icon: BadgeCheck, title: 'Business-focused development', description: 'Every build is scoped around outcomes, clarity, and practical launch value.' },
  { icon: BrainCircuit, title: 'AI-ready systems', description: 'Architectures are prepared for chatbot flows, automation, and intelligent workflows.' },
  { icon: Brush, title: 'Creative + technical skillset', description: 'Engineering, UI/UX, and visual design work together instead of feeling disconnected.' },
  { icon: MonitorSmartphone, title: 'Modern UI/UX', description: 'Clean responsive interfaces that feel premium across desktop, tablet, and mobile.' },
  { icon: ShieldCheck, title: 'Scalable architecture', description: 'MERN foundations, reusable components, and maintainable API thinking from day one.' },
  { icon: Users, title: 'Clear communication', description: 'Simple planning, visible progress, and direct collaboration throughout the project.' },
];

function SectionIntro({ eyebrow, title, description, center = true, inverted = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className={center ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-10 max-w-3xl'}
    >
      <p className="text-sm font-black uppercase tracking-[0.24em] text-aurora-violet dark:text-aurora-cyan">{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-black tracking-[-0.045em] sm:text-4xl lg:text-5xl ${inverted ? 'text-white' : 'text-aurora-ink dark:text-white'}`}>{title}</h2>
      {description ? <p className={`mt-5 text-base leading-8 sm:text-lg ${inverted ? 'text-aurora-slate' : 'text-slate-600 dark:text-aurora-slate'}`}>{description}</p> : null}
    </motion.div>
  );
}

function PremiumCard({ children, className = '' }) {
  return <div className={`premium-border rounded-[2rem] border border-white/20 bg-white/80 p-6 shadow-luxury backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:shadow-aurora dark:border-white/10 dark:bg-white/[0.06] ${className}`}>{children}</div>;
}

function DashboardVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.7 }}
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="floating-orb -left-10 top-6 h-36 w-36 bg-aurora-cyan/30 animate-float" />
      <div className="floating-orb -right-8 bottom-12 h-44 w-44 bg-aurora-violet/35 animate-float-slow" />
      <div className="premium-border relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.08] p-4 shadow-aurora backdrop-blur-2xl sm:rounded-[2.5rem]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-aurora-violet/20" />
        <div className="relative rounded-[1.5rem] border border-white/10 bg-[#0B1020]/95 p-4 shadow-inner-glow sm:rounded-[2rem] sm:p-5">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-300" /><span className="h-3 w-3 rounded-full bg-aurora-green" /></div>
            <span className="rounded-full border border-aurora-cyan/30 bg-aurora-cyan/10 px-3 py-1 text-xs font-black text-aurora-cyan">QUBNOVA OS</span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-aurora-slate">Analytics</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[['Leads', '128'], ['MVP', '84%']].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-white/[0.06] p-3">
                      <p className="text-xs text-aurora-slate">{label}</p>
                      <p className="mt-1 text-2xl font-black text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4">
                <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-aurora-linear"><Bot size={18} /></span><div><p className="font-black text-white">AI Chatbot</p><p className="text-xs text-aurora-slate">Ready to qualify leads</p></div></div>
                <div className="mt-4 rounded-2xl bg-aurora-cyan/10 p-3 text-sm text-aurora-slate">How can Qubnova help your business launch faster?</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4">
                <div className="flex items-center justify-between"><p className="font-black text-white">Project Progress</p><span className="text-sm font-black text-aurora-green">76%</span></div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10"><motion.div initial={{ width: '20%' }} animate={{ width: '76%' }} transition={{ duration: 1.2, delay: 0.6 }} className="h-full rounded-full bg-aurora-linear" /></div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-bold text-aurora-slate"><span>UX</span><span>API</span><span>Deploy</span></div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4">
                <div className="mb-3 flex items-center justify-between"><p className="font-black text-white">Design Gallery</p><Layers3 className="text-aurora-cyan" size={18} /></div>
                <div className="grid grid-cols-3 gap-2">
                  {['bg-aurora-linear', 'bg-aurora-cyan/50', 'bg-aurora-violet/60', 'bg-aurora-green/50', 'bg-white/20', 'bg-aurora-linear'].map((style, index) => <div key={`${style}-${index}`} className={`h-16 rounded-2xl ${style}`} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0B1020] pt-32 text-white">
        <div className="absolute inset-0 bg-premium-mesh opacity-90" />
        <div className="absolute inset-0 mesh-grid opacity-25" />
        <div className="floating-orb left-[-12rem] top-16 h-[34rem] w-[34rem] bg-aurora-cyan/20" />
        <div className="floating-orb right-[-14rem] top-32 h-[38rem] w-[38rem] bg-aurora-violet/25" />
        <div className="container-page relative z-10 grid min-h-[820px] items-center gap-14 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="premium-border inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-aurora-cyan backdrop-blur-xl"><Sparkles size={16} /> Qubnova Technologies · Software, AI, SaaS & Design</motion.span>
            <motion.h1 variants={fadeUp} className="mt-7 max-w-5xl text-5xl font-black tracking-[-0.065em] sm:text-6xl lg:text-7xl">Build Smarter Digital Products with <span className="aurora-text">Qubnova Technologies</span></motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-3xl text-lg leading-8 text-aurora-slate sm:text-xl">We design and develop full-stack web applications, AI-powered tools, chatbot systems, business dashboards, SaaS-style platforms, and creative digital designs for modern businesses.</motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <GradientButton to="/projects">View Portfolio</GradientButton>
              <GradientButton to="/contact" className="bg-white/10 shadow-none">Start a Project</GradientButton>
              <GradientButton to="/ai-demo-lab" className="bg-white/10 shadow-none">Explore AI Demo Lab</GradientButton>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-9 grid gap-3 sm:grid-cols-3">
              {['MERN full-stack builds', 'AI-ready workflows', 'Premium responsive UI'].map((item) => <span key={item} className="premium-border flex items-center gap-2 rounded-2xl bg-white/[0.08] px-4 py-3 text-sm font-semibold text-aurora-slate backdrop-blur-xl"><CheckCircle2 className="text-aurora-green" size={18} />{item}</span>)}
            </motion.div>
          </motion.div>
          <DashboardVisual />
        </div>
      </section>

      <section className="relative z-10 -mt-10 pb-20">
        <div className="container-page">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {trustStats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="premium-border rounded-[1.75rem] border border-white/20 bg-white/85 p-5 text-center shadow-luxury backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.08]">
                <p className="aurora-text text-3xl font-black tracking-[-0.04em]">{stat.value}</p>
                <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-slate-500 dark:text-aurora-slate">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-page">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="premium-border grid gap-8 rounded-[2.5rem] bg-[#0B1020] p-6 text-white shadow-violet sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
            <div className="relative min-h-72 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-aurora-cyan/25 blur-3xl" />
              <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-aurora-violet/30 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="grid h-16 w-16 place-items-center rounded-3xl bg-aurora-linear shadow-glow"><Rocket size={30} /></span>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-aurora-cyan">Founder Vision</p>
                  <h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">Moaz Saeed</h2>
                  <p className="mt-2 text-aurora-slate">Founder · Full-stack, AI workflows, UI/UX, creative technology</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-aurora-cyan">Founder Highlight</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] sm:text-5xl">Founded by Moaz Saeed</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-aurora-slate">Qubnova Technologies was founded by Moaz Saeed with a vision to build practical, modern, and intelligent digital solutions using full-stack development, AI-assisted workflows, UI/UX design, and creative technology.</p>
              <div className="mt-8"><GradientButton to="/about">Meet the Founder</GradientButton></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-aurora-snow/80 dark:bg-aurora-midnight/80">
        <div className="container-page">
          <SectionIntro eyebrow="Services Preview" title="Everything needed to design, build, and launch modern digital products." description="Qubnova combines software engineering, AI tools, SaaS thinking, and creative design into one focused delivery system." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map(({ icon: Icon, title, description }) => (
              <motion.div key={title} variants={fadeUp}>
                <PremiumCard className="h-full">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow"><Icon size={26} /></span>
                  <h3 className="mt-5 text-xl font-black text-aurora-ink dark:text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-aurora-slate">{description}</p>
                  <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-aurora-violet transition hover:gap-3 dark:text-aurora-cyan">Learn More <ArrowRight size={16} /></Link>
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <SectionIntro eyebrow="Featured Projects" title="Practical product concepts built around real business needs." description="A focused showcase of SaaS platforms, AI utilities, dashboards, and creative work that represents the Qubnova delivery style." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <motion.article key={project.title} variants={fadeUp} className="premium-border flex h-full flex-col rounded-[2rem] border border-slate-200/70 bg-white/85 p-6 shadow-luxury backdrop-blur-xl transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.06]">
                <span className="w-fit rounded-full bg-aurora-cyan/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-aurora-violet dark:text-aurora-cyan">{project.category}</span>
                <h3 className="mt-5 text-2xl font-black tracking-[-0.035em] text-aurora-ink dark:text-white">{project.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-aurora-slate">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-aurora-slate">{item}</span>)}</div>
                <GradientButton to="/projects" className="mt-6 py-2.5">View Details</GradientButton>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-spacing overflow-hidden bg-[#0B1020] text-white">
        <div className="container-page">
          <SectionIntro inverted eyebrow="AI Demo Lab Preview" title="Explore interactive AI and business tools before you build." description="Qubnova's demo lab turns ideas into practical workflows clients can understand, test, and shape into real products." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiTools.map(({ icon: Icon, title }) => (
              <motion.div key={title} variants={fadeUp}>
                <Link to="/ai-demo-lab" className="group premium-border block rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-luxury backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow"><Icon size={25} /></span>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-aurora-slate">A polished preview tool for faster discovery, clearer scope, and stronger product conversations.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-aurora-cyan transition group-hover:gap-3">Open demo <ArrowRight size={16} /></span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <SectionIntro eyebrow="Design Portfolio Preview" title="Creative design work that makes digital products look trusted and premium." description="From brand banners to high-converting thumbnails, Qubnova supports software builds with clean creative assets." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {designItems.map(({ icon: Icon, title, accent }) => (
              <motion.div key={title} variants={fadeUp}>
                <Link to="/design-portfolio" className={`group premium-border block min-h-56 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-gradient-to-br ${accent} p-6 shadow-luxury transition duration-300 hover:-translate-y-1 dark:border-white/10`}>
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/35 bg-white/75 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-[#111827]/75">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow"><Icon size={25} /></span>
                  <div>
                    <h3 className="text-2xl font-black text-aurora-ink dark:text-white">{title}</h3>
                    <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-aurora-slate">Clean placeholder gallery card ready for real creative assets.</p>
                  </div>
                </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-aurora-snow/80 dark:bg-aurora-midnight/80">
        <div className="container-page">
          <SectionIntro eyebrow="Work Process" title="A clear path from rough idea to supported launch." description="The process is structured so clients always know what is being planned, designed, built, improved, and delivered." />
          <div className="relative grid gap-5 lg:grid-cols-6">
            {processSteps.map((step, index) => (
              <motion.div key={step} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.04 }} className="relative rounded-[2rem] border border-slate-200/70 bg-white/85 p-5 shadow-luxury dark:border-white/10 dark:bg-white/[0.06]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aurora-linear text-lg font-black text-white shadow-glow">{index + 1}</span>
                <h3 className="mt-5 text-lg font-black text-aurora-ink dark:text-white">{step}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-aurora-slate">Focused milestone with clear outputs, review points, and practical next steps.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <SectionIntro eyebrow="Why Choose Qubnova" title="A software partner with startup energy and professional delivery discipline." description="Qubnova Technologies is built for clients who want modern execution, clean visuals, scalable thinking, and AI-ready product direction." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, description }) => (
              <motion.div key={title} variants={fadeUp}>
                <PremiumCard className="h-full">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow"><Icon size={25} /></span>
                  <h3 className="mt-5 text-xl font-black text-aurora-ink dark:text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-aurora-slate">{description}</p>
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-32">
        <div className="container-page">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="premium-border relative overflow-hidden rounded-[2.5rem] bg-[#0B1020] p-8 text-center text-white shadow-violet sm:p-12 lg:p-16">
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-aurora-cyan/20 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-aurora-cyan">Final CTA</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">Have an Idea? Let’s Turn It Into a Digital Product.</h2>
              <p className="mt-5 text-lg leading-8 text-aurora-slate">Share your vision with Qubnova Technologies and start shaping it into a premium web app, AI tool, SaaS MVP, dashboard, or creative digital experience.</p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <GradientButton to="/contact">Start a Project</GradientButton>
                <GradientButton to="/contact" className="bg-white/10 shadow-none">Contact Qubnova</GradientButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
