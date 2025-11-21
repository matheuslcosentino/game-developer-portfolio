git init
git branch -m main
git remote remove origin
git remote add origin https://github.com/matheuslcosentino/matheuslcosentino.github.io.git
git add -A
git commit -m "Deploy automatico"
git push -u origin main --force

