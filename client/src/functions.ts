/**
 * 🎮 FUNÇÕES CENTRALIZADAS DO SITE
 * 
 * Edite TODAS as funções aqui neste arquivo único!
 * Este é o ponto central para toda lógica do seu portfólio.
 */

// ============================================================================
// 📱 DETECÇÃO DE DISPOSITIVO
// ============================================================================

export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

// ============================================================================
// 🎥 EXTRAÇÃO DE VIDEO ID DO YOUTUBE
// ============================================================================

export const extractVideoId = (url: string): string | null => {
  if (!url || url.trim() === '') return null;

  // Formato: https://www.youtube.com/embed/VIDEO_ID
  let match = url.match(/(?:embed\/)([^/?]+)/);
  if (match) return match[1];

  // Formato: https://youtu.be/VIDEO_ID
  match = url.match(/youtu\.be\/([^/?]+)/);
  if (match) return match[1];

  // Formato: https://www.youtube.com/watch?v=VIDEO_ID
  match = url.match(/v=([^&]+)/);
  if (match) return match[1];

  return null;
};

// ============================================================================
// ▶️ MANIPULADOR DE CLIQUE NO BOTÃO PLAY
// ============================================================================

export const handlePlayClick = (
  trailerUrl: string | undefined,
  onModalOpen: () => void
): void => {
  if (!trailerUrl || trailerUrl.trim() === '') return;

  const videoId = extractVideoId(trailerUrl);
  if (!videoId) return;

  const mobile = isMobileDevice();

  if (mobile) {
    // Mobile: redireciona para YouTube
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  } else {
    // Desktop: abre modal
    onModalOpen();
  }
};

// ============================================================================
// 🔧 CONSTRUIR URL DO YOUTUBE EMBED
// ============================================================================

export const buildYouTubeEmbedUrl = (trailerUrl: string | undefined): string => {
  if (!trailerUrl || trailerUrl.trim() === '') return '';
  
  const videoId = extractVideoId(trailerUrl);
  if (!videoId) return '';
  
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
};

// ============================================================================
// 📜 SCROLL SUAVE PARA SEÇÃO
// ============================================================================

export const scrollToSection = (
  sectionRef: React.RefObject<HTMLElement | null>
): void => {
  sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
};

// ============================================================================
// 🎨 TOGGLE TEMA (DARK/LIGHT)
// ============================================================================

export const toggleTheme = (currentTheme: string): string => {
  return currentTheme === 'light' ? 'dark' : 'light';
};

// ============================================================================
// 💾 PERSISTIR PREFERÊNCIA DE TEMA NO LOCALSTORAGE
// ============================================================================

export const saveThemePreference = (theme: string): void => {
  localStorage.setItem('theme-preference', theme);
};

export const loadThemePreference = (): string | null => {
  return localStorage.getItem('theme-preference');
};

// ============================================================================
// 📋 VALIDAÇÃO DE URL
// ============================================================================

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// ============================================================================
// 🔗 ABRIR LINK EM NOVA ABA
// ============================================================================

export const openLink = (url: string): void => {
  if (isValidUrl(url)) {
    window.open(url, '_blank');
  }
};

// ============================================================================
// 📝 FORMATAR TEXTO (CAPITALIZAR)
// ============================================================================

export const capitalizeText = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

// ============================================================================
// 🔍 DEBOUNCE FUNCTION (PARA SCROLL/RESIZE)
// ============================================================================

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

// ============================================================================
// 📧 VALIDAR EMAIL
// ============================================================================

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// ============================================================================
// 🎯 DETECTAR SE ELEMENTO ESTÁ VISÍVEL NA VIEWPORT
// ============================================================================

export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// ============================================================================
// ⏰ DELAY/SLEEP FUNCTION
// ============================================================================

export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// ============================================================================
// 🗂️ AGRUPAR ARRAY POR PROPRIEDADE
// ============================================================================

export const groupBy = <T>(
  array: T[],
  key: keyof T
): { [key: string]: T[] } => {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as { [key: string]: T[] });
};

// ============================================================================
// 🔀 EMBARALHAR ARRAY
// ============================================================================

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// ============================================================================
// 🎯 CLAMP NUMBER (LIMITAR ENTRE MIN/MAX)
// ============================================================================

export const clamp = (value: number, min: number, max: number): number => {
  return Math.max(min, Math.min(max, value));
};

// ============================================================================
// 📏 MAPEAR NÚMERO DE UM INTERVALO PARA OUTRO
// ============================================================================

export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

// ============================================================================
// ✅ RETORNAR CLASSE CONDICIONAL (PARA TAILWIND)
// ============================================================================

export const conditionalClass = (
  condition: boolean,
  trueClass: string,
  falseClass: string = ''
): string => {
  return condition ? trueClass : falseClass;
};
