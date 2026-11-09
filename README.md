# BM Group International — Landing Page

A premium, modern contracting and real estate development landing page for BM Group International built with React 19, TypeScript, Vite, and Tailwind CSS.

## 🚀 GitHub Pages Deployment

This repository is pre-configured to deploy automatically to **GitHub Pages**.

### Method 1: Automatic Deployment with GitHub Actions (Recommended)

1. Push your repository to GitHub (`main` or `master` branch).
2. On GitHub, navigate to **Settings** > **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - Set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build the site and deploy it to `https://<your-username>.github.io/<your-repo-name>/`.

### Method 2: Manual Build & Deploy

You can build the production-ready static assets locally:

```bash
# Install dependencies
npm install

# Build static bundle to dist/
npm run build
```

The compiled files inside `dist/` use relative asset paths (`./assets/...`) and include `.nojekyll` and `404.html`, ensuring all images and styles resolve on any custom domain or GitHub Pages subpath.

---

## 🛠️ Local Development

```bash
# Start dev server
npm run dev

# Run unit tests
npm run test

# Typecheck and lint
npm run lint
```
