import { t } from '../lang.js';

export function Contact() {
  return `
    <div class="px-6 md:px-[10%] py-12 z-1 backdrop-blur-[2px]">
      <div class="max-w-[72rem] mx-auto">

        <!-- ── PAGE HEADER ─────────────────────────────── -->
        <header class="pb-6 mb-10 border-b-2 border-[var(--indigo)] anim">
          <h1 class="font-bebas leading-none flex items-baseline gap-4">
            <span class="fs-page-num text-[var(--indigo)]">06</span>
            <span class="fs-page-h1 text-[var(--white)]">${t('contact.heading')}</span>
          </h1>
        </header>

        <!-- ── LAYOUT ───────────────────────────────────── -->
        <div class="contact-layout anim anim-d1">

          <!-- LEFT — note + facts -->
          <div class="contact-left">
            <p class="contact-note">
              ${t('contact.1stparagraph')}<br><br>
              ${t('contact.2ndparagraph')}
            </p>
            <div class="contact-facts">
              <div class="fact">
                <p class="fact-lbl">${t('contact.response.title')}</p>
                <p class="fact-val">${t('contact.response.body')}</p>
              </div>
              <div class="fact">
                <p class="fact-lbl">${t('contact.requirements.title')}</p>
                <p class="fact-val">${t('contact.requirements.body')}</p>
              </div>
              <div class="fact">
                <p class="fact-lbl">${t('contact.after.title')}</p>
                <p class="fact-val">${t('contact.after.body')}</p>
              </div>
              <div class="fact">
                <p class="fact-lbl">${t('contact.privacy.title')}</p>
                <p class="fact-val">${t('contact.privacy.body')}</p>
              </div>
            </div>
          </div>

          <!-- RIGHT — form -->
          <form class="contact-form anim anim-d2" name="contact" method="POST"
            action="mailto:bonjour@lareponse.fr" enctype="text/plain"
            aria-label="${t('contact.heading')}">

            <div class="contact-details">
              <p><a href="tel:+32455173473" class="hover:text-[var(--indigo)]">+32 455·173·473</a><br>
                TVA&#8209;BE 0678·421·364<br>
                Rue Verboeckhaven, 64<br>
                Brussels, Belgium<br>
                <a href="mailto:touch@hexmakina.be" class="hover:text-[var(--indigo)]">touch@hexmakina.be</a></p>
            </div>

            <div class="field field-stretch">
              <label for="msg">${t('contact.form.label')}</label>
              <textarea id="msg" name="message" style="flex:1"
                placeholder="${t('contact.form.placeholder')}" required></textarea>
            </div>

            <div class="honeypot" aria-hidden="true">
              <input type="text" name="website" tabindex="-1" autocomplete="off">
            </div>

            <div class="form-submit">
              <p class="coord-reminder">${t('contact.form.coords')}</p>
              <button type="submit" class="btn-hero" style="width:100%">
                ${t('contact.form.submit')}
              </button>
              <p class="reassure">${t('contact.form.reassure')}</p>
            </div>

          </form>

        </div>
      </div>
    </div>
  `;
}
