import SectionHeader from '../components/SectionHeader.jsx';
import { externalLinkProps } from '../data/gymData.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

const fitpassLogoSrc = '/images/fitpass.png';

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeader eyebrow={t.pricing.hero.eyebrow} title={t.pricing.hero.title} />
        </div>
      </section>

      <section className=" section-muted package-section">
        <div className="container">

          <div className="price-package-grid">
            {t.pricing.packages.map((item) => (
              <article className="price-package-card" key={item.title}>
                <div>
                  <p>{item.note}</p>
                  <h2>{item.title}</h2>
                </div>
                <strong>{item.price}</strong>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container fitpass-highlight">
          <div className="fitpass-logo-placeholder" aria-label={t.pricing.fitpass.logoAria}>
            <img src={fitpassLogoSrc} alt={t.pricing.fitpass.logoAlt} />
          </div>

          <div>
            <p className="eyebrow">{t.pricing.fitpass.eyebrow}</p>
            <h2>{t.pricing.fitpass.title}</h2>
            <p>{t.pricing.fitpass.body}</p>
            <a className="button primary fitpass-link" href="https://fitpass.ge/%E1%83%9D%E1%83%91%E1%83%98%E1%83%94%E1%83%A5%E1%83%A2%E1%83%94%E1%83%91%E1%83%98/pro-fitness-5" {...externalLinkProps}>
              {t.pricing.fitpass.link}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
