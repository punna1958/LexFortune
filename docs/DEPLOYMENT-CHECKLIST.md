# GitHub Pages SPA – Deployment checklist

Use this checklist so all routes return **HTTP 200** and stay indexable (BrowserRouter, no hash routing).

---

## 1. Build and postbuild

- Run **`npm run build`** (Vite builds into `dist/`).
- **Postbuild** runs automatically and:
  - Copies `dist/index.html` → **`dist/404.html`** (root).
  - Copies `dist/index.html` → **`dist/about/index.html`**.
  - Copies `dist/index.html` → **`dist/services/index.html`**.
  - Copies `dist/index.html` → **`dist/contact/index.html`**.

Result: GitHub Pages finds a file for `/`, `/about`, `/services`, `/contact` and returns **200** with the SPA. Unknown paths get **404** and the server serves `404.html` (same SPA), so the app still loads.

---

## 2. Folder structure after build (root = `dist/`)

```
dist/
├── index.html          ← /
├── 404.html            ← fallback for unknown paths
├── about/
│   └── index.html      ← /about → 200
├── services/
│   └── index.html      ← /services → 200
├── contact/
│   └── index.html      ← /contact → 200
├── assets/
│   ├── index-*.css
│   └── index-*.js
├── sitemap.xml
├── robots.txt
├── lexfortunelogo.jpeg
└── ... (other public assets)
```

All of the above live at the **root** of what gets deployed (e.g. `gh-pages -d dist` pushes the *contents* of `dist/` as the site root). So `404.html`, `sitemap.xml`, and `robots.txt` are at the site root, not in subfolders.

---

## 3. Deploy to GitHub Pages

- **`npm run deploy`** (or `npx gh-pages -d dist`) pushes `dist/` to the `gh-pages` branch.
- In the repo: **Settings → Pages → Source**: branch **gh-pages** / folder **/ (root)**.
- Custom domain (e.g. lexfortune.in): set in Pages settings and in DNS as instructed.

---

## 4. After deploy – verify

| Check | Expected |
|-------|----------|
| **https://yoursite.com/** | 200, homepage |
| **https://yoursite.com/about** | 200, About page |
| **https://yoursite.com/services** | 200, Services page |
| **https://yoursite.com/contact** | 200, Contact page |
| **https://yoursite.com/robots.txt** | 200, contents of `robots.txt` |
| **https://yoursite.com/sitemap.xml** | 200, contents of `sitemap.xml` |
| **https://yoursite.com/404.html** | 200 (file exists at root; used as 404 body for unknown paths) |

Use browser DevTools → Network: status **200** for the HTML document on each route (no 404 on the main document).

---

## 5. SEO and meta

- **react-helmet-async** runs in the client: each route updates `<title>`, meta description, canonical, and OG tags after load. Homepage meta in the initial `index.html` is overwritten by Helmet per route.
- **robots.txt** and **sitemap.xml** stay in `public/` so they are at the root of `dist/` and of the deployed site → remain accessible.
- **BrowserRouter** is used; no switch to HashRouter.

---

## 6. One-line checklist before each deploy

1. **`npm run build`** (postbuild runs automatically).
2. Confirm **`dist/404.html`** and **`dist/about/index.html`**, **`dist/services/index.html`**, **`dist/contact/index.html`** exist.
3. **`npm run deploy`**.
4. After deploy, open each URL above and confirm **200** and correct content.
5. In Google Search Console, (re)submit sitemap and use URL Inspection for `/about`, `/services`, `/contact` to request indexing if needed.

---

## 7. If inner routes still show 404 in Search Console

- Wait 24–48 hours after deploy and re-check URL Inspection.
- Ensure repository **Settings → Pages** is set to **gh-pages** branch, root.
- Confirm `dist/` contained `about/index.html`, `services/index.html`, `contact/index.html` at deploy time (postbuild ran after `vite build`).
- Do **not** switch to HashRouter; the current setup is correct for clean URLs and 200 responses on GitHub Pages.
