import { t, localePath } from '../lang.js';

export function About() {
  return `
    <div class="px-6 md:px-[10%] py-12">
      <div class="max-w-[72rem] mx-auto">

        <!-- ── PAGE HEADER ─────────────────────────────── -->
        <header class="pb-6 mb-10 border-b-2 border-[var(--indigo)] anim">
          <h1 class="font-bebas leading-none flex items-baseline gap-4">
            <span class="fs-page-num text-[var(--indigo)]">02</span>
            <span class="fs-page-h1 text-[var(--white)]">${t('about.title')}</span>
          </h1>
        </header>

        <!-- ── QUI ─────────────────────────────────────── -->
        <section class="mb-14 anim anim-d1" aria-labelledby="qui-heading">
          <p class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] flex items-center gap-3 mb-3">
            <span class="block w-6 h-px bg-[var(--indigo)] flex-shrink-0"></span>
            ${t('about.qui.label')}
          </p>
          <h2 class="fs-h2 font-bebas tracking-[.04em] mb-4 text-[var(--white)]" id="qui-heading">${t('about.qui.heading')}</h2>
          <div class="fs-body text-[var(--gray-p)] max-w-[48rem]">
            <p>${t('about.qui.p1')}</p>
            <p class="mt-3">${t('about.qui.p2')}</p>
            <p class="mt-3">${t('about.qui.refuse')}</p>
            <ul class="mt-2 flex flex-col">
              <li class="flex items-start gap-2 py-1"><span class="text-[var(--indigo)] font-bold shrink-0">—</span>${t('about.qui.li1')}</li>
              <li class="flex items-start gap-2 py-1"><span class="text-[var(--indigo)] font-bold shrink-0">—</span>${t('about.qui.li2')}</li>
              <li class="flex items-start gap-2 py-1"><span class="text-[var(--indigo)] font-bold shrink-0">—</span>${t('about.qui.li3')}</li>
            </ul>
            <p class="mt-3">${t('about.qui.p3')}</p>
          </div>
        </section>

        <!-- ── QUOI ─────────────────────────────────────── -->
        <section class="mb-14 anim anim-d1" aria-labelledby="quoi-heading">
          <p class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] flex items-center gap-3 mb-3">
            <span class="block w-6 h-px bg-[var(--indigo)] flex-shrink-0"></span>
            ${t('about.quoi.label')}
          </p>
          <h2 class="fs-h2 font-bebas tracking-[.04em] mb-4 text-[var(--white)]" id="quoi-heading">${t('about.quoi.heading')}</h2>
          <div class="fs-body text-[var(--gray-p)] max-w-[48rem]">
            <p>${t('about.quoi.intro')}</p>
            <ul class="mt-2 flex flex-col">
              <li class="flex items-start gap-2 py-1"><span class="text-[var(--indigo)] font-bold shrink-0">—</span>${t('about.quoi.li1')}</li>
              <li class="flex items-start gap-2 py-1"><span class="text-[var(--indigo)] font-bold shrink-0">—</span>${t('about.quoi.li2')}</li>
              <li class="flex items-start gap-2 py-1"><span class="text-[var(--indigo)] font-bold shrink-0">—</span>${t('about.quoi.li3')}</li>
            </ul>
            <p class="mt-3">${t('about.quoi.p2')}</p>
          </div>
        </section>

        <!-- ── COMMENT ──────────────────────────────────── -->
        <section class="mb-14 anim anim-d2" aria-labelledby="comment-heading">
          <p class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] flex items-center gap-3 mb-3">
            <span class="block w-6 h-px bg-[var(--indigo)] flex-shrink-0"></span>
            ${t('about.comment.label')}
          </p>
          <h2 class="fs-h2 font-bebas tracking-[.04em] mb-4 text-[var(--white)]" id="comment-heading">${t('about.comment.heading')}</h2>
          <div class="fs-body text-[var(--gray-p)] max-w-[48rem]">
            <p>${t('about.comment.intro')}</p>
            <ul class="mt-2 flex flex-col">
              <li class="flex items-start gap-2 py-1"><span class="text-[var(--indigo)] font-bold shrink-0">—</span>${t('about.comment.li1')}</li>
              <li class="flex items-start gap-2 py-1"><span class="text-[var(--indigo)] font-bold shrink-0">—</span>${t('about.comment.li2')}</li>
              <li class="flex items-start gap-2 py-1"><span class="text-[var(--indigo)] font-bold shrink-0">—</span>${t('about.comment.li3')}</li>
            </ul>
            <p class="mt-3">${t('about.comment.p2')}</p>
            <ul class="mt-2 flex flex-col">
              <li class="flex items-start gap-2 py-1"><span class="text-[var(--indigo)] font-bold shrink-0">—</span>${t('about.comment.li4')}</li>
              <li class="flex items-start gap-2 py-1"><span class="text-[var(--indigo)] font-bold shrink-0">—</span>${t('about.comment.li5')}</li>
              <li class="flex items-start gap-2 py-1"><span class="text-[var(--indigo)] font-bold shrink-0">—</span>${t('about.comment.li6')}</li>
            </ul>
            <p class="mt-3">${t('about.comment.p3')}</p>
          </div>
        </section>

        <!-- ── POUR QUI ──────────────────────────────────── -->
        <section class="mb-14 anim anim-d2" aria-labelledby="pour-qui-heading">
          <p class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] flex items-center gap-3 mb-3">
            <span class="block w-6 h-px bg-[var(--indigo)] flex-shrink-0"></span>
            ${t('about.pourqui.label')}
          </p>
          <h2 class="fs-h2 font-bebas tracking-[.04em] mb-4 text-[var(--white)]" id="pour-qui-heading">${t('about.pourqui.heading')}</h2>
          <p class="fs-body text-[var(--gray-p)] max-w-[48rem]">${t('about.pourqui.body')}</p>
        </section>

        <!-- ── VALEURS / MANIFESTE ──────────────────────── -->
        <section class="mb-14 anim anim-d3" aria-labelledby="valeurs-heading">
          <p class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] flex items-center gap-3 mb-3">
            <span class="block w-6 h-px bg-[var(--indigo)] flex-shrink-0"></span>
            ${t('about.valeurs.label')}
          </p>
          <h2 class="fs-h2 font-bebas tracking-[.04em] mb-8 text-[var(--white)]" id="valeurs-heading">${t('about.valeurs.heading')}</h2>

          <!-- Rule block -->
          <div class="relative border-2 border-[var(--indigo)] p-10 mb-10 max-w-[48rem] bg-[var(--bg-2)]" role="note">
            <span class="absolute top-0 left-10 -translate-y-1/2 font-fragment fs-label tracking-[.25em] uppercase bg-[var(--indigo)] text-[var(--black)] px-3 py-1">
              ${t('about.rule.label')}
            </span>
            <p class="font-bebas text-[clamp(1.6rem,4.5vw,3rem)] leading-[1.06] tracking-[.03em] text-[var(--white)]">
              ${t('about.rule.text')}
            </p>
          </div>

          <!-- Axioms grid -->
          <div class="axioms-grid max-w-[58rem]" role="list" aria-label="${t('about.axioms.label')}">

            <div class="axiom-cell" role="listitem">
              <span class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] mb-2 block">${t('about.axiom1.num')}</span>
              <p class="fs-body text-[var(--gray-p)]">${t('about.axiom1.text')}</p>
            </div>
            <div class="axiom-cell" role="listitem">
              <span class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] mb-2 block">${t('about.axiom2.num')}</span>
              <p class="fs-body text-[var(--gray-p)]">${t('about.axiom2.text')}</p>
            </div>
            <div class="axiom-cell" role="listitem">
              <span class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] mb-2 block">${t('about.axiom3.num')}</span>
              <p class="fs-body text-[var(--gray-p)]">${t('about.axiom3.text')}</p>
            </div>
            <div class="axiom-cell" role="listitem">
              <span class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] mb-2 block">${t('about.axiom4.num')}</span>
              <p class="fs-body text-[var(--gray-p)]">${t('about.axiom4.text')}</p>
            </div>
            <div class="axiom-cell" role="listitem">
              <span class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] mb-2 block">${t('about.axiom5.num')}</span>
              <p class="fs-body text-[var(--gray-p)]">${t('about.axiom5.text')}</p>
            </div>
            <div class="axiom-cell" role="listitem">
              <span class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] mb-2 block">${t('about.axiom6.num')}</span>
              <p class="fs-body text-[var(--gray-p)]">${t('about.axiom6.text')}</p>
            </div>
            <div class="axiom-cell" role="listitem">
              <span class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] mb-2 block">${t('about.axiom7.num')}</span>
              <p class="fs-body text-[var(--gray-p)]">${t('about.axiom7.text')}</p>
            </div>
            <div class="axiom-cell" role="listitem">
              <span class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] mb-2 block">${t('about.axiom8.num')}</span>
              <p class="fs-body text-[var(--gray-p)]">${t('about.axiom8.text')}</p>
            </div>
            <div class="axiom-cell axiom-conclusion" role="listitem">
              <span class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo-light)] mb-2 block">${t('about.conclusion.num')}</span>
              <p class="font-bebas text-[clamp(1.1rem,2.5vw,1.6rem)] tracking-[.04em] leading-[1.2] text-[var(--white)]">${t('about.conclusion.text')}</p>
            </div>

          </div>
        </section>

        <!-- ── CTAs ──────────────────────────────────────── -->
        <div class="flex flex-wrap gap-4 mt-14 anim anim-d4">
          <a href="${localePath('/contact')}" data-link class="btn-hero">${t('cta.btn')}</a>
          <a href="${localePath('/pricing')}" data-link class="btn-outline">${t('about.cta.pricing')}</a>
        </div>

      </div>
    </div>
  `;
}
