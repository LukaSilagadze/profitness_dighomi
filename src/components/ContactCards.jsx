import { externalLinkProps, gymData } from '../data/gymData.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function ContactCards() {
  const { t } = useLanguage();

  return (
    <div className="contact-card-grid" aria-label={t.common.contactInfo}>
      <article className="contact-card">
        <span>{t.common.phone}</span>
        <h2>{t.contactCards.phoneTitle}</h2>
        {gymData.phones.map((phone) => (
          <a key={phone.href} href={phone.href}>
            {phone.label}
          </a>
        ))}
      </article>

      <article className="contact-card">
        <span>{t.common.address}</span>
        <h2>{t.contactCards.addressTitle}</h2>
        <p>{gymData.address}</p>
        <a href={gymData.googleMaps} {...externalLinkProps}>
          {t.common.viewMap}
        </a>
      </article>

      <article className="contact-card">
        <span>{t.common.socialNetworks}</span>
        <h2>{t.contactCards.socialTitle}</h2>
        <a href={gymData.instagram.href} {...externalLinkProps}>
          {gymData.instagram.label}
        </a>
        <a href={gymData.facebook.href} {...externalLinkProps}>
          {t.common.facebookPage}
        </a>
      </article>
    </div>
  );
}
