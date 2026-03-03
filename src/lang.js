import en from './locales/en.json';
import fr from './locales/fr.json';

const LOCALES = { en, fr };
export const SUPPORTED_LOCALES = ['en', 'fr'];
export const DEFAULT_LOCALE = 'en';

export function getLocale() {
  const match = window.location.pathname.match(/^\/(en|fr)/);
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
  return `/${getLocale()}${path === '/' ? '' : path}`;
}

export function detectBrowserLocale() {
  const lang = (navigator.language || 'en').split('-')[0];
  return SUPPORTED_LOCALES.includes(lang) ? lang : DEFAULT_LOCALE;
}
