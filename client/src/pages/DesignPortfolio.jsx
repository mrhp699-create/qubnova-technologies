import { useMemo, useState } from 'react';
import { ArrowRight, BadgeCheck, Brush, Image as ImageIcon, Layers3, Sparkles, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const categories = [
  'All',
  'Posters',
  'Flyers',
  'Social Media Posts',
  'Product Ads',
  'YouTube Thumbnails',
  'Business Banners',
  'Brand Designs',
];

const designItems = [
  {
    title: 'Perfume Product Poster',
    category: 'Product Ads',
    purpose: 'Luxury product promotion for a fragrance launch',
    tools: ['Photoshop', 'Illustrator', 'Figma'],
    description: 'A premium perfume visual with cinematic lighting, glass reflections, and an editorial ad layout built for social campaigns and retail promotion.',
    palette: 'from-[#18122B] via-[#7C3AED] to-[#F8D36A]',
    accent: 'text-aurora-gold',
    height: 'xl:min-h-[42rem]',
    mockup: 'PERFUME',
  },
  {
    title: 'Coffee Advertisement Poster',
    category: 'Posters',
    purpose: 'Cafe campaign poster for seasonal offers',
    tools: ['Photoshop', 'Canva Pro'],
    description: 'Warm coffee-toned artwork designed to make a cafe offer feel cozy, premium, and instantly readable across print and digital placements.',
    palette: 'from-[#2A1308] via-[#9A5A25] to-[#F8D36A]',
    accent: 'text-amber-200',
    mockup: 'COFFEE',
  },
  {
    title: 'Business Service Flyer',
    category: 'Flyers',
    purpose: 'Lead-generation flyer for a professional service',
    tools: ['Illustrator', 'Figma'],
    description: 'A clean service flyer with bold hierarchy, trust-focused content blocks, and a polished layout for local business marketing.',
    palette: 'from-[#061B2F] via-[#0EA5E9] to-[#7C3AED]',
    accent: 'text-aurora-cyan',
    mockup: 'SERVICE',
  },
  {
    title: 'Social Media Promo Design',
    category: 'Social Media Posts',
    purpose: 'High-impact Instagram and Facebook promotion',
    tools: ['Canva Pro', 'Photoshop'],
    description: 'A scroll-stopping promo creative with vivid gradients, CTA-first composition, and reusable elements for a campaign series.',
    palette: 'from-[#3B0764] via-[#D946EF] to-[#00D4FF]',
    accent: 'text-fuchsia-100',
    mockup: 'PROMO',
  },
  {
    title: 'YouTube Thumbnail Concept',
    category: 'YouTube Thumbnails',
    purpose: 'Clickable thumbnail for educational video content',
    tools: ['Photoshop', 'Figma'],
    description: 'A dramatic thumbnail concept using large type, directional contrast, and a punchy focal point to improve click-through appeal.',
    palette: 'from-[#020617] via-[#DC2626] to-[#FACC15]',
    accent: 'text-yellow-200',
    height: 'xl:min-h-[42rem]',
    mockup: 'THUMBNAIL',
  },
  {
    title: 'Digital Marketing Banner',
    category: 'Business Banners',
    purpose: 'Website and ad banner for campaign awareness',
    tools: ['Figma', 'Illustrator'],
    description: 'A sleek business banner with layered geometric shapes, conversion-focused copy zones, and a polished agency look.',
    palette: 'from-[#082F49] via-[#2563EB] to-[#22C55E]',
    accent: 'text-emerald-100',
    mockup: 'GROWTH',
  },
  {
    title: 'Product Launch Poster',
    category: 'Posters',
    purpose: 'Launch announcement for a new digital product',
    tools: ['Photoshop', 'Figma', 'Blender'],
    description: 'A futuristic launch poster with depth, glowing product framing, and premium tech energy for announcement campaigns.',
    palette: 'from-[#050816] via-[#7C3AED] to-[#00D4FF]',
    accent: 'text-aurora-cyan',
    mockup: 'LAUNCH',
  },
  {
    title: 'Brand Identity Mockup',
    category: 'Brand Designs',
    purpose: 'Brand presentation for identity and visual system',
    tools: ['Illustrator', 'Photoshop', 'Figma'],
    description: 'A refined brand mockup showcasing logo usage, color direction, stationery styling, and cohesive visual identity presentation.',
    palette: 'from-[#111827] via-[#64748B] to-[#F8D36A]',
    accent: 'text-aurora-gold',
    mockup: 'BRAND',
  },
];

function PlaceholderArtwork({ design, isLarge = false }) {
  return (
    <div className={`relative h-full min-h-[22rem] overflow-hidden bg-gradient-to-br transition duration-700 ease-out group-hover:scale-105 ${design.palette}`}>
      <div className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-aurora-cyan/25 blur-3xl" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute inset-x-8 top-8 flex items-center justify-between text-white/80">
        <span className="rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] backdrop-blur-md">Qubnova Studio</span>
        <Sparkles className="h-5 w-5" />
      </div>
      <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2">
        <div className="mb-5 h-20 w-20 rounded-[1.75rem] border border-white/30 bg-white/20 p-4 shadow-2xl backdrop-blur-xl">
          <ImageIcon className="h-full w-full text-white" />
        </div>
        <p className={`font-black uppercase leading-none tracking-tight text-white drop-shadow-2xl ${isLarge ? 'text-5xl sm:text-7xl' : 'text-4xl'}`}>{design.mockup}</p>
        <div className="mt-5 h-2 w-28 rounded-full bg-white/75" />
        <div className="mt-3 h-2 w-44 rounded-full bg-white/35" />
      </div>
      <div className="absolute bottom-8 right-8 grid h-24 w-24 place-items-center rounded-full border border-white/25 bg-white/15 text-center text-[0.62rem] font-black uppercase tracking-[0.2em] text-white shadow-2xl backdrop-blur-xl">
        Premium<br />Visual
      </div>
    </div>
  );
}

function DesignModal({ design, onClose }) {
  return (
    <AnimatePresence>
      {design && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-aurora-obsidian/85 p-4 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.article initial={{ scale: 0.94, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 24 }} className="premium-border max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] bg-white shadow-violet dark:bg-aurora-midnight">
            <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="min-h-[26rem] overflow-hidden rounded-t-[2rem] lg:rounded-l-[2rem] lg:rounded-tr-none">
                <PlaceholderArtwork design={design} isLarge />
              </div>
              <div className="relative p-6 sm:p-8 lg:p-10">
                <button onClick={onClose} className="absolute right-5 top-5 rounded-full border border-slate-200 bg-white/80 p-3 text-aurora-ink shadow-lg transition hover:scale-105 hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-white" aria-label="Close design detail modal"><X className="h-5 w-5" /></button>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-aurora-violet dark:text-aurora-cyan">Design Detail</p>
                <h2 className="mt-4 max-w-md text-3xl font-black tracking-tight text-aurora-ink dark:text-white sm:text-4xl">{design.title}</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-aurora-violet/10 px-4 py-2 text-sm font-black text-aurora-violet dark:bg-aurora-cyan/10 dark:text-aurora-cyan">{design.category}</span>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600 dark:bg-white/10 dark:text-aurora-slate">Studio concept</span>
                </div>
                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Purpose</p>
                    <p className="mt-2 text-lg font-bold text-aurora-ink dark:text-white">{design.purpose}</p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Tools used</p>
                    <div className="mt-3 flex flex-wrap gap-2">{design.tools.map((tool) => <span key={tool} className="rounded-2xl border border-slate-200 px-3 py-2 text-sm font-bold text-slate-600 dark:border-white/10 dark:text-aurora-slate">{tool}</span>)}</div>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Description</p>
                    <p className="mt-2 leading-8 text-slate-600 dark:text-aurora-slate">{design.description}</p>
                  </div>
                </div>
                <button onClick={onClose} className="mt-8 rounded-full bg-aurora-ink px-6 py-3 text-sm font-black text-white shadow-luxury transition hover:-translate-y-1 dark:bg-white dark:text-aurora-ink">Close preview</button>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function DesignPortfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedDesign, setSelectedDesign] = useState(null);

  const filteredDesigns = useMemo(() => (
    activeCategory === 'All' ? designItems : designItems.filter((design) => design.category === activeCategory)
  ), [activeCategory]);

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="absolute inset-0 -z-10 bg-premium-mesh" />
        <div className="absolute left-1/2 top-28 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-aurora-fuchsia/20 blur-3xl" />
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.82fr]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/70 px-5 py-3 text-sm font-black uppercase tracking-[0.24em] text-aurora-violet shadow-luxury backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 dark:text-aurora-cyan">
                <Brush className="h-4 w-4" /> Design Portfolio Hero
              </div>
              <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-tight text-aurora-ink dark:text-white sm:text-6xl lg:text-7xl">Design Portfolio by <span className="aurora-text">Qubnova Studio</span></h1>
              <p className="mt-6 max-w-3xl text-lg font-medium leading-9 text-slate-600 dark:text-aurora-slate sm:text-xl">A creative collection of posters, flyers, social media designs, product ads, thumbnails, and brand visuals.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Premium ad creatives', 'Brand-ready layouts', 'Conversion-focused visuals'].map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm font-bold text-slate-600 shadow-lg dark:bg-white/10 dark:text-aurora-slate"><BadgeCheck className="h-4 w-4 text-aurora-green" />{item}</span>)}
              </div>
            </div>
            <div className="premium-border rounded-[2.5rem] bg-white/70 p-3 shadow-violet backdrop-blur-2xl dark:bg-white/[0.07]">
              <div className="grid grid-cols-2 gap-3 overflow-hidden rounded-[2rem]">
                {designItems.slice(0, 4).map((design, index) => <div key={design.title} className={`${index === 0 ? 'row-span-2 min-h-[24rem]' : 'min-h-44'} overflow-hidden rounded-[1.5rem]`}><PlaceholderArtwork design={design} /></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container-page">
          <div className="glass-panel rounded-[2rem] p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-3 px-2 text-sm font-black uppercase tracking-[0.24em] text-slate-500 dark:text-aurora-slate"><Layers3 className="h-4 w-4" /> Category Filters</div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-full px-5 py-3 text-sm font-black transition ${activeCategory === category ? 'bg-aurora-ink text-white shadow-luxury dark:bg-white dark:text-aurora-ink' : 'bg-white/80 text-slate-600 hover:-translate-y-1 hover:text-aurora-violet dark:bg-white/10 dark:text-aurora-slate dark:hover:text-white'}`}>{category}</button>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-10">
        <div className="container-page">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-aurora-violet dark:text-aurora-cyan">Masonry/Grid Gallery</p>
              <h2 className="mt-3 text-3xl font-black text-aurora-ink dark:text-white sm:text-4xl">Selected creative visuals</h2>
            </div>
            <p className="max-w-xl text-slate-600 dark:text-aurora-slate">Every card uses premium abstract artwork placeholders, so the portfolio feels complete and polished even before real campaign images are uploaded.</p>
          </div>
          <div className="grid items-start gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredDesigns.map((design) => <button key={design.title} onClick={() => setSelectedDesign(design)} className={`group premium-border relative min-h-[32rem] overflow-hidden rounded-[2rem] text-left shadow-luxury transition duration-500 hover:-translate-y-2 ${design.height || ''}`}>
              <PlaceholderArtwork design={design} />
              <div className="absolute inset-0 bg-gradient-to-t from-aurora-obsidian via-aurora-obsidian/35 to-transparent opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className={`inline-flex rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] ${design.accent} backdrop-blur-xl`}>{design.category}</span>
                <h3 className="mt-4 text-2xl font-black text-white">{design.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/75">{design.purpose}</p>
                <div className="mt-4 flex flex-wrap gap-2">{design.tools.slice(0, 2).map((tool) => <span key={tool} className="rounded-full bg-white/12 px-3 py-1 text-xs font-bold text-white/75 backdrop-blur-md">{tool}</span>)}</div>
                <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/70">{design.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-aurora-ink shadow-lg transition group-hover:gap-3">Preview <ArrowRight className="h-4 w-4" /></span>
              </div>
            </button>)}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="premium-border relative overflow-hidden rounded-[2.5rem] bg-aurora-ink p-8 shadow-violet dark:bg-white/[0.06] sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-aurora-linear opacity-20" />
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-aurora-cyan/30 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.26em] text-aurora-gold">Creative Services CTA</p>
                <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">Need premium visuals for your next campaign?</h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-white/72">Qubnova Studio can design posters, flyers, product ads, thumbnails, business banners, and complete brand visuals tailored for your market.</p>
              </div>
              <a href="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black text-aurora-ink shadow-luxury transition hover:-translate-y-1">Start a design project <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <DesignModal design={selectedDesign} onClose={() => setSelectedDesign(null)} />
    </>
  );
}
