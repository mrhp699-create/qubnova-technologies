import { motion } from 'framer-motion';
import Badge from './Badge.jsx';

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden bg-aurora-midnight bg-aurora-radial pt-32 text-white sm:pt-36">
      <div className="container-page section-spacing relative z-10 text-center">
        {eyebrow && <Badge className="text-aurora-cyan">{eyebrow}</Badge>}
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mt-5 max-w-5xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">{title}</motion.h1>
        {description && <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-aurora-slate">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
