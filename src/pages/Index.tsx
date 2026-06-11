import { ParticleBackground } from '@/components/ParticleBackground';
import { GenerativeAtmosphere } from '@/components/GenerativeAtmosphere';
import { ManifestoHero } from '@/components/ManifestoHero';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/Button';
import { ArquivoVivo } from '../components/ArquivoVivo';
import { CronologiaLog } from '../components/CronologiaLog';
import { FusaoBiologica } from '../components/FusaoBiologica';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ContactForm } from '../components/ContactForm';
import { CustomCursor } from '@/components/CustomCursor';
import { BrokenSectionHeader } from '@/components/BrokenSectionHeader';
import { TypeOnScroll } from '@/components/TypeOnScroll';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useI18n } from '@/i18n';
import heroImageSrc from '../assets/1718220391901.jpeg';

const Index = () => {
  const { t } = useI18n();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <LanguageSwitcher />
      <CustomCursor />
      <ParticleBackground />
      <GenerativeAtmosphere />
      
      <ManifestoHero onNavigate={scrollToSection} />

      {/* 01 — Manifesto */}
      <section id="manifesto" className="py-24 px-4 relative z-10 border-t border-border/30">
        <div className="max-w-7xl mx-auto broken-section">
          <div className="broken-grid broken-grid--manifesto">
            <BrokenSectionHeader
              code={t.manifesto.code}
              title={
                <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground glitch-title max-w-2xl" data-text={t.manifesto.titleGlitch}>
                  {t.manifesto.title}
                </h2>
              }
            />

            <div
              className="broken-grid__visual broken-grid__visual--manifesto"
              data-cursor-data="// marcos_ferreira.img | perfil.ativo"
            >
              <img
                src={heroImageSrc}
                alt=""
                className="w-full h-full object-cover glitch-image grayscale opacity-40"
                aria-hidden
              />
            </div>

            <div className="broken-grid__text broken-grid__text--manifesto">
              <div className="dynamic-line w-24 mb-8" />
              <TypeOnScroll
                text={t.manifesto.body}
                className="text-sm font-mono text-muted-foreground leading-relaxed max-w-lg"
                speed={14}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Arquivo Vivo */}
      <section id="arquivo-vivo" className="py-24 px-4 relative z-10 border-t border-border/30">
        <div className="max-w-7xl mx-auto broken-section">
          <BrokenSectionHeader
            code={t.arquivo.code}
            title={
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground max-w-3xl">
                {t.arquivo.title} <span className="text-gold">{t.arquivo.titleAccent}</span>
              </h2>
            }
            subtitle={t.arquivo.subtitle}
            align="right"
          />

          <ArquivoVivo />
        </div>
      </section>

      {/* 03 — Cronologia de Código */}
      <section id="cronologia" className="py-24 px-4 relative z-10 border-t border-border/30">
        <div className="max-w-6xl mx-auto broken-section">
          <BrokenSectionHeader
            code={t.cronologia.code}
            title={
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground max-w-3xl">
                {t.cronologia.title} <span className="text-gold">{t.cronologia.titleAccent}</span>
              </h2>
            }
            subtitle={t.cronologia.subtitle}
          />

          <CronologiaLog />
        </div>
      </section>

      {/* A Fusão Biológica */}
      <section id="about" className="py-24 px-4 relative z-10 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <FusaoBiologica />
        </div>
      </section>

      {/* 04 — Contato */}
      <section id="contato" className="py-24 px-4 relative z-10 border-t border-border/30">
        <div className="max-w-4xl mx-auto broken-section">
          <ScrollReveal>
            <div className="broken-header broken-header--center mb-12">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-terminal-green mb-4">{t.contact.code}</p>
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-gold glitch-title" data-text={t.contact.title}>
                {t.contact.title}
              </h2>
              <TypeOnScroll
                text={t.contact.subtitle}
                className="text-sm font-mono text-muted-foreground mt-6 max-w-2xl mx-auto"
                speed={16}
              />
            </div>

            <div className="mb-12">
              <ContactForm />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <Button 
                variant="primary" 
                size="lg"
                className="no-glitch"
                onClick={() => window.open('https://www.linkedin.com/in/marcosfoliveira/', '_blank')}
              >
                {t.contact.linkedin}
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                className="no-glitch"
                onClick={() => window.open('mailto:marcos@mobcontent.com', '_blank')}
              >
                {t.contact.email}
              </Button>
              
              <Button 
                variant="accent" 
                size="lg"
                className="no-glitch"
                onClick={() => window.open('https://mobcontent.com.br', '_blank')}
              >
                {t.contact.mobcontent}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/30 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            {t.footer.copy}
          </p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
