import en from './en.json';
import ar from './ar.json';

export const languages = ['en', 'ar'] as const; // add 'de' later
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

const ui: Record<Lang, unknown> = { en, ar };

export const dir = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');

/** Translate by dot path, e.g. t('nav.home'). Falls back to English, then the key. */
export function useTranslations(lang: Lang) {
  const lookup = (dict: unknown, key: string) =>
    key.split('.').reduce<any>((o, k) => (o == null ? o : o[k]), dict);
  return <T = string>(key: string): T => (lookup(ui[lang], key) ?? lookup(ui[defaultLang], key) ?? key) as T;
}

/** Pick the right language from a { en, ar } field. */
export type Localized<T = string> = Record<Lang, T>;
export const pick = <T>(field: Localized<T>, lang: Lang): T => field[lang] ?? field[defaultLang];

/** Build a site URL for a language; `path` starts with "/" (e.g. "/products/"). Respects astro `base`. */
export function localizedPath(lang: Lang, path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${lang}${path}`;
}

/** Static paths for every language: use in getStaticPaths of src/pages/[lang]/*.astro */
export const langPaths = () => languages.map((lang) => ({ params: { lang } }));
