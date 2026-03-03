/**
 * Page 404 - Route non trouvée
 */
export function NotFoundPage() {
  return `
    <div>
      <h1>404</h1>
      <p>Oups ! Cette page n'existe pas.</p>
      <a href="/" data-link>Retour à l'accueil</a>
    </div>
  `;
}