import { t, localePath } from '../lang.js';

export function HomePage() {
  return `

    <!-- ── HERO ──────────────────────────────────────────── -->
    <section class="relative overflow-hidden py-[clamp(3rem,8vw,6rem)] px-6 md:px-[10%] border-b-2 border-[var(--bg-3)] anim">

      <div aria-hidden="true" class="absolute right-[5%] inset-y-0 flex items-center pointer-events-none select-none">
        <svg class="h-3/4 w-auto opacity-[.06] text-[var(--indigo)]" viewBox="0 0 162 290" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M152.547 36.5597C161.215 52.4275 164.4 68.6422 159.25 86.258C155.84 97.9313 149.767 107.843 142.126 117.025C130.583 130.897 115.414 140.957 103.317 154.257C88.332 170.733 81.0514 189.809 83.0293 212.191C83.205 214.178 84.3628 216.048 83.2635 218.3C82.3129 215.147 81.1551 212.038 80.4567 208.83C79.5286 204.564 79.0421 200.207 78.2041 195.918C77.0597 190.065 77.7535 184.272 78.5735 178.487C81.2767 159.348 90.7919 143.507 102.524 128.685C110.796 118.232 118.725 107.433 124.082 95.1831C129.029 83.8702 131.281 71.9311 130.403 59.3341C129.835 51.148 127.875 43.4799 124.433 36.2759C120.419 27.8824 114.458 20.8316 106.502 15.7856C92.6436 7.00021 77.6679 4.58085 61.5478 7.63096C48.8428 10.0323 37.9174 15.3801 29.3798 25.1612C24.915 30.2748 21.8288 36.1767 21.3558 43.0969C20.7701 51.63 26.181 59.2711 35.4214 59.3386C41.1252 59.3792 45.7251 64.1143 46.5856 69.8C47.6849 77.0897 46.6802 83.5413 41.0215 88.763C35.89 93.5026 29.7492 95.3768 22.9642 94.6109C7.89386 92.9124 0.969157 82.2978 0.0951228 68.8764C-0.69331 56.8067 3.48762 46.0119 10.106 36.0821C18.6976 23.1879 30.7224 14.1862 44.5447 8.05897C62.084 0.282767 80.4838 -2.04199 99.6584 1.85512C109.187 3.79241 118.085 6.91912 126.465 11.5596C137.224 17.5157 145.906 25.819 152.547 36.5597Z"/>
          <path d="M49.8024 202.045C45.1709 193.494 42.319 184.704 42.3731 175.139C42.4406 163.75 46.2206 153.613 52.5281 144.233C58.5382 135.29 66.2378 128.027 74.2843 121.017C86.4127 110.452 99.5457 100.968 109.822 88.3757C110.417 87.6503 111.255 87.1232 112.291 86.7402C110.899 90.5788 108.083 93.4667 105.632 96.5619C95.9235 108.812 86.228 121.084 78.5734 134.767C73.8293 143.246 70.2341 152.329 68.2021 161.799C66.0891 171.666 65.5485 181.695 67.0308 191.868C69.7295 210.349 77.83 226.324 88.5933 241.201C89.1655 241.989 89.7466 242.769 90.2963 243.571C90.4224 243.751 90.427 244.017 90.1656 244.548C75.2169 231.952 60.2503 219.373 49.8024 202.045Z"/>
          <path d="M71.2027 253.793C78.7041 251.288 85.6783 251.477 91.6028 256.74C96.9281 261.47 99.1763 267.575 97.5904 274.734C95.7658 282.983 90.9225 288.426 82.403 289.719C74.5907 290.904 67.9679 288.363 63.3814 281.74C57.2407 272.878 60.0385 259.186 71.2027 253.793Z"/>
        </svg>
      </div>

      <div class="max-w-[72rem] mx-auto relative">

        <p class="hero-eyebrow mb-8 anim">
          <span data-typing="${t('hero.eyebrow')}"></span>
        </p>

        <h1 class="font-bebas fs-h1 mb-12 max-w-[12ch] anim anim-d1">
          ${t('hero.title.1')}<br>
          <span class="text-[var(--indigo)]">${t('hero.title.2')}</span><br>
          <span class="text-outlined">${t('hero.title.3')}</span><br>
          ${t('hero.title.4')}<span class="text-[var(--indigo)]">.</span>
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

          <p class="font-mono-space fs-body text-[var(--gray-p)] border-l-[3px] border-[var(--indigo)] pl-5 max-w-[34ch] self-start anim anim-d2">
            ${t('hero.sub')}<br><br>${t('hero.sub2')}
          </p>

          <div class="flex flex-col gap-6 anim anim-d3">

            <div class="flex flex-wrap gap-3">
              <a href="${localePath('/contact')}" data-link class="btn-hero">${t('hero.cta.primary')}</a>
              <a href="${localePath('/pricing')}#methode" data-link class="btn-outline">${t('hero.cta.secondary')}</a>
            </div>

            <div class="proof-list" role="list">
              <div class="proof-item" role="listitem"><em class="proof-icon">✓</em><span>${t('proof.1')}</span></div>
              <div class="proof-item" role="listitem"><em class="proof-icon">✓</em><span>${t('proof.2')}</span></div>
              <div class="proof-item" role="listitem"><em class="proof-icon">✓</em><span>${t('proof.3')}</span></div>
              <div class="proof-item" role="listitem"><em class="proof-icon">✓</em><span>${t('proof.4')}</span></div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ── MINI-MANIFESTE ────────────────────────────────── -->
    <section class="py-8 px-6 md:px-[10%] anim">
      <div class="max-w-[72rem] mx-auto">

        <div class="code-block" role="figure">
          <div class="code-line"><span class="code-ln">1</span><span class="code-comment">// LaRéponse — manifeste.ts</span></div>
          <div class="code-line"><span class="code-ln">2</span></div>
          <div class="code-line"><span class="code-ln">3</span><span class="code-keyword">const</span> <span class="code-const">DISCIPLINE</span> = {</div>
          <div class="code-line"><span class="code-ln">4</span>&nbsp;&nbsp;règle: <span class="code-string">"ne pas mentir sur la complexité"</span>,</div>
          <div class="code-line"><span class="code-ln">5</span></div>
          <div class="code-line"><span class="code-ln">6</span>&nbsp;&nbsp;<span class="code-comment">// La réalité est complexe, et tout ce qui prétend</span></div>
          <div class="code-line"><span class="code-ln">7</span>&nbsp;&nbsp;<span class="code-comment">// le contraire ne fait que déplacer cette complexité.</span></div>
          <div class="code-line"><span class="code-ln">8</span></div>
          <div class="code-line"><span class="code-ln">9</span>&nbsp;&nbsp;<span class="code-fn">exposer</span>: (<span class="code-const">structure</span>) => <span class="code-const">structure</span>,</div>
          <div class="code-line"><span class="code-ln">10</span>&nbsp;&nbsp;<span class="code-fn">cacher</span>: <span class="code-keyword">never</span>,</div>
          <div class="code-line"><span class="code-ln">11</span>};</div>
          <div class="code-line"><span class="code-ln">12</span></div>
          <div class="code-line"><span class="code-ln">13</span><span class="code-comment">// ce qui est visible peut être questionné.</span></div>
          <div class="code-line"><span class="code-ln">14</span><span class="code-keyword">export default</span> <span class="code-const">DISCIPLINE</span>;</div>
        </div>

        <!-- Values strip -->
        <div class="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[var(--border-subtle)] border border-[var(--border-subtle)] border-t-0 bg-[var(--bg-2)] anim anim-d1">
          <div class="value-item">
            <span class="value-icon">
              <svg width="16" height="16" fill="var(--indigo)" viewBox="0 0 24 24"><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
            </span>
            ${t('value.accessibility')}
          </div>
          <div class="value-item">
            <span class="value-icon">
              <svg width="16" height="16" fill="var(--indigo)" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </span>
            ${t('value.eco')}
          </div>
          <div class="value-item">
            <span class="value-icon">
              <svg width="16" height="16" fill="var(--indigo)" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            </span>
            ${t('value.inclusivity')}
          </div>
          <div class="value-item">
            <span class="value-icon">
              <svg width="16" height="16" fill="var(--indigo)" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            </span>
            ${t('value.community')}
          </div>
        </div>

        <!-- Manifeste CTA row -->
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mt-8 anim anim-d2">
          <p class="font-mono-space fs-body text-[var(--gray-p)] leading-[1.6]">
            ${t('manifeste.text')}
          </p>
          <a href="${localePath('/about')}" data-link class="btn-outline shrink-0 self-start">${t('manifeste.about')}</a>
        </div>

      </div>
    </section>

    <!-- ── SERVICES PREVIEW ──────────────────────────────── -->
    <section class="py-16 px-6 md:px-[10%] anim">
      <div class="max-w-[72rem] mx-auto">

        <h2 class="section-h2 mb-6 anim">${t('services.heading')}</h2>

        <div class="svc-preview-grid mb-8 anim anim-d1">

          <div class="svc-preview">
            <div class="svc-preview-bar">
              <span class="text-[var(--indigo)] font-bold">$</span><span>~/services/s01</span>
            </div>
            <div class="p-6">
              <p class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] mb-2">${t('s1.code')}</p>
              <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--white)] mb-2">${t('s1.title')}</p>
              <p class="fs-body text-[var(--gray-p)]">${t('s1.body')}</p>
            </div>
            <div class="svc-preview-footer">→ deployed: zero-debt stack</div>
          </div>

          <div class="svc-preview">
            <div class="svc-preview-bar">
              <span class="text-[var(--indigo)] font-bold">$</span><span>~/services/s02</span>
            </div>
            <div class="p-6">
              <p class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] mb-2">${t('s2.code')}</p>
              <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--white)] mb-2">${t('s2.title')}</p>
              <p class="fs-body text-[var(--gray-p)]">${t('s2.body')}</p>
            </div>
            <div class="svc-preview-footer">→ built: custom tooling</div>
          </div>

          <div class="svc-preview">
            <div class="svc-preview-bar">
              <span class="text-[var(--indigo)] font-bold">$</span><span>~/services/s03</span>
            </div>
            <div class="p-6">
              <p class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] mb-2">${t('s3.code')}</p>
              <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--white)] mb-2">${t('s3.title')}</p>
              <p class="fs-body text-[var(--gray-p)]">${t('s3.body')}</p>
            </div>
            <div class="svc-preview-footer">→ running: stable pipeline</div>
          </div>

        </div>

        <a href="${localePath('/services')}" data-link class="btn-outline inline-block anim anim-d2">
          ${t('services.cta')}
        </a>

      </div>
    </section>

    <!-- ── CLOSING CTA ───────────────────────────────────── -->
    <section class="py-16 px-6 md:px-[10%] text-center anim">
      <div class="max-w-[72rem] mx-auto">
        <p class="font-bebas fs-cta tracking-[.04em] text-[var(--white)] mb-4">
          ${t('cta.heading')}
        </p>
        <p class="font-mono-space fs-body text-[var(--gray-p)] max-w-[60ch] mx-auto mb-8">
          ${t('cta.text')}
        </p>
        <a href="${localePath('/contact')}" data-link class="btn-hero">${t('cta.btn')}</a>
      </div>
    </section>

  `;
}
