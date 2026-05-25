import SectionHeader from '../components/SectionHeader.jsx';
import { externalLinkProps, gymData } from '../data/gymData.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeader eyebrow={t.contact.hero.eyebrow} title={t.contact.hero.title}>
            {t.contact.hero.body}
          </SectionHeader>
        </div>
      </section>

      <section className="section">
        <div className="container contact-map-layout">
          <div className="contact-info-panel" aria-label={t.common.contactInfo}>
            <section className="contact-info-group">
              <h2>{t.common.phone}</h2>
              {gymData.phones.map((phone) => (
                <a key={phone.href} href={phone.href}>
                  {phone.label}
                </a>
              ))}
            </section>

            <section className="contact-info-group">
              <h2>{t.common.email}</h2>
              <a href={`mailto:${gymData.email}`}>{gymData.email}</a>
            </section>

            <section className="contact-info-group">
              <h2>{t.common.address}</h2>
              <p>{gymData.address}</p>
              <p>{t.contact.addressLine}</p>
            </section>

            <section className="contact-info-group">
              <h2>{t.common.workingHours}</h2>
              <p>{t.contact.hoursLine}</p>
            </section>

            <div className="contact-social-actions" aria-label={t.common.socialNetworks}>
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

          <div className="contact-map-panel">
            <iframe
              title={t.contact.mapTitle}
              src="https://www.google.com/maps?q=20%20Vefkhistkaosani%20St%2C%20Tbilisi%200159&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
