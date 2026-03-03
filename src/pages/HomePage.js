// src/pages/HomePage.js
import { APP_NAME } from '../config/constants.js';
import { t } from '../lang.js';

/**
 * Page d'accueil - Affiche la liste des spots
 */
export function HomePage() {
  return `
    <section class="section h-dvh w-full pt-8">
      <h1>${t('home.welcome', { appName: APP_NAME })}</h1>
    </section>
    <section class="section h-dvh w-full pt-8">
      ${t('home.section')}
    </section>
  `;
}