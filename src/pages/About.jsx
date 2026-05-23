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
        <div className="container about-section">
          <div className="prose">
            <p className="eyebrow">გარემო</p>
            <h2>სუფთა, ფართო და მშვიდი დარბაზი</h2>
            <p>
              დარბაზი კომფორტულია როგორც დამწყებისთვის, ისე მათთვის, ვინც უკვე რეგულარულად
              ვარჯიშობს. სივრცე მოწესრიგებულია, მშვიდია და არ არის გადატვირთული.
            </p>
            <p>
              აქ შეგიძლია ივარჯიშო კონცენტრირებულად, ზედმეტი ხმაურისა და დაძაბული ატმოსფეროს
              გარეშე. მდებარეობა გუდვილ დიღომთან ახლოს ყოველდღიურ ვიზიტსაც მარტივს ხდის.
            </p>
          </div>

          <figure className="about-image-placeholder">
            <span>ფოტოს ადგილი</span>
            <p>დარბაზის საერთო სივრცე</p>
          </figure>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container about-section about-section-reverse">
          <figure className="about-image-placeholder">
            <span>ფოტოს ადგილი</span>
            <p>კარდიო და ტრენაჟორები</p>
          </figure>

          <div className="prose">
            <p className="eyebrow">დაწყება</p>
            <h2>დამწყებისთვის მეგობრული ატმოსფერო</h2>
            <p>
              პირველი ნაბიჯი ხშირად ყველაზე რთულია. Pro fitness Digomi-ში გარემო მარტივი,
              მშვიდი და მხარდამჭერია, რომ ვარჯიში თავდაჯერებულად დაიწყო.
            </p>
            <p>
              შეგიძლია მშვიდად გაეცნო ტრენაჟორებს, აირჩიო ტემპი და თანდათან გაზარდო დატვირთვა.
              მთავარი აქ სტაბილური პროგრესია, არა ზედმეტი წნეხი.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-section">
          <div className="prose">
            <p className="eyebrow">მწვრთნელები</p>
            <h2>პერსონალური ვარჯიში პროფესიონალთან ერთად</h2>
            <p>
              პერსონალური ვარჯიში ხელმისაწვდომია მათთვის, ვისაც სურს სწორი ტექნიკა,
              სტაბილური პროგრამა და პროფესიონალური მხარდაჭერა.
            </p>
            <p>
              მწვრთნელები და ინსტრუქტორები მისაწვდომ და პროფესიონალურ შთაბეჭდილებას ტოვებენ,
              რაც პირველ ვიზიტს უფრო მარტივს ხდის.
            </p>
          </div>

          <div className="about-placeholder-grid">
            <figure className="about-image-placeholder small">
              <span>ფოტო</span>
              <p>პერსონალური ვარჯიში</p>
            </figure>
            <figure className="about-image-placeholder small">
              <span>ფოტო</span>
              <p>თავისუფალი წონები</p>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
