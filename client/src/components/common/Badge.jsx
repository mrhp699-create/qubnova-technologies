export default function Badge({ children, className = '' }) {
  return <span className={`inline-flex items-center rounded-full border border-aurora-cyan/30 bg-aurora-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-aurora-violet dark:text-aurora-cyan ${className}`}>{children}</span>;
}
