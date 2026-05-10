import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-aurora-ink text-white hover:bg-aurora-midnight dark:bg-white dark:text-aurora-midnight dark:hover:bg-aurora-slate',
  secondary: 'premium-border bg-white/75 text-aurora-ink shadow-sm backdrop-blur-xl hover:text-aurora-violet dark:bg-white/10 dark:text-white dark:hover:text-aurora-cyan',
  ghost: 'text-aurora-ink hover:bg-aurora-cyan/10 dark:text-white dark:hover:bg-white/10',
};

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const classes = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-black transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-aurora-cyan focus:ring-offset-2 dark:focus:ring-offset-aurora-midnight ${variants[variant]} ${className}`;
  const content = (
    <>
      <span className="shine-overlay" />
      <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>
    </>
  );
  if (to) return <Link to={to} className={classes} {...props}>{content}</Link>;
  if (href) return <a href={href} className={classes} {...props}>{content}</a>;
  return <button className={classes} {...props}>{content}</button>;
}
