import { Inbox } from 'lucide-react';
import Button from './Button.jsx';

export default function EmptyState({ title = 'Nothing here yet', description = 'Check back soon for new updates.', actionLabel, actionTo }) {
  return <div className="rounded-3xl border border-dashed border-aurora-slate p-10 text-center dark:border-white/15"><Inbox className="mx-auto mb-4 text-aurora-cyan" size={42} /><h3 className="text-xl font-bold text-aurora-ink dark:text-white">{title}</h3><p className="mx-auto mt-2 max-w-md text-slate-600 dark:text-aurora-slate">{description}</p>{actionLabel && <Button to={actionTo} className="mt-6">{actionLabel}</Button>}</div>;
}
