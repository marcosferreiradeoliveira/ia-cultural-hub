import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { pt, type Translations } from './locales/pt';
import { en } from './locales/en';
import { es } from './locales/es';

export type Locale = 'pt' | 'en' | 'es';

const STORAGE_KEY = 'locale';

const locales: Record<Locale, Translations> = { pt, en, es };

const htmlLang: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en',
  es: 'es',
};

function detectBrowserLocale(): Locale {
  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const lang of languages) {
    const code = lang.toLowerCase().split('-')[0];
    if (code === 'pt') return 'pt';
    if (code === 'en') return 'en';
    if (code === 'es') return 'es';
  }

  return 'pt';
}

function resolveInitialLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'pt' || stored === 'en' || stored === 'es') {
    return stored;
  }
  return detectBrowserLocale();
}

interface I18nContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(resolveInitialLocale);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  useEffect(() => {
    document.documentElement.lang = htmlLang[locale];
    document.title = locales[locale].meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', locales[locale].meta.description);
    }
  }, [locale]);

  const value = useMemo(
    () => ({ locale, t: locales[locale], setLocale }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
