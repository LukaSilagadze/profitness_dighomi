import SectionHeader from '../components/SectionHeader.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Services() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeader eyebrow={t.services.hero.eyebrow} title={t.services.hero.title}>
            {t.services.hero.body}
          </SectionHeader>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid service-grid">
          {t.services.items.map((service) => (
            <article className="service-card" key={service.title}>
              <span aria-hidden="true" />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
