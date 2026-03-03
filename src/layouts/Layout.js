import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Main } from './Main.js';

/**
 * Layout principal de l'application
 * Assemble Header, Main et Footer
 *
 * @param {Object} props
 * @param {string} props.content - Le contenu de la page
 */
export function Layout(props = {}) {
  const { content = '' } = props;

  return `
    <div class="min-h-dvh flex flex-col">
      ${Header()}
      ${Main({ content })}
      ${Footer()}
    </div>
  `;
}