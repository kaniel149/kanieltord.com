// Injects the server-rendered App markup into dist/index.html so crawlers get full HTML.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distIndex = path.join(root, 'dist', 'index.html')
const ssrDir = path.join(root, 'dist-ssr')

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const html = fs.readFileSync(distIndex, 'utf8')
const marker = '<div id="root"></div>'
if (!html.includes(marker)) throw new Error('prerender: #root marker not found in dist/index.html')

fs.writeFileSync(distIndex, html.replace(marker, `<div id="root">${render()}</div>`))
fs.rmSync(ssrDir, { recursive: true, force: true })
console.log('prerender: dist/index.html written')
