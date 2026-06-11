import { ScrollReveal } from './ScrollReveal';
import marcosSrc from '@/assets/marcos.jpeg';

const LOG_EVENTS = [
  {
    year: '2013',
    source: 'BRITISH COUNCIL',
    message: 'Selecionado Young Creative Entrepreneur',
  },
  {
    year: '2013',
    source: 'SUNNY SIDE OF THE DOC (FRANÇA)',
    message: 'Inovação Transmídia detectada',
  },
  {
    year: '2015',
    source: 'POWER TO THE PIXEL (LONDRES)',
    message: 'Destaque de Vanguarda Latino-Americana',
  },
  {
    year: '2016',
    source: 'RIO CRIATIVO',
    message: 'Incubação e aceleração de ecossistema',
  },
  {
    year: '2018',
    source: 'PRÊMIO TAL',
    message: "'Garagem Maker' finalista continental",
  },
  {
    year: '2025',
    source: 'THE AI ART MAGAZINE',
    message: "'Anastácia' recebe Golden Ticket",
    highlight: true,
  },
] as const;

export const CronologiaLog = () => {
  return (
    <ScrollReveal delay={100}>
      <article className="cronologia-block border border-border/60 bg-black overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div
            className="cronologia-viz relative min-h-[320px] lg:min-h-full bg-black overflow-hidden"
            data-cursor-data="marcos.ferreira | log_sistema | cronologia_critica"
          >
            <img
              src={marcosSrc}
              alt="Marcos Ferreira — cronologia de impacto cultural e tecnológico"
              className="absolute inset-0 w-full h-full object-cover object-top glitch-image opacity-80 grayscale-[0.2] hover:grayscale-0 hover:opacity-95 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/50 pointer-events-none" />
            <p className="absolute bottom-4 left-4 font-mono text-[8px] uppercase tracking-widest text-terminal-green/40 z-10">
              // marcos.jpeg
            </p>
          </div>

          <div className="cronologia-terminal border-0 lg:border-l border-border/40 bg-black overflow-hidden">
            <div className="cronologia-terminal-bar flex items-center gap-2 px-4 py-2 border-b border-border/40 bg-muted/30">
              <span className="w-2.5 h-2.5 rounded-full bg-red-900/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-900/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-900/80" />
              <span className="ml-3 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                log_sistema // cronologia_critica.txt
              </span>
            </div>

            <div className="cronologia-terminal-body p-6 lg:p-10 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
              <p className="text-terminal-green mb-4 whitespace-nowrap">
                [LOG_START]-------------------------------------------------
              </p>

              <ol className="space-y-3 list-none">
                {LOG_EVENTS.map((event, i) => (
                  <li
                    key={`${event.year}-${event.source}`}
                    className={`cronologia-log-line opacity-0 [animation:fadeInUp_0.4s_ease-out_forwards] ${
                      'highlight' in event && event.highlight ? 'text-gold' : 'text-foreground'
                    }`}
                    style={{ animationDelay: `${200 + i * 180}ms` }}
                  >
                    <span className="text-terminal-green">{event.year}</span>
                    <span className="text-muted-foreground"> // </span>
                    <span className={'highlight' in event && event.highlight ? 'text-gold' : 'text-foreground'}>
                      {event.source}
                    </span>
                    <span className="text-digital-gold"> -&gt; </span>
                    <span className="text-muted-foreground">{event.message}</span>
                  </li>
                ))}
              </ol>

              <p className="text-terminal-green mt-6 whitespace-nowrap flex items-center gap-1">
                <span>---------------------------------------------------[LOG_END]</span>
                <span className="cronologia-cursor inline-block w-2 h-4 bg-terminal-green ml-1" aria-hidden />
              </p>
            </div>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
};
