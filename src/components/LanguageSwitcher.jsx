import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { publicAsset } from '../utils/publicAsset.js';

function FlagIcon({ languageId }) {
  if (languageId === 'en') {
    return (
      <img src={publicAsset('/images/uk.svg')} alt="" aria-hidden="true" />
    );
  }

  if (languageId === 'ru') {
    return (
      <img src={publicAsset('/images/russia.svg')} alt="" aria-hidden="true" />
    );
  }

  return (
    <img src={publicAsset('/images/georgia.svg')} alt="" aria-hidden="true" />
  );
}

export default function LanguageSwitcher({ className = '' }) {
  const [open, setOpen] = useState(false);
  const { currentLanguage, languages, setLanguage, t } = useLanguage();
  const switcherRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (!switcherRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const switcherClassName = ['language-switcher', className].filter(Boolean).join(' ');

  return (
    <div className={switcherClassName} ref={switcherRef}>
      <button
        className="language-trigger"
        type="button"
        aria-label={t.aria.languageSwitcher}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((current) => !current)}
      >
        <span className="language-flag" aria-hidden="true">
          <FlagIcon languageId={currentLanguage.id} />
        </span>
        <span>{currentLanguage.shortLabel}</span>
        <svg className="language-chevron" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path d="m4 6 4 4 4-4" />
        </svg>
      </button>

      {open && (
        <div className="language-menu" role="listbox" aria-label={t.aria.languageMenu}>
          {languages.map((item) => (
            <button
              className={item.id === currentLanguage.id ? 'language-option active' : 'language-option'}
              type="button"
              role="option"
              aria-selected={item.id === currentLanguage.id}
              key={item.id}
              onClick={() => {
                setLanguage(item.id);
                setOpen(false);
              }}
            >
              <span className="language-flag" aria-hidden="true">
                <FlagIcon languageId={item.id} />
              </span>
              <span>{item.shortLabel}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
