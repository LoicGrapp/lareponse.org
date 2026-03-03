/**
 * Composant Main - Conteneur du contenu principal
 * @param {Object} props
 * @param {string} props.content - Le contenu HTML à afficher
 */
export function Main(props = {}) {
  const { content = '' } = props;

  return `
    <main class="h-dvh overflow-y-scroll" id="scroll-container" id="scroll-container">
      ${content}
    </main>
  `;
}