import { t, localePath } from '../lang.js';

export function contact() {
    return `
        <!-- Title -->
        <div class="pb-[24px] pl-[40px] pr-[40px]">
        
            <h1 class=" font-bold leading-none flex items-baseline gap-4 border-b-[2px] border-[var(--purple)]"> <span
                    class="text-[112px] text-[var(--purple)] font-bebas">06</span> <span class="text-[88px] text-[var('--white')] font-bebas">${t('contact.heading')}</span>
            </h1>
            
        </div>

        <!-- Main bordered container -->
        <div class="pl-10 pr-10 grid grid-cols-2 gap-12 bg-[var(--black)]">

            <!-- LEFT SIDE -->
            <div class="space-y-10 text-[13px]  text-[var(--gray-p)]">

                <div class=" border-l-[3px]  border-[var(--purple)] pl-4 pr-4 font-mono-space">
                    <p>
                        ${t('contact.1stparagraph')}
                    </p>
                    <p class="mt-4">
                        ${t('contact.2ndparagraph')}
                        
                    </p>
                </div>

                <div class="border border-[#2a2a2a]">

                    <div class="p-4">
                        <p class="text-[11px]  text-[var(--gray-p)] font-fragment uppercase text-[var(--purple)]">${t('contact.response.title')}</p>
                        <p class="font-mono-space">${t('contact.response.body')}</p>
                    </div> 

                    <div class="mt-6 h-[1px] bg-[#2a2a2a] w-full"> </div>

                    <div class="p-4">
                        <p class="text-[11px]  font-fragment uppercase text-[var(--purple)] ">${t('contact.requirements.title')}</p>
                        <p class="font-mono-space"> ${t('contact.requirements.body')}</p>
                    </div>

                    <div class="mt-6 h-[1px] bg-[#2a2a2a] w-full"> </div>

                    <div class="p-4">
                        <p class="text-[11px] font-fragment uppercase text-[var(--purple)]">${t('contact.response.body')}</p>
                        <p class="font-mono-space">${t('contact.response.body')}</p>
                    </div>

                    <div class="mt-6 h-[1px] bg-[#2a2a2a] w-full"> </div>

                    <div class="p-4">
                        <p class="text-[11px] font-fragment uppercase text-[var(--purple)]">${t('contact.privacy.title')}</p>
                        <p class="font-mono-space">${t('contact.privacy.body')}</p>
                    </div>

                </div>
            </div>

            <!-- RIGHT SIDE FORM -->
            <div class="flex flex-col justify-between border-[1px] border-[#2a2a2a] p-5 bg-[#151515] shadow-[5px_5px_0_var(--purple)]">

                <form class="space-y-8 text-[13px]">

                    <div>
                        <label class="block text-[11px]  text-[var(--purple)] mb-2 font-fragment">
                            VOTRE NOM
                        </label>
                        <input type="text" placeholder="Prénom Nom"
                            class="w-full bg-transparent border-b border-[#2a2a2a] pb-2 focus:outline-none focus:border-[var(--purple)]" />
                    </div>

                    <div>
                        <label class="block text-[11px]  text-[var(--purple)] mb-2 font-fragment">
                            EMAIL
                        </label>
                        <input type="email" placeholder="vous@domaine.fr"
                            class="w-full bg-transparent border-b border-[#2a2a2a] pb-2 focus:outline-none focus:border-[var(--purple)]" />
                    </div>

                    <div>
                        <label class="block text-[11px]  text-[var(--purple)] mb-2 font-fragment">
                            TYPE DE PROJET
                        </label>
                        <select
                            class="w-full bg-transparent border-b border-[#2a2a2a] pb-2 focus:outline-none focus:border-[var(--purple)]">
                            <option>— Choisir —</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-[11px]  text-[var(--purple)]  font-fragment">
                            VOTRE BESOIN
                        </label>
                        <textarea rows="3" placeholder="Ce que vous voulez construire, pour qui, dans quel délai..."
                            class="w-full bg-transparent border-b border-[#2a2a2a] resize-none focus:outline-none focus:border-[var(--purple)]"></textarea>
                    </div>

                </form>

                <!-- Button Area -->
                <div class="mt-10 bg-[#151515] p-6">
                    <button class="w-full py-4 btn-hero"> ENVOYER → </button>

                    <p class="mt-4 text-[10px] text-[var(--gray-p)] text-center">
                        PAS DE NEWSLETTER · PAS DE RELANCE · UNE PERSONNE LIRA VOTRE MESSAGE
                    </p>
                </div>

            </div>

        </div>
    `
}