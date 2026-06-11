import { useCallback, useRef, useState } from 'react';
import { TypeOnScroll } from './TypeOnScroll';
import { CaseConcreto } from './CaseConcreto';
import diariosSrc from '@/assets/diariosdebordo.jpeg';

const POETRY_FRAGMENTS = [
  'latitude zero...',
  'o algoritmo sonha com o mar...',
  'dados corrompidos às 03:00',
  'memória volátil :: buffer overflow',
  'a narrativa respira em hexadecimal...',
  'fabulação em tempo real...',
  'o co-piloto escreve sozinho...',
  'fragmento perdido no cache...',
  'syntax error na poesia...',
  'latência emocional: 847ms',
  'tensor de sonhos não supervisionados...',
  '// realidade.patch(0xFF)',
  'o mar recalcula a maré...',
  'diário corrompido :: versão 0.∞',
  'machine learning de saudades...',
] as const;

interface FloatingFragment {
  id: string;
  text: string;
  x: number;
  y: number;
  rotate: number;
  tone: 'green' | 'gold' | 'muted';
}

export const DiariosDeBordoCase = () => {
  const articleRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [fragments, setFragments] = useState<FloatingFragment[]>([]);

  const spawnFragment = useCallback(() => {
    const text = POETRY_FRAGMENTS[Math.floor(Math.random() * POETRY_FRAGMENTS.length)];
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
  }, []);

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
            alt="Diários de Bordo — plataforma de fabulação assistida por IA"
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
              aria-label="Diários — passe o cursor para revelar fragmentos poéticos"
            >
              Diários
            </button>
            {' de Bordo // '}
            <span className="text-foreground">Memória Líquida</span>
          </h3>
          <TypeOnScroll
            text="A literatura deixou de ser estática. Diários de Bordo subverte o ato da escrita através de uma plataforma de fabulação assistida por IA. O software atua como um co-piloto invisível, colando pedaços de realidade, ficção e machine learning."
            className="font-mono text-xs text-muted-foreground leading-relaxed mb-4"
            speed={10}
          />
          <p className="font-mono text-xs text-foreground leading-relaxed mb-4">
            Uma cartografia abstrata da mente do utilizador fundida com o núcleo do processador.
          </p>
          <p className="font-mono text-[10px] text-terminal-green/70 uppercase tracking-widest mb-2">
            poesia em fragmentos · glitch_art :: reconstrução_literária
          </p>
          <CaseConcreto>
            Um aplicativo inovador de escrita criativa e fabulação literária que utiliza inteligência artificial
            generativa como coautora de relatos e diários de viagem dos usuários.
          </CaseConcreto>
        </div>
      </div>
    </article>
  );
};
