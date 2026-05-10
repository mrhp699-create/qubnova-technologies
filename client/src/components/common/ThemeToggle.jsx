import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') !== 'light');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button onClick={() => setDark((v) => !v)} className="rounded-full border border-aurora-slate/50 bg-white/80 p-2 text-aurora-ink transition hover:border-aurora-cyan dark:border-white/10 dark:bg-white/10 dark:text-white" aria-label="Toggle dark mode">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
