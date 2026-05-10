import {
  Bot,
  CheckCircle2,
  ChevronDown,
  Gauge,
  Layers3,
  Puzzle,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Timer,
} from 'lucide-react';
import PageHero from '../components/common/PageHero.jsx';
import Card from '../components/common/Card.jsx';
import GradientButton from '../components/common/GradientButton.jsx';
import Button from '../components/common/Button.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import CTASection from '../components/common/CTASection.jsx';

const packages = [
  {
    name: 'Starter Package',
    bestFor: 'Simple websites and small fixes.',
    pricing: 'Starting from a lean scope',
    includes: ['1–3 page website', 'Responsive design', 'Contact form', 'Basic animations', 'Deployment guidance'],
    cta: 'Request Starter Quote',
    icon: Rocket,
  },
  {
    name: 'Business Package',
    bestFor: 'Small businesses and service providers.',
    pricing: 'Custom quote after scope review',
    includes: ['5–8 page website', 'Dashboard or admin panel', 'Database connection', 'Contact system', 'Basic SEO', 'Deployment'],
    cta: 'Request Business Quote',
    icon: Layers3,
    popular: true,
  },
  {
    name: 'AI Package',
    bestFor: 'Chatbots and AI-ready tools.',
    pricing: 'Starting from an AI demo build',
    includes: ['Chatbot interface', 'Demo AI mode', 'API-ready structure', 'FAQ system', 'Admin control', 'Deployment'],
    cta: 'Request AI Quote',
    icon: Bot,
  },
  {
    name: 'Custom SaaS/MERN Package',
    bestFor: 'Full-stack applications and SaaS MVPs.',
    pricing: 'Custom quote for your roadmap',
    includes: ['Frontend', 'Backend', 'Database', 'Authentication', 'Dashboard', 'Admin panel', 'API integration', 'Deployment'],
    cta: 'Request Custom Quote',
    icon: ShieldCheck,
  },
];

const pricingFactors = [
  { title: 'Number of pages', icon: Layers3 },
  { title: 'Design complexity', icon: Sparkles },
  { title: 'Backend/database needs', icon: Gauge },
  { title: 'AI/chatbot features', icon: Bot },
  { title: 'Admin dashboard', icon: SearchCheck },
  { title: 'Deployment/support', icon: Rocket },
  { title: 'Urgency', icon: Timer },
  { title: 'Custom integrations', icon: Puzzle },
];

const faqs = [
  {
    question: 'Do you build from scratch?',
    answer: 'Yes. Qubnova can plan, design, and develop a new website, web app, chatbot, dashboard, SaaS MVP, or design system from the ground up.',
  },
  {
    question: 'Can you work with existing code?',
    answer: 'Yes. We can review your current codebase, identify the safest improvement path, and add new pages, dashboards, integrations, or fixes without forcing a full rebuild.',
  },
  {
    question: 'Can you add AI without paid API?',
    answer: 'Yes. We can create demo AI modes, FAQ-style chatbot flows, and API-ready structures first, then connect a paid AI API later if your project needs live model responses.',
  },
  {
    question: 'Can you deploy the project?',
    answer: 'Yes. Deployment can be included for websites, MERN apps, dashboards, and AI-ready tools, with guidance for domains, hosting, and handoff.',
  },
  {
    question: 'Do you design posters and flyers too?',
    answer: 'Yes. You can request digital design support for posters, flyers, social media creatives, pitch visuals, and brand assets as part of a custom quote.',
  },
  {
    question: 'Can I request a custom package?',
    answer: 'Absolutely. The packages are starting points. We can combine website, app, chatbot, dashboard, SaaS, and design needs into one tailored proposal.',
  },
];

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing Hero"
        title="Flexible Pricing for Digital Solutions"
        description="Choose a starting package or request a custom quote based on your website, web app, chatbot, dashboard, SaaS MVP, or design needs."
      >
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-3 sm:flex-row">
          <GradientButton to="/contact" className="w-full sm:w-auto">Request a custom quote</GradientButton>
          <Button to="/services" variant="secondary" className="w-full border-white/15 bg-white/10 text-white hover:text-aurora-cyan sm:w-auto">Compare services</Button>
        </div>
      </PageHero>

      <section className="section-spacing" aria-labelledby="package-cards">
        <div className="container-page">
          <SectionHeading
            eyebrow="Package Cards"
            title="Start with a package, then refine the scope."
            description="Every option is designed as a practical starting point, so you can get a clear direction without being locked into rigid pricing before the requirements are understood."
          />

          <div className="grid gap-6 lg:grid-cols-4">
            {packages.map((plan) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={plan.name}
                  className={`flex h-full flex-col p-0 ${plan.popular ? 'bg-aurora-obsidian text-white shadow-violet dark:bg-white/[0.10]' : ''}`}
                >
                  <div className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${plan.popular ? 'bg-white/10 text-aurora-cyan' : 'bg-aurora-cyan/10 text-aurora-violet dark:bg-white/10 dark:text-aurora-cyan'}`}>
                        <Icon size={24} />
                      </span>
                      {plan.popular && <span className="rounded-full bg-aurora-gold px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-aurora-ink">Popular</span>}
                    </div>

                    <div className="mt-7">
                      <p className={`text-xs font-black uppercase tracking-[0.24em] ${plan.popular ? 'text-aurora-cyan' : 'text-aurora-violet dark:text-aurora-cyan'}`}>Custom-friendly</p>
                      <h2 className={`mt-3 text-2xl font-black tracking-[-0.04em] ${plan.popular ? 'text-white' : 'text-aurora-ink dark:text-white'}`}>{plan.name}</h2>
                      <p className={`mt-4 text-sm font-bold uppercase tracking-[0.16em] ${plan.popular ? 'text-aurora-slate' : 'text-slate-500 dark:text-aurora-slate'}`}>Best for</p>
                      <p className={`mt-2 min-h-12 leading-7 ${plan.popular ? 'text-white/85' : 'text-slate-600 dark:text-aurora-slate'}`}>{plan.bestFor}</p>
                    </div>

                    <div className={`mt-6 rounded-3xl border p-4 ${plan.popular ? 'border-white/10 bg-white/[0.06]' : 'border-slate-200/80 bg-white/60 dark:border-white/10 dark:bg-white/[0.04]'}`}>
                      <p className={`text-xs font-black uppercase tracking-[0.2em] ${plan.popular ? 'text-aurora-gold' : 'text-aurora-violet dark:text-aurora-cyan'}`}>Pricing</p>
                      <p className={`mt-2 text-xl font-black tracking-[-0.03em] ${plan.popular ? 'text-white' : 'text-aurora-ink dark:text-white'}`}>{plan.pricing}</p>
                    </div>

                    <ul className="mt-7 flex-1 space-y-3">
                      {plan.includes.map((feature) => (
                        <li key={feature} className={`flex items-start gap-3 text-sm font-semibold leading-6 ${plan.popular ? 'text-white/90' : 'text-slate-700 dark:text-aurora-slate'}`}>
                          <CheckCircle2 className="mt-0.5 shrink-0 text-aurora-green" size={18} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <GradientButton to="/contact" className="mt-8 w-full">{plan.cta}</GradientButton>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0" aria-labelledby="pricing-factors">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="What Affects Pricing"
              title="Your quote is shaped by real project needs."
              description="Instead of guessing a one-size-fits-all price, we review the features, design depth, integrations, timeline, and handoff support your project actually needs."
              align="left"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {pricingFactors.map((factor) => {
                const Icon = factor.icon;
                return (
                  <Card key={factor.title} className="p-5">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-aurora-cyan/10 text-aurora-violet dark:bg-white/10 dark:text-aurora-cyan">
                        <Icon size={22} />
                      </span>
                      <h3 className="text-base font-black text-aurora-ink dark:text-white">{factor.title}</h3>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0" aria-labelledby="pricing-faq">
        <div className="container-page">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions before you request a quote."
            description="Quick answers for clients comparing websites, web apps, chatbot prototypes, dashboards, SaaS MVPs, and design work."
          />

          <div className="mx-auto grid max-w-5xl gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group premium-border rounded-3xl bg-white/80 p-6 shadow-luxury backdrop-blur-2xl open:bg-white dark:bg-white/[0.07] dark:open:bg-white/[0.10]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-black text-aurora-ink dark:text-white">
                  <span>{faq.question}</span>
                  <ChevronDown className="shrink-0 text-aurora-violet transition group-open:rotate-180 dark:text-aurora-cyan" size={22} />
                </summary>
                <p className="mt-4 max-w-3xl leading-8 text-slate-600 dark:text-aurora-slate">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a quote that matches your exact scope?"
        description="Tell us what you need built, improved, automated, designed, or deployed. We will recommend a package direction and prepare a custom quote without locking you into fake fixed prices."
        buttonLabel="Request your custom quote"
        buttonTo="/contact"
      />
    </>
  );
}
