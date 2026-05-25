import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { gymData } from '../data/gymData.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

const logoSrc = '/images/logo.png';

function HeaderIcon({ children }) {
  return (
    <span className="header-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        {children}
      </svg>
    </span>
  );
}

function ClockIcon() {
  return (
    <HeaderIcon>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2" />
    </HeaderIcon>
  );
}

function MailIcon() {
  return (
    <HeaderIcon>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="m5 8 7 5 7-5" />
    </HeaderIcon>
  );
}

function PhoneIcon() {
  return (
    <HeaderIcon>
      <path d="M8.5 5.5 10.4 9l-1.7 1.4a10.5 10.5 0 0 0 4.9 4.9l1.4-1.7 3.5 1.9-.4 2.7c-.1.7-.7 1.2-1.4 1.2A12.1 12.1 0 0 1 4.6 7.3c0-.7.5-1.3 1.2-1.4l2.7-.4Z" />
    </HeaderIcon>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const primaryHours = gymData.hours[0]?.time ?? t.header.hoursFallback;
  const navItems = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/pricing', label: t.nav.pricing },
    { to: '/contact', label: t.nav.contact },
  ];
  const formattedHours = t.header.hoursText.replace('{hours}', primaryHours);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container header-top-inner">
          <Link className="brand-link" to="/" aria-label={t.aria.homeLink}>
            <span className="brand-mark">
              <img src={logoSrc} alt="Pro Fitness Digomi" />
            </span>
            <span>
              <strong>{gymData.name}</strong>
            </span>
          </Link>

          <div className="header-meta" aria-label={t.common.contactInfo}>
            <div className="header-meta-item">
              <ClockIcon />
              <div>
                <span>{t.header.hours}</span>
                <strong>{formattedHours}</strong>
              </div>
            </div>

            <div className="header-meta-item">
              <MailIcon />
              <div>
                <span>{t.common.email}</span>
                <a href={`mailto:${gymData.email}`}>{gymData.email}</a>
              </div>
            </div>

            <div className="header-meta-item">
              <PhoneIcon />
              <div>
                <span>{t.common.phone}</span>
                {gymData.phones.map((phone) => (
                  <a key={phone.href} href={phone.href}>
                    {phone.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <button
            className="menu-toggle"
            type="button"
            aria-label={t.aria.openNav}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container header-bottom-inner">
          <nav
            id="primary-navigation"
            className={open ? 'main-nav is-open' : 'main-nav'}
            aria-label={t.aria.mainNav}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="mobile-menu-panel">
              <LanguageSwitcher className="mobile-language-switcher" />

              <div className="social-links mobile-social-links" aria-label={t.common.socialNetworks}>
                <a href={gymData.facebook.href} target="_blank" rel="noreferrer">
                  {t.common.facebook}
                </a>
                <a href={gymData.instagram.href} target="_blank" rel="noreferrer">
                  {t.common.instagram}
                </a>
              </div>

              <div className="mobile-contact-list" aria-label={t.common.contactInfo}>
                <span>{formattedHours}</span>
                <a href={`mailto:${gymData.email}`}>{gymData.email}</a>
                {gymData.phones.map((phone) => (
                  <a key={phone.href} href={phone.href}>
                    {phone.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="header-actions">
            <div className="social-links" aria-label={t.common.socialNetworks}>
              <a href={gymData.facebook.href} target="_blank" rel="noreferrer">
                {t.common.facebook}
              </a>
              <a href={gymData.instagram.href} target="_blank" rel="noreferrer">
                {t.common.instagram}
              </a>
            </div>
            <LanguageSwitcher className="language-slot" />
          </div>
        </div>
      </div>
    </header>
  );
}
