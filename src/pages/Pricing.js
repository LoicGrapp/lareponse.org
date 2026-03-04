import { t, localePath } from '../lang.js';

export function Pricing() {
  return `
    <div class="px-6 md:px-[10%] py-12">
      <div class="max-w-[72rem] mx-auto">

        <!-- ── PAGE HEADER ─────────────────────────────── -->
        <header class="pb-6 mb-10 border-b-2 border-[var(--indigo)] anim">
          <h1 class="font-bebas leading-none flex items-baseline gap-4">
            <span class="fs-page-num text-[var(--indigo)]">04</span>
            <span class="fs-page-h1 text-[var(--white)]">${t('pricing.title')}</span>
          </h1>
        </header>

        <!-- ── NOTE ────────────────────────────────────── -->
        <p class="font-fragment fs-body border-l-[3px] border-[var(--indigo)] pl-5 pr-4 py-3 mb-10 bg-[var(--bg-2)] text-[var(--indigo)] inline-block max-w-[44rem] anim anim-d1">
          ${t('pricing.note')}
        </p>

        <!-- ── TARIF CARDS ──────────────────────────────── -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10 anim anim-d2" role="list" aria-label="${t('pricing.grid.label')}">

          <!-- Coup de pouce -->
          <div class="flex flex-col gap-2 border border-[#2a2a2a] bg-[var(--bg-2)] p-6 hover:bg-[var(--bg-3)] transition-colors" role="listitem">
            <p class="font-fragment fs-label tracking-[.18em] uppercase text-[var(--gray-p)]">${t('pricing.c1.name')}</p>
            <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--mint)]">37 €/h</p>
            <p class="fs-body text-[var(--gray-p)] leading-snug">${t('pricing.c1.desc')}</p>
            <div class="mt-auto pt-3">
              <span class="font-fragment fs-xs tracking-[.12em] uppercase text-[var(--mint)] border border-[var(--mint)] px-3 py-1">${t('pricing.c1.badge')}</span>
            </div>
          </div>

          <!-- Standard (featured) -->
          <div class="flex flex-col gap-2 border-2 border-[var(--white)] bg-[var(--bg-3)] p-6 hover:bg-[#222] transition-colors" role="listitem">
            <p class="font-fragment fs-label tracking-[.18em] uppercase text-[var(--gray-p)]">${t('pricing.c2.name')}</p>
            <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--white)]">73 €/h</p>
            <p class="fs-body text-[var(--gray-p)] leading-snug">${t('pricing.c2.desc')}</p>
            <div class="mt-auto pt-3">
              <span class="font-fragment fs-xs tracking-[.12em] uppercase text-[var(--white)] border border-[var(--white)] px-3 py-1">${t('pricing.c2.badge')}</span>
            </div>
          </div>

          <!-- Étendu -->
          <div class="flex flex-col gap-2 border border-[#2a2a2a] bg-[var(--bg-2)] p-6 hover:bg-[var(--bg-3)] transition-colors" role="listitem">
            <p class="font-fragment fs-label tracking-[.18em] uppercase text-[var(--gray-p)]">${t('pricing.c3.name')}</p>
            <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--indigo)]">96 €/h</p>
            <p class="fs-body text-[var(--gray-p)] leading-snug">${t('pricing.c3.desc')}</p>
            <div class="mt-auto pt-3">
              <span class="font-fragment fs-xs tracking-[.12em] uppercase text-[var(--indigo)] border border-[var(--indigo)] px-3 py-1">${t('pricing.c3.badge')}</span>
            </div>
          </div>

          <!-- Urgence -->
          <div class="flex flex-col gap-2 border-2 border-[var(--indigo)] bg-[var(--bg-2)] p-6 hover:bg-[var(--bg-3)] transition-colors" role="listitem">
            <p class="font-fragment fs-label tracking-[.18em] uppercase text-[var(--gray-p)]">${t('pricing.c4.name')}</p>
            <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--indigo)]">127 €/h</p>
            <p class="fs-body text-[var(--gray-p)] leading-snug">${t('pricing.c4.desc')}</p>
            <div class="mt-auto pt-3">
              <span class="font-fragment fs-xs tracking-[.12em] uppercase text-[var(--indigo)] border border-[var(--indigo)] px-3 py-1">${t('pricing.c4.badge')}</span>
            </div>
          </div>

          <!-- Vacances -->
          <div class="flex flex-col gap-2 border border-[#333] bg-[var(--black)] p-6 hover:bg-[var(--bg-2)] transition-colors" role="listitem">
            <p class="font-fragment fs-label tracking-[.18em] uppercase text-[var(--gray-p)]">${t('pricing.c5.name')}</p>
            <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--indigo)]">301 €/h</p>
            <p class="fs-body text-[var(--gray-p)] leading-snug max-w-[36rem]">${t('pricing.c5.desc')}</p>
            <div class="mt-auto pt-3">
              <span class="font-fragment fs-xs tracking-[.12em] uppercase text-[var(--indigo)] border border-[var(--indigo)] px-3 py-1">${t('pricing.c5.badge')}</span>
            </div>
          </div>

        </div>

        <hr class="border-none border-t border-[#1e1e1e] my-10">

        <!-- ── PROJETS GÉNÉRATEURS DE REVENUS ──────────── -->
        <div class="border-2 border-[var(--indigo)] max-w-[48rem] bg-[var(--bg-2)] mb-10 anim anim-d3">
          <div class="bg-[var(--indigo)] px-6 py-4 font-bebas fs-card-title tracking-[.04em] text-[var(--black)] flex items-center gap-2">
            € ${t('pricing.revenue.title')}
          </div>
          <div class="p-8 flex flex-col gap-4">
            <p class="fs-body text-[var(--gray-p)]">${t('pricing.revenue.intro')}</p>
            <span class="font-bebas text-[18px] tracking-[.04em] text-[var(--indigo)] border border-[var(--indigo)] px-4 py-2 inline-block">
              ${t('pricing.revenue.rule')}
            </span>
            <p class="fs-body text-[var(--gray-p)]">${t('pricing.revenue.body')}</p>
          </div>
        </div>

        <!-- ── SUMMARY BOXES ────────────────────────────── -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[44rem] mb-16 anim">
          <div class="border border-[#2a2a2a] bg-[var(--bg-2)] p-6">
            <p class="font-fragment fs-label tracking-[.18em] uppercase text-[var(--indigo)] mb-2">${t('pricing.box1.label')}</p>
            <p class="font-bebas fs-h2 tracking-[.04em] text-[var(--white)] leading-tight">${t('pricing.box1.text')}</p>
          </div>
          <div class="border border-[#2a2a2a] bg-[var(--bg-2)] p-6">
            <p class="font-fragment fs-label tracking-[.18em] uppercase text-[var(--indigo)] mb-2">${t('pricing.box2.label')}</p>
            <p class="font-bebas fs-h2 tracking-[.04em] text-[var(--white)] leading-tight">${t('pricing.box2.text')}</p>
          </div>
        </div>

        <!-- ── MÉTHODE ──────────────────────────────────── -->
        <p class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] flex items-center gap-3 mt-16 mb-6 pb-6 border-t-2 border-[#2e2e2e] pt-10 anim">
          <span class="block w-8 h-px bg-[var(--indigo)]"></span>
          ${t('pricing.method.eyebrow')}
        </p>

        <h2 class="font-bebas fs-h2 tracking-[.04em] text-[var(--white)] mb-8 anim">
          ${t('pricing.method.heading')}
        </h2>

        <!-- Steps -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-[#2e2e2e] mb-10 shadow-[5px_5px_0_var(--indigo)] anim" role="list">

          <div class="p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-[#2e2e2e] bg-[var(--bg-2)] hover:bg-[var(--bg-3)] transition-colors" role="listitem">
            <p class="font-fragment fs-xs text-[var(--indigo)] mb-2 tracking-[.05em]">commit a1b2c3d</p>
            <p class="font-fragment fs-xs tracking-[.2em] uppercase text-[var(--gray-p)] opacity-60 mb-2">${t('pricing.step1.label')}</p>
            <h3 class="font-bebas fs-card-title tracking-[.04em] text-[var(--white)] mb-3">${t('pricing.step1.title')}</h3>
            <p class="fs-body text-[var(--gray-p)]">${t('pricing.step1.body')}</p>
          </div>

          <div class="p-8 border-b-2 sm:border-r-2 lg:border-b-0 border-[#2e2e2e] bg-[var(--bg-2)] hover:bg-[var(--bg-3)] transition-colors" role="listitem">
            <p class="font-fragment fs-xs text-[var(--indigo)] mb-2 tracking-[.05em]">commit e4f5a6b</p>
            <p class="font-fragment fs-xs tracking-[.2em] uppercase text-[var(--gray-p)] opacity-60 mb-2">${t('pricing.step2.label')}</p>
            <h3 class="font-bebas fs-card-title tracking-[.04em] text-[var(--white)] mb-3">${t('pricing.step2.title')}</h3>
            <p class="fs-body text-[var(--gray-p)]">${t('pricing.step2.body')}</p>
          </div>

          <div class="p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-[#2e2e2e] bg-[var(--bg-2)] hover:bg-[var(--bg-3)] transition-colors" role="listitem">
            <p class="font-fragment fs-xs text-[var(--indigo)] mb-2 tracking-[.05em]">commit c7d8e9f</p>
            <p class="font-fragment fs-xs tracking-[.2em] uppercase text-[var(--gray-p)] opacity-60 mb-2">${t('pricing.step3.label')}</p>
            <h3 class="font-bebas fs-card-title tracking-[.04em] text-[var(--white)] mb-3">${t('pricing.step3.title')}</h3>
            <p class="fs-body text-[var(--gray-p)]">${t('pricing.step3.body')}</p>
          </div>

          <div class="p-8 bg-[var(--bg-2)] hover:bg-[var(--bg-3)] transition-colors" role="listitem">
            <p class="font-fragment fs-xs text-[var(--indigo)] mb-2 tracking-[.05em]">HEAD</p>
            <p class="font-fragment fs-xs tracking-[.2em] uppercase text-[var(--gray-p)] opacity-60 mb-2">${t('pricing.step4.label')}</p>
            <h3 class="font-bebas fs-card-title tracking-[.04em] text-[var(--white)] mb-3">${t('pricing.step4.title')}</h3>
            <p class="fs-body text-[var(--gray-p)]">${t('pricing.step4.body')}</p>
          </div>

        </div>

        <!-- ── INCLUS / NON COUVERT ─────────────────────── -->
        <div class="grid grid-cols-1 sm:grid-cols-2 border-2 border-[#2e2e2e] mb-16 anim" id="inclus-exclu">

          <div class="p-8 sm:border-r-2 border-[#2e2e2e] bg-[var(--bg-2)]">
            <h3 class="font-bebas fs-h2 tracking-[.04em] text-[var(--mint)] mb-6 pb-4 border-b border-[#2e2e2e] flex items-center gap-2">
              ${t('pricing.inclus.heading')}
            </h3>
            <ul class="flex flex-col">
              <li class="flex gap-3 items-start py-3 border-b border-[#1a1a1a] fs-body text-[var(--gray-p)]"><span class="text-[var(--mint)] font-bold shrink-0">+</span> ${t('pricing.inclus.1')}</li>
              <li class="flex gap-3 items-start py-3 border-b border-[#1a1a1a] fs-body text-[var(--gray-p)]"><span class="text-[var(--mint)] font-bold shrink-0">+</span> ${t('pricing.inclus.2')}</li>
              <li class="flex gap-3 items-start py-3 border-b border-[#1a1a1a] fs-body text-[var(--gray-p)]"><span class="text-[var(--mint)] font-bold shrink-0">+</span> ${t('pricing.inclus.3')}</li>
              <li class="flex gap-3 items-start py-3 fs-body text-[var(--gray-p)]"><span class="text-[var(--mint)] font-bold shrink-0">+</span> ${t('pricing.inclus.4')}</li>
            </ul>
          </div>

          <div class="p-8 bg-[var(--black)]">
            <h3 class="font-bebas fs-h2 tracking-[.04em] text-[var(--indigo)] mb-6 pb-4 border-b border-[#2e2e2e] flex items-center gap-2">
              ${t('pricing.exclu.heading')}
            </h3>
            <ul class="flex flex-col">
              <li class="flex gap-3 items-start py-3 border-b border-[#1a1a1a] fs-body text-[var(--gray-p)]"><span class="text-[var(--indigo)] font-bold shrink-0">×</span> ${t('pricing.exclu.1')}</li>
              <li class="flex gap-3 items-start py-3 border-b border-[#1a1a1a] fs-body text-[var(--gray-p)]"><span class="text-[var(--indigo)] font-bold shrink-0">×</span> ${t('pricing.exclu.2')}</li>
              <li class="flex gap-3 items-start py-3 border-b border-[#1a1a1a] fs-body text-[var(--gray-p)]"><span class="text-[var(--indigo)] font-bold shrink-0">×</span> ${t('pricing.exclu.3')}</li>
              <li class="flex gap-3 items-start py-3 border-b border-[#1a1a1a] fs-body text-[var(--gray-p)]"><span class="text-[var(--indigo)] font-bold shrink-0">×</span> ${t('pricing.exclu.4')}</li>
              <li class="flex gap-3 items-start py-3 border-b border-[#1a1a1a] fs-body text-[var(--gray-p)]"><span class="text-[var(--indigo)] font-bold shrink-0">×</span> ${t('pricing.exclu.5')}</li>
              <li class="flex gap-3 items-start py-3 fs-body text-[var(--gray-p)]"><span class="text-[var(--indigo)] font-bold shrink-0">×</span> ${t('pricing.exclu.6')}</li>
            </ul>
          </div>

        </div>

        <!-- ── CTA ─────────────────────────────────────── -->
        <div class="text-center py-8 anim">
          <a href="${localePath('/contact')}" data-link class="btn-hero">${t('cta.btn')}</a>
        </div>

      </div>
    </div>
  `;
}
