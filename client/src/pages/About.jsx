import PageHero from '../components/common/PageHero.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import GlassCard from '../components/common/GlassCard.jsx';
import CTASection from '../components/common/CTASection.jsx';

export default function About() {
  const values = ['Clarity before code', 'Premium interfaces', 'Measurable business outcomes', 'Secure scalable foundations'];
  return <><PageHero eyebrow="About" title="A product-minded technology partner for the AI era." description="Qubnova Technologies, founded by Moaz Saeed, helps brands turn complex ideas into elegant, revenue-ready software." />
  <section className="section-spacing"><div className="container-page grid gap-10 lg:grid-cols-2"><div><SectionHeading align="left" eyebrow="Philosophy" title="We build with strategy, speed, and taste." description="Every engagement starts with the business model, user journey, and operational workflow. Then we ship polished systems that are practical to maintain and ready to grow." /></div><div className="grid gap-4">{values.map((value, index) => <GlassCard key={value}><span className="aurora-text text-3xl font-black">0{index + 1}</span><h3 className="mt-2 text-xl font-bold text-aurora-ink dark:text-white">{value}</h3></GlassCard>)}</div></div></section><CTASection title="Let’s architect your next digital product." /></>;
}
