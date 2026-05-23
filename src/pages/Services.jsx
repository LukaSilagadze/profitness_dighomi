import SectionHeader from '../components/SectionHeader.jsx';
import { gymData } from '../data/gymData.js';

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeader eyebrow="სერვისები" title="ყველაფერი მთავარი ვარჯიშისთვის">
            დადასტურებული სერვისები მარტივად და მკაფიოდ: დარბაზი, ინვენტარი, ტრენაჟორები,
            კარდიო ზონა, პერსონალური ვარჯიში და გასახდელი სივრცე.
          </SectionHeader>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid service-grid">
          {gymData.services.map((service) => (
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
