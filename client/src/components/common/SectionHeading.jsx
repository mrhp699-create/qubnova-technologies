import { motion } from 'framer-motion';
import Badge from './Badge.jsx';

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto';
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`mb-12 flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2 className="text-3xl font-black tracking-tight text-aurora-ink dark:text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="text-base leading-8 text-slate-600 dark:text-aurora-slate sm:text-lg">{description}</p>}
    </motion.div>
  );
}
