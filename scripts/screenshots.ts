/**
 * Screenshot the whole portal (5 pages × 5 viewports × 2 languages = 50 PNGs).
 *
 * Requires the preview server to be running locally:
 *   npm run preview &
 *
 * Then:
 *   npm run screenshots                                   # everything
 *   npm run screenshots -- --viewport iphone-se           # one viewport, both langs, all pages
 *   npm run screenshots -- --page index                   # one page, all viewports, all langs
 *   npm run screenshots -- --viewport desktop --page colabora --lang es
 *   npm run screenshots -- --header-only                  # only the top 200px of each page
 *
 * Output goes to ./screenshots/<slug>-<viewport>-<lang>.png
 * (or ./screenshots/<slug>-<viewport>-<lang>-header.png when --header-only)
 */
import { chromium } from 'playwright'
import { mkdir, stat } from 'node:fs/promises'
import { resolve } from 'node:path'

const BASE = process.env.BASE_URL || 'http://localhost:4173'

const ALL_PAGES = [
  { slug: 'index', path: '/' },
  { slug: 'about', path: '/about.html' },
  { slug: 'business', path: '/business.html' },
  { slug: 'faq', path: '/faq.html' },
  { slug: 'colabora', path: '/colabora.html' },
] as const

const ALL_VIEWPORTS = [
  { name: 'desktop-wide', width: 1920, height: 1080 },
  { name: 'desktop',      width: 1280, height: 900  },
  { name: 'tablet',       width: 768,  height: 1024 },
  { name: 'iphone-15',    width: 393,  height: 852  },
  { name: 'iphone-se',    width: 375,  height: 667  },
] as const

const ALL_LANGS = ['es', 'en'] as const

// --- argv parsing ---
const args = process.argv.slice(2)
const flag = (name: string) => {
  const i = args.indexOf(name)
  return i >= 0 ? args[i + 1] : undefined
}
const has = (name: string) => args.includes(name)

const vpFilter   = flag('--viewport')
const pageFilter = flag('--page')
const langFilter = flag('--lang')
const headerOnly = has('--header-only')

const PAGES     = pageFilter ? ALL_PAGES.filter(p => p.slug === pageFilter)         : ALL_PAGES
const VIEWPORTS = vpFilter   ? ALL_VIEWPORTS.filter(v => v.name === vpFilter)        : ALL_VIEWPORTS
const LANGS     = langFilter ? ALL_LANGS.filter(l => l === langFilter as typeof ALL_LANGS[number]) : ALL_LANGS

if (PAGES.length === 0)     { console.error(`unknown --page: ${pageFilter}. valid: ${ALL_PAGES.map(p=>p.slug).join(', ')}`); process.exit(1) }
if (VIEWPORTS.length === 0) { console.error(`unknown --viewport: ${vpFilter}. valid: ${ALL_VIEWPORTS.map(v=>v.name).join(', ')}`); process.exit(1) }
if (LANGS.length === 0)     { console.error(`unknown --lang: ${langFilter}. valid: ${ALL_LANGS.join(', ')}`); process.exit(1) }

const OUT = resolve(process.cwd(), 'screenshots')

async function main(): Promise<void> {
  await mkdir(OUT, { recursive: true })

  console.log(`📸 Capturing ${BASE} → ${OUT}`)
  console.log(`   ${PAGES.length} pages × ${VIEWPORTS.length} viewports × ${LANGS.length} languages = ${PAGES.length * VIEWPORTS.length * LANGS.length} files${headerOnly ? ' (header-only)' : ''}`)
  console.log()

  // Launch a fresh browser per viewport to keep memory bounded
  for (const vp of VIEWPORTS) {
    const browser = await chromium.launch()
    for (const lang of LANGS) {
      const ctx = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 1,
        colorScheme: 'light',
      })
      await ctx.addInitScript((l: string) => {
        try { localStorage.setItem('simbi-lang', l) } catch {}
      }, lang)

      for (const p of PAGES) {
        const page = await ctx.newPage()
        page.setDefaultTimeout(60000)
        const url = BASE + p.path
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
        await page.waitForTimeout(200)
        const suffix = headerOnly ? '-header' : ''
        const file = `${OUT}/${p.slug}-${vp.name}-${lang}${suffix}.png`
        if (headerOnly) {
          await page.screenshot({ path: file, clip: { x: 0, y: 0, width: vp.width, height: 200 }, timeout: 60000 })
        } else {
          await page.screenshot({ path: file, fullPage: true, timeout: 60000 })
        }
        await page.close()
        const { size } = await stat(file)
        console.log(`✓ ${p.slug.padEnd(10)} ${vp.name.padEnd(12)} ${lang.toUpperCase()}  ${file.replace(process.cwd() + '/', '')}  (${(size / 1024).toFixed(0)} KB)`)
      }

      await ctx.close()
    }
    await browser.close()
  }
  console.log()
  console.log('✓ Done.')
}

main().catch((err) => {
  console.error('❌ Screenshot run failed:')
  console.error(err)
  process.exit(1)
})
