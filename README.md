# 🎮 Game Developer Portfolio - Código Fonte

Este é o código fonte do portfolio de desenvolvedor de jogos de Matheus Lopes.

## 🔗 Links

- **Site ao vivo**: https://matheuslcosentino.github.io/game-developer-portfolio/
- **Repositório de deploy**: https://github.com/matheuslcosentino/game-developer-portfolio

## 🛠️ Tecnologias

- React 18.3.1
- Vite 7.1.9
- TailwindCSS 4.1.14
- TypeScript 5.6.3
- Wouter 3.7.1 (roteamento)
- Framer Motion 12.23.22 (animações)

## 📦 Como Usar

### 1. Clone o repositório

```bash
git clone https://github.com/matheuslcosentino/game-developer-portfolio-source.git
cd game-developer-portfolio-source
```

### 2. Instale as dependências

```bash
npm install
# ou
pnpm install
```

### 3. Execute em desenvolvimento

```bash
npm run dev
# ou
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### 4. Faça o build para produção

```bash
npm run build
# ou
pnpm run build
```

Os arquivos compilados estarão em `dist/public/`

## 🎨 Personalização

### Adicionar sua foto

1. Adicione sua foto em `client/public/profile.jpg`
2. Edite `client/src/pages/Home.tsx` na seção "Sobre Mim"

### Modificar projetos

Edite o array `projects` em `client/src/pages/Home.tsx`:

```tsx
const projects = [
  {
    title: "Nome do Projeto",
    description: "Descrição...",
    role: "Sua função",
    image: "/game-developer-portfolio/imagem.jpg",
    tags: ["Tag1", "Tag2"],
    link: "https://link-do-projeto.com",
    status: "Concluído",
  },
];
```

### Modificar imagens dos projetos

Substitua as imagens em `client/public/`:
- `project1.png`
- `project2.png`
- `project3.jpg`

## 🚀 Deploy

### GitHub Pages

1. Faça o build:
```bash
npm run build
```

2. Entre no diretório de build:
```bash
cd dist/public
```

3. Inicialize o Git (se ainda não estiver):
```bash
git init
git branch -m main
```

4. Adicione o remote do repositório de deploy:
```bash
git remote add origin https://github.com/matheuslcosentino/game-developer-portfolio.git
```

5. Faça commit e push:
```bash
git add -A
git commit -m "Update portfolio"
git push -u origin main --force
```

## 📁 Estrutura do Projeto

```
game-developer-portfolio-source/
├── client/
│   ├── public/          # Arquivos estáticos
│   │   ├── project1.png
│   │   ├── project2.png
│   │   └── project3.jpg
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── pages/       # Páginas
│   │   │   └── Home.tsx # Página principal
│   │   └── ...
│   └── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## 📝 Licença

Este projeto é de código aberto e está disponível para uso pessoal.

## 👤 Autor

**Matheus Lopes**
- GitHub: [@matheuslcosentino](https://github.com/matheuslcosentino)
