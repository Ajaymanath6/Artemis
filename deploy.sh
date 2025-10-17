#!/bin/bash

# Auto-Deploy Script for GitHub Pages
# This script commits all changes, builds, and pushes everything

echo "🚀 Starting auto-deployment..."

# Navigate to project directory
cd "$(dirname "$0")"

# Check if there are any changes
if [[ -z $(git status -s) ]]; then
    echo "✅ No changes to deploy!"
    exit 0
fi

# Add all changes
echo "📦 Adding all changes..."
git add .

# Commit source code changes
echo "💾 Committing changes..."
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
git commit -m "Update: $TIMESTAMP"

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Add and commit the built files
    echo "📦 Committing build files..."
    git add docs/
    git commit -m "Rebuild for GitHub Pages: $TIMESTAMP"
    
    # Push to GitHub
    echo "⬆️ Pushing to GitHub..."
    git push origin main
    
    echo ""
    echo "🎉 Deployment complete!"
    echo "🌐 Your site will be live at: https://ajaymanath6.github.io/Artemis/"
    echo "⏱️ Changes appear in 1-2 minutes"
    echo ""
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
