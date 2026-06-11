import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-digital-gold text-black border border-digital-gold glow-primary hover:bg-transparent hover:text-digital-gold',
      secondary: 'bg-transparent text-terminal-green border border-terminal-green/50 hover:border-terminal-green hover:glow-secondary',
      accent: 'bg-digital-gold/90 text-black border border-digital-gold glow-accent hover:bg-transparent hover:text-digital-gold',
      ghost: 'bg-transparent border border-foreground/20 text-foreground hover:border-digital-gold hover:text-digital-gold',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-sm',
    };

    return (
      <button
        className={cn(
          'font-mono uppercase tracking-widest rounded-none transition-all duration-300 glitch-hover',
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
