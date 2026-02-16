# SEO & Crawlability Checklist – Lexfortune

## 1. Per-route meta (implemented)

Each route has unique tags via **react-helmet-async** in `src/components/SEO.jsx`:

| Route    | Title | Canonical | OG / Twitter |
|----------|--------|-----------|--------------|
| `/`      | ✅ | ✅ `https://lexfortune.in/` | ✅ |
| `/about` | ✅ | ✅ `https://lexfortune.in/about` | ✅ |
| `/services` | ✅ | ✅ `https://lexfortune.in/services` | ✅ |
| `/contact` | ✅ | ✅ `https://lexfortune.in/contact` | ✅ |

**Example head for `/about`:**
```html
<title>About Us | Lexfortune Advisory Services - Ghaziabad</title>
<meta name="description" content="Your trusted legal and financial partners in Ghaziabad. Senior UP Police investigation officers, CAs and Advocates. Criminal lawyer, bail help, GST & ITR expertise." />
<link rel="canonical" href="https://lexfortune.in/about" />
<meta property="og:url" content="https://lexfortune.in/about" />
<meta property="og:title" content="About Us | Lexfortune Advisory Services - Ghaziabad" />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://lexfortune.in/lexfortunelogo.jpeg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
```

**Example head for `/services`:**
```html
<title>Our Services | Legal & Tax Advisory | Lexfortune - Ghaziabad</title>
<meta name="description" content="Legal: Criminal lawyer, bail, family lawyer, civil & litigation. Financial: GST filing, ITR consultant, tax consultant, compliances. Ghaziabad & UP." />
<link rel="canonical" href="https://lexfortune.in/services" />
<!-- + same OG/Twitter pattern -->
```

**Example head for `/contact`:**
```html
<title>Contact Us | Lexfortune Advisory Services - Ghaziabad</title>
<meta name="description" content="Contact Lexfortune for legal and financial consultation. Ghaziabad office: Jaipuria Sunrise Plaza, Ahinsa Khand 1. Call or visit for bail, GST, ITR, family law." />
<link rel="canonical" href="https://lexfortune.in/contact" />
<!-- + same OG/Twitter pattern -->
```

---

## 2. Internal linking (implemented)

- **Header & footer:** All main pages linked via React Router `<Link>` (renders as `<a href="/...">`).
- **Contextual links:**
  - **Home:** Links to `/services`, `/contact`, `/services#legal`, `/services#financial`.
  - **About:** “legal and financial advisory” → `/services`, “Explore our services” → `/services`, “contact us” → `/contact`.
  - **Services:** “Learn about our team” → `/about`, “Get in touch” → `/contact`.
  - **Contact:** “View our legal and tax services” → `/services`.

---

## 3. SPA SEO and indexing

- **Dynamic meta:** `react-helmet-async` updates `<title>`, meta description, canonical, and OG/Twitter per route when JS runs.
- **Crawlers:** Googlebot runs JS; per-route meta is applied after load. For hosts that don’t run JS or to speed indexing, prerendering or SSR is recommended (see below).
- **404 fallback:** `postbuild` copies `dist/index.html` → `dist/404.html` so GitHub Pages serves the SPA for unknown paths (e.g. deep links). Requested URL is preserved; React Router shows the correct page.

---

## 4. Sitemap

- **Location:** `public/sitemap.xml` → `https://lexfortune.in/sitemap.xml`.
- **URLs:** `/`, `/about`, `/services`, `/contact`.
- **Fields:** `lastmod`, `changefreq`, `priority` set.
- **Discovery:** Referenced in `robots.txt` and in `index.html` via `<link rel="sitemap" href="...">`.

---

## 5. Accessibility & semantics

- One `<h1>` per page (Home, About, Services, Contact).
- `<main id="main-content">`, skip link, `<nav>`, `<section>`, `<article>`, `<address>` where appropriate.
- Form and status messages use `role="status"` / `role="alert"` and `aria-busy` where needed.

---

## 6. Performance & crawl optimization

- **JS:** Vite production build is minified and split.
- **Images:** `loading="lazy"` and dimensions on About page image.
- **Fonts:** `preconnect` for Google Fonts.
- **Blocking:** No large blocking scripts in critical path.

---

## 7. Crawlability checklist

| Item | Status |
|------|--------|
| Unique `<title>` per route | ✅ Helmet |
| Unique meta description per route | ✅ Helmet |
| Canonical per route | ✅ Helmet |
| Open Graph (url, title, description, image) per route | ✅ Helmet |
| One `<h1>` per page | ✅ |
| Main pages in header/footer with `<a href="...">` | ✅ Link → `<a>` |
| Contextual internal links | ✅ |
| Sitemap includes /, /about, /services, /contact | ✅ |
| robots.txt allows crawl + Sitemap URL | ✅ |
| Sitemap link in HTML | ✅ |
| 404 → SPA (dist/404.html) | ✅ postbuild |
| LegalService schema on homepage | ✅ index.html |
| Target keywords in meta (legal advisor, criminal lawyer, bail, GST, ITR, family lawyer, tax consultant) | ✅ |

---

## 8. Technical SEO warnings / recommendations

1. **SPA and inner-page indexing**  
   Googlebot runs JavaScript, so inner routes can be indexed with current setup. If `/about`, `/services`, or `/contact` still don’t appear:
   - Request indexing in Google Search Console for each URL.
   - Consider **prerendering** (e.g. `vite-plugin-prerender` or a prerender service) so each route has static HTML.
   - Or move to a host with SPA fallback (e.g. Netlify, Vercel) so every path serves the same shell and JS updates meta and content.

2. **GitHub Pages and 404**  
   For a direct request to e.g. `https://lexfortune.in/about`, GitHub Pages looks for `about/index.html`. If it’s missing, it returns 404 and then serves `404.html`. We copy `index.html` → `404.html`, so the **body** is the SPA and the URL stays `/about`; some crawlers may still see a 404 status. For guaranteed 200 and fast indexing, prerender and output `about/index.html`, `services/index.html`, `contact/index.html`.

3. **Prerender (optional)**  
   To generate static HTML per route after build:
   - Install and use a prerender plugin (e.g. `vite-plugin-prerender`) with routes `['/', '/about', '/services', '/contact']`, or
   - Use a prerender service (e.g. Prerender.io) in front of the site.

4. **Search Console**  
   - Add property `https://lexfortune.in`.
   - Submit `https://lexfortune.in/sitemap.xml`.
   - Use “URL inspection” and “Request indexing” for `/about`, `/services`, `/contact` if they’re still not indexed.

5. **robots**  
   `index.html` has `<meta name="robots" content="index, follow">`. No inner route should set `noindex` unless intended.

---

## 9. Target keywords (in meta and copy)

- legal advisor Ghaziabad  
- criminal lawyer  
- bail help  
- GST filing  
- ITR consultant  
- family lawyer  
- tax consultant (Ghaziabad)

These are included in `index.html` keywords and in per-route meta descriptions in `SEO.jsx`.
