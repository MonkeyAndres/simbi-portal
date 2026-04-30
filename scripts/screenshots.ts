/**
 * Screenshot the whole portal (4 pages × 2 viewports × 2 languages = 16 PNGs).
 *
 * Requires the preview server to be running locally:
 *   npm run preview &
 *
 * Then:
 *   npm run screenshots
 *
 * Output goes to ./screenshots/<slug>-<viewport>-<lang>.png
 */
import { chromium } from 'playwright'
import { mkdir, stat } from 'node:fs/promises'
import { resolve } from 'node:path'

const BASE = process.env.BASE_URL || 'http://localhost:4173'

const PAGES = [
  { slug: 'index', path: '/' },
  { slug: 'about', path: '/about.html' },
  { slug: 'business', path: '/business.html' },
  { slug: 'faq', path: '/faq.html' },
] as const

const VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
] as const

const LANGS = ['es', 'en'] as const

const OUT = resolve(process.cwd(), 'screenshots')

async function main(): Promise<void> {
  await mkdir(OUT, { recursive: true })

  console.log(`📸 Capturing ${BASE} → ${OUT}`)
  console.log(`   ${PAGES.length} pages × ${VIEWPORTS.length} viewports × ${LANGS.length} languages = ${PAGES.length * VIEWPORTS.length * LANGS.length} files`)
  console.log()

  const browser = await chromium.launch()

  for (const vp of VIEWPORTS) {
    for (const lang of LANGS) {
      const ctx = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 2,
        colorScheme: 'light',
      })
      // Pre-set language so the page loads in that language without flicker.
      await ctx.addInitScript((l: string) => {
        try { localStorage.setItem('simbi-lang', l) } catch {}
      }, lang)

      const page = await ctx.newPage()

      for (const p of PAGES) {
        const url = BASE + p.path
        await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 })
        // Tiny pause to let any post-load layout settle (font swap, etc).
        await page.waitForTimeout(300)
        const file = `${OUT}/${p.slug}-${vp.name}-${lang}.png`
        await page.screenshot({ path: file, fullPage: true })
        const { size } = await stat(file)
        console.log(`✓ ${p.slug.padEnd(10)} ${vp.name.padEnd(8)} ${lang.toUpperCase()}  ${file.replace(process.cwd() + '/', '')}  (${(size / 1024).toFixed(0)} KB)`)
      }

      await ctx.close()
    }
  }

  await browser.close()
  console.log()
  console.log('✓ Done.')
}

main().catch((err) => {
  console.error('❌ Screenshot run failed:')
  console.error(err)
  process.exit(1)
})
