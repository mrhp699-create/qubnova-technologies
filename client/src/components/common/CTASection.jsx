import { motion } from 'framer-motion';
import GradientButton from './GradientButton.jsx';

export default function CTASection({ title = 'Ready to build your next unfair advantage?', description = 'Partner with Qubnova Technologies to design, build, and launch software that compounds your growth.', buttonLabel = 'Start a project', buttonTo = '/contact' }) {
  return (
    <section className="section-spacing">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="premium-border relative isolate overflow-hidden rounded-[2.5rem] bg-aurora-obsidian p-8 text-center text-white shadow-violet sm:p-12 lg:p-16"
        >
          <div className="absolute inset-0 bg-premium-mesh opacity-95" />
          <div className="absolute inset-0 mesh-grid opacity-25" />
          <div className="absolute -left-16 top-12 h-64 w-64 rounded-full bg-aurora-cyan/20 blur-3xl animate-float" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-aurora-fuchsia/20 blur-3xl animate-float-slow" />
          <div className="relative z-10">
            <p className="mx-auto mb-5 h-px max-w-xs bg-gold-line" />
            <h2 className="mx-auto max-w-4xl text-3xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">{title}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-aurora-slate">{description}</p>
            <GradientButton to={buttonTo} className="mt-9">{buttonLabel}</GradientButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
