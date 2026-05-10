export default function Badge({ children, className = '' }) {
  return (
    <span className={`premium-border inline-flex items-center gap-2 rounded-full bg-white/75 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.22em] text-aurora-violet shadow-sm backdrop-blur-xl dark:bg-white/10 dark:text-aurora-cyan ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-aurora-cyan shadow-glow" />
      {children}
    </span>
  );
}
