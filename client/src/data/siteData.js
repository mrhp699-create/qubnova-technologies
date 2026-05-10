import { Bot, BrainCircuit, Code2, Database, Gem, LayoutDashboard, Palette, Rocket, ShieldCheck, Sparkles, Workflow, Zap } from 'lucide-react';

export const stats = [
  { label: 'Products shipped', value: 42, suffix: '+' },
  { label: 'Automation hours saved', value: 18000, suffix: '+' },
  { label: 'Average launch speed', value: 6, suffix: 'w' },
  { label: 'Client satisfaction', value: 98, suffix: '%' },
];

export const services = [
  { icon: Code2, title: 'MERN & SaaS Development', description: 'Scalable dashboards, marketplaces, CRMs, portals, and subscription products built with modern architecture.' },
  { icon: BrainCircuit, title: 'AI Product Engineering', description: 'LLM copilots, retrieval systems, AI agents, custom workflows, and intelligent customer experiences.' },
  { icon: Workflow, title: 'Business Automation', description: 'No-code and custom automations for operations, lead management, reporting, and internal productivity.' },
  { icon: Palette, title: 'Brand & UI/UX Design', description: 'Premium visual identities, landing pages, product interfaces, and conversion-focused design systems.' },
  { icon: Database, title: 'Cloud Backends & APIs', description: 'Secure APIs, databases, auth, analytics, integrations, and production-ready infrastructure.' },
  { icon: ShieldCheck, title: 'Technical Consulting', description: 'Roadmaps, audits, MVP strategy, security hardening, and growth-focused software planning.' },
];

export const projects = [
  { slug: 'nova-crm', title: 'Nova CRM', category: 'SaaS Platform', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80', summary: 'AI-assisted sales CRM with pipeline insights, automated follow-ups, and executive analytics.', stack: ['React', 'Node.js', 'MongoDB', 'OpenAI'], outcome: '31% faster lead response' },
  { slug: 'aurora-commerce', title: 'Aurora Commerce', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', summary: 'Headless storefront with conversion analytics, dynamic bundles, and abandoned-cart automation.', stack: ['React', 'Express', 'Stripe', 'Tailwind'], outcome: '2.4x checkout conversion' },
  { slug: 'qub-agent', title: 'Qub Agent', category: 'AI Automation', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80', summary: 'Customer support AI agent trained on company docs with escalation workflows and QA reporting.', stack: ['LLM', 'RAG', 'Vector DB', 'Webhooks'], outcome: '68% ticket deflection' },
];

export const designs = [
  { title: 'Fintech Dashboard', tag: 'UI/UX', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80' },
  { title: 'AI Landing System', tag: 'Web Design', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Cyber Brand Kit', tag: 'Branding', image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Mobile App Concept', tag: 'Product', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80' },
];

export const pricing = [
  { name: 'Launch', price: '$1,499', description: 'For founders validating a focused offer.', features: ['Strategy call', '5-page responsive website', 'Conversion copy sections', 'Basic SEO setup', '2 revision rounds'] },
  { name: 'Scale', price: '$4,999', description: 'For growing teams needing a custom product.', featured: true, features: ['Product discovery sprint', 'MERN MVP build', 'Admin dashboard', 'API integrations', 'Analytics & deployment'] },
  { name: 'AI Partner', price: 'Custom', description: 'For ambitious AI and automation platforms.', features: ['AI architecture', 'RAG/agent workflows', 'Ongoing iteration', 'Security review', 'Priority support'] },
];

export const posts = [
  { slug: 'ai-automation-roadmap', title: 'The Practical AI Automation Roadmap for Modern Teams', date: 'May 02, 2026', excerpt: 'A clear path for identifying, prioritizing, and shipping automations that actually move metrics.' },
  { slug: 'saas-mvp-stack', title: 'Choosing a SaaS MVP Stack That Will Not Trap You Later', date: 'April 18, 2026', excerpt: 'How to balance launch speed, maintainability, and scale when building your first serious product.' },
  { slug: 'premium-ui-trust', title: 'Why Premium UI Design Creates Trust Before Your Sales Call', date: 'March 29, 2026', excerpt: 'The visual details that communicate technical competence, stability, and market positioning.' },
];

export const labDemos = [
  { icon: Bot, title: 'Support Copilot', description: 'Searches docs, drafts responses, and escalates tickets with full context.' },
  { icon: Sparkles, title: 'Landing Page Generator', description: 'Transforms product notes into structured SaaS landing page sections.' },
  { icon: Zap, title: 'Workflow Optimizer', description: 'Finds repetitive tasks and proposes automation recipes with ROI estimates.' },
  { icon: Gem, title: 'Brand Voice Assistant', description: 'Keeps marketing messages consistent across campaigns and sales assets.' },
];

export const techStack = ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'OpenAI', 'Stripe', 'Firebase', 'Vercel', 'AWS', 'Figma'];

export const labs = [
  { icon: Rocket, title: 'Founder MVP Studio', description: 'A repeatable playbook for moving from validated idea to launched product.' },
  { icon: LayoutDashboard, title: 'Ops Intelligence Suite', description: 'Dashboards and workflows that connect fragmented business systems.' },
  { icon: BrainCircuit, title: 'Applied AI Experiments', description: 'Prototype-first research into copilots, agents, and vertical AI tools.' },
];
