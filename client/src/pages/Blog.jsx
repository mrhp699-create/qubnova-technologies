import PageHero from '../components/common/PageHero.jsx';
import Card from '../components/common/Card.jsx';
import GradientButton from '../components/common/GradientButton.jsx';
import { posts } from '../data/siteData.js';

export default function Blog() {
  return <><PageHero eyebrow="Blog" title="Ideas on AI, SaaS, automation, and premium digital strategy." description="Practical writing for founders and teams who want better software outcomes." />
  <section className="section-spacing"><div className="container-page grid gap-6 md:grid-cols-3">{posts.map((post) => <Card key={post.slug}><p className="text-sm font-semibold text-aurora-violet dark:text-aurora-cyan">{post.date}</p><h2 className="mt-3 text-2xl font-black text-aurora-ink dark:text-white">{post.title}</h2><p className="mt-3 text-slate-600 dark:text-aurora-slate">{post.excerpt}</p><GradientButton to={`/blog/${post.slug}`} className="mt-5 py-2.5">Read article</GradientButton></Card>)}</div></section></>;
}
