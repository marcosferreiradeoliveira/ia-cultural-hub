import { useI18n, type Locale } from '@/i18n';

const localeLabels: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
};

export const LanguageSwitcher = () => {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      className="language-switcher fixed top-4 right-4 z-[100] flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest no-glitch"
      role="group"
      aria-label={t.language.label}
    >
      {(['pt', 'en', 'es'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`px-2 py-1 border transition-colors ${
            locale === code
              ? 'border-terminal-green text-terminal-green bg-terminal-green/10'
              : 'border-border/40 text-muted-foreground hover:border-terminal-green/50 hover:text-foreground'
          }`}
          aria-pressed={locale === code}
          aria-label={localeLabels[code]}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
};
