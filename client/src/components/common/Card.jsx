import { motion } from 'framer-motion';

export default function Card({ children, className = '', as: Component = motion.div }) {
  return (
    <Component whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className={`rounded-3xl border border-aurora-slate/60 bg-white p-6 shadow-sm transition dark:border-white/10 dark:bg-white/[0.06] ${className}`}>
      {children}
    </Component>
  );
}
