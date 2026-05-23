import { Link } from 'react-router-dom';
import ContactCards from '../components/ContactCards.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { externalLinkProps, gymData } from '../data/gymData.js';

const previewLinks = [
  {
    to: '/services',
    title: 'სერვისები',
    text: 'დარბაზი, წონები, კარდიო ზონა, ტრენაჟორები და პერსონალური ვარჯიში.',
  },
  {
    to: '/pricing',
    title: 'ფასები',
    text: 'აქტუალური პირობები და FitPass-ის მიღება გადაამოწმეთ ტელეფონით.',
  },
  {
    to: '/contact',
    title: 'კონტაქტი',
    text: 'დარეკეთ, ნახეთ რუკა და დაგეგმეთ პირველი ვარჯიში გუდვილ დიღომთან.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-content">
          <p className="eyebrow">გუდვილ დიღომთან ახლოს</p>
          <h1>{gymData.name}</h1>
          <p className="hero-lead">
            სუფთა, ფართო და მშვიდი დარბაზი პერსონალური ვარჯიშისთვის. დაიწყე თავდაჯერებულად,
            პროფესიონალ ინსტრუქტორთან და გარემოში, სადაც ზედმეტი ხმაური არ გაბრკოლებს.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={gymData.phones[0].href}>
              დარეკვა
            </a>
            <a className="button secondary" href={gymData.googleMaps} {...externalLinkProps}>
              რუკაზე ნახვა
            </a>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container stats-strip" aria-label="მოკლე ინფორმაცია">
          <div>
            <strong>{gymData.rating.value}</strong>
            <span>{gymData.rating.source} შეფასება</span>
          </div>
          <div>
            <strong>{gymData.rating.reviews}</strong>
            <span>მიმოხილვა</span>
          </div>
          <div>
            <strong>07:30</strong>
            <span>ყოველდღე გახსნა</span>
          </div>
          <div>
            <strong>FitPass</strong>
            <span>მიიღება</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div>
            <SectionHeader eyebrow="პირველი ნაბიჯი მარტივია" title="დარბაზი, სადაც დაწყება არ გართულდება">
              Pro fitness Digomi შექმნილია მათთვის, ვისაც სურს მშვიდი რიტმით, სუფთა სივრცეში
              და პროფესიონალი მწვრთნელის გვერდით დაიწყოს ან გააგრძელოს ვარჯიში.
            </SectionHeader>
            <div className="inline-actions">
              <Link className="text-link" to="/about">
                გაიგე მეტი
              </Link>
              <Link className="text-link" to="/services">
                ნახე სერვისები
              </Link>
            </div>
          </div>
          <ul className="highlight-list" aria-label="ძირითადი უპირატესობები">
            {gymData.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeader eyebrow="რას ამბობენ სტუმრები" title="მშვიდი, სუფთა და პროფესიონალური გარემო">
            შეფასებებში ყველაზე ხშირად ჩანს სისუფთავე, კარგი სივრცე, მშვიდი მუსიკა და
            ინსტრუქტორების მეგობრული დამოკიდებულება.
          </SectionHeader>
          <div className="card-grid reviews-grid">
            {gymData.reviewThemes.map((theme) => (
              <article className="review-card" key={theme.title}>
                <h2>{theme.title}</h2>
                <p>{theme.description}</p>
              </article>
            ))}
          </div>
          <p className="small-note">
            მცირე შენიშვნებში ზოგჯერ ახსენებენ გახსნის დაგვიანებას და მხრის ვარჯიშისთვის
            კონკრეტული ტრენაჟორების შეზღუდულ არჩევანს.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="სწრაფი გზები" title="აირჩიე შემდეგი ნაბიჯი">
            ნახე ძირითადი სერვისები, გადაამოწმე ფასები ტელეფონით ან პირდაპირ დაგეგმე ვიზიტი.
          </SectionHeader>
          <div className="card-grid preview-grid">
            {previewLinks.map((item) => (
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
          <SectionHeader eyebrow="დაგვიკავშირდი" title="პირველი ვარჯიში იწყება ზარით">
            ყველაზე სწრაფი გზა აქტუალური ინფორმაციის მისაღებად არის ტელეფონით დაკავშირება.
          </SectionHeader>
          <ContactCards />
        </div>
      </section>
    </>
  );
}
