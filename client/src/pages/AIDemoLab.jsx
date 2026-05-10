import PageHero from '../components/common/PageHero.jsx';
import Card from '../components/common/Card.jsx';
import GradientButton from '../components/common/GradientButton.jsx';
import { labDemos } from '../data/siteData.js';

export default function AIDemoLab() {
  return <><PageHero eyebrow="AI Demo Lab" title="Prototype intelligent workflows before you invest in a full build." description="Explore concept demos for copilots, document intelligence, creative generation, and operations automation." />
  <section className="section-spacing"><div className="container-page grid gap-6 md:grid-cols-2">{labDemos.map(({ icon: Icon, title, description }) => <Card key={title}><Icon size={40} className="text-aurora-violet dark:text-aurora-cyan" /><h2 className="mt-5 text-2xl font-bold text-aurora-ink dark:text-white">{title}</h2><p className="mt-3 leading-7 text-slate-600 dark:text-aurora-slate">{description}</p><GradientButton to="/contact" className="mt-5 py-2.5">Request demo</GradientButton></Card>)}</div></section></>;
}
