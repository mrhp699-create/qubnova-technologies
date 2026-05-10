import { useState } from 'react';
import ImagePreviewModal from '../components/common/ImagePreviewModal.jsx';
import PageHero from '../components/common/PageHero.jsx';
import { designs } from '../data/siteData.js';

export default function DesignPortfolio() {
  const [active, setActive] = useState(null);
  return <><PageHero eyebrow="Design Portfolio" title="SaaS-grade visuals with brand depth and conversion intent." description="Browse interface, web, brand, and product concepts shaped by the Aurora design language." />
  <section className="section-spacing"><div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{designs.map((design) => <button key={design.title} onClick={() => setActive(design)} className="group overflow-hidden rounded-3xl text-left shadow-sm"><img src={design.image} alt={design.title} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" /><div className="bg-white p-5 dark:bg-white/10"><p className="text-sm font-semibold text-aurora-violet dark:text-aurora-cyan">{design.tag}</p><h2 className="mt-1 text-xl font-bold text-aurora-ink dark:text-white">{design.title}</h2></div></button>)}</div></section><ImagePreviewModal open={Boolean(active)} onClose={() => setActive(null)} image={active?.image} title={active?.title} /></>;
}
