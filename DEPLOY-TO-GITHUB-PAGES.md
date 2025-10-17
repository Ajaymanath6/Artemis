# Deploy to GitHub Pages - Quick Reference

## Commands to Deploy Changes

Whenever you make changes to your Angular app, follow these steps:

### Step 1: Commit Your Source Code Changes
```bash
cd /home/mis/AI/Artemis\(AJAY\ version\)/angular-flowbite-project
git add .
git commit -m "Your commit message describing the changes"
```

### Step 2: Build the Project
```bash
npm run build
```

### Step 3: Commit and Push the Built Files
```bash
git add docs/
git commit -m "Rebuild for GitHub Pages deployment"
git push origin main
```

---

## All-in-One Command Sequence

Copy and paste this entire block to deploy everything at once:

```bash
cd /home/mis/AI/Artemis\(AJAY\ version\)/angular-flowbite-project && \
git add . && \
git commit -m "Update source code" && \
npm run build && \
git add docs/ && \
git commit -m "Rebuild for GitHub Pages" && \
git push origin main
```

---

## What Each Step Does

1. **Commit source code** - Saves your `.ts`, `.html`, `.css` files to git
2. **npm run build** - Compiles your Angular app into the `docs/` folder
3. **Commit & push docs/** - Updates the live GitHub Pages site

## Important Notes

- GitHub Pages serves from the `docs/` folder
- Changes won't appear on your live site until you rebuild and push `docs/`
- Wait 1-2 minutes after pushing for changes to appear on the live site
- Your live site URL: https://ajaymanath6.github.io/Artemis/

