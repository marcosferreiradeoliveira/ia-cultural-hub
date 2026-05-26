import { ScrollReveal } from './ScrollReveal';

interface AwardItemProps {
  title?: string;
  description: string;
  year?: string;
  delay?: number;
  imageUrl?: string;
  featuredImageUrl?: string;
  onImageError?: () => void;
}

export const AwardItem = ({
  title,
  description,
  year,
  delay = 0,
  imageUrl,
  featuredImageUrl,
  onImageError
}: AwardItemProps) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="flex gap-6 items-start">
        {/* Imagem em destaque */}
        {featuredImageUrl && (
          <div className="hidden md:block flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
            <img
              src={featuredImageUrl}
              onError={onImageError}
              alt={title || 'Award'}
              className="object-cover w-full h-full"
              width={128}
              height={128}
              loading="lazy"
            />
          </div>
        )}
        
        {/* Conteúdo do prêmio */}
        <div className="flex-1 flex items-start space-x-4 p-4 glass-morphism rounded-lg interactive-hover group">
          {imageUrl && (
            <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden">
              <img
                src={imageUrl}
                onError={onImageError}
                alt={title || 'Award'}
                className="object-cover w-full h-full"
                width={48}
                height={48}
                loading="lazy"
              />
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-foreground group-hover:text-gradient-primary transition-all duration-300">
                {title}
              </h4>
              {year && (
                <span className="text-xs bg-gradient-accent text-accent-foreground px-2 py-0.5 rounded-full">
                  {year}
                </span>
              )}
            </div>
            <p className="text-muted-foreground text-sm mt-1">
              {description}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};