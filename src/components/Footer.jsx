import { Link } from 'react-router-dom';
import { externalLinkProps, gymData } from '../data/gymData.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="footer-brand" to="/">
            {gymData.name}
          </Link>
          <p>{gymData.address}</p>
          <p>{gymData.landmark}თან ახლოს</p>
        </div>

        <div>
          <h2>სამუშაო დრო</h2>
          <p>ყოველდღე, 07:30-00:00</p>
          <p>სასურველი არხი: {gymData.preferredContact}</p>
        </div>

        <div>
          <h2>ბმულები</h2>
          <div className="footer-links">
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
      </div>
    </footer>
  );
}
