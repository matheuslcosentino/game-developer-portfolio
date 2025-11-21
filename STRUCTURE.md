# 📁 Estrutura de Projeto Centralizada

## Visão Geral

O projeto foi refatorado para centralizar toda a estrutura de `index.html` em um único arquivo de origem, eliminando duplicatas e simplificando o fluxo de build.

## 🎯 Estrutura Atual

```
game-developer-portfolio/
├── client/
│   ├── index.html          ← FONTE DE VERDADE (único)
│   ├── public/
│   │   └── 404.html
│   └── src/
│       └── ... (componentes React)
│
├── assets/                  ← Assets compilados (limpos)
│   ├── index-B6KtlVen.js    ← JS compilado
│   └── index-DYQGNki_.css   ← CSS compilado
│
├── dist/
│   └── public/              ← Output do Vite build
│       ├── index.html
│       └── assets/
│
├── index.html              ← Gerado automaticamente pelo plugin Vite
├── vite.config.ts          ← Config com plugin personalizado
└── package.json
```

## 🔄 Fluxo de Build

### Antes (Problematizado)
- ❌ Múltiplos `index.html` (client/index.html, /index.html, assets inline)
- ❌ Assets desorganizados e versões antigas não removidas
- ❌ Referências de caminhos inconsistentes
- ❌ Processo manual de cópia de arquivos

### Depois (Centralizado)
- ✅ **Uma única fonte de verdade**: `/client/index.html`
- ✅ **Plugin Vite personalizado** copia automaticamente para raiz após build
- ✅ **Assets limpos**: apenas arquivo compilado atual mantido
- ✅ **Referências consistentes**: todos os caminhos apontam para `/assets/`

## 📝 Como Funciona

### 1. Desenvolvimento
```bash
npm run dev
# Usa /client/index.html com hot reload
```

### 2. Build
```bash
npm run build
# ✓ Vite compila /client/index.html → /dist/public/index.html
# ✓ Plugin executa: copia /dist/public/index.html → /index.html
# ✓ Assets compilados são copiados para /assets/
```

### 3. Deploy
```bash
git add .
git commit -m "Deploy"
git push origin main
# GitHub Pages serve /index.html (raiz) automaticamente
```

## 🔧 Plugin Vite Personalizado

Adicionado em `vite.config.ts`:

```typescript
const copyIndexToRoot = {
  name: 'copy-index-to-root',
  apply: 'build' as const,
  async writeBundle() {
    const sourceIndex = path.resolve(import.meta.dirname, 'dist/public/index.html');
    const targetIndex = path.resolve(import.meta.dirname, 'index.html');
    
    if (fs.existsSync(sourceIndex)) {
      fs.copyFileSync(sourceIndex, targetIndex);
      console.log('✓ index.html copiado para raiz');
    }
  }
};
```

## 📦 Assets

### Arquivo Compilado Atual
- `index-B6KtlVen.js` - Bundle JavaScript otimizado (285 KB)
- `index-DYQGNki_.css` - Stylesheet compilado (131 KB)

### Limpeza de Versões Antigas
Todos os assets obsoletos foram removidos:
- ~~`index-XVUpy9qN.js`~~ (removido)
- ~~`index-84OWl-ff.css`~~ (removido)
- ~~`index-B3Qi16CO.js`~~ (removido)

## 🚀 Benefícios

| Antes | Depois |
|-------|--------|
| Múltiplos index.html | Um único arquivo fonte |
| 5+ versões de assets | 1 versão atual |
| Referências inconsistentes | Caminhos centralizados |
| Processo manual de cópia | Automático via plugin |
| Confusão sobre qual arquivo editar | Clareza total: edit `/client/index.html` |

## ⚠️ Notas Importantes

1. **Nunca edite `/index.html` diretamente** - será sobrescrito no próximo build
2. **Sempre edite `/client/index.html`** para mudanças no HTML
3. **Assets compilados** são gerados automaticamente, não edite manualmente
4. **O plugin Vite** garante sincronização automática entre `/client` e raiz

## 📚 Referência Rápida

| Tarefa | Comando | Arquivo |
|--------|---------|---------|
| Editar HTML | - | `/client/index.html` |
| Editar React | - | `/client/src/**/*.tsx` |
| Ver produção | npm run preview | `/index.html` |
| Fazer deploy | git push | Automático via GitHub Pages |

## 🎉 Resultado Final

✅ Estrutura limpa e centralizada
✅ Sem duplicatas de código
✅ Build automatizado e consistente
✅ Fácil manutenção e compreensão
✅ GitHub Pages funcionando perfeitamente
