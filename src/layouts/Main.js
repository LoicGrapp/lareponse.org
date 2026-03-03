export function Main(props = {}) {
  const { content = '' } = props;

  return `
    <main class="flex-1">
      ${content}
    </main>
  `;
}
