type Lang = 'en' | 'es'

const translations: Record<Lang, Record<string, string>> = {
  en: {
    'announce.pill': 'NEW',
    'announce.text': 'Public business plan — read how Simbi sustains itself.',
    'announce.aria': 'Read the public business plan',

    'headline': 'You have 12,000 files on your laptop.<br>You can name 20.<br><span class="ogilvy-headline-accent">Simbi remembers the other 11,980.</span>',
    'subhead': 'Drop a file. Ask anything. Open the file the answer came from.',

    'demo.greet': "Good morning. Today is your mom's birthday.",
    'demo.q': 'Do I still have that cake recipe of hers?',
    'demo.a': 'Yes. You took a photo of her handwritten one two years ago.',
    'demo.src': "↪ 🎂 mom's recipe",
    'demo.thanks': "Thanks! Two years already? I barely remembered.",
    'demo.caption': "That's the whole product.",

    's2.head': 'Three things, in this order.',
    's2.p1': "You have a folder on your computer called Simbi. You drop things into it — a PDF, a screenshot, a meeting note, a download, a whole zip your sister sent. You don't name them. You don't tag them. You don't sort them. You forget about them.",
    's2.p2': 'When you need something, you ask in plain language. <em>"What did my sister send me in March?"</em> <em>"Where are the photos from Cádiz?"</em> <em>"That note about Galicia — find it."</em> Simbi answers. In a sentence.',
    's2.p3': "Every answer comes with the file it came from. Click it. Open it. Read the source yourself. Without sources, an AI is an oracle, and oracles get things wrong silently. Simbi shows its work.",
    's2.p4': "It doesn't read your email yet. It doesn't watch your calendar. It doesn't speak. Today it does one thing: it remembers what you put in front of it, and finds it when you ask.",

    's3.head': 'On your machine. Nowhere else.',
    's3.p1': "Simbi runs on your laptop, your home server, or a five-euro VPS — whatever hardware you've got. Your files never leave that machine. There is no cloud account to sign into, no telemetry, no analytics, no third party that gets a copy of anything.",
    's3.p2': "The portal you're reading is open source. The product itself is opening progressively under a permissive license. If I disappear tomorrow, your Simbi keeps running. If you don't like where the project is heading, you take your copy and go. No closed door, ever.",
    's3.p3': "Today you can run it yourself for free with your own key (Anthropic, OpenAI, or a model running on your own hardware). Soon: a pre-installed box with a perpetual free tier and an optional Premium service. Either way the promise is the same: your data on your machine, no rent for the right to remember.",
    's3.p4': "This is not ideology. It is an architecture decision. A memory holds everything you have. That much trust can only go to something that is actually yours.",

    's4.head': 'Built by one person, on purpose.',
    's4.p1': "Simbi is built by <a class=\"ogilvy-link\" href=\"https://monkeyandres.com\" target=\"_blank\" rel=\"noopener\">Andrés Martín Angulo</a>, a programmer in Spain. One person, working in the open. No company, no board, no exit strategy. He's building it because he wants it to exist — for himself, for his father, for anyone who feels the same daily friction with their digital life. If that's you, this belongs to you too.",

    's5.head': 'Start.',
    's5.p1': "Read the longer story — how it works, where it came from, and why it matters.",
    's5.cta': 'Read the story →',
    's5.email': 'or email me directly: <a href="mailto:monkeyandres@protonmail.com?subject=Simbi">monkeyandres@protonmail.com</a>',

    'footer.motto': 'Your world stays yours.',
    'footer.business': 'Business plan',
  },
  es: {
    'announce.pill': 'NUEVO',
    'announce.text': 'Plan de empresa público — léete cómo se sostiene Simbi.',
    'announce.aria': 'Leer el plan de empresa público',

    'headline': 'Tienes 12.000 archivos en tu portátil.<br>Puedes nombrar 20.<br><span class="ogilvy-headline-accent">Simbi recuerda los otros 11.980.</span>',
    'subhead': 'Suelta un archivo. Pregunta. Abre el archivo del que salió la respuesta.',

    'demo.greet': 'Buenos días. Hoy es el cumple de tu madre.',
    'demo.q': '¿Tengo guardada la receta de la tarta que hacía ella?',
    'demo.a': 'Sí. Le hiciste una foto a la que ella escribió a mano, hace dos años.',
    'demo.src': '↪ 🎂 receta de mamá',
    'demo.thanks': '¡Gracias! ¿Hace ya dos años? Yo apenas me acordaba.',
    'demo.caption': 'Eso es todo el producto.',

    's2.head': 'Tres cosas, en este orden.',
    's2.p1': 'Tienes una carpeta en tu ordenador, llamada Simbi. Sueltas cosas dentro — un PDF, una captura, las notas de una reunión, una descarga, el zip entero que te mandó tu hermana. No las nombras. No las etiquetas. No las ordenas. Te olvidas de ellas.',
    's2.p2': 'Cuando necesitas algo, preguntas en lenguaje normal. <em>«¿Qué me mandó mi hermana en marzo?»</em> <em>«¿Dónde están las fotos de Cádiz?»</em> <em>«Aquella nota sobre Galicia — encuéntrala.»</em> Simbi responde. En una frase.',
    's2.p3': 'Cada respuesta viene con el archivo del que sale. Haz clic. Ábrelo. Lee tú la fuente. Sin fuentes, una IA es un oráculo, y los oráculos se equivocan en silencio. Simbi te enseña de dónde lo ha sacado.',
    's2.p4': 'Todavía no lee tu correo. No mira tu calendario. No habla. Hoy hace una sola cosa: recuerda lo que pones delante, y lo encuentra cuando preguntas.',

    's3.head': 'En tu máquina. En ningún otro sitio.',
    's3.p1': 'Simbi funciona en tu portátil, en un servidor casero, o en un VPS de cinco euros — el hardware que tengas a mano. Tus archivos nunca salen de esa máquina. No hay cuenta en la nube en la que entrar, ni telemetría, ni analytics, ni nadie ahí fuera recibiendo copia de tus cosas.',
    's3.p2': 'El portal que estás leyendo es código abierto. El producto en sí se va abriendo progresivamente bajo licencia permisiva. Si yo desaparezco mañana, tu Simbi sigue funcionando. Si no te gusta hacia dónde va el proyecto, te llevas tu copia. Ninguna puerta cerrada, nunca.',
    's3.p3': 'Hoy puedes correrlo tú mismo gratis con tu propia clave (Anthropic, OpenAI, o un modelo en tu propio hardware). Pronto: una caja preinstalada con un nivel gratuito perpetuo y un servicio Premium opcional. La promesa no cambia en ningún caso: tus datos en tu máquina, sin alquiler por el derecho a recordar.',
    's3.p4': 'Esto no es ideología. Es una decisión de arquitectura. Una memoria contiene todo lo tuyo. Esa cantidad de confianza solo se le puede dar a algo que de verdad es tuyo.',

    's4.head': 'Hecho por una persona, a propósito.',
    's4.p1': 'Simbi lo hace <a class="ogilvy-link" href="https://monkeyandres.com" target="_blank" rel="noopener">Andrés Martín Angulo</a>, un programador en España. Una persona, trabajando en abierto. Sin empresa, sin consejo, sin estrategia de salida. Construye Simbi porque quiere que exista — para él, para su padre, para la gente que siente la misma fricción diaria con su vida digital. Si te ves ahí dentro, esto también es para ti.',

    's5.head': 'Empieza.',
    's5.p1': 'Lee la historia entera: cómo funciona, de dónde viene y por qué importa.',
    's5.cta': 'Lee la historia →',
    's5.email': 'o escríbeme directamente: <a href="mailto:monkeyandres@protonmail.com?subject=Simbi">monkeyandres@protonmail.com</a>',

    'footer.motto': 'Tu mundo sigue siendo tuyo.',
    'footer.business': 'Plan de empresa',
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

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria')!
    const text = translations[lang][key]
    if (text) el.setAttribute('aria-label', text)
  })

  const enBtn = document.getElementById('lang-en')!
  const esBtn = document.getElementById('lang-es')!
  enBtn.className = `lang-btn text-xs font-medium px-2 py-0.5 rounded ${lang === 'en' ? 'text-stone-900 dark:text-neutral-50 bg-stone-300 dark:bg-neutral-700' : 'text-stone-400 dark:text-neutral-500'}`
  esBtn.className = `lang-btn text-xs font-medium px-2 py-0.5 rounded ${lang === 'es' ? 'text-stone-900 dark:text-neutral-50 bg-stone-300 dark:bg-neutral-700' : 'text-stone-400 dark:text-neutral-500'}`
}

const saved = localStorage.getItem('simbi-lang') as Lang | null
const browser = navigator.language.slice(0, 2).toLowerCase()
currentLang = saved ?? (browser === 'es' ? 'es' : 'en')
setLang(currentLang)

document.getElementById('lang-en')!.addEventListener('click', () => setLang('en'))
document.getElementById('lang-es')!.addEventListener('click', () => setLang('es'))

;(window as unknown as { simbiLang: Lang }).simbiLang = currentLang
