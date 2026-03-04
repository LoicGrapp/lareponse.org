import { t, localePath } from '../lang.js';

export function Pricing() {
  return `
    <div class="px-6 md:px-[10%] py-12">
      <div class="max-w-[72rem] mx-auto">

        <!-- ── PAGE HEADER ─────────────────────────────── -->
        <header class="pb-6 mb-10 border-b-2 border-[var(--indigo)] anim">
          <h1 class="font-bebas leading-none flex items-baseline gap-4">
            <span class="fs-page-num text-[var(--indigo)]">02</span>
            <span class="fs-page-h1 text-[var(--white)]">TARIFS &amp; MÉTHODE</span>
          </h1>
        </header>

        <!-- ── NOTE ────────────────────────────────────── -->
        <p class="font-fragment fs-body border-l-[3px] border-[var(--indigo)] pl-5 pr-4 py-3 mb-10 bg-[var(--bg-2)] text-[var(--indigo)] inline-block max-w-[44rem] anim anim-d1">
          Crédits prépayés — débités à la minute. Un seul tarif s'applique selon le moment de la demande.
        </p>

        <!-- ── TARIF CARDS ──────────────────────────────── -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10 anim anim-d2" role="list" aria-label="Grille tarifaire">

          <!-- Coup de pouce -->
          <div class="flex flex-col gap-2 border border-[#2a2a2a] bg-[var(--bg-2)] p-6 hover:bg-[var(--bg-3)] transition-colors" role="listitem">
            <p class="font-fragment fs-label tracking-[.18em] uppercase text-[var(--gray-p)]">Coup de pouce</p>
            <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--mint)]">37 €/h</p>
            <p class="fs-body text-[var(--gray-p)] leading-snug">Projets sociaux, associatifs ou non lucratifs</p>
            <div class="mt-auto pt-3">
              <span class="font-fragment fs-xs tracking-[.12em] uppercase text-[var(--mint)] border border-[var(--mint)] px-3 py-1">Solidaire</span>
            </div>
          </div>

          <!-- Standard (featured) -->
          <div class="flex flex-col gap-2 border-2 border-[var(--white)] bg-[var(--bg-3)] p-6 hover:bg-[#222] transition-colors" role="listitem">
            <p class="font-fragment fs-label tracking-[.18em] uppercase text-[var(--gray-p)]">Standard</p>
            <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--white)]">73 €/h</p>
            <p class="fs-body text-[var(--gray-p)] leading-snug">Lun–Ven, 09:00–19:00</p>
            <div class="mt-auto pt-3">
              <span class="font-fragment fs-xs tracking-[.12em] uppercase text-[var(--white)] border border-[var(--white)] px-3 py-1">Tarif de base</span>
            </div>
          </div>

          <!-- Étendu -->
          <div class="flex flex-col gap-2 border border-[#2a2a2a] bg-[var(--bg-2)] p-6 hover:bg-[var(--bg-3)] transition-colors" role="listitem">
            <p class="font-fragment fs-label tracking-[.18em] uppercase text-[var(--gray-p)]">Étendu</p>
            <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--indigo)]">96 €/h</p>
            <p class="fs-body text-[var(--gray-p)] leading-snug">Samedi, 09:00–19:00</p>
            <div class="mt-auto pt-3">
              <span class="font-fragment fs-xs tracking-[.12em] uppercase text-[var(--indigo)] border border-[var(--indigo)] px-3 py-1">Weekend</span>
            </div>
          </div>

          <!-- Urgence -->
          <div class="flex flex-col gap-2 border-2 border-[var(--indigo)] bg-[var(--bg-2)] p-6 hover:bg-[var(--bg-3)] transition-colors" role="listitem">
            <p class="font-fragment fs-label tracking-[.18em] uppercase text-[var(--gray-p)]">Urgence</p>
            <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--indigo)]">127 €/h</p>
            <p class="fs-body text-[var(--gray-p)] leading-snug">Nuits (19h–9h), dimanches, jours fériés</p>
            <div class="mt-auto pt-3">
              <span class="font-fragment fs-xs tracking-[.12em] uppercase text-[var(--indigo)] border border-[var(--indigo)] px-3 py-1">Hors horaires</span>
            </div>
          </div>

          <!-- Vacances -->
          <div class="flex flex-col gap-2 border border-[#333] bg-[var(--black)] p-6 hover:bg-[var(--bg-2)] transition-colors" role="listitem">
            <p class="font-fragment fs-label tracking-[.18em] uppercase text-[var(--gray-p)]">Vacances</p>
            <p class="font-bebas fs-card-title tracking-[.04em] text-[var(--indigo)]">301 €/h</p>
            <p class="fs-body text-[var(--gray-p)] leading-snug max-w-[36rem]">Périodes de congés annoncées. Un client mobilisé pendant les vacances, c'est trois personnes privées de repos.</p>
            <div class="mt-auto pt-3">
              <span class="font-fragment fs-xs tracking-[.12em] uppercase text-[var(--indigo)] border border-[var(--indigo)] px-3 py-1">Congés annoncés</span>
            </div>
          </div>

        </div>

        <hr class="border-none border-t border-[#1e1e1e] my-10">

        <!-- ── PROJETS GÉNÉRATEURS DE REVENUS ──────────── -->
        <div class="border-2 border-[var(--indigo)] max-w-[48rem] bg-[var(--bg-2)] mb-10 anim anim-d3">
          <div class="bg-[var(--indigo)] px-6 py-4 font-bebas fs-card-title tracking-[.04em] text-[var(--black)] flex items-center gap-2">
            € PROJETS GÉNÉRATEURS DE REVENUS
          </div>
          <div class="p-8 flex flex-col gap-4">
            <p class="fs-body text-[var(--gray-p)]">E-commerce, réservation, abonnements — les règles changent.</p>
            <span class="font-bebas text-[18px] tracking-[.04em] text-[var(--indigo)] border border-[var(--indigo)] px-4 py-2 inline-block">
              Minimum mensuel (ex. 500 € HT) OU % CA (ex. 3%) — jamais les deux cumulés.
            </span>
            <p class="fs-body text-[var(--gray-p)]">Le montant facturé est toujours le plus élevé des deux. Mes intérêts sont alignés sur les vôtres : plus votre activité en ligne réussit, plus je suis investi dans sa réussite.</p>
          </div>
        </div>

        <!-- ── SUMMARY BOXES ────────────────────────────── -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[44rem] mb-16 anim anim-d4">
          <div class="border border-[#2a2a2a] bg-[var(--bg-2)] p-6">
            <p class="font-fragment fs-label tracking-[.18em] uppercase text-[var(--indigo)] mb-2">Projets non lucratifs</p>
            <p class="font-bebas fs-h2 tracking-[.04em] text-[var(--white)] leading-tight">Payez une fois. Validé en 30 jours. Gratuit à vie.</p>
          </div>
          <div class="border border-[#2a2a2a] bg-[var(--bg-2)] p-6">
            <p class="font-fragment fs-label tracking-[.18em] uppercase text-[var(--indigo)] mb-2">Projets lucratifs</p>
            <p class="font-bebas fs-h2 tracking-[.04em] text-[var(--white)] leading-tight">Un minimum mensuel ou un % du CA — jamais les deux.</p>
          </div>
        </div>

        <!-- ── MÉTHODE ──────────────────────────────────── -->
        <p class="font-fragment fs-label tracking-[.22em] uppercase text-[var(--indigo)] flex items-center gap-3 mt-16 mb-6 pb-6 border-t-2 border-[#2e2e2e] pt-10 anim">
          <span class="block w-8 h-px bg-[var(--indigo)]"></span>
          Méthode éthique
        </p>

        <h2 class="font-bebas fs-h2 tracking-[.04em] text-[var(--white)] mb-8 anim">
          Du crédit à la garantie : 4 étapes.
        </h2>

        <!-- Steps -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-[#2e2e2e] mb-10 shadow-[5px_5px_0_var(--indigo)] anim" role="list">

          <div class="p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-[#2e2e2e] bg-[var(--bg-2)] hover:bg-[var(--bg-3)] transition-colors" role="listitem">
            <p class="font-fragment fs-xs text-[var(--indigo)] mb-2 tracking-[.05em]">commit a1b2c3d</p>
            <p class="font-fragment fs-xs tracking-[.2em] uppercase text-[var(--gray-p)] opacity-60 mb-2">Mise en oeuvre</p>
            <h3 class="font-bebas fs-card-title tracking-[.04em] text-[var(--white)] mb-3">→ Phase facturable</h3>
            <p class="fs-body text-[var(--gray-p)]">Crédits prépayés, débités à la minute. Corrections incluses. Pas de forfait flou, pas de surprise.</p>
          </div>

          <div class="p-8 border-b-2 sm:border-r-2 lg:border-b-0 border-[#2e2e2e] bg-[var(--bg-2)] hover:bg-[var(--bg-3)] transition-colors" role="listitem">
            <p class="font-fragment fs-xs text-[var(--indigo)] mb-2 tracking-[.05em]">commit e4f5a6b</p>
            <p class="font-fragment fs-xs tracking-[.2em] uppercase text-[var(--gray-p)] opacity-60 mb-2">J+1 à J+30</p>
            <h3 class="font-bebas fs-card-title tracking-[.04em] text-[var(--white)] mb-3">→ Stabilisation</h3>
            <p class="fs-body text-[var(--gray-p)]">30 jours d'utilisation réelle. Ajustements et corrections inclus dans le périmètre du livrable.</p>
          </div>

          <div class="p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-[#2e2e2e] bg-[var(--bg-2)] hover:bg-[var(--bg-3)] transition-colors" role="listitem">
            <p class="font-fragment fs-xs text-[var(--indigo)] mb-2 tracking-[.05em]">commit c7d8e9f</p>
            <p class="font-fragment fs-xs tracking-[.2em] uppercase text-[var(--gray-p)] opacity-60 mb-2">J+30</p>
            <h3 class="font-bebas fs-card-title tracking-[.04em] text-[var(--white)] mb-3">→ Validation</h3>
            <p class="fs-body text-[var(--gray-p)]">Fonctionne 30 jours en conditions normales = livrable validé. Le compteur s'arrête définitivement.</p>
          </div>

          <div class="p-8 bg-[var(--bg-2)] hover:bg-[var(--bg-3)] transition-colors" role="listitem">
            <p class="font-fragment fs-xs text-[var(--indigo)] mb-2 tracking-[.05em]">HEAD</p>
            <p class="font-fragment fs-xs tracking-[.2em] uppercase text-[var(--gray-p)] opacity-60 mb-2">Post-validation</p>
            <h3 class="font-bebas fs-card-title tracking-[.04em] text-[var(--white)] mb-3">→ Garantie à vie</h3>
            <p class="fs-body text-[var(--gray-p)]">Bug de notre fait = on répare. Environnement évolue = on adapte. Jamais deux fois facturé.</p>
          </div>

        </div>

        <!-- ── INCLUS / NON COUVERT ─────────────────────── -->
        <div class="grid grid-cols-1 sm:grid-cols-2 border-2 border-[#2e2e2e] mb-16 anim" id="inclus-exclu">

          <div class="p-8 sm:border-r-2 border-[#2e2e2e] bg-[var(--bg-2)]">
            <h3 class="font-bebas fs-h2 tracking-[.04em] text-[var(--mint)] mb-6 pb-4 border-b border-[#2e2e2e] flex items-center gap-2">
              ✓ Inclus
            </h3>
            <ul class="flex flex-col">
              <li class="flex gap-3 items-start py-3 border-b border-[#1a1a1a] fs-body text-[var(--gray-p)]"><span class="text-[var(--mint)] font-bold shrink-0">+</span> Bugs dus à notre implémentation corrigés gratuitement</li>
              <li class="flex gap-3 items-start py-3 border-b border-[#1a1a1a] fs-body text-[var(--gray-p)]"><span class="text-[var(--mint)] font-bold shrink-0">+</span> Adaptation si votre serveur / CMS / PHP évolue</li>
              <li class="flex gap-3 items-start py-3 border-b border-[#1a1a1a] fs-body text-[var(--gray-p)]"><span class="text-[var(--mint)] font-bold shrink-0">+</span> Mises à jour dans le périmètre du livrable validé</li>
              <li class="flex gap-3 items-start py-3 fs-body text-[var(--gray-p)]"><span class="text-[var(--mint)] font-bold shrink-0">+</span> Jamais deux fois facturé pour le même livrable</li>
            </ul>
          </div>

          <div class="p-8 bg-[var(--black)]">
            <h3 class="font-bebas fs-h2 tracking-[.04em] text-[var(--indigo)] mb-6 pb-4 border-b border-[#2e2e2e] flex items-center gap-2">
              × Non couvert
            </h3>
            <ul class="flex flex-col">
              <li class="flex gap-3 items-start py-3 border-b border-[#1a1a1a] fs-body text-[var(--gray-p)]"><span class="text-[var(--indigo)] font-bold shrink-0">×</span> Changements de navigateurs (Chrome, Safari…)</li>
              <li class="flex gap-3 items-start py-3 border-b border-[#1a1a1a] fs-body text-[var(--gray-p)]"><span class="text-[var(--indigo)] font-bold shrink-0">×</span> Logiciels ou plugins tiers</li>
              <li class="flex gap-3 items-start py-3 border-b border-[#1a1a1a] fs-body text-[var(--gray-p)]"><span class="text-[var(--indigo)] font-bold shrink-0">×</span> APIs externes</li>
              <li class="flex gap-3 items-start py-3 border-b border-[#1a1a1a] fs-body text-[var(--gray-p)]"><span class="text-[var(--indigo)] font-bold shrink-0">×</span> Migrations d'hébergement</li>
              <li class="flex gap-3 items-start py-3 border-b border-[#1a1a1a] fs-body text-[var(--gray-p)]"><span class="text-[var(--indigo)] font-bold shrink-0">×</span> Modifications demandées côté client</li>
              <li class="flex gap-3 items-start py-3 fs-body text-[var(--gray-p)]"><span class="text-[var(--indigo)] font-bold shrink-0">×</span> Nouvelles fonctionnalités ou évolutions de périmètre</li>
            </ul>
          </div>

        </div>

        <!-- ── CTA ─────────────────────────────────────── -->
        <div class="text-center py-8 anim">
          <a href="${localePath('/contact')}" data-link class="btn-hero">Décrire mon besoin →</a>
        </div>

      </div>
    </div>
  `;
}
