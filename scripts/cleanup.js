#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../assets');

// Lê todos os arquivos na pasta assets
const files = fs.readdirSync(assetsDir);

// Separa arquivos por tipo (CSS e JS)
const cssFiles = files.filter(f => f.match(/^index-[a-zA-Z0-9]+\.css$/));
const jsFiles = files.filter(f => f.match(/^index-[a-zA-Z0-9]+\.js$/));

// Mantém apenas o arquivo mais recente de cada tipo
function keepLatestOnly(fileArray) {
  if (fileArray.length <= 1) return;
  
  // Ordena por data de modificação (mais recente primeiro)
  fileArray.sort((a, b) => {
    const statA = fs.statSync(path.join(assetsDir, a));
    const statB = fs.statSync(path.join(assetsDir, b));
    return statB.mtimeMs - statA.mtimeMs;
  });

  // Remove todos exceto o primeiro (mais recente)
  for (let i = 1; i < fileArray.length; i++) {
    const filePath = path.join(assetsDir, fileArray[i]);
    try {
      fs.unlinkSync(filePath);
      console.log(`✓ Removido: ${fileArray[i]}`);
    } catch (err) {
      console.error(`✗ Erro ao remover ${fileArray[i]}:`, err.message);
    }
  }
}

console.log('Limpando arquivos antigos...\n');

if (cssFiles.length > 0) {
  console.log(`CSS files encontrados: ${cssFiles.length}`);
  keepLatestOnly(cssFiles);
}

if (jsFiles.length > 0) {
  console.log(`JS files encontrados: ${jsFiles.length}`);
  keepLatestOnly(jsFiles);
}

console.log('\n✓ Limpeza concluída!');
