#!/usr/bin/env bash
#
# Force-push the built HTML to the `gh-pages` branch.
#

set -e

DEPLOY_DIR=~/project/gh-pages

# trust GitHub server keys
mkdir ~/.ssh/
ssh-keyscan github.com >> ~/.ssh/known_hosts

# stage generated HTML for GitHub Pages
git clone --quiet --branch=gh-pages $CIRCLE_REPOSITORY_URL $DEPLOY_DIR
rsync --archive --recursive --verbose --remove-source-files $HOME/project/_site/* $DEPLOY_DIR

# git client setup
cd $DEPLOY_DIR
git config --global push.default simple
git config --global user.email $(git --no-pager show --no-patch --format='%ae' HEAD)
git config --global user.name $CIRCLE_USERNAME

# force push to GitHub Pages
git add --force .
git commit --message="Deploy build $CIRCLE_BUILD_NUM [ci skip]" || true
git push --force origin gh-pages
