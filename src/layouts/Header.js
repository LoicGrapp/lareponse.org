import { t, localePath, getLocale, SUPPORTED_LOCALES, switchLocalePath } from '../lang.js';

function getActivePath() {
  const base = import.meta.env.BASE_URL;
  const cleaned = window.location.pathname.startsWith(base)
    ? '/' + window.location.pathname.slice(base.length)
    : window.location.pathname;
  return cleaned.replace(/^\/(en|fr)/, '') || '/';
}

export function Header() {
  const currentLocale = getLocale();
  const otherLocale   = SUPPORTED_LOCALES.find(l => l !== currentLocale);
  const switchHref    = switchLocalePath(otherLocale);
  const activePath    = getActivePath();

  const navItems = [
    { path: '/',          label: t('nav.home')      },
    { path: '/manifeste', label: t('nav.manifesto') },
    { path: '/methode',   label: t('nav.method')    },
    { path: '/services',  label: t('nav.services')  },
  ];

  const dBase = 'text-[13px] tracking-[.12em] uppercase transition-colors';
  const mBase = 'text-[16px] tracking-[.12em] uppercase transition-colors';

  return `
    <header class="font-fragment md:sticky md:top-0 z-[100] bg-[#0a0a0a] border-b-2 border-[#2e2e2e]">

      <div class="px-6 md:px-[10%]">
        <nav class="max-w-[72rem] mx-auto h-14 flex items-stretch justify-between">

          <!-- Logo -->
          <a href="${localePath('/')}" data-link
             class="font-bebas text-[1.25rem] tracking-[.04em] text-[#f0ede8] flex items-center pr-6 border-r border-[#2e2e2e] self-stretch shrink-0 hover:text-[#818CF8] transition-colors">
            <span class="text-[#818CF8]">‽</span>LARÉPONSE
          </a>

          <!-- Nav links (desktop) -->
          <ul class="hidden md:flex items-stretch flex-1">
            ${navItems.map(({ path, label }) => {
              const active = activePath === path;
              return `
                <li class="border-r border-[#2e2e2e]">
                  <a href="${localePath(path)}" data-link
                     class="${dBase} flex items-center px-5 h-full
                            ${active
                              ? 'text-[#f0ede8] bg-[#1a1a1a] border-b-2 border-[#818CF8]'
                              : 'text-[#C8C4BE] hover:text-[#f0ede8] hover:bg-[#1a1a1a]'}">
                    ${label}
                  </a>
                </li>`;
            }).join('')}
            <li>
              <a href="${switchHref}" data-link
                 class="${dBase} text-[#C8C4BE] flex items-center px-5 h-full hover:text-[#f0ede8] hover:bg-[#1a1a1a]">
                ${otherLocale.toUpperCase()}
              </a>
            </li>
          </ul>

          <!-- Contact button (desktop) -->
          <a href="${localePath('/contact')}" data-link
             class="hidden md:flex items-center ${dBase} text-[#f0ede8] bg-[#4F46E5] px-6 hover:bg-[#6366f1] shrink-0 border-l border-[#2e2e2e]
                    ${activePath === '/contact' ? 'bg-[#6366f1]' : ''}">
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

      <!-- Mobile menu -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-[#2e2e2e]">
        ${navItems.map(({ path, label }) => {
          const active = activePath === path;
          return `
            <a href="${localePath(path)}" data-link
               class="block ${mBase} py-4 border-b border-[#1e1e1e]
                      ${active
                        ? 'text-[#f0ede8] bg-[#1a1a1a] pl-[22px] border-l-2 [border-left-color:#818CF8]'
                        : 'text-[#C8C4BE] px-6 hover:text-[#f0ede8] hover:bg-[#1a1a1a]'}">
              ${label}
            </a>`;
        }).join('')}
        <a href="${switchHref}" data-link
           class="block ${mBase} text-[#C8C4BE] px-6 py-4 border-b border-[#1e1e1e] hover:text-[#f0ede8] hover:bg-[#1a1a1a]">
          ${otherLocale.toUpperCase()}
        </a>
        <a href="${localePath('/contact')}" data-link
           class="block ${mBase} text-[#f0ede8] bg-[#4F46E5] px-6 py-4 hover:bg-[#6366f1] text-center
                  ${activePath === '/contact' ? 'bg-[#6366f1]' : ''}">
          ${t('nav.contact')} →
        </a>
      </div>

    </header>
  `;
}
