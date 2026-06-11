import { ScrollReveal } from './ScrollReveal';
import { TypeOnScroll } from './TypeOnScroll';

const TEXT_SLICES = [
  {
    id: 'a',
    className: 'fusao-slice fusao-slice--a',
    lines: [
      'TV UFRJ · Rádio UFRJ',
      'frequência analógica',
      'no corpo antes do pixel',
    ],
  },
  {
    id: 'b',
    className: 'fusao-slice fusao-slice--b',
    lines: [
      'tensor.neural ::',
      'Machine Learning',
      'Gestão de Produtos',
    ],
  },
  {
    id: 'c',
    className: 'fusao-slice fusao-slice--c',
    lines: [
      'do éter ao bit —',
      'narrativa e algoritmo',
      'fundidos no mesmo sangue',
    ],
  },
  {
    id: 'd',
    className: 'fusao-slice fusao-slice--d',
    lines: [
      '// fusão biológica',
      'equipes multidisciplinares',
      'experiências que respiram',
    ],
  },
] as const;

const NeuralRadioFusion = () => (
  <svg
    className="fusao-viz absolute inset-0 w-full h-full"
    viewBox="0 0 800 500"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden
  >
    <defs>
      <linearGradient id="fusionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(120, 100%, 65%)" stopOpacity="0.6" />
        <stop offset="50%" stopColor="hsl(43, 76%, 48%)" stopOpacity="0.8" />
        <stop offset="100%" stopColor="hsl(120, 100%, 65%)" stopOpacity="0.4" />
      </linearGradient>
    </defs>

    {/* Rede neural — esquerda */}
    {[
      [80, 120], [80, 250], [80, 380],
      [180, 180], [180, 320],
      [280, 250],
      [360, 200], [360, 300],
    ].map(([cx, cy], i) => (
      <circle key={`n${i}`} cx={cx} cy={cy} r="6" fill="none" stroke="hsl(43, 76%, 48%)" strokeWidth="1.5" className="fusao-node" style={{ animationDelay: `${i * 0.2}s` }} />
    ))}
    {[
      'M80,120 L180,180 L280,250 L360,200',
      'M80,250 L180,180 L280,250 L360,300',
      'M80,380 L180,320 L280,250',
      'M180,180 L180,320',
    ].map((d, i) => (
      <path key={`e${i}`} d={d} fill="none" stroke="hsl(43, 76%, 48%)" strokeWidth="1" opacity="0.5" className="fusao-edge" />
    ))}

    {/* Ondas de rádio — direita */}
    {[0, 1, 2, 3, 4].map((i) => (
      <path
        key={`w${i}`}
        d={`M ${480 + i * 20} 80 Q ${560 + i * 15} 250 ${480 + i * 20} 420`}
        fill="none"
        stroke="url(#fusionGrad)"
        strokeWidth="1.5"
        className="fusao-wave"
        style={{ animationDelay: `${i * 0.35}s` }}
      />
    ))}

    {/* Zona de fusão — centro */}
    <ellipse cx="400" cy="250" rx="60" ry="90" fill="none" stroke="hsl(43, 76%, 48%)" strokeWidth="1" opacity="0.3" className="fusao-merge-pulse" />
    {[...Array(6)].map((_, i) => {
      const angle = (i / 6) * Math.PI * 2;
      const x1 = 400 + Math.cos(angle) * 40;
      const y1 = 250 + Math.sin(angle) * 60;
      const x2 = 400 + Math.cos(angle) * 120;
      const y2 = 250 + Math.sin(angle) * 80;
      return (
        <line
          key={`r${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="hsl(120, 100%, 65%)"
          strokeWidth="1"
          opacity="0.4"
          className="fusao-ray"
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      );
    })}

    <text x="400" y="480" textAnchor="middle" fill="hsl(120, 40%, 55%)" fontSize="10" fontFamily="monospace" opacity="0.5">
      neural ⊗ radio :: ufrj.sync()
    </text>
  </svg>
);

export const FusaoBiologica = () => {
  return (
    <ScrollReveal>
      <article className="fusao-biologica relative min-h-[85vh] border border-border/40 overflow-hidden">
        <NeuralRadioFusion />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90 pointer-events-none" />

        <div className="relative z-10 min-h-[85vh] p-6 lg:p-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-green mb-6">
            // módulo.biografia — fusao.biologica
          </p>

          <h2 className="font-display text-4xl lg:text-6xl text-gold mb-12 max-w-lg glitch-title" data-text="A Fusão Biológica">
            A Fusão Biológica
          </h2>

          <TypeOnScroll
            text="Do éter analógico da TV UFRJ ao tensor neural — narrativa e algoritmo fundidos no mesmo fluxo de dados."
            className="font-mono text-xs text-muted-foreground mb-12 max-w-xl"
            speed={12}
          />

          <div className="fusao-slices-grid relative min-h-[50vh]">
            {TEXT_SLICES.map((slice) => (
              <div key={slice.id} className={slice.className}>
                {slice.lines.map((line, i) => (
                  <p
                    key={line}
                    className={`font-mono leading-snug ${
                      i === 0 ? 'text-xs text-terminal-green uppercase tracking-widest' : 'text-sm lg:text-base text-foreground/90'
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
};
