import { t, localePath, getLocale, SUPPORTED_LOCALES, switchLocalePath } from '../lang.js';

export function Header() {
  const currentLocale = getLocale();
  const otherLocale = SUPPORTED_LOCALES.find(l => l !== currentLocale);
  const switchHref = switchLocalePath(otherLocale);

  return `
    <header class="sticky top-0 z-[100] bg-[#0a0a0a] border-b-2 border-[#2e2e2e]">

      <div class="px-6 md:px-[10%]">
        <nav class="max-w-[72rem] mx-auto h-14 flex items-stretch justify-between">

          <!-- Logo -->
          <a href="${localePath('/')}" data-link
             class="font-bebas text-[1.25rem] tracking-[.04em] text-[#f0ede8] flex items-center pr-6 border-r border-[#2e2e2e] self-stretch shrink-0 hover:text-[#818CF8] transition-colors">
            <span class="text-[#818CF8]">‽</span>LARÉPONSE
          </a>

          <!-- Nav links (desktop) -->
          <ul class="hidden md:flex items-stretch flex-1">
            <li class="border-r border-[#2e2e2e]">
              <a href="${localePath('/')}" data-link
                 class="font-fragment text-[.72rem] tracking-[.12em] uppercase text-[#f0ede8] flex items-center px-5 h-full hover:text-[#818CF8] transition-colors">
                ${t('nav.home')}
              </a>
            </li>
            <li class="border-r border-[#2e2e2e]">
              <a href="${localePath('/manifeste')}" data-link
                 class="font-fragment text-[.72rem] tracking-[.12em] uppercase text-[#C8C4BE] flex items-center px-5 h-full hover:text-[#818CF8] transition-colors">
                ${t('nav.manifesto')}
              </a>
            </li>
            <li class="border-r border-[#2e2e2e]">
              <a href="${localePath('/methode')}" data-link
                 class="font-fragment text-[.72rem] tracking-[.12em] uppercase text-[#C8C4BE] flex items-center px-5 h-full hover:text-[#818CF8] transition-colors">
                ${t('nav.method')}
              </a>
            </li>
            <li class="border-r border-[#2e2e2e]">
              <a href="${localePath('/services')}" data-link
                 class="font-fragment text-[.72rem] tracking-[.12em] uppercase text-[#C8C4BE] flex items-center px-5 h-full hover:text-[#818CF8] transition-colors">
                ${t('nav.services')}
              </a>
            </li>
            <li>
              <a href="${switchHref}" data-link
                 class="font-fragment text-[.72rem] tracking-[.12em] uppercase text-[#C8C4BE] flex items-center px-5 h-full hover:text-[#818CF8] transition-colors">
                ${otherLocale.toUpperCase()}
              </a>
            </li>
          </ul>

          <!-- Contact button (desktop) -->
          <a href="${localePath('/contact')}" data-link
             class="hidden md:flex items-center font-fragment text-[.72rem] tracking-[.12em] uppercase text-[#f0ede8] bg-[#4F46E5] px-6 hover:bg-[#6366f1] transition-colors shrink-0 border-l border-[#2e2e2e]">
            ${t('nav.contact')} →
          </a>

          <!-- Burger (mobile) -->
          <button id="burger" aria-label="Menu" aria-expanded="false"
                  class="md:hidden flex items-center px-4 text-[#f0ede8]">
            <span class="burger-icon">
              <span class="bar bar-1"></span>
              <span class="bar bar-2"></span>
              <span class="bar bar-3"></span>
            </span>
          </button>

        </nav>
      </div>

      <!-- Mobile menu (full-width) -->
      <div id="mobile-menu" class="hidden md:hidden bg-[#0a0a0a] border-t border-[#2e2e2e]">
        <a href="${localePath('/')}" data-link
           class="block font-fragment text-[.72rem] tracking-[.12em] uppercase text-[#f0ede8] px-6 py-4 border-b border-[#1e1e1e] hover:text-[#818CF8] transition-colors">
          ${t('nav.home')}
        </a>
        <a href="${localePath('/manifeste')}" data-link
           class="block font-fragment text-[.72rem] tracking-[.12em] uppercase text-[#C8C4BE] px-6 py-4 border-b border-[#1e1e1e] hover:text-[#818CF8] transition-colors">
          ${t('nav.manifesto')}
        </a>
        <a href="${localePath('/methode')}" data-link
           class="block font-fragment text-[.72rem] tracking-[.12em] uppercase text-[#C8C4BE] px-6 py-4 border-b border-[#1e1e1e] hover:text-[#818CF8] transition-colors">
          ${t('nav.method')}
        </a>
        <a href="${localePath('/services')}" data-link
           class="block font-fragment text-[.72rem] tracking-[.12em] uppercase text-[#C8C4BE] px-6 py-4 border-b border-[#1e1e1e] hover:text-[#818CF8] transition-colors">
          ${t('nav.services')}
        </a>
        <a href="${switchHref}" data-link
           class="block font-fragment text-[.72rem] tracking-[.12em] uppercase text-[#C8C4BE] px-6 py-4 border-b border-[#1e1e1e] hover:text-[#818CF8] transition-colors">
          ${otherLocale.toUpperCase()}
        </a>
        <a href="${localePath('/contact')}" data-link
           class="block font-fragment text-[.72rem] tracking-[.12em] uppercase text-[#818CF8] px-6 py-4">
          ${t('nav.contact')} →
        </a>
      </div>

    </header>
  `;
}
