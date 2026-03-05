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
    { path: '/about', label: t('nav.about') },
    { path: '/services',  label: t('nav.services')  },
    { path: '/pricing',   label: t('nav.pricing')    },
    { path: '/projects',   label: t('nav.projects')    },
  ];

  const dBase = 'text-[13px] tracking-[.12em] uppercase transition-colors';
  const mBase = 'text-[16px] tracking-[.12em] uppercase transition-colors';

  return `
    <a href="#main-content" class="skip-link">${t('a11y.skip')}</a>
    <header class="font-fragment md:sticky md:top-0 z-[100] bg-[#0a0a0a] border-b-2 border-[#2e2e2e]">

      <div class="pl-6 pr-0 md:px-[10%]">
        <nav class="max-w-[72rem] mx-auto h-14 flex items-stretch">

          <!-- Logo -->
          <a href="${localePath('/')}" data-link
             class="font-bebas text-[1.25rem] tracking-[.04em] text-[#f0ede8] flex items-center gap-[6px] pr-6 border-r border-[#2e2e2e] self-stretch shrink-0 hover:text-[#818CF8] transition-colors">
            <svg height="30" width="auto" viewBox="0 0 162 290" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:auto">
              <path d="M152.547 36.5597C161.215 52.4275 164.4 68.6422 159.25 86.258C155.84 97.9313 149.767 107.843 142.126 117.025C130.583 130.897 115.414 140.957 103.317 154.257C88.332 170.733 81.0514 189.809 83.0293 212.191C83.205 214.178 84.3628 216.048 83.2635 218.3C82.3129 215.147 81.1551 212.038 80.4567 208.83C79.5286 204.564 79.0421 200.207 78.2041 195.918C77.0597 190.065 77.7535 184.272 78.5735 178.487C81.2767 159.348 90.7919 143.507 102.524 128.685C110.796 118.232 118.725 107.433 124.082 95.1831C129.029 83.8702 131.281 71.9311 130.403 59.3341C129.835 51.148 127.875 43.4799 124.433 36.2759C120.419 27.8824 114.458 20.8316 106.502 15.7856C92.6436 7.00021 77.6679 4.58085 61.5478 7.63096C48.8428 10.0323 37.9174 15.3801 29.3798 25.1612C24.915 30.2748 21.8288 36.1767 21.3558 43.0969C20.7701 51.63 26.181 59.2711 35.4214 59.3386C41.1252 59.3792 45.7251 64.1143 46.5856 69.8C47.6849 77.0897 46.6802 83.5413 41.0215 88.763C35.89 93.5026 29.7492 95.3768 22.9642 94.6109C7.89386 92.9124 0.969157 82.2978 0.0951228 68.8764C-0.69331 56.8067 3.48762 46.0119 10.106 36.0821C18.6976 23.1879 30.7224 14.1862 44.5447 8.05897C62.084 0.282767 80.4838 -2.04199 99.6584 1.85512C109.187 3.79241 118.085 6.91912 126.465 11.5596C137.224 17.5157 145.906 25.819 152.547 36.5597Z" fill="currentColor"/>
              <path d="M49.8024 202.045C45.1709 193.494 42.319 184.704 42.3731 175.139C42.4406 163.75 46.2206 153.613 52.5281 144.233C58.5382 135.29 66.2378 128.027 74.2843 121.017C86.4127 110.452 99.5457 100.968 109.822 88.3757C110.417 87.6503 111.255 87.1232 112.291 86.7402C110.899 90.5788 108.083 93.4667 105.632 96.5619C95.9235 108.812 86.228 121.084 78.5734 134.767C73.8293 143.246 70.2341 152.329 68.2021 161.799C66.0891 171.666 65.5485 181.695 67.0308 191.868C69.7295 210.349 77.83 226.324 88.5933 241.201C89.1655 241.989 89.7466 242.769 90.2963 243.571C90.4224 243.751 90.427 244.017 90.1656 244.548C75.2169 231.952 60.2503 219.373 49.8024 202.045Z" fill="currentColor"/>
              <path d="M71.2027 253.793C78.7041 251.288 85.6783 251.477 91.6028 256.74C96.9281 261.47 99.1763 267.575 97.5904 274.734C95.7658 282.983 90.9225 288.426 82.403 289.719C74.5907 290.904 67.9679 288.363 63.3814 281.74C57.2407 272.878 60.0385 259.186 71.2027 253.793Z" fill="currentColor"/>
            </svg>LARÉPONSE
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
          </ul>

          <!-- Contact button (desktop) -->
          <a href="${localePath('/contact')}" data-link
             class="hidden md:flex items-center ${dBase} text-[#f0ede8] bg-[#4F46E5] px-6 hover:bg-[#6366f1] shrink-0 border-l border-[#2e2e2e]
                    ${activePath === '/contact' ? 'bg-[#6366f1]' : ''}">
            ${t('nav.contact')}
          </a>

          <!-- Language switcher (desktop) -->
          <a href="${switchHref}" data-link
             class="hidden md:flex items-center ${dBase} text-[#C8C4BE] px-5 h-full hover:text-[#f0ede8] hover:bg-[#1a1a1a] shrink-0 border-l border-[#2e2e2e]">
            ${otherLocale.toUpperCase()}
          </a>

          <!-- Burger (mobile) -->
          <button id="burger" aria-label="Menu" aria-expanded="false"
                  class="md:hidden ml-auto flex items-center px-4 text-[#f0ede8] border-l border-[#2e2e2e]">
            <span class="burger-icon">
              <span class="bar bar-1"></span>
              <span class="bar bar-2"></span>
              <span class="bar bar-3"></span>
            </span>
          </button>

          <!-- Contact button (mobile) -->
          <a href="${localePath('/contact')}" data-link
             class="md:hidden flex items-center ${mBase} text-[#f0ede8] bg-[#4F46E5] px-4 shrink-0 border-l border-[#2e2e2e] hover:bg-[#6366f1]
                    ${activePath === '/contact' ? 'bg-[#6366f1]' : ''}">
            ${t('nav.contact')}
          </a>

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
           class="block ${mBase} text-[#C8C4BE] px-6 py-4 border-t border-[#1e1e1e] hover:text-[#f0ede8] hover:bg-[#1a1a1a]">
          ${otherLocale.toUpperCase()}
        </a>
      </div>

    </header>
  `;
}
