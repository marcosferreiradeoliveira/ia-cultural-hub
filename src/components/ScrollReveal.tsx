import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const ScrollReveal = ({ children, delay = 0, className = '' }: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`fade-in-up ${className}`}
    >
      {children}
    </div>
  );
};