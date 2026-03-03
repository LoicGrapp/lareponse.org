// src/pages/HomePage.js
import { APP_NAME } from '../config/constants.js';

/**
 * Page d'accueil - Affiche la liste des spots
 */
export function HomePage() {
  return `
    <div class="">
      <section>
        <h1 class="">Bienvenue sur ${APP_NAME}</h1>
        <p>Agence Web crée par sammy</p>
      </section>
    </div>
  `;
}