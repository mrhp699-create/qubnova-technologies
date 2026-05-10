import { motion } from 'framer-motion';

export default function Card({ children, className = '', as: Component = motion.div }) {
  return (
    <Component
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.01 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`group premium-border rounded-[2rem] bg-white/[0.82] p-6 shadow-luxury shadow-inner-glow backdrop-blur-2xl transition dark:bg-white/[0.07] ${className}`}
    >
      <span className="shine-overlay" />
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
