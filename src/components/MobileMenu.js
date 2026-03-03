import { APP_NAME } from '../config/constants.js';
import { t, localePath } from '../lang.js';

function getNavItems() {
  return [
    { label: t('nav.home').toUpperCase(), href: localePath('/') },
    { label: t('nav.manifesto').toUpperCase(), href: '#manifeste' },
    { label: t('nav.method').toUpperCase(), href: '#methode' },
    { label: t('nav.pricing').toUpperCase(), href: '#tarifs' },
    { label: t('nav.services').toUpperCase(), href: '#services' },
    { label: t('nav.projects').toUpperCase(), href: '#projets' },
  ];
}

export function MobileMenu(activeHref = '') {
  const navLinks = getNavItems().map(({ label, href }) => {
    const isActive = href === activeHref;
    const activeClasses = isActive
      ? 'border-l-[3px] border-[var(--purple)] bg-white/5'
      : 'border-l-[3px] border-transparent';
    return `
    <a href="${href}" data-link
       class="font-mono-space text-brand-white text-sm tracking-widest uppercase px-4 py-6 border-b border-white/10 hover:text-brand-purple transition-colors ${activeClasses}">
      ${label}
    </a>
  `;
  }).join('');

  return `
    <div id="mobile-menu" class="fixed inset-0 z-50 bg-brand-black flex flex-col overflow-y-auto">

      <!-- Header -->
      <div class="flex items-center h-[54px] shrink-0 px-4">

        <a href="${localePath('/')}" data-link class="flex items-center gap-2">
          <span class="font-mono-space text-brand-purple text-sm">?</span>
          <span class="font-bebas text-brand-white text-2xl tracking-wider uppercase">${APP_NAME}</span>
        </a>

        <div class="w-px self-stretch bg-white/20 mx-4"></div>

        <button id="mobile-menu-close" class="ml-auto text-brand-white text-2xl leading-none">&times;</button>

        <a href="#contact"
           class="ml-4 font-mono-space text-brand-gray text-xs tracking-widest uppercase hover:text-brand-white transition-colors">
          CONTACT
        </a>
      </div>

      <div class="h-px bg-white/10 shrink-0"></div>

      <!-- Navigation -->
      <nav class="flex flex-col">
        ${navLinks}
      </nav>

    </div>
  `;
}
