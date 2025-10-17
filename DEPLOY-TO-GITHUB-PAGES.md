# Deploy to GitHub Pages - Simple Guide

## 🎯 TWO EASY OPTIONS

### **Option 1: Use Normal Git Commands** (AUTOMATIC BUILD)

Just use regular git commands - **the build happens automatically!**

```bash
cd /home/mis/AI/Artemis\(AJAY\ version\)/angular-flowbite-project
git add .
git commit -m "Your changes"
git push
```

That's it! The pre-push hook automatically builds your project before pushing. ✨

---

### **Option 2: One-Command Deploy Script**

Run this single command to do everything:

```bash
cd /home/mis/AI/Artemis\(AJAY\ version\)/angular-flowbite-project && ./deploy.sh
```

This will:
1. Add all changes
2. Commit them
3. Build the project
4. Commit the build
5. Push everything to GitHub

---

## 🤔 Which Option to Use?

- **Option 1** (git push): Best for regular development workflow
- **Option 2** (deploy.sh): Best when you want one command to do everything

---

## ✅ What's Set Up

- ✅ **Pre-push hook**: Automatically builds before every `git push`
- ✅ **Deploy script**: One command to commit, build, and push
- ✅ **No manual building**: Never worry about `npm run build` again!

---

## 🌐 Your Live Site

**URL:** https://ajaymanath6.github.io/Artemis/

**Tip:** Changes appear in 1-2 minutes after pushing

---

## 🚫 Old Method (Not Needed Anymore!)

~~You DON'T need to do this anymore:~~
```bash
# ❌ This is automated now!
npm run build
git add docs/
git commit -m "Rebuild"
```

Just use `git push` and it happens automatically! 🎉
