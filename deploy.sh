#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'dantecortes.dev' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://danteCortes.github.io
# git push -f git@github.com:danteCortes/danteCortes.github.io.git main

# if you are deploying to https://danteCortes.github.io/portfolio
git push -f git@github.com:danteCortes/portfolio.git main:gh-pages

cd -