import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-primary-foreground glow-primary hover:brightness-110',
      secondary: 'bg-secondary text-secondary-foreground glow-secondary hover:brightness-110', 
      accent: 'bg-accent text-accent-foreground glow-accent hover:brightness-110',
      ghost: 'border border-primary/30 text-primary hover:bg-primary/10 hover:glow-primary'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    return (
      <button
        className={cn(
          'font-geometric font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95',
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };