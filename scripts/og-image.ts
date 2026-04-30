/**
 * Generates Open Graph / Twitter card images for every page.
 *
 *   bun run scripts/og-image.ts
 *
 * Output: public/og/<slug>.png  (1200 × 630, PNG, ~50 KB each)
 *
 * Each card has the same identity (multicolour breathing dot + Simbi
 * wordmark + url) and a per-page tagline, in Spanish (English version
 * fits in the same layout if we ever want; today GitHub/WhatsApp pull
 * the og:image only once anyway).
 */
import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

type Card = {
  slug: string
  title: string
  tagline: string
}

const CARDS: Card[] = [
  {
    slug: 'index',
    title: 'Simbi',
    tagline: 'Una memoria viva para tu vida digital · A living memory for your digital life',
  },
  {
    slug: 'about',
    title: 'La historia',
    tagline: 'Por qué construyo Simbi · Why I build Simbi',
  },
  {
    slug: 'business',
    title: 'Plan de empresa',
    tagline: 'Cómo se sostiene Simbi · How Simbi sustains itself',
  },
  {
    slug: 'faq',
    title: 'Preguntas en cristiano',
    tagline: 'Para quien no quiere oír palabras raras',
  },
  {
    slug: 'colabora',
    title: 'Colabora',
    tagline: 'Lo que hace falta · What it takes',
  },
]

const html = (c: Card): string => `<!doctype html>
<html><head><meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700;800&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: radial-gradient(ellipse at 30% 20%, #fdf6e3 0%, #f5f5f4 50%, #e7e5e0 100%);
    color: #1c1917;
    padding: 80px 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .top {
    display: flex; align-items: center; gap: 22px;
  }
  .dot {
    width: 64px; height: 64px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #fcd34d 0%, #34d399 55%, #047857 100%);
    box-shadow: 0 0 50px rgba(52, 211, 153, 0.45), 0 0 24px rgba(252, 211, 77, 0.25);
  }
  .brand {
    font-size: 56px;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: #1c1917;
    line-height: 1;
  }
  .alive {
    margin-left: auto;
    display: inline-flex; align-items: center; gap: 10px;
    padding: 10px 18px;
    background: rgba(16, 185, 129, 0.12);
    border: 1.5px solid rgba(16, 185, 129, 0.4);
    border-radius: 999px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #047857;
  }
  .alive::before {
    content: ""; width: 12px; height: 12px; border-radius: 50%; background: #10b981;
  }
  .middle {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
  }
  .title {
    font-size: ${c.title.length > 18 ? 92 : 116}px;
    font-weight: 800;
    letter-spacing: -0.025em;
    line-height: 1.05;
    color: #1c1917;
    margin-bottom: 28px;
  }
  .tagline {
    font-size: 32px;
    font-weight: 500;
    line-height: 1.35;
    color: #57534e;
    max-width: 1020px;
  }
  .bottom {
    display: flex; justify-content: space-between; align-items: flex-end;
    font-size: 22px;
    color: #57534e;
    font-weight: 500;
    letter-spacing: 0.005em;
  }
  .url {
    color: #047857;
    font-weight: 700;
    font-size: 26px;
  }
  .meta {
    font-size: 18px;
    color: #a8a29e;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-weight: 600;
  }
</style></head>
<body>
  <div class="top">
    <div class="dot"></div>
    <div class="brand">Simbi</div>
    <div class="alive">vivo · alive</div>
  </div>
  <div class="middle">
    <div class="title">${c.title}</div>
    <div class="tagline">${c.tagline}</div>
  </div>
  <div class="bottom">
    <div class="url">simbi.monkeyandres.com</div>
    <div class="meta">Privacy-first AI memory · Tu memoria, tu casa</div>
  </div>
</body></html>`

const OUT = resolve(process.cwd(), 'public/og')

async function main(): Promise<void> {
  await mkdir(OUT, { recursive: true })
  const browser = await chromium.launch()
  const ctx = await browser.newContext({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  })

  for (const card of CARDS) {
    const page = await ctx.newPage()
    await page.setContent(html(card), { waitUntil: 'networkidle' })
    await page.waitForTimeout(300) // let the font swap settle
    const file = `${OUT}/${card.slug}.png`
    await page.screenshot({ path: file, fullPage: false, type: 'png' })
    await page.close()
    console.log(`✓ ${card.slug.padEnd(10)}  ${file.replace(process.cwd() + '/', '')}`)
  }

  await ctx.close()
  await browser.close()
  console.log()
  console.log('✓ Done. Commit public/og/ to ship the new cards.')
}

main().catch((err) => {
  console.error('❌ OG image generation failed:')
  console.error(err)
  process.exit(1)
})
