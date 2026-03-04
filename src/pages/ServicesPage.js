import { t, localePath } from '../lang.js';

export function ServicesPage() {
    return /*html*/`
        <!-- SERVICES PAGE -->
    <section class="bg-(--black) text-(--white)">
        <div class="mx-auto max-w-6xl px-6 py-16">
            <!-- Header -->
        <div class="flex items-end gap-4">
            <div class="text-[112px] leading-none font-bebas tracking-tight text-(--indigo) relative top-1">01</div>
            <h1 class="text-[88px] leading-none font-bebas tracking-tight">SERVICES</h1>
        </div>

        <div class="mt-6 h-0.5 w-full" style="background: var(--indigo); opacity: .75;"></div>

        <!-- Grid wrapper with purple accent right + bottom -->
        <div class="relative mt-10">
            <div class="absolute -right-0.5 top-0 z-10 h-full w-1" style="background: var(--indigo-light); opacity: .8;"></div>
            <div class="absolute bottom-0 left-0 z-10 h-1 w-full" style="background: var(--indigo-light); opacity: .8;"></div>

            <div class="grid grid-cols-1 overflow-hidden border border-[#2A2A2A] md:grid-cols-3">
                <!-- Card 1 -->
                <div class="group relative border border-[#2a2a2a] bg-[#0c0c0c] overflow-hidden transition-colors duration-150 hover:border-[#818CF8]">
                    <div class="flex items-center gap-2 px-4 py-2 bg-[#080808] border-b border-[#1a1a1a] font-fragment text-[.72rem] text-[#C8C4BE] opacity-60" style="font-size:.72rem">
                        <span class="text-[#818CF8] font-bold">$</span><span>~/services/s01</span>
                    </div>
                    <div class="p-6">
                        <p class="font-fragment tracking-[.22em] uppercase text-[#818CF8] mb-2" style="font-size:.75rem">S-01</p>
                        <p class="font-bebas tracking-[.04em] leading-none text-[#f0ede8] mb-2" style="font-size:1.5rem;line-height:1">Sites vitrines &amp; portails</p>
                        <p class="text-[#C8C4BE]" style="font-size:.83rem;line-height:1.65">Sites, portails et plateformes cohérents, conçus pour durer sans dette cachée.</p>
                    </div>
                    <div class="absolute bottom-0 inset-x-0 px-4 py-2 font-fragment text-[#34D399] bg-[rgba(125,100,255,.06)] opacity-0 translate-y-full transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0" style="font-size:.72rem">→ deployed: zero-debt stack</div>
                </div>

                <!-- Card 2 -->
                <div class="group relative border border-[#2a2a2a] bg-[#0c0c0c] overflow-hidden transition-colors duration-150 hover:border-[#818CF8]">
                    <div class="flex items-center gap-2 px-4 py-2 bg-[#080808] border-b border-[#1a1a1a] font-fragment text-[.72rem] text-[#C8C4BE] opacity-60" style="font-size:.72rem">
                        <span class="text-[#818CF8] font-bold">$</span><span>~/services/s02</span>
                    </div>
                    <div class="p-6">
                        <p class="font-fragment tracking-[.22em] uppercase text-[#818CF8] mb-2" style="font-size:.75rem">S-02</p>
                        <p class="font-bebas tracking-[.04em] leading-none text-[#f0ede8] mb-2" style="font-size:1.5rem;line-height:1">Outils sur mesure</p>
                        <p class="text-[#C8C4BE]" style="font-size:.83rem;line-height:1.65">Calibrés pour indépendants, associations et petites structures. Chaque bug corrigé une seule fois.</p>
                    </div>
                    <div class="absolute bottom-0 inset-x-0 px-4 py-2 font-fragment text-[#34D399] bg-[rgba(125,100,255,.06)] opacity-0 translate-y-full transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0" style="font-size:.72rem">→ built: custom tooling</div>
                </div>

                <!-- Card 3 -->
                <div class="group relative border border-[#2a2a2a] bg-[#0c0c0c] overflow-hidden transition-colors duration-150 hover:border-[#818CF8]">
                    <div class="flex items-center gap-2 px-4 py-2 bg-[#080808] border-b border-[#1a1a1a] font-fragment text-[.72rem] text-[#C8C4BE] opacity-60" style="font-size:.72rem">
                        <span class="text-[#818CF8] font-bold">$</span><span>~/services/s03</span>
                    </div>
                    <div class="p-6">
                        <p class="font-fragment tracking-[.22em] uppercase text-[#818CF8] mb-2" style="font-size:.75rem">S-03</p>
                        <p class="font-bebas tracking-[.04em] leading-none text-[#f0ede8] mb-2" style="font-size:1.5rem;line-height:1">Automatisations &amp; parsers</p>
                        <p class="text-[#C8C4BE]" style="font-size:.83rem;line-height:1.65">Crawlers, traitement documentaire, reporting. Architectures sobres et stables.</p>
                    </div>
                    <div class="absolute bottom-0 inset-x-0 px-4 py-2 font-fragment text-[#34D399] bg-[rgba(125,100,255,.06)] opacity-0 translate-y-full transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0" style="font-size:.72rem">→ running: stable pipeline</div>
                </div>

                <!-- Card 4 -->
                <div class="group relative border border-[#2a2a2a] bg-[#0c0c0c] overflow-hidden transition-colors duration-150 hover:border-[#818CF8]">
                    <div class="flex items-center gap-2 px-4 py-2 bg-[#080808] border-b border-[#1a1a1a] font-fragment text-[.72rem] text-[#C8C4BE] opacity-60" style="font-size:.72rem">
                        <span class="text-[#818CF8] font-bold">$</span><span>~/services/s04</span>
                    </div>
                    <div class="p-6">
                        <p class="font-fragment tracking-[.22em] uppercase text-[#818CF8] mb-2" style="font-size:.75rem">S-04</p>
                        <p class="font-bebas tracking-[.04em] leading-none text-[#f0ede8] mb-2" style="font-size:1.5rem;line-height:1">Crawlers &amp; parseurs</p>
                        <p class="text-[#C8C4BE]" style="font-size:.83rem;line-height:1.65">Extraire, structurer et exploiter des données brutes. Pas d'intermédiaire pour ce que la machine peut faire seule.</p>
                    </div>
                    <div class="absolute bottom-0 inset-x-0 px-4 py-2 font-fragment text-[#34D399] bg-[rgba(125,100,255,.06)] opacity-0 translate-y-full transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0" style="font-size:.72rem">→ automated: raw data processing</div>
                </div>

                <!-- Card 5 -->
                <div class="group relative border border-[#2a2a2a] bg-[#0c0c0c] overflow-hidden transition-colors duration-150 hover:border-[#818CF8]">
                    <div class="flex items-center gap-2 px-4 py-2 bg-[#080808] border-b border-[#1a1a1a] font-fragment text-[.72rem] text-[#C8C4BE] opacity-60" style="font-size:.72rem">
                        <span class="text-[#818CF8] font-bold">$</span><span>~/services/s05</span>
                    </div>
                    <div class="p-6">
                        <p class="font-fragment tracking-[.22em] uppercase text-[#818CF8] mb-2" style="font-size:.75rem">S-05</p>
                        <p class="font-bebas tracking-[.04em] leading-none text-[#f0ede8] mb-2" style="font-size:1.5rem;line-height:1">Traitement documentaire</p>
                        <p class="text-[#C8C4BE]" style="font-size:.83rem;line-height:1.65">PDF, factures, formulaires, archives — transformer la masse en structure lisible et immédiatement exploitable.</p>
                    </div>
                    <div class="absolute bottom-0 inset-x-0 px-4 py-2 font-fragment text-[#34D399] bg-[rgba(125,100,255,.06)] opacity-0 translate-y-full transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0" style="font-size:.72rem">→ parsed: structured document data</div>
                </div>

                <!-- Card 6 -->
                <div class="group relative border border-[#2a2a2a] bg-[#0c0c0c] overflow-hidden transition-colors duration-150 hover:border-[#818CF8]">
                    <div class="flex items-center gap-2 px-4 py-2 bg-[#080808] border-b border-[#1a1a1a] font-fragment text-[.72rem] text-[#C8C4BE] opacity-60" style="font-size:.72rem">
                        <span class="text-[#818CF8] font-bold">$</span><span>~/services/s06</span>
                    </div>
                    <div class="p-6">
                        <p class="font-fragment tracking-[.22em] uppercase text-[#818CF8] mb-2" style="font-size:.75rem">S-06</p>
                        <p class="font-bebas tracking-[.04em] leading-none text-[#f0ede8] mb-2" style="font-size:1.5rem;line-height:1">Reporting &amp; Dashboards</p>
                        <p class="text-[#C8C4BE]" style="font-size:.83rem;line-height:1.65">Des indicateurs que vous comprenez sans formation, mis à jour sans intervention externe ni abonnement SaaS.</p>
                    </div>
                    <div class="absolute bottom-0 inset-x-0 px-4 py-2 font-fragment text-[#34D399] bg-[rgba(125,100,255,.06)] opacity-0 translate-y-full transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0" style="font-size:.72rem">→ measured: self-updating metrics</div>
                </div>
            </div>
        </div>

            <!-- Buttons -->
            <div class="mt-10 flex flex-wrap gap-4">
                <a href="#" class="btn-hero">Décrire mon besoin →</a>
                <a href="#" class="btn-outline">Voir les tarifs →</a>
            </div>
        </div>
    </section>
    `;
}
