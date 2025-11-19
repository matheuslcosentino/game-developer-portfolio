import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Gamepad2, Code, Layers, Github, Linkedin, Mail, MessageCircle, Instagram } from "lucide-react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const homeRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const refs: { [key: string]: React.RefObject<HTMLElement | null> } = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef,
    };

    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Delirium",
      description:
        "Jogo de horror psicológico desenvolvido em Game Jam, explorando mecânicas de sanidade mental e atmosfera perturbadora.",
      role: "Lead Programmer",
      image: "/project1.png",
      tags: ["Unity", "C#", "Game Jam", "Psychological Horror"],
      link: "https://github.com/matheuslcosentino",
      status: "Concluído",
    },
    {
      title: "Shadow of Memories",
      description:
        "Projeto desenvolvido em Game Jam, explorando mecânicas de memória e atmosfera sombria com narrativa não-linear.",
      role: "Programmer",
      image: "/project2.png",
      tags: ["Unity", "C#", "Game Jam", "Narrative Design"],
      link: "https://github.com/matheuslcosentino",
      status: "Concluído",
    },
    {
      title: "Visitors",
      description:
        "Jogo de horror independente focado em resolução de enigmas e mecânicas de sobrevivência em ambiente claustrofóbico.",
      role: "Gameplay Programmer",
      image: "/project3.jpg",
      tags: ["Unity", "C#", "Horror", "Puzzle"],
      link: "https://github.com/matheuslcosentino",
      status: "Em Desenvolvimento",
    },
  ];

  const skills = [
    "Unity 3D",
    "C#",
    ".NET",
    "Game Design",
    "Gameplay Programming",
    "Git",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header onNavigate={scrollToSection} />

      {/* Hero Section - Asymmetric Layout */}
      <section
        ref={homeRef}
        className="min-h-screen flex items-center relative px-4 overflow-hidden"
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), linear-gradient(135deg, #000000 0%, #0a1929 100%)",
        }}
      >
        {/* Floating shapes background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            style={{
              top: "20%",
              left: "10%",
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"
            style={{
              bottom: "10%",
              right: "5%",
              transform: `translateY(${scrollY * -0.2}px)`,
            }}
          />
        </div>

        <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left side - Text content */}
          <div className="space-y-8 lg:pr-12">
            <div className="inline-block">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase border border-primary/30 px-4 py-2 rounded-full bg-primary/5 backdrop-blur-sm">
                Game Developer Portfolio
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Olá, eu sou o{" "}
              <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-pulse">
                Matheus
              </span>
            </h1>

            <div className="flex flex-wrap gap-4 text-lg text-muted-foreground">
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
                <Gamepad2 className="w-5 h-5 text-primary" />
                <span>Game Developer</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
                <Code className="w-5 h-5 text-primary" />
                <span>C# Programmer</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
                <Layers className="w-5 h-5 text-primary" />
                <span>Unity3D</span>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Desenvolvendo experiências interativas que combinam complexidade
              técnica e gameplay envolvente, com paixão por jogos de terror e
              narrativas imersivas.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
                onClick={() => scrollToSection("projects")}
              >
                Ver Projetos
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="text-foreground border-border hover:bg-card/50 backdrop-blur-sm"
              >
                Sobre Mim
              </Button>
            </div>
          </div>

          {/* Right side - Decorative element */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[600px]">
              {/* Glassmorphism card */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl backdrop-blur-xl border border-white/10 p-8 transform rotate-6 hover:rotate-3 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/30 rounded-2xl flex items-center justify-center">
                    <Gamepad2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">2+ Anos</h3>
                  <p className="text-muted-foreground">Experiência em desenvolvimento de jogos</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-3xl backdrop-blur-xl border border-white/10 p-8 transform -rotate-6 hover:-rotate-3 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/30 rounded-2xl flex items-center justify-center">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">3 Projetos</h3>
                  <p className="text-muted-foreground">Game Jams vencidas e jogos publicados</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary"
          aria-label="Scroll para baixo"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About Section - Creative Two Column Layout */}
      <section
        ref={aboutRef}
        className="min-h-screen flex items-center py-32 px-4 bg-background relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Conheça mais</span>
            {/* Foto de Perfil */}
              <div className="flex justify-center my-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <img 
                    src="/profile.jpg" 
                    alt="Matheus Lopes" 
                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-2xl"
                  />
                </div>
              </div>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-foreground">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left column - 3/5 width */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Desenvolvedor Especializado</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Desenvolvedor de jogos especializado em C# focado no desenvolvimento e implementação de novas mecânicas. Apaixonado por jogos de terror e com grande amor por contar histórias.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all">
                  <span className="text-3xl mb-3 block">🎓</span>
                  <h4 className="font-bold text-lg mb-2">Formação</h4>
                  <p className="text-sm text-muted-foreground">Graduação em Game Design na Univali – Balneário Camboriú</p>
                </div>

                <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all">
                  <span className="text-3xl mb-3 block">🏆</span>
                  <h4 className="font-bold text-lg mb-2">Conquistas</h4>
                  <p className="text-sm text-muted-foreground">2 projetos premiados em Game Jams com equipes multidisciplinares</p>
                </div>

                <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all">
                  <span className="text-3xl mb-3 block">💻</span>
                  <h4 className="font-bold text-lg mb-2">Especialização</h4>
                  <p className="text-sm text-muted-foreground">C# e Unity com foco em sistemas de gameplay e mecânicas interativas</p>
                </div>

                <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all">
                  <span className="text-3xl mb-3 block">👻</span>
                  <h4 className="font-bold text-lg mb-2">Paixão</h4>
                  <p className="text-sm text-muted-foreground">Jogos de terror e criação de experiências imersivas e atmosféricas</p>
                </div>
              </div>
            </div>

            {/* Right column - 2/5 width */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Layers className="w-6 h-6" />
                  Habilidades
                </h3>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-3 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default group"
                    >
                      <span className="font-medium group-hover:text-primary transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    🎯 Objetivos
                  </h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>Iniciar carreira na indústria de desenvolvimento de jogos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>Aprender mais sobre C# e outras linguagens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>Criar experiências de jogo memoráveis e inovadoras</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Bento Grid Layout */}
      <section
        ref={projectsRef}
        className="min-h-screen flex items-center py-32 px-4 relative overflow-hidden"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), linear-gradient(180deg, #000000 0%, #0a1929 100%)",
        }}
      >
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Portfolio</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-foreground">
              Meus Projetos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça meus projetos com uma seleção dos mais recentes trabalhos em desenvolvimento de jogos.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
          </div>

          {/* Bento Grid - Asymmetric layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {/* First project - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <ProjectCard {...projects[0]} />
            </div>

            {/* Second project - Normal size */}
            <div>
              <ProjectCard {...projects[1]} />
            </div>

            {/* Third project - Takes 2 columns on medium screens */}
            <div className="md:col-span-2 lg:col-span-1">
              <ProjectCard {...projects[2]} />
            </div>

            {/* Call to action card */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="h-full bg-gradient-to-br from-primary/20 to-blue-500/20 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-all group">
                <Gamepad2 className="w-16 h-16 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Mais projetos em breve!</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Estou sempre trabalhando em novos projetos e participando de Game Jams. Acompanhe meu GitHub para ver as novidades.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open("https://github.com/matheuslcosentino", "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Ver GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Modern Card Layout */}
      <section
        ref={contactRef}
        className="min-h-screen flex items-center py-32 px-4 bg-background relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Entre em contato</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-foreground">
              Vamos Conversar!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e colaborações. Entre em contato através das redes sociais.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="mailto:contato@example.com"
              className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">Envie uma mensagem</p>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Conecte-se comigo</p>
            </a>

            <a
              href="https://github.com/matheuslcosentino"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">GitHub</h3>
              <p className="text-sm text-muted-foreground">Veja meus projetos</p>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Instagram</h3>
              <p className="text-sm text-muted-foreground">Siga meu trabalho</p>
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">Converse diretamente</p>
            </a>

            <div className="group bg-gradient-to-br from-primary/20 to-blue-500/20 backdrop-blur-xl border border-primary/30 rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Gamepad2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Discord</h3>
              <p className="text-sm text-muted-foreground">Junte-se à comunidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Matheus Lopes. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            Desenvolvido com React, Tailwind CSS e muito ☕
          </p>
        </div>
      </footer>
    </div>
  );
}
