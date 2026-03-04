import { t, localePath } from '../lang.js';

export function Contact() {
    return `
      <div className="px-6 md:px-[10%] py-12">
      <div className="max-w-[72rem] mx-auto">

        {/* TITLE */}
        <div className="pb-[24px]">
          <h1 className="font-bold leading-none flex items-baseline gap-4 border-b-2 border-[var(--purple)]">
            <span className="text-[72px] md:text-[112px] text-[var(--purple)] font-bebas">
              06
            </span>
            <span className="text-[48px] md:text-[88px] text-[var(--white)] font-bebas">
              ${t('contact.heading')}
            </span>
          </h1>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[var(--black)]">

          {/* LEFT SIDE */}
          <div className="space-y-10 text-[13px] text-[var(--gray-p)]">

            <div className="border-l-[3px] border-[var(--purple)] pl-4 pr-4 font-mono-space">
              <p>${t('contact.1stparagraph')}</p>
              <p className="mt-4">${t('contact.2ndparagraph')}</p>
            </div>

            <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">

              <div className="p-4">
                <p className="text-[11px] font-fragment uppercase text-[var(--purple)]">
                  ${t('contact.response.title')}
                </p>
                <p className="font-mono-space">${t('contact.response.body')}</p>
              </div>

              <div className="h-[1px] bg-[#2a2a2a] w-full" />

              <div className="p-4">
                <p className="text-[11px] font-fragment uppercase text-[var(--purple)]">
                  ${t('contact.requirements.title')}
                </p>
                <p className="font-mono-space">${t('contact.requirements.body')}</p>
              </div>

              <div className="h-[1px] bg-[#2a2a2a] w-full" />

              <div className="p-4">
                <p className="text-[11px] font-fragment uppercase text-[var(--purple)]">
                  ${t('contact.next.title')}
                </p>
                <p className="font-mono-space">${t('contact.next.body')}</p>
              </div>

              <div className="h-[1px] bg-[#2a2a2a] w-full" />

              <div className="p-4">
                <p className="text-[11px] font-fragment uppercase text-[var(--purple)]">
                  ${t('contact.privacy.title')}
                </p>
                <p className="font-mono-space">${t('contact.privacy.body')}</p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="flex flex-col justify-between border border-[#2a2a2a] p-5 bg-[#151515] shadow-[5px_5px_0_var(--purple)] rounded-lg">

            <form className="space-y-8 text-[13px]">

              <div>
                <label className="block text-[11px] text-[var(--purple)] mb-2 font-fragment">
                  VOTRE NOM
                </label>
                <input
                  type="text"
                  placeholder="Prénom Nom"
                  className="w-full bg-transparent border-b border-[#2a2a2a] pb-2 focus:outline-none focus:border-[var(--purple)]"
                />
              </div>

              <div>
                <label className="block text-[11px] text-[var(--purple)] mb-2 font-fragment">
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="vous@domaine.fr"
                  className="w-full bg-transparent border-b border-[#2a2a2a] pb-2 focus:outline-none focus:border-[var(--purple)]"
                />
              </div>

              <div>
                <label className="block text-[11px] text-[var(--purple)] mb-2 font-fragment">
                  TYPE DE PROJET
                </label>
                <select className="w-full bg-transparent border-b border-[#2a2a2a] pb-2 focus:outline-none focus:border-[var(--purple)]">
                  <option>- Choisir -</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-[var(--purple)] mb-2 font-fragment">
                  VOTRE BESOIN
                </label>
                <textarea
                  rows="3"
                  placeholder="Ce que vous voulez construire, pour qui, dans quel délai..."
                  className="w-full bg-transparent border-b border-[#2a2a2a] resize-none focus:outline-none focus:border-[var(--purple)]"
                />
              </div>

            </form>

            <div className="mt-10 bg-[#151515] p-6">
              <button className="w-full py-4 btn-hero">ENVOYER →</button>
              <p className="mt-4 text-[10px] text-[var(--gray-p)] text-center">
                PAS DE NEWSLETTER. PAS DE RELANCE. UNE PERSONNE LIRA VOTRE MESSAGE.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
    `
}