import { APP_NAME } from '../config/constants.js';
import { t, localePath } from '../lang.js';

/**
 * Composant Footer - Pied de page
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="footer">
      <div class="footer__container">
        <p>&copy; ${currentYear} ${APP_NAME} - ${t('footer.rights')}</p>
        <nav class="footer__nav">
          <a href="${localePath('/mentions-legales')}" data-link>${t('footer.legal')}</a>
          <a href="${localePath('/contact')}" data-link>${t('footer.contact')}</a>
        </nav>
      </div>
    </footer>
  `;
}