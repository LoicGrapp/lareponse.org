/**
 * Router vanilla JS utilisant l'API History
 * Permet la navigation SPA sans rechargement de page
 */
import { Layout } from '../layouts/Layout.js';
import { SUPPORTED_LOCALES, detectBrowserLocale } from '../lang.js';

class Router {
  constructor() {
    // Stockage des routes { path: handler }
    this.routes = {};

    // Route par défaut (404)
    this.notFoundHandler = () => '<h1>404 - Page not found</h1>';

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
    const [routePath, hash] = path.split('#');
    window.history.pushState({}, '', path);
    this.handleRoute(routePath);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }

  /**
   * Gère l'affichage de la route courante
   * @param {string} path - Le chemin à afficher
   */
  handleRoute(path) {
    const base = import.meta.env.BASE_URL;
    const cleanPath = path.startsWith(base) ? '/' + path.slice(base.length) : path;

    // Redirect racine vers la locale du navigateur
    if (cleanPath === '/') {
      const locale = detectBrowserLocale();
      window.history.replaceState({}, '', `${base}${locale}/`);
      this._matchAndRender('/');
      return;
    }

    // Extraire la locale du path (/en/..., /fr/...)
    const localeMatch = cleanPath.match(new RegExp(`^\\/(${SUPPORTED_LOCALES.join('|')})(\\/.*)?\$`));
    if (localeMatch) {
      const rest = localeMatch[2] || '/';
      this._matchAndRender(rest);
      return;
    }

    // Path sans locale connue → 404
    this.render(this.notFoundHandler());
  }

  _matchAndRender(path) {
    if (this.routes[path]) {
      this.render(this.routes[path]());
      return;
    }

    for (const route in this.routes) {
      const params = this.matchRoute(route, path);
      if (params) {
        this.render(this.routes[route](params));
        return;
      }
    }

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
      this._setupMobileMenu();
      this._runTypingAnimations();
      this._setupProjectAccordion();
    }
  }

  _runTypingAnimations() {
    document.querySelectorAll('[data-typing]').forEach(el => {
      const text = el.getAttribute('data-typing');
      if (!text) return;
      el.textContent = '';
      let i = 0;
      const tick = () => {
        if (i < text.length) {
          el.textContent += text[i++];
          setTimeout(tick, 80);
        } else {
          el.classList.add('typing-done');
        }
      };
      setTimeout(tick, 400);
    });
  }

  _setupProjectAccordion() {
    const cards = document.querySelectorAll('.proj:not(.proj--disabled)');
    cards.forEach(card => {
      const toggle = card.querySelector('.proj-toggle');
      if (!toggle) return;
      toggle.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');
        cards.forEach(c => {
          if (c !== card && c.classList.contains('open')) {
            c.classList.remove('open');
            const t = c.querySelector('.proj-toggle');
            if (t) t.setAttribute('aria-expanded', 'false');
          }
        });
        card.classList.toggle('open', !isOpen);
        toggle.setAttribute('aria-expanded', String(!isOpen));
      });
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        cards.forEach(c => {
          if (c.classList.contains('open')) {
            c.classList.remove('open');
            const t = c.querySelector('.proj-toggle');
            if (t) { t.setAttribute('aria-expanded', 'false'); t.focus(); }
          }
        });
      }
    });
  }

  _setupMobileMenu() {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobile-menu');
    if (burger && menu) {
      burger.addEventListener('click', () => {
        const isOpen = burger.classList.contains('is-open');
        burger.classList.toggle('is-open', !isOpen);
        menu.classList.toggle('hidden', isOpen);
        burger.setAttribute('aria-expanded', String(!isOpen));
      });
    }
  }
  /**
   * Démarre le router sur la route actuelle
   */
  start() {
    // Intercepter les clics sur les liens (y compris les éléments enfants)
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-link]');
      if (link) {
        e.preventDefault();
        this.navigate(link.getAttribute('href'));
      }
    });

    // Gérer la route initiale
    this.handleRoute(window.location.pathname);
  }
}

// Exporter une instance unique (Singleton)
export const router = new Router(); 