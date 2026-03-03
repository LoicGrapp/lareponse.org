import { APP_NAME } from '../config/constants.js';
import { t, localePath, getLocale, SUPPORTED_LOCALES } from '../lang.js';

/**
 * Composant Header - Barre de navigation principale
 */
export function Header() {
  const currentLocale = getLocale();
  const otherLocale = SUPPORTED_LOCALES.find(l => l !== currentLocale);
  const switchPath = window.location.pathname.replace(/^\/(en|fr)/, '') || '/';
  const switchHref = `/${otherLocale}${switchPath === '/' ? '' : switchPath}`;

  return `
    <header class="bg-(--black) to-black border-b border-white/5">
        <nav class="w-full px-6 md:px-[10%] h-20 flex items-center justify-between border-b-2 border-white/10">

            <!-- Logo + Nav -->
            <div class="self-stretch flex items-stretch">
              <a href="${localePath('/')}" data-link class="flex items-center gap-3 text-white border-r-2 border-white/10 pr-6">
                  <span class="text-brand-purple text-xl font-bold">?</span>
                  <span class="uppercase tracking-widest font-semibold text-sm">${APP_NAME}</span>
              </a>
              <!-- Nav Links -->
              <ul class="hidden md:flex self-stretch pl-6 items-start space-x-4 text-[10px] tracking-widest uppercase">
                <li class="pr-4 border-r-2 border-white/10"><a href="${localePath('/')}" data-link class="text-white border-b-2 border-(--purple) pb-1">${t('nav.home')}</a></li>
                <li class="pr-4 border-r-2 border-white/10"><a href="#manifeste" class="text-gray-400 hover:text-white transition">${t('nav.manifesto')}</a></li>
                <li class="pr-4 border-r-2 border-white/10"><a href="#methode" class="text-gray-400 hover:text-white transition">${t('nav.method')}</a></li>
                <li class="pr-4 border-r-2 border-white/10"><a href="#tarifs" class="text-gray-400 hover:text-white transition">${t('nav.pricing')}</a></li>
                <li class="pr-4 border-r-2 border-white/10"><a href="#services" class="text-gray-400 hover:text-white transition">${t('nav.services')}</a></li>
                <li class="pr-4 border-r-2 border-white/10"><a href="#projets" class="text-gray-400 hover:text-white transition">${t('nav.projects')}</a></li>
                <li><a href="${switchHref}" data-link class="text-gray-400 hover:text-white transition">${otherLocale.toUpperCase()}</a></li>
            </ul>
            </div>

            <!-- Contact Button -->
            <a href="#contact" class="hidden md:inline-flex items-center bg-(--purple) text-white text-xs uppercase tracking-widest px-6 py-4 hover:bg-(--purple)/80 transition">${t('nav.contact')}<span class="ml-2">→</span></a>

            <!-- Mobile Button -->
            <button class="md:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </nav>
    </header>
  `;
}