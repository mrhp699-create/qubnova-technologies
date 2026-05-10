import { useParams } from 'react-router-dom';
import EmptyState from '../components/common/EmptyState.jsx';
import PageHero from '../components/common/PageHero.jsx';
import CTASection from '../components/common/CTASection.jsx';
import { posts } from '../data/siteData.js';

export default function BlogDetails() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);
  if (!post) return <main className="pt-32"><div className="container-page section-spacing"><EmptyState title="Article not found" actionLabel="Back to blog" actionTo="/blog" /></div></main>;
  return <><PageHero eyebrow={post.date} title={post.title} description={post.excerpt} />
  <article className="section-spacing"><div className="container-page max-w-3xl text-lg leading-9 text-slate-700 dark:text-aurora-slate"><p>Winning teams do not adopt technology because it is trendy. They connect tools to clear bottlenecks, define a measurable business outcome, and launch small enough to learn quickly.</p><p className="mt-6">At Qubnova, the best roadmaps combine product strategy, clean user experience, secure engineering, and automation that compounds over time. This lets founders ship confidently without accumulating chaos.</p><p className="mt-6">The practical next step is a focused discovery sprint: map workflows, identify highest-leverage opportunities, and prioritize the build that creates the strongest signal in the shortest time.</p></div></article><CTASection title="Turn this strategy into a shipped product." /></>;
}
