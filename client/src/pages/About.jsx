import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Bot,
  BrainCircuit,
  Brush,
  Building2,
  CheckCircle2,
  Code2,
  Compass,
  GraduationCap,
  Layers3,
  Lightbulb,
  Palette,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import GradientButton from '../components/common/GradientButton.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
};

const companyFocus = ['Full-stack web applications', 'AI-powered tools', 'Chatbot integrations', 'SaaS MVPs', 'Business dashboards', 'Creative digital branding'];

const founderLabels = ['Founder', 'MERN Stack Developer', 'AI-Assisted App Builder', 'Creative Digital Designer'];

const technicalSkills = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'JavaScript',
  'Tailwind CSS',
  'REST APIs',
  'JWT Authentication',
  'Admin Dashboards',
  'AI Chatbot Logic',
  'AI-Assisted Development',
  'Deployment Setup',
];

const creativeSkills = [
  'UI/UX Design',
  'Poster Design',
  'Flyer Design',
  'Social Media Creatives',
  'Product Ads',
  'YouTube Thumbnails',
  'Branding Assets',
  'Website Banners',
];

const futureDivisions = [
  { icon: Building2, title: 'Qubnova Technologies', description: 'The main software company for client services, web apps, dashboards, and product builds.' },
  { icon: BrainCircuit, title: 'Qubnova Labs', description: 'A space for AI tools, chatbot concepts, business utilities, and practical experiments.' },
  { icon: Palette, title: 'Qubnova Studio', description: 'UI/UX interfaces, creative design systems, brand assets, and digital visuals.' },
  { icon: Server, title: 'Qubnova Cloud', description: 'A future SaaS platform direction for hosted products, workflows, and business tools.' },
  { icon: GraduationCap, title: 'Qubnova Academy', description: 'A future learning and internship space for students and young developers.' },
];

const values = [
  { icon: Lightbulb, title: 'Practical Innovation', description: 'Build useful technology that solves real problems instead of chasing trends.' },
  { icon: Target, title: 'Client-Focused Thinking', description: 'Shape every project around business goals, user needs, and clear outcomes.' },
  { icon: Brush, title: 'Modern Design', description: 'Use clean interfaces, strong hierarchy, and polished visual systems.' },
  { icon: GraduationCap, title: 'Continuous Learning', description: 'Keep improving skills, workflows, and product thinking with every build.' },
  { icon: ShieldCheck, title: 'Ethical AI Use', description: 'Use AI responsibly to support people, improve workflows, and increase clarity.' },
  { icon: Layers3, title: 'Scalable Digital Products', description: 'Plan systems that can grow from portfolio projects into serious business platforms.' },
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
  return <div className={`premium-border rounded-[2rem] border border-white/20 bg-white/82 p-6 shadow-luxury backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06] ${className}`}>{children}</div>;
}

function SkillColumn({ icon: Icon, title, skills }) {
  return (
    <motion.div variants={fadeUp}>
      <PremiumCard className="h-full">
        <div className="mb-6 flex items-center gap-4">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow"><Icon size={26} /></span>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-aurora-violet dark:text-aurora-cyan">Skill Set</p>
            <h3 className="text-2xl font-black text-aurora-ink dark:text-white">{title}</h3>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-aurora-slate">
              <CheckCircle2 className="text-aurora-green" size={16} /> {skill}
            </span>
          ))}
        </div>
      </PremiumCard>
    </motion.div>
  );
}

export default function About() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0B1020] pt-32 text-white">
        <div className="absolute inset-0 bg-premium-mesh opacity-90" />
        <div className="absolute inset-0 mesh-grid opacity-25" />
        <div className="floating-orb left-[-10rem] top-20 h-[30rem] w-[30rem] bg-aurora-cyan/20" />
        <div className="floating-orb right-[-12rem] top-24 h-[34rem] w-[34rem] bg-aurora-violet/25" />
        <div className="container-page relative z-10 py-24 text-center sm:py-28 lg:py-32">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="mx-auto max-w-4xl">
            <motion.span variants={fadeUp} className="premium-border inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-aurora-cyan backdrop-blur-xl"><Sparkles size={16} /> Founder-led technology brand</motion.span>
            <motion.h1 variants={fadeUp} className="mt-7 text-5xl font-black tracking-[-0.06em] sm:text-6xl lg:text-7xl">About Qubnova Technologies</motion.h1>
            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-aurora-slate sm:text-xl">A modern software and creative technology brand founded by Moaz Saeed.</motion.p>
            <motion.div variants={fadeUp} className="mx-auto mt-9 h-1.5 max-w-xs rounded-full bg-aurora-linear shadow-glow" />
          </motion.div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-aurora-violet dark:text-aurora-cyan">About Qubnova Technologies</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] text-aurora-ink dark:text-white sm:text-5xl">A practical digital product brand for modern builders.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-aurora-slate">Qubnova Technologies is a modern software and digital solutions brand focused on full-stack web development, AI-powered tools, chatbot integration, SaaS MVPs, business dashboards, UI/UX design, and creative digital branding. The brand is built to help startups, small businesses, students, and professionals turn ideas into working digital products.</p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <PremiumCard className="relative overflow-hidden bg-[#0B1020] text-white">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-aurora-cyan/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-14 h-52 w-52 rounded-full bg-aurora-violet/25 blur-3xl" />
              <div className="relative">
                <span className="grid h-16 w-16 place-items-center rounded-3xl bg-aurora-linear shadow-glow"><Rocket size={30} /></span>
                <h3 className="mt-6 text-3xl font-black tracking-[-0.04em]">Qubnova Technologies</h3>
                <p className="mt-3 text-aurora-slate">Build smarter digital products with software, AI, SaaS thinking, and clean creative design.</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {companyFocus.map((item) => <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-bold text-aurora-slate">{item}</span>)}
                </div>
                <div className="mt-6 rounded-2xl border border-aurora-cyan/20 bg-aurora-cyan/10 p-4 text-sm font-bold text-aurora-cyan">Brand focus: software products, AI workflows, dashboards, SaaS MVPs, and creative digital identity.</div>
              </div>
            </PremiumCard>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-aurora-snow/80 dark:bg-aurora-midnight/80">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <PremiumCard className="relative overflow-hidden text-center">
              <div className="absolute inset-x-0 top-0 h-28 bg-aurora-linear opacity-90" />
              <div className="relative mx-auto mt-12 grid h-32 w-32 place-items-center rounded-[2rem] border-4 border-white bg-[#0B1020] text-5xl font-black text-white shadow-violet">MS</div>
              <h3 className="mt-6 text-3xl font-black tracking-[-0.04em] text-aurora-ink dark:text-white">Moaz Saeed</h3>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.18em] text-aurora-violet dark:text-aurora-cyan">Founder of Qubnova Technologies</p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {founderLabels.map((label) => <span key={label} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-aurora-slate">{label}</span>)}
              </div>
            </PremiumCard>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-aurora-violet dark:text-aurora-cyan">Meet the Founder</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] text-aurora-ink dark:text-white sm:text-5xl">Meet the Founder — Moaz Saeed</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-aurora-slate">Moaz Saeed is the founder of Qubnova Technologies, with a strong interest in MERN stack development, generative AI tools, AI-assisted application building, UI/UX interfaces, and creative digital design. He builds modern web applications using React, Node.js, Express.js, MongoDB, Tailwind CSS, and AI-powered development workflows.</p>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-aurora-slate">His goal is to grow Qubnova Technologies from a personal portfolio and freelancing brand into a professional software house, SaaS platform, and future learning space where students and young developers can work, learn, and build real digital products.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <SectionIntro eyebrow="Founder Skills" title="A balanced skillset across code, AI workflows, interfaces, and creative design." description="The founder profile is intentionally practical: focused on the tools and skills used to plan, build, polish, and launch digital products." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-6 lg:grid-cols-2">
            <SkillColumn icon={Code2} title="Technical Skills" skills={technicalSkills} />
            <SkillColumn icon={Palette} title="Creative Skills" skills={creativeSkills} />
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-[#0B1020] text-white">
        <div className="container-page">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="premium-border relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-violet backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-aurora-cyan/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-aurora-violet/25 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
                <Compass className="text-aurora-cyan" size={42} />
                <p className="mt-6 text-sm font-black uppercase tracking-[0.24em] text-aurora-cyan">Founder Vision</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] sm:text-4xl">The Vision Behind Qubnova</h2>
              </div>
              <p className="text-lg leading-9 text-aurora-slate">The long-term vision of Qubnova Technologies is to become a software and AI solutions company that offers client services, builds SaaS platforms, develops AI tools, and creates opportunities for students and young developers to gain practical experience.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <SectionIntro eyebrow="Future Divisions" title="A focused brand ecosystem for software, AI, design, SaaS, and learning." description="These divisions describe the future direction of Qubnova while keeping the current story honest and founder-led." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {futureDivisions.map(({ icon: Icon, title, description }) => (
              <motion.div key={title} variants={fadeUp}>
                <PremiumCard className="h-full">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow"><Icon size={25} /></span>
                  <h3 className="mt-5 text-xl font-black text-aurora-ink dark:text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-aurora-slate">{description}</p>
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-aurora-snow/80 dark:bg-aurora-midnight/80">
        <div className="container-page">
          <SectionIntro eyebrow="Values" title="The principles behind every Qubnova project." description="Qubnova is designed to stay practical, modern, ethical, and useful as it grows from founder-led work into a larger technology brand." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
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
              <p className="text-sm font-black uppercase tracking-[0.24em] text-aurora-cyan">Work with Qubnova</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">Work with Qubnova Technologies</h2>
              <p className="mt-5 text-lg leading-8 text-aurora-slate">Have an idea for a web app, chatbot, dashboard, SaaS MVP, or digital design project? Let’s turn it into a working digital product.</p>
              <div className="mt-9 flex justify-center"><GradientButton to="/contact">Start a Project</GradientButton></div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
