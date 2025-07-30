import { useEffect, useRef } from 'react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/Button';
import { ProjectCard } from '@/components/ProjectCard';
import { AwardItem } from '@/components/AwardItem';
import heroImage from '@/assets/marcos-hero.jpg';

const Index = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div 
          ref={parallaxRef}
          className="absolute inset-0 parallax-slow"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15
          }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-gradient-primary">Marcos Ferreira:</span>
                <br />
                <span className="text-foreground">Inteligência Artificial</span>
                <br />
                <span className="text-muted-foreground">para Impacto Social</span>
              </h1>
              <div className="dynamic-line w-24 bg-gradient-accent"></div>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Sócio-diretor da mobCONTENT. Pioneiro no uso de tecnologia para enriquecer a cultura 
              e empoderar comunidades marginalizadas através de narrativas decoloniais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => scrollToSection('vision')}
              >
                Conheça a Missão
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Vamos Colaborar
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-card rounded-2xl glow-primary overflow-hidden">
              <img 
                src={heroImage}
                alt="Marcos Ferreira"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full glow-accent animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full glow-secondary animate-float" style={{animationDelay: '-2s'}}></div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-gradient-primary mb-6">
                Tecnologia Para Gerar Impacto e Transformar Realidades
              </h2>
              <div className="dynamic-line w-32 mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Minha filosofia é usar a tecnologia como uma ferramenta para gerar impacto social e cultural. 
                Foco em criar narrativas decoloniais que resgatam memórias e empoderam vozes historicamente 
                silenciadas, apostando na união entre a inovação digital e a cultura para melhorar a vida das pessoas.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Projetos de <span className="text-gradient-primary">Vanguarda</span>
              </h2>
              <p className="text-xl text-muted-foreground">IA e Intervenção Cultural</p>
            </div>
          </ScrollReveal>

          <div className="asymmetric-grid">
            <ProjectCard
              title="Museu da Memória Negra em IA"
              description="Utiliza IA generativa para recriar visualmente momentos cruciais da história afro-brasileira sem registro pictórico. O projeto foi exposto na Alemanha e Áustria."
              category="IA Generativa"
              delay={0}
            />
            
            <ProjectCard
              title="Griot AI"
              description="Explora a vida de Mohammed Gardo Baquaqua, figura histórica da diáspora africana. Um projeto de pesquisa e IA generativa para resgatar e contar sua história."
              category="Pesquisa IA"
              delay={200}
            />
            
            <ProjectCard
              title="Oráculo Cultural"
              description="Plataforma de assinatura que usa IA para analisar e auxiliar artistas e produtores culturais a terem seus projetos aprovados em editais de fomento."
              category="SaaS Cultural"
              delay={400}
            />
            
            <ProjectCard
              title="Falatório nas Ruas – Stella do Patrocínio"
              description="Uma intervenção urbana que revive a voz da artista negra Stella do Patrocínio através de lambe-lambes com QR codes, transformando a paisagem urbana em um museu a céu aberto."
              category="Arte Urbana"
              delay={600}
            />
            
            <ProjectCard
              title="App 'Amanhã' (Museu do Amanhã)"
              description="Eleito o melhor aplicativo de Internet das Coisas (IoT) em 2016."
              category="IoT"
              delay={800}
            />
            
            <ProjectCard
              title="Museu da Língua Portuguesa"
              description="Responsável pela produção audiovisual e licenciamento de conteúdo para a linha do tempo do museu, em parceria com a Fundação Roberto Marinho."
              category="Produção"
              delay={1000}
            />
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Trajetória <span className="text-gradient-primary">Premiada</span>
              </h2>
              <p className="text-xl text-muted-foreground">Reconhecida Internacionalmente</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <AwardItem
              title="Young Creative Entrepreneur Award"
              description="British Council - Reconhecimento internacional como jovem empreendedor criativo"
              year="2013"
              delay={0}
            />
            
            <AwardItem
              title="Power To The Pixel"
              description="Londres - A mobCONTENT foi reconhecida como empresa brasileira de destaque por sua inovação"
              year="2015"
              delay={200}
            />
            
            <AwardItem
              title="Sunny Side of The Doc"
              description="França - Prêmio por projetos transmídia"
              year="2013"
              delay={400}
            />
            
            <AwardItem
              title="Prêmio TAL"
              description="A série 'Garagem Maker' foi nomeada como melhor interprograma da América Latina"
              year="2018"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
                  Da <span className="text-gradient-primary">Comunicação</span> ao Código
                </h2>
                <div className="dynamic-line w-24"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com formação em Rádio e TV pela UFRJ e profunda expertise técnica em Inteligência Artificial, 
                  Machine Learning e Gestão de Produtos, minha carreira é marcada pela fusão da comunicação com 
                  o desenvolvimento de software.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lidero equipes multidisciplinares para transformar ideias complexas em experiências digitais 
                  impactantes e socialmente relevantes.
                </p>
              </div>
              
              <div className="relative">
                <div className="w-full h-96 bg-gradient-card rounded-2xl glow-secondary overflow-hidden transform rotate-2">
                  <img 
                    src={heroImage}
                    alt="Marcos Ferreira trabalhando"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gradient-primary mb-8">
              Vamos Colaborar para Gerar Impacto?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12">
              Conecte-se comigo para explorar como a tecnologia pode transformar narrativas e empoderar comunidades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => window.open('https://linkedin.com/in/marcosferreira', '_blank')}
              >
                LinkedIn
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.open('mailto:marcos@mobcontent.com', '_blank')}
              >
                Email
              </Button>
              
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => window.open('https://mobcontent.com', '_blank')}
              >
                mobCONTENT
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Marcos Ferreira. Impacto através da tecnologia.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
