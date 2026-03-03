import { APP_NAME, ROUTES } from '../config/constants.js';

/**
 * Composant Header - Barre de navigation principale
 */
export function Header() {
  return `
    <header class="header">
      <div class="header__container">
        <a href="${ROUTES.HOME}" data-link class="header__logo">
          ${APP_NAME}
        </a>

        <nav class="header__nav">
          <a href="${ROUTES.HOME}" data-link class="nav__link">Accueil</a>
        </nav>
      </div>
    </header>
  `;
}