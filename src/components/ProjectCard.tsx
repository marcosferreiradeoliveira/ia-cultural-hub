import { ScrollReveal } from './ScrollReveal';

interface ProjectCardProps {
  title: string;
  description: string;
  category?: string;
  delay?: number;
}

export const ProjectCard = ({ title, description, category, delay = 0 }: ProjectCardProps) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="asymmetric-item glass-morphism p-6 interactive-hover group relative">
        {category && (
          <span className="inline-block px-2 py-1 text-[10px] font-mono uppercase tracking-widest border border-terminal-green/40 text-terminal-green mb-4">
            {category}
          </span>
        )}
        <h3
          className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300 glitch-title"
          data-text={title}
        >
          {title}
        </h3>
        <p className="text-sm font-mono text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="absolute bottom-0 left-0 h-px w-0 bg-digital-gold group-hover:w-full transition-all duration-500" />
      </div>
    </ScrollReveal>
  );
};
