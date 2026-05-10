import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-aurora-ink text-white hover:bg-aurora-midnight dark:bg-white dark:text-aurora-midnight dark:hover:bg-aurora-slate',
  secondary: 'border border-aurora-slate/70 bg-white/70 text-aurora-ink hover:border-aurora-cyan hover:text-aurora-violet dark:border-white/15 dark:bg-white/10 dark:text-white',
  ghost: 'text-aurora-ink hover:bg-aurora-cyan/10 dark:text-white dark:hover:bg-white/10',
};

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-aurora-cyan focus:ring-offset-2 dark:focus:ring-offset-aurora-midnight ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>;
  if (href) return <a href={href} className={classes} {...props}>{children}</a>;
  return <button className={classes} {...props}>{children}</button>;
}
