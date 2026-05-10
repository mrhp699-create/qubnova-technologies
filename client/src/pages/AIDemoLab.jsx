import PageHero from '../components/common/PageHero.jsx';
import Card from '../components/common/Card.jsx';
import GradientButton from '../components/common/GradientButton.jsx';
import { labDemos } from '../data/siteData.js';

export default function AIDemoLab() {
  return <><PageHero eyebrow="AI Demo Lab" title="Prototype intelligent workflows before you invest in a full build." description="Explore concept demos for copilots, document intelligence, creative generation, and operations automation." />
  <section className="section-spacing"><div className="container-page grid gap-6 md:grid-cols-2">{labDemos.map(({ icon: Icon, title, description }, index) => <Card key={title}><div className="flex items-start justify-between"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow"><Icon size={30} /></span><span className="rounded-full bg-aurora-cyan/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-aurora-violet dark:text-aurora-cyan">Demo 0{index + 1}</span></div><h2 className="mt-6 text-2xl font-black text-aurora-ink dark:text-white">{title}</h2><p className="mt-3 leading-7 text-slate-600 dark:text-aurora-slate">{description}</p><GradientButton to="/contact" className="mt-6 py-2.5">Request demo</GradientButton></Card>)}</div></section></>;
}
