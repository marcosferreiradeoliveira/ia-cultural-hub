import { useCallback, useRef, useState } from 'react';
import { TypeOnScroll } from './TypeOnScroll';
import { CaseConcreto } from './CaseConcreto';
import { useI18n } from '@/i18n';
import diariosSrc from '@/assets/diariosdebordo.jpeg';

interface FloatingFragment {
  id: string;
  text: string;
  x: number;
  y: number;
  rotate: number;
  tone: 'green' | 'gold' | 'muted';
}

export const DiariosDeBordoCase = () => {
  const { t } = useI18n();
  const articleRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [fragments, setFragments] = useState<FloatingFragment[]>([]);

  const spawnFragment = useCallback(() => {
    const fragmentsList = t.arquivo.diarios.fragments;
    const text = fragmentsList[Math.floor(Math.random() * fragmentsList.length)];
    const tones: FloatingFragment['tone'][] = ['green', 'gold', 'muted'];
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

    const fragment: FloatingFragment = {
      id,
      text,
      x: 4 + Math.random() * 88,
      y: 8 + Math.random() * 82,
      rotate: -18 + Math.random() * 36,
      tone: tones[Math.floor(Math.random() * tones.length)],
    };

    setFragments((prev) => [...prev.slice(-12), fragment]);

    window.setTimeout(() => {
      setFragments((prev) => prev.filter((item) => item.id !== id));
    }, 350 + Math.random() * 550);
  }, [t.arquivo.diarios.fragments]);

  const handleDiariosEnter = () => {
    spawnFragment();
    intervalRef.current = setInterval(spawnFragment, 160);
  };

  const handleDiariosLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <article ref={articleRef} className="diarios-block border-x border-b border-border/40 relative overflow-hidden">
      {fragments.map((fragment) => (
        <span
          key={fragment.id}
          className={`diarios-fragment diarios-fragment--${fragment.tone}`}
          style={{
            left: `${fragment.x}%`,
            top: `${fragment.y}%`,
            transform: `rotate(${fragment.rotate}deg)`,
          }}
        >
          {fragment.text}
        </span>
      ))}

      <div className="grid lg:grid-cols-2">
        <div
          className="diarios-viz relative min-h-[400px] bg-black overflow-hidden"
          data-cursor-data="diários_de_bordo.img | memória_líquida | fabulação.ia"
        >
          <img
            src={diariosSrc}
            alt={t.arquivo.diarios.alt}
            className="absolute inset-0 w-full h-full object-cover glitch-image opacity-80 grayscale-[0.4] hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            loading="lazy"
          />
          <div className="diarios-viz__scan absolute inset-0 pointer-events-none" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/50 pointer-events-none" />
          <p className="absolute bottom-4 left-4 font-mono text-[8px] uppercase tracking-widest text-terminal-green/40">
            // diariosdebordo.jpeg
          </p>
        </div>

        <div className="diarios-copy p-8 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border/40">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-green mb-4">
            // diários.de_bordo
          </p>
          <h3 className="font-display text-3xl lg:text-4xl text-gold mb-6 leading-tight">
            <button
              type="button"
              className="diarios-trigger no-glitch"
              onMouseEnter={handleDiariosEnter}
              onMouseLeave={handleDiariosLeave}
              onFocus={handleDiariosEnter}
              onBlur={handleDiariosLeave}
              aria-label={t.arquivo.diarios.ariaLabel}
            >
              {t.arquivo.diarios.title}
            </button>
            {' '}{t.arquivo.diarios.titleSuffix}{' '}
            <span className="text-foreground">{t.arquivo.diarios.titleAccent}</span>
          </h3>
          <TypeOnScroll
            text={t.arquivo.diarios.body}
            className="font-mono text-xs text-muted-foreground leading-relaxed mb-4"
            speed={10}
          />
          <p className="font-mono text-xs text-foreground leading-relaxed mb-4">
            {t.arquivo.diarios.body2}
          </p>
          <p className="font-mono text-[10px] text-terminal-green/70 uppercase tracking-widest mb-2">
            {t.arquivo.diarios.tag}
          </p>
          <CaseConcreto>
            {t.arquivo.diarios.case}
          </CaseConcreto>
        </div>
      </div>
    </article>
  );
};
