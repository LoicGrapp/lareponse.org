import { APP_NAME, ROUTES } from '../config/constants.js';

/**
 * Composant Header - Barre de navigation principale
 */
export function Header() {
  return `
    <header class="bg-(--black) to-black border-b border-white/5">
        <nav class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between border-b-2 border-white/10">

            <!-- Logo -->
            <a href="#" class="flex items-center gap-3 text-white">
                <span class="text-accentRed text-xl font-bold">?</span>
                <span class="uppercase tracking-widest font-semibold text-sm">Laréponse</span>
            </a>
            <!-- Nav Links -->
            <ul class="hidden md:flex self-stretch border-l-2 border-white/10 pl-8 items-start space-x-10 text-xs tracking-widest uppercase">
                <li class="pr-6 border-r-2 border-white/10"><a href="#" class="text-white border-b-2 border-accentRed pb-1">Accueil</a></li>
                <li class="pr-6 border-r-2 border-white/10"><a href="#" class="text-gray-400 hover:text-white transition">Manifeste</a></li>
                <li class="pr-6 border-r-2 border-white/10"><a href="#" class="text-gray-400 hover:text-white transition">Méthode</a></li>
                <li class="pr-6 border-r-2 border-white/10"><a href="#" class="text-gray-400 hover:text-white transition">Tarifs</a></li>
                <li class="pr-6 border-r-2 border-white/10"><a href="#" class="text-gray-400 hover:text-white transition">Services</a></li>
                <li class="pr-6 border-r-2 border-white/10"><a href="#" class="text-gray-400 hover:text-white transition">Projets</a></li>
            </ul>

            <!-- Contact Button -->
            <a href="#" class="hidden md:inline-flex items-center bg-accentRed text-white text-xs uppercase tracking-widest px-6 py-4 hover:bg-red-700 transition">Contact<span class="ml-2">→</span></a>

            <!-- Mobile Button -->
            <button class="md:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </nav>
    </header>
  `;
}