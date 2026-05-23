import SectionHeader from '../components/SectionHeader.jsx';
import { gymData } from '../data/gymData.js';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeader eyebrow="ჩვენს შესახებ" title="მშვიდი სივრცე ფოკუსირებული ვარჯიშისთვის">
            {gymData.name} მდებარეობს {gymData.landmark}თან ახლოს და ორიენტირებულია სუფთა,
            ფართო და არაგადატვირთულ გარემოზე.
          </SectionHeader>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div className="prose">
            <p>
              დარბაზი კომფორტულია როგორც დამწყებისთვის, ისე მათთვის, ვინც უკვე რეგულარულად
              ვარჯიშობს. გარემო მშვიდია, სივრცე მოწესრიგებულია, ხოლო ვარჯიში არ ხდება
              გადატვირთულ და დაძაბულ ატმოსფეროში.
            </p>
            <p>
              პერსონალური ვარჯიში ხელმისაწვდომია მათთვის, ვისაც სურს სწორი ტექნიკა,
              სტაბილური პროგრამა და პროფესიონალური მხარდაჭერა. მწვრთნელები და ინსტრუქტორები
              მისაწვდომ და პროფესიონალურ შთაბეჭდილებას ტოვებენ, რაც პირველ ვიზიტს უფრო მარტივს ხდის.
            </p>
            <p>
              თუ გინდა დაიწყო ფრთხილად, გაიგო შენი შესაძლებლობები და ეტაპობრივად გაზარდო
              დატვირთვა, ეს სივრცე სწორედ ასეთი რიტმისთვისაა შესაფერისი.
            </p>
          </div>

          <figure className="image-panel">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
              alt="სუფთა ფიტნეს სივრცე ტრენაჟორებით"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
