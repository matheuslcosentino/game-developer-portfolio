# 📝 Guia de Funções Centralizadas

## ✅ Uma Única Fonte de Verdade

Todas as funções do seu portfólio estão centralizadas em **um arquivo único**:

```
client/src/functions.ts
```

**Edite AQUI quando precisar adicionar/modificar funções!**

---

## 📚 Funções Disponíveis

### 🎥 YouTube & Trailer

#### `extractVideoId(url: string): string | null`
- Extrai o ID do vídeo do YouTube de diferentes formatos de URL
- Suporta: embed, youtu.be, youtube.com/watch?v=

```typescript
import { extractVideoId } from '@/functions';

const id = extractVideoId('https://youtu.be/dQw4w9WgXcQ');
// Retorna: "dQw4w9WgXcQ"
```

#### `buildYouTubeEmbedUrl(trailerUrl: string): string`
- Constrói URL do YouTube embed a partir de qualquer formato

```typescript
import { buildYouTubeEmbedUrl } from '@/functions';

const embedUrl = buildYouTubeEmbedUrl('https://youtu.be/dQw4w9WgXcQ');
// Retorna: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
```

#### `handlePlayClick(trailerUrl: string, onModalOpen: () => void): void`
- Gerencia o clique no botão Play
- Mobile: redireciona para YouTube
- Desktop: abre o modal

```typescript
import { handlePlayClick } from '@/functions';

const handleClick = () => {
  handlePlayClick(trailerUrl, () => setIsTrailerOpen(true));
};
```

---

### 📱 Detecção de Dispositivo

#### `isMobileDevice(): boolean`
- Retorna true se o dispositivo é mobile

```typescript
import { isMobileDevice } from '@/functions';

if (isMobileDevice()) {
  // Código para mobile
}
```

---

### 🔗 Links & URLs

#### `openLink(url: string): void`
- Abre link em nova aba com validação

```typescript
import { openLink } from '@/functions';

<button onClick={() => openLink('https://github.com')}>
  Abrir GitHub
</button>
```

#### `isValidUrl(url: string): boolean`
- Valida se uma string é uma URL válida

```typescript
import { isValidUrl } from '@/functions';

const valid = isValidUrl('https://github.com');
```

---

### 📜 Scroll & Navegação

#### `scrollToSection(sectionRef: React.RefObject<HTMLElement>): void`
- Scroll suave para uma seção

```typescript
import { scrollToSection } from '@/functions';

<button onClick={() => scrollToSection(aboutRef)}>
  Scroll para About
</button>
```

---

### 🎨 Tema (Dark/Light)

#### `toggleTheme(currentTheme: string): string`
- Alterna entre temas light/dark

```typescript
import { toggleTheme } from '@/functions';

const newTheme = toggleTheme('light'); // Retorna: 'dark'
```

#### `saveThemePreference(theme: string): void`
- Salva preferência de tema no localStorage

```typescript
import { saveThemePreference } from '@/functions';

saveThemePreference('dark');
```

#### `loadThemePreference(): string | null`
- Carrega preferência de tema do localStorage

```typescript
import { loadThemePreference } from '@/functions';

const saved = loadThemePreference();
```

---

### ✉️ Validação

#### `isValidEmail(email: string): boolean`
- Valida endereço de email

```typescript
import { isValidEmail } from '@/functions';

if (isValidEmail('user@example.com')) {
  // Email válido
}
```

---

### ⏰ Utilitários

#### `debounce<T>(func: T, delay: number)`
- Debounce para funções (útil para scroll/resize)

```typescript
import { debounce } from '@/functions';

const debouncedScroll = debounce(() => {
  // Ação no scroll
}, 300);

window.addEventListener('scroll', debouncedScroll);
```

#### `delay(ms: number): Promise<void>`
- Aguarda X milissegundos

```typescript
import { delay } from '@/functions';

await delay(1000); // Aguarda 1 segundo
```

#### `clamp(value: number, min: number, max: number): number`
- Limita número entre min e max

```typescript
import { clamp } from '@/functions';

clamp(5, 0, 10); // 5
clamp(15, 0, 10); // 10
```

#### `mapRange(value, inMin, inMax, outMin, outMax): number`
- Mapeia número de um intervalo para outro

```typescript
import { mapRange } from '@/functions';

mapRange(0.5, 0, 1, 0, 100); // 50
```

---

### 🗂️ Array Utilities

#### `groupBy<T>(array: T[], key: keyof T)`
- Agrupa array por propriedade

```typescript
import { groupBy } from '@/functions';

const projects = [
  { name: 'Game1', tag: 'Unity' },
  { name: 'Game2', tag: 'Unreal' },
  { name: 'Game3', tag: 'Unity' }
];

const grouped = groupBy(projects, 'tag');
// { 'Unity': [...], 'Unreal': [...] }
```

#### `shuffleArray<T>(array: T[]): T[]`
- Embaralha array

```typescript
import { shuffleArray } from '@/functions';

const shuffled = shuffleArray([1, 2, 3, 4, 5]);
```

---

### 🎨 Condicional CSS

#### `conditionalClass(condition: boolean, trueClass: string, falseClass?: string): string`
- Retorna classe condicional (para Tailwind)

```typescript
import { conditionalClass } from '@/functions';

<div className={conditionalClass(
  isActive,
  'bg-blue-500 text-white',
  'bg-gray-200 text-black'
)}>
  Botão
</div>
```

---

## 🛠️ Como Adicionar Novas Funções

1. Abra `client/src/functions.ts`
2. Adicione sua função no topo ou em uma seção apropriada
3. Exporte a função (já está feito com `export`)
4. Importe no componente:

```typescript
import { suaNovaFuncao } from '@/functions';
```

---

## 📋 Exemplo Completo: ProjectCard.tsx

```typescript
import { handlePlayClick, buildYouTubeEmbedUrl, openLink } from '@/functions';

export default function ProjectCard({ trailerUrl, link, ...props }) {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  return (
    <>
      <button onClick={() => openLink(link)}>Acessar</button>
      <button onClick={() => handlePlayClick(trailerUrl, () => setIsTrailerOpen(true))}>
        Play
      </button>
      
      <TrailerModal 
        isOpen={isTrailerOpen}
        trailerUrl={buildYouTubeEmbedUrl(trailerUrl)}
        onClose={() => setIsTrailerOpen(false)}
      />
    </>
  );
}
```

---

## 🚀 Workflow

```bash
# 1. Edite functions.ts
# 2. Importe no componente
# 3. Use a função
# 4. Build automático
npm run build

# 5. Deploy
git add .
git commit -m "Feat: adicionar nova função"
git push origin main
```

---

## 💡 Dicas

✅ **Use TypeScript** - Aproveite type hints ao usar as funções  
✅ **Documente** - Adicione comentários em funções complexas  
✅ **Reutilize** - Não duplique lógica, coloque em `functions.ts`  
✅ **Organize** - Agrupe funções por seção (vídeo, mobile, etc)  

---

## 🎯 Quick Reference

| Função | Uso |
|--------|-----|
| `extractVideoId()` | Extrair ID do YouTube |
| `buildYouTubeEmbedUrl()` | Construir URL de embed |
| `handlePlayClick()` | Gerenciar clique Play |
| `isMobileDevice()` | Detectar mobile |
| `openLink()` | Abrir link externo |
| `scrollToSection()` | Scroll suave |
| `toggleTheme()` | Alternar tema |
| `isValidEmail()` | Validar email |
| `delay()` | Aguardar tempo |
| `clamp()` | Limitar número |
| `debounce()` | Debounce função |

---

**Dúvidas? Edite `client/src/functions.ts` e veja todos os exemplos! 🚀**
