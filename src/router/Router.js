/**
 * Router vanilla JS utilisant l'API History
 * Permet la navigation SPA sans rechargement de page
 */
import { Layout } from '../layouts/Layout.js';

class Router {
  constructor() {
    // Stockage des routes { path: handler }
    this.routes = {};

    // Route par défaut (404)
    this.notFoundHandler = () => '<h1>404 - Page non trouvée</h1>';

    // Écouter les événements de navigation (bouton précédent/suivant)
    window.addEventListener('popstate', () => {
      this.handleRoute(window.location.pathname);
    });
  }

  /**
   * Enregistre une route
   * @param {string} path - Le chemin de la route (ex: '/spots/:id')
   * @param {Function} handler - La fonction qui retourne le HTML de la page
   */
  addRoute(path, handler) {
    this.routes[path] = handler;
    return this; // Permet le chaînage
  }

  /**
   * Définit le handler pour les pages non trouvées
   */
  setNotFound(handler) {
    this.notFoundHandler = handler;
    return this;
  }

  /**
   * Navigue vers une URL
   * @param {string} path - Le chemin vers lequel naviguer
   */
  navigate(path) {
    // Ajouter l'entrée dans l'historique
    window.history.pushState({}, '', path);
    // Gérer la route
    this.handleRoute(path);
  }

  /**
   * Gère l'affichage de la route courante
   * @param {string} path - Le chemin à afficher
   */
  handleRoute(path) {
    // Chercher une correspondance exacte d'abord
    if (this.routes[path]) {
      this.render(this.routes[path]());
      return;
    }

    // Chercher une route avec paramètres (ex: /spots/:id)
    for (const route in this.routes) {
      const params = this.matchRoute(route, path);
      if (params) {
        this.render(this.routes[route](params));
        return;
      }
    }

    // Aucune route trouvée
    this.render(this.notFoundHandler());
  }

  /**
   * Compare une route pattern avec un chemin réel
   * @param {string} routePattern - Le pattern (ex: '/spots/:id')
   * @param {string} path - Le chemin réel (ex: '/spots/42')
   * @returns {Object|null} - Les paramètres extraits ou null
   */
  matchRoute(routePattern, path) {
    // Convertir le pattern en regex
    // /spots/:id devient /spots/([^/]+)
    const paramNames = [];
    const regexPattern = routePattern.replace(/:([^/]+)/g, (_, paramName) => {
      paramNames.push(paramName);
      return '([^/]+)';
    });

    const regex = new RegExp(`^${regexPattern}$`);
    const match = path.match(regex);

    if (!match) return null;

    // Extraire les valeurs des paramètres
    const params = {};
    paramNames.forEach((name, index) => {
      params[name] = match[index + 1];
    });

    return params;
  }

  /**
   * Affiche le contenu dans le conteneur principal
   * @param {string} html - Le HTML à afficher
   */

render(html) {
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = Layout({ content: html });
    }
    }

  /**
   * Démarre le router sur la route actuelle
   */
  start() {
    // Intercepter les clics sur les liens
    document.addEventListener('click', (e) => {
      // Vérifier si c'est un lien interne
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        this.navigate(e.target.getAttribute('href'));
      }
    });

    // Gérer la route initiale
    this.handleRoute(window.location.pathname);
  }
}

// Exporter une instance unique (Singleton)
export const router = new Router(); 