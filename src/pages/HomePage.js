// src/pages/HomePage.js
import { APP_NAME } from '../config/constants.js';
import { t } from '../lang.js';

/**
 * Page d'accueil - Affiche la liste des spots
 */
export function HomePage() {
  return `
    <section class="section h-dvh w-full pt-8">
      <div class="px-6 md:px-[10%] h-full">
        <h1>${t('home.welcome', { appName: APP_NAME })}</h1>
      </div>
    </section>
    <section class="section h-dvh w-full pt-8">
      <div class="px-6 md:px-[10%] h-full">
        ${t('home.section')}
      </div>
    </section>
  `;
}