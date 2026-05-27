import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { PLACEHOLDER_IMAGE } from '@/lib/assets';

interface AwardItemProps {
  title?: string;
  description: string;
  year?: string;
  delay?: number;
  imageUrl?: string;
  featuredImageUrl?: string;
}

export const AwardItem = ({
  title,
  description,
  year,
  delay = 0,
  imageUrl,
  featuredImageUrl,
}: AwardItemProps) => {
  const [thumbSrc, setThumbSrc] = useState(imageUrl);
  const [featuredSrc, setFeaturedSrc] = useState(featuredImageUrl);

  return (
    <ScrollReveal delay={delay}>
      <div className="flex gap-6 items-start">
        {featuredImageUrl && featuredSrc && (
          <div className="hidden md:block flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
            <img
              src={featuredSrc}
              onError={() => setFeaturedSrc(PLACEHOLDER_IMAGE)}
              alt={title || 'Prêmio'}
              className="object-cover w-full h-full"
              width={128}
              height={128}
              loading="lazy"
            />
          </div>
        )}

        <div className="flex-1 flex items-start space-x-4 p-4 glass-morphism rounded-lg interactive-hover group">
          {imageUrl && thumbSrc && (
            <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden">
              <img
                src={thumbSrc}
                onError={() => setThumbSrc(PLACEHOLDER_IMAGE)}
                alt={title || 'Prêmio'}
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
