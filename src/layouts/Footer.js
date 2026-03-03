import { t, localePath } from '../lang.js';

export function Footer() {
  return `
    <footer class="bg-[#0a0a0a] border-t-2 border-[#2e2e2e] px-6 md:px-[10%]">
      <div class="max-w-[72rem] mx-auto py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

        <!-- Logo -->
        <a href="${localePath('/')}" data-link
           class="font-bebas text-[1.1rem] tracking-[.04em] text-[#f0ede8] hover:text-[#818CF8] transition-colors">
          <span class="text-[#818CF8]">‽</span> LARÉPONSE
        </a>

        <!-- Links -->
        <nav class="flex items-center">
          <a href="${localePath('/mentions-legales')}" data-link
             class="font-fragment text-[.72rem] tracking-[.12em] uppercase text-[#C8C4BE] pr-5 mr-5 border-r border-[#2e2e2e] hover:text-[#f0ede8] transition-colors">
            ${t('footer.legal')}
          </a>
          <a href="${localePath('/contact')}" data-link
             class="font-fragment text-[.72rem] tracking-[.12em] uppercase text-[#C8C4BE] hover:text-[#f0ede8] transition-colors">
            ${t('footer.contact')}
          </a>
        </nav>

        <!-- Motto -->
        <p class="font-fragment text-[.72rem] tracking-[.1em] text-[#C8C4BE] italic opacity-60">
          ${t('footer.motto')}
        </p>

      </div>
    </footer>
  `;
}
