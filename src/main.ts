type Lang = 'en' | 'es'

const translations: Record<Lang, Record<string, string>> = {
  en: {
    'title': 'Your information,<br>finally alive.',
    'subtitle': 'Talk to your world, not your apps. Simbi is a living memory that runs on your machine, learns what matters, and helps you find, understand, and act on your information.',
    'lead': "Your files don't need folders. They need memory.",
    'story.pill': 'The story →',

    'what.label': 'A living memory',
    'what.p1': 'Drop a folder, a download, a screenshot. Simbi knows it exists. Ask anything about your stuff and get an answer with sources you can open.',
    'what.p2': 'Simbi lives with your information so you can stop managing it. No more being archivist, librarian, and secretary of your own machine.',
    'what.p3': 'Local-first. No cloud. No accounts. No tracking. Everything stays on your device, where it belongs.',

    'does.label': 'What it does',
    'does.drop.title': '📂 Drop anything',
    'does.drop.desc': 'Folders, downloads, screenshots, notes. Simbi sees it and remembers it exists. No tagging, no foldering, no upkeep.',
    'does.ask.title': '🔎 Ask your world',
    'does.ask.desc': '"Where\'s that contract from December?" "What did Marta send me about the trip?" Simbi answers, and shows you the sources.',
    'does.learns.title': '🧠 Learns what matters',
    'does.learns.desc': 'Over time it gets sharper. The things you reach for surface faster. The noise fades.',
    'does.controls.title': '🪪 You stay in charge',
    'does.controls.desc': 'Forget this. Ignore that. Show me where you got that from. The controls are visible. Simbi works for you, not the other way round.',
    'does.local.title': '🔒 Lives on your machine',
    'does.local.desc': 'No cloud. No accounts. No tracking. Your information never leaves your device. Take it anywhere.',
    'does.open.title': '🌱 Open source',
    'does.open.desc': "Read the code. Run it yourself. Fork it. It's actually yours, not just rented under nice words.",

    'soon.label': 'On the horizon',
    'soon.intro': "Simbi is small today and growing. The shape of what's coming:",
    'soon.mobile': '📱 Mobile — your memory in your pocket',
    'soon.voice': '🗣️ Voice — ask out loud, hands free',
    'soon.anticipate': '🔮 Anticipation — Simbi brings things up before you ask',
    'soon.spaces': '🏠 Shared spaces — a household memory, then a family one',

    'values.label': 'What it stands for',
    'values.body': 'Symbiosis, not servitude.<br>Ownership, not subscription.<br>Growth, not dependency.',

    'cta': 'Get in touch',
    'cta.note': 'Early days. Small private circle.',
    'cta.support': 'Want to support how this gets built? Get in touch.',

    'footer.motto': 'Your world stays yours.',
  },
  es: {
    'title': 'Tu información,<br>finalmente viva.',
    'subtitle': 'Habla con tu mundo, no con tus apps. Simbi es una memoria viva que corre en tu máquina, aprende lo que importa y te ayuda a encontrar, entender y actuar sobre tu información.',
    'lead': 'Tus archivos no necesitan carpetas. Necesitan memoria.',
    'story.pill': 'La historia →',

    'what.label': 'Una memoria viva',
    'what.p1': 'Suelta una carpeta, una descarga, una captura. Simbi sabe que existe. Pregunta cualquier cosa sobre lo tuyo y recibe una respuesta con fuentes que puedes abrir.',
    'what.p2': 'Simbi vive con tu información para que dejes de gestionarla. Se acabó hacer de archivero, bibliotecario y secretario de tu propia máquina.',
    'what.p3': 'Local primero. Sin nube. Sin cuentas. Sin rastreo. Todo se queda en tu dispositivo, que es donde debe estar.',

    'does.label': 'Qué hace',
    'does.drop.title': '📂 Suelta lo que sea',
    'does.drop.desc': 'Carpetas, descargas, capturas, notas. Simbi lo ve y recuerda que existe. Sin etiquetar, sin ordenar, sin mantenimiento.',
    'does.ask.title': '🔎 Pregúntale a tu mundo',
    'does.ask.desc': '«¿Dónde está aquel contrato de diciembre?» «¿Qué me mandó Marta sobre el viaje?» Simbi responde, y te enseña las fuentes.',
    'does.learns.title': '🧠 Aprende lo que importa',
    'does.learns.desc': 'Con el tiempo afina. Lo que usas a menudo aparece antes. El ruido se aparta.',
    'does.controls.title': '🪪 Mando tú',
    'does.controls.desc': 'Olvida esto. Ignora aquello. Enséñame de dónde sacaste eso. Los controles están a la vista. Simbi trabaja para ti, no al revés.',
    'does.local.title': '🔒 Vive en tu máquina',
    'does.local.desc': 'Sin nube. Sin cuentas. Sin rastreo. Tu información nunca sale de tu dispositivo. Llévatela donde quieras.',
    'does.open.title': '🌱 Código abierto',
    'does.open.desc': 'Lee el código. Ejecútalo tú mismo. Bifúrcalo. Es tuyo de verdad, no alquilado bajo palabras bonitas.',

    'soon.label': 'En el horizonte',
    'soon.intro': 'Simbi hoy es pequeño y va creciendo. La forma de lo que viene:',
    'soon.mobile': '📱 Móvil — tu memoria en el bolsillo',
    'soon.voice': '🗣️ Voz — pregunta en alto, sin manos',
    'soon.anticipate': '🔮 Anticipación — Simbi trae cosas antes de que las pidas',
    'soon.spaces': '🏠 Espacios compartidos — memoria de casa, después de familia',

    'values.label': 'Qué defiende',
    'values.body': 'Simbiosis, no servidumbre.<br>Propiedad, no suscripción.<br>Crecimiento, no dependencia.',

    'cta': 'Escríbeme',
    'cta.note': 'Días tempranos. Círculo privado y pequeño.',
    'cta.support': '¿Quieres apoyar cómo se construye esto? Escríbeme.',

    'footer.motto': 'Tu mundo sigue siendo tuyo.',
  }
}

let currentLang: Lang = 'en'

function setLang(lang: Lang) {
  currentLang = lang
  localStorage.setItem('simbi-lang', lang)
  document.documentElement.lang = lang

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')!
    const text = translations[lang][key]
    if (text) el.innerHTML = text
  })

  // Update toggle buttons
  const enBtn = document.getElementById('lang-en')!
  const esBtn = document.getElementById('lang-es')!
  enBtn.className = `lang-btn text-xs font-medium px-2 py-0.5 rounded ${lang === 'en' ? 'text-stone-900 dark:text-neutral-50 bg-stone-300 dark:bg-neutral-700' : 'text-stone-400 dark:text-neutral-500'}`
  esBtn.className = `lang-btn text-xs font-medium px-2 py-0.5 rounded ${lang === 'es' ? 'text-stone-900 dark:text-neutral-50 bg-stone-300 dark:bg-neutral-700' : 'text-stone-400 dark:text-neutral-500'}`
}

// Detect language
const saved = localStorage.getItem('simbi-lang') as Lang | null
const browser = navigator.language.slice(0, 2).toLowerCase()
currentLang = saved ?? (browser === 'es' ? 'es' : 'en')
setLang(currentLang)

document.getElementById('lang-en')!.addEventListener('click', () => setLang('en'))
document.getElementById('lang-es')!.addEventListener('click', () => setLang('es'))

// `currentLang` is intentionally exported on window for easy debugging in dev.
;(window as unknown as { simbiLang: Lang }).simbiLang = currentLang
