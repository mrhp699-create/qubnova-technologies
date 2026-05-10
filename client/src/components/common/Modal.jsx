import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Modal({ open, onClose, title, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-aurora-midnight/75 p-4 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white p-6 shadow-violet dark:bg-aurora-midnight">
            <div className="mb-4 flex items-center justify-between gap-4">
              {title && <h3 className="text-xl font-bold text-aurora-ink dark:text-white">{title}</h3>}
              <button onClick={onClose} className="ml-auto rounded-full p-2 hover:bg-slate-100 dark:hover:bg-white/10" aria-label="Close modal"><X /></button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
