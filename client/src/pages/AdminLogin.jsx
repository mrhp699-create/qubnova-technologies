import { useEffect, useState } from 'react';
import { ArrowLeft, Eye, EyeOff, Loader2, LockKeyhole, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GradientButton from '../components/common/GradientButton.jsx';
import { getApiErrorMessage } from '../api/client.js';
import { useAuth } from '../context/AuthContext.jsx';

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const redirectTo = location.state?.from?.pathname || '/admin/dashboard';

  useEffect(() => {
    if (isAuthenticated) navigate(redirectTo, { replace: true });
  }, [isAuthenticated, navigate, redirectTo]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!form.email.trim() || !form.password.trim()) {
      setError('Email and password are required to access the admin dashboard.');
      return;
    }

    setIsSubmitting(true);

    try {
      await login({ email: form.email.trim(), password: form.password });
      navigate(redirectTo, { replace: true });
    } catch (loginError) {
      setError(getApiErrorMessage(loginError, 'Unable to sign in with those credentials.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative isolate -mt-24 flex min-h-screen items-center overflow-hidden bg-aurora-obsidian px-4 py-28 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.28),transparent_34rem),radial-gradient(circle_at_85%_12%,rgba(124,58,237,0.32),transparent_32rem),linear-gradient(135deg,#030712_0%,#071126_48%,#0B1020_100%)]" />
      <div className="mesh-grid absolute inset-0 -z-10 opacity-40" />
      <div className="floating-orb left-[8%] top-24 h-44 w-44 bg-aurora-cyan/20 animate-float" />
      <div className="floating-orb bottom-16 right-[10%] h-56 w-56 bg-aurora-violet/25 animate-float-slow" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.03] blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_30rem]">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-aurora-slate shadow-inner-glow backdrop-blur-xl">
            <ShieldCheck size={16} className="text-aurora-cyan" />
            Protected Admin Portal
          </div>
          <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Qubnova Admin Access</h1>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            Secure dashboard access for managing projects, services, designs, blogs, and client messages.
          </p>
          <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            {['JWT protected', 'Encrypted transit', 'Role-aware access'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-bold text-slate-200 backdrop-blur-xl">
                <Sparkles size={15} className="mb-2 text-aurora-gold" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="premium-border relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.10] p-6 shadow-[0_32px_120px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:p-8">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-aurora-cyan/80 to-transparent" />
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-aurora-cyan/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora-linear text-xl font-black text-white shadow-glow">Q</span>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-aurora-slate">Qubnova Technologies</p>
                <p className="mt-1 text-sm text-slate-400">Administrator sign in</p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-aurora-obsidian/30 p-4">
              <div className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-aurora-cyan/10 text-aurora-cyan">
                  <LockKeyhole size={17} />
                </span>
                <p>
                  Security note: only authorized Qubnova administrators should continue. Sessions use the existing secure token flow for dashboard access.
                </p>
              </div>
            </div>

            {error ? (
              <div role="alert" className="mt-6 rounded-2xl border border-red-400/30 bg-red-500/15 px-4 py-3 text-sm font-bold text-red-100 shadow-[0_0_35px_rgba(248,113,113,0.16)]">
                {error}
              </div>
            ) : null}

            <label htmlFor="admin-email" className="mt-6 block text-xs font-black uppercase tracking-[0.18em] text-slate-300">Email</label>
            <div className="relative mt-2">
              <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                id="admin-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="input-luxury border-white/10 bg-white/[0.08] pl-12 text-white placeholder:text-slate-500 focus:bg-white/[0.12] disabled:cursor-not-allowed disabled:opacity-70"
                placeholder="admin@qubnova.com"
              />
            </div>

            <label htmlFor="admin-password" className="mt-5 block text-xs font-black uppercase tracking-[0.18em] text-slate-300">Password</label>
            <div className="relative mt-2">
              <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                id="admin-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
                disabled={isSubmitting}
                className="input-luxury border-white/10 bg-white/[0.08] px-12 text-white placeholder:text-slate-500 focus:bg-white/[0.12] disabled:cursor-not-allowed disabled:opacity-70"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                disabled={isSubmitting}
                className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-xl text-slate-400 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <GradientButton type="submit" disabled={isSubmitting} className="mt-7 w-full justify-center disabled:cursor-not-allowed disabled:opacity-70">
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 size={18} className="animate-spin" />
                  Authenticating...
                </span>
              ) : (
                'Login'
              )}
            </GradientButton>

            <Link to="/" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-black text-slate-200 transition hover:border-aurora-cyan/50 hover:bg-white/[0.10] hover:text-white">
              <ArrowLeft size={18} />
              Back to Website
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
