import { externalLinkProps, gymData } from '../data/gymData.js';

export default function ContactCards() {
  return (
    <div className="contact-card-grid" aria-label="საკონტაქტო გზები">
      <article className="contact-card">
        <span>ტელეფონი</span>
        <h2>დარეკვა</h2>
        {gymData.phones.map((phone) => (
          <a key={phone.href} href={phone.href}>
            {phone.label}
          </a>
        ))}
      </article>

      <article className="contact-card">
        <span>მისამართი</span>
        <h2>{gymData.landmark}</h2>
        <p>{gymData.address}</p>
        <a href={gymData.googleMaps} {...externalLinkProps}>
          რუკაზე ნახვა
        </a>
      </article>

      <article className="contact-card">
        <span>სოციალური ქსელები</span>
        <h2>სიახლეები</h2>
        <a href={gymData.instagram.href} {...externalLinkProps}>
          {gymData.instagram.label}
        </a>
        <a href={gymData.facebook.href} {...externalLinkProps}>
          ფეისბუქ გვერდი
        </a>
      </article>
    </div>
  );
}
