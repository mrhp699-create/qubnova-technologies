import { useState } from 'react';
import ImagePreviewModal from '../components/common/ImagePreviewModal.jsx';
import PageHero from '../components/common/PageHero.jsx';
import { designs } from '../data/siteData.js';

export default function DesignPortfolio() {
  const [active, setActive] = useState(null);
  return <><PageHero eyebrow="Design Portfolio" title="SaaS-grade visuals with brand depth and conversion intent." description="Browse interface, web, brand, and product concepts shaped by the Aurora design language." />
  <section className="section-spacing"><div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{designs.map((design, index) => <button key={design.title} onClick={() => setActive(design)} className="group premium-border overflow-hidden rounded-[2rem] bg-white/80 text-left shadow-luxury backdrop-blur-xl transition hover:-translate-y-2 dark:bg-white/[0.07]"><div className="image-polish h-80 rounded-b-none"><img src={design.image} alt={design.title} /></div><div className="p-5"><p className="text-sm font-black uppercase tracking-[0.2em] text-aurora-violet dark:text-aurora-cyan">{design.tag}</p><h2 className="mt-2 text-xl font-black text-aurora-ink dark:text-white">{design.title}</h2><p className="mt-3 text-sm font-semibold text-slate-500 dark:text-aurora-slate">Visual system 0{index + 1}</p></div></button>)}</div></section><ImagePreviewModal open={Boolean(active)} onClose={() => setActive(null)} image={active?.image} title={active?.title} /></>;
}
