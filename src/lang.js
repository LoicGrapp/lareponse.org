import en from './locales/en.json';
import fr from './locales/fr.json';

const LOCALES = { en, fr };
export const SUPPORTED_LOCALES = ['en', 'fr'];
export const DEFAULT_LOCALE = 'en';

const BASE = import.meta.env.BASE_URL; // '/' en dev, '/lareponse.org/' en prod

function stripBase(path) {
  return path.startsWith(BASE) ? '/' + path.slice(BASE.length) : path;
}

export function getLocale() {
  const cleanPath = stripBase(window.location.pathname);
  const match = cleanPath.match(/^\/(en|fr)/);
  return match ? match[1] : DEFAULT_LOCALE;
}

export function t(key, vars = {}) {
  const dict = LOCALES[getLocale()] ?? LOCALES[DEFAULT_LOCALE];
  let str = dict[key] ?? LOCALES[DEFAULT_LOCALE][key] ?? key;
  Object.entries(vars).forEach(([k, v]) => {
    str = str.replace(`{{${k}}}`, v);
  });
  return str;
}

export function localePath(path) {
  const locale = getLocale();
  if (path === '/') return `${BASE}${locale}/`;
  return `${BASE}${locale}${path}`;
}

export function switchLocalePath(newLocale) {
  const cleanPath = stripBase(window.location.pathname);
  const withoutLocale = cleanPath.replace(/^\/(en|fr)/, '') || '/';
  if (withoutLocale === '/') return `${BASE}${newLocale}/`;
  return `${BASE}${newLocale}${withoutLocale}`;
}

export function detectBrowserLocale() {
  const lang = (navigator.language || 'en').split('-')[0];
  return SUPPORTED_LOCALES.includes(lang) ? lang : DEFAULT_LOCALE;
}
