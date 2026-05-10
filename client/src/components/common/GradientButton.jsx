import { ArrowRight } from 'lucide-react';
import Button from './Button.jsx';

export default function GradientButton({ children, className = '', ...props }) {
  return (
    <Button className={`bg-aurora-linear text-white shadow-violet hover:scale-[1.02] hover:shadow-aurora ${className}`} {...props}>
      {children}<ArrowRight size={18} />
    </Button>
  );
}
