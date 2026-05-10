import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '' }) {
  return <motion.div whileHover={{ y: -5 }} className={`glass-panel rounded-3xl p-6 ${className}`}>{children}</motion.div>;
}
