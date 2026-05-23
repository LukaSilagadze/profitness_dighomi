import SectionHeader from '../components/SectionHeader.jsx';
import { externalLinkProps } from '../data/gymData.js';

const packageIncludes = ['სავარჯიშო დარბაზი', 'ულიმიტო ვიზიტები'];
const fitpassLogoSrc = `${import.meta.env.BASE_URL}images/fitpass.png`;

const pricePackages = [
  {
    title: 'დღიური აბონიმენტი',
    price: '20 ₾',
    note: 'ერთჯერადი ვიზიტი',
  },
  {
    title: '7-დღიანი აბონიმენტი',
    price: '70 ₾',
    note: '7 დღე',
  },
  {
    title: 'თვიური აბონიმენტი',
    price: '150 ₾',
    note: '30 დღე',
  },
  {
    title: 'ოჯახის აბონიმენტი',
    price: '250 ₾',
    note: 'ოჯახური პაკეტი',
  },
  {
    title: 'სტუდენტების აბონიმენტი',
    price: '100 ₾',
    note: 'სტუდენტური პირობით',
  },
];

export default function Pricing() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeader eyebrow="ფასები" title="პაკეტები და FitPass">
          </SectionHeader>
        </div>
      </section>

      <section className=" section-muted package-section">
        <div className="container">

          <div className="price-package-grid">
            {pricePackages.map((item) => (
              <article className="price-package-card" key={item.title}>
                <div>
                  <h2>{item.title}</h2>
                </div>
                <strong>{item.price}</strong>
                <ul>
                  {packageIncludes.map((feature) => (
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
          <div className="fitpass-logo-placeholder" aria-label="FitPass ლოგოს ადგილი">
            <img src={fitpassLogoSrc} alt="FitPass ლოგო" />
          </div>

          <div>
            <p className="eyebrow">ხელმისაწვდომი ვარჯიში</p>
            <h2>დარბაზი იღებს FitPass-ს</h2>
            <p>
              Pro fitness Digomi ხელმისაწვდომია FitPass-ის მომხმარებლებისთვისაც.
            </p>
            <a className="button primary fitpass-link" href="https://fitpass.ge/%E1%83%9D%E1%83%91%E1%83%98%E1%83%94%E1%83%A5%E1%83%A2%E1%83%94%E1%83%91%E1%83%98/pro-fitness-5" {...externalLinkProps}>
              FitPass-ზე გადასვლა
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
