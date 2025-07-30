import { ScrollReveal } from './ScrollReveal';

interface AwardItemProps {
  title: string;
  description: string;
  year: string;
  delay?: number;
}

export const AwardItem = ({ title, description, year, delay = 0 }: AwardItemProps) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="flex items-start space-x-4 p-4 glass-morphism rounded-lg interactive-hover group">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center glow-accent">
          <span className="text-accent-foreground font-bold">{year}</span>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-foreground group-hover:text-gradient-primary transition-all duration-300">
            {title}
          </h4>
          <p className="text-muted-foreground text-sm mt-1">
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
};