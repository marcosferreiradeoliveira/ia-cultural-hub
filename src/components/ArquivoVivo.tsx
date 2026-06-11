import { ScrollReveal } from './ScrollReveal';
import { TypeOnScroll } from './TypeOnScroll';
import { CaseConcreto } from './CaseConcreto';
import anastaciaSrc from '@/assets/anastacia.jpeg';
import grioSrc from '@/assets/grio.jpeg';
import zumbiSrc from '@/assets/zumbi.jpeg';
import stellaSrc from '@/assets/stella.jpeg';
import cartografiasSrc from '@/assets/15348574.jpeg';
import mlpSrc from '@/assets/mlp.jpeg';
import oraculoSrc from '@/assets/oraculo.jpeg';
import { DiariosDeBordoCase } from './DiariosDeBordoCase';

const ANASTACIA_PROMPTS = [
  '> init modelo::diffusion_v2.1 --weights redirect',
  '> prompt inject: "Anastácia, escravizada, máscara de ferro, resistência"',
  '> negative_prompt: colonial_gaze, exoticization, soft_filter',
  '> layer.mask: rosto :: preserve_dignity=true',
  '> seed: 1736368093 | steps: 48 | cfg: 7.5',
  '> tensor.redirect: attention_heads[4,7] → ancestral_memory',
  '> render :: batch_size=1 :: output=anastacia_001.png',
  '> status: WEIGHTS_REALIGNED ✓',
];

const BEACON_LOG = [
  'beacon.register(id=1) → fluxo.visitante[042]',
  'beacon.register(id=2) → fluxo.visitante[187]',
  'beacon.register(id=3) → fluxo.visitante[309]',
  'beacon.register(id=4) → fluxo.visitante[056]',
  'beacon.register(id=5) → fluxo.visitante[421]',
  'beacon.register(id=6) → fluxo.visitante[118]',
  'beacon.register(id=7) → fluxo.visitante[273]',
  'beacon.register(id=8) → fluxo.visitante[034]',
  'beacon.ping(museu_amanha) :: signal_ok',
  'cartografia.update() → mesh.sync',
  'visitor.flow[sector_b] += 1',
  'invisible.map.render()',
];

const BEACON_POINTS = [
  { x: 18, y: 32, delay: 0 },
  { x: 42, y: 58, delay: 0.4 },
  { x: 65, y: 25, delay: 0.8 },
  { x: 78, y: 72, delay: 1.2 },
  { x: 35, y: 80, delay: 1.6 },
  { x: 55, y: 45, delay: 2.0 },
  { x: 88, y: 38, delay: 2.4 },
  { x: 22, y: 65, delay: 2.8 },
];

const FALATORIO_QR_URL = 'https://mobcontent.com.br';

const LINGUA_LOG = [
  'timeline.init(ano=1500) → frame.sync',
  'arquivo.sonoro.load() :: bitrate_320',
  'licença.fundação_roberto_marinho ✓',
  'track_01 :: origem_língua_portuguesa.wav',
  'track_14 :: sotaques_brasileiros.wav',
  'track_27 :: afro-brasileiro :: oralidade.mp4',
  'render.linha_do_tempo() → museu.exibir',
  'sync.audiovisual :: display.ativo',
];

export const ArquivoVivo = () => {
  return (
    <div className="arquivo-vivo space-y-0">
      {/* —— Anastácia —— */}
      <ScrollReveal>
        <article className="anastacia-block min-h-[90vh] gap-0 border border-border/40">
          <div
            className="anastacia-fragments relative min-h-[50vh] lg:min-h-full overflow-hidden cursor-data-target"
            data-cursor-data="anastacia_001.png | golden_ticket_2025 | weights::realigned"
            role="img"
            aria-label="Anastácia — obra de IA generativa, fragmentada"
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="anastacia-fragment glitch-image"
                style={{
                  backgroundImage: `url(${anastaciaSrc})`,
                  backgroundPosition: `${(i % 3) * 50}% ${Math.floor(i / 3) * 50}%`,
                }}
                role="img"
                aria-hidden={i > 0}
              />
            ))}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/20 via-transparent to-black/40" />
          </div>

          <div className="anastacia-panel flex flex-col justify-between p-6 lg:p-10 bg-black border-l border-border/40">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-green mb-6">
                // obra_001.anastacia
              </p>
              <TypeOnScroll
                text="Diffusion v2.1 — prompt inject: Anastácia, escravizada, máscara de ferro, resistência. Tensor redirect → ancestral_memory."
                className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 max-w-md"
                speed={10}
              />
              <div className="terminal-prompts space-y-1 font-mono text-xs sm:text-sm leading-relaxed">
                {ANASTACIA_PROMPTS.map((line, i) => (
                  <p
                    key={line}
                    className="text-muted-foreground opacity-0 [animation:fadeInUp_0.5s_ease-out_forwards]"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    <span className="text-terminal-green">{line.slice(0, 1)}</span>
                    {line.slice(1)}
                  </p>
                ))}
              </div>
              <CaseConcreto>
                Uma obra de arte gerada por IA que reconstrói visualmente a dignidade de Anastácia Livre,
                selecionada e exposta em galerias na Alemanha, Japão, México, França e Áustria.
              </CaseConcreto>
            </div>

            <div className="mt-10 flex justify-end">
              <div className="classified-stamp rotate-[-4deg] border-2 border-digital-gold/80 px-4 py-3 text-center">
                <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-digital-gold">
                  Arquivo Classificado
                </p>
                <p className="font-display text-lg text-gold mt-1">The AI Art Magazine</p>
                <p className="font-mono text-xs text-terminal-green">2025 — Golden Ticket</p>
              </div>
            </div>
          </div>
        </article>
      </ScrollReveal>

      {/* —— Soberania Visual —— */}
      <ScrollReveal delay={200}>
        <article className="soberania-block py-20 px-6 lg:px-12 border-x border-b border-border/40">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-green mb-4">
            // módulo.soberania_visual
          </p>
          <h3 className="font-display text-3xl lg:text-5xl text-gold mb-8 glitch-title" data-text="Soberania Visual">
            Soberania Visual
          </h3>
          <blockquote className="font-display text-xl lg:text-3xl text-foreground leading-snug max-w-4xl mb-12 italic">
            <TypeOnScroll
              text="Onde a história colonial apagou a imagem, nós injetamos dados."
              className="block"
              speed={16}
              as="span"
            />
            <TypeOnScroll
              text="IA generativa como ferramenta de reparação histórica."
              className="block mt-4 text-muted-foreground not-italic font-mono text-sm lg:text-base"
              speed={12}
              as="span"
            />
          </blockquote>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            <div className="soberania-panel border border-border/50 hover:border-digital-gold/40 transition-colors glitch-hover overflow-hidden">
              <div
                className="soberania-panel__visual relative"
                data-cursor-data="griot_ai.sys | baquaqua | diáspora.recompilada"
              >
                <img
                  src={grioSrc}
                  alt="Griot AI — retrato gerado por IA de Mohammed Gardo Baquaqua"
                  className="w-full aspect-[4/5] object-cover object-top glitch-image grayscale opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
              </div>
              <div className="soberania-panel__copy relative z-10 p-6 -mt-16 bg-black/80 backdrop-blur-sm border-t border-border/30">
                <p className="font-mono text-[10px] text-terminal-green mb-2">[GRiot_AI.sys]</p>
                <h4 className="font-display text-2xl text-foreground mb-3">Griot AI</h4>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                  Mohammed Gardo Baquaqua — memória oracular recompilada.
                  <span className="text-terminal-green"> dados.inject(diáspora)</span>
                </p>
                <CaseConcreto>
                  Um projeto de pesquisa focado no desenvolvimento de uma inteligência artificial generativa
                  treinada para resgatar e narrar a biografia histórica de Baquaqua, ícone da diáspora africana.
                </CaseConcreto>
              </div>
            </div>
            <div className="soberania-panel border border-border/50 hover:border-digital-gold/40 transition-colors glitch-hover overflow-hidden">
              <div
                className="soberania-panel__visual relative"
                data-cursor-data="memória_negra.db | zumbi | render.história()"
              >
                <img
                  src={zumbiSrc}
                  alt="Museu da Memória Negra em IA — Zumbi dos Palmares"
                  className="w-full aspect-[4/5] object-cover object-top glitch-image grayscale opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
              </div>
              <div className="soberania-panel__copy relative z-10 p-6 -mt-16 bg-black/80 backdrop-blur-sm border-t border-border/30">
                <p className="font-mono text-[10px] text-terminal-green mb-2">[MEMÓRIA_NEGRA.db]</p>
                <h4 className="font-display text-2xl text-foreground mb-3">Museu da Memória Negra em IA</h4>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                  Alemanha · Áustria — imagens que o arquivo colonial negou.
                  <span className="text-terminal-green"> render.história()</span>
                </p>
                <CaseConcreto>
                  Uma plataforma e exposição internacional que usa IA generativa para recriar visualmente
                  momentos e personagens cruciais da história afro-brasileira que não possuem registro pictórico.
                </CaseConcreto>
              </div>
            </div>
          </div>
        </article>
      </ScrollReveal>

      {/* —— Falatório —— */}
      <ScrollReveal delay={400}>
        <article className="falatorio-block relative min-h-[80vh] border-x border-b border-border/40 overflow-hidden">
          <div className="falatorio-wall absolute inset-0" />
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-6 items-center p-8 lg:p-16 min-h-[80vh]">
            <div className="falatorio-copy lg:col-span-4 z-30">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-green mb-4">
                // intervenção.urbana
              </p>
              <h3 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
                Falatório nas Ruas
              </h3>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-4">
                Stella do Patrocínio — voz colada no muro. Museu a céu aberto.
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-gold animate-pulse mb-4">
                ↳ Aponte seu celular para o QR na tela
              </p>
              <CaseConcreto className="animate-none border-gold/30">
                Uma intervenção de arte urbana que espalha cartazes (lambe-lambes) com QR Codes pelas cidades,
                permitindo que pedestres ouçam as poesias da artista negra Stella do Patrocínio através do celular.
              </CaseConcreto>
            </div>

            <div
              className="falatorio-poster lg:col-span-5 relative z-20 lg:-translate-x-6 lg:-translate-y-4"
              data-cursor-data="stella.patrocinio | falatório.ruas | lambe-lambe.digital"
            >
              <img
                src={stellaSrc}
                alt="Stella do Patrocínio — intervenção Falatório nas Ruas"
                className="w-full max-h-[55vh] object-cover object-center glitch-image border border-border/50 shadow-[14px_14px_0_rgba(0,0,0,0.55)] rotate-1 hover:rotate-0 transition-transform duration-500"
                loading="lazy"
              />
              <p className="font-mono text-[8px] uppercase tracking-widest text-stone-500 mt-3 text-right">
                // stella.patrocinio.jpeg
              </p>
            </div>

            <div
              className="falatorio-qr-wrapper lg:col-span-3 relative z-30 p-6 bg-stone-900/90 border-2 border-stone-700 shadow-2xl hover:rotate-0 transition-transform self-end lg:self-center"
              data-cursor-data="falatorio.qr | stella_patrocinio | scan::hipermídia"
            >
              <div className="absolute -top-3 -left-3 w-full h-full border border-digital-gold/30 pointer-events-none" />
              <p className="font-mono text-[8px] uppercase tracking-widest text-stone-500 mb-3 text-center">
                lambe-lambe digital
              </p>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&color=0-0-0&bgcolor=212-211-209&data=${encodeURIComponent(FALATORIO_QR_URL)}`}
                alt="QR Code — Falatório nas Ruas. Escaneie com seu celular."
                width={180}
                height={180}
                className="mx-auto glitch-image mix-blend-multiply"
                loading="lazy"
                data-cursor-data="mobcontent.com.br | lambe-lambe.digital"
              />
              <p className="font-mono text-[8px] text-center text-stone-600 mt-3 uppercase">
                scan :: hipermídia.ativa
              </p>
            </div>
          </div>
        </article>
      </ScrollReveal>

      {/* —— Cartografias Invisíveis —— */}
      <ScrollReveal delay={600}>
        <article className="cartografias-block border-x border-b border-border/40">
          <div className="grid lg:grid-cols-2">
            <div
              className="cartografias-viz relative min-h-[400px] bg-black overflow-hidden"
              data-cursor-data="beacon.mesh | museu_amanha | fluxo.visitante[]"
            >
              <img
                src={cartografiasSrc}
                alt="Cartografias Invisíveis — mapa de fluxos no Museu do Amanhã"
                className="absolute inset-0 w-full h-full object-cover glitch-image opacity-70 grayscale-[0.3] hover:grayscale-0 hover:opacity-90 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 pointer-events-none" />
              <div className="absolute inset-0 font-mono text-[10px] text-terminal-green/20 p-4 leading-loose pointer-events-none select-none overflow-hidden z-10">
                {BEACON_LOG.map((line, i) => (
                  <p key={line} className="whitespace-nowrap animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}>
                    {line}
                  </p>
                ))}
              </div>
              {BEACON_POINTS.map((point) => (
                <span
                  key={`${point.x}-${point.y}`}
                  className="cartografias-beacon absolute w-2 h-2 rounded-full bg-terminal-green z-10"
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                    animationDelay: `${point.delay}s`,
                  }}
                />
              ))}
              <svg className="absolute inset-0 w-full h-full opacity-20 z-10" aria-hidden>
                <line x1="18%" y1="32%" x2="42%" y2="58%" stroke="hsl(120 100% 65%)" strokeWidth="1" />
                <line x1="42%" y1="58%" x2="65%" y2="25%" stroke="hsl(120 100% 65%)" strokeWidth="1" />
                <line x1="65%" y1="25%" x2="78%" y2="72%" stroke="hsl(120 100% 65%)" strokeWidth="1" />
                <line x1="35%" y1="80%" x2="55%" y2="45%" stroke="hsl(43 76% 48%)" strokeWidth="1" />
              </svg>
              <p className="absolute bottom-4 left-4 font-mono text-[8px] uppercase tracking-widest text-terminal-green/40 z-10">
                // cartografias.invisíveis.jpeg
              </p>
            </div>

            <div className="cartografias-copy p-8 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border/40">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-green mb-4">
                // cartografias.invisíveis
              </p>
              <h3 className="font-display text-3xl lg:text-4xl text-gold mb-6">
                Cartografias Invisíveis
              </h3>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-6">
                App &apos;Amanhã&apos; — Museu do Amanhã. Não IoT. Não case study.
                <span className="block mt-3 text-foreground">
                  Pontos de beacon piscando no escuro — fluxos de corpos no espaço físico,
                  traduzidos em linhas de código.
                </span>
              </p>
              <CaseConcreto>
                O aplicativo oficial de visitação interativa do Museu do Amanhã, vencedor do prêmio de Melhor
                Aplicativo de Internet das Coisas (IoT) em 2016, usando geolocalização por beacons para mapear
                e guiar a experiência física do público.
              </CaseConcreto>
            </div>
          </div>
        </article>
      </ScrollReveal>

      {/* —— Museu da Língua Portuguesa —— */}
      <ScrollReveal delay={650}>
        <article className="lingua-block border-x border-b border-border/40">
          <div className="grid lg:grid-cols-2">
            <div
              className="lingua-viz relative min-h-[400px] bg-black overflow-hidden"
              data-cursor-data="lingua_portuguesa.db | arquivo.sonoro | timeline.av"
            >
              <img
                src={mlpSrc}
                alt="Museu da Língua Portuguesa — linha do tempo audiovisual"
                className="absolute inset-0 w-full h-full object-cover glitch-image opacity-75 grayscale-[0.25] hover:grayscale-0 hover:opacity-90 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/45 pointer-events-none" />
              <div className="absolute inset-0 font-mono text-[10px] text-terminal-green/25 p-4 leading-loose pointer-events-none select-none overflow-hidden z-10">
                {LINGUA_LOG.map((line, i) => (
                  <p key={line} className="whitespace-nowrap" style={{ animationDelay: `${i * 0.25}s` }}>
                    {line}
                  </p>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-terminal-green/40 to-transparent z-10" />
              <p className="absolute bottom-4 left-4 font-mono text-[8px] uppercase tracking-widest text-terminal-green/40 z-10">
                // mlp.jpeg
              </p>
            </div>

            <div className="lingua-copy p-8 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border/40">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-green mb-4">
                // museu.lingua_portuguesa
              </p>
              <h3 className="font-display text-3xl lg:text-4xl text-gold mb-6">
                Museu da Língua Portuguesa
              </h3>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-6">
                Linha do tempo audiovisual · arquivo.sonoro
                <span className="block mt-3 text-foreground">
                  Produção e licenciamento de conteúdo histórico em vídeo e áudio para a experiência permanente do museu.
                </span>
              </p>
              <CaseConcreto>
                Produção e licenciamento do conteúdo audiovisual que compõe a histórica linha do tempo do museu,
                desenvolvido em parceria com a Fundação Roberto Marinho.
              </CaseConcreto>
            </div>
          </div>
        </article>
      </ScrollReveal>

      {/* —— Diários de Bordo —— */}
      <ScrollReveal delay={700}>
        <DiariosDeBordoCase />
      </ScrollReveal>

      {/* —— Oráculo Cultural —— */}
      <ScrollReveal delay={900}>
        <article className="oraculo-block border-x border-b border-border/40">
          <div className="grid lg:grid-cols-2">
            <div
              className="oraculo-viz relative min-h-[400px] bg-black overflow-hidden"
              data-cursor-data="oraculo_cultural.exe | editais.ia | exec.awaiting"
            >
              <img
                src={oraculoSrc}
                alt="Oráculo Cultural — plataforma de IA para projetos culturais"
                className="absolute inset-0 w-full h-full object-cover glitch-image opacity-75 grayscale-[0.25] hover:grayscale-0 hover:opacity-90 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 pointer-events-none" />
              <p className="absolute bottom-4 left-4 font-mono text-[8px] uppercase tracking-widest text-terminal-green/40 z-10">
                // oraculo.jpeg
              </p>
            </div>

            <div className="oraculo-copy p-8 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border/40">
              <p className="font-mono text-[10px] text-terminal-green mb-2">[ORÁCULO_CULTURAL.exe]</p>
              <h3 className="font-display text-3xl lg:text-4xl text-gold mb-6">
                Oráculo Cultural
              </h3>
              <p className="font-mono text-xs text-muted-foreground max-w-2xl">
                Plataforma de assinatura — IA analisa editais, aprova projetos culturais.
                <span className="text-gold"> exec.awaiting(user_input)</span>
              </p>
              <CaseConcreto>
                Uma ferramenta SaaS comercial que utiliza inteligência artificial para ler editais públicos e otimizar
                a escrita de projetos culturais para aumentar suas chances de aprovação em leis de fomento.
              </CaseConcreto>
            </div>
          </div>
        </article>
      </ScrollReveal>
    </div>
  );
};
