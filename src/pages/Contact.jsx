import SectionHeader from '../components/SectionHeader.jsx';
import { externalLinkProps, gymData } from '../data/gymData.js';

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeader eyebrow="კონტაქტი" title="მოდი გუდვილ დიღომთან ახლოს">
            დაგვირეკე, გადაამოწმე დეტალები და დაგეგმე პირველი ან შემდეგი ვარჯიში მშვიდ გარემოში.
          </SectionHeader>
        </div>
      </section>

      <section className="section">
        <div className="container contact-map-layout">
          <div className="contact-info-panel" aria-label="საკონტაქტო ინფორმაცია">
            <section className="contact-info-group">
              <h2>ტელეფონი</h2>
              {gymData.phones.map((phone) => (
                <a key={phone.href} href={phone.href}>
                  {phone.label}
                </a>
              ))}
            </section>

            <section className="contact-info-group">
              <h2>ელ-ფოსტა</h2>
              <a href={`mailto:${gymData.email}`}>{gymData.email}</a>
            </section>

            <section className="contact-info-group">
              <h2>მისამართი</h2>
              <p>{gymData.address}</p>
              <p>{gymData.landmark}თან ახლოს</p>
            </section>

            <section className="contact-info-group">
              <h2>სამუშაო საათები</h2>
              <p>ყოველდღე: 07:30 - 00:00</p>
            </section>

            <div className="contact-social-actions" aria-label="სოციალური ქსელები">
              <a href={gymData.instagram.href} {...externalLinkProps}>
                ინსტაგრამი
              </a>
              <a href={gymData.facebook.href} {...externalLinkProps}>
                ფეისბუქი
              </a>
              <a href={gymData.googleMaps} {...externalLinkProps}>
                რუკა
              </a>
            </div>
          </div>

          <div className="contact-map-panel">
            <iframe
              title="Pro fitness Digomi რუკა"
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
