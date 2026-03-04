import { t, localePath } from '../lang.js';

const BASE = import.meta.env.BASE_URL;

export function Projects() {
  return `
    <div class="px-6 md:px-[10%] py-12">
      <div class="max-w-[72rem] mx-auto">

        <!-- ── PAGE HEADER ─────────────────────────────── -->
        <header class="pb-6 mb-10 border-b-2 border-[var(--indigo)] anim">
          <h1 class="font-bebas leading-none flex items-baseline gap-4">
            <span class="fs-page-num text-[var(--indigo)]">05</span>
            <span class="fs-page-h1 text-[var(--white)]">${t('projects.title')}</span>
          </h1>
        </header>

        <!-- ── INTRO ────────────────────────────────────── -->
        <p class="fs-body text-[var(--gray-p)] max-w-[44rem] mb-10 border-l-[3px] border-[var(--border)] pl-5 anim anim-d1">
          ${t('projects.intro')}
        </p>

        <!-- ── GRID ─────────────────────────────────────── -->
        <div class="proj-grid anim anim-d2" role="list">

          <!-- Dashbored -->
          <article class="proj" role="listitem" data-proj="dashbored">
            <div class="proj-hero">
              <img class="proj-hero-img" src="${BASE}dashbored-projects.webp" alt="Dashbored" loading="lazy">
            </div>
            <div class="proj-title-bar">
              <div class="proj-title-left">
                <h2 class="proj-name">Dashbored</h2>
                <span class="proj-tag proj-tag--yellow">${t('projects.tag.concept')}</span>
              </div>
            </div>
            <div class="proj-expand" id="expand-dashbored">
              <div class="proj-expand-inner">
                <p class="proj-etym">${t('projects.dashbored.etym')}</p>
                <div class="proj-body">
                  <div class="proj-row"><strong>${t('projects.why')}</strong><p>${t('projects.dashbored.why')}</p></div>
                  <div class="proj-row"><strong>${t('projects.forwhom')}</strong><p>${t('projects.dashbored.forwhom')}</p></div>
                  <div class="proj-row"><strong>${t('projects.what')}</strong><p>${t('projects.dashbored.what')}</p></div>
                </div>
              </div>
            </div>
            <button class="proj-toggle" aria-expanded="false" aria-controls="expand-dashbored">
              <span>${t('projects.see')}</span>
              <span class="proj-toggle-icon" aria-hidden="true">▾</span>
            </button>
          </article>

          <!-- DunDun -->
          <article class="proj" role="listitem" data-proj="dundun">
            <div class="proj-hero">
              <img class="proj-hero-img" src="${BASE}dundun-projects.webp" alt="DunDun" loading="lazy">
            </div>
            <div class="proj-title-bar">
              <div class="proj-title-left">
                <h2 class="proj-name">DunDun</h2>
                <span class="proj-tag proj-tag--yellow">${t('projects.tag.mvp')}</span>
              </div>
            </div>
            <div class="proj-expand" id="expand-dundun">
              <div class="proj-expand-inner">
                <p class="proj-etym">${t('projects.dundun.etym')}</p>
                <div class="proj-body">
                  <div class="proj-row"><strong>${t('projects.why')}</strong><p>${t('projects.dundun.why')}</p></div>
                  <div class="proj-row"><strong>${t('projects.forwhom')}</strong><p>${t('projects.dundun.forwhom')}</p></div>
                  <div class="proj-row"><strong>${t('projects.what')}</strong><p>${t('projects.dundun.what')}</p></div>
                </div>
              </div>
            </div>
            <button class="proj-toggle" aria-expanded="false" aria-controls="expand-dundun">
              <span>${t('projects.see')}</span>
              <span class="proj-toggle-icon" aria-hidden="true">▾</span>
            </button>
          </article>

          <!-- tenpoken -->
          <article class="proj" role="listitem" data-proj="tenpoken">
            <div class="proj-hero">
              <img class="proj-hero-img" src="${BASE}tenpoken-projects.webp" alt="tenpoken" loading="lazy">
            </div>
            <div class="proj-title-bar">
              <div class="proj-title-left">
                <h2 class="proj-name">tenpoken</h2>
                <span class="proj-tag">${t('projects.tag.identity')}</span>
              </div>
            </div>
            <div class="proj-expand" id="expand-tenpoken">
              <div class="proj-expand-inner">
                <p class="proj-etym">${t('projects.tenpoken.etym')}</p>
                <div class="proj-body">
                  <div class="proj-row"><strong>${t('projects.why')}</strong><p>${t('projects.tenpoken.why')}</p></div>
                  <div class="proj-row"><strong>${t('projects.forwhom')}</strong><p>${t('projects.tenpoken.forwhom')}</p></div>
                  <div class="proj-row"><strong>${t('projects.what')}</strong><p>${t('projects.tenpoken.what')}</p></div>
                </div>
              </div>
            </div>
            <button class="proj-toggle" aria-expanded="false" aria-controls="expand-tenpoken">
              <span>${t('projects.see')}</span>
              <span class="proj-toggle-icon" aria-hidden="true">▾</span>
            </button>
          </article>

          <!-- JDAD -->
          <article class="proj" role="listitem" data-proj="jdad">
            <div class="proj-hero">
              <img class="proj-hero-img" src="${BASE}jdad-projects.webp" alt="JDAD" loading="lazy">
            </div>
            <div class="proj-title-bar">
              <div class="proj-title-left">
                <h2 class="proj-name">JDAD</h2>
                <span class="proj-tag proj-tag--yellow">${t('projects.tag.draft')}</span>
              </div>
            </div>
            <div class="proj-expand" id="expand-jdad">
              <div class="proj-expand-inner">
                <p class="proj-etym">${t('projects.jdad.etym')}</p>
                <div class="proj-body">
                  <div class="proj-row"><strong>${t('projects.why')}</strong><p>${t('projects.jdad.why')}</p></div>
                  <div class="proj-row"><strong>${t('projects.forwhom')}</strong><p>${t('projects.jdad.forwhom')}</p></div>
                  <div class="proj-row"><strong>${t('projects.what')}</strong><p>${t('projects.jdad.what')}</p></div>
                </div>
              </div>
            </div>
            <button class="proj-toggle" aria-expanded="false" aria-controls="expand-jdad">
              <span>${t('projects.see')}</span>
              <span class="proj-toggle-icon" aria-hidden="true">▾</span>
            </button>
          </article>

          <!-- KORAL -->
          <article class="proj" role="listitem" data-proj="koral">
            <div class="proj-hero">
              <img class="proj-hero-img" src="${BASE}koral-projects.webp" alt="KORAL" loading="lazy">
            </div>
            <div class="proj-title-bar">
              <div class="proj-title-left">
                <h2 class="proj-name">KORAL</h2>
                <span class="proj-tag proj-tag--green">${t('projects.tag.production')}</span>
              </div>
            </div>
            <div class="proj-expand" id="expand-koral">
              <div class="proj-expand-inner">
                <p class="proj-etym">${t('projects.koral.etym')}</p>
                <div class="proj-body">
                  <div class="proj-row"><strong>${t('projects.why')}</strong><p>${t('projects.koral.why')}</p></div>
                  <div class="proj-row"><strong>${t('projects.forwhom')}</strong><p>${t('projects.koral.forwhom')}</p></div>
                  <div class="proj-row"><strong>${t('projects.what')}</strong><p>${t('projects.koral.what')}</p></div>
                </div>
              </div>
            </div>
            <button class="proj-toggle" aria-expanded="false" aria-controls="expand-koral">
              <span>${t('projects.see')}</span>
              <span class="proj-toggle-icon" aria-hidden="true">▾</span>
            </button>
          </article>

          <!-- BADHAT — disabled -->
          <article class="proj proj--disabled" role="listitem" data-proj="badhat" aria-disabled="true">
            <div class="proj-hero" data-wip="${t('projects.wip')}">
              <div class="proj-hero-gradient proj-gradient-badhat"></div>
            </div>
            <div class="proj-title-bar">
              <div class="proj-title-left">
                <h2 class="proj-name">BADHAT</h2>
                <span class="proj-tag">${t('projects.tag.wip')}</span>
              </div>
            </div>
            <div class="proj-expand" id="expand-badhat">
              <div class="proj-expand-inner">
                <p class="proj-etym">${t('projects.badhat.etym')}</p>
                <div class="proj-body">
                  <div class="proj-row"><strong>${t('projects.why')}</strong><p>${t('projects.badhat.why')}</p></div>
                  <div class="proj-row"><strong>${t('projects.forwhom')}</strong><p>${t('projects.badhat.forwhom')}</p></div>
                  <div class="proj-row"><strong>${t('projects.what')}</strong><p>${t('projects.badhat.what')}</p></div>
                </div>
              </div>
            </div>
            <button class="proj-toggle" aria-expanded="false" aria-controls="expand-badhat" tabindex="-1">
              <span>${t('projects.soon')}</span>
            </button>
          </article>

        </div>

        <!-- ── CTAs ──────────────────────────────────────── -->
        <div class="flex flex-wrap gap-4 mt-12 anim anim-d3">
          <a href="${localePath('/contact')}" data-link class="btn-hero">${t('cta.btn')}</a>
          <a href="${localePath('/pricing')}#methode" data-link class="btn-outline">${t('projects.cta.method')}</a>
        </div>

      </div>
    </div>
  `;
}
