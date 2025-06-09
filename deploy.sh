#!/bin/bash

# Build the project
npm run build

# Add all files to git
git add .

# Commit changes
read -p "Enter commit message: " commit_message
git commit -m "$commit_message"

# Push to main branch
git push origin main

echo "Deployment initiated! Check GitHub Actions for progress."
echo "Your site will be available at: https://$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^/]*\)\/\([^.]*\).*/\1.github.io\/\2/')/" 