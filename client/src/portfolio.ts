/**
 * 🎮 PORTFÓLIO CENTRALIZADO - ARQUIVO ÚNICO DE VERDADE
 * 
 * ⚠️  EDITE TUDO AQUI! Este é o único arquivo que você precisa editar.
 * Todos os dados, configurações e funções do site estão aqui.
 * 
 * Estrutura:
 * 1. Dados Pessoais
 * 2. Projetos
 * 3. Habilidades
 * 4. Links de Contato
 * 5. Conteúdo das Seções
 * 6. Configurações de Design
 * 7. Navegação
 * 8. Funções Utilitárias
 */

// ============================================================================
// 👤 DADOS PESSOAIS
// ============================================================================

export const PERSONAL_INFO = {
  name: "Matheus",
  fullName: "Matheus Lopes",
  title: "Game Developer",
  subtitle:
    "Desenvolvendo experiências interativas que combinam complexidade técnica e gameplay envolvente, com paixão por jogos de terror e narrativas imersivas.",
  email: "matheuslopescosentino@hotmail.com",
  whatsapp: "5547992230328",
};

// ============================================================================
// 🎮 PROJETOS
// ============================================================================

export const PROJECTS = [
  {
    title: "Delirium",
    description:
      "Jogo de horror psicológico desenvolvido em TCC (Trabalho de Conclusão de Curso), explorando mecânicas de sanidade mental e atmosfera perturbadora.",
    role: "Lead Programmer",
    image: "/project1.png",
    tags: ["Unity", "C#", "Game Jam", "Psychological Horror"],
    link: "https://unholysaintstudios.itch.io/delirium",
    trailerUrl: "https://www.youtube.com/embed/OXlCnt6Xueg",
    status: "Concluído",
  },
  {
    title: "Horror Story Folks",
    description:
      "Jogo de horror independente em desenvolvimento pela UF Team. Focado em resolução de enigmas e mecânicas de sobrevivência.",
    role: "Gameplay Programmer",
    image: "/project2.png",
    tags: ["Unity", "C#", "Horror", "Puzzle"],
    link: "https://uf-team.itch.io/horrorstoryfolks",
    trailerUrl: "https://www.youtube.com/embed/DKj8WZ_q7nY",
    status: "Em Desenvolvimento",
  },
  {
    title: "Shadow of Memories",
    description:
      "Projeto desenvolvido em Game Jam, explorando mecânicas de memória e atmosfera sombria com narrativa não-linear.",
    role: "Gameplay Programmer",
    image: "/project3.png",
    tags: ["Unity", "C#", "Game Jam", "Narrative Design"],
    link: "https://uf-team.itch.io/sombra-das-memorias",
    trailerUrl: "https://www.youtube.com/embed/6jRYfJA9XGQ",
    status: "Concluído",
  },
];

// ============================================================================
// 💻 HABILIDADES
// ============================================================================

export const SKILLS = [
  "Unity 3D",
  "C#",
  ".NET",
  "Game Design",
  "Gameplay Programming",
  "Git",
];

// ============================================================================
// 🔗 LINKS DE CONTATO
// ============================================================================

export const CONTACT_LINKS = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/matheus-cosentino/",
    icon: "Linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/matheuslcosentino",
    icon: "Github",
  },
  {
    name: "Email",
    url: "mailto:matheuslopescosentino@hotmail.com",
    icon: "Mail",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/matheus.cosentino",
    icon: "Instagram",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/5547992230328",
    icon: "MessageCircle",
  },
];

// ============================================================================
// 📝 CONTEÚDO DAS SEÇÕES
// ============================================================================

export const ABOUT_CONTENT = {
  title: "Sobre Mim",
  intro:
    "Desenvolvedor de jogos especializado em C# focado no desenvolvimento e implementação de novas mecânicas. Apaixonado por jogos de terror e com grande amor por contar histórias.",
  highlights: [
    {
      icon: "🎓",
      title: "Formação",
      text: "Graduação em Game Design na Univali – Balneário Camboriú",
    },
    {
      icon: "🏆",
      title: "Conquistas",
      text: "2 projetos premiados em Game Jams com equipes multidisciplinares",
    },
    {
      icon: "💻",
      title: "Especialização",
      text: "C# e Unity com foco em sistemas de gameplay e mecânicas interativas",
    },
    {
      icon: "👻",
      title: "Paixão",
      text: "Jogos de terror e criação de experiências imersivas e atmosféricas",
    },
  ],
  goals: [
    "Iniciar carreira na indústria de desenvolvimento de jogos",
    "Aprender mais sobre C# e outras linguagens",
    "Criar experiências de jogo memoráveis e inovadoras",
  ],
};

export const PROJECTS_CONTENT = {
  title: "Meus Projetos",
  subtitle:
    "Conheça meus projetos com uma seleção dos mais recentes trabalhos em desenvolvimento de jogos.",
};

export const CONTACT_CONTENT = {
  title: "Vamos Conversar!",
  subtitle:
    "Estou sempre aberto a novas oportunidades e colaborações. Entre em contato através das redes sociais.",
};

// ============================================================================
// 🎨 CONFIGURAÇÕES DE DESIGN
// ============================================================================

export const DESIGN_CONFIG = {
  heroAnimationElements: [
    { emoji: "🎮", position: "top-10 left-5", delay: "0s", size: "9xl" },
    { emoji: "◯ ✕ □ △", position: "top-60 right-10", delay: "1s", size: "7xl" },
    { emoji: "↖", position: "bottom-32 left-16", delay: "0.5s", size: "8xl" },
    { emoji: "⬜", position: "bottom-40 right-8", delay: "1.5s", size: "6xl" },
    { emoji: "★", position: "top-32 right-32", delay: "2s", size: "8xl" },
    { emoji: "🕹️", position: "top-96 left-1/4", delay: "0.3s", size: "7xl" },
    { emoji: "🎯", position: "bottom-20 right-1/3", delay: "1.2s", size: "6xl" },
    { emoji: "⚡", position: "top-40 left-1/3", delay: "1.8s", size: "5xl" },
    { emoji: "◆", position: "bottom-56 left-1/2", delay: "0.8s", size: "7xl" },
    { emoji: "🌟", position: "top-1/2 right-20", delay: "2.3s", size: "6xl" },
  ],
};

// ============================================================================
// 📱 ITENS DE NAVEGAÇÃO
// ============================================================================

export const NAV_ITEMS = [
  { label: "Sobre", section: "about" },
  { label: "Projetos", section: "projects" },
  { label: "Contato", section: "contact" },
];

// ============================================================================
// ⏰ RODAPÉ
// ============================================================================

export const FOOTER_TEXT = {
  copyright: "© 2024 Matheus Lopes. Todos os direitos reservados.",
  credits: "Desenvolvido com React, Tailwind CSS e muito ☕",
};

// ============================================================================
// 🛠️ FUNÇÕES UTILITÁRIAS
// ============================================================================

/**
 * Detecta se o dispositivo é mobile
 */
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * Extrai o ID do vídeo do YouTube de diferentes formatos de URL
 */
export const extractVideoId = (url: string): string | null => {
  if (!url || url.trim() === "") return null;

  let match = url.match(/(?:embed\/)([^/?]+)/);
  if (match) return match[1];

  match = url.match(/youtu\.be\/([^/?]+)/);
  if (match) return match[1];

  match = url.match(/v=([^&]+)/);
  if (match) return match[1];

  return null;
};

/**
 * Manipula o clique no botão Play do trailer
 */
export const handlePlayClick = (
  trailerUrl: string | undefined,
  onModalOpen: () => void
): void => {
  if (!trailerUrl || trailerUrl.trim() === "") return;

  const videoId = extractVideoId(trailerUrl);
  if (!videoId) return;

  const mobile = isMobileDevice();

  if (mobile) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  } else {
    onModalOpen();
  }
};

/**
 * Constrói a URL de embed do YouTube
 */
export const buildYouTubeEmbedUrl = (trailerUrl: string | undefined): string => {
  if (!trailerUrl || trailerUrl.trim() === "") return "";

  const videoId = extractVideoId(trailerUrl);
  if (!videoId) return "";

  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
};

/**
 * Scroll suave para uma seção
 */
export const scrollToSection = (
  sectionRef: React.RefObject<HTMLElement | null>
): void => {
  sectionRef.current?.scrollIntoView({ behavior: "smooth" });
};

/**
 * Toggle entre temas dark/light
 */
export const toggleTheme = (currentTheme: string): string => {
  return currentTheme === "light" ? "dark" : "light";
};

/**
 * Salva preferência de tema no localStorage
 */
export const saveThemePreference = (theme: string): void => {
  localStorage.setItem("theme-preference", theme);
};

/**
 * Carrega preferência de tema do localStorage
 */
export const loadThemePreference = (): string | null => {
  return localStorage.getItem("theme-preference");
};

/**
 * Valida se uma string é uma URL válida
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Abre um link em uma nova aba
 */
export const openLink = (url: string): void => {
  if (isValidUrl(url)) {
    window.open(url, "_blank");
  }
};

/**
 * Capitaliza a primeira letra de um texto
 */
export const capitalizeText = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

/**
 * Debounce para scroll/resize eventos
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Valida um endereço de email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Detecta se um elemento está visível no viewport
 */
export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Delay/Sleep function (retorna uma Promise)
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Agrupa um array por uma propriedade específica
 */
export const groupBy = <T>(
  array: T[],
  key: keyof T
): { [key: string]: T[] } => {
  return array.reduce(
    (result, item) => {
      const groupKey = String(item[key]);
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(item);
      return result;
    },
    {} as { [key: string]: T[] }
  );
};

/**
 * Embaralha um array
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Limita um número entre min e max
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.max(min, Math.min(max, value));
};

/**
 * Mapeia um número de um intervalo para outro
 */
export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

/**
 * Retorna uma classe condicional para Tailwind
 */
export const conditionalClass = (
  condition: boolean,
  trueClass: string,
  falseClass: string = ""
): string => {
  return condition ? trueClass : falseClass;
};
