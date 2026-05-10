import { useEffect, useMemo, useState } from 'react';
import {
  BarChart3,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Eye,
  FileText,
  Home,
  LayoutDashboard,
  Loader2,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Palette,
  Pencil,
  Plus,
  RefreshCw,
  Search,
  Settings,
  Sparkles,
  Star,
  Trash2,
  Users,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import EmptyState from '../components/common/EmptyState.jsx';
import LoadingSpinner from '../components/common/LoadingSpinner.jsx';
import { api, getApiErrorMessage } from '../api/client.js';
import { useAuth } from '../context/AuthContext.jsx';

const resources = [
  { key: 'projects', label: 'Projects', path: '/projects' },
  { key: 'designs', label: 'Designs', path: '/designs' },
  { key: 'services', label: 'Services', path: '/services' },
  { key: 'messages', label: 'Messages', path: '/messages' },
  { key: 'blogs', label: 'Blogs', path: '/blogs' },
  { key: 'testimonials', label: 'Testimonials', path: '/testimonials' },
];

const emptyDashboardData = resources.reduce((accumulator, resource) => ({ ...accumulator, [resource.key]: [] }), {});

const sidebarItems = [
  { key: 'overview', label: 'Overview', icon: LayoutDashboard },
  { key: 'projects', label: 'Projects', icon: BriefcaseBusiness },
  { key: 'designs', label: 'Designs', icon: Palette },
  { key: 'services', label: 'Services', icon: Sparkles },
  { key: 'messages', label: 'Messages', icon: Mail },
  { key: 'blogs', label: 'Blogs', icon: BookOpen },
  { key: 'testimonials', label: 'Testimonials', icon: Star },
  { key: 'settings', label: 'Settings', icon: Settings },
];

const entityConfig = {
  projects: {
    title: 'Manage Projects',
    description: 'Create portfolio case studies with categories, rich details, media links, and featured placement.',
    path: '/projects',
    id: '_id',
    emptyTitle: 'No projects published yet',
    emptyDescription: 'Add your first SaaS, AI, or automation project to showcase Qubnova delivery capability.',
    icon: BriefcaseBusiness,
    columns: ['Title', 'Category', 'Tech stack', 'Featured', 'Updated'],
    fields: [
      { name: 'title', label: 'Project title', required: true },
      { name: 'category', label: 'Category', required: true },
      { name: 'description', label: 'Description', type: 'textarea', required: true },
      { name: 'features', label: 'Features', type: 'tags', placeholder: 'Dashboard, Payments, AI assistant' },
      { name: 'techStack', label: 'Tech stack', type: 'tags', placeholder: 'React, Node.js, MongoDB' },
      { name: 'image', label: 'Image URL' },
      { name: 'liveUrl', label: 'Live demo link' },
      { name: 'githubUrl', label: 'GitHub link' },
      { name: 'featured', label: 'Mark as featured', type: 'checkbox' },
    ],
    initial: { title: '', category: '', description: '', features: [], techStack: [], image: '', liveUrl: '', githubUrl: '', featured: false },
  },
  designs: {
    title: 'Manage Designs',
    description: 'Maintain UI concepts, brand visuals, product screens, and creative portfolio assets.',
    path: '/designs',
    id: '_id',
    emptyTitle: 'No design items yet',
    emptyDescription: 'Add landing page mockups, dashboards, brand kits, or product design samples.',
    icon: Palette,
    columns: ['Title', 'Category', 'Purpose', 'Tools', 'Updated'],
    fields: [
      { name: 'title', label: 'Design title', required: true },
      { name: 'category', label: 'Category', required: true },
      { name: 'purpose', label: 'Purpose' },
      { name: 'toolsUsed', label: 'Tools used', type: 'tags', placeholder: 'Figma, Photoshop, Framer' },
      { name: 'image', label: 'Image URL' },
      { name: 'description', label: 'Description', type: 'textarea', required: true },
    ],
    initial: { title: '', category: '', purpose: '', toolsUsed: [], image: '', description: '' },
  },
  services: {
    title: 'Manage Services',
    description: 'Control the offer catalog shown across the public site and keep feature bullets polished.',
    path: '/services',
    id: '_id',
    emptyTitle: 'No services configured',
    emptyDescription: 'Add web development, automation, AI integration, design, or consulting services.',
    icon: Sparkles,
    columns: ['Title', 'Category/Icon', 'Features', 'Description', 'Updated'],
    fields: [
      { name: 'title', label: 'Service title', required: true },
      { name: 'description', label: 'Description', type: 'textarea', required: true },
      { name: 'features', label: 'Features', type: 'tags', placeholder: 'Discovery, MVP build, Launch support' },
      { name: 'category', label: 'Icon/category', required: true },
      { name: 'icon', label: 'Lucide icon name' },
    ],
    initial: { title: '', description: '', features: [], category: '', icon: 'Sparkles' },
  },
  blogs: {
    title: 'Manage Blogs',
    description: 'Publish thought leadership, technical breakdowns, launches, and client education content.',
    path: '/blogs',
    id: '_id',
    emptyTitle: 'No blog posts yet',
    emptyDescription: 'Create the first article to build trust with prospects and document Qubnova expertise.',
    icon: BookOpen,
    columns: ['Title', 'Category', 'Excerpt', 'Read time', 'Updated'],
    fields: [
      { name: 'title', label: 'Blog title', required: true },
      { name: 'category', label: 'Category', required: true },
      { name: 'excerpt', label: 'Excerpt', type: 'textarea', required: true },
      { name: 'content', label: 'Content', type: 'textarea', required: true, tall: true },
      { name: 'readTime', label: 'Read time' },
      { name: 'image', label: 'Image URL' },
    ],
    initial: { title: '', category: '', excerpt: '', content: '', readTime: '4 min read', image: '' },
  },
  testimonials: {
    title: 'Manage Testimonials',
    description: 'Curate client proof with rating, role, and concise feedback for conversion-focused pages.',
    path: '/testimonials',
    id: '_id',
    emptyTitle: 'No testimonials yet',
    emptyDescription: 'Add client feedback to strengthen social proof on the public website.',
    icon: Users,
    columns: ['Client', 'Role', 'Message', 'Rating', 'Updated'],
    fields: [
      { name: 'clientName', label: 'Client name', required: true },
      { name: 'role', label: 'Role' },
      { name: 'message', label: 'Message', type: 'textarea', required: true },
      { name: 'rating', label: 'Rating', type: 'number', min: 1, max: 5 },
    ],
    initial: { clientName: '', role: '', message: '', rating: 5 },
  },
};

function normalizeArray(value) {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  return String(value)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function toInputValue(value) {
  return Array.isArray(value) ? value.join(', ') : value ?? '';
}

function formatDate(date) {
  if (!date) return 'No date';
  return new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(date));
}

function getRecordTitle(section, item) {
  if (section === 'testimonials') return item.clientName;
  return item.title || item.name || 'Untitled record';
}

function preparePayload(section, form) {
  const config = entityConfig[section];
  const payload = { ...form };
  config.fields.forEach((field) => {
    if (field.type === 'tags') payload[field.name] = normalizeArray(payload[field.name]);
    if (field.type === 'number') payload[field.name] = Number(payload[field.name] || 0);
    if (field.type === 'checkbox') payload[field.name] = Boolean(payload[field.name]);
  });
  return payload;
}

function createFormState(section, item = null) {
  const config = entityConfig[section];
  const source = item || config.initial;
  return config.fields.reduce((accumulator, field) => {
    const fallback = config.initial[field.name];
    accumulator[field.name] = field.type === 'tags' ? toInputValue(source[field.name] ?? fallback) : source[field.name] ?? fallback ?? '';
    return accumulator;
  }, {});
}

function MiniBarChart({ data, color = '#00D4FF', label = 'value' }) {
  const max = Math.max(...data.map((item) => item.value), 1);
  return (
    <div className="space-y-4">
      {data.map((item) => (
        <div key={item.name}>
          <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-400">
            <span>{item.name}</span>
            <span>{item.value} {label}</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full" style={{ width: `${Math.max((item.value / max) * 100, item.value ? 8 : 0)}%`, background: color }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function DonutChart({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0) || 1;
  let running = 0;
  const colors = ['#00D4FF', '#7C3AED', '#D946EF', '#F8D36A', '#22C55E', '#38BDF8'];
  const gradient = data
    .map((item, index) => {
      const start = (running / total) * 100;
      running += item.value;
      const end = (running / total) * 100;
      return `${colors[index % colors.length]} ${start}% ${end}%`;
    })
    .join(', ');

  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row">
      <div className="grid h-40 w-40 place-items-center rounded-full" style={{ background: `conic-gradient(${gradient || '#1e293b 0 100%'})` }}>
        <div className="grid h-24 w-24 place-items-center rounded-full bg-[#0b1020] text-center">
          <span className="text-3xl font-black text-white">{total}</span>
          <span className="-mt-5 text-[0.65rem] font-black uppercase tracking-[0.18em] text-slate-400">items</span>
        </div>
      </div>
      <div className="w-full space-y-3">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center justify-between gap-3 rounded-2xl bg-white/[0.05] px-3 py-2 text-sm font-bold text-slate-200">
            <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{ background: colors[index % colors.length] }} />{item.name}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ToastStack({ toasts, dismissToast }) {
  return (
    <div className="fixed right-4 top-4 z-[70] space-y-3">
      {toasts.map((toast) => (
        <button key={toast.id} type="button" onClick={() => dismissToast(toast.id)} className={`flex min-w-72 max-w-sm items-start gap-3 rounded-2xl border px-4 py-3 text-left shadow-2xl backdrop-blur-xl ${toast.type === 'error' ? 'border-red-400/30 bg-red-950/90 text-red-50' : 'border-emerald-400/30 bg-slate-950/90 text-emerald-50'}`}>
          {toast.type === 'error' ? <Bell size={18} /> : <CheckCircle2 size={18} />}
          <span className="text-sm font-bold">{toast.message}</span>
        </button>
      ))}
    </div>
  );
}

export default function AdminDashboard() {
  const { logout, user } = useAuth();
  const [dashboardData, setDashboardData] = useState(emptyDashboardData);
  const [activeSection, setActiveSection] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({});
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((current) => [...current, { id, message, type }]);
    window.setTimeout(() => setToasts((current) => current.filter((toast) => toast.id !== id)), 4200);
  };

  const dismissToast = (id) => setToasts((current) => current.filter((toast) => toast.id !== id));

  const loadDashboard = async () => {
    setError('');
    setIsLoading(true);
    const responses = await Promise.allSettled(resources.map((resource) => api.get(resource.path)));
    const nextData = { ...emptyDashboardData };
    const failures = [];

    responses.forEach((response, index) => {
      const resource = resources[index];
      if (response.status === 'fulfilled') nextData[resource.key] = response.value.data?.data || [];
      else failures.push(`${resource.label}: ${getApiErrorMessage(response.reason)}`);
    });

    setDashboardData(nextData);
    setError(failures.join(' '));
    setIsLoading(false);
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const unreadMessages = dashboardData.messages.filter((message) => message.status !== 'read').length;
  const metrics = [
    { label: 'Total Projects', value: dashboardData.projects.length, icon: BriefcaseBusiness, accent: 'text-cyan-300' },
    { label: 'Total Design Items', value: dashboardData.designs.length, icon: Palette, accent: 'text-fuchsia-300' },
    { label: 'Total Messages', value: dashboardData.messages.length, icon: Mail, accent: 'text-violet-300' },
    { label: 'Unread Messages', value: unreadMessages, icon: Bell, accent: 'text-amber-300' },
    { label: 'Total Services', value: dashboardData.services.length, icon: Sparkles, accent: 'text-emerald-300' },
    { label: 'Total Blogs', value: dashboardData.blogs.length, icon: BookOpen, accent: 'text-sky-300' },
    { label: 'Total Testimonials', value: dashboardData.testimonials.length, icon: Users, accent: 'text-rose-300' },
  ];

  const messageActivity = useMemo(() => {
    const days = Array.from({ length: 7 }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - index));
      return { key: date.toISOString().slice(0, 10), name: date.toLocaleDateString('en', { weekday: 'short' }), value: 0 };
    });
    dashboardData.messages.forEach((message) => {
      const key = message.createdAt?.slice(0, 10);
      const match = days.find((day) => day.key === key);
      if (match) match.value += 1;
    });
    return days;
  }, [dashboardData.messages]);

  const projectCategoryData = useMemo(() => {
    const counts = dashboardData.projects.reduce((accumulator, project) => {
      const category = project.category || 'Uncategorized';
      accumulator[category] = (accumulator[category] || 0) + 1;
      return accumulator;
    }, {});
    return Object.entries(counts).map(([name, value]) => ({ name, value })).slice(0, 6);
  }, [dashboardData.projects]);

  const servicesOverview = useMemo(
    () => dashboardData.services.map((service) => ({ name: service.title, value: service.features?.length || 1 })).slice(0, 6),
    [dashboardData.services],
  );

  const filteredRecords = useMemo(() => {
    if (!entityConfig[activeSection]) return [];
    const records = dashboardData[activeSection] || [];
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return records;
    return records.filter((record) => JSON.stringify(record).toLowerCase().includes(normalizedQuery));
  }, [activeSection, dashboardData, query]);

  const openModal = (section, item = null) => {
    setModal({ section, item, mode: item ? 'edit' : 'add' });
    setForm(createFormState(section, item));
  };

  const closeModal = () => {
    setModal(null);
    setForm({});
  };

  const saveRecord = async (event) => {
    event.preventDefault();
    if (!modal) return;
    setIsSaving(true);
    const config = entityConfig[modal.section];
    const payload = preparePayload(modal.section, form);
    try {
      if (modal.mode === 'edit') await api.put(`${config.path}/${modal.item[config.id]}`, payload);
      else await api.post(config.path, payload);
      addToast(`${getRecordTitle(modal.section, payload)} ${modal.mode === 'edit' ? 'updated' : 'created'} successfully.`);
      closeModal();
      await loadDashboard();
    } catch (saveError) {
      addToast(getApiErrorMessage(saveError), 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const deleteRecord = async (section, item) => {
    const config = entityConfig[section];
    const confirmed = window.confirm(`Delete ${getRecordTitle(section, item)}? This action cannot be undone.`);
    if (!confirmed) return;
    try {
      await api.delete(`${config.path}/${item[config.id]}`);
      addToast(`${getRecordTitle(section, item)} deleted.`);
      await loadDashboard();
    } catch (deleteError) {
      addToast(getApiErrorMessage(deleteError), 'error');
    }
  };

  const markMessageRead = async (messageId) => {
    try {
      await api.put(`/messages/${messageId}/read`);
      addToast('Message marked as read.');
      await loadDashboard();
    } catch (readError) {
      addToast(getApiErrorMessage(readError), 'error');
    }
  };

  const deleteMessage = async (message) => {
    const confirmed = window.confirm(`Delete message from ${message.name}?`);
    if (!confirmed) return;
    try {
      await api.delete(`/messages/${message._id}`);
      addToast('Message deleted.');
      await loadDashboard();
    } catch (deleteError) {
      addToast(getApiErrorMessage(deleteError), 'error');
    }
  };

  const handleLogout = () => {
    logout();
  };

  const renderTableCells = (section, item) => {
    if (section === 'projects') {
      return [item.title, item.category, (item.techStack || []).slice(0, 3).join(', ') || '—', item.featured ? 'Featured' : 'Standard', formatDate(item.updatedAt || item.createdAt)];
    }
    if (section === 'designs') {
      return [item.title, item.category, item.purpose || '—', (item.toolsUsed || []).join(', ') || '—', formatDate(item.updatedAt || item.createdAt)];
    }
    if (section === 'services') {
      return [item.title, item.category || item.icon || '—', `${item.features?.length || 0} features`, item.description, formatDate(item.updatedAt || item.createdAt)];
    }
    if (section === 'blogs') {
      return [item.title, item.category, item.excerpt, item.readTime || '—', formatDate(item.updatedAt || item.createdAt)];
    }
    return [item.clientName, item.role || '—', item.message, `${item.rating || 5}/5`, formatDate(item.updatedAt || item.createdAt)];
  };

  const renderManagementSection = (section) => {
    const config = entityConfig[section];
    const Icon = config.icon;
    return (
      <div className="space-y-6">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300"><Icon size={22} /></div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">Content manager</p>
                <h2 className="mt-1 text-2xl font-black text-white">{config.title}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{config.description}</p>
              </div>
            </div>
            <button type="button" onClick={() => openModal(section)} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300">
              <Plus size={18} /> Add {section === 'testimonials' ? 'testimonial' : section.slice(0, -1)}
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0b1020]/95 p-4 shadow-2xl shadow-black/30">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-sm">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={17} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${config.title.toLowerCase()}`} className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm font-bold text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300" />
            </div>
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm font-black text-slate-300">{filteredRecords.length} records</span>
          </div>

          {filteredRecords.length ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[880px] border-separate border-spacing-y-3 text-left">
                <thead>
                  <tr>
                    {config.columns.map((column) => <th key={column} className="px-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500">{column}</th>)}
                    <th className="px-4 text-right text-xs font-black uppercase tracking-[0.18em] text-slate-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.map((item) => (
                    <tr key={item._id} className="group">
                      {renderTableCells(section, item).map((cell, index) => (
                        <td key={`${item._id}-${index}`} className="max-w-xs border-y border-white/10 bg-white/[0.035] px-4 py-4 text-sm font-semibold text-slate-200 first:rounded-l-2xl first:border-l last:rounded-r-2xl last:border-r">
                          <span className={`${index === 0 ? 'font-black text-white' : ''} line-clamp-2`}>{cell}</span>
                        </td>
                      ))}
                      <td className="rounded-r-2xl border-y border-r border-white/10 bg-white/[0.035] px-4 py-4">
                        <div className="flex justify-end gap-2">
                          <button type="button" onClick={() => openModal(section, item)} className="rounded-xl bg-cyan-400/10 p-2 text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950" aria-label="Edit record"><Pencil size={16} /></button>
                          <button type="button" onClick={() => deleteRecord(section, item)} className="rounded-xl bg-red-500/10 p-2 text-red-200 transition hover:bg-red-500 hover:text-white" aria-label="Delete record"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="rounded-[1.75rem] border border-dashed border-white/10 bg-white/[0.03] p-10">
              <EmptyState title={config.emptyTitle} description={config.emptyDescription} icon={config.icon} />
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderMessages = () => (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300"><MessageSquare size={22} /></div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">Lead inbox</p>
              <h2 className="mt-1 text-2xl font-black text-white">Manage Messages</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">View project requests, check budget and timeline context, mark unread leads as reviewed, or delete spam.</p>
            </div>
          </div>
          <span className="rounded-2xl bg-amber-400/10 px-4 py-3 text-sm font-black text-amber-200">{unreadMessages} unread messages</span>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-[#0b1020]/95 p-4 shadow-2xl shadow-black/30">
        {dashboardData.messages.length ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] border-separate border-spacing-y-3 text-left">
              <thead>
                <tr>
                  {['Name', 'Email', 'Project Type', 'Budget', 'Timeline', 'Message', 'Status', 'Date', 'Actions'].map((heading) => <th key={heading} className="px-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500 last:text-right">{heading}</th>)}
                </tr>
              </thead>
              <tbody>
                {dashboardData.messages.map((message) => (
                  <tr key={message._id}>
                    {[message.name, message.email, message.projectType, message.budget || '—', message.timeline || '—', message.message, message.status || 'unread', formatDate(message.createdAt)].map((cell, index) => (
                      <td key={`${message._id}-${index}`} className="max-w-xs border-y border-white/10 bg-white/[0.035] px-4 py-4 text-sm font-semibold text-slate-200 first:rounded-l-2xl first:border-l">
                        <span className={`${index === 0 ? 'font-black text-white' : ''} ${index === 6 && cell !== 'read' ? 'rounded-full bg-cyan-400 px-3 py-1 text-xs text-slate-950' : ''} line-clamp-2`}>{cell}</span>
                      </td>
                    ))}
                    <td className="rounded-r-2xl border-y border-r border-white/10 bg-white/[0.035] px-4 py-4">
                      <div className="flex justify-end gap-2">
                        {message.status !== 'read' ? <button type="button" onClick={() => markMessageRead(message._id)} className="rounded-xl bg-emerald-500/10 p-2 text-emerald-200 transition hover:bg-emerald-500 hover:text-white" aria-label="Mark as read"><CheckCircle2 size={16} /></button> : null}
                        <button type="button" onClick={() => window.alert(`${message.name}\n${message.email}\n\nProject: ${message.projectType}\nBudget: ${message.budget || 'Not provided'}\nTimeline: ${message.timeline || 'Not provided'}\n\n${message.message}`)} className="rounded-xl bg-cyan-400/10 p-2 text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950" aria-label="View message"><Eye size={16} /></button>
                        <button type="button" onClick={() => deleteMessage(message)} className="rounded-xl bg-red-500/10 p-2 text-red-200 transition hover:bg-red-500 hover:text-white" aria-label="Delete message"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-white/10 bg-white/[0.03] p-10">
            <EmptyState title="No messages yet" description="Contact form submissions will appear here with lead status, budget, timeline, and project scope." icon={Mail} />
          </div>
        )}
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-7">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20">
              <div className="flex items-center justify-between gap-3">
                <div className={`grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.06] ${metric.accent}`}><Icon size={20} /></div>
                <ChevronRight className="text-slate-600" size={18} />
              </div>
              <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-slate-500">{metric.label}</p>
              <h3 className="mt-2 text-4xl font-black text-white">{metric.value}</h3>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20">
          <div className="mb-6 flex items-center justify-between">
            <div><p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Messages</p><h3 className="mt-1 text-xl font-black text-white">Message activity chart</h3></div>
            <BarChart3 className="text-cyan-300" />
          </div>
          <MiniBarChart data={messageActivity} label="msgs" />
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20">
          <div className="mb-6"><p className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">Projects</p><h3 className="mt-1 text-xl font-black text-white">Project category chart</h3></div>
          {projectCategoryData.length ? <DonutChart data={projectCategoryData} /> : <EmptyState title="No category data" description="Add projects to populate this chart." icon={BriefcaseBusiness} />}
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20">
          <div className="mb-6"><p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Services</p><h3 className="mt-1 text-xl font-black text-white">Services overview chart</h3></div>
          {servicesOverview.length ? <MiniBarChart data={servicesOverview} color="#22C55E" label="features" /> : <EmptyState title="No service data" description="Add services to populate this chart." icon={Sparkles} />}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20">
          <h3 className="text-xl font-black text-white">Recent messages</h3>
          <div className="mt-5 space-y-3">
            {dashboardData.messages.slice(0, 5).map((message) => (
              <button key={message._id} type="button" onClick={() => setActiveSection('messages')} className="flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-left transition hover:border-cyan-300/40">
                <div><p className="font-black text-white">{message.name}</p><p className="mt-1 line-clamp-1 text-sm text-slate-400">{message.projectType} · {message.message}</p></div>
                <span className={`rounded-full px-3 py-1 text-xs font-black ${message.status === 'read' ? 'bg-white/10 text-slate-300' : 'bg-cyan-300 text-slate-950'}`}>{message.status || 'unread'}</span>
              </button>
            ))}
            {!dashboardData.messages.length ? <EmptyState title="No recent messages" description="New leads will show here as they arrive." icon={Mail} /> : null}
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-violet-500/10 to-fuchsia-500/10 p-6 shadow-2xl shadow-black/20">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Protected admin routes</p>
          <h3 className="mt-2 text-2xl font-black text-white">JWT session active</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">This dashboard is protected by the admin auth guard, uses bearer tokens through Axios, and performs CRUD operations against Mongo-backed API endpoints.</p>
          <div className="mt-5 grid gap-3 text-sm font-bold text-slate-300">
            {['/api/projects', '/api/designs', '/api/services', '/api/messages', '/api/blogs', '/api/testimonials'].map((endpoint) => <span key={endpoint} className="rounded-2xl bg-white/[0.06] px-4 py-3"><Code2 className="mr-2 inline" size={15} />{endpoint}</span>)}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">Settings</p>
      <h2 className="mt-2 text-2xl font-black text-white">Admin profile and API health</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl bg-white/[0.05] p-5"><p className="text-sm font-bold text-slate-400">Signed in as</p><p className="mt-2 text-lg font-black text-white">{user?.name || 'Qubnova Admin'}</p><p className="mt-1 text-sm text-slate-400">{user?.email}</p></div>
        <div className="rounded-3xl bg-white/[0.05] p-5"><p className="text-sm font-bold text-slate-400">Security</p><p className="mt-2 text-lg font-black text-white">Protected route enabled</p><p className="mt-1 text-sm text-slate-400">Admin dashboard access requires a valid JWT session.</p></div>
      </div>
    </div>
  );

  const currentTitle = sidebarItems.find((item) => item.key === activeSection)?.label || 'Overview';

  return (
    <div className="min-h-screen bg-[#070a17] text-white">
      <ToastStack toasts={toasts} dismissToast={dismissToast} />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_15%,rgba(0,212,255,0.18),transparent_28rem),radial-gradient(circle_at_85%_5%,rgba(124,58,237,0.18),transparent_30rem)]" />
      {isSidebarOpen ? <button type="button" aria-label="Close sidebar backdrop" onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden" /> : null}

      <aside className={`fixed inset-y-0 left-0 z-50 flex w-80 flex-col border-r border-white/10 bg-[#080d1f]/95 p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400 text-slate-950"><Sparkles size={22} /></div>
            <div><p className="text-lg font-black">Qubnova</p><p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Admin Panel</p></div>
          </div>
          <button type="button" onClick={() => setIsSidebarOpen(false)} className="rounded-xl p-2 text-slate-400 hover:bg-white/10 lg:hidden"><X size={20} /></button>
        </div>

        <nav className="mt-8 flex-1 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.key;
            return (
              <button key={item.key} type="button" onClick={() => { setActiveSection(item.key); setQuery(''); setIsSidebarOpen(false); }} className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-black transition ${isActive ? 'bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20' : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'}`}>
                <Icon size={18} /> {item.label}
              </button>
            );
          })}
        </nav>

        <div className="space-y-2 border-t border-white/10 pt-4">
          <Link to="/" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-black text-slate-300 transition hover:bg-white/[0.06] hover:text-white"><Home size={18} /> Back to Website</Link>
          <button type="button" onClick={handleLogout} className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-black text-red-200 transition hover:bg-red-500/10 hover:text-red-100"><LogOut size={18} /> Logout</button>
        </div>
      </aside>

      <div className="relative z-10 lg:pl-80">
        <header className="sticky top-0 z-30 border-b border-white/10 bg-[#070a17]/75 px-4 py-4 backdrop-blur-2xl sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => setIsSidebarOpen(true)} className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-white lg:hidden"><Menu size={20} /></button>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">Admin dashboard</p>
                <h1 className="text-2xl font-black sm:text-3xl">{currentTitle}</h1>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-300">{user?.email || 'admin@qubnova.com'}</div>
              <button type="button" onClick={loadDashboard} disabled={isLoading} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-black text-white transition hover:border-cyan-300/50 disabled:cursor-not-allowed disabled:opacity-60">
                {isLoading ? <Loader2 className="animate-spin" size={17} /> : <RefreshCw size={17} />} Refresh
              </button>
            </div>
          </div>
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-8">
          {error ? <div className="mb-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm font-bold text-amber-100">{error}</div> : null}
          {isLoading ? (
            <div className="grid min-h-[50vh] place-items-center rounded-[2rem] border border-white/10 bg-white/[0.03]"><LoadingSpinner label="Loading admin data" /></div>
          ) : (
            <>
              {activeSection === 'overview' ? renderOverview() : null}
              {activeSection === 'messages' ? renderMessages() : null}
              {activeSection === 'settings' ? renderSettings() : null}
              {entityConfig[activeSection] ? renderManagementSection(activeSection) : null}
            </>
          )}
        </main>
      </div>

      {modal ? (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm">
          <form onSubmit={saveRecord} className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b1020] p-5 shadow-2xl shadow-black/50">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div><p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">{modal.mode === 'edit' ? 'Edit record' : 'Add record'}</p><h2 className="mt-1 text-2xl font-black text-white">{entityConfig[modal.section].title}</h2></div>
              <button type="button" onClick={closeModal} className="rounded-2xl bg-white/[0.06] p-3 text-slate-300 hover:text-white"><X size={20} /></button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {entityConfig[modal.section].fields.map((field) => (
                <label key={field.name} className={`${field.type === 'textarea' || field.type === 'checkbox' ? 'md:col-span-2' : ''} block`}>
                  {field.type === 'checkbox' ? (
                    <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-black text-white">
                      <input type="checkbox" checked={Boolean(form[field.name])} onChange={(event) => setForm((current) => ({ ...current, [field.name]: event.target.checked }))} className="h-5 w-5 accent-cyan-400" /> {field.label}
                    </span>
                  ) : (
                    <>
                      <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-slate-400">{field.label}{field.required ? ' *' : ''}</span>
                      {field.type === 'textarea' ? (
                        <textarea required={field.required} value={form[field.name] || ''} onChange={(event) => setForm((current) => ({ ...current, [field.name]: event.target.value }))} rows={field.tall ? 9 : 4} className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300" />
                      ) : (
                        <input required={field.required} type={field.type || 'text'} min={field.min} max={field.max} value={form[field.name] || ''} onChange={(event) => setForm((current) => ({ ...current, [field.name]: event.target.value }))} placeholder={field.placeholder} className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300" />
                      )}
                      {field.type === 'tags' ? <span className="mt-2 block text-xs font-semibold text-slate-500">Separate items with commas.</span> : null}
                    </>
                  )}
                </label>
              ))}
            </div>
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button type="button" onClick={closeModal} className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-black text-slate-300 transition hover:bg-white/[0.06] hover:text-white">Cancel</button>
              <button type="submit" disabled={isSaving} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60">
                {isSaving ? <Loader2 className="animate-spin" size={17} /> : <FileText size={17} />} {isSaving ? 'Saving...' : 'Save changes'}
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}
