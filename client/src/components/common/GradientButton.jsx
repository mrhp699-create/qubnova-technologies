import { ArrowRight } from 'lucide-react';
import Button from './Button.jsx';

export default function GradientButton({ children, className = '', ...props }) {
  return (
    <Button className={`bg-aurora-linear bg-[length:220%_220%] text-white shadow-violet animate-gradient-pan hover:scale-[1.02] hover:shadow-aurora ${className}`} {...props}>
      {children}<ArrowRight className="transition duration-300 group-hover:translate-x-1" size={18} />
    </Button>
  );
}
