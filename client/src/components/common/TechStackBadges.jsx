import { techStack } from '../../data/siteData.js';

export default function TechStackBadges({ items = techStack }) {
  const repeated = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-aurora-snow to-transparent dark:from-aurora-midnight" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-aurora-snow to-transparent dark:from-aurora-midnight" />
      <div className="flex w-max gap-3 animate-marquee hover:[animation-play-state:paused]">
        {repeated.map((item, index) => <span key={`${item}-${index}`} className="premium-border rounded-full bg-white/[0.80] px-5 py-2.5 text-sm font-black text-aurora-ink shadow-sm backdrop-blur-xl dark:bg-white/10 dark:text-white">{item}</span>)}
      </div>
    </div>
  );
}
