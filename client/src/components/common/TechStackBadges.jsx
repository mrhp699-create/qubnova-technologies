import { techStack } from '../../data/siteData.js';

export default function TechStackBadges({ items = techStack }) {
  return <div className="flex flex-wrap justify-center gap-3">{items.map((item) => <span key={item} className="rounded-full border border-aurora-slate/60 bg-white px-4 py-2 text-sm font-semibold text-aurora-ink shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white">{item}</span>)}</div>;
}
