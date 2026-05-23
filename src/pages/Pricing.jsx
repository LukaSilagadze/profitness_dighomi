import SectionHeader from '../components/SectionHeader.jsx';
import { gymData } from '../data/gymData.js';

export default function Pricing() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeader eyebrow="ფასები" title="ფასები გადაამოწმეთ ტელეფონით">
            ვებსაიტზე არ არის მითითებული დაუდასტურებელი ტარიფები. დარეკეთ დარბაზში და მიიღეთ
            მიმდინარე პირობები პირდაპირ ადმინისტრაციისგან.
          </SectionHeader>
        </div>
      </section>

      <section className="section">
        <div className="container pricing-layout">
          <div className="pricing-panel">
            <p className="eyebrow">აქტუალური პირობები</p>
            <h2>არ ვიგონებთ ფასებს</h2>
            <p>
              ფასები, აბონემენტები და შესაძლო აქციები შეიძლება იცვლებოდეს. ზუსტი ინფორმაციისთვის
              გამოიყენეთ ტელეფონი, რადგან ეს არის სასურველი საკონტაქტო არხი.
            </p>
            <div className="phone-actions">
              {gymData.phones.map((phone) => (
                <a className="button primary" key={phone.href} href={phone.href}>
                  {phone.label}
                </a>
              ))}
            </div>
          </div>

          <aside className="fitpass-panel" aria-label="FitPass ინფორმაცია">
            <span>FitPass</span>
            <h2>მიიღება</h2>
            <p>
              FitPass-ის გამოყენება შესაძლებელია. ვიზიტამდე დარეკეთ და გადაამოწმეთ მოქმედი
              პირობები.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
