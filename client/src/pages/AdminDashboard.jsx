import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, Inbox, LogOut, Mail, Phone, RefreshCw, Trash2 } from 'lucide-react';
import PageHero from '../components/common/PageHero.jsx';
import Card from '../components/common/Card.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import GradientButton from '../components/common/GradientButton.jsx';
import LoadingSpinner from '../components/common/LoadingSpinner.jsx';
import { api, getApiErrorMessage } from '../api/client.js';
import { useAuth } from '../context/AuthContext.jsx';

const resources = [
  { key: 'messages', label: 'Leads', path: '/messages', protected: true },
  { key: 'projects', label: 'Projects', path: '/projects' },
  { key: 'blogs', label: 'Blog posts', path: '/blogs' },
  { key: 'services', label: 'Services', path: '/services' },
  { key: 'designs', label: 'Designs', path: '/designs' },
  { key: 'testimonials', label: 'Testimonials', path: '/testimonials' },
];

const emptyDashboardData = resources.reduce((accumulator, resource) => ({ ...accumulator, [resource.key]: [] }), {});

export default function AdminDashboard() {
  const { logout, user } = useAuth();
  const [dashboardData, setDashboardData] = useState(emptyDashboardData);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const loadDashboard = async () => {
    setError('');
    setIsLoading(true);

    const responses = await Promise.allSettled(resources.map((resource) => api.get(resource.path)));
    const nextData = { ...emptyDashboardData };
    const failures = [];

    responses.forEach((response, index) => {
      const resource = resources[index];

      if (response.status === 'fulfilled') {
        nextData[resource.key] = response.value.data?.data || [];
      } else {
        failures.push(`${resource.label}: ${getApiErrorMessage(response.reason)}`);
      }
    });

    setDashboardData(nextData);
    setError(failures.join(' '));
    setIsLoading(false);
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const metrics = useMemo(
    () => resources.map((resource) => ({ ...resource, count: dashboardData[resource.key]?.length || 0 })),
    [dashboardData],
  );
  const unreadMessages = dashboardData.messages.filter((message) => message.status !== 'read').length;
  const sortedMessages = dashboardData.messages;

  const handleMarkRead = async (messageId) => {
    await api.put(`/messages/${messageId}/read`);
    await loadDashboard();
  };

  const handleDeleteMessage = async (messageId) => {
    await api.delete(`/messages/${messageId}`);
    await loadDashboard();
  };

  const formatDate = (date) => {
    if (!date) return 'New inquiry';
    return new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(date));
  };

  return (
    <>
      <PageHero eyebrow="Dashboard" title="Qubnova command center." description={`Connected to the live API as ${user?.name || user?.email || 'admin'} with persisted JWT authentication.`} />
      <section className="section-spacing">
        <div className="container-page">
          <div className="mb-6 flex flex-col gap-3 rounded-[2rem] border border-white/20 bg-white/70 p-4 shadow-luxury backdrop-blur-xl dark:bg-white/[0.06] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-aurora-slate">Signed in</p>
              <p className="mt-1 font-bold text-aurora-ink dark:text-white">{user?.email}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <GradientButton type="button" onClick={loadDashboard} disabled={isLoading} className="disabled:cursor-not-allowed disabled:opacity-70">
                <RefreshCw size={18} /> Refresh API data
              </GradientButton>
              <button type="button" onClick={logout} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-black text-aurora-ink transition hover:-translate-y-0.5 hover:text-red-500 dark:border-white/10 dark:bg-white/10 dark:text-white">
                <LogOut size={18} /> Logout
              </button>
            </div>
          </div>

          {error ? <div className="mb-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm font-bold text-amber-700 dark:text-amber-100">{error}</div> : null}

          {isLoading ? (
            <LoadingSpinner label="Loading live admin data" />
          ) : (
            <>
              <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-6">
                {metrics.map((metric) => (
                  <Card key={metric.key}>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-aurora-slate">{metric.label}</p>
                    <h2 className="aurora-text mt-3 text-5xl font-black">{metric.count}</h2>
                    <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-aurora-slate">Live API records</p>
                  </Card>
                ))}
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="premium-border rounded-[2rem] bg-white/75 p-6 shadow-luxury backdrop-blur-xl dark:bg-white/[0.06]">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-aurora-slate">Inbox</p>
                      <h2 className="mt-1 text-2xl font-black text-aurora-ink dark:text-white">All contact queries and messages</h2>
                    </div>
                    <span className="rounded-full bg-aurora-cyan/10 px-4 py-2 text-sm font-black text-aurora-cyan">{unreadMessages} unread</span>
                  </div>

                  {sortedMessages.length ? (
                    <div className="max-h-[46rem] space-y-4 overflow-y-auto pr-1">
                      {sortedMessages.map((message) => (
                        <article key={message._id} className={`rounded-3xl border p-4 ${message.status !== 'read' ? 'border-aurora-cyan/40 bg-aurora-cyan/10' : 'border-slate-200/70 bg-white/70 dark:border-white/10 dark:bg-white/[0.04]'}`}>
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="font-black text-aurora-ink dark:text-white">{message.name}</p>
                                <span className={`rounded-full px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em] ${message.status !== 'read' ? 'bg-aurora-cyan text-aurora-midnight' : 'bg-slate-200 text-slate-600 dark:bg-white/10 dark:text-aurora-slate'}`}>{message.status || 'unread'}</span>
                              </div>
                              <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-400 dark:text-aurora-slate">{formatDate(message.createdAt)}</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {message.status !== 'read' ? (
                                <button type="button" onClick={() => handleMarkRead(message._id)} className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-200">
                                  <CheckCircle2 size={15} /> Mark read
                                </button>
                              ) : null}
                              <button type="button" onClick={() => handleDeleteMessage(message._id)} className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-red-600 dark:text-red-200">
                                <Trash2 size={15} /> Delete
                              </button>
                            </div>
                          </div>
                          <div className="mt-4 grid gap-2 text-sm font-semibold text-slate-600 dark:text-aurora-slate sm:grid-cols-2">
                            <a href={`mailto:${message.email}`} className="inline-flex items-center gap-2 rounded-2xl bg-white/70 px-3 py-2 transition hover:text-aurora-violet dark:bg-white/10"><Mail size={16} /> {message.email}</a>
                            <a href={message.phone ? `tel:${message.phone}` : undefined} className="inline-flex items-center gap-2 rounded-2xl bg-white/70 px-3 py-2 dark:bg-white/10"><Phone size={16} /> {message.phone || 'No phone provided'}</a>
                          </div>
                          <div className="mt-3 rounded-2xl bg-white/75 p-4 dark:bg-white/[0.06]">
                            <p className="text-xs font-black uppercase tracking-[0.18em] text-aurora-violet dark:text-aurora-cyan">Project type</p>
                            <p className="mt-1 font-black text-aurora-ink dark:text-white">{message.projectType}</p>
                            <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-aurora-violet dark:text-aurora-cyan">Visitor message</p>
                            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700 dark:text-aurora-slate">{message.message}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  ) : (
                    <EmptyState title="No project requests yet" description="New contact form submissions will appear here from the protected /messages API." icon={Inbox} />
                  )}
                </div>

                <div className="premium-border rounded-[2rem] bg-white/75 p-6 shadow-luxury backdrop-blur-xl dark:bg-white/[0.06]">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-aurora-slate">API status</p>
                  <h2 className="mt-2 text-2xl font-black text-aurora-ink dark:text-white">JWT session active</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-aurora-slate">Axios attaches your persisted bearer token to protected admin requests and refreshes dashboard data from Mongo-backed endpoints.</p>
                  <div className="mt-5 space-y-3 text-sm font-bold text-slate-600 dark:text-aurora-slate">
                    <p>• Protected lead inbox: /api/messages</p>
                    <p>• Admin profile check: /api/auth/me</p>
                    <p>• Public CMS totals: projects, blogs, services, designs, testimonials</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
