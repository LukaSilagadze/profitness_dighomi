import ContactCards from '../components/ContactCards.jsx';
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
        <div className="container contact-layout">
          <div>
            <ContactCards />

            <div className="contact-details">
              <h2>დეტალები</h2>
              <p>
                <strong>მისამართი:</strong> {gymData.address}
              </p>
              <p>
                <strong>ორიენტირი:</strong> {gymData.landmark}
              </p>
              <p>
                <strong>ელფოსტა:</strong>{' '}
                <a href={`mailto:${gymData.email}`}>{gymData.email}</a>
              </p>
              <p>
                <strong>ინსტაგრამი:</strong>{' '}
                <a href={gymData.instagram.href} {...externalLinkProps}>
                  {gymData.instagram.label}, {gymData.instagram.followers} გამომწერი
                </a>
              </p>
              <p>
                <strong>ფეისბუქი:</strong>{' '}
                <a href={gymData.facebook.href} {...externalLinkProps}>
                  {gymData.facebook.followers} გამომწერი
                </a>
              </p>
              <a className="button secondary" href={gymData.googleMaps} {...externalLinkProps}>
                რუკაზე ნახვა
              </a>
            </div>
          </div>

          <aside className="hours-panel" aria-label="სამუშაო საათები">
            <h2>სამუშაო საათები</h2>
            <table>
              <tbody>
                {gymData.hours.map((item) => (
                  <tr key={item.day}>
                    <th scope="row">{item.day}</th>
                    <td>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </aside>
        </div>
      </section>
    </>
  );
}
