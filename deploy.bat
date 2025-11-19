git init
git branch -m main
git remote remove origin >nul 2>&1
git remote add origin https://github.com/matheuslcosentino/game-developer-portfolio.git
git add -A
git commit -m "Deploy automatico"
git push -u origin main --force

