import { Link } from 'react-router-dom';
import { externalLinkProps, gymData } from '../data/gymData.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

const logoSrc = '/images/logo.png';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="footer-brand" to="/">
            <span className="brand-mark footer-brand-mark">
              <img src={logoSrc} alt="Pro Fitness Digomi" />
            </span>
            <span>{gymData.name}</span>
          </Link>
          <p>{gymData.address}</p>
          <p>{t.contact.addressLine}</p>
        </div>

        <div>
          <h2>{t.common.workingHours}</h2>
          <p>{t.footer.hoursLine}</p>
          <p>
            {t.common.preferredChannel}: {t.business.preferredContact}
          </p>
        </div>

        <div>
          <h2>{t.common.links}</h2>
          <div className="footer-links">
            <a href={gymData.instagram.href} {...externalLinkProps}>
              {t.common.instagram}
            </a>
            <a href={gymData.facebook.href} {...externalLinkProps}>
              {t.common.facebook}
            </a>
            <a href={gymData.googleMaps} {...externalLinkProps}>
              {t.common.map}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
