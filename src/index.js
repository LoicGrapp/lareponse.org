import { router } from './router/Router.js';
import { ROUTES } from './config/constants.js';

// Import des pages (à créer)
import { HomePage } from './pages/HomePage.js';
import { NotFoundPage } from './pages/NotFoundPage.js';
import { ServicesPage } from './pages/ServicesPage.js';

// Configuration des routes
router
  .addRoute(ROUTES.HOME, HomePage)
  .addRoute(ROUTES.SERVICES, ServicesPage)
  .setNotFound(NotFoundPage);

// Démarrer le router quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
  router.start();
});