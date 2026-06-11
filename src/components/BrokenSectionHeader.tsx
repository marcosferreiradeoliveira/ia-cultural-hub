import { ReactNode } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { TypeOnScroll } from './TypeOnScroll';

interface BrokenSectionHeaderProps {
  code: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'right';
}

export const BrokenSectionHeader = ({
  code,
  title,
  subtitle,
  align = 'left',
}: BrokenSectionHeaderProps) => (
  <ScrollReveal>
    <div
      className={`broken-header mb-16 ${align === 'right' ? 'broken-header--right' : ''}`}
    >
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-terminal-green mb-4">
        {code}
      </p>
      <div className="broken-header__title">{title}</div>
      {subtitle && (
        <TypeOnScroll
          text={subtitle}
          className="broken-header__subtitle text-sm font-mono text-muted-foreground uppercase tracking-widest mt-4 max-w-xl"
          speed={12}
        />
      )}
    </div>
  </ScrollReveal>
);
