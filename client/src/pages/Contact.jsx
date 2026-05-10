import { useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import PageHero from '../components/common/PageHero.jsx';
import GradientButton from '../components/common/GradientButton.jsx';
import { api, getApiErrorMessage } from '../api/client.js';

const contactCards = [
  [Mail, 'mrhp699@gmail.com', 'mailto:mrhp699@gmail.com'],
  [Phone, '0310 8829886', 'tel:+923108829886'],
  [MapPin, 'Remote-first · Worldwide'],
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });
    setIsSubmitting(true);

    try {
      await api.post('/messages', formData);
      setFormData(initialForm);
      setStatus({ type: 'success', message: 'Inquiry sent successfully. Your message is now saved in the admin inbox.' });
    } catch (error) {
      setStatus({ type: 'error', message: getApiErrorMessage(error, 'Could not send the inquiry. Please email or WhatsApp us directly.') });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what you want to build." description="Share your goals and Qubnova will help shape the roadmap, scope, and first launch milestone." />
      <section className="section-spacing">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {contactCards.map(([Icon, text, href]) => {
              const content = (
                <>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow"><Icon size={22} /></span>
                  <span className="font-black text-aurora-ink dark:text-white">{text}</span>
                </>
              );

              return href ? (
                <a key={text} href={href} className="premium-border flex items-center gap-4 rounded-3xl bg-white/75 p-5 shadow-luxury backdrop-blur-xl transition hover:-translate-y-1 dark:bg-white/[0.06]">
                  {content}
                </a>
              ) : (
                <div key={text} className="premium-border flex items-center gap-4 rounded-3xl bg-white/75 p-5 shadow-luxury backdrop-blur-xl dark:bg-white/[0.06]">
                  {content}
                </div>
              );
            })}
            <div className="premium-border rounded-[2rem] bg-aurora-obsidian p-6 text-white shadow-violet">
              <Sparkles className="text-aurora-gold" />
              <h2 className="mt-4 text-2xl font-black tracking-[-0.04em]">Premium discovery experience</h2>
              <p className="mt-3 leading-7 text-aurora-slate">Every inquiry is scoped around visual quality, business signal, technical feasibility, and first-launch momentum.</p>
              <p className="mt-4 rounded-2xl bg-white/10 p-4 text-sm font-bold leading-6 text-white">Form submissions are saved to your protected admin dashboard, so you can clearly read each visitor query and message.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="premium-border rounded-[2rem] bg-white/[0.82] p-6 shadow-luxury backdrop-blur-2xl dark:bg-white/[0.07]">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="input-luxury" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
              <input className="input-luxury" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input className="input-luxury" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone / WhatsApp" />
              <input className="input-luxury" name="projectType" value={formData.projectType} onChange={handleChange} placeholder="Project type" required />
            </div>
            <textarea className="input-luxury mt-4 min-h-40" name="message" value={formData.message} onChange={handleChange} placeholder="What are you building?" required />
            {status.message ? (
              <div className={`mt-4 rounded-2xl px-4 py-3 text-sm font-bold ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-200' : 'bg-red-500/10 text-red-700 dark:text-red-200'}`}>
                {status.type === 'success' ? <CheckCircle2 className="mr-2 inline" size={18} /> : null}
                {status.message}
              </div>
            ) : null}
            <GradientButton type="submit" disabled={isSubmitting} className="mt-5 disabled:cursor-not-allowed disabled:opacity-70">
              <Send size={18} /> {isSubmitting ? 'Sending inquiry...' : 'Send inquiry'}
            </GradientButton>
          </form>
        </div>
      </section>
    </>
  );
}
