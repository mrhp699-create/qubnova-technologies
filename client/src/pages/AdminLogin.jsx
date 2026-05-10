import { useEffect, useState } from 'react';
import { LockKeyhole } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageHero from '../components/common/PageHero.jsx';
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
  const redirectTo = location.state?.from?.pathname || '/admin/dashboard';

  useEffect(() => {
    if (isAuthenticated) navigate(redirectTo, { replace: true });
  }, [isAuthenticated, navigate, redirectTo]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await login(form);
      navigate(redirectTo, { replace: true });
    } catch (loginError) {
      setError(getApiErrorMessage(loginError, 'Unable to sign in with those credentials.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero eyebrow="Admin" title="Secure Qubnova admin access." description="Sign in with your live API admin account to unlock the command center." />
      <section className="section-spacing">
        <div className="container-page max-w-md">
          <form onSubmit={handleSubmit} className="premium-border rounded-[2rem] bg-white/[0.82] p-8 shadow-luxury backdrop-blur-2xl dark:bg-white/[0.07]">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-aurora-linear text-white shadow-glow"><LockKeyhole /></span>
            {error ? <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-600 dark:text-red-200">{error}</div> : null}
            <label htmlFor="admin-email" className="mt-6 block text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-aurora-slate">Email</label>
            <input id="admin-email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} required className="input-luxury mt-2" placeholder="admin@qubnova.com" />
            <label htmlFor="admin-password" className="mt-5 block text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-aurora-slate">Password</label>
            <input id="admin-password" name="password" type="password" autoComplete="current-password" value={form.password} onChange={handleChange} required className="input-luxury mt-2" placeholder="••••••••" />
            <GradientButton type="submit" disabled={isSubmitting} className="mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70">
              {isSubmitting ? 'Signing in...' : 'Login'}
            </GradientButton>
          </form>
        </div>
      </section>
    </>
  );
}
