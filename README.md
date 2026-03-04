# LaRéponse — lareponse.org

Site vitrine de **LaRéponse**, un studio de développement web qui conçoit des systèmes stables, lisibles et transmissibles. Zéro dette cachée, payé une fois, garanti à vie.

Déployé sur **GitHub Pages** → [lareponse.org](https://loicgrapp.github.io/lareponse.org/)

---

## Le projet

LaRéponse est fondé sur une règle unique et non négociable : **ne pas mentir sur la complexité**. Le site reflète cette philosophie : pas de framework, pas de dépendances inutiles, du code lisible et transmissible.

**Pages :**

| Route | Page | Num |
|---|---|---|
| `/` | Accueil | — |
| `/services` | Services proposés | 01 |
| `/about` | À propos & manifeste | 02 |
| `/pricing` | Tarifs & méthode | 04 |
| `/projects` | Projets internes | 05 |
| `/contact` | Formulaire de contact | 06 |

---

## Stack technique

| Outil | Rôle |
|---|---|
| **Vite 7** | Bundler / dev server |
| **Tailwind CSS v4** | Styles utilitaires |
| **Vanilla JS (ESM)** | Tout le reste — zéro framework |

Aucune dépendance runtime. Pas de React, Vue, Angular ou autre. Le site est une **SPA (Single Page Application)** construite à la main avec l'API History du navigateur.

---

## Installation & lancement

```bash
# Installer les dépendances
npm install

# Lancer en développement (http://localhost:5173)
npm run dev

# Compiler pour la production
npm run build

# Prévisualiser le build
npm run preview
```

> Le dossier racine de Vite est `src/` — les fichiers statiques (images, fonts) vont dans `src/public/`.

---

## Structure du projet

```
src/
├── index.html              # Point d'entrée HTML unique
├── index.js                # Bootstrap : routes + gridPulse
│
├── config/
│   └── constants.js        # Routes et constantes globales
│
├── router/
│   └── Router.js           # Router SPA (voir détail ci-dessous)
│
├── lang.js                 # Système de traduction (voir détail ci-dessous)
├── locales/
│   ├── fr.json             # Clés françaises
│   └── en.json             # Clés anglaises
│
├── layouts/
│   ├── Layout.js           # Assemblage Header + Main + Footer
│   ├── Header.js           # Navigation principale + burger mobile
│   ├── Footer.js           # Pied de page
│   └── Main.js             # Conteneur <main>
│
├── pages/
│   ├── HomePage.js         # Page d'accueil
│   ├── ServicesPage.js     # Page services
│   ├── Pricing.js          # Page tarifs & méthode
│   ├── Projects.js         # Page projets
│   ├── About.js            # Page à propos / manifeste
│   ├── contact.js          # Page contact
│   └── NotFoundPage.js     # Page 404
│
├── utils/
│   └── gridPulse.js        # Animation canvas (grille de points)
│
├── styles/
│   └── index.css           # Styles globaux + composants CSS
│
└── public/
    └── *.webp              # Images des projets
```

---

## Le Router

`src/router/Router.js` — implémentation maison de la navigation SPA via l'**API History** du navigateur. Aucune lib externe.

### Fonctionnement

```
clic [data-link] → navigate(path) → pushState() → handleRoute() → render(html)
bouton précédent → popstate event  → handleRoute() → render(html)
```

### Méthodes clés

**`addRoute(path, handler)`** — Enregistre une route. `handler` est une fonction qui retourne du HTML sous forme de string.

```js
router.addRoute('/', HomePage)
router.addRoute('/services', ServicesPage)
```

**`navigate(path)`** — Navigue vers une URL sans rechargement. Gère les ancres (`/pricing#methode`) : scrolle vers l'ancre si présente, sinon remet le scroll à zéro.

**`handleRoute(path)`** — Extrait la locale (`/fr/...`, `/en/...`) du chemin, puis délègue à `_matchAndRender()`. Si le chemin est `/`, redirige automatiquement vers la locale détectée du navigateur.

**`render(html)`** — Injecte le HTML dans `#app` via `Layout()`, puis réinitialise les comportements JS :
- `_setupMobileMenu()` — burger de navigation
- `_runTypingAnimations()` — effet machine à écrire sur `[data-typing]`
- `_setupProjectAccordion()` — accordéon de la page projets

### Gestion des URLs sur GitHub Pages

GitHub Pages ne supporte pas le routing côté serveur. Le trick utilisé :

```yaml
# .github/workflows/main.yml
- run: cp dist/index.html dist/404.html
```

GitHub Pages sert `404.html` quand une route n'existe pas — ce qui charge quand même l'app, et le router prend le relais.

---

## Le système de traductions

`src/lang.js` — système maison sans dépendance externe. Deux fichiers JSON, une fonction `t()`.

### Fonctions exportées

**`t(key, vars?)`** — Retourne la chaîne traduite pour la locale active. Fallback sur `en` si la clé est absente.

```js
t('hero.title.1')      // "NO" ou "NON"
t('pricing.c1.name')   // "Helping hand" ou "Coup de pouce"
```

**`localePath(path)`** — Préfixe un chemin avec la locale et la base URL.

```js
localePath('/contact')
// dev  → "/fr/contact"
// prod → "/lareponse.org/fr/contact"
```

**`getLocale()`** — Lit la locale dans l'URL (`/fr/...` → `'fr'`).

**`detectBrowserLocale()`** — Lit `navigator.language` et retourne `'fr'` ou `'en'` (défaut `'en'`).

**`switchLocalePath(newLocale)`** — Retourne l'URL équivalente dans une autre locale, pour le sélecteur de langue.

### Ajouter une clé de traduction

1. Ajouter la clé dans `src/locales/fr.json`
2. Ajouter la même clé dans `src/locales/en.json`
3. Utiliser `${t('ma.cle')}` dans la page

### Structure des clés

```
nav.*          Navigation
hero.*         Section hero de l'accueil
proof.*        4 réassurances (accueil)
services.*     Page services + aperçu accueil
s1-s6.*        Contenu des 6 services
pricing.*      Page tarifs
about.*        Page à propos
projects.*     Page projets
contact.*      Page contact
cta.*          Appels à l'action globaux
value.*        Bandeau valeurs (accueil)
manifeste.*    Bloc manifeste (accueil)
footer.*       Pied de page
```

---

## L'animation canvas (Grid Pulse)

`src/utils/gridPulse.js` — grille de points violets animés en arrière-plan, via un `<canvas>` fixé derrière tout le contenu (`mix-blend-mode: screen`).

- Respecte `prefers-reduced-motion` : si l'utilisateur a activé la réduction de mouvement, l'animation ne se lance pas.
- Les éléments avec la classe `.no-dots` masquent les points en effaçant la zone canvas correspondante à chaque frame (`ctx.clearRect`).

---

## Déploiement

Le déploiement est **entièrement automatique** via GitHub Actions.

### Workflow (`.github/workflows/main.yml`)

1. **Déclencheur** : chaque push sur `main` (ou lancement manuel via `workflow_dispatch`)
2. **Build** : `npm ci` puis `npm run build` → génère `dist/`
3. **404 SPA** : `cp dist/index.html dist/404.html` — permet au router de fonctionner sur toutes les routes
4. **Deploy** : upload de `dist/` vers GitHub Pages via `actions/deploy-pages`

```
push main → build → cp 404.html → deploy GitHub Pages
```

> Aucune variable d'environnement requise. Aucun secret à configurer.

---

## Conventions de code

**Pages** — chaque page est une fonction pure qui retourne une string HTML :

```js
export function ServicesPage() {
  return `<div>...</div>`;
}
```

**Styles** — Tailwind pour les layouts, CSS custom dans `index.css` pour les composants répétés (`.proj-*`, `.svc-*`, `.axiom-*`, etc.)

**Assets** — les images sont dans `src/public/` au format `.webp`. Les chemins utilisent `import.meta.env.BASE_URL`.

`import.meta.env` est un objet injecté par Vite **au moment du build** — il n'a rien à voir avec un fichier `.env`. Vite détermine le mode selon la commande lancée :

- `npm run dev` → Vite sert en local, `BASE_URL = "/"`
- `npm run build` → Vite compile pour la prod, `BASE_URL = "/lareponse.org/"` (valeur de `base` dans `vite.config.js`)

```js
// vite.config.js
base: "/lareponse.org/"

// Dans le code
const BASE = import.meta.env.BASE_URL;

// npm run dev   → BASE = "/"                  → src="/dashbored-projects.webp"
// npm run build → BASE = "/lareponse.org/"    → src="/lareponse.org/dashbored-projects.webp"

`<img src="${BASE}dashbored-projects.webp">`
```

Sans ça, les images seraient cassées en production car GitHub Pages sert le site sous `/lareponse.org/` et non `/`.

**Liens internes** — toujours utiliser `data-link` + `localePath()` pour que le router intercepte le clic et que la locale soit conservée :

```html
<a href="${localePath('/contact')}" data-link>Contact</a>
```
