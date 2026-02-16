import { copyFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'))
console.log('Copied dist/index.html to dist/404.html for GitHub Pages SPA fallback.')
