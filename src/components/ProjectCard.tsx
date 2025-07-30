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
      <div className="asymmetric-item glass-morphism p-6 rounded-xl interactive-hover group">
        {category && (
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-4">
            {category}
          </span>
        )}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient-primary transition-all duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 glow-accent"></div>
      </div>
    </ScrollReveal>
  );
};