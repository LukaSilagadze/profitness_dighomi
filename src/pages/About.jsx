import SectionHeader from '../components/SectionHeader.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { publicAsset } from '../utils/publicAsset.js';

export default function About() {
  const { t } = useLanguage();
  const [environment, start, trainers] = t.about.sections;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeader eyebrow={t.about.hero.eyebrow} title={t.about.hero.title}>
            {t.about.hero.body}
          </SectionHeader>
        </div>
      </section>

      <section className="section">
        <div className="container about-section">
          <div className="prose">
            <p className="eyebrow">{environment.eyebrow}</p>
            <h2>{environment.title}</h2>
            {environment.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-image-placeholder">
            <img src={publicAsset('/images/image1.jpg')} alt={environment.imageAlt} />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container about-section about-section-reverse">
          <div className="about-image-placeholder">
            <img src={publicAsset('/images/image2.jpg')} alt={start.imageAlt} />
          </div>

          <div className="prose">
            <p className="eyebrow">{start.eyebrow}</p>
            <h2>{start.title}</h2>
            {start.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-section">
          <div className="prose">
            <p className="eyebrow">{trainers.eyebrow}</p>
            <h2>{trainers.title}</h2>
            {trainers.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-placeholder-grid">
            <figure className="about-image-placeholder small">
              <img src={publicAsset('/images/image3.jpg')} alt={trainers.imageAltPrimary} />
            </figure>
            <figure className="about-image-placeholder small">
              <img src={publicAsset('/images/image4.jpg')} alt={trainers.imageAltSecondary} />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
