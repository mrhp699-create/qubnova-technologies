import { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, CalendarDays, Clock3, Search, Sparkles } from 'lucide-react';
import PageHero from '../components/common/PageHero.jsx';
import Card from '../components/common/Card.jsx';
import GradientButton from '../components/common/GradientButton.jsx';
import Button from '../components/common/Button.jsx';

const categories = [
  'Web Development',
  'AI Tools',
  'SaaS',
  'UI/UX',
  'Business Dashboards',
  'Deployment',
  'Digital Design',
];

const blogPosts = [
  {
    slug: 'how-ai-chatbots-help-small-businesses',
    title: 'How AI Chatbots Help Small Businesses',
    category: 'AI Tools',
    excerpt: 'Learn how a focused AI chatbot can answer common questions, qualify leads, and support customers without adding more admin work.',
    readTime: '5 min read',
    date: 'May 10, 2026',
    palette: 'from-cyan-400 via-blue-500 to-violet-600',
    takeaways: ['Use chatbots for FAQs, lead qualification, booking support, and first-response customer service.', 'Start with a narrow use case, connect it to your website, and review conversations weekly to improve accuracy.'],
  },
  {
    slug: 'why-every-business-needs-a-modern-website',
    title: 'Why Every Business Needs a Modern Website',
    category: 'Web Development',
    excerpt: 'A modern website builds trust, explains your offer clearly, and turns online visitors into qualified inquiries and paying clients.',
    readTime: '6 min read',
    date: 'May 08, 2026',
    palette: 'from-violet-500 via-fuchsia-500 to-rose-500',
    takeaways: ['A modern website should load quickly, explain your services clearly, and make contact options easy to find.', 'Strong copy, responsive design, and basic SEO help customers trust your business before they speak with you.'],
  },
  {
    slug: 'what-is-a-saas-mvp',
    title: 'What Is a SaaS MVP?',
    category: 'SaaS',
    excerpt: 'A simple explanation of SaaS MVPs, what to include first, and how founders can validate demand before overbuilding.',
    readTime: '4 min read',
    date: 'May 06, 2026',
    palette: 'from-emerald-400 via-teal-500 to-cyan-600',
    takeaways: ['A SaaS MVP is the smallest paid product that proves people need your software solution.', 'Prioritize authentication, the core workflow, payments if needed, analytics, and feedback loops before advanced features.'],
  },
  {
    slug: 'how-dashboards-help-business-owners',
    title: 'How Dashboards Help Business Owners',
    category: 'Business Dashboards',
    excerpt: 'See how dashboards turn scattered spreadsheets, sales data, and operations metrics into decisions your team can act on faster.',
    readTime: '5 min read',
    date: 'May 04, 2026',
    palette: 'from-amber-400 via-orange-500 to-pink-500',
    takeaways: ['Dashboards bring sales, operations, finance, and support data into one clear decision-making view.', 'The best dashboard starts with a few high-value metrics instead of every possible chart.'],
  },
  {
    slug: 'mern-stack-explained-simply',
    title: 'MERN Stack Explained Simply',
    category: 'Web Development',
    excerpt: 'Understand MongoDB, Express, React, and Node.js in plain language—and why the stack is popular for custom web applications.',
    readTime: '7 min read',
    date: 'May 01, 2026',
    palette: 'from-sky-400 via-indigo-500 to-purple-600',
    takeaways: ['MERN combines MongoDB for data, Express and Node.js for backend logic, and React for the user interface.', 'It is useful for custom dashboards, portals, marketplaces, SaaS MVPs, and API-powered web apps.'],
  },
  {
    slug: 'how-ai-tools-can-save-time',
    title: 'How AI Tools Can Save Time',
    category: 'AI Tools',
    excerpt: 'Practical examples of using AI tools to draft content, summarize documents, automate workflows, and speed up daily operations.',
    readTime: '5 min read',
    date: 'April 28, 2026',
    palette: 'from-lime-400 via-green-500 to-emerald-600',
    takeaways: ['AI tools can summarize calls, draft content, categorize requests, and reduce repetitive manual work.', 'The biggest gains come from combining AI with clean processes, templates, and human review.'],
  },
  {
    slug: 'why-ui-ux-matters-for-online-business',
    title: 'Why UI/UX Matters for Online Business',
    category: 'UI/UX',
    excerpt: 'Good UI/UX reduces confusion, improves trust, and helps customers move from interest to action with fewer drop-offs.',
    readTime: '6 min read',
    date: 'April 24, 2026',
    palette: 'from-pink-400 via-rose-500 to-orange-500',
    takeaways: ['UI affects how professional your brand feels; UX affects how easily users complete the next step.', 'Clear navigation, readable layouts, accessible forms, and consistent visual hierarchy improve conversion.'],
  },
  {
    slug: 'how-to-move-a-localhost-app-to-live-deployment',
    title: 'How to Move a Localhost App to Live Deployment',
    category: 'Deployment',
    excerpt: 'A beginner-friendly deployment checklist covering hosting, environment variables, builds, domains, and post-launch testing.',
    readTime: '8 min read',
    date: 'April 20, 2026',
    palette: 'from-slate-500 via-blue-600 to-cyan-500',
    takeaways: ['Deployment means preparing your app, server settings, environment variables, database, domain, and SSL for real users.', 'Always test forms, auth, payments, API calls, mobile layouts, and analytics after going live.'],
  },
];

const featuredPost = blogPosts[0];

function ArticleImage({ post, large = false }) {
  return (
    <div className={`relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${post.palette} ${large ? 'min-h-[320px]' : 'h-52'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.55),transparent_22rem)]" />
      <div className="absolute inset-0 mesh-grid opacity-25" />
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/25 blur-2xl" />
      <div className="absolute bottom-5 left-5 right-5">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white shadow-luxury backdrop-blur-xl">
          <BookOpen size={28} />
        </div>
        <p className="mt-5 max-w-sm text-2xl font-black leading-tight text-white drop-shadow-lg">{post.category} guide</p>
      </div>
    </div>
  );
}

function MetaRow({ post }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-bold text-slate-500 dark:text-aurora-slate">
      <span className="inline-flex items-center gap-2"><Clock3 size={16} />{post.readTime}</span>
      <span className="inline-flex items-center gap-2"><CalendarDays size={16} />{post.date}</span>
    </div>
  );
}

function CategoryBadge({ children }) {
  return <span className="inline-flex rounded-full bg-aurora-cyan/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-aurora-violet dark:bg-white/10 dark:text-aurora-cyan">{children}</span>;
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSlug, setExpandedSlug] = useState(featuredPost.slug);

  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = !query || `${post.title} ${post.category} ${post.excerpt}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <>
      <PageHero
        eyebrow="Blog / Insights"
        title="Insights by Qubnova Technologies"
        description="Simple, practical articles about web development, AI tools, SaaS MVPs, dashboards, UI/UX, and digital growth."
      >
        <div className="mx-auto grid max-w-4xl gap-4 rounded-[2rem] border border-white/15 bg-white/10 p-3 text-left shadow-luxury backdrop-blur-2xl md:grid-cols-[1fr_auto]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-aurora-slate" size={20} />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search articles about AI, websites, SaaS, dashboards..."
              className="w-full rounded-2xl border border-white/10 bg-white/90 py-4 pl-12 pr-4 text-sm font-semibold text-aurora-ink outline-none transition placeholder:text-slate-500 focus:border-aurora-cyan focus:ring-4 focus:ring-aurora-cyan/20 dark:bg-aurora-midnight/80 dark:text-white"
            />
          </label>
          <div className="flex items-center justify-center gap-2 rounded-2xl bg-aurora-obsidian/50 px-5 py-3 text-sm font-black text-white">
            <Sparkles size={18} className="text-aurora-cyan" />
            {filteredPosts.length} articles
          </div>
        </div>
      </PageHero>

      <section className="section-spacing">
        <div className="container-page">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-aurora-violet dark:text-aurora-cyan">Featured article</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-aurora-ink dark:text-white sm:text-4xl">Start with practical AI your customers can actually use.</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-aurora-slate">Educational content for business owners, founders, and teams planning better websites, AI workflows, SaaS products, dashboards, and digital experiences.</p>
          </div>

          <Card className="p-4 sm:p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <ArticleImage post={featuredPost} large />
              <div>
                <CategoryBadge>{featuredPost.category}</CategoryBadge>
                <h3 className="mt-5 text-3xl font-black tracking-tight text-aurora-ink dark:text-white sm:text-5xl">{featuredPost.title}</h3>
                <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-aurora-slate">{featuredPost.excerpt}</p>
                <MetaRow post={featuredPost} />
                {expandedSlug === featuredPost.slug && (
                  <div className="mt-6 rounded-3xl bg-slate-50 p-5 text-sm font-semibold leading-7 text-slate-600 dark:bg-white/[0.06] dark:text-aurora-slate">
                    <p className="font-black text-aurora-ink dark:text-white">What you will learn:</p>
                    <ul className="mt-3 space-y-2">
                      {featuredPost.takeaways.map((takeaway) => <li key={takeaway}>• {takeaway}</li>)}
                    </ul>
                  </div>
                )}
                <div className="mt-8 flex flex-wrap gap-3">
                  <GradientButton type="button" onClick={() => setExpandedSlug(featuredPost.slug)}>Read featured article</GradientButton>
                  <Button to="/contact" variant="secondary">Plan an AI tool</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="pb-10">
        <div className="container-page">
          <div className="premium-border rounded-[2rem] bg-white/75 p-5 shadow-luxury backdrop-blur-2xl dark:bg-white/[0.06] sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-aurora-violet dark:text-aurora-cyan">Blog categories</p>
                <h2 className="mt-2 text-2xl font-black text-aurora-ink dark:text-white">Browse by topic</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {['All', ...categories].map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-black transition ${activeCategory === category ? 'bg-aurora-ink text-white shadow-aurora dark:bg-white dark:text-aurora-midnight' : 'bg-slate-100 text-slate-600 hover:bg-aurora-cyan/10 hover:text-aurora-violet dark:bg-white/10 dark:text-aurora-slate dark:hover:text-white'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-32">
        <div className="container-page">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-aurora-violet dark:text-aurora-cyan">Latest insights</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-aurora-ink dark:text-white sm:text-4xl">Helpful articles for smarter digital growth</h2>
            </div>
            <p className="text-sm font-bold text-slate-500 dark:text-aurora-slate">Showing {filteredPosts.length} of {blogPosts.length} articles</p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.map((post) => (
                <Card key={post.slug} className="flex h-full flex-col p-4 sm:p-5">
                  <ArticleImage post={post} />
                  <div className="flex flex-1 flex-col pt-6">
                    <CategoryBadge>{post.category}</CategoryBadge>
                    <h3 className="mt-4 text-2xl font-black leading-tight text-aurora-ink dark:text-white">{post.title}</h3>
                    <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-aurora-slate">{post.excerpt}</p>
                    <MetaRow post={post} />
                    {expandedSlug === post.slug && (
                      <div className="mt-5 rounded-3xl bg-slate-50 p-5 text-sm font-semibold leading-7 text-slate-600 dark:bg-white/[0.06] dark:text-aurora-slate">
                        <p className="font-black text-aurora-ink dark:text-white">Key takeaways:</p>
                        <ul className="mt-3 space-y-2">
                          {post.takeaways.map((takeaway) => <li key={takeaway}>• {takeaway}</li>)}
                        </ul>
                      </div>
                    )}
                    <GradientButton type="button" onClick={() => setExpandedSlug(expandedSlug === post.slug ? '' : post.slug)} className="mt-6 w-full py-3">{expandedSlug === post.slug ? 'Show Less' : 'Read More'}</GradientButton>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white/70 p-10 text-center shadow-luxury backdrop-blur-2xl dark:border-white/15 dark:bg-white/[0.05]">
              <h3 className="text-2xl font-black text-aurora-ink dark:text-white">No articles found</h3>
              <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-aurora-slate">Try a different keyword or select another category to explore more Qubnova insights.</p>
              <Button type="button" variant="secondary" className="mt-6" onClick={() => { setActiveCategory('All'); setSearchTerm(''); }}>Clear filters</Button>
            </div>
          )}
        </div>
      </section>

      <section id="newsletter" className="pb-20 sm:pb-24 lg:pb-32">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-aurora-obsidian p-8 text-white shadow-luxury sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-premium-mesh opacity-80" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-aurora-cyan/25 blur-3xl" />
            <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-aurora-violet/30 blur-3xl" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-aurora-cyan">Newsletter / CTA</p>
                <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">Need a website, AI tool, dashboard, or SaaS MVP?</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-aurora-slate">Get practical guidance from Qubnova Technologies, or book a discovery call and turn your digital idea into a clear launch plan.</p>
              </div>
              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 backdrop-blur-2xl sm:min-w-[360px]">
                <input className="w-full rounded-2xl border border-white/10 bg-white px-4 py-4 text-sm font-semibold text-aurora-ink outline-none placeholder:text-slate-500 focus:border-aurora-cyan focus:ring-4 focus:ring-aurora-cyan/20" placeholder="Enter your email" type="email" />
                <GradientButton to="/contact" className="mt-3 w-full justify-center py-4">Get practical advice</GradientButton>
                <a href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-aurora-cyan transition hover:text-white">Discuss a project <ArrowRight size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
