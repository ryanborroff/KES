// Chroma is a web app: run it in demo mode (mock API, no backend needed) and
// capture desktop and phone screenshots with Playwright.
//
// Env: CHROMA_DIR (the ChromaStudio repo), OUT (output folder), PORT and
// CHROMIUM_PATH (a Chromium binary to use instead of Playwright's own; optional).
// Playwright is loaded from the ChromaStudio repo, which already depends on it.
import { spawn } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'

const CHROMA_DIR = process.env.CHROMA_DIR
const OUT = process.env.OUT
if (!CHROMA_DIR || !OUT) throw new Error('Set CHROMA_DIR and OUT (run this through run.sh).')
const PORT = process.env.PORT || '5301'
const BASE = `http://localhost:${PORT}`

const { chromium } = createRequire(path.join(CHROMA_DIR, 'package.json'))('@playwright/test')

const DESKTOP = [
  ['01-feed', '/feed'],
  ['02-explore', '/explore'],
  ['03-video', '/videos/101'],
  ['04-profile', '/profile/maya_osei'],
  ['05-pricing', '/pricing'],
]
const PHONE = [
  ['06-phone-feed', '/feed'],
  ['07-phone-video', '/videos/101'],
]

async function waitForServer(url, ms = 60000) {
  const end = Date.now() + ms
  while (Date.now() < end) {
    try {
      if ((await fetch(url)).ok) return
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 500))
  }
  throw new Error(`Chroma dev server did not start at ${url}`)
}

async function shoot(browser, shots, context) {
  const ctx = await browser.newContext(context)
  const page = await ctx.newPage()
  for (const [name, route] of shots) {
    await page.goto(BASE + route, { waitUntil: 'networkidle' })
    // Let images decode and entrance animations settle.
    await page.waitForTimeout(1500)
    await page.screenshot({ path: path.join(OUT, `${name}.png`) })
    console.log(`  ${name}.png`)
  }
  await ctx.close()
}

mkdirSync(OUT, { recursive: true })
const server = spawn('npx', ['vite', '--config', 'vite.config.ts', '--port', PORT, '--strictPort'], {
  cwd: path.join(CHROMA_DIR, 'artifacts', 'chroma'),
  env: { ...process.env, PORT, BASE_PATH: '/', VITE_DEMO_MODE: 'true' },
  stdio: ['ignore', 'ignore', 'inherit'],
  detached: true,
})

let browser
try {
  await waitForServer(BASE)
  browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined })
  // 1440x900 at 2x = 2880x1800, the Mac App Store / Retina desktop size.
  await shoot(browser, DESKTOP, { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2, colorScheme: 'dark' })
  // iPhone 16 Pro Max at 3x = 1320x2868.
  await shoot(browser, PHONE, {
    viewport: { width: 440, height: 956 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    colorScheme: 'dark',
  })
} finally {
  await browser?.close()
  process.kill(-server.pid)
}
