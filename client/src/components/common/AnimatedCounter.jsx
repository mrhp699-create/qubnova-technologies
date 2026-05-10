import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ value, suffix = '', label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => spring.on('change', (latest) => setDisplay(Math.round(latest))), [spring]);

  return (
    <div ref={ref} className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur">
      <motion.div className="text-4xl font-black text-white">{display}{suffix}</motion.div>
      <p className="mt-2 text-sm font-medium text-aurora-slate">{label}</p>
    </div>
  );
}
