import { motion } from 'framer-motion';
import { ArrowRight, Atom, BarChart3, Sparkles } from 'lucide-react';
import { Route, Routes, Link } from 'react-router-dom';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

const growthData = [
  { name: 'Design', value: 32 },
  { name: 'Build', value: 58 },
  { name: 'Launch', value: 74 },
  { name: 'Scale', value: 96 },
];

function HomePage() {
  return (
    <main className="min-h-screen bg-qubnova-midnight text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              <Sparkles size={16} /> Premium MERN software house
            </p>
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              Qubnova Technologies builds intelligent digital products.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A modern portfolio, AI demo lab, services showcase, design gallery, and future SaaS platform foundation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Explore services <ArrowRight size={18} />
              </Link>
              <Link
                to="/demo-lab"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Visit demo lab <Atom size={18} />
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Platform readiness</p>
                <h2 className="text-2xl font-bold">MERN foundation</h2>
              </div>
              <BarChart3 className="text-cyan-300" />
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthData}>
                  <defs>
                    <linearGradient id="growth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)' }} />
                  <Area type="monotone" dataKey="value" stroke="#22d3ee" fill="url(#growth)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function PlaceholderPage({ title }) {
  return (
    <main className="grid min-h-screen place-items-center bg-qubnova-midnight px-6 text-white">
      <div className="max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Qubnova Technologies</p>
        <h1 className="mt-4 text-4xl font-black">{title}</h1>
        <p className="mt-4 text-slate-300">This route is ready for dedicated page and component development.</p>
        <Link className="mt-8 inline-flex rounded-full bg-white px-5 py-3 font-semibold text-slate-950" to="/">
          Back home
        </Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<PlaceholderPage title="About" />} />
      <Route path="/services" element={<PlaceholderPage title="Services" />} />
      <Route path="/projects" element={<PlaceholderPage title="Projects" />} />
      <Route path="/demo-lab" element={<PlaceholderPage title="AI Demo Lab" />} />
      <Route path="/designs" element={<PlaceholderPage title="Design Gallery" />} />
      <Route path="/admin" element={<PlaceholderPage title="Admin" />} />
    </Routes>
  );
}
