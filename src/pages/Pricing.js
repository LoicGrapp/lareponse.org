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

          <div class="price-card" role="listitem">
            <p class="price-card-name">${t('pricing.c1.name')}</p>
            <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--mint)]">37 €/h</p>
            <p class="price-card-desc">${t('pricing.c1.desc')}</p>
            <span class="price-card-badge text-[var(--mint)]">${t('pricing.c1.badge')}</span>
          </div>

          <div class="price-card price-card--white" role="listitem">
            <p class="price-card-name">${t('pricing.c2.name')}</p>
            <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--white)]">73 €/h</p>
            <p class="price-card-desc">${t('pricing.c2.desc')}</p>
            <span class="price-card-badge text-[var(--white)]">${t('pricing.c2.badge')}</span>
          </div>

          <div class="price-card" role="listitem">
            <p class="price-card-name">${t('pricing.c3.name')}</p>
            <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--indigo)]">96 €/h</p>
            <p class="price-card-desc">${t('pricing.c3.desc')}</p>
            <span class="price-card-badge text-[var(--indigo)]">${t('pricing.c3.badge')}</span>
          </div>

          <div class="price-card price-card--indigo" role="listitem">
            <p class="price-card-name">${t('pricing.c4.name')}</p>
            <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--indigo)]">127 €/h</p>
            <p class="price-card-desc">${t('pricing.c4.desc')}</p>
            <span class="price-card-badge text-[var(--indigo)]">${t('pricing.c4.badge')}</span>
          </div>

          <div class="price-card price-card--dark" role="listitem">
            <p class="price-card-name">${t('pricing.c5.name')}</p>
            <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--indigo)]">301 €/h</p>
            <p class="price-card-desc">${t('pricing.c5.desc')}</p>
            <span class="price-card-badge text-[var(--indigo)]">${t('pricing.c5.badge')}</span>
          </div>

        </div>

        <hr class="border-t border-[var(--border-subtle)] my-10">

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
          <div class="summary-box">
            <p class="summary-box-label">${t('pricing.box1.label')}</p>
            <p class="font-bebas fs-h2 tracking-[.04em] text-[var(--white)] leading-tight">${t('pricing.box1.text')}</p>
          </div>
          <div class="summary-box">
            <p class="summary-box-label">${t('pricing.box2.label')}</p>
            <p class="font-bebas fs-h2 tracking-[.04em] text-[var(--white)] leading-tight">${t('pricing.box2.text')}</p>
          </div>
        </div>

        <!-- ── MÉTHODE ──────────────────────────────────── -->
        <p id="methode" class="section-label mt-16 mb-6 pb-6 border-t-2 border-[var(--border)] pt-10 anim">
          ${t('pricing.method.eyebrow')}
        </p>
        <h2 class="section-h2 mb-8 anim">${t('pricing.method.heading')}</h2>

        <!-- Steps -->
        <div class="method-grid mb-10 anim" role="list">
          <div class="method-step" role="listitem">
            <p class="step-commit">commit a1b2c3d</p>
            <p class="step-meta">${t('pricing.step1.label')}</p>
            <h3 class="step-title">${t('pricing.step1.title')}</h3>
            <p class="fs-body text-[var(--gray-p)]">${t('pricing.step1.body')}</p>
          </div>
          <div class="method-step" role="listitem">
            <p class="step-commit">commit e4f5a6b</p>
            <p class="step-meta">${t('pricing.step2.label')}</p>
            <h3 class="step-title">${t('pricing.step2.title')}</h3>
            <p class="fs-body text-[var(--gray-p)]">${t('pricing.step2.body')}</p>
          </div>
          <div class="method-step" role="listitem">
            <p class="step-commit">commit c7d8e9f</p>
            <p class="step-meta">${t('pricing.step3.label')}</p>
            <h3 class="step-title">${t('pricing.step3.title')}</h3>
            <p class="fs-body text-[var(--gray-p)]">${t('pricing.step3.body')}</p>
          </div>
          <div class="method-step" role="listitem">
            <p class="step-commit">HEAD</p>
            <p class="step-meta">${t('pricing.step4.label')}</p>
            <h3 class="step-title">${t('pricing.step4.title')}</h3>
            <p class="fs-body text-[var(--gray-p)]">${t('pricing.step4.body')}</p>
          </div>
        </div>

        <!-- ── INCLUS / NON COUVERT ─────────────────────── -->
        <div class="coverage-grid mb-16 anim" id="inclus-exclu">

          <div class="coverage-col coverage-col--inclus">
            <h3 class="coverage-heading text-[var(--mint)]">${t('pricing.inclus.heading')}</h3>
            <ul>
              <li class="inclus-item">${t('pricing.inclus.1')}</li>
              <li class="inclus-item">${t('pricing.inclus.2')}</li>
              <li class="inclus-item">${t('pricing.inclus.3')}</li>
              <li class="inclus-item">${t('pricing.inclus.4')}</li>
            </ul>
          </div>

          <div class="coverage-col coverage-col--exclu">
            <h3 class="coverage-heading text-[var(--indigo)]">${t('pricing.exclu.heading')}</h3>
            <ul>
              <li class="exclu-item">${t('pricing.exclu.1')}</li>
              <li class="exclu-item">${t('pricing.exclu.2')}</li>
              <li class="exclu-item">${t('pricing.exclu.3')}</li>
              <li class="exclu-item">${t('pricing.exclu.4')}</li>
              <li class="exclu-item">${t('pricing.exclu.5')}</li>
              <li class="exclu-item">${t('pricing.exclu.6')}</li>
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
