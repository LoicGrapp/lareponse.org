/**
 * Composant Main - Conteneur du contenu principal
 * @param {Object} props
 * @param {string} props.content - Le contenu HTML à afficher
 */
export function Main(props = {}) {
  const { content = '' } = props;

  return `
    <main class="main" id="main-content">
      <div class="main__container">
        ${content}
      </div>
    </main>
  `;
}