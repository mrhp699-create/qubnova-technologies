import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Code2,
  ExternalLink,
  GitBranch,
  Link2,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import PageHero from '../components/common/PageHero.jsx';
import GradientButton from '../components/common/GradientButton.jsx';
import { api, getApiErrorMessage } from '../api/client.js';

const projectTypeOptions = [
  'Business Website',
  'MERN Web App',
  'AI Chatbot',
  'Dashboard',
  'SaaS MVP',
  'Graphic Design',
  'Bug Fixing',
  'Deployment',
  'Other',
];

const budgetOptions = [
  'Small Fix / Basic Task',
  'Starter Website',
  'Business Website',
  'AI Tool / Chatbot',
  'Custom MERN App',
  'SaaS MVP',
  'Not Sure Yet',
];

const timelineOptions = ['Urgent', '1 Week', '2–3 Weeks', '1 Month', 'Flexible'];

const contactOptions = [
  { icon: MessageCircle, label: 'WhatsApp', value: '+92 310 8829886', href: 'https://wa.me/923108829886', note: 'Fastest for urgent questions' },
  { icon: Mail, label: 'Email', value: 'mrhp699@gmail.com', href: 'mailto:mrhp699@gmail.com', note: 'Best for detailed briefs' },
  { icon: GitBranch, label: 'GitHub', value: 'Portfolio placeholder', href: '', note: 'Code profile link coming soon' },
  { icon: Link2, label: 'LinkedIn', value: 'Profile placeholder', href: '', note: 'Professional profile coming soon' },
  { icon: BriefcaseBusiness, label: 'Fiverr', value: 'Gig placeholder', href: '', note: 'Marketplace link coming soon' },
  { icon: ExternalLink, label: 'Upwork', value: 'Profile placeholder', href: '', note: 'Marketplace link coming soon' },
];

const projectTypes = [
  { icon: BriefcaseBusiness, title: 'Business Websites', description: 'Professional sites, landing pages, portfolios, and conversion-focused company pages.' },
  { icon: Code2, title: 'MERN Web Apps', description: 'Custom React, Node.js, Express, and MongoDB products built for real workflows.' },
  { icon: Bot, title: 'AI Chatbots', description: 'Website assistants, support bots, lead qualification bots, and AI-powered tools.' },
  { icon: Sparkles, title: 'Dashboards & SaaS MVPs', description: 'Admin panels, analytics dashboards, MVP platforms, and subscription-ready products.' },
  { icon: Palette, title: 'Digital Design', description: 'Graphic design, UI polish, brand assets, social creatives, and premium visual systems.' },
  { icon: Wrench, title: 'Fixes & Deployment', description: 'Bug fixing, hosting setup, production deployment, integrations, and launch support.' },
];

const nextSteps = [
  'You submit your project idea',
  'Qubnova reviews the requirements',
  'A clear plan and estimate is prepared',
  'Design and development begin',
  'Project is tested and delivered',
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
};

function validateForm(formData) {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.name.trim()) errors.name = 'Please enter your name.';
  if (!emailPattern.test(formData.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!formData.phone.trim()) errors.phone = 'Please add your phone or WhatsApp number.';
  if (!formData.projectType) errors.projectType = 'Please choose a project type.';
  if (!formData.budget) errors.budget = 'Please choose a budget range.';
  if (!formData.timeline) errors.timeline = 'Please choose a timeline.';
  if (!formData.message.trim() || formData.message.trim().length < 20) {
    errors.message = 'Please share at least 20 characters about your requirements.';
  }

  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ type: '', message: '' });

  const completedFields = useMemo(
    () => Object.values(formData).filter((value) => value.trim()).length,
    [formData],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    setToast({ type: '', message: '' });

    if (Object.keys(validationErrors).length > 0) {
      setToast({ type: 'error', message: 'Please complete the highlighted fields so Qubnova can review your project properly.' });
      return;
    }

    setIsSubmitting(true);

    try {
      await api.post('/messages', formData);
      setFormData(initialForm);
      setToast({ type: 'success', message: 'Project request sent successfully. Qubnova Technologies will review your requirements and respond with next steps.' });
    } catch (error) {
      setToast({
        type: 'warning',
        message: getApiErrorMessage(error, 'The backend inbox is unavailable right now. Please copy your message and contact Qubnova via WhatsApp or email.'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (fieldName) => `input-luxury ${errors[fieldName] ? 'border-red-400 focus:border-red-400 focus:shadow-none' : ''}`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start Your Project with Qubnova Technologies"
        description="Have an idea for a website, web app, chatbot, dashboard, SaaS MVP, or digital design project? Share your requirements and Qubnova Technologies will help you turn your idea into a clear digital solution."
      >
        <div className="mx-auto grid max-w-3xl gap-3 text-sm font-bold text-white sm:grid-cols-3">
          {['Requirement review', 'Clear estimate', 'Premium delivery'].map((item) => (
            <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl">
              <CheckCircle2 className="mr-2 inline text-aurora-cyan" size={17} /> {item}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="section-spacing" aria-labelledby="contact-form-title">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <form onSubmit={handleSubmit} noValidate className="premium-border rounded-[2rem] bg-white/[0.86] p-5 shadow-luxury backdrop-blur-2xl dark:bg-white/[0.07] sm:p-8">
              <div className="mb-7 flex flex-col gap-4 border-b border-slate-200/80 pb-6 dark:border-white/10 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-aurora-violet dark:text-aurora-cyan">Contact Form</p>
                  <h2 id="contact-form-title" className="mt-3 text-3xl font-black tracking-[-0.04em] text-aurora-ink dark:text-white">Tell us what you need built</h2>
                  <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-aurora-slate">The more context you share, the faster Qubnova can prepare a practical plan, timeline, and estimate.</p>
                </div>
                <div className="rounded-2xl bg-aurora-linear p-[1px]">
                  <div className="rounded-2xl bg-white px-4 py-3 text-center dark:bg-aurora-obsidian">
                    <p className="text-2xl font-black text-aurora-ink dark:text-white">{completedFields}/7</p>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">fields ready</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 font-bold text-aurora-ink dark:text-white">
                  Name
                  <input className={fieldClass('name')} name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" autoComplete="name" required />
                  {errors.name ? <span className="block text-sm text-red-500">{errors.name}</span> : null}
                </label>
                <label className="space-y-2 font-bold text-aurora-ink dark:text-white">
                  Email
                  <input className={fieldClass('email')} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" required />
                  {errors.email ? <span className="block text-sm text-red-500">{errors.email}</span> : null}
                </label>
                <label className="space-y-2 font-bold text-aurora-ink dark:text-white">
                  Phone / WhatsApp
                  <input className={fieldClass('phone')} name="phone" value={formData.phone} onChange={handleChange} placeholder="Your best contact number" autoComplete="tel" required />
                  {errors.phone ? <span className="block text-sm text-red-500">{errors.phone}</span> : null}
                </label>
                <label className="space-y-2 font-bold text-aurora-ink dark:text-white">
                  Project Type
                  <select className={fieldClass('projectType')} name="projectType" value={formData.projectType} onChange={handleChange} required>
                    <option value="">Select a project type</option>
                    {projectTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                  {errors.projectType ? <span className="block text-sm text-red-500">{errors.projectType}</span> : null}
                </label>
                <label className="space-y-2 font-bold text-aurora-ink dark:text-white">
                  Budget Range
                  <select className={fieldClass('budget')} name="budget" value={formData.budget} onChange={handleChange} required>
                    <option value="">Select a budget range</option>
                    {budgetOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                  {errors.budget ? <span className="block text-sm text-red-500">{errors.budget}</span> : null}
                </label>
                <label className="space-y-2 font-bold text-aurora-ink dark:text-white">
                  Timeline
                  <select className={fieldClass('timeline')} name="timeline" value={formData.timeline} onChange={handleChange} required>
                    <option value="">Select your preferred timeline</option>
                    {timelineOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                  {errors.timeline ? <span className="block text-sm text-red-500">{errors.timeline}</span> : null}
                </label>
              </div>

              <label className="mt-5 block space-y-2 font-bold text-aurora-ink dark:text-white">
                Message
                <textarea className={`${fieldClass('message')} min-h-44 resize-y`} name="message" value={formData.message} onChange={handleChange} placeholder="Describe your idea, required pages/features, target users, references, integrations, and anything Qubnova should know." required />
                {errors.message ? <span className="block text-sm text-red-500">{errors.message}</span> : null}
              </label>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <GradientButton type="submit" disabled={isSubmitting} className="w-full justify-center disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
                  <Send size={18} /> {isSubmitting ? 'Sending requirements...' : 'Send Project Requirements'}
                </GradientButton>
                <p className="text-sm font-semibold leading-6 text-slate-500 dark:text-aurora-slate">Your request is reviewed manually before any estimate is shared.</p>
              </div>
            </form>

            <aside className="space-y-5" aria-labelledby="contact-options-title">
              <div className="premium-border rounded-[2rem] bg-aurora-obsidian p-6 text-white shadow-violet">
                <ShieldCheck className="text-aurora-gold" />
                <h2 id="contact-options-title" className="mt-4 text-2xl font-black tracking-[-0.04em]">Contact Options</h2>
                <p className="mt-3 leading-7 text-aurora-slate">Choose the channel that fits your project. Placeholders are shown where public profile links are not ready yet.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {contactOptions.map(({ icon: Icon, label, value, href, note }) => {
                  const card = (
                    <>
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow"><Icon size={22} /></span>
                      <span className="min-w-0">
                        <span className="block text-sm font-black uppercase tracking-[0.18em] text-aurora-violet dark:text-aurora-cyan">{label}</span>
                        <span className="mt-1 block truncate text-base font-black text-aurora-ink dark:text-white">{value}</span>
                        <span className="mt-1 block text-sm font-semibold text-slate-500 dark:text-aurora-slate">{note}</span>
                      </span>
                      {href ? <ArrowUpRight className="ml-auto shrink-0 text-aurora-violet dark:text-aurora-cyan" size={18} /> : null}
                    </>
                  );

                  return href ? (
                    <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="premium-border flex items-center gap-4 rounded-3xl bg-white/80 p-5 shadow-luxury backdrop-blur-xl transition hover:-translate-y-1 dark:bg-white/[0.06]">
                      {card}
                    </a>
                  ) : (
                    <div key={label} className="premium-border flex items-center gap-4 rounded-3xl bg-white/70 p-5 opacity-90 shadow-luxury backdrop-blur-xl dark:bg-white/[0.05]">
                      {card}
                    </div>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-32" aria-labelledby="project-types-title">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-aurora-violet dark:text-aurora-cyan">Project Types</p>
            <h2 id="project-types-title" className="mt-4 text-3xl font-black tracking-[-0.045em] text-aurora-ink dark:text-white sm:text-5xl">Send any digital requirement with confidence</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projectTypes.map(({ icon: Icon, title, description }) => (
              <div key={title} className="premium-border rounded-[1.75rem] bg-white/78 p-6 shadow-luxury backdrop-blur-xl transition hover:-translate-y-1 dark:bg-white/[0.06]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow"><Icon size={22} /></span>
                <h3 className="mt-5 text-xl font-black text-aurora-ink dark:text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-aurora-slate">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-32" aria-labelledby="next-steps-title">
        <div className="container-page">
          <div className="premium-border overflow-hidden rounded-[2.25rem] bg-aurora-obsidian p-6 text-white shadow-violet sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-aurora-cyan">What Happens Next</p>
                <h2 id="next-steps-title" className="mt-4 text-3xl font-black tracking-[-0.045em] sm:text-5xl">A simple path from idea to delivered solution</h2>
                <p className="mt-5 leading-8 text-aurora-slate">Qubnova keeps the process clear, so you always know what is being reviewed, planned, designed, developed, and delivered.</p>
              </div>
              <div className="grid gap-4">
                {nextSteps.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-lg font-black text-aurora-violet">{index + 1}</span>
                    <div>
                      <h3 className="font-black">{step}</h3>
                      <p className="mt-1 text-sm leading-6 text-aurora-slate">Step {index + 1} keeps the project moving with clarity and accountability.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-32" aria-labelledby="contact-cta-title">
        <div className="container-page">
          <div className="premium-border rounded-[2.25rem] bg-white/82 p-6 text-center shadow-luxury backdrop-blur-2xl dark:bg-white/[0.07] sm:p-10">
            <Rocket className="mx-auto text-aurora-violet dark:text-aurora-cyan" size={34} />
            <h2 id="contact-cta-title" className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-[-0.045em] text-aurora-ink dark:text-white sm:text-5xl">Ready to turn your idea into a premium digital product?</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600 dark:text-aurora-slate">Use the form above or reach out directly through WhatsApp and email. Social and marketplace profile links can be connected when they are ready.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {contactOptions.map(({ icon: Icon, label, href }) => (
                href ? (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-aurora-ink shadow-inner-glow transition hover:-translate-y-1 hover:border-aurora-cyan dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
                    <Icon className="mr-2 inline" size={17} /> {label}
                  </a>
                ) : (
                  <span key={label} className="rounded-full border border-dashed border-slate-300 bg-white/50 px-5 py-3 text-sm font-black text-slate-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-aurora-slate">
                    <Icon className="mr-2 inline" size={17} /> {label} placeholder
                  </span>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {toast.message ? (
        <div className="fixed bottom-5 right-5 z-50 max-w-md animate-float rounded-3xl border border-white/30 bg-white/95 p-5 shadow-luxury backdrop-blur-2xl dark:border-white/10 dark:bg-aurora-obsidian/95" role="status" aria-live="polite">
          <div className="flex gap-3">
            <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-white ${toast.type === 'success' ? 'bg-emerald-500' : toast.type === 'warning' ? 'bg-amber-500' : 'bg-red-500'}`}>
              {toast.type === 'success' ? <CheckCircle2 size={20} /> : <Clock3 size={20} />}
            </span>
            <div>
              <p className="font-black text-aurora-ink dark:text-white">{toast.type === 'success' ? 'Request submitted' : toast.type === 'warning' ? 'Backend unavailable' : 'Review required'}</p>
              <p className="mt-1 text-sm font-semibold leading-6 text-slate-600 dark:text-aurora-slate">{toast.message}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
