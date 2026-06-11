import { useEffect, useState } from 'react';
import { Button } from '@/components/Button';
import { useI18n } from '@/i18n';
import heroSrc from '@/assets/AnastaciaGrande.jpeg';

const COORDINATES = [
  { id: '01', labelKey: 'manifesto' as const, target: 'manifesto', position: 'top-left' },
  { id: '02', labelKey: 'arquivoVivo' as const, target: 'arquivo-vivo', position: 'top-right' },
  { id: '03', labelKey: 'cronologia' as const, target: 'cronologia', position: 'bottom-left' },
] as const;

interface ManifestoHeroProps {
  onNavigate: (sectionId: string) => void;
}

export const ManifestoHero = ({ onNavigate }: ManifestoHeroProps) => {
  const { t } = useI18n();
  const [activeLine, setActiveLine] = useState(0);
  const [visible, setVisible] = useState(true);

  const lines = t.hero.lines;

  useEffect(() => {
    const blink = setInterval(() => {
      setVisible((v) => !v);
    }, 480);

    const advance = setInterval(() => {
      setActiveLine((i) => (i + 1) % lines.length);
      setVisible(true);
    }, 3200);

    return () => {
      clearInterval(blink);
      clearInterval(advance);
    };
  }, [lines.length]);

  const line = lines[activeLine];

  return (
    <section
      id="entrada"
      className="manifesto-hero relative min-h-screen flex items-center justify-center px-6 overflow-hidden z-10"
    >
      <div
        className="manifesto-hero__visual absolute inset-0"
        data-cursor-data="anastacia.grande | hero.entrada | sistema.decolonial"
      >
        <img
          src={heroSrc}
          alt=""
          className="manifesto-hero__img absolute inset-0 w-full h-full object-cover glitch-image"
          aria-hidden
        />
        <div className="manifesto-hero__overlay absolute inset-0" aria-hidden />
      </div>

      {COORDINATES.map((coord) => (
        <button
          key={coord.id}
          type="button"
          onClick={() => onNavigate(coord.target)}
          className={`manifesto-coord manifesto-coord--${coord.position} no-glitch`}
          aria-label={`${t.nav.goTo} ${t.nav[coord.labelKey]}`}
        >
          <span className="text-terminal-green">[{coord.id}</span>
          <span className="text-muted-foreground"> // </span>
          <span className="text-foreground">{t.nav[coord.labelKey]}]</span>
        </button>
      ))}

      <div className="relative z-10 text-left max-w-5xl mx-auto w-full pl-4 sm:pl-8 lg:pl-16 lg:-translate-x-6">
        <p
          className={`manifesto-line font-display font-bold leading-[1.05] transition-opacity duration-100 ${
            line.accent ? 'text-gold text-4xl sm:text-5xl lg:text-7xl' : 'text-foreground text-2xl sm:text-4xl lg:text-5xl'
          } ${visible ? 'opacity-100' : 'opacity-20'}`}
          aria-live="polite"
        >
          {line.text}
        </p>

        <div className="mt-16 flex flex-col items-start gap-6">
          <Button
            variant="primary"
            size="lg"
            className="manifesto-exec no-glitch tracking-[0.15em]"
            onClick={() => onNavigate('arquivo-vivo')}
          >
            {t.hero.executePortfolio}
          </Button>

          <button
            type="button"
            onClick={() => onNavigate('contato')}
            className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground hover:text-terminal-green transition-colors no-glitch"
          >
            {t.contact.code}
          </button>
        </div>
      </div>

      <div className="manifesto-cursor font-mono text-terminal-green text-xs" aria-hidden="true">
        <span>_</span>
      </div>
    </section>
  );
};
