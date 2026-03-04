import { t, localePath } from '../lang.js';

export function ServicesPage() {
  return `
    <div class="px-6 md:px-[10%] py-12">
      <div class="max-w-[72rem] mx-auto">

        <!-- ── PAGE HEADER ─────────────────────────────── -->
        <header class="pb-6 mb-10 border-b-2 border-[var(--indigo)] anim">
          <h1 class="font-bebas leading-none flex items-baseline gap-4">
            <span class="fs-page-num text-[var(--indigo)]">03</span>
            <span class="fs-page-h1 text-[var(--white)]">${t('services.title')}</span>
          </h1>
        </header>

        <!-- ── SERVICE GRID ─────────────────────────────── -->
        <div class="svc-grid anim anim-d1" role="list">

          <article class="svc" role="listitem">
            <p class="svc-id">S&#8211;01</p>
            <h2 class="svc-title">${t('s1.title')}</h2>
            <p class="svc-benefit">${t('s1.benefit')}</p>
          </article>

          <article class="svc" role="listitem">
            <p class="svc-id">S&#8211;02</p>
            <h2 class="svc-title">${t('s2.title')}</h2>
            <p class="svc-benefit">${t('s2.benefit')}</p>
          </article>

          <article class="svc" role="listitem">
            <p class="svc-id">S&#8211;03</p>
            <h2 class="svc-title">${t('s3.title')}</h2>
            <p class="svc-benefit">${t('s3.benefit')}</p>
          </article>

          <article class="svc" role="listitem">
            <p class="svc-id">S&#8211;04</p>
            <h2 class="svc-title">${t('s4.title')}</h2>
            <p class="svc-benefit">${t('s4.benefit')}</p>
          </article>

          <article class="svc" role="listitem">
            <p class="svc-id">S&#8211;05</p>
            <h2 class="svc-title">${t('s5.title')}</h2>
            <p class="svc-benefit">${t('s5.benefit')}</p>
          </article>

          <article class="svc" role="listitem">
            <p class="svc-id">S&#8211;06</p>
            <h2 class="svc-title">${t('s6.title')}</h2>
            <p class="svc-benefit">${t('s6.benefit')}</p>
          </article>

        </div>

        <!-- ── PRICING STRIP ────────────────────────────── -->
        <section class="mt-10 pt-8 border-t-2 border-[var(--indigo)] anim anim-d2" aria-label="${t('services.pricing.label')}">
          <p class="font-fragment fs-label tracking-[.18em] uppercase text-[var(--gray-p)] mb-6">${t('services.pricing.label')}</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">

            <div class="svc-price-card">
              <div class="svc-price-head">
                <span class="svc-price-name">${t('pricing.c1.name')}</span>
                <span class="svc-price-amount">37 €/h</span>
              </div>
              <a href="${localePath('/pricing')}" data-link class="svc-price-link">${t('services.pricing.cta')}</a>
            </div>

            <div class="svc-price-card svc-price-card--featured">
              <div class="svc-price-head">
                <span class="svc-price-name">${t('pricing.c2.name')}</span>
                <span class="svc-price-amount">73 €/h</span>
              </div>
              <a href="${localePath('/pricing')}" data-link class="svc-price-link">${t('services.pricing.cta')}</a>
            </div>

            <div class="svc-price-card">
              <div class="svc-price-head">
                <span class="svc-price-name">${t('pricing.c3.name')}</span>
                <span class="svc-price-amount">96 €/h</span>
              </div>
              <a href="${localePath('/pricing')}" data-link class="svc-price-link">${t('services.pricing.cta')}</a>
            </div>

          </div>
        </section>

        <!-- ── CTA ─────────────────────────────────────── -->
        <div class="text-center mt-12 anim anim-d3">
          <a href="${localePath('/contact')}" data-link class="btn-hero">${t('cta.btn')}</a>
        </div>

      </div>
    </div>
  `;
}
