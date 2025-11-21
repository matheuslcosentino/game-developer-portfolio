import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Gamepad2, Code, Layers, Github, Linkedin, Mail, MessageCircle, Instagram, ExternalLink, Download, Play } from "lucide-react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import * as PORTFOLIO from "@/portfolio";

// Icon mapping
const getIcon = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    Github,
    Linkedin,
    Mail,
    MessageCircle,
    Instagram,
  };
  return iconMap[iconName] || null;
};

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const homeRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer para animação ao scrollar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animar apenas o elemento com data-animate como um todo
            (entry.target as HTMLElement).classList.add("animate-scroll-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header onNavigate={scrollToSection} navItems={PORTFOLIO.NAV_ITEMS as any} />

      {/* Hero Section */}
      <section
        ref={homeRef}
        className="min-h-screen flex items-center relative px-4 overflow-hidden"
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), linear-gradient(135deg, #000000 0%, #0a1929 100%)",
        }}
      >
        {/* Animated Gaming Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Particles */}
          {Array.from({ length: 50 }).map((_, idx) => {
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const size = Math.random() * 3 + 1; // 1-4px particles
            const delay = Math.random() * 8;
            const duration = Math.random() * 4 + 6; // 6-10s
            
            return (
              <div
                key={`particle-${idx}`}
                style={{
                  position: "absolute",
                  top: `${top}%`,
                  left: `${left}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  borderRadius: "50%",
                  backgroundColor: "rgba(6, 182, 212, 0.6)",
                  boxShadow: `0 0 ${size * 2}px rgba(6, 182, 212, 0.8)`,
                  animation: `pulse ${duration}s ease-in-out infinite`,
                  animationDelay: `${delay}s`,
                  filter: "blur(0.5px)",
                }}
              />
            );
          })}

          {/* Animated Grid Lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{
              opacity: 0.15,
              animation: "moveGrid 20s linear infinite",
            }}
          >
            <defs>
              <pattern
                id="grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Glowing Lines - Animated */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{
              opacity: 0.08,
            }}
          >
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1"
              style={{
                animation: "dash 15s linear infinite",
                strokeDasharray: "500",
                strokeDashoffset: "0",
              }}
            />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"
              style={{
                animation: "dashReverse 20s linear infinite",
                strokeDasharray: "500",
                strokeDashoffset: "0",
              }}
            />
          </svg>

          {/* Glowing gradient orbs - Multiple layers */}
          <div
            className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            style={{
              top: "20%",
              left: "10%",
              transform: `translateY(${scrollY * 0.3}px)`,
              animation: "pulse 4s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-3xl"
            style={{
              bottom: "10%",
              right: "5%",
              transform: `translateY(${scrollY * -0.2}px)`,
              animation: "pulse 5s ease-in-out infinite",
              animationDelay: "1s",
            }}
          />
          <div
            className="absolute w-80 h-80 bg-cyan-500/5 rounded-full blur-2xl"
            style={{
              top: "50%",
              right: "20%",
              transform: `translateY(${scrollY * 0.2}px)`,
              animation: "pulse 6s ease-in-out infinite",
              animationDelay: "2s",
            }}
          />

          {/* Animated grid lines */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, 0.05) 25%, rgba(6, 182, 212, 0.05) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.05) 75%, rgba(6, 182, 212, 0.05) 76%, transparent 77%, transparent),
                linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, 0.05) 25%, rgba(6, 182, 212, 0.05) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.05) 75%, rgba(6, 182, 212, 0.05) 76%, transparent 77%, transparent)
              `,
              backgroundSize: "50px 50px",
              animation: "moveGrid 20s linear infinite",
            }}
          />

          {/* CSS Animation Keyframes */}
          <style>{`
            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-30px);
              }
            }
            
            @keyframes pulse {
              0%, 100% {
                opacity: 0.3;
              }
              50% {
                opacity: 0.6;
              }
            }
            
            @keyframes moveGrid {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(50px);
              }
            }
            
            @keyframes dash {
              to {
                stroke-dashoffset: -500;
              }
            }
            
            @keyframes dashReverse {
              to {
                stroke-dashoffset: 500;
              }
            }

            @keyframes slideInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes slideInLeft {
              from {
                opacity: 0;
                transform: translateX(-30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes slideInRight {
              from {
                opacity: 0;
                transform: translateX(30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            @keyframes float-up {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
            }

            .animate-scroll-in {
              animation: slideInUp 0.6s ease-out forwards !important;
            }

            .animate-scroll-in-left {
              animation: slideInLeft 0.6s ease-out forwards !important;
            }

            .animate-scroll-in-right {
              animation: slideInRight 0.6s ease-out forwards !important;
            }

            .animate-scroll-fade {
              animation: fadeIn 0.6s ease-out forwards !important;
            }
          `}</style>
        </div>

        <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left side - Text content */}
          <div className="space-y-8 lg:pr-12 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Olá, eu sou o{" "}
              <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-pulse">
                {PORTFOLIO.PERSONAL_INFO.name}
              </span>
            </h1>

            <div className="flex flex-wrap gap-4 text-lg text-muted-foreground justify-center lg:justify-start">
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
              {PORTFOLIO.PERSONAL_INFO.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
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
                  <h3 className="text-2xl font-bold">4+ Anos</h3>
                  <p className="text-muted-foreground">Experiência em desenvolvimento de jogos</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-3xl backdrop-blur-xl border border-white/10 p-8 transform -rotate-6 hover:-rotate-3 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/30 rounded-2xl flex items-center justify-center">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">4 Projetos</h3>
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

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about-section"
        data-animate="true"
        className="min-h-screen flex items-center py-32 px-4 bg-background relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Conheça mais</span>
            <div className="flex justify-center my-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt={PORTFOLIO.PERSONAL_INFO.fullName}
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-2xl"
                />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-foreground">
              {PORTFOLIO.ABOUT_CONTENT.title}
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
                      {PORTFOLIO.ABOUT_CONTENT.intro}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {PORTFOLIO.ABOUT_CONTENT.highlights.map((highlight, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all">
                    <span className="text-3xl mb-3 block">{highlight.icon}</span>
                    <h4 className="font-bold text-lg mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.text}</p>
                  </div>
                ))}
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
                  {PORTFOLIO.SKILLS.map((skill, index) => (
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
                    {PORTFOLIO.ABOUT_CONTENT.goals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        id="projects-section"
        data-animate="true"
        className="min-h-screen flex items-center py-32 px-4 relative overflow-hidden"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), linear-gradient(180deg, #000000 0%, #0a1929 100%)",
        }}
      >
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Portfolio</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-foreground">
              {PORTFOLIO.PROJECTS_CONTENT.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {PORTFOLIO.PROJECTS_CONTENT.subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
          </div>

          {/* Projects Grid - Single Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PORTFOLIO.PROJECTS.map((project, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 bg-card flex flex-col"
              >
                {/* Image Container - Fixed height */}
                <div className="relative aspect-square overflow-hidden bg-background/50 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.status && (
                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-bold text-foreground bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/50">
                        {project.status}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="flex flex-col p-4 bg-card/50 backdrop-blur-sm">
                  {/* Title and Description */}
                  <div className="mb-3">
                    <h3 className="text-base font-bold text-foreground mb-1">{project.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{project.description}</p>
                    <p className="text-xs">
                      <span className="text-primary font-bold">Função:</span>
                    </p>
                    <p className="text-xs text-foreground">{project.role}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 4).map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs px-2 py-1 bg-background border border-border rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 hover:border-primary/80 rounded-lg text-xs font-semibold transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Acessar
                    </a>
                    {project.trailerUrl && (
                      <a
                        href={project.trailerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/60 rounded-lg text-xs font-semibold transition-all"
                      >
                        <Play className="w-3.5 h-3.5" />
                        Trailer
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact-section"
        data-animate="true"
        className="flex items-center py-16 px-4 bg-background relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Entre em contato</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
              {PORTFOLIO.CONTACT_CONTENT.title}
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              {PORTFOLIO.CONTACT_CONTENT.subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {PORTFOLIO.CONTACT_LINKS.map((link, idx) => {
              const Icon = getIcon(link.icon);
              return (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/50 hover:bg-card/60 transition-all"
                >
                  {Icon && <Icon className="w-5 h-5 text-primary" />}
                  <span className="text-sm font-semibold">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container text-center">
          <p className="text-muted-foreground text-sm">
            {PORTFOLIO.FOOTER_TEXT.copyright}
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            {PORTFOLIO.FOOTER_TEXT.credits}
          </p>
        </div>
      </footer>

      {/* Floating Delirium Card */}
      <div
        className="fixed bottom-6 right-6 z-50 group cursor-pointer"
        style={{
          animation: "float-up 3s ease-in-out infinite",
        }}
      >
        <div className="bg-gradient-to-br from-card to-card/80 rounded-2xl p-6 w-80 shadow-2xl border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-primary/30">
          <div className="flex gap-4 mb-4">
            {/* Card Image */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border-2 border-primary/30 overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}project1.png`}
                  alt="Delirium"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">Recomendado</span>
              </div>
              <h3 className="text-foreground font-bold text-lg leading-tight mb-1">
                {PORTFOLIO.PROJECTS[0].title}
              </h3>
              <p className="text-muted-foreground text-xs line-clamp-2 mb-2">
                {PORTFOLIO.PROJECTS[0].role}
              </p>
              <p className="text-muted-foreground text-xs line-clamp-2">
                {PORTFOLIO.PROJECTS[0].description}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <a
              href={PORTFOLIO.PROJECTS[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 hover:border-primary/80 rounded-lg transition-all text-xs font-semibold"
            >
              <Download className="w-4 h-4" />
              Baixe Agora
            </a>
            <a
              href={PORTFOLIO.PROJECTS[0].trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/60 rounded-lg transition-all text-xs font-semibold"
            >
              <Play className="w-4 h-4" />
              Ver Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
