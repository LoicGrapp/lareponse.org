/**
 * fullPageScroll.js
 * Gère le scroll pleine page par sections
 * Compatible Vite vanilla JS + router
 */

let sections    = []
let current     = 0
let isAnimating = false
let cleanupFns  = []

const DEFAULTS = {
  duration  : 800,
  loop      : false,
  threshold : 50,
}

function goTo(index, opts) {
  if (isAnimating) return
  if (index < 0)                { if (opts.loop) index = sections.length - 1; else return }
  if (index >= sections.length) { if (opts.loop) index = 0;                   else return }

  isAnimating = true
  sections[current]?.classList.remove('is-active')
  current = index
  sections[current]?.classList.add('is-active')

  const container = document.getElementById('scroll-container')
  const sectionTop = sections[index].getBoundingClientRect().top
                  - container.getBoundingClientRect().top
                  + container.scrollTop

  container.scrollTo({
    top: sectionTop,
    behavior: 'smooth'
  })

  setTimeout(() => { isAnimating = false }, opts.duration)
}

function onWheel(e, opts) {
  e.preventDefault()
  if (Math.abs(e.deltaY) < opts.threshold) return
  e.deltaY > 0 ? goTo(current + 1, opts) : goTo(current - 1, opts)
}

function onKeyDown(e, opts) {
  const map = {
    ArrowDown  : +1,
    ArrowUp    : -1,
    ArrowRight : +1,
    ArrowLeft  : -1,
    PageDown   : +1,
    PageUp     : -1,
  }
  // Tab géré séparément pour récupérer shiftKey
  if (e.key === 'Tab') {
    e.preventDefault()
    goTo(current + (e.shiftKey ? -1 : +1), opts)
    return
  }
  if (!(e.key in map)) return
  e.preventDefault()
  goTo(current + map[e.key], opts)
}

let _touchStartY = 0
function onTouchStart(e) {
  _touchStartY = e.touches[0].clientY
}
function onTouchEnd(e, opts) {
  const diff = _touchStartY - e.changedTouches[0].clientY
  if (Math.abs(diff) < opts.threshold) return
  diff > 0 ? goTo(current + 1, opts) : goTo(current - 1, opts)
}

// ─── API ─────────────────────────────────────────────────────────────────────

export function initFullPageScroll(target, options = {}) {
  destroyFullPageScroll()

  const opts = { ...DEFAULTS, ...options }

  sections = typeof target === 'string'
    ? [...document.querySelectorAll(target)]
    : target

  if (!sections.length) {
    console.warn('[fullPageScroll] Aucune section trouvée :', target)
    return
  }

  current     = 0
  isAnimating = false


  // Styles de base sur les sections
  sections.forEach((s, i) => {
    s.style.height = '100dvh'   // dvh pour mobile (évite la barre du navigateur)
    s.style.width  = '100%'
    if (i === 0) s.classList.add('is-active')
  })

  // Listeners
  const wheelHandler      = (e) => onWheel(e, opts)
  const keyHandler        = (e) => onKeyDown(e, opts)
  const touchStartHandler = (e) => onTouchStart(e)
  const touchEndHandler   = (e) => onTouchEnd(e, opts)

  window.addEventListener('wheel',      wheelHandler,      { passive: false })
  window.addEventListener('keydown',    keyHandler)
  window.addEventListener('touchstart', touchStartHandler, { passive: true })
  window.addEventListener('touchend',   touchEndHandler)

  cleanupFns = [
    () => window.removeEventListener('wheel',      wheelHandler),
    () => window.removeEventListener('keydown',    keyHandler),
    () => window.removeEventListener('touchstart', touchStartHandler),
    () => window.removeEventListener('touchend',   touchEndHandler),
    () => sections.forEach(s => s.classList.remove('is-active')),
  ]
}

export function destroyFullPageScroll() {
  cleanupFns.forEach(fn => fn())
  cleanupFns  = []
  sections    = []
  current     = 0
  isAnimating = false
}

// Navigation programmatique (dots, boutons, etc.)
export function goToSection(index) {
  goTo(index, { ...DEFAULTS })
}

export function getCurrentIndex() {
  return current
}