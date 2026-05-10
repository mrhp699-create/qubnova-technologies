import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -7, rotateX: 1, rotateY: -1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`group premium-border glass-panel rounded-[2rem] p-6 ${className}`}
    >
      <span className="shine-overlay" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
