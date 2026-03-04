import { router } from './router/Router.js';
import { ROUTES } from './config/constants.js';
import { initGridPulse } from './utils/gridPulse.js';

// Import des pages (à créer)
import { HomePage } from './pages/HomePage.js';
import { NotFoundPage } from './pages/NotFoundPage.js';
import { Contact } from './pages/contact.js';

// Configuration des routes
router
  .addRoute(ROUTES.HOME, HomePage)
  .addRoute(ROUTES.CONTACT, Contact)
  .setNotFound(NotFoundPage);

// Démarrer le router quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
  router.start();
  initGridPulse();
});