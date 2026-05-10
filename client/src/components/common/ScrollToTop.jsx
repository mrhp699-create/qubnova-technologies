import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [pathname]);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll(); window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return visible ? <button aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-40 rounded-full bg-aurora-linear p-3 text-white shadow-violet"><ArrowUp size={20} /></button> : null;
}
