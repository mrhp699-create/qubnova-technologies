import { motion } from 'framer-motion';
import Badge from './Badge.jsx';

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative isolate overflow-hidden bg-aurora-obsidian pt-32 text-white sm:pt-36">
      <div className="absolute inset-0 bg-premium-mesh opacity-95" />
      <div className="absolute inset-0 mesh-grid opacity-25" />
      <div className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-aurora-cyan/20 blur-3xl animate-float" />
      <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-aurora-violet/25 blur-3xl animate-float-slow" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gold-line" />
      <div className="container-page section-spacing relative z-10 text-center">
        {eyebrow && <Badge className="text-aurora-cyan">{eyebrow}</Badge>}
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto mt-6 max-w-6xl text-4xl font-black tracking-[-0.055em] sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-aurora-slate"
          >
            {description}
          </motion.p>
        )}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}
