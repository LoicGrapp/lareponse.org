import { t, localePath } from '../lang.js';

export function HomePage() {
  return `

    <!-- ── HERO ──────────────────────────────────────────── -->
    <section class="relative overflow-hidden py-[clamp(3rem,8vw,6rem)] px-6 md:px-[10%] border-b-2 border-[#1a1a1a] anim">

      <div aria-hidden="true"
           class="font-bebas text-[clamp(20rem,55vw,52rem)] leading-[.75] text-[#f0ede8] opacity-[.025]
                  absolute -right-12 -bottom-8 pointer-events-none select-none tracking-[-0.03em]">‽</div>

      <div class="max-w-[72rem] mx-auto relative">

        <p class="font-fragment text-[.78rem] tracking-[.22em] uppercase text-[#818CF8] flex items-center gap-4 mb-8 anim"
           style="font-size:.78rem">
          <span class="block w-10 h-px bg-[#818CF8] shrink-0"></span>
          <span data-typing="${t('hero.eyebrow')}"></span>
        </p>

        <h1 class="font-bebas leading-[.86] tracking-[-0.01em] mb-12 max-w-[12ch] anim anim-d1"
            style="font-size:clamp(5rem,16vw,14rem);line-height:.86;letter-spacing:-.01em">
          ${t('hero.title.1')}<br>
          <span class="text-[#818CF8]">${t('hero.title.2')}</span><br>
          <span class="text-outlined">${t('hero.title.3')}</span><br>
          ${t('hero.title.4')}<span class="text-[#818CF8]">.</span>
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

          <p class="font-mono-space text-[#C8C4BE] border-l-[3px] border-[#818CF8] pl-5 max-w-[34ch] anim anim-d2"
             style="font-size:.95rem;line-height:1.75">
            ${t('hero.sub')}<br><br>${t('hero.sub2')}
          </p>

          <div class="flex flex-col gap-6 anim anim-d3">

            <div class="flex flex-wrap gap-3">
              <a href="${localePath('/contact')}" data-link class="btn-hero">${t('hero.cta.primary')}</a>
              <a href="${localePath('/methode')}" data-link class="btn-outline">${t('hero.cta.secondary')}</a>
            </div>

            <div class="border border-[#242424] bg-[#111111]" role="list">
              <div class="flex items-center gap-3 px-4 py-3 border-b border-[#1e1e1e] font-fragment text-[.78rem] tracking-[.1em] uppercase text-[#C8C4BE]" role="listitem" style="font-size:.78rem">
                <em class="text-[#818CF8] font-bold shrink-0 not-italic">✓</em><span>${t('proof.1')}</span>
              </div>
              <div class="flex items-center gap-3 px-4 py-3 border-b border-[#1e1e1e] font-fragment text-[.78rem] tracking-[.1em] uppercase text-[#C8C4BE]" role="listitem" style="font-size:.78rem">
                <em class="text-[#818CF8] font-bold shrink-0 not-italic">✓</em><span>${t('proof.2')}</span>
              </div>
              <div class="flex items-center gap-3 px-4 py-3 border-b border-[#1e1e1e] font-fragment text-[.78rem] tracking-[.1em] uppercase text-[#C8C4BE]" role="listitem" style="font-size:.78rem">
                <em class="text-[#818CF8] font-bold shrink-0 not-italic">✓</em><span>${t('proof.3')}</span>
              </div>
              <div class="flex items-center gap-3 px-4 py-3 font-fragment text-[.78rem] tracking-[.1em] uppercase text-[#C8C4BE]" role="listitem" style="font-size:.78rem">
                <em class="text-[#818CF8] font-bold shrink-0 not-italic">✓</em><span>${t('proof.4')}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ── SERVICES PREVIEW ──────────────────────────────── -->
    <section class="py-16 px-6 md:px-[10%] anim">
      <div class="max-w-[72rem] mx-auto">

      <h2 class="font-bebas tracking-[.04em] text-[#f0ede8] mb-6 anim"
          style="font-size:clamp(1.6rem,3vw,2.2rem)">
        ${t('services.heading')}
      </h2>

      <div class="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3 mb-8 anim anim-d1">

        <div class="group relative border border-[#2a2a2a] bg-[#0c0c0c] overflow-hidden transition-colors duration-150 hover:border-[#818CF8]">
          <div class="flex items-center gap-2 px-4 py-2 bg-[#080808] border-b border-[#1a1a1a] font-fragment text-[.72rem] text-[#C8C4BE] opacity-60" style="font-size:.72rem">
            <span class="text-[#818CF8] font-bold">$</span><span>~/services/s01</span>
          </div>
          <div class="p-6">
            <p class="font-fragment tracking-[.22em] uppercase text-[#818CF8] mb-2" style="font-size:.75rem">${t('s1.code')}</p>
            <p class="font-bebas tracking-[.04em] leading-none text-[#f0ede8] mb-2" style="font-size:1.5rem;line-height:1">${t('s1.title')}</p>
            <p class="text-[#C8C4BE]" style="font-size:.83rem;line-height:1.65">${t('s1.body')}</p>
          </div>
          <div class="absolute bottom-0 inset-x-0 px-4 py-2 font-fragment text-[#34D399] bg-[rgba(125,100,255,.06)] opacity-0 translate-y-full transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0" style="font-size:.72rem">
            → deployed: zero-debt stack
          </div>
        </div>

        <div class="group relative border border-[#2a2a2a] bg-[#0c0c0c] overflow-hidden transition-colors duration-150 hover:border-[#818CF8]">
          <div class="flex items-center gap-2 px-4 py-2 bg-[#080808] border-b border-[#1a1a1a] font-fragment text-[.72rem] text-[#C8C4BE] opacity-60" style="font-size:.72rem">
            <span class="text-[#818CF8] font-bold">$</span><span>~/services/s02</span>
          </div>
          <div class="p-6">
            <p class="font-fragment tracking-[.22em] uppercase text-[#818CF8] mb-2" style="font-size:.75rem">${t('s2.code')}</p>
            <p class="font-bebas tracking-[.04em] leading-none text-[#f0ede8] mb-2" style="font-size:1.5rem;line-height:1">${t('s2.title')}</p>
            <p class="text-[#C8C4BE]" style="font-size:.83rem;line-height:1.65">${t('s2.body')}</p>
          </div>
          <div class="absolute bottom-0 inset-x-0 px-4 py-2 font-fragment text-[#34D399] bg-[rgba(125,100,255,.06)] opacity-0 translate-y-full transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0" style="font-size:.72rem">
            → built: custom tooling
          </div>
        </div>

        <div class="group relative border border-[#2a2a2a] bg-[#0c0c0c] overflow-hidden transition-colors duration-150 hover:border-[#818CF8]">
          <div class="flex items-center gap-2 px-4 py-2 bg-[#080808] border-b border-[#1a1a1a] font-fragment text-[.72rem] text-[#C8C4BE] opacity-60" style="font-size:.72rem">
            <span class="text-[#818CF8] font-bold">$</span><span>~/services/s03</span>
          </div>
          <div class="p-6">
            <p class="font-fragment tracking-[.22em] uppercase text-[#818CF8] mb-2" style="font-size:.75rem">${t('s3.code')}</p>
            <p class="font-bebas tracking-[.04em] leading-none text-[#f0ede8] mb-2" style="font-size:1.5rem;line-height:1">${t('s3.title')}</p>
            <p class="text-[#C8C4BE]" style="font-size:.83rem;line-height:1.65">${t('s3.body')}</p>
          </div>
          <div class="absolute bottom-0 inset-x-0 px-4 py-2 font-fragment text-[#34D399] bg-[rgba(125,100,255,.06)] opacity-0 translate-y-full transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0" style="font-size:.72rem">
            → running: stable pipeline
          </div>
        </div>

      </div>

      <a href="${localePath('/services')}" data-link class="btn-outline inline-block anim anim-d2">
        ${t('services.cta')}
      </a>

      </div>
    </section>

    <!-- ── MINI-MANIFESTE ────────────────────────────────── -->
    <section class="py-4 px-6 md:px-[10%] anim">
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

      <a href="${localePath('/manifeste')}" data-link
         class="font-fragment tracking-[.12em] uppercase text-[#818CF8] inline-block mt-4 hover:text-[#A5B4FC] transition-colors anim anim-d1"
         style="font-size:.75rem">
        ${t('manifeste.cta')}
      </a>

      </div>
    </section>

    <!-- ── CLOSING CTA ───────────────────────────────────── -->
    <section class="py-16 px-6 md:px-[10%] text-center anim">
      <div class="max-w-[72rem] mx-auto">
        <p class="font-bebas tracking-[.04em] text-[#f0ede8] mb-4" style="font-size:clamp(1.4rem,3vw,2rem)">
          ${t('cta.heading')}
        </p>
        <a href="${localePath('/contact')}" data-link class="btn-hero">${t('cta.btn')}</a>
      </div>
    </section>

  `;
}
