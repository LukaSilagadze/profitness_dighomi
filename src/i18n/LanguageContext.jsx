import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { defaultLanguage, languages, languageStorageKey, translations } from './translations.js';

const LanguageContext = createContext(null);

function isSupportedLanguage(language) {
  return Object.prototype.hasOwnProperty.call(translations, language);
}

function getStoredLanguage() {
  if (typeof window === 'undefined') {
    return defaultLanguage;
  }

  try {
    const storedLanguage = window.localStorage.getItem(languageStorageKey);
    return isSupportedLanguage(storedLanguage) ? storedLanguage : defaultLanguage;
  } catch {
    return defaultLanguage;
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getStoredLanguage);

  const setLanguage = (nextLanguage) => {
    if (isSupportedLanguage(nextLanguage)) {
      setLanguageState(nextLanguage);
    }
  };

  useEffect(() => {
    try {
      window.localStorage.setItem(languageStorageKey, language);
    } catch {
      // Ignore storage failures; the selected language still works for this render.
    }

    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => {
    const currentLanguage = languages.find((item) => item.id === language) ?? languages[0];

    return {
      currentLanguage,
      language,
      languages,
      setLanguage,
      t: translations[language] ?? translations[defaultLanguage],
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  return context;
}
