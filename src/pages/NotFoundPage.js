export function NotFoundPage() {
  return `
    <div class="px-6 md:px-[10%] py-[clamp(4rem,12vw,8rem)] flex flex-col items-start max-w-[72rem] mx-auto">

      <h1 class="font-bebas fs-h1 text-outlined leading-none mb-6 anim">404</h1>

      <p class="font-mono-space fs-body text-[var(--gray-p)] border-l-[3px] border-[var(--indigo)] pl-5 mb-10 max-w-[36ch] anim anim-d1">
        Oups&nbsp;! Cette page n'existe pas.
      </p>

      <a href="/" data-link class="btn-outline anim anim-d2">Retour à l'accueil</a>

    </div>
  `;
}