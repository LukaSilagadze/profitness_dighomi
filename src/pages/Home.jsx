import { Link } from 'react-router-dom';
import ContactCards from '../components/ContactCards.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { externalLinkProps, gymData } from '../data/gymData.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow">{t.home.heroEyebrow}</p>
            <h1>{gymData.name}</h1>
            <p className="hero-lead">{t.home.heroLead}</p>
            <div className="hero-actions">
              <a className="button primary" href={gymData.phones[0].href}>
                {t.common.call}
              </a>
              <a className="button secondary" href={gymData.googleMaps} {...externalLinkProps}>
                {t.common.viewMap}
              </a>
            </div>
          </div>

          <div className="hero-media-placeholder" aria-label={t.aria.mainVideo}>
            <iframe
              title={t.home.videoTitle}
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61557244419412%2Fvideos%2F534464599313130%2F&show_text=false&width=560&t=0&autoplay=true"
              width="560"
              height="314"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container stats-strip" aria-label={t.aria.quickInfo}>
          <div>
            <strong>{gymData.rating.value}</strong>
            <span>{t.home.stats.ratingLabel}</span>
          </div>
          <div>
            <strong>{gymData.rating.reviews}</strong>
            <span>{t.common.reviews}</span>
          </div>
          <div>
            <strong>07:30 - 00:00</strong>
            <span>{t.home.stats.hoursLabel}</span>
          </div>
          <div>
            <strong>FitPass</strong>
            <span>{t.home.stats.fitpassLabel}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div>
            <SectionHeader eyebrow={t.home.intro.eyebrow} title={t.home.intro.title}>
              {t.home.intro.body}
            </SectionHeader>
            <div className="inline-actions">
              <Link className="text-link" to="/about">
                {t.common.learnMore}
              </Link>
              <Link className="text-link" to="/services">
                {t.common.seeServices}
              </Link>
            </div>
          </div>
          <ul className="highlight-list" aria-label={t.aria.highlights}>
            {t.services.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeader eyebrow={t.home.reviews.eyebrow} title={t.home.reviews.title}>
            {t.home.reviews.body}
          </SectionHeader>
          <div className="card-grid reviews-grid">
            {t.services.reviewThemes.map((theme) => (
              <article className="review-card" key={theme.title}>
                <h2>{theme.title}</h2>
                <p>{theme.description}</p>
              </article>
            ))}
          </div>
          <p className="small-note">{t.home.reviews.note}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={t.home.quick.eyebrow} title={t.home.quick.title}>
            {t.home.quick.body}
          </SectionHeader>
          <div className="card-grid preview-grid">
            {t.home.previewLinks.map((item) => (
              <Link className="preview-card" to={item.to} key={item.to}>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-band">
        <div className="container">
          <SectionHeader eyebrow={t.home.contact.eyebrow} title={t.home.contact.title}>
            {t.home.contact.body}
          </SectionHeader>
          <ContactCards />
        </div>
      </section>
    </>
  );
}
