#!/bin/bash

# UniCourt Deployment Script for GitHub Pages
# Run this script to build and deploy your Angular app

echo "🚀 Building UniCourt for production..."

# Build the application with correct base href for GitHub Pages
npm run build --prod -- --base-href="/Artemis/"

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"

    # Move browser files to docs root (GitHub Pages expects files in docs/)
    if [ -d "docs/browser" ]; then
        echo "📁 Moving build files to docs root..."
        mv docs/browser/* docs/
        rmdir docs/browser
        echo "✅ Files moved successfully!"
    else
        echo "ℹ️ Files are already in the correct location."
    fi

    # Add docs folder to git
    echo "📦 Adding docs folder to git..."
    git add docs/

    # Commit the changes
    echo "💾 Committing production build..."
    git commit -m "🚀 Deploy production build $(date)"

    # Push to GitHub
    echo "⬆️ Pushing to GitHub..."
    git push

    echo ""
    echo "🎉 Deployment complete!"
    echo "📝 Next steps:"
    echo "1. Go to your GitHub repository: https://github.com/Ajaymanath6/Artemis"
    echo "2. Click on 'Settings' tab"
    echo "3. Scroll down to 'Pages' section"
    echo "4. Under 'Source', select 'Deploy from a branch'"
    echo "5. Under 'Branch', select 'main' and folder '/docs'"
    echo "6. Click 'Save'"
    echo ""
    echo "🌐 Your site will be live at: https://ajaymanath6.github.io/Artemis/"
    echo ""
    echo "⚡ Future deployments: Just run './deploy.sh'"

else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
