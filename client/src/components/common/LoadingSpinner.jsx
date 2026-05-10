export default function LoadingSpinner({ label = 'Loading...' }) {
  return <div className="flex min-h-40 flex-col items-center justify-center gap-3 text-slate-600 dark:text-aurora-slate"><span className="h-10 w-10 animate-spin rounded-full border-4 border-aurora-cyan/20 border-t-aurora-cyan" /><span className="text-sm font-semibold">{label}</span></div>;
}
