type Lang = 'en' | 'es'

const translations: Record<Lang, Record<string, string>> = {
  en: {
    'title': 'Grow together.',
    'subtitle': 'A machine organism that learns from chatting with you and grows to help you in your life.',
    'manifesto': 'Symbiosis, not servitude.<br>Ownership, not subscription.<br>Growth, not dependency.',
    'what.label': 'What is Simbi?',
    'what.p1': 'A digital organism that lives on your machine. It learns who you are through conversation — your preferences, your people, your patterns.',
    'what.p2': 'It remembers. It grows. It gets better every day. And it belongs entirely to you.',
    'what.p3': 'No cloud. No accounts. No tracking. Everything lives on your device.',
    'does.label': 'What it does',
    'does.memory.title': '🧠 Persistent memory',
    'does.memory.desc': 'Remembers your preferences, your people, your patterns. Never starts from zero.',
    'does.briefing.title': '☀️ Morning briefing',
    'does.briefing.desc': 'Calendar, mail, news — a daily message from something that knows your life.',
    'does.journal.title': '📓 Living journal',
    'does.journal.desc': 'Talk about your day. It asks the right questions and grows the relationship.',
    'does.attention.title': '👁️ Attention filter',
    'does.attention.desc': 'Surfaces signal, kills noise. Only what needs YOUR attention.',
    'does.owned.title': '🔒 Self-hosted & yours',
    'does.owned.desc': 'Your machine, your data. No cloud. No vendor lock-in. Take it anywhere.',
    'does.evolves.title': '🌱 It evolves',
    'does.evolves.desc': 'Living code that adapts to you. It grows with you because it grows from you.',
    'soon.label': 'Coming soon',
    'soon.intro': 'Simbi is being born. A full digital companion that manages your life alongside you.',
    'soon.mobile': '📱 Mobile app — your organism in your pocket',
    'soon.voice': '🗣️ Voice — talk to Simbi out loud',
    'soon.anticipate': '🔮 Anticipatory intelligence — predicts what you need',
    'soon.insights': '💡 Insights — patterns in your thinking over time',
    'soon.full': '🌿 Full symbiosis — a digital companion for your whole life',
    'cta': 'Get in touch',
    'cta.note': 'Private beta. Limited spots.',
    'footer.motto': 'Good software is all you need.',
    'story.pill': 'The story →',
  },
  es: {
    'title': 'Crecer juntos.',
    'subtitle': 'Un organismo digital que aprende de tus conversaciones y crece para ayudarte en tu vida.',
    'manifesto': 'Simbiosis, no servidumbre.<br>Propiedad, no suscripción.<br>Crecimiento, no dependencia.',
    'what.label': '¿Qué es Simbi?',
    'what.p1': 'Un organismo digital que vive en tu máquina. Aprende quién eres a través de la conversación — tus preferencias, tu gente, tus patrones.',
    'what.p2': 'Recuerda. Crece. Mejora cada día. Y te pertenece completamente.',
    'what.p3': 'Sin nube. Sin cuentas. Sin rastreo. Todo vive en tu dispositivo.',
    'does.label': 'Qué hace',
    'does.memory.title': '🧠 Memoria persistente',
    'does.memory.desc': 'Recuerda tus preferencias, tu gente, tus patrones. Nunca empieza de cero.',
    'does.briefing.title': '☀️ Briefing matutino',
    'does.briefing.desc': 'Calendario, correo, noticias — un mensaje diario de algo que conoce tu vida.',
    'does.journal.title': '📓 Diario vivo',
    'does.journal.desc': 'Cuéntale sobre tu día. Hace las preguntas correctas y crece la relación.',
    'does.attention.title': '👁️ Filtro de atención',
    'does.attention.desc': 'Muestra señal, mata ruido. Solo lo que necesita TU atención.',
    'does.owned.title': '🔒 Auto-alojado y tuyo',
    'does.owned.desc': 'Tu máquina, tus datos. Sin nube. Sin vendor lock-in. Llévatelo donde quieras.',
    'does.evolves.title': '🌱 Evoluciona',
    'does.evolves.desc': 'Código vivo que se adapta a ti. Crece contigo porque crece de ti.',
    'soon.label': 'Próximamente',
    'soon.intro': 'Simbi está naciendo. Un compañero digital completo que gestiona tu vida a tu lado.',
    'soon.mobile': '📱 App móvil — tu organismo en tu bolsillo',
    'soon.voice': '🗣️ Voz — habla con Simbi en voz alta',
    'soon.anticipate': '🔮 Inteligencia anticipatoria — predice lo que necesitas',
    'soon.insights': '💡 Insights — patrones en tu forma de pensar',
    'soon.full': '🌿 Simbiosis completa — un compañero digital para toda tu vida',
    'cta': 'Escríbeme',
    'cta.note': 'Beta privada. Plazas limitadas.',
    'footer.motto': 'Buen software es todo lo que necesitas.',
    'story.pill': 'La historia →',
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
