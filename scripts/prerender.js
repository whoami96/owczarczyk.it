// Renders <App /> to static HTML and injects it into dist/index.html, so content is visible before JS loads.
import { readFile, rm, writeFile } from 'node:fs/promises'

const dist = new URL('../dist/', import.meta.url)
const ssrDist = new URL('../dist-ssr/', import.meta.url)

const { render } = await import(new URL('entry-server.js', ssrDist))
const indexUrl = new URL('index.html', dist)
const template = await readFile(indexUrl, 'utf-8')

const placeholder = '<div id="root"></div>'
if (!template.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in dist/index.html`)
}

await writeFile(indexUrl, template.replace(placeholder, `<div id="root">${render()}</div>`))
await rm(ssrDist, { recursive: true, force: true })
console.log('prerender: dist/index.html updated')
