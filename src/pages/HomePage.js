// src/pages/HomePage.js
import { APP_NAME } from '../config/constants.js';
import { initFullPageScroll, destroyFullPageScroll } from '../fullPageScroll.js'



/**
 * Page d'accueil - Affiche la liste des spots
 */
export function HomePage() {
  return `
    <section class="section h-dvh w-full pt-8">
      <h1>Bienvenue sur ${APP_NAME}</h1>
    </section>
    <section class="section h-dvh w-full pt-8">
      Ceci est ma section
    </section>
  `;
}