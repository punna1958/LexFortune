/**
 * GitHub Pages SPA fallback: copy index.html so all routes return 200.
 * - 404.html: served when path has no file (unknown routes)
 * - about/index.html, services/index.html, contact/index.html: served for /about, /services, /contact → 200
 * Keeps clean URLs and BrowserRouter; no HashRouter needed.
 */
import { copyFileSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')
const indexPath = join(dist, 'index.html')

const routes = ['404', 'about', 'services', 'contact']

for (const route of routes) {
  if (route === '404') {
    copyFileSync(indexPath, join(dist, '404.html'))
    console.log('  dist/404.html')
  } else {
    const dir = join(dist, route)
    mkdirSync(dir, { recursive: true })
    copyFileSync(indexPath, join(dir, 'index.html'))
    console.log('  dist/' + route + '/index.html')
  }
}

console.log('GitHub Pages SPA: index.html copied to 404.html and to about/, services/, contact/ (HTTP 200 for all routes).')
