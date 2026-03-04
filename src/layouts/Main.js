export function Main(props = {}) {
  const { content = '' } = props;

  return `
    <main id="main-content" class="flex-1">
      ${content}
    </main>
  `;
}
